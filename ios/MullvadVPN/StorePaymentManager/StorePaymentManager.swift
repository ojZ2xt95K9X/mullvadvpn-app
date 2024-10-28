//
//  StorePaymentManager.swift
//  MullvadVPN
//
//  Created by pronebird on 10/03/2020.
//  Copyright © 2020 Mullvad VPN AB. All rights reserved.
//

import MullvadLogging
import MullvadREST
import MullvadTypes
import Operations
import StoreKit
import UIKit

/// Manager responsible for handling AppStore payments and passing StoreKit receipts to the backend.
///
/// - Warning: only interact with this object on the main queue.
final class StorePaymentManager: NSObject {
    private enum OperationCategory {
        static let sendStoreReceipt = "StorePaymentManager.sendStoreReceipt"
        static let productsRequest = "StorePaymentManager.productsRequest"
    }

    private let logger = Logger(label: "StorePaymentManager")

    private let operationQueue: OperationQueue = {
        let queue = AsyncOperationQueue()
        queue.name = "StorePaymentManagerQueue"
        return queue
    }()

    private let backgroundTaskProvider: BackgroundTaskProvider
    private let apiProxy: APIQuerying
    private let accountsProxy: RESTAccountHandling
    private var observerList = ObserverList<StorePaymentObserver>()

    /// Payment manager's delegate.
    weak var delegate: StorePaymentManagerDelegate?

    /// Designated initializer
    ///
    /// - Parameters:
    ///   - backgroundTaskProvider: the background task provider.
    ///   - queue: the payment queue. Typically `SKPaymentQueue.default()`.
    ///   - apiProxy: the object implement `APIQuerying`
    ///   - accountsProxy: the object implementing `RESTAccountHandling`.
    ///   - transactionLog: an instance of transaction log. Typically ``StoreTransactionLog/default``.
    init(
        backgroundTaskProvider: BackgroundTaskProvider,
        apiProxy: APIQuerying,
        accountsProxy: RESTAccountHandling
    ) {
        self.backgroundTaskProvider = backgroundTaskProvider
        self.apiProxy = apiProxy
        self.accountsProxy = accountsProxy
    }

    func start() {
        logger.debug("Listen for transactions.")
        _ = listenForTransactions()
    }

    // MARK: - Payment observation

    /// Add payment observer
    /// - Parameter observer: an observer object.
    func addPaymentObserver(_ observer: StorePaymentObserver) {
        observerList.append(observer)
    }

    /// Remove payment observer
    /// - Parameter observer: an observer object.
    func removePaymentObserver(_ observer: StorePaymentObserver) {
        observerList.remove(observer)
    }

    // MARK: - Products and payments

    /// Add payment and associate it with the account number.
    ///
    /// Validates the user account with backend before adding the payment to the queue.
    ///
    /// - Parameters:
    ///   - payment: an intance of `SKPayment`.
    ///   - accountNumber: the account number to credit.
    func addPayment(_ product: Product, for accountNumber: String)  {
        logger.debug("Validating account before the purchase.")

        Task {
            // Validate account token before adding new payment to the queue.
            let error = await withCheckedContinuation { continuation in
                validateAccount(accountNumber: accountNumber) { error in
                    continuation.resume(returning: error)
                }
            }

            guard error == nil else {
                self.logger.error("Failed to validate the account. Error: \n\(String(describing: error))")
                return
            }

            self.logger.debug("Starting purchase flow.")
            let appAccountToken = UUID()
            print(appAccountToken)
            let purchaseResult = try await product.purchase(options: [.appAccountToken(appAccountToken)])

            switch purchaseResult {
            case .success(let verificationResult):
                let transaction = try checkVerification(verificationResult)
                print(transaction.appAccountToken)
            case .pending, .userCancelled:
                break
            default:
                break
            }
        }
    }

    /// Restore purchases by sending the AppStore receipt to backend.
    ///
    /// - Parameters:
    ///   - accountNumber: the account number to credit.
    ///   - completionHandler: completion handler invoked on the main queue.
    /// - Returns: the request cancellation token.
//    func restorePurchases(
//        completionHandler: @escaping (Result<REST.CreateApplePaymentResponse, Error>) -> Void
//    ) -> Cancellable {
//        logger.debug("Restore purchases.")
//
////        AppStore.sync()
//    }

    // MARK: - Private methods

    /// Validate account number.
    ///
    /// - Parameters:
    ///   - accountNumber: the account number
    ///   - completionHandler: completion handler invoked on main queue. The completion block Receives `nil` upon success, otherwise an error.
    private func validateAccount(
        accountNumber: String,
        completionHandler: @escaping (StorePaymentManagerError?) -> Void
    ) {
        let accountOperation = ResultBlockOperation<Account>(dispatchQueue: .main) { finish in
            self.accountsProxy.getAccountData(accountNumber: accountNumber).execute(
                retryStrategy: .default,
                completionHandler: finish
            )
        }

        accountOperation.addObserver(BackgroundObserver(
            backgroundTaskProvider: backgroundTaskProvider,
            name: "Validate account number",
            cancelUponExpiration: false
        ))

        accountOperation.completionQueue = .main
        accountOperation.completionHandler = { result in
            completionHandler(result.error.map { StorePaymentManagerError.validateAccount($0) })
        }

        operationQueue.addOperation(accountOperation)
    }

    private func listenForTransactions() -> Task<Void, Error> {
        return Task.detached { [weak self] in
            // Iterate through any transactions that don't come from a direct call to `purchase()`.
            for await result in Transaction.updates {
                let transaction = try self?.checkVerification(result)
                // TODO: Update purchases.

                await transaction?.finish()
            }
        }
    }

    private func checkVerification<T>(_ result: VerificationResult<T>) throws -> T {
        switch  result {
        case .verified(let transaction):
            return transaction
        case .unverified(_, let verificationError):
            logger.error("Could not verify transaction: \(verificationError.localizedDescription)")
            throw verificationError
        }
    }

    /// Send the AppStore receipt stored on device to the backend.
    ///
    /// - Parameters:
    ///   - accountNumber: the account number to credit.
    ///   - forceRefresh: indicates whether the receipt should be downloaded from AppStore even when it's present on device.
    ///   - completionHandler: a completion handler invoked on main queue.
    /// - Returns: the request cancellation token.
    private func sendStoreReceipt(
        accountNumber: String,
        forceRefresh: Bool,
        completionHandler: @escaping (Result<REST.CreateApplePaymentResponse, Error>) -> Void
    ) -> Cancellable {
        let operation = SendStoreReceiptOperation(
            apiProxy: apiProxy,
            accountNumber: accountNumber,
            forceRefresh: forceRefresh,
            receiptProperties: nil,
            completionHandler: completionHandler
        )

        operation.addObserver(
            BackgroundObserver(
                backgroundTaskProvider: backgroundTaskProvider,
                name: "Send AppStore receipt",
                cancelUponExpiration: true
            )
        )

        operation.addCondition(MutuallyExclusive(category: OperationCategory.sendStoreReceipt))

        operationQueue.addOperation(operation)

        return operation
    }
}
