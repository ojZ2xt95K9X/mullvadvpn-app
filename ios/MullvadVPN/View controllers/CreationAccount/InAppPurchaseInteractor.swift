//
//  InAppPurchaseInteractor.swift
//  MullvadVPN
//
//  Created by Mojgan on 2023-07-21.
//  Copyright © 2023 Mullvad VPN AB. All rights reserved.
//

import Foundation
import StoreKit

protocol InAppPurchaseViewControllerDelegate: AnyObject {
    func didBeginPayment()
    func didEndPayment()
}

class InAppPurchaseInteractor {
    let storePaymentManager: StorePaymentManager
    var didFinishPayment: ((InAppPurchaseInteractor, StorePaymentEvent) -> Void)?
    weak var viewControllerDelegate: InAppPurchaseViewControllerDelegate?

    private var paymentObserver: StorePaymentObserver?

    init(storePaymentManager: StorePaymentManager) {
        self.storePaymentManager = storePaymentManager
    }

    func purchase(accountNumber: String, product: Product) {
        storePaymentManager.addPayment(product, for: accountNumber)
    }
}
