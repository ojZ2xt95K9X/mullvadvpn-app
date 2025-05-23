//
//  VPNSettingsViewModel.swift
//  MullvadVPN
//
//  Created by pronebird on 11/10/2021.
//  Copyright © 2025 Mullvad VPN AB. All rights reserved.
//

import MullvadSettings
import MullvadTypes
import UIKit

enum CustomDNSPrecondition {
    /// Custom DNS can be enabled
    case satisfied

    /// Custom DNS cannot be enabled as it would conflict with other settings.
    case conflictsWithOtherSettings

    /// No valid DNS server entries.
    case emptyDNSDomains

    /// Returns localized description explaining how to enable Custom DNS.
    func localizedDescription(isEditing: Bool) -> String? {
        attributedLocalizedDescription(
            isEditing: isEditing,
            preferredFont: UIFont.systemFont(ofSize: UIFont.systemFontSize)
        )?.string
    }

    /// Returns attributed localized description explaining how to enable Custom DNS.
    func attributedLocalizedDescription(
        isEditing: Bool,
        preferredFont: UIFont
    ) -> NSAttributedString? {
        switch self {
        case .satisfied:
            return nil

        case .emptyDNSDomains:
            if isEditing {
                return NSAttributedString(
                    string: NSLocalizedString(
                        "CUSTOM_DNS_NO_DNS_ENTRIES_EDITING_ON_FOOTNOTE",
                        tableName: "VPNSettings",
                        value: "To enable this setting, add at least one server.",
                        comment: "Foot note displayed if there are no DNS entries and table view is in editing mode."
                    ),
                    attributes: [.font: preferredFont]
                )
            } else {
                return NSAttributedString(
                    markdownString: NSLocalizedString(
                        "CUSTOM_DNS_NO_DNS_ENTRIES_EDITING_OFF_FOOTNOTE",
                        tableName: "VPNSettings",
                        value: "Tap **Edit** to add at least one DNS server.",
                        comment:
                        "Foot note displayed if there are no DNS entries, but table view is not in editing mode."
                    ),
                    options: MarkdownStylingOptions(font: preferredFont)
                )
            }

        case .conflictsWithOtherSettings:
            return NSAttributedString(
                string: NSLocalizedString(
                    "CUSTOM_DNS_DISABLE_CONTENT_BLOCKERS_FOOTNOTE",
                    tableName: "VPNSettings",
                    value: "Disable all content blockers to activate this setting.",
                    comment: """
                    Foot note displayed when custom DNS cannot be enabled, because content blockers should be \
                    disabled first.
                    """
                ),
                attributes: [.font: preferredFont]
            )
        }
    }
}

struct DNSServerEntry: Equatable, Hashable {
    var identifier = UUID()
    var address: String
}

struct VPNSettingsViewModel: Equatable {
    private(set) var blockAll: Bool
    private(set) var blockAdvertising: Bool
    private(set) var blockTracking: Bool
    private(set) var blockMalware: Bool
    private(set) var blockAdultContent: Bool
    private(set) var blockGambling: Bool
    private(set) var blockSocialMedia: Bool
    private(set) var enableCustomDNS: Bool
    private(set) var wireGuardPort: UInt16?
    var customDNSDomains: [DNSServerEntry]
    var availableWireGuardPortRanges: [[UInt16]] = []

    private(set) var obfuscationState: WireGuardObfuscationState
    private(set) var obfuscationUpdOverTcpPort: WireGuardObfuscationUdpOverTcpPort
    private(set) var obfuscationShadowsocksPort: WireGuardObfuscationShadowsocksPort

    private(set) var quantumResistance: TunnelQuantumResistance
    private(set) var multihopState: MultihopState

    private(set) var includeAllNetworks: Bool
    private(set) var localNetworkSharing: Bool

    static let defaultWireGuardPorts: [UInt16] = [51820, 53]

    var enabledBlockersCount: Int {
        [
            blockAdvertising,
            blockTracking,
            blockMalware,
            blockAdultContent,
            blockGambling,
            blockSocialMedia,
        ].filter { $0 }.count
    }

    var allBlockersEnabled: Bool {
        enabledBlockersCount == CustomDNSDataSource.Item.contentBlockers.filter { $0 != .blockAll }.count
    }

    mutating func setBlockAll(_ newValue: Bool) {
        blockAll = newValue
        blockAdvertising = newValue
        blockTracking = newValue
        blockMalware = newValue
        blockAdultContent = newValue
        blockGambling = newValue
        blockSocialMedia = newValue
        enableCustomDNS = false
    }

