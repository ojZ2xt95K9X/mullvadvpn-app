//
//  SettingsMultihopView.swift
//  MullvadVPN
//
//  Created by Andrew Bulhak on 2024-09-23.
//  Copyright © 2024 Mullvad VPN AB. All rights reserved.
//

import SwiftUI

struct SettingsInfoViewModel {

}

struct SettingsMultihopView: View {
    @State private var enabled: Bool = true

    var didToggleEnabled: ((Bool) -> Void)?

    var body: some View {
        VStack(spacing: 16) {
            TabView {
                SettingsInfoView()
            }.tabViewStyle(.page)

            SwitchRowView(
                enabled: enabled,
                text: NSLocalizedString(
                "SETTINGS_SWITCH_MULTIHOP",
                    tableName: "Settings",
                    value: "Enable",
                    comment: ""
                ),
                didToggle: didToggleEnabled
            )

            Spacer()
        }
        .background(Color(.secondaryColor))
        .foregroundColor(Color(.primaryTextColor))
    }
}

#Preview {
    SettingsMultihopView()
}

struct SwitchRowView: View {
    @State private var enabled: Bool
    let text: String
    let didToggle: ((Bool) -> Void)?

    init(enabled: Bool, text: String, didToggle: ((Bool) -> Void)? = nil) {
        self.enabled = enabled
        self.text = text
        self.didToggle = didToggle
    }

    var body: some View {
        HStack {
            Toggle(isOn: $enabled, label: {
                Text(text)
            }).onChange(of: enabled, perform: { enabled in
                didToggle?(enabled)
            })
            .font(.system(size: 17, weight: .semibold))
            .accessibilityIdentifier(AccessibilityIdentifier.multihopSwitch.rawValue)
        }
        .padding(EdgeInsets(UIMetrics.SettingsCell.layoutMargins))
        .background(Color(.primaryColor))
        .foregroundColor(Color(.primaryTextColor))
    }
}

#Preview {
    SwitchRowView(enabled: true, text: "Enable")
}

struct SettingsInfoView: View {
    let viewModel: SettingsInfoViewModel

    var body: some View {
        VStack(alignment: .leading, spacing: 16) {
            Image(.multihop)
                .resizable()
                .aspectRatio(contentMode: .fit)
            Text(
"""
Multihop routes your traffic into one WireGuard server and out another, making it \
harder to trace. This results in increased latency but increases anonymity online.
"""
            )
            .opacity(0.6)
        }
        .padding(EdgeInsets(top: 24, leading: 24, bottom: 0, trailing: 24))
        VStack(alignment: .leading, spacing: 16) {
            Image(.multihop)
                .resizable()
                .aspectRatio(contentMode: .fit)
            Text(
"""
Multihop routes your traffic into one WireGuard server and out another, making it \
harder to trace. This results in increased latency but increases anonymity online.
"""
            )
            .opacity(0.6)
        }
        .padding(EdgeInsets(top: 24, leading: 24, bottom: 0, trailing: 24))
    }
}
