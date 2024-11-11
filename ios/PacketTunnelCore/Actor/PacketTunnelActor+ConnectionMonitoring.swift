//
//  Actor+ConnectionMonitoring.swift
//  PacketTunnelCore
//
//  Created by pronebird on 26/09/2023.
//  Copyright © 2023 Mullvad VPN AB. All rights reserved.
//

import Foundation
import Logging
import Network

extension PacketTunnelActor {
    /// Assign a closure receiving tunnel monitor events.
    func setTunnelMonitorEventHandler() {
        tunnelMonitor.onEvent = { [weak self] event in
            /// Dispatch tunnel monitor events via command channel to guarantee the order of execution.
            self?.eventChannel.send(.monitorEvent(event))
        }
    }

    /**
     Handle tunnel monitor event.

     Invoked by comand consumer.

     - Important: this method will suspend and must only be invoked as a part of channel consumer to guarantee transactional execution.
     */
    func handleMonitorEvent(_ event: TunnelMonitorEvent) async {
        switch event {
        case .connectionEstablished:
            onEstablishConnection()

        case .connectionLost:
            await onHandleConnectionRecovery()
        }
    }

    /// Reset connection attempt counter and update actor state to `connected` state once connection is established.
    private func onEstablishConnection() {
        switch state {
        case var .connecting(connState), var .reconnecting(connState):
            // Reset connection attempt once successfully connected.
            connState.connectionAttemptCount = 0
            state = .connected(connState)

        case .initial, .connected, .disconnecting, .disconnected, .error, .negotiatingEphemeralPeer:
            break
        }
    }

    /// Tell the tunnel to reconnect providing the correct reason to ensure that the attempt counter is incremented before reconnect.
    private func onHandleConnectionRecovery() async {
        switch state {
        case .connecting, .reconnecting, .connected:
            eventChannel.send(.reconnect(.random, reason: .connectionLoss))

        case .initial, .disconnected, .disconnecting, .error, .negotiatingEphemeralPeer:
            break
        }
    }
}

public class TcpSender {
    private let conn: NWConnection
    private var timer: Timer?
    private let queue = DispatchQueue(label: "lol, lmau", qos: .userInteractive)
    private let logger: Logger
    

    init(interface: NWInterface?, logger: Logger) {
        self.logger = logger

        let params = NWParameters.tcp
        params.requiredInterface = interface

        conn = NWConnection(host: "10.64.0.1", port: 1337, using: params)
    }

    public func start() {
        conn.stateUpdateHandler = { [weak self] newState in
            guard let self else { return }
            switch newState {
            case .preparing:
                logger.error("XXXX preparing")
            case .cancelled:
                logger.error("XXXX cancelled")
            case let .failed(failure):
                logger.error("XXXX failed: \(failure)")
            case .ready:
                logger.error("XXXX ready")
                self.sendData()
            case let .waiting(waitError):
                logger.error("XXXX Waiting \(waitError)")
            case .setup:
                logger.error("XXXX setup")
            @unknown default:
                break
            }
        }

        conn.start(queue: queue)

        timer = Timer.scheduledTimer(withTimeInterval: 1.0, repeats: true) { [weak self] _ in
            guard case .ready = self?.conn.state else { return }
            self?.sendData()
        }
    }

    private func sendData() {
        let data = Data("hello sterver".utf8)
        conn.receive(
            minimumIncompleteLength: 0,
            maximumLength: 1024,
            completion: { [weak self] data, context, isComplete, error in

                if let error {
                    self?.logger.debug("RECEIVE ERROR: \(error)")
                } else {
                    self?.logger.debug("RECEIVED SOMETHING")
                }
            }
        )
        conn.send(content: data, completion: .contentProcessed { error in
            if let error = error {
                self.logger.error("Error sending data: \(error)")
            }
        })
    }

    public func cancel() {
        timer?.invalidate()
        conn.cancel()
    }

    deinit {
        timer?.invalidate()
        conn.cancel()
    }
}