    mutating func setBlockAdvertising(_ newValue: Bool) {
        blockAdvertising = newValue
        blockAll = allBlockersEnabled
        enableCustomDNS = false
    }

    mutating func setBlockTracking(_ newValue: Bool) {
        blockTracking = newValue
        blockAll = allBlockersEnabled
        enableCustomDNS = false
    }

    mutating func setBlockMalware(_ newValue: Bool) {
        blockMalware = newValue
        blockAll = allBlockersEnabled
        enableCustomDNS = false
    }

    mutating func setBlockAdultContent(_ newValue: Bool) {
        blockAdultContent = newValue
        blockAll = allBlockersEnabled
        enableCustomDNS = false
    }

    mutating func setBlockGambling(_ newValue: Bool) {
        blockGambling = newValue
        blockAll = allBlockersEnabled
        enableCustomDNS = false
    }

    mutating func setBlockSocialMedia(_ newValue: Bool) {
        blockSocialMedia = newValue
        blockAll = allBlockersEnabled
        enableCustomDNS = false
    }

    mutating func setEnableCustomDNS(_ newValue: Bool) {
        enableCustomDNS = newValue
    }

    mutating func setWireGuardPort(_ newValue: UInt16?) {
        wireGuardPort = newValue
    }

    mutating func setWireGuardObfuscationState(_ newState: WireGuardObfuscationState) {
        obfuscationState = newState
    }

    mutating func setWireGuardObfuscationShadowsockPort(_ newPort: WireGuardObfuscationShadowsocksPort) {
        obfuscationShadowsocksPort = newPort
    }

    mutating func setWireGuardObfuscationUdpOverTcpPort(_ newPort: WireGuardObfuscationUdpOverTcpPort) {
        obfuscationUpdOverTcpPort = newPort
    }

    mutating func setQuantumResistance(_ newState: TunnelQuantumResistance) {
        quantumResistance = newState
    }

    mutating func setMultihop(_ newState: MultihopState) {
        multihopState = newState
    }

    mutating func setIncludeAllNetworks(_ newState: Bool) {
        includeAllNetworks = newState
    }

    mutating func setLocalNetworkSharing(_ newState: Bool) {
        localNetworkSharing = newState
    }

    /// Precondition for enabling Custom DNS.
    var customDNSPrecondition: CustomDNSPrecondition {
        if blockAdvertising || blockTracking || blockMalware ||
            blockAdultContent || blockGambling || blockSocialMedia {
            return .conflictsWithOtherSettings
        } else {
            let hasValidDNSDomains = customDNSDomains.contains { entry in
                AnyIPAddress(entry.address) != nil
            }

            if hasValidDNSDomains {
                return .satisfied
            } else {
                return .emptyDNSDomains
            }
        }
    }

    /// Effective state of the custom DNS setting.
    var effectiveEnableCustomDNS: Bool {
        customDNSPrecondition == .satisfied && enableCustomDNS
    }

    var customWireGuardPort: UInt16? {
        wireGuardPort.flatMap { port in
            Self.defaultWireGuardPorts.contains(port) ? nil : port
        }
    }

    init(from tunnelSettings: LatestTunnelSettings = LatestTunnelSettings()) {
        let dnsSettings = tunnelSettings.dnsSettings

        blockAdvertising = dnsSettings.blockingOptions.contains(.blockAdvertising)
        blockTracking = dnsSettings.blockingOptions.contains(.blockTracking)
        blockMalware = dnsSettings.blockingOptions.contains(.blockMalware)
        blockAdultContent = dnsSettings.blockingOptions.contains(.blockAdultContent)
        blockGambling = dnsSettings.blockingOptions.contains(.blockGambling)
        blockSocialMedia = dnsSettings.blockingOptions.contains(.blockSocialMedia)
        blockAll = blockAdvertising
            && blockTracking
            && blockMalware
            && blockAdultContent
            && blockGambling
            && blockSocialMedia

        enableCustomDNS = dnsSettings.enableCustomDNS
        customDNSDomains = dnsSettings.customDNSDomains.map { ipAddress in
            DNSServerEntry(identifier: UUID(), address: "\(ipAddress)")
        }
        wireGuardPort = tunnelSettings.relayConstraints.port.value

        obfuscationState = tunnelSettings.wireGuardObfuscation.state
        obfuscationUpdOverTcpPort = tunnelSettings.wireGuardObfuscation.udpOverTcpPort
        obfuscationShadowsocksPort = tunnelSettings.wireGuardObfuscation.shadowsocksPort

        quantumResistance = tunnelSettings.tunnelQuantumResistance
        multihopState = tunnelSettings.tunnelMultihopState

        includeAllNetworks = tunnelSettings.includeAllNetworks
        localNetworkSharing = tunnelSettings.localNetworkSharing
    }

