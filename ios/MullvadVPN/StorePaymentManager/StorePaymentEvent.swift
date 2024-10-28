//
//  StorePaymentEvent.swift
//  MullvadVPN
//
//  Created by pronebird on 03/09/2021.
//  Copyright © 2021 Mullvad VPN AB. All rights reserved.
//

import Foundation
import MullvadREST
import StoreKit

/// The payment event received by observers implementing ``StorePaymentObserver``.
enum StorePaymentEvent {
    /// The payment is successfully completed.
    case finished(StorePaymentCompletion)

    /// Failure to complete the payment.
    case failure(StorePaymentFailure)

//    /// An instance of `SKPayment` held in the associated value.
//    var payment: SKPayment {
//        switch self {
//        case let .finished(completion):
//            return completion.transaction.payment
//        case let .failure(failure):
//            return SKPayment()
//        }
//    }
}

/// Successful payment metadata.
struct StorePaymentCompletion {
    /// Transaction object.
    let transaction: Transaction

    /// The server response received after uploading the AppStore receipt.
    let serverResponse: REST.CreateApplePaymentResponse
}

/// Failed payment metadata.
struct StorePaymentFailure {
    /// Transaction object, if available.
    /// May not be available due to account validation failure.
    let transaction: Transaction?

    /// The payment object associated with payment request.
    //    let payment: SKPayment

//    /// The account number to credit.
//    /// May not be available if the payment manager couldn't establish the association between the payment and account number.
//    /// Typically in such case, the error would be set to ``StorePaymentManagerError/noAccountSet``.
//    let accountNumber: String?

    /// The payment manager error.
    let error: StorePaymentManagerError
}
