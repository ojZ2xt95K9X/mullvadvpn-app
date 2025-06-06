//
//  AppMessageHandler.swift
//  PacketTunnel
//
//  Created by pronebird on 19/09/2023.
//  Copyright © 2025 Mullvad VPN AB. All rights reserved.
//

import Foundation
import MullvadLogging
import MullvadREST

/**
 Actor handling packet tunnel IPC (app) messages and patching them through to the right facility.
 */
public struct AppMessageHandler {
    private let logger = Logger(label: "AppMessageHandler")
    private let packetTunnelActor: PacketTunnelActorProtocol
    private let urlRequestProxy: URLRequestProxyProtocol
    private let apiRequestProxy: APIRequestProxyProtocol

    public init(
        packetTunnelActor: PacketTunnelActorProtocol,
        urlRequestProxy: URLRequestProxyProtocol,
        apiRequestProxy: APIRequestProxyProtocol
    ) {
        self.packetTunnelActor = packetTunnelActor
        self.urlRequestProxy = urlRequestProxy
        self.apiRequestProxy = apiRequestProxy
    }

    /**
     Handle app message received via packet tunnel IPC.

     - Message data is expected to be a serialized `TunnelProviderMessage`.
     - Reply is expected to be wrapped in `TunnelProviderReply`.
     - Return `nil` in the event of error or when the call site does not expect any reply.

     Calls to reconnect and notify actor when private key is changed are meant to run in parallel because those tasks are serialized in `TunnelManager` and await
     the acknowledgment from IPC before starting next operation, hence it's critical to return as soon as possible.
     (See `TunnelManager.reconnectTunnel()`, `SendTunnelProviderMessageOperation`)
     */
    public func handleAppMessage(_ messageData: Data) async -> Data? {
        guard let message = decodeMessage(messageData) else { return nil }

        logger.debug("Received app message: \(message)")

        switch message {
        case let .sendURLRequest(request):
            return await encodeReply(urlRequestProxy.sendRequest(request))

        case let .sendAPIRequest(request):
            return await encodeReply(apiRequestProxy.sendRequest(request))

        case let .cancelURLRequest(id):
            urlRequestProxy.cancelRequest(identifier: id)
            return nil

        case let .cancelAPIRequest(id):
            apiRequestProxy.cancelRequest(identifier: id)
            return nil

        case .getTunnelStatus:
            return await encodeReply(packetTunnelActor.observedState)

        case .privateKeyRotation:
            packetTunnelActor.notifyKeyRotation(date: Date())
            return nil

        case let .reconnectTunnel(nextRelay):
            packetTunnelActor.reconnect(to: nextRelay, reconnectReason: ActorReconnectReason.userInitiated)
            // Instead of waiting for the UI process to send another `getTunnelStatus` message, reply immediately that the PacketTunnel is reconnecting
            guard let observedState = await packetTunnelActor.observedState.connectionState else { return nil }
            let reconnectingState = ObservedState.reconnecting(observedState)
            return encodeReply(reconnectingState)
        }
    }

    /// Deserialize `TunnelProviderMessage` or return `nil` on error. Errors are logged but ignored.
    private func decodeMessage(_ data: Data) -> TunnelProviderMessage? {
        do {
            return try TunnelProviderMessage(messageData: data)
        } catch {
            logger.error(error: error, message: "Failed to decode the app message.")
            return nil
        }
    }

    /// Encode `TunnelProviderReply` or return `nil` on error. Errors are logged but ignored.
    private func encodeReply<T: Codable>(_ reply: T) -> Data? {
        do {
            return try TunnelProviderReply(reply).encode()
        } catch {
            logger.error(error: error, message: "Failed to encode the app message reply.")
            return nil
        }
    }
}