    /// Produce merged view model, keeping entry `identifier` for matching DNS entries and
    /// retaining available Wireguard port ranges.
    func merged(_ other: VPNSettingsViewModel) -> VPNSettingsViewModel {
        var mergedViewModel = other
        mergedViewModel.customDNSDomains = merge(customDNSDomains, with: other.customDNSDomains)
        mergedViewModel.availableWireGuardPortRanges = availableWireGuardPortRanges

        return mergedViewModel
    }

    /// Sanitize custom DNS entries.
    mutating func sanitizeCustomDNSEntries() {
        // Sanitize DNS domains, drop invalid entries.
        customDNSDomains = customDNSDomains.compactMap { entry in
            if let canonicalAddress = AnyIPAddress(entry.address) {
                var newEntry = entry
                newEntry.address = "\(canonicalAddress)"
                return newEntry
            } else {
                return nil
            }
        }

        // Toggle off custom DNS when no domains specified.
        if customDNSDomains.isEmpty {
            enableCustomDNS = false
        }
    }

    func dnsEntry(entryIdentifier: UUID) -> DNSServerEntry? {
        customDNSDomains.first { entry in
            entry.identifier == entryIdentifier
        }
    }

    /// Returns an index of entry in `customDNSDomains`, otherwise `nil`.
    func indexOfDNSEntry(entryIdentifier: UUID) -> Int? {
        customDNSDomains.firstIndex { entry in
            entry.identifier == entryIdentifier
        }
    }

    /// Update the address for the DNS entry with the given UUID.
    mutating func updateDNSEntry(entryIdentifier: UUID, newAddress: String) {
        guard let index = indexOfDNSEntry(entryIdentifier: entryIdentifier) else { return }

        var entry = customDNSDomains[index]
        entry.address = newAddress
        customDNSDomains[index] = entry
    }

    /// Converts view model into `DNSSettings`.
    func asDNSSettings() -> DNSSettings {
        var blockingOptions = DNSBlockingOptions()
        if blockAdvertising {
            blockingOptions.insert(.blockAdvertising)
        }

        if blockTracking {
            blockingOptions.insert(.blockTracking)
        }

        if blockMalware {
            blockingOptions.insert(.blockMalware)
        }

        if blockAdultContent {
            blockingOptions.insert(.blockAdultContent)
        }

        if blockGambling {
            blockingOptions.insert(.blockGambling)
        }

        if blockSocialMedia {
            blockingOptions.insert(.blockSocialMedia)
        }

        var dnsSettings = DNSSettings()
        dnsSettings.blockingOptions = blockingOptions
        dnsSettings.enableCustomDNS = enableCustomDNS
        dnsSettings.customDNSDomains = customDNSDomains.compactMap { entry in
            AnyIPAddress(entry.address)
        }
        return dnsSettings
    }

    /// Returns true if the given string is empty or a valid IP address.
    func isDNSDomainUserInputValid(_ string: String) -> Bool {
        string.isEmpty || AnyIPAddress(string) != nil
    }

    /// Returns true if the given port is in within the supported ranges.
    func isPortWithinValidWireGuardRanges(_ port: UInt16) -> Bool {
        availableWireGuardPortRanges.contains { range in
            if let minPort = range.first, let maxPort = range.last {
                return (minPort ... maxPort).contains(port)
            }

            return false
        }
    }

    /// Replaces all old domains with new, keeping only those that share the same id and updating their content.
    private func merge(_ oldDomains: [DNSServerEntry], with newDomains: [DNSServerEntry]) -> [DNSServerEntry] {
        var oldDomains = oldDomains

        return newDomains.map { otherEntry in
            let sameEntryIndex = oldDomains.firstIndex { entry in
                entry.address == otherEntry.address
            }

            if let sameEntryIndex {
                let sourceEntry = oldDomains[sameEntryIndex]

                oldDomains.remove(at: sameEntryIndex)

                return sourceEntry
            } else {
                return otherEntry
            }
        }
    }
}
