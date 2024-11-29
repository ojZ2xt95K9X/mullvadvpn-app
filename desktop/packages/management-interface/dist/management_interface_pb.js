// source: management_interface.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.object.extend(proto, google_protobuf_any_pb);
goog.exportSymbol('proto.mullvad_daemon.management_interface.AccessMethod', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.AccessMethod.AccessMethodCase', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.AccessMethod.Bridges', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.AccessMethod.Direct', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.AccessMethod.EncryptedDnsProxy', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.AccessMethodSetting', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.AccountAndDevice', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.AccountData', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.AccountHistory', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.AfterDisconnect', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.ApiAccessMethodSettings', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.AppVersionInfo', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.BridgeEndpointData', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.BridgeSettings', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.BridgeSettings.BridgeType', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.BridgeState', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.BridgeState.State', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.ConnectionConfig', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.ConnectionConfig.ConfigCase', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.CustomDnsOptions', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.CustomList', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.CustomListSettings', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.CustomProxy', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.CustomProxy.ProxyMethodCase', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.CustomRelaySettings', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.DaemonEvent', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.DaemonEvent.EventCase', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.DaitaSettings', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.DefaultDnsOptions', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.Device', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.DeviceEvent', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.DeviceEvent.Cause', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.DeviceList', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.DeviceRemoval', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.DeviceState', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.DeviceState.State', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.DnsOptions', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.DnsOptions.DnsState', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.Endpoint', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.ErrorState', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.ErrorState.AuthFailedError', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.ErrorState.Cause', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError.ErrorType', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.ErrorState.GenerationError', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.ErrorState.InvalidDnsServersError', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.ErrorState.OtherAlwaysOnAppError', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.ExcludedProcess', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.ExcludedProcessList', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.FeatureIndicator', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.FeatureIndicators', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.GeoIpLocation', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.GeographicLocationConstraint', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.IpVersion', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.Location', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.LocationConstraint', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.LocationConstraint.TypeCase', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.NewAccessMethodSetting', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.NormalRelaySettings', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.ObfuscationEndpoint', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.ObfuscationEndpoint.ObfuscationType', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.ObfuscationSettings', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.ObfuscationSettings.SelectedObfuscation', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.OpenVpnEndpoint', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.OpenVpnEndpointData', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.OpenvpnConstraints', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.Ownership', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.PlayPurchase', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.PlayPurchasePaymentToken', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.PortRange', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.ProxyEndpoint', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.ProxyEndpoint.ProxyType', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.PublicKey', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.QuantumResistantState', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.QuantumResistantState.State', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.Relay', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.Relay.RelayType', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.RelayList', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.RelayListCity', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.RelayListCountry', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.RelayOverride', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.RelaySettings', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.RelaySettings.EndpointCase', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.RemoveDeviceEvent', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.Settings', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.Shadowsocks', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.ShadowsocksEndpointData', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.ShadowsocksSettings', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.Socks5Local', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.Socks5Remote', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.SocksAuth', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.SplitTunnelSettings', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.TransportPort', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.TransportProtocol', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.TunnelEndpoint', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.TunnelMetadata', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.TunnelOptions', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.TunnelOptions.GenericOptions', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.TunnelOptions.OpenvpnOptions', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.TunnelState', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.TunnelState.Connected', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.TunnelState.Connecting', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.TunnelState.Disconnected', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.TunnelState.Disconnecting', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.TunnelState.Error', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.TunnelState.StateCase', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.TunnelStateRelayInfo', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.TunnelType', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.UUID', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.Udp2TcpObfuscationSettings', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.VoucherSubmission', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.WireguardConstraints', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.WireguardEndpointData', null, global);
goog.exportSymbol('proto.mullvad_daemon.management_interface.WireguardRelayEndpointData', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.UUID = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.UUID, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.UUID.displayName = 'proto.mullvad_daemon.management_interface.UUID';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.AccountData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.AccountData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.AccountData.displayName = 'proto.mullvad_daemon.management_interface.AccountData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.AccountHistory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.AccountHistory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.AccountHistory.displayName = 'proto.mullvad_daemon.management_interface.AccountHistory';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.VoucherSubmission = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.VoucherSubmission, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.VoucherSubmission.displayName = 'proto.mullvad_daemon.management_interface.VoucherSubmission';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.ErrorState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.ErrorState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.ErrorState.displayName = 'proto.mullvad_daemon.management_interface.ErrorState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError.displayName = 'proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.ErrorState.OtherAlwaysOnAppError = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.ErrorState.OtherAlwaysOnAppError, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.ErrorState.OtherAlwaysOnAppError.displayName = 'proto.mullvad_daemon.management_interface.ErrorState.OtherAlwaysOnAppError';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.ErrorState.InvalidDnsServersError = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mullvad_daemon.management_interface.ErrorState.InvalidDnsServersError.repeatedFields_, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.ErrorState.InvalidDnsServersError, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.ErrorState.InvalidDnsServersError.displayName = 'proto.mullvad_daemon.management_interface.ErrorState.InvalidDnsServersError';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.TunnelState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.mullvad_daemon.management_interface.TunnelState.oneofGroups_);
};
goog.inherits(proto.mullvad_daemon.management_interface.TunnelState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.TunnelState.displayName = 'proto.mullvad_daemon.management_interface.TunnelState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.TunnelState.Disconnected = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.TunnelState.Disconnected, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.TunnelState.Disconnected.displayName = 'proto.mullvad_daemon.management_interface.TunnelState.Disconnected';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.TunnelState.Connecting = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.TunnelState.Connecting, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.TunnelState.Connecting.displayName = 'proto.mullvad_daemon.management_interface.TunnelState.Connecting';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.TunnelState.Connected = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.TunnelState.Connected, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.TunnelState.Connected.displayName = 'proto.mullvad_daemon.management_interface.TunnelState.Connected';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.TunnelState.Disconnecting = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.TunnelState.Disconnecting, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.TunnelState.Disconnecting.displayName = 'proto.mullvad_daemon.management_interface.TunnelState.Disconnecting';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.TunnelState.Error = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.TunnelState.Error, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.TunnelState.Error.displayName = 'proto.mullvad_daemon.management_interface.TunnelState.Error';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.TunnelStateRelayInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.TunnelStateRelayInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.TunnelStateRelayInfo.displayName = 'proto.mullvad_daemon.management_interface.TunnelStateRelayInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.TunnelEndpoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.TunnelEndpoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.TunnelEndpoint.displayName = 'proto.mullvad_daemon.management_interface.TunnelEndpoint';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.FeatureIndicators = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mullvad_daemon.management_interface.FeatureIndicators.repeatedFields_, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.FeatureIndicators, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.FeatureIndicators.displayName = 'proto.mullvad_daemon.management_interface.FeatureIndicators';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.ObfuscationEndpoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.ObfuscationEndpoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.ObfuscationEndpoint.displayName = 'proto.mullvad_daemon.management_interface.ObfuscationEndpoint';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.Endpoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.Endpoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.Endpoint.displayName = 'proto.mullvad_daemon.management_interface.Endpoint';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.ProxyEndpoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.ProxyEndpoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.ProxyEndpoint.displayName = 'proto.mullvad_daemon.management_interface.ProxyEndpoint';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.GeoIpLocation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.GeoIpLocation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.GeoIpLocation.displayName = 'proto.mullvad_daemon.management_interface.GeoIpLocation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.TunnelMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.TunnelMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.TunnelMetadata.displayName = 'proto.mullvad_daemon.management_interface.TunnelMetadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.BridgeSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.BridgeSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.BridgeSettings.displayName = 'proto.mullvad_daemon.management_interface.BridgeSettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints.repeatedFields_, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints.displayName = 'proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.LocationConstraint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.mullvad_daemon.management_interface.LocationConstraint.oneofGroups_);
};
goog.inherits(proto.mullvad_daemon.management_interface.LocationConstraint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.LocationConstraint.displayName = 'proto.mullvad_daemon.management_interface.LocationConstraint';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.GeographicLocationConstraint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.GeographicLocationConstraint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.GeographicLocationConstraint.displayName = 'proto.mullvad_daemon.management_interface.GeographicLocationConstraint';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.BridgeState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.BridgeState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.BridgeState.displayName = 'proto.mullvad_daemon.management_interface.BridgeState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.Udp2TcpObfuscationSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.Udp2TcpObfuscationSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.Udp2TcpObfuscationSettings.displayName = 'proto.mullvad_daemon.management_interface.Udp2TcpObfuscationSettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.ShadowsocksSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.ShadowsocksSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.ShadowsocksSettings.displayName = 'proto.mullvad_daemon.management_interface.ShadowsocksSettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.ObfuscationSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.ObfuscationSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.ObfuscationSettings.displayName = 'proto.mullvad_daemon.management_interface.ObfuscationSettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.CustomList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mullvad_daemon.management_interface.CustomList.repeatedFields_, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.CustomList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.CustomList.displayName = 'proto.mullvad_daemon.management_interface.CustomList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.CustomListSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mullvad_daemon.management_interface.CustomListSettings.repeatedFields_, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.CustomListSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.CustomListSettings.displayName = 'proto.mullvad_daemon.management_interface.CustomListSettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.Socks5Local = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.Socks5Local, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.Socks5Local.displayName = 'proto.mullvad_daemon.management_interface.Socks5Local';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.SocksAuth = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.SocksAuth, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.SocksAuth.displayName = 'proto.mullvad_daemon.management_interface.SocksAuth';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.Socks5Remote = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.Socks5Remote, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.Socks5Remote.displayName = 'proto.mullvad_daemon.management_interface.Socks5Remote';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.Shadowsocks = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.Shadowsocks, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.Shadowsocks.displayName = 'proto.mullvad_daemon.management_interface.Shadowsocks';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.CustomProxy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.mullvad_daemon.management_interface.CustomProxy.oneofGroups_);
};
goog.inherits(proto.mullvad_daemon.management_interface.CustomProxy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.CustomProxy.displayName = 'proto.mullvad_daemon.management_interface.CustomProxy';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.AccessMethod = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.mullvad_daemon.management_interface.AccessMethod.oneofGroups_);
};
goog.inherits(proto.mullvad_daemon.management_interface.AccessMethod, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.AccessMethod.displayName = 'proto.mullvad_daemon.management_interface.AccessMethod';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.AccessMethod.Direct = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.AccessMethod.Direct, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.AccessMethod.Direct.displayName = 'proto.mullvad_daemon.management_interface.AccessMethod.Direct';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.AccessMethod.Bridges = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.AccessMethod.Bridges, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.AccessMethod.Bridges.displayName = 'proto.mullvad_daemon.management_interface.AccessMethod.Bridges';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.AccessMethod.EncryptedDnsProxy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.AccessMethod.EncryptedDnsProxy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.AccessMethod.EncryptedDnsProxy.displayName = 'proto.mullvad_daemon.management_interface.AccessMethod.EncryptedDnsProxy';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.AccessMethodSetting = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.AccessMethodSetting, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.AccessMethodSetting.displayName = 'proto.mullvad_daemon.management_interface.AccessMethodSetting';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.NewAccessMethodSetting = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.NewAccessMethodSetting, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.NewAccessMethodSetting.displayName = 'proto.mullvad_daemon.management_interface.NewAccessMethodSetting';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.ApiAccessMethodSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mullvad_daemon.management_interface.ApiAccessMethodSettings.repeatedFields_, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.ApiAccessMethodSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.ApiAccessMethodSettings.displayName = 'proto.mullvad_daemon.management_interface.ApiAccessMethodSettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.Settings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mullvad_daemon.management_interface.Settings.repeatedFields_, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.Settings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.Settings.displayName = 'proto.mullvad_daemon.management_interface.Settings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.RelayOverride = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.RelayOverride, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.RelayOverride.displayName = 'proto.mullvad_daemon.management_interface.RelayOverride';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.SplitTunnelSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mullvad_daemon.management_interface.SplitTunnelSettings.repeatedFields_, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.SplitTunnelSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.SplitTunnelSettings.displayName = 'proto.mullvad_daemon.management_interface.SplitTunnelSettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.RelaySettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.mullvad_daemon.management_interface.RelaySettings.oneofGroups_);
};
goog.inherits(proto.mullvad_daemon.management_interface.RelaySettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.RelaySettings.displayName = 'proto.mullvad_daemon.management_interface.RelaySettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.NormalRelaySettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mullvad_daemon.management_interface.NormalRelaySettings.repeatedFields_, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.NormalRelaySettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.NormalRelaySettings.displayName = 'proto.mullvad_daemon.management_interface.NormalRelaySettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.TransportPort = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.TransportPort, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.TransportPort.displayName = 'proto.mullvad_daemon.management_interface.TransportPort';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.OpenvpnConstraints = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.OpenvpnConstraints, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.OpenvpnConstraints.displayName = 'proto.mullvad_daemon.management_interface.OpenvpnConstraints';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.WireguardConstraints = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.WireguardConstraints, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.WireguardConstraints.displayName = 'proto.mullvad_daemon.management_interface.WireguardConstraints';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.CustomRelaySettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.CustomRelaySettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.CustomRelaySettings.displayName = 'proto.mullvad_daemon.management_interface.CustomRelaySettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.ConnectionConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.mullvad_daemon.management_interface.ConnectionConfig.oneofGroups_);
};
goog.inherits(proto.mullvad_daemon.management_interface.ConnectionConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.ConnectionConfig.displayName = 'proto.mullvad_daemon.management_interface.ConnectionConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig.displayName = 'proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.displayName = 'proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig.repeatedFields_, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig.displayName = 'proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig.repeatedFields_, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig.displayName = 'proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.QuantumResistantState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.QuantumResistantState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.QuantumResistantState.displayName = 'proto.mullvad_daemon.management_interface.QuantumResistantState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.DaitaSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.DaitaSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.DaitaSettings.displayName = 'proto.mullvad_daemon.management_interface.DaitaSettings';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.TunnelOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.TunnelOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.TunnelOptions.displayName = 'proto.mullvad_daemon.management_interface.TunnelOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.TunnelOptions.OpenvpnOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.TunnelOptions.OpenvpnOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.TunnelOptions.OpenvpnOptions.displayName = 'proto.mullvad_daemon.management_interface.TunnelOptions.OpenvpnOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions.displayName = 'proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.TunnelOptions.GenericOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.TunnelOptions.GenericOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.TunnelOptions.GenericOptions.displayName = 'proto.mullvad_daemon.management_interface.TunnelOptions.GenericOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.DefaultDnsOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.DefaultDnsOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.DefaultDnsOptions.displayName = 'proto.mullvad_daemon.management_interface.DefaultDnsOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.CustomDnsOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mullvad_daemon.management_interface.CustomDnsOptions.repeatedFields_, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.CustomDnsOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.CustomDnsOptions.displayName = 'proto.mullvad_daemon.management_interface.CustomDnsOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.DnsOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.DnsOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.DnsOptions.displayName = 'proto.mullvad_daemon.management_interface.DnsOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.PublicKey = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.PublicKey, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.PublicKey.displayName = 'proto.mullvad_daemon.management_interface.PublicKey';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.ExcludedProcess = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.ExcludedProcess, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.ExcludedProcess.displayName = 'proto.mullvad_daemon.management_interface.ExcludedProcess';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.ExcludedProcessList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mullvad_daemon.management_interface.ExcludedProcessList.repeatedFields_, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.ExcludedProcessList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.ExcludedProcessList.displayName = 'proto.mullvad_daemon.management_interface.ExcludedProcessList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.AppVersionInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.AppVersionInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.AppVersionInfo.displayName = 'proto.mullvad_daemon.management_interface.AppVersionInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.RelayListCountry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mullvad_daemon.management_interface.RelayListCountry.repeatedFields_, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.RelayListCountry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.RelayListCountry.displayName = 'proto.mullvad_daemon.management_interface.RelayListCountry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.RelayListCity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mullvad_daemon.management_interface.RelayListCity.repeatedFields_, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.RelayListCity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.RelayListCity.displayName = 'proto.mullvad_daemon.management_interface.RelayListCity';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.Relay = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.Relay, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.Relay.displayName = 'proto.mullvad_daemon.management_interface.Relay';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.WireguardRelayEndpointData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mullvad_daemon.management_interface.WireguardRelayEndpointData.repeatedFields_, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.WireguardRelayEndpointData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.WireguardRelayEndpointData.displayName = 'proto.mullvad_daemon.management_interface.WireguardRelayEndpointData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.Location = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.Location, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.Location.displayName = 'proto.mullvad_daemon.management_interface.Location';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.DaemonEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.mullvad_daemon.management_interface.DaemonEvent.oneofGroups_);
};
goog.inherits(proto.mullvad_daemon.management_interface.DaemonEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.DaemonEvent.displayName = 'proto.mullvad_daemon.management_interface.DaemonEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.RelayList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mullvad_daemon.management_interface.RelayList.repeatedFields_, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.RelayList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.RelayList.displayName = 'proto.mullvad_daemon.management_interface.RelayList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.OpenVpnEndpointData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mullvad_daemon.management_interface.OpenVpnEndpointData.repeatedFields_, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.OpenVpnEndpointData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.OpenVpnEndpointData.displayName = 'proto.mullvad_daemon.management_interface.OpenVpnEndpointData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.OpenVpnEndpoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.OpenVpnEndpoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.OpenVpnEndpoint.displayName = 'proto.mullvad_daemon.management_interface.OpenVpnEndpoint';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.BridgeEndpointData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mullvad_daemon.management_interface.BridgeEndpointData.repeatedFields_, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.BridgeEndpointData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.BridgeEndpointData.displayName = 'proto.mullvad_daemon.management_interface.BridgeEndpointData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.ShadowsocksEndpointData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.ShadowsocksEndpointData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.ShadowsocksEndpointData.displayName = 'proto.mullvad_daemon.management_interface.ShadowsocksEndpointData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.WireguardEndpointData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mullvad_daemon.management_interface.WireguardEndpointData.repeatedFields_, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.WireguardEndpointData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.WireguardEndpointData.displayName = 'proto.mullvad_daemon.management_interface.WireguardEndpointData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.PortRange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.PortRange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.PortRange.displayName = 'proto.mullvad_daemon.management_interface.PortRange';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.AccountAndDevice = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.AccountAndDevice, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.AccountAndDevice.displayName = 'proto.mullvad_daemon.management_interface.AccountAndDevice';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.Device = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.Device, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.Device.displayName = 'proto.mullvad_daemon.management_interface.Device';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.DeviceList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mullvad_daemon.management_interface.DeviceList.repeatedFields_, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.DeviceList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.DeviceList.displayName = 'proto.mullvad_daemon.management_interface.DeviceList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.DeviceRemoval = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.DeviceRemoval, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.DeviceRemoval.displayName = 'proto.mullvad_daemon.management_interface.DeviceRemoval';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.DeviceState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.DeviceState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.DeviceState.displayName = 'proto.mullvad_daemon.management_interface.DeviceState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.DeviceEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.DeviceEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.DeviceEvent.displayName = 'proto.mullvad_daemon.management_interface.DeviceEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.RemoveDeviceEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mullvad_daemon.management_interface.RemoveDeviceEvent.repeatedFields_, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.RemoveDeviceEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.RemoveDeviceEvent.displayName = 'proto.mullvad_daemon.management_interface.RemoveDeviceEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.PlayPurchase = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.PlayPurchase, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.PlayPurchase.displayName = 'proto.mullvad_daemon.management_interface.PlayPurchase';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mullvad_daemon.management_interface.PlayPurchasePaymentToken = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mullvad_daemon.management_interface.PlayPurchasePaymentToken, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mullvad_daemon.management_interface.PlayPurchasePaymentToken.displayName = 'proto.mullvad_daemon.management_interface.PlayPurchasePaymentToken';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.UUID.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.UUID.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.UUID} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.UUID.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.UUID}
 */
proto.mullvad_daemon.management_interface.UUID.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.UUID;
  return proto.mullvad_daemon.management_interface.UUID.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.UUID} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.UUID}
 */
proto.mullvad_daemon.management_interface.UUID.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.UUID.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.UUID.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.UUID} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.UUID.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.UUID.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.UUID} returns this
 */
proto.mullvad_daemon.management_interface.UUID.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.AccountData.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.AccountData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.AccountData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.AccountData.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    expiry: (f = msg.getExpiry()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.AccountData}
 */
proto.mullvad_daemon.management_interface.AccountData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.AccountData;
  return proto.mullvad_daemon.management_interface.AccountData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.AccountData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.AccountData}
 */
proto.mullvad_daemon.management_interface.AccountData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpiry(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.AccountData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.AccountData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.AccountData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.AccountData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExpiry();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.AccountData.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.AccountData} returns this
 */
proto.mullvad_daemon.management_interface.AccountData.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp expiry = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mullvad_daemon.management_interface.AccountData.prototype.getExpiry = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.AccountData} returns this
*/
proto.mullvad_daemon.management_interface.AccountData.prototype.setExpiry = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.AccountData} returns this
 */
proto.mullvad_daemon.management_interface.AccountData.prototype.clearExpiry = function() {
  return this.setExpiry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.AccountData.prototype.hasExpiry = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.AccountHistory.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.AccountHistory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.AccountHistory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.AccountHistory.toObject = function(includeInstance, msg) {
  var f, obj = {
    number: (f = msg.getNumber()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.AccountHistory}
 */
proto.mullvad_daemon.management_interface.AccountHistory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.AccountHistory;
  return proto.mullvad_daemon.management_interface.AccountHistory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.AccountHistory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.AccountHistory}
 */
proto.mullvad_daemon.management_interface.AccountHistory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setNumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.AccountHistory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.AccountHistory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.AccountHistory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.AccountHistory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumber();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.StringValue number = 1;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.mullvad_daemon.management_interface.AccountHistory.prototype.getNumber = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 1));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.AccountHistory} returns this
*/
proto.mullvad_daemon.management_interface.AccountHistory.prototype.setNumber = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.AccountHistory} returns this
 */
proto.mullvad_daemon.management_interface.AccountHistory.prototype.clearNumber = function() {
  return this.setNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.AccountHistory.prototype.hasNumber = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.VoucherSubmission.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.VoucherSubmission.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.VoucherSubmission} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.VoucherSubmission.toObject = function(includeInstance, msg) {
  var f, obj = {
    secondsAdded: jspb.Message.getFieldWithDefault(msg, 1, 0),
    newExpiry: (f = msg.getNewExpiry()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.VoucherSubmission}
 */
proto.mullvad_daemon.management_interface.VoucherSubmission.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.VoucherSubmission;
  return proto.mullvad_daemon.management_interface.VoucherSubmission.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.VoucherSubmission} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.VoucherSubmission}
 */
proto.mullvad_daemon.management_interface.VoucherSubmission.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSecondsAdded(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setNewExpiry(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.VoucherSubmission.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.VoucherSubmission.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.VoucherSubmission} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.VoucherSubmission.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSecondsAdded();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getNewExpiry();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 seconds_added = 1;
 * @return {number}
 */
proto.mullvad_daemon.management_interface.VoucherSubmission.prototype.getSecondsAdded = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mullvad_daemon.management_interface.VoucherSubmission} returns this
 */
proto.mullvad_daemon.management_interface.VoucherSubmission.prototype.setSecondsAdded = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp new_expiry = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mullvad_daemon.management_interface.VoucherSubmission.prototype.getNewExpiry = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.VoucherSubmission} returns this
*/
proto.mullvad_daemon.management_interface.VoucherSubmission.prototype.setNewExpiry = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.VoucherSubmission} returns this
 */
proto.mullvad_daemon.management_interface.VoucherSubmission.prototype.clearNewExpiry = function() {
  return this.setNewExpiry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.VoucherSubmission.prototype.hasNewExpiry = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.ErrorState.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.ErrorState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.ErrorState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.ErrorState.toObject = function(includeInstance, msg) {
  var f, obj = {
    cause: jspb.Message.getFieldWithDefault(msg, 1, 0),
    blockingError: (f = msg.getBlockingError()) && proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError.toObject(includeInstance, f),
    authFailedError: jspb.Message.getFieldWithDefault(msg, 3, 0),
    parameterError: jspb.Message.getFieldWithDefault(msg, 4, 0),
    policyError: (f = msg.getPolicyError()) && proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError.toObject(includeInstance, f),
    createTunnelError: jspb.Message.getFieldWithDefault(msg, 6, 0),
    otherAlwaysOnAppError: (f = msg.getOtherAlwaysOnAppError()) && proto.mullvad_daemon.management_interface.ErrorState.OtherAlwaysOnAppError.toObject(includeInstance, f),
    invalidDnsServersError: (f = msg.getInvalidDnsServersError()) && proto.mullvad_daemon.management_interface.ErrorState.InvalidDnsServersError.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.ErrorState}
 */
proto.mullvad_daemon.management_interface.ErrorState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.ErrorState;
  return proto.mullvad_daemon.management_interface.ErrorState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.ErrorState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.ErrorState}
 */
proto.mullvad_daemon.management_interface.ErrorState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mullvad_daemon.management_interface.ErrorState.Cause} */ (reader.readEnum());
      msg.setCause(value);
      break;
    case 2:
      var value = new proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError.deserializeBinaryFromReader);
      msg.setBlockingError(value);
      break;
    case 3:
      var value = /** @type {!proto.mullvad_daemon.management_interface.ErrorState.AuthFailedError} */ (reader.readEnum());
      msg.setAuthFailedError(value);
      break;
    case 4:
      var value = /** @type {!proto.mullvad_daemon.management_interface.ErrorState.GenerationError} */ (reader.readEnum());
      msg.setParameterError(value);
      break;
    case 5:
      var value = new proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError.deserializeBinaryFromReader);
      msg.setPolicyError(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreateTunnelError(value);
      break;
    case 8:
      var value = new proto.mullvad_daemon.management_interface.ErrorState.OtherAlwaysOnAppError;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.ErrorState.OtherAlwaysOnAppError.deserializeBinaryFromReader);
      msg.setOtherAlwaysOnAppError(value);
      break;
    case 9:
      var value = new proto.mullvad_daemon.management_interface.ErrorState.InvalidDnsServersError;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.ErrorState.InvalidDnsServersError.deserializeBinaryFromReader);
      msg.setInvalidDnsServersError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.ErrorState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.ErrorState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.ErrorState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.ErrorState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCause();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getBlockingError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError.serializeBinaryToWriter
    );
  }
  f = message.getAuthFailedError();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getParameterError();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getPolicyError();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getOtherAlwaysOnAppError();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.mullvad_daemon.management_interface.ErrorState.OtherAlwaysOnAppError.serializeBinaryToWriter
    );
  }
  f = message.getInvalidDnsServersError();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.mullvad_daemon.management_interface.ErrorState.InvalidDnsServersError.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.mullvad_daemon.management_interface.ErrorState.Cause = {
  AUTH_FAILED: 0,
  IPV6_UNAVAILABLE: 1,
  SET_FIREWALL_POLICY_ERROR: 2,
  SET_DNS_ERROR: 3,
  START_TUNNEL_ERROR: 4,
  CREATE_TUNNEL_DEVICE: 5,
  TUNNEL_PARAMETER_ERROR: 6,
  IS_OFFLINE: 7,
  NOT_PREPARED: 8,
  OTHER_ALWAYS_ON_APP: 9,
  OTHER_LEGACY_ALWAYS_ON_VPN: 10,
  INVALID_DNS_SERVERS: 11,
  SPLIT_TUNNEL_ERROR: 12,
  NEED_FULL_DISK_PERMISSIONS: 13
};

/**
 * @enum {number}
 */
proto.mullvad_daemon.management_interface.ErrorState.AuthFailedError = {
  UNKNOWN: 0,
  INVALID_ACCOUNT: 1,
  EXPIRED_ACCOUNT: 2,
  TOO_MANY_CONNECTIONS: 3
};

/**
 * @enum {number}
 */
proto.mullvad_daemon.management_interface.ErrorState.GenerationError = {
  NO_MATCHING_RELAY: 0,
  NO_MATCHING_BRIDGE_RELAY: 1,
  NO_WIREGUARD_KEY: 2,
  CUSTOM_TUNNEL_HOST_RESOLUTION_ERROR: 3
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    lockPid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    lockName: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError}
 */
proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError;
  return proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError}
 */
proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError.ErrorType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLockPid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLockName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getLockPid();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError.ErrorType = {
  GENERIC: 0,
  LOCKED: 1
};

/**
 * optional ErrorType type = 1;
 * @return {!proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError.ErrorType}
 */
proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError.prototype.getType = function() {
  return /** @type {!proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError.ErrorType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError.ErrorType} value
 * @return {!proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError} returns this
 */
proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint32 lock_pid = 2;
 * @return {number}
 */
proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError.prototype.getLockPid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError} returns this
 */
proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError.prototype.setLockPid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string lock_name = 3;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError.prototype.getLockName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError} returns this
 */
proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError.prototype.setLockName = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError} returns this
 */
proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError.prototype.clearLockName = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError.prototype.hasLockName = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.ErrorState.OtherAlwaysOnAppError.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.ErrorState.OtherAlwaysOnAppError.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.ErrorState.OtherAlwaysOnAppError} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.ErrorState.OtherAlwaysOnAppError.toObject = function(includeInstance, msg) {
  var f, obj = {
    appName: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.ErrorState.OtherAlwaysOnAppError}
 */
proto.mullvad_daemon.management_interface.ErrorState.OtherAlwaysOnAppError.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.ErrorState.OtherAlwaysOnAppError;
  return proto.mullvad_daemon.management_interface.ErrorState.OtherAlwaysOnAppError.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.ErrorState.OtherAlwaysOnAppError} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.ErrorState.OtherAlwaysOnAppError}
 */
proto.mullvad_daemon.management_interface.ErrorState.OtherAlwaysOnAppError.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.ErrorState.OtherAlwaysOnAppError.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.ErrorState.OtherAlwaysOnAppError.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.ErrorState.OtherAlwaysOnAppError} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.ErrorState.OtherAlwaysOnAppError.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string app_name = 1;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.ErrorState.OtherAlwaysOnAppError.prototype.getAppName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.ErrorState.OtherAlwaysOnAppError} returns this
 */
proto.mullvad_daemon.management_interface.ErrorState.OtherAlwaysOnAppError.prototype.setAppName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mullvad_daemon.management_interface.ErrorState.InvalidDnsServersError.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.ErrorState.InvalidDnsServersError.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.ErrorState.InvalidDnsServersError.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.ErrorState.InvalidDnsServersError} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.ErrorState.InvalidDnsServersError.toObject = function(includeInstance, msg) {
  var f, obj = {
    ipAddrsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.ErrorState.InvalidDnsServersError}
 */
proto.mullvad_daemon.management_interface.ErrorState.InvalidDnsServersError.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.ErrorState.InvalidDnsServersError;
  return proto.mullvad_daemon.management_interface.ErrorState.InvalidDnsServersError.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.ErrorState.InvalidDnsServersError} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.ErrorState.InvalidDnsServersError}
 */
proto.mullvad_daemon.management_interface.ErrorState.InvalidDnsServersError.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addIpAddrs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.ErrorState.InvalidDnsServersError.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.ErrorState.InvalidDnsServersError.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.ErrorState.InvalidDnsServersError} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.ErrorState.InvalidDnsServersError.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIpAddrsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string ip_addrs = 1;
 * @return {!Array<string>}
 */
proto.mullvad_daemon.management_interface.ErrorState.InvalidDnsServersError.prototype.getIpAddrsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.mullvad_daemon.management_interface.ErrorState.InvalidDnsServersError} returns this
 */
proto.mullvad_daemon.management_interface.ErrorState.InvalidDnsServersError.prototype.setIpAddrsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.mullvad_daemon.management_interface.ErrorState.InvalidDnsServersError} returns this
 */
proto.mullvad_daemon.management_interface.ErrorState.InvalidDnsServersError.prototype.addIpAddrs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mullvad_daemon.management_interface.ErrorState.InvalidDnsServersError} returns this
 */
proto.mullvad_daemon.management_interface.ErrorState.InvalidDnsServersError.prototype.clearIpAddrsList = function() {
  return this.setIpAddrsList([]);
};


/**
 * optional Cause cause = 1;
 * @return {!proto.mullvad_daemon.management_interface.ErrorState.Cause}
 */
proto.mullvad_daemon.management_interface.ErrorState.prototype.getCause = function() {
  return /** @type {!proto.mullvad_daemon.management_interface.ErrorState.Cause} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mullvad_daemon.management_interface.ErrorState.Cause} value
 * @return {!proto.mullvad_daemon.management_interface.ErrorState} returns this
 */
proto.mullvad_daemon.management_interface.ErrorState.prototype.setCause = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional FirewallPolicyError blocking_error = 2;
 * @return {?proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError}
 */
proto.mullvad_daemon.management_interface.ErrorState.prototype.getBlockingError = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError, 2));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.ErrorState} returns this
*/
proto.mullvad_daemon.management_interface.ErrorState.prototype.setBlockingError = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.ErrorState} returns this
 */
proto.mullvad_daemon.management_interface.ErrorState.prototype.clearBlockingError = function() {
  return this.setBlockingError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.ErrorState.prototype.hasBlockingError = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AuthFailedError auth_failed_error = 3;
 * @return {!proto.mullvad_daemon.management_interface.ErrorState.AuthFailedError}
 */
proto.mullvad_daemon.management_interface.ErrorState.prototype.getAuthFailedError = function() {
  return /** @type {!proto.mullvad_daemon.management_interface.ErrorState.AuthFailedError} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.mullvad_daemon.management_interface.ErrorState.AuthFailedError} value
 * @return {!proto.mullvad_daemon.management_interface.ErrorState} returns this
 */
proto.mullvad_daemon.management_interface.ErrorState.prototype.setAuthFailedError = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional GenerationError parameter_error = 4;
 * @return {!proto.mullvad_daemon.management_interface.ErrorState.GenerationError}
 */
proto.mullvad_daemon.management_interface.ErrorState.prototype.getParameterError = function() {
  return /** @type {!proto.mullvad_daemon.management_interface.ErrorState.GenerationError} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.mullvad_daemon.management_interface.ErrorState.GenerationError} value
 * @return {!proto.mullvad_daemon.management_interface.ErrorState} returns this
 */
proto.mullvad_daemon.management_interface.ErrorState.prototype.setParameterError = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional FirewallPolicyError policy_error = 5;
 * @return {?proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError}
 */
proto.mullvad_daemon.management_interface.ErrorState.prototype.getPolicyError = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError, 5));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.ErrorState.FirewallPolicyError|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.ErrorState} returns this
*/
proto.mullvad_daemon.management_interface.ErrorState.prototype.setPolicyError = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.ErrorState} returns this
 */
proto.mullvad_daemon.management_interface.ErrorState.prototype.clearPolicyError = function() {
  return this.setPolicyError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.ErrorState.prototype.hasPolicyError = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 create_tunnel_error = 6;
 * @return {number}
 */
proto.mullvad_daemon.management_interface.ErrorState.prototype.getCreateTunnelError = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.mullvad_daemon.management_interface.ErrorState} returns this
 */
proto.mullvad_daemon.management_interface.ErrorState.prototype.setCreateTunnelError = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.ErrorState} returns this
 */
proto.mullvad_daemon.management_interface.ErrorState.prototype.clearCreateTunnelError = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.ErrorState.prototype.hasCreateTunnelError = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional OtherAlwaysOnAppError other_always_on_app_error = 8;
 * @return {?proto.mullvad_daemon.management_interface.ErrorState.OtherAlwaysOnAppError}
 */
proto.mullvad_daemon.management_interface.ErrorState.prototype.getOtherAlwaysOnAppError = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.ErrorState.OtherAlwaysOnAppError} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.ErrorState.OtherAlwaysOnAppError, 8));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.ErrorState.OtherAlwaysOnAppError|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.ErrorState} returns this
*/
proto.mullvad_daemon.management_interface.ErrorState.prototype.setOtherAlwaysOnAppError = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.ErrorState} returns this
 */
proto.mullvad_daemon.management_interface.ErrorState.prototype.clearOtherAlwaysOnAppError = function() {
  return this.setOtherAlwaysOnAppError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.ErrorState.prototype.hasOtherAlwaysOnAppError = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional InvalidDnsServersError invalid_dns_servers_error = 9;
 * @return {?proto.mullvad_daemon.management_interface.ErrorState.InvalidDnsServersError}
 */
proto.mullvad_daemon.management_interface.ErrorState.prototype.getInvalidDnsServersError = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.ErrorState.InvalidDnsServersError} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.ErrorState.InvalidDnsServersError, 9));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.ErrorState.InvalidDnsServersError|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.ErrorState} returns this
*/
proto.mullvad_daemon.management_interface.ErrorState.prototype.setInvalidDnsServersError = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.ErrorState} returns this
 */
proto.mullvad_daemon.management_interface.ErrorState.prototype.clearInvalidDnsServersError = function() {
  return this.setInvalidDnsServersError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.ErrorState.prototype.hasInvalidDnsServersError = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.mullvad_daemon.management_interface.TunnelState.oneofGroups_ = [[1,2,3,4,5]];

/**
 * @enum {number}
 */
proto.mullvad_daemon.management_interface.TunnelState.StateCase = {
  STATE_NOT_SET: 0,
  DISCONNECTED: 1,
  CONNECTING: 2,
  CONNECTED: 3,
  DISCONNECTING: 4,
  ERROR: 5
};

/**
 * @return {proto.mullvad_daemon.management_interface.TunnelState.StateCase}
 */
proto.mullvad_daemon.management_interface.TunnelState.prototype.getStateCase = function() {
  return /** @type {proto.mullvad_daemon.management_interface.TunnelState.StateCase} */(jspb.Message.computeOneofCase(this, proto.mullvad_daemon.management_interface.TunnelState.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.TunnelState.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.TunnelState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.TunnelState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.TunnelState.toObject = function(includeInstance, msg) {
  var f, obj = {
    disconnected: (f = msg.getDisconnected()) && proto.mullvad_daemon.management_interface.TunnelState.Disconnected.toObject(includeInstance, f),
    connecting: (f = msg.getConnecting()) && proto.mullvad_daemon.management_interface.TunnelState.Connecting.toObject(includeInstance, f),
    connected: (f = msg.getConnected()) && proto.mullvad_daemon.management_interface.TunnelState.Connected.toObject(includeInstance, f),
    disconnecting: (f = msg.getDisconnecting()) && proto.mullvad_daemon.management_interface.TunnelState.Disconnecting.toObject(includeInstance, f),
    error: (f = msg.getError()) && proto.mullvad_daemon.management_interface.TunnelState.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.TunnelState}
 */
proto.mullvad_daemon.management_interface.TunnelState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.TunnelState;
  return proto.mullvad_daemon.management_interface.TunnelState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.TunnelState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.TunnelState}
 */
proto.mullvad_daemon.management_interface.TunnelState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mullvad_daemon.management_interface.TunnelState.Disconnected;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.TunnelState.Disconnected.deserializeBinaryFromReader);
      msg.setDisconnected(value);
      break;
    case 2:
      var value = new proto.mullvad_daemon.management_interface.TunnelState.Connecting;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.TunnelState.Connecting.deserializeBinaryFromReader);
      msg.setConnecting(value);
      break;
    case 3:
      var value = new proto.mullvad_daemon.management_interface.TunnelState.Connected;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.TunnelState.Connected.deserializeBinaryFromReader);
      msg.setConnected(value);
      break;
    case 4:
      var value = new proto.mullvad_daemon.management_interface.TunnelState.Disconnecting;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.TunnelState.Disconnecting.deserializeBinaryFromReader);
      msg.setDisconnecting(value);
      break;
    case 5:
      var value = new proto.mullvad_daemon.management_interface.TunnelState.Error;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.TunnelState.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.TunnelState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.TunnelState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.TunnelState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.TunnelState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisconnected();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mullvad_daemon.management_interface.TunnelState.Disconnected.serializeBinaryToWriter
    );
  }
  f = message.getConnecting();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mullvad_daemon.management_interface.TunnelState.Connecting.serializeBinaryToWriter
    );
  }
  f = message.getConnected();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.mullvad_daemon.management_interface.TunnelState.Connected.serializeBinaryToWriter
    );
  }
  f = message.getDisconnecting();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.mullvad_daemon.management_interface.TunnelState.Disconnecting.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.mullvad_daemon.management_interface.TunnelState.Error.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.TunnelState.Disconnected.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.TunnelState.Disconnected.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.TunnelState.Disconnected} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.TunnelState.Disconnected.toObject = function(includeInstance, msg) {
  var f, obj = {
    disconnectedLocation: (f = msg.getDisconnectedLocation()) && proto.mullvad_daemon.management_interface.GeoIpLocation.toObject(includeInstance, f),
    lockedDown: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.TunnelState.Disconnected}
 */
proto.mullvad_daemon.management_interface.TunnelState.Disconnected.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.TunnelState.Disconnected;
  return proto.mullvad_daemon.management_interface.TunnelState.Disconnected.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.TunnelState.Disconnected} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.TunnelState.Disconnected}
 */
proto.mullvad_daemon.management_interface.TunnelState.Disconnected.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mullvad_daemon.management_interface.GeoIpLocation;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.GeoIpLocation.deserializeBinaryFromReader);
      msg.setDisconnectedLocation(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLockedDown(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.TunnelState.Disconnected.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.TunnelState.Disconnected.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.TunnelState.Disconnected} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.TunnelState.Disconnected.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisconnectedLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mullvad_daemon.management_interface.GeoIpLocation.serializeBinaryToWriter
    );
  }
  f = message.getLockedDown();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional GeoIpLocation disconnected_location = 1;
 * @return {?proto.mullvad_daemon.management_interface.GeoIpLocation}
 */
proto.mullvad_daemon.management_interface.TunnelState.Disconnected.prototype.getDisconnectedLocation = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.GeoIpLocation} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.GeoIpLocation, 1));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.GeoIpLocation|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.TunnelState.Disconnected} returns this
*/
proto.mullvad_daemon.management_interface.TunnelState.Disconnected.prototype.setDisconnectedLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.TunnelState.Disconnected} returns this
 */
proto.mullvad_daemon.management_interface.TunnelState.Disconnected.prototype.clearDisconnectedLocation = function() {
  return this.setDisconnectedLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.TunnelState.Disconnected.prototype.hasDisconnectedLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool locked_down = 2;
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.TunnelState.Disconnected.prototype.getLockedDown = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mullvad_daemon.management_interface.TunnelState.Disconnected} returns this
 */
proto.mullvad_daemon.management_interface.TunnelState.Disconnected.prototype.setLockedDown = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.TunnelState.Connecting.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.TunnelState.Connecting.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.TunnelState.Connecting} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.TunnelState.Connecting.toObject = function(includeInstance, msg) {
  var f, obj = {
    relayInfo: (f = msg.getRelayInfo()) && proto.mullvad_daemon.management_interface.TunnelStateRelayInfo.toObject(includeInstance, f),
    featureIndicators: (f = msg.getFeatureIndicators()) && proto.mullvad_daemon.management_interface.FeatureIndicators.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.TunnelState.Connecting}
 */
proto.mullvad_daemon.management_interface.TunnelState.Connecting.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.TunnelState.Connecting;
  return proto.mullvad_daemon.management_interface.TunnelState.Connecting.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.TunnelState.Connecting} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.TunnelState.Connecting}
 */
proto.mullvad_daemon.management_interface.TunnelState.Connecting.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mullvad_daemon.management_interface.TunnelStateRelayInfo;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.TunnelStateRelayInfo.deserializeBinaryFromReader);
      msg.setRelayInfo(value);
      break;
    case 2:
      var value = new proto.mullvad_daemon.management_interface.FeatureIndicators;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.FeatureIndicators.deserializeBinaryFromReader);
      msg.setFeatureIndicators(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.TunnelState.Connecting.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.TunnelState.Connecting.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.TunnelState.Connecting} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.TunnelState.Connecting.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRelayInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mullvad_daemon.management_interface.TunnelStateRelayInfo.serializeBinaryToWriter
    );
  }
  f = message.getFeatureIndicators();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mullvad_daemon.management_interface.FeatureIndicators.serializeBinaryToWriter
    );
  }
};


/**
 * optional TunnelStateRelayInfo relay_info = 1;
 * @return {?proto.mullvad_daemon.management_interface.TunnelStateRelayInfo}
 */
proto.mullvad_daemon.management_interface.TunnelState.Connecting.prototype.getRelayInfo = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.TunnelStateRelayInfo} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.TunnelStateRelayInfo, 1));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.TunnelStateRelayInfo|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.TunnelState.Connecting} returns this
*/
proto.mullvad_daemon.management_interface.TunnelState.Connecting.prototype.setRelayInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.TunnelState.Connecting} returns this
 */
proto.mullvad_daemon.management_interface.TunnelState.Connecting.prototype.clearRelayInfo = function() {
  return this.setRelayInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.TunnelState.Connecting.prototype.hasRelayInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional FeatureIndicators feature_indicators = 2;
 * @return {?proto.mullvad_daemon.management_interface.FeatureIndicators}
 */
proto.mullvad_daemon.management_interface.TunnelState.Connecting.prototype.getFeatureIndicators = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.FeatureIndicators} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.FeatureIndicators, 2));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.FeatureIndicators|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.TunnelState.Connecting} returns this
*/
proto.mullvad_daemon.management_interface.TunnelState.Connecting.prototype.setFeatureIndicators = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.TunnelState.Connecting} returns this
 */
proto.mullvad_daemon.management_interface.TunnelState.Connecting.prototype.clearFeatureIndicators = function() {
  return this.setFeatureIndicators(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.TunnelState.Connecting.prototype.hasFeatureIndicators = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.TunnelState.Connected.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.TunnelState.Connected.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.TunnelState.Connected} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.TunnelState.Connected.toObject = function(includeInstance, msg) {
  var f, obj = {
    relayInfo: (f = msg.getRelayInfo()) && proto.mullvad_daemon.management_interface.TunnelStateRelayInfo.toObject(includeInstance, f),
    featureIndicators: (f = msg.getFeatureIndicators()) && proto.mullvad_daemon.management_interface.FeatureIndicators.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.TunnelState.Connected}
 */
proto.mullvad_daemon.management_interface.TunnelState.Connected.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.TunnelState.Connected;
  return proto.mullvad_daemon.management_interface.TunnelState.Connected.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.TunnelState.Connected} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.TunnelState.Connected}
 */
proto.mullvad_daemon.management_interface.TunnelState.Connected.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mullvad_daemon.management_interface.TunnelStateRelayInfo;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.TunnelStateRelayInfo.deserializeBinaryFromReader);
      msg.setRelayInfo(value);
      break;
    case 2:
      var value = new proto.mullvad_daemon.management_interface.FeatureIndicators;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.FeatureIndicators.deserializeBinaryFromReader);
      msg.setFeatureIndicators(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.TunnelState.Connected.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.TunnelState.Connected.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.TunnelState.Connected} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.TunnelState.Connected.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRelayInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mullvad_daemon.management_interface.TunnelStateRelayInfo.serializeBinaryToWriter
    );
  }
  f = message.getFeatureIndicators();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mullvad_daemon.management_interface.FeatureIndicators.serializeBinaryToWriter
    );
  }
};


/**
 * optional TunnelStateRelayInfo relay_info = 1;
 * @return {?proto.mullvad_daemon.management_interface.TunnelStateRelayInfo}
 */
proto.mullvad_daemon.management_interface.TunnelState.Connected.prototype.getRelayInfo = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.TunnelStateRelayInfo} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.TunnelStateRelayInfo, 1));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.TunnelStateRelayInfo|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.TunnelState.Connected} returns this
*/
proto.mullvad_daemon.management_interface.TunnelState.Connected.prototype.setRelayInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.TunnelState.Connected} returns this
 */
proto.mullvad_daemon.management_interface.TunnelState.Connected.prototype.clearRelayInfo = function() {
  return this.setRelayInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.TunnelState.Connected.prototype.hasRelayInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional FeatureIndicators feature_indicators = 2;
 * @return {?proto.mullvad_daemon.management_interface.FeatureIndicators}
 */
proto.mullvad_daemon.management_interface.TunnelState.Connected.prototype.getFeatureIndicators = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.FeatureIndicators} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.FeatureIndicators, 2));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.FeatureIndicators|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.TunnelState.Connected} returns this
*/
proto.mullvad_daemon.management_interface.TunnelState.Connected.prototype.setFeatureIndicators = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.TunnelState.Connected} returns this
 */
proto.mullvad_daemon.management_interface.TunnelState.Connected.prototype.clearFeatureIndicators = function() {
  return this.setFeatureIndicators(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.TunnelState.Connected.prototype.hasFeatureIndicators = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.TunnelState.Disconnecting.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.TunnelState.Disconnecting.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.TunnelState.Disconnecting} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.TunnelState.Disconnecting.toObject = function(includeInstance, msg) {
  var f, obj = {
    afterDisconnect: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.TunnelState.Disconnecting}
 */
proto.mullvad_daemon.management_interface.TunnelState.Disconnecting.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.TunnelState.Disconnecting;
  return proto.mullvad_daemon.management_interface.TunnelState.Disconnecting.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.TunnelState.Disconnecting} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.TunnelState.Disconnecting}
 */
proto.mullvad_daemon.management_interface.TunnelState.Disconnecting.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mullvad_daemon.management_interface.AfterDisconnect} */ (reader.readEnum());
      msg.setAfterDisconnect(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.TunnelState.Disconnecting.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.TunnelState.Disconnecting.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.TunnelState.Disconnecting} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.TunnelState.Disconnecting.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAfterDisconnect();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional AfterDisconnect after_disconnect = 1;
 * @return {!proto.mullvad_daemon.management_interface.AfterDisconnect}
 */
proto.mullvad_daemon.management_interface.TunnelState.Disconnecting.prototype.getAfterDisconnect = function() {
  return /** @type {!proto.mullvad_daemon.management_interface.AfterDisconnect} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mullvad_daemon.management_interface.AfterDisconnect} value
 * @return {!proto.mullvad_daemon.management_interface.TunnelState.Disconnecting} returns this
 */
proto.mullvad_daemon.management_interface.TunnelState.Disconnecting.prototype.setAfterDisconnect = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.TunnelState.Error.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.TunnelState.Error.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.TunnelState.Error} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.TunnelState.Error.toObject = function(includeInstance, msg) {
  var f, obj = {
    errorState: (f = msg.getErrorState()) && proto.mullvad_daemon.management_interface.ErrorState.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.TunnelState.Error}
 */
proto.mullvad_daemon.management_interface.TunnelState.Error.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.TunnelState.Error;
  return proto.mullvad_daemon.management_interface.TunnelState.Error.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.TunnelState.Error} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.TunnelState.Error}
 */
proto.mullvad_daemon.management_interface.TunnelState.Error.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mullvad_daemon.management_interface.ErrorState;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.ErrorState.deserializeBinaryFromReader);
      msg.setErrorState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.TunnelState.Error.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.TunnelState.Error.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.TunnelState.Error} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.TunnelState.Error.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrorState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mullvad_daemon.management_interface.ErrorState.serializeBinaryToWriter
    );
  }
};


/**
 * optional ErrorState error_state = 1;
 * @return {?proto.mullvad_daemon.management_interface.ErrorState}
 */
proto.mullvad_daemon.management_interface.TunnelState.Error.prototype.getErrorState = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.ErrorState} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.ErrorState, 1));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.ErrorState|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.TunnelState.Error} returns this
*/
proto.mullvad_daemon.management_interface.TunnelState.Error.prototype.setErrorState = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.TunnelState.Error} returns this
 */
proto.mullvad_daemon.management_interface.TunnelState.Error.prototype.clearErrorState = function() {
  return this.setErrorState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.TunnelState.Error.prototype.hasErrorState = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Disconnected disconnected = 1;
 * @return {?proto.mullvad_daemon.management_interface.TunnelState.Disconnected}
 */
proto.mullvad_daemon.management_interface.TunnelState.prototype.getDisconnected = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.TunnelState.Disconnected} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.TunnelState.Disconnected, 1));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.TunnelState.Disconnected|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.TunnelState} returns this
*/
proto.mullvad_daemon.management_interface.TunnelState.prototype.setDisconnected = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.mullvad_daemon.management_interface.TunnelState.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.TunnelState} returns this
 */
proto.mullvad_daemon.management_interface.TunnelState.prototype.clearDisconnected = function() {
  return this.setDisconnected(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.TunnelState.prototype.hasDisconnected = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Connecting connecting = 2;
 * @return {?proto.mullvad_daemon.management_interface.TunnelState.Connecting}
 */
proto.mullvad_daemon.management_interface.TunnelState.prototype.getConnecting = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.TunnelState.Connecting} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.TunnelState.Connecting, 2));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.TunnelState.Connecting|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.TunnelState} returns this
*/
proto.mullvad_daemon.management_interface.TunnelState.prototype.setConnecting = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.mullvad_daemon.management_interface.TunnelState.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.TunnelState} returns this
 */
proto.mullvad_daemon.management_interface.TunnelState.prototype.clearConnecting = function() {
  return this.setConnecting(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.TunnelState.prototype.hasConnecting = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Connected connected = 3;
 * @return {?proto.mullvad_daemon.management_interface.TunnelState.Connected}
 */
proto.mullvad_daemon.management_interface.TunnelState.prototype.getConnected = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.TunnelState.Connected} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.TunnelState.Connected, 3));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.TunnelState.Connected|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.TunnelState} returns this
*/
proto.mullvad_daemon.management_interface.TunnelState.prototype.setConnected = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.mullvad_daemon.management_interface.TunnelState.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.TunnelState} returns this
 */
proto.mullvad_daemon.management_interface.TunnelState.prototype.clearConnected = function() {
  return this.setConnected(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.TunnelState.prototype.hasConnected = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Disconnecting disconnecting = 4;
 * @return {?proto.mullvad_daemon.management_interface.TunnelState.Disconnecting}
 */
proto.mullvad_daemon.management_interface.TunnelState.prototype.getDisconnecting = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.TunnelState.Disconnecting} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.TunnelState.Disconnecting, 4));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.TunnelState.Disconnecting|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.TunnelState} returns this
*/
proto.mullvad_daemon.management_interface.TunnelState.prototype.setDisconnecting = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.mullvad_daemon.management_interface.TunnelState.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.TunnelState} returns this
 */
proto.mullvad_daemon.management_interface.TunnelState.prototype.clearDisconnecting = function() {
  return this.setDisconnecting(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.TunnelState.prototype.hasDisconnecting = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Error error = 5;
 * @return {?proto.mullvad_daemon.management_interface.TunnelState.Error}
 */
proto.mullvad_daemon.management_interface.TunnelState.prototype.getError = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.TunnelState.Error} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.TunnelState.Error, 5));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.TunnelState.Error|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.TunnelState} returns this
*/
proto.mullvad_daemon.management_interface.TunnelState.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.mullvad_daemon.management_interface.TunnelState.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.TunnelState} returns this
 */
proto.mullvad_daemon.management_interface.TunnelState.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.TunnelState.prototype.hasError = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.TunnelStateRelayInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.TunnelStateRelayInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.TunnelStateRelayInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.TunnelStateRelayInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    tunnelEndpoint: (f = msg.getTunnelEndpoint()) && proto.mullvad_daemon.management_interface.TunnelEndpoint.toObject(includeInstance, f),
    location: (f = msg.getLocation()) && proto.mullvad_daemon.management_interface.GeoIpLocation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.TunnelStateRelayInfo}
 */
proto.mullvad_daemon.management_interface.TunnelStateRelayInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.TunnelStateRelayInfo;
  return proto.mullvad_daemon.management_interface.TunnelStateRelayInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.TunnelStateRelayInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.TunnelStateRelayInfo}
 */
proto.mullvad_daemon.management_interface.TunnelStateRelayInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mullvad_daemon.management_interface.TunnelEndpoint;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.TunnelEndpoint.deserializeBinaryFromReader);
      msg.setTunnelEndpoint(value);
      break;
    case 2:
      var value = new proto.mullvad_daemon.management_interface.GeoIpLocation;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.GeoIpLocation.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.TunnelStateRelayInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.TunnelStateRelayInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.TunnelStateRelayInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.TunnelStateRelayInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTunnelEndpoint();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mullvad_daemon.management_interface.TunnelEndpoint.serializeBinaryToWriter
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mullvad_daemon.management_interface.GeoIpLocation.serializeBinaryToWriter
    );
  }
};


/**
 * optional TunnelEndpoint tunnel_endpoint = 1;
 * @return {?proto.mullvad_daemon.management_interface.TunnelEndpoint}
 */
proto.mullvad_daemon.management_interface.TunnelStateRelayInfo.prototype.getTunnelEndpoint = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.TunnelEndpoint} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.TunnelEndpoint, 1));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.TunnelEndpoint|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.TunnelStateRelayInfo} returns this
*/
proto.mullvad_daemon.management_interface.TunnelStateRelayInfo.prototype.setTunnelEndpoint = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.TunnelStateRelayInfo} returns this
 */
proto.mullvad_daemon.management_interface.TunnelStateRelayInfo.prototype.clearTunnelEndpoint = function() {
  return this.setTunnelEndpoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.TunnelStateRelayInfo.prototype.hasTunnelEndpoint = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GeoIpLocation location = 2;
 * @return {?proto.mullvad_daemon.management_interface.GeoIpLocation}
 */
proto.mullvad_daemon.management_interface.TunnelStateRelayInfo.prototype.getLocation = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.GeoIpLocation} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.GeoIpLocation, 2));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.GeoIpLocation|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.TunnelStateRelayInfo} returns this
*/
proto.mullvad_daemon.management_interface.TunnelStateRelayInfo.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.TunnelStateRelayInfo} returns this
 */
proto.mullvad_daemon.management_interface.TunnelStateRelayInfo.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.TunnelStateRelayInfo.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.TunnelEndpoint.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.TunnelEndpoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.TunnelEndpoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.TunnelEndpoint.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    protocol: jspb.Message.getFieldWithDefault(msg, 2, 0),
    tunnelType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    quantumResistant: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    proxy: (f = msg.getProxy()) && proto.mullvad_daemon.management_interface.ProxyEndpoint.toObject(includeInstance, f),
    obfuscation: (f = msg.getObfuscation()) && proto.mullvad_daemon.management_interface.ObfuscationEndpoint.toObject(includeInstance, f),
    entryEndpoint: (f = msg.getEntryEndpoint()) && proto.mullvad_daemon.management_interface.Endpoint.toObject(includeInstance, f),
    tunnelMetadata: (f = msg.getTunnelMetadata()) && proto.mullvad_daemon.management_interface.TunnelMetadata.toObject(includeInstance, f),
    daita: jspb.Message.getBooleanFieldWithDefault(msg, 9, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.TunnelEndpoint}
 */
proto.mullvad_daemon.management_interface.TunnelEndpoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.TunnelEndpoint;
  return proto.mullvad_daemon.management_interface.TunnelEndpoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.TunnelEndpoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.TunnelEndpoint}
 */
proto.mullvad_daemon.management_interface.TunnelEndpoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {!proto.mullvad_daemon.management_interface.TransportProtocol} */ (reader.readEnum());
      msg.setProtocol(value);
      break;
    case 3:
      var value = /** @type {!proto.mullvad_daemon.management_interface.TunnelType} */ (reader.readEnum());
      msg.setTunnelType(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setQuantumResistant(value);
      break;
    case 5:
      var value = new proto.mullvad_daemon.management_interface.ProxyEndpoint;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.ProxyEndpoint.deserializeBinaryFromReader);
      msg.setProxy(value);
      break;
    case 6:
      var value = new proto.mullvad_daemon.management_interface.ObfuscationEndpoint;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.ObfuscationEndpoint.deserializeBinaryFromReader);
      msg.setObfuscation(value);
      break;
    case 7:
      var value = new proto.mullvad_daemon.management_interface.Endpoint;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.Endpoint.deserializeBinaryFromReader);
      msg.setEntryEndpoint(value);
      break;
    case 8:
      var value = new proto.mullvad_daemon.management_interface.TunnelMetadata;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.TunnelMetadata.deserializeBinaryFromReader);
      msg.setTunnelMetadata(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDaita(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.TunnelEndpoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.TunnelEndpoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.TunnelEndpoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.TunnelEndpoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProtocol();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getTunnelType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getQuantumResistant();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getProxy();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.mullvad_daemon.management_interface.ProxyEndpoint.serializeBinaryToWriter
    );
  }
  f = message.getObfuscation();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.mullvad_daemon.management_interface.ObfuscationEndpoint.serializeBinaryToWriter
    );
  }
  f = message.getEntryEndpoint();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.mullvad_daemon.management_interface.Endpoint.serializeBinaryToWriter
    );
  }
  f = message.getTunnelMetadata();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.mullvad_daemon.management_interface.TunnelMetadata.serializeBinaryToWriter
    );
  }
  f = message.getDaita();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.TunnelEndpoint.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.TunnelEndpoint} returns this
 */
proto.mullvad_daemon.management_interface.TunnelEndpoint.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional TransportProtocol protocol = 2;
 * @return {!proto.mullvad_daemon.management_interface.TransportProtocol}
 */
proto.mullvad_daemon.management_interface.TunnelEndpoint.prototype.getProtocol = function() {
  return /** @type {!proto.mullvad_daemon.management_interface.TransportProtocol} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.mullvad_daemon.management_interface.TransportProtocol} value
 * @return {!proto.mullvad_daemon.management_interface.TunnelEndpoint} returns this
 */
proto.mullvad_daemon.management_interface.TunnelEndpoint.prototype.setProtocol = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional TunnelType tunnel_type = 3;
 * @return {!proto.mullvad_daemon.management_interface.TunnelType}
 */
proto.mullvad_daemon.management_interface.TunnelEndpoint.prototype.getTunnelType = function() {
  return /** @type {!proto.mullvad_daemon.management_interface.TunnelType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.mullvad_daemon.management_interface.TunnelType} value
 * @return {!proto.mullvad_daemon.management_interface.TunnelEndpoint} returns this
 */
proto.mullvad_daemon.management_interface.TunnelEndpoint.prototype.setTunnelType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bool quantum_resistant = 4;
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.TunnelEndpoint.prototype.getQuantumResistant = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mullvad_daemon.management_interface.TunnelEndpoint} returns this
 */
proto.mullvad_daemon.management_interface.TunnelEndpoint.prototype.setQuantumResistant = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional ProxyEndpoint proxy = 5;
 * @return {?proto.mullvad_daemon.management_interface.ProxyEndpoint}
 */
proto.mullvad_daemon.management_interface.TunnelEndpoint.prototype.getProxy = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.ProxyEndpoint} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.ProxyEndpoint, 5));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.ProxyEndpoint|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.TunnelEndpoint} returns this
*/
proto.mullvad_daemon.management_interface.TunnelEndpoint.prototype.setProxy = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.TunnelEndpoint} returns this
 */
proto.mullvad_daemon.management_interface.TunnelEndpoint.prototype.clearProxy = function() {
  return this.setProxy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.TunnelEndpoint.prototype.hasProxy = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ObfuscationEndpoint obfuscation = 6;
 * @return {?proto.mullvad_daemon.management_interface.ObfuscationEndpoint}
 */
proto.mullvad_daemon.management_interface.TunnelEndpoint.prototype.getObfuscation = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.ObfuscationEndpoint} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.ObfuscationEndpoint, 6));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.ObfuscationEndpoint|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.TunnelEndpoint} returns this
*/
proto.mullvad_daemon.management_interface.TunnelEndpoint.prototype.setObfuscation = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.TunnelEndpoint} returns this
 */
proto.mullvad_daemon.management_interface.TunnelEndpoint.prototype.clearObfuscation = function() {
  return this.setObfuscation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.TunnelEndpoint.prototype.hasObfuscation = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Endpoint entry_endpoint = 7;
 * @return {?proto.mullvad_daemon.management_interface.Endpoint}
 */
proto.mullvad_daemon.management_interface.TunnelEndpoint.prototype.getEntryEndpoint = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.Endpoint} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.Endpoint, 7));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.Endpoint|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.TunnelEndpoint} returns this
*/
proto.mullvad_daemon.management_interface.TunnelEndpoint.prototype.setEntryEndpoint = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.TunnelEndpoint} returns this
 */
proto.mullvad_daemon.management_interface.TunnelEndpoint.prototype.clearEntryEndpoint = function() {
  return this.setEntryEndpoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.TunnelEndpoint.prototype.hasEntryEndpoint = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional TunnelMetadata tunnel_metadata = 8;
 * @return {?proto.mullvad_daemon.management_interface.TunnelMetadata}
 */
proto.mullvad_daemon.management_interface.TunnelEndpoint.prototype.getTunnelMetadata = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.TunnelMetadata} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.TunnelMetadata, 8));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.TunnelMetadata|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.TunnelEndpoint} returns this
*/
proto.mullvad_daemon.management_interface.TunnelEndpoint.prototype.setTunnelMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.TunnelEndpoint} returns this
 */
proto.mullvad_daemon.management_interface.TunnelEndpoint.prototype.clearTunnelMetadata = function() {
  return this.setTunnelMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.TunnelEndpoint.prototype.hasTunnelMetadata = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool daita = 9;
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.TunnelEndpoint.prototype.getDaita = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mullvad_daemon.management_interface.TunnelEndpoint} returns this
 */
proto.mullvad_daemon.management_interface.TunnelEndpoint.prototype.setDaita = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mullvad_daemon.management_interface.FeatureIndicators.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.FeatureIndicators.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.FeatureIndicators.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.FeatureIndicators} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.FeatureIndicators.toObject = function(includeInstance, msg) {
  var f, obj = {
    activeFeaturesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.FeatureIndicators}
 */
proto.mullvad_daemon.management_interface.FeatureIndicators.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.FeatureIndicators;
  return proto.mullvad_daemon.management_interface.FeatureIndicators.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.FeatureIndicators} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.FeatureIndicators}
 */
proto.mullvad_daemon.management_interface.FeatureIndicators.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.mullvad_daemon.management_interface.FeatureIndicator>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addActiveFeatures(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.FeatureIndicators.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.FeatureIndicators.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.FeatureIndicators} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.FeatureIndicators.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActiveFeaturesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
};


/**
 * repeated FeatureIndicator active_features = 1;
 * @return {!Array<!proto.mullvad_daemon.management_interface.FeatureIndicator>}
 */
proto.mullvad_daemon.management_interface.FeatureIndicators.prototype.getActiveFeaturesList = function() {
  return /** @type {!Array<!proto.mullvad_daemon.management_interface.FeatureIndicator>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.mullvad_daemon.management_interface.FeatureIndicator>} value
 * @return {!proto.mullvad_daemon.management_interface.FeatureIndicators} returns this
 */
proto.mullvad_daemon.management_interface.FeatureIndicators.prototype.setActiveFeaturesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.mullvad_daemon.management_interface.FeatureIndicator} value
 * @param {number=} opt_index
 * @return {!proto.mullvad_daemon.management_interface.FeatureIndicators} returns this
 */
proto.mullvad_daemon.management_interface.FeatureIndicators.prototype.addActiveFeatures = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mullvad_daemon.management_interface.FeatureIndicators} returns this
 */
proto.mullvad_daemon.management_interface.FeatureIndicators.prototype.clearActiveFeaturesList = function() {
  return this.setActiveFeaturesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.ObfuscationEndpoint.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.ObfuscationEndpoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.ObfuscationEndpoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.ObfuscationEndpoint.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    port: jspb.Message.getFieldWithDefault(msg, 2, 0),
    protocol: jspb.Message.getFieldWithDefault(msg, 3, 0),
    obfuscationType: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.ObfuscationEndpoint}
 */
proto.mullvad_daemon.management_interface.ObfuscationEndpoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.ObfuscationEndpoint;
  return proto.mullvad_daemon.management_interface.ObfuscationEndpoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.ObfuscationEndpoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.ObfuscationEndpoint}
 */
proto.mullvad_daemon.management_interface.ObfuscationEndpoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    case 3:
      var value = /** @type {!proto.mullvad_daemon.management_interface.TransportProtocol} */ (reader.readEnum());
      msg.setProtocol(value);
      break;
    case 4:
      var value = /** @type {!proto.mullvad_daemon.management_interface.ObfuscationEndpoint.ObfuscationType} */ (reader.readEnum());
      msg.setObfuscationType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.ObfuscationEndpoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.ObfuscationEndpoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.ObfuscationEndpoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.ObfuscationEndpoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getProtocol();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getObfuscationType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.mullvad_daemon.management_interface.ObfuscationEndpoint.ObfuscationType = {
  UDP2TCP: 0,
  SHADOWSOCKS: 1
};

/**
 * optional string address = 1;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.ObfuscationEndpoint.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.ObfuscationEndpoint} returns this
 */
proto.mullvad_daemon.management_interface.ObfuscationEndpoint.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 port = 2;
 * @return {number}
 */
proto.mullvad_daemon.management_interface.ObfuscationEndpoint.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.mullvad_daemon.management_interface.ObfuscationEndpoint} returns this
 */
proto.mullvad_daemon.management_interface.ObfuscationEndpoint.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional TransportProtocol protocol = 3;
 * @return {!proto.mullvad_daemon.management_interface.TransportProtocol}
 */
proto.mullvad_daemon.management_interface.ObfuscationEndpoint.prototype.getProtocol = function() {
  return /** @type {!proto.mullvad_daemon.management_interface.TransportProtocol} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.mullvad_daemon.management_interface.TransportProtocol} value
 * @return {!proto.mullvad_daemon.management_interface.ObfuscationEndpoint} returns this
 */
proto.mullvad_daemon.management_interface.ObfuscationEndpoint.prototype.setProtocol = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional ObfuscationType obfuscation_type = 4;
 * @return {!proto.mullvad_daemon.management_interface.ObfuscationEndpoint.ObfuscationType}
 */
proto.mullvad_daemon.management_interface.ObfuscationEndpoint.prototype.getObfuscationType = function() {
  return /** @type {!proto.mullvad_daemon.management_interface.ObfuscationEndpoint.ObfuscationType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.mullvad_daemon.management_interface.ObfuscationEndpoint.ObfuscationType} value
 * @return {!proto.mullvad_daemon.management_interface.ObfuscationEndpoint} returns this
 */
proto.mullvad_daemon.management_interface.ObfuscationEndpoint.prototype.setObfuscationType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.Endpoint.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.Endpoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.Endpoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.Endpoint.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    protocol: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.Endpoint}
 */
proto.mullvad_daemon.management_interface.Endpoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.Endpoint;
  return proto.mullvad_daemon.management_interface.Endpoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.Endpoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.Endpoint}
 */
proto.mullvad_daemon.management_interface.Endpoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {!proto.mullvad_daemon.management_interface.TransportProtocol} */ (reader.readEnum());
      msg.setProtocol(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.Endpoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.Endpoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.Endpoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.Endpoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProtocol();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.Endpoint.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.Endpoint} returns this
 */
proto.mullvad_daemon.management_interface.Endpoint.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional TransportProtocol protocol = 2;
 * @return {!proto.mullvad_daemon.management_interface.TransportProtocol}
 */
proto.mullvad_daemon.management_interface.Endpoint.prototype.getProtocol = function() {
  return /** @type {!proto.mullvad_daemon.management_interface.TransportProtocol} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.mullvad_daemon.management_interface.TransportProtocol} value
 * @return {!proto.mullvad_daemon.management_interface.Endpoint} returns this
 */
proto.mullvad_daemon.management_interface.Endpoint.prototype.setProtocol = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.ProxyEndpoint.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.ProxyEndpoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.ProxyEndpoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.ProxyEndpoint.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    protocol: jspb.Message.getFieldWithDefault(msg, 2, 0),
    proxyType: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.ProxyEndpoint}
 */
proto.mullvad_daemon.management_interface.ProxyEndpoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.ProxyEndpoint;
  return proto.mullvad_daemon.management_interface.ProxyEndpoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.ProxyEndpoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.ProxyEndpoint}
 */
proto.mullvad_daemon.management_interface.ProxyEndpoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {!proto.mullvad_daemon.management_interface.TransportProtocol} */ (reader.readEnum());
      msg.setProtocol(value);
      break;
    case 3:
      var value = /** @type {!proto.mullvad_daemon.management_interface.ProxyEndpoint.ProxyType} */ (reader.readEnum());
      msg.setProxyType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.ProxyEndpoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.ProxyEndpoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.ProxyEndpoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.ProxyEndpoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProtocol();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getProxyType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.mullvad_daemon.management_interface.ProxyEndpoint.ProxyType = {
  SHADOWSOCKS: 0,
  CUSTOM: 1
};

/**
 * optional string address = 1;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.ProxyEndpoint.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.ProxyEndpoint} returns this
 */
proto.mullvad_daemon.management_interface.ProxyEndpoint.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional TransportProtocol protocol = 2;
 * @return {!proto.mullvad_daemon.management_interface.TransportProtocol}
 */
proto.mullvad_daemon.management_interface.ProxyEndpoint.prototype.getProtocol = function() {
  return /** @type {!proto.mullvad_daemon.management_interface.TransportProtocol} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.mullvad_daemon.management_interface.TransportProtocol} value
 * @return {!proto.mullvad_daemon.management_interface.ProxyEndpoint} returns this
 */
proto.mullvad_daemon.management_interface.ProxyEndpoint.prototype.setProtocol = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional ProxyType proxy_type = 3;
 * @return {!proto.mullvad_daemon.management_interface.ProxyEndpoint.ProxyType}
 */
proto.mullvad_daemon.management_interface.ProxyEndpoint.prototype.getProxyType = function() {
  return /** @type {!proto.mullvad_daemon.management_interface.ProxyEndpoint.ProxyType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.mullvad_daemon.management_interface.ProxyEndpoint.ProxyType} value
 * @return {!proto.mullvad_daemon.management_interface.ProxyEndpoint} returns this
 */
proto.mullvad_daemon.management_interface.ProxyEndpoint.prototype.setProxyType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.GeoIpLocation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.GeoIpLocation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.toObject = function(includeInstance, msg) {
  var f, obj = {
    ipv4: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ipv6: jspb.Message.getFieldWithDefault(msg, 2, ""),
    country: jspb.Message.getFieldWithDefault(msg, 3, ""),
    city: jspb.Message.getFieldWithDefault(msg, 4, ""),
    latitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    longitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    mullvadExitIp: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    hostname: jspb.Message.getFieldWithDefault(msg, 8, ""),
    bridgeHostname: jspb.Message.getFieldWithDefault(msg, 9, ""),
    entryHostname: jspb.Message.getFieldWithDefault(msg, 10, ""),
    obfuscatorHostname: jspb.Message.getFieldWithDefault(msg, 11, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.GeoIpLocation}
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.GeoIpLocation;
  return proto.mullvad_daemon.management_interface.GeoIpLocation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.GeoIpLocation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.GeoIpLocation}
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIpv4(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIpv6(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLatitude(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLongitude(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMullvadExitIp(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostname(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setBridgeHostname(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntryHostname(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setObfuscatorHostname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.GeoIpLocation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.GeoIpLocation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLatitude();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getLongitude();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getMullvadExitIp();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional string ipv4 = 1;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.prototype.getIpv4 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.GeoIpLocation} returns this
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.prototype.setIpv4 = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.GeoIpLocation} returns this
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.prototype.clearIpv4 = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.prototype.hasIpv4 = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string ipv6 = 2;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.prototype.getIpv6 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.GeoIpLocation} returns this
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.prototype.setIpv6 = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.GeoIpLocation} returns this
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.prototype.clearIpv6 = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.prototype.hasIpv6 = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string country = 3;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.GeoIpLocation} returns this
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.prototype.setCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string city = 4;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.GeoIpLocation} returns this
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.prototype.setCity = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.GeoIpLocation} returns this
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.prototype.clearCity = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.prototype.hasCity = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double latitude = 5;
 * @return {number}
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.prototype.getLatitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mullvad_daemon.management_interface.GeoIpLocation} returns this
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.prototype.setLatitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double longitude = 6;
 * @return {number}
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.prototype.getLongitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mullvad_daemon.management_interface.GeoIpLocation} returns this
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.prototype.setLongitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional bool mullvad_exit_ip = 7;
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.prototype.getMullvadExitIp = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mullvad_daemon.management_interface.GeoIpLocation} returns this
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.prototype.setMullvadExitIp = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional string hostname = 8;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.prototype.getHostname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.GeoIpLocation} returns this
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.prototype.setHostname = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.GeoIpLocation} returns this
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.prototype.clearHostname = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.prototype.hasHostname = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string bridge_hostname = 9;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.prototype.getBridgeHostname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.GeoIpLocation} returns this
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.prototype.setBridgeHostname = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.GeoIpLocation} returns this
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.prototype.clearBridgeHostname = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.prototype.hasBridgeHostname = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string entry_hostname = 10;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.prototype.getEntryHostname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.GeoIpLocation} returns this
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.prototype.setEntryHostname = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.GeoIpLocation} returns this
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.prototype.clearEntryHostname = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.prototype.hasEntryHostname = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string obfuscator_hostname = 11;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.prototype.getObfuscatorHostname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.GeoIpLocation} returns this
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.prototype.setObfuscatorHostname = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.GeoIpLocation} returns this
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.prototype.clearObfuscatorHostname = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.GeoIpLocation.prototype.hasObfuscatorHostname = function() {
  return jspb.Message.getField(this, 11) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.TunnelMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.TunnelMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.TunnelMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.TunnelMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    tunnelInterface: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.TunnelMetadata}
 */
proto.mullvad_daemon.management_interface.TunnelMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.TunnelMetadata;
  return proto.mullvad_daemon.management_interface.TunnelMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.TunnelMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.TunnelMetadata}
 */
proto.mullvad_daemon.management_interface.TunnelMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTunnelInterface(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.TunnelMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.TunnelMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.TunnelMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.TunnelMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTunnelInterface();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string tunnel_interface = 1;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.TunnelMetadata.prototype.getTunnelInterface = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.TunnelMetadata} returns this
 */
proto.mullvad_daemon.management_interface.TunnelMetadata.prototype.setTunnelInterface = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.BridgeSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.BridgeSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.BridgeSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.BridgeSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
    bridgeType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    normal: (f = msg.getNormal()) && proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints.toObject(includeInstance, f),
    custom: (f = msg.getCustom()) && proto.mullvad_daemon.management_interface.CustomProxy.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.BridgeSettings}
 */
proto.mullvad_daemon.management_interface.BridgeSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.BridgeSettings;
  return proto.mullvad_daemon.management_interface.BridgeSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.BridgeSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.BridgeSettings}
 */
proto.mullvad_daemon.management_interface.BridgeSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mullvad_daemon.management_interface.BridgeSettings.BridgeType} */ (reader.readEnum());
      msg.setBridgeType(value);
      break;
    case 2:
      var value = new proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints.deserializeBinaryFromReader);
      msg.setNormal(value);
      break;
    case 3:
      var value = new proto.mullvad_daemon.management_interface.CustomProxy;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.CustomProxy.deserializeBinaryFromReader);
      msg.setCustom(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.BridgeSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.BridgeSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.BridgeSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.BridgeSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBridgeType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getNormal();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints.serializeBinaryToWriter
    );
  }
  f = message.getCustom();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.mullvad_daemon.management_interface.CustomProxy.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.mullvad_daemon.management_interface.BridgeSettings.BridgeType = {
  NORMAL: 0,
  CUSTOM: 1
};


/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.mullvad_daemon.management_interface.LocationConstraint.toObject(includeInstance, f),
    providersList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    ownership: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints}
 */
proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints;
  return proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints}
 */
proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mullvad_daemon.management_interface.LocationConstraint;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.LocationConstraint.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addProviders(value);
      break;
    case 3:
      var value = /** @type {!proto.mullvad_daemon.management_interface.Ownership} */ (reader.readEnum());
      msg.setOwnership(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mullvad_daemon.management_interface.LocationConstraint.serializeBinaryToWriter
    );
  }
  f = message.getProvidersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getOwnership();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional LocationConstraint location = 1;
 * @return {?proto.mullvad_daemon.management_interface.LocationConstraint}
 */
proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints.prototype.getLocation = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.LocationConstraint} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.LocationConstraint, 1));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.LocationConstraint|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints} returns this
*/
proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints} returns this
 */
proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string providers = 2;
 * @return {!Array<string>}
 */
proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints.prototype.getProvidersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints} returns this
 */
proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints.prototype.setProvidersList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints} returns this
 */
proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints.prototype.addProviders = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints} returns this
 */
proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints.prototype.clearProvidersList = function() {
  return this.setProvidersList([]);
};


/**
 * optional Ownership ownership = 3;
 * @return {!proto.mullvad_daemon.management_interface.Ownership}
 */
proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints.prototype.getOwnership = function() {
  return /** @type {!proto.mullvad_daemon.management_interface.Ownership} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.mullvad_daemon.management_interface.Ownership} value
 * @return {!proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints} returns this
 */
proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints.prototype.setOwnership = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional BridgeType bridge_type = 1;
 * @return {!proto.mullvad_daemon.management_interface.BridgeSettings.BridgeType}
 */
proto.mullvad_daemon.management_interface.BridgeSettings.prototype.getBridgeType = function() {
  return /** @type {!proto.mullvad_daemon.management_interface.BridgeSettings.BridgeType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mullvad_daemon.management_interface.BridgeSettings.BridgeType} value
 * @return {!proto.mullvad_daemon.management_interface.BridgeSettings} returns this
 */
proto.mullvad_daemon.management_interface.BridgeSettings.prototype.setBridgeType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional BridgeConstraints normal = 2;
 * @return {?proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints}
 */
proto.mullvad_daemon.management_interface.BridgeSettings.prototype.getNormal = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints, 2));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.BridgeSettings.BridgeConstraints|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.BridgeSettings} returns this
*/
proto.mullvad_daemon.management_interface.BridgeSettings.prototype.setNormal = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.BridgeSettings} returns this
 */
proto.mullvad_daemon.management_interface.BridgeSettings.prototype.clearNormal = function() {
  return this.setNormal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.BridgeSettings.prototype.hasNormal = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CustomProxy custom = 3;
 * @return {?proto.mullvad_daemon.management_interface.CustomProxy}
 */
proto.mullvad_daemon.management_interface.BridgeSettings.prototype.getCustom = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.CustomProxy} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.CustomProxy, 3));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.CustomProxy|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.BridgeSettings} returns this
*/
proto.mullvad_daemon.management_interface.BridgeSettings.prototype.setCustom = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.BridgeSettings} returns this
 */
proto.mullvad_daemon.management_interface.BridgeSettings.prototype.clearCustom = function() {
  return this.setCustom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.BridgeSettings.prototype.hasCustom = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.mullvad_daemon.management_interface.LocationConstraint.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.mullvad_daemon.management_interface.LocationConstraint.TypeCase = {
  TYPE_NOT_SET: 0,
  CUSTOM_LIST: 1,
  LOCATION: 2
};

/**
 * @return {proto.mullvad_daemon.management_interface.LocationConstraint.TypeCase}
 */
proto.mullvad_daemon.management_interface.LocationConstraint.prototype.getTypeCase = function() {
  return /** @type {proto.mullvad_daemon.management_interface.LocationConstraint.TypeCase} */(jspb.Message.computeOneofCase(this, proto.mullvad_daemon.management_interface.LocationConstraint.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.LocationConstraint.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.LocationConstraint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.LocationConstraint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.LocationConstraint.toObject = function(includeInstance, msg) {
  var f, obj = {
    customList: jspb.Message.getFieldWithDefault(msg, 1, ""),
    location: (f = msg.getLocation()) && proto.mullvad_daemon.management_interface.GeographicLocationConstraint.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.LocationConstraint}
 */
proto.mullvad_daemon.management_interface.LocationConstraint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.LocationConstraint;
  return proto.mullvad_daemon.management_interface.LocationConstraint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.LocationConstraint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.LocationConstraint}
 */
proto.mullvad_daemon.management_interface.LocationConstraint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomList(value);
      break;
    case 2:
      var value = new proto.mullvad_daemon.management_interface.GeographicLocationConstraint;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.GeographicLocationConstraint.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.LocationConstraint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.LocationConstraint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.LocationConstraint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.LocationConstraint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mullvad_daemon.management_interface.GeographicLocationConstraint.serializeBinaryToWriter
    );
  }
};


/**
 * optional string custom_list = 1;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.LocationConstraint.prototype.getCustomList = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.LocationConstraint} returns this
 */
proto.mullvad_daemon.management_interface.LocationConstraint.prototype.setCustomList = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.mullvad_daemon.management_interface.LocationConstraint.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.LocationConstraint} returns this
 */
proto.mullvad_daemon.management_interface.LocationConstraint.prototype.clearCustomList = function() {
  return jspb.Message.setOneofField(this, 1, proto.mullvad_daemon.management_interface.LocationConstraint.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.LocationConstraint.prototype.hasCustomList = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GeographicLocationConstraint location = 2;
 * @return {?proto.mullvad_daemon.management_interface.GeographicLocationConstraint}
 */
proto.mullvad_daemon.management_interface.LocationConstraint.prototype.getLocation = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.GeographicLocationConstraint} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.GeographicLocationConstraint, 2));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.GeographicLocationConstraint|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.LocationConstraint} returns this
*/
proto.mullvad_daemon.management_interface.LocationConstraint.prototype.setLocation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.mullvad_daemon.management_interface.LocationConstraint.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.LocationConstraint} returns this
 */
proto.mullvad_daemon.management_interface.LocationConstraint.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.LocationConstraint.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.GeographicLocationConstraint.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.GeographicLocationConstraint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.GeographicLocationConstraint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.GeographicLocationConstraint.toObject = function(includeInstance, msg) {
  var f, obj = {
    country: jspb.Message.getFieldWithDefault(msg, 1, ""),
    city: jspb.Message.getFieldWithDefault(msg, 2, ""),
    hostname: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.GeographicLocationConstraint}
 */
proto.mullvad_daemon.management_interface.GeographicLocationConstraint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.GeographicLocationConstraint;
  return proto.mullvad_daemon.management_interface.GeographicLocationConstraint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.GeographicLocationConstraint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.GeographicLocationConstraint}
 */
proto.mullvad_daemon.management_interface.GeographicLocationConstraint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.GeographicLocationConstraint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.GeographicLocationConstraint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.GeographicLocationConstraint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.GeographicLocationConstraint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string country = 1;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.GeographicLocationConstraint.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.GeographicLocationConstraint} returns this
 */
proto.mullvad_daemon.management_interface.GeographicLocationConstraint.prototype.setCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string city = 2;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.GeographicLocationConstraint.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.GeographicLocationConstraint} returns this
 */
proto.mullvad_daemon.management_interface.GeographicLocationConstraint.prototype.setCity = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.GeographicLocationConstraint} returns this
 */
proto.mullvad_daemon.management_interface.GeographicLocationConstraint.prototype.clearCity = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.GeographicLocationConstraint.prototype.hasCity = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string hostname = 3;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.GeographicLocationConstraint.prototype.getHostname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.GeographicLocationConstraint} returns this
 */
proto.mullvad_daemon.management_interface.GeographicLocationConstraint.prototype.setHostname = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.GeographicLocationConstraint} returns this
 */
proto.mullvad_daemon.management_interface.GeographicLocationConstraint.prototype.clearHostname = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.GeographicLocationConstraint.prototype.hasHostname = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.BridgeState.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.BridgeState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.BridgeState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.BridgeState.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.BridgeState}
 */
proto.mullvad_daemon.management_interface.BridgeState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.BridgeState;
  return proto.mullvad_daemon.management_interface.BridgeState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.BridgeState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.BridgeState}
 */
proto.mullvad_daemon.management_interface.BridgeState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mullvad_daemon.management_interface.BridgeState.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.BridgeState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.BridgeState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.BridgeState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.BridgeState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.mullvad_daemon.management_interface.BridgeState.State = {
  AUTO: 0,
  ON: 1,
  OFF: 2
};

/**
 * optional State state = 1;
 * @return {!proto.mullvad_daemon.management_interface.BridgeState.State}
 */
proto.mullvad_daemon.management_interface.BridgeState.prototype.getState = function() {
  return /** @type {!proto.mullvad_daemon.management_interface.BridgeState.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mullvad_daemon.management_interface.BridgeState.State} value
 * @return {!proto.mullvad_daemon.management_interface.BridgeState} returns this
 */
proto.mullvad_daemon.management_interface.BridgeState.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.Udp2TcpObfuscationSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.Udp2TcpObfuscationSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.Udp2TcpObfuscationSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.Udp2TcpObfuscationSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
    port: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.Udp2TcpObfuscationSettings}
 */
proto.mullvad_daemon.management_interface.Udp2TcpObfuscationSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.Udp2TcpObfuscationSettings;
  return proto.mullvad_daemon.management_interface.Udp2TcpObfuscationSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.Udp2TcpObfuscationSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.Udp2TcpObfuscationSettings}
 */
proto.mullvad_daemon.management_interface.Udp2TcpObfuscationSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.Udp2TcpObfuscationSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.Udp2TcpObfuscationSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.Udp2TcpObfuscationSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.Udp2TcpObfuscationSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 port = 1;
 * @return {number}
 */
proto.mullvad_daemon.management_interface.Udp2TcpObfuscationSettings.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mullvad_daemon.management_interface.Udp2TcpObfuscationSettings} returns this
 */
proto.mullvad_daemon.management_interface.Udp2TcpObfuscationSettings.prototype.setPort = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.Udp2TcpObfuscationSettings} returns this
 */
proto.mullvad_daemon.management_interface.Udp2TcpObfuscationSettings.prototype.clearPort = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.Udp2TcpObfuscationSettings.prototype.hasPort = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.ShadowsocksSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.ShadowsocksSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.ShadowsocksSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.ShadowsocksSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
    port: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.ShadowsocksSettings}
 */
proto.mullvad_daemon.management_interface.ShadowsocksSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.ShadowsocksSettings;
  return proto.mullvad_daemon.management_interface.ShadowsocksSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.ShadowsocksSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.ShadowsocksSettings}
 */
proto.mullvad_daemon.management_interface.ShadowsocksSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.ShadowsocksSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.ShadowsocksSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.ShadowsocksSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.ShadowsocksSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 port = 1;
 * @return {number}
 */
proto.mullvad_daemon.management_interface.ShadowsocksSettings.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mullvad_daemon.management_interface.ShadowsocksSettings} returns this
 */
proto.mullvad_daemon.management_interface.ShadowsocksSettings.prototype.setPort = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.ShadowsocksSettings} returns this
 */
proto.mullvad_daemon.management_interface.ShadowsocksSettings.prototype.clearPort = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.ShadowsocksSettings.prototype.hasPort = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.ObfuscationSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.ObfuscationSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.ObfuscationSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.ObfuscationSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
    selectedObfuscation: jspb.Message.getFieldWithDefault(msg, 1, 0),
    udp2tcp: (f = msg.getUdp2tcp()) && proto.mullvad_daemon.management_interface.Udp2TcpObfuscationSettings.toObject(includeInstance, f),
    shadowsocks: (f = msg.getShadowsocks()) && proto.mullvad_daemon.management_interface.ShadowsocksSettings.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.ObfuscationSettings}
 */
proto.mullvad_daemon.management_interface.ObfuscationSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.ObfuscationSettings;
  return proto.mullvad_daemon.management_interface.ObfuscationSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.ObfuscationSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.ObfuscationSettings}
 */
proto.mullvad_daemon.management_interface.ObfuscationSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mullvad_daemon.management_interface.ObfuscationSettings.SelectedObfuscation} */ (reader.readEnum());
      msg.setSelectedObfuscation(value);
      break;
    case 2:
      var value = new proto.mullvad_daemon.management_interface.Udp2TcpObfuscationSettings;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.Udp2TcpObfuscationSettings.deserializeBinaryFromReader);
      msg.setUdp2tcp(value);
      break;
    case 3:
      var value = new proto.mullvad_daemon.management_interface.ShadowsocksSettings;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.ShadowsocksSettings.deserializeBinaryFromReader);
      msg.setShadowsocks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.ObfuscationSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.ObfuscationSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.ObfuscationSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.ObfuscationSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSelectedObfuscation();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getUdp2tcp();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mullvad_daemon.management_interface.Udp2TcpObfuscationSettings.serializeBinaryToWriter
    );
  }
  f = message.getShadowsocks();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.mullvad_daemon.management_interface.ShadowsocksSettings.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.mullvad_daemon.management_interface.ObfuscationSettings.SelectedObfuscation = {
  AUTO: 0,
  OFF: 1,
  UDP2TCP: 2,
  SHADOWSOCKS: 3
};

/**
 * optional SelectedObfuscation selected_obfuscation = 1;
 * @return {!proto.mullvad_daemon.management_interface.ObfuscationSettings.SelectedObfuscation}
 */
proto.mullvad_daemon.management_interface.ObfuscationSettings.prototype.getSelectedObfuscation = function() {
  return /** @type {!proto.mullvad_daemon.management_interface.ObfuscationSettings.SelectedObfuscation} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mullvad_daemon.management_interface.ObfuscationSettings.SelectedObfuscation} value
 * @return {!proto.mullvad_daemon.management_interface.ObfuscationSettings} returns this
 */
proto.mullvad_daemon.management_interface.ObfuscationSettings.prototype.setSelectedObfuscation = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Udp2TcpObfuscationSettings udp2tcp = 2;
 * @return {?proto.mullvad_daemon.management_interface.Udp2TcpObfuscationSettings}
 */
proto.mullvad_daemon.management_interface.ObfuscationSettings.prototype.getUdp2tcp = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.Udp2TcpObfuscationSettings} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.Udp2TcpObfuscationSettings, 2));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.Udp2TcpObfuscationSettings|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.ObfuscationSettings} returns this
*/
proto.mullvad_daemon.management_interface.ObfuscationSettings.prototype.setUdp2tcp = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.ObfuscationSettings} returns this
 */
proto.mullvad_daemon.management_interface.ObfuscationSettings.prototype.clearUdp2tcp = function() {
  return this.setUdp2tcp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.ObfuscationSettings.prototype.hasUdp2tcp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ShadowsocksSettings shadowsocks = 3;
 * @return {?proto.mullvad_daemon.management_interface.ShadowsocksSettings}
 */
proto.mullvad_daemon.management_interface.ObfuscationSettings.prototype.getShadowsocks = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.ShadowsocksSettings} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.ShadowsocksSettings, 3));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.ShadowsocksSettings|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.ObfuscationSettings} returns this
*/
proto.mullvad_daemon.management_interface.ObfuscationSettings.prototype.setShadowsocks = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.ObfuscationSettings} returns this
 */
proto.mullvad_daemon.management_interface.ObfuscationSettings.prototype.clearShadowsocks = function() {
  return this.setShadowsocks(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.ObfuscationSettings.prototype.hasShadowsocks = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mullvad_daemon.management_interface.CustomList.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.CustomList.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.CustomList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.CustomList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.CustomList.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    locationsList: jspb.Message.toObjectList(msg.getLocationsList(),
    proto.mullvad_daemon.management_interface.GeographicLocationConstraint.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.CustomList}
 */
proto.mullvad_daemon.management_interface.CustomList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.CustomList;
  return proto.mullvad_daemon.management_interface.CustomList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.CustomList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.CustomList}
 */
proto.mullvad_daemon.management_interface.CustomList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new proto.mullvad_daemon.management_interface.GeographicLocationConstraint;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.GeographicLocationConstraint.deserializeBinaryFromReader);
      msg.addLocations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.CustomList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.CustomList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.CustomList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.CustomList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLocationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.mullvad_daemon.management_interface.GeographicLocationConstraint.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.CustomList.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.CustomList} returns this
 */
proto.mullvad_daemon.management_interface.CustomList.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.CustomList.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.CustomList} returns this
 */
proto.mullvad_daemon.management_interface.CustomList.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated GeographicLocationConstraint locations = 3;
 * @return {!Array<!proto.mullvad_daemon.management_interface.GeographicLocationConstraint>}
 */
proto.mullvad_daemon.management_interface.CustomList.prototype.getLocationsList = function() {
  return /** @type{!Array<!proto.mullvad_daemon.management_interface.GeographicLocationConstraint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mullvad_daemon.management_interface.GeographicLocationConstraint, 3));
};


/**
 * @param {!Array<!proto.mullvad_daemon.management_interface.GeographicLocationConstraint>} value
 * @return {!proto.mullvad_daemon.management_interface.CustomList} returns this
*/
proto.mullvad_daemon.management_interface.CustomList.prototype.setLocationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.mullvad_daemon.management_interface.GeographicLocationConstraint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mullvad_daemon.management_interface.GeographicLocationConstraint}
 */
proto.mullvad_daemon.management_interface.CustomList.prototype.addLocations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.mullvad_daemon.management_interface.GeographicLocationConstraint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mullvad_daemon.management_interface.CustomList} returns this
 */
proto.mullvad_daemon.management_interface.CustomList.prototype.clearLocationsList = function() {
  return this.setLocationsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mullvad_daemon.management_interface.CustomListSettings.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.CustomListSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.CustomListSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.CustomListSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.CustomListSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
    customListsList: jspb.Message.toObjectList(msg.getCustomListsList(),
    proto.mullvad_daemon.management_interface.CustomList.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.CustomListSettings}
 */
proto.mullvad_daemon.management_interface.CustomListSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.CustomListSettings;
  return proto.mullvad_daemon.management_interface.CustomListSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.CustomListSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.CustomListSettings}
 */
proto.mullvad_daemon.management_interface.CustomListSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mullvad_daemon.management_interface.CustomList;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.CustomList.deserializeBinaryFromReader);
      msg.addCustomLists(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.CustomListSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.CustomListSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.CustomListSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.CustomListSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomListsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.mullvad_daemon.management_interface.CustomList.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CustomList custom_lists = 1;
 * @return {!Array<!proto.mullvad_daemon.management_interface.CustomList>}
 */
proto.mullvad_daemon.management_interface.CustomListSettings.prototype.getCustomListsList = function() {
  return /** @type{!Array<!proto.mullvad_daemon.management_interface.CustomList>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mullvad_daemon.management_interface.CustomList, 1));
};


/**
 * @param {!Array<!proto.mullvad_daemon.management_interface.CustomList>} value
 * @return {!proto.mullvad_daemon.management_interface.CustomListSettings} returns this
*/
proto.mullvad_daemon.management_interface.CustomListSettings.prototype.setCustomListsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.mullvad_daemon.management_interface.CustomList=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mullvad_daemon.management_interface.CustomList}
 */
proto.mullvad_daemon.management_interface.CustomListSettings.prototype.addCustomLists = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.mullvad_daemon.management_interface.CustomList, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mullvad_daemon.management_interface.CustomListSettings} returns this
 */
proto.mullvad_daemon.management_interface.CustomListSettings.prototype.clearCustomListsList = function() {
  return this.setCustomListsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.Socks5Local.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.Socks5Local.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.Socks5Local} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.Socks5Local.toObject = function(includeInstance, msg) {
  var f, obj = {
    remoteIp: jspb.Message.getFieldWithDefault(msg, 1, ""),
    remotePort: jspb.Message.getFieldWithDefault(msg, 2, 0),
    remoteTransportProtocol: jspb.Message.getFieldWithDefault(msg, 3, 0),
    localPort: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.Socks5Local}
 */
proto.mullvad_daemon.management_interface.Socks5Local.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.Socks5Local;
  return proto.mullvad_daemon.management_interface.Socks5Local.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.Socks5Local} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.Socks5Local}
 */
proto.mullvad_daemon.management_interface.Socks5Local.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRemoteIp(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRemotePort(value);
      break;
    case 3:
      var value = /** @type {!proto.mullvad_daemon.management_interface.TransportProtocol} */ (reader.readEnum());
      msg.setRemoteTransportProtocol(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLocalPort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.Socks5Local.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.Socks5Local.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.Socks5Local} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.Socks5Local.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRemoteIp();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRemotePort();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getRemoteTransportProtocol();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getLocalPort();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional string remote_ip = 1;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.Socks5Local.prototype.getRemoteIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.Socks5Local} returns this
 */
proto.mullvad_daemon.management_interface.Socks5Local.prototype.setRemoteIp = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 remote_port = 2;
 * @return {number}
 */
proto.mullvad_daemon.management_interface.Socks5Local.prototype.getRemotePort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.mullvad_daemon.management_interface.Socks5Local} returns this
 */
proto.mullvad_daemon.management_interface.Socks5Local.prototype.setRemotePort = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional TransportProtocol remote_transport_protocol = 3;
 * @return {!proto.mullvad_daemon.management_interface.TransportProtocol}
 */
proto.mullvad_daemon.management_interface.Socks5Local.prototype.getRemoteTransportProtocol = function() {
  return /** @type {!proto.mullvad_daemon.management_interface.TransportProtocol} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.mullvad_daemon.management_interface.TransportProtocol} value
 * @return {!proto.mullvad_daemon.management_interface.Socks5Local} returns this
 */
proto.mullvad_daemon.management_interface.Socks5Local.prototype.setRemoteTransportProtocol = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional uint32 local_port = 4;
 * @return {number}
 */
proto.mullvad_daemon.management_interface.Socks5Local.prototype.getLocalPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.mullvad_daemon.management_interface.Socks5Local} returns this
 */
proto.mullvad_daemon.management_interface.Socks5Local.prototype.setLocalPort = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.SocksAuth.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.SocksAuth.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.SocksAuth} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.SocksAuth.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.SocksAuth}
 */
proto.mullvad_daemon.management_interface.SocksAuth.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.SocksAuth;
  return proto.mullvad_daemon.management_interface.SocksAuth.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.SocksAuth} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.SocksAuth}
 */
proto.mullvad_daemon.management_interface.SocksAuth.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.SocksAuth.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.SocksAuth.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.SocksAuth} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.SocksAuth.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string username = 1;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.SocksAuth.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.SocksAuth} returns this
 */
proto.mullvad_daemon.management_interface.SocksAuth.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.SocksAuth.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.SocksAuth} returns this
 */
proto.mullvad_daemon.management_interface.SocksAuth.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.Socks5Remote.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.Socks5Remote.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.Socks5Remote} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.Socks5Remote.toObject = function(includeInstance, msg) {
  var f, obj = {
    ip: jspb.Message.getFieldWithDefault(msg, 1, ""),
    port: jspb.Message.getFieldWithDefault(msg, 2, 0),
    auth: (f = msg.getAuth()) && proto.mullvad_daemon.management_interface.SocksAuth.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.Socks5Remote}
 */
proto.mullvad_daemon.management_interface.Socks5Remote.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.Socks5Remote;
  return proto.mullvad_daemon.management_interface.Socks5Remote.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.Socks5Remote} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.Socks5Remote}
 */
proto.mullvad_daemon.management_interface.Socks5Remote.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIp(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    case 3:
      var value = new proto.mullvad_daemon.management_interface.SocksAuth;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.SocksAuth.deserializeBinaryFromReader);
      msg.setAuth(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.Socks5Remote.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.Socks5Remote.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.Socks5Remote} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.Socks5Remote.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIp();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getAuth();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.mullvad_daemon.management_interface.SocksAuth.serializeBinaryToWriter
    );
  }
};


/**
 * optional string ip = 1;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.Socks5Remote.prototype.getIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.Socks5Remote} returns this
 */
proto.mullvad_daemon.management_interface.Socks5Remote.prototype.setIp = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 port = 2;
 * @return {number}
 */
proto.mullvad_daemon.management_interface.Socks5Remote.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.mullvad_daemon.management_interface.Socks5Remote} returns this
 */
proto.mullvad_daemon.management_interface.Socks5Remote.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional SocksAuth auth = 3;
 * @return {?proto.mullvad_daemon.management_interface.SocksAuth}
 */
proto.mullvad_daemon.management_interface.Socks5Remote.prototype.getAuth = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.SocksAuth} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.SocksAuth, 3));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.SocksAuth|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.Socks5Remote} returns this
*/
proto.mullvad_daemon.management_interface.Socks5Remote.prototype.setAuth = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.Socks5Remote} returns this
 */
proto.mullvad_daemon.management_interface.Socks5Remote.prototype.clearAuth = function() {
  return this.setAuth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.Socks5Remote.prototype.hasAuth = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.Shadowsocks.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.Shadowsocks.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.Shadowsocks} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.Shadowsocks.toObject = function(includeInstance, msg) {
  var f, obj = {
    ip: jspb.Message.getFieldWithDefault(msg, 1, ""),
    port: jspb.Message.getFieldWithDefault(msg, 2, 0),
    password: jspb.Message.getFieldWithDefault(msg, 3, ""),
    cipher: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.Shadowsocks}
 */
proto.mullvad_daemon.management_interface.Shadowsocks.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.Shadowsocks;
  return proto.mullvad_daemon.management_interface.Shadowsocks.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.Shadowsocks} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.Shadowsocks}
 */
proto.mullvad_daemon.management_interface.Shadowsocks.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIp(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCipher(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.Shadowsocks.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.Shadowsocks.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.Shadowsocks} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.Shadowsocks.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIp();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCipher();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string ip = 1;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.Shadowsocks.prototype.getIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.Shadowsocks} returns this
 */
proto.mullvad_daemon.management_interface.Shadowsocks.prototype.setIp = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 port = 2;
 * @return {number}
 */
proto.mullvad_daemon.management_interface.Shadowsocks.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.mullvad_daemon.management_interface.Shadowsocks} returns this
 */
proto.mullvad_daemon.management_interface.Shadowsocks.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string password = 3;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.Shadowsocks.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.Shadowsocks} returns this
 */
proto.mullvad_daemon.management_interface.Shadowsocks.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string cipher = 4;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.Shadowsocks.prototype.getCipher = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.Shadowsocks} returns this
 */
proto.mullvad_daemon.management_interface.Shadowsocks.prototype.setCipher = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.mullvad_daemon.management_interface.CustomProxy.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.mullvad_daemon.management_interface.CustomProxy.ProxyMethodCase = {
  PROXY_METHOD_NOT_SET: 0,
  SOCKS5LOCAL: 1,
  SOCKS5REMOTE: 2,
  SHADOWSOCKS: 3
};

/**
 * @return {proto.mullvad_daemon.management_interface.CustomProxy.ProxyMethodCase}
 */
proto.mullvad_daemon.management_interface.CustomProxy.prototype.getProxyMethodCase = function() {
  return /** @type {proto.mullvad_daemon.management_interface.CustomProxy.ProxyMethodCase} */(jspb.Message.computeOneofCase(this, proto.mullvad_daemon.management_interface.CustomProxy.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.CustomProxy.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.CustomProxy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.CustomProxy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.CustomProxy.toObject = function(includeInstance, msg) {
  var f, obj = {
    socks5local: (f = msg.getSocks5local()) && proto.mullvad_daemon.management_interface.Socks5Local.toObject(includeInstance, f),
    socks5remote: (f = msg.getSocks5remote()) && proto.mullvad_daemon.management_interface.Socks5Remote.toObject(includeInstance, f),
    shadowsocks: (f = msg.getShadowsocks()) && proto.mullvad_daemon.management_interface.Shadowsocks.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.CustomProxy}
 */
proto.mullvad_daemon.management_interface.CustomProxy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.CustomProxy;
  return proto.mullvad_daemon.management_interface.CustomProxy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.CustomProxy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.CustomProxy}
 */
proto.mullvad_daemon.management_interface.CustomProxy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mullvad_daemon.management_interface.Socks5Local;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.Socks5Local.deserializeBinaryFromReader);
      msg.setSocks5local(value);
      break;
    case 2:
      var value = new proto.mullvad_daemon.management_interface.Socks5Remote;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.Socks5Remote.deserializeBinaryFromReader);
      msg.setSocks5remote(value);
      break;
    case 3:
      var value = new proto.mullvad_daemon.management_interface.Shadowsocks;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.Shadowsocks.deserializeBinaryFromReader);
      msg.setShadowsocks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.CustomProxy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.CustomProxy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.CustomProxy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.CustomProxy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSocks5local();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mullvad_daemon.management_interface.Socks5Local.serializeBinaryToWriter
    );
  }
  f = message.getSocks5remote();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mullvad_daemon.management_interface.Socks5Remote.serializeBinaryToWriter
    );
  }
  f = message.getShadowsocks();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.mullvad_daemon.management_interface.Shadowsocks.serializeBinaryToWriter
    );
  }
};


/**
 * optional Socks5Local socks5local = 1;
 * @return {?proto.mullvad_daemon.management_interface.Socks5Local}
 */
proto.mullvad_daemon.management_interface.CustomProxy.prototype.getSocks5local = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.Socks5Local} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.Socks5Local, 1));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.Socks5Local|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.CustomProxy} returns this
*/
proto.mullvad_daemon.management_interface.CustomProxy.prototype.setSocks5local = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.mullvad_daemon.management_interface.CustomProxy.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.CustomProxy} returns this
 */
proto.mullvad_daemon.management_interface.CustomProxy.prototype.clearSocks5local = function() {
  return this.setSocks5local(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.CustomProxy.prototype.hasSocks5local = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Socks5Remote socks5remote = 2;
 * @return {?proto.mullvad_daemon.management_interface.Socks5Remote}
 */
proto.mullvad_daemon.management_interface.CustomProxy.prototype.getSocks5remote = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.Socks5Remote} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.Socks5Remote, 2));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.Socks5Remote|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.CustomProxy} returns this
*/
proto.mullvad_daemon.management_interface.CustomProxy.prototype.setSocks5remote = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.mullvad_daemon.management_interface.CustomProxy.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.CustomProxy} returns this
 */
proto.mullvad_daemon.management_interface.CustomProxy.prototype.clearSocks5remote = function() {
  return this.setSocks5remote(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.CustomProxy.prototype.hasSocks5remote = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Shadowsocks shadowsocks = 3;
 * @return {?proto.mullvad_daemon.management_interface.Shadowsocks}
 */
proto.mullvad_daemon.management_interface.CustomProxy.prototype.getShadowsocks = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.Shadowsocks} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.Shadowsocks, 3));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.Shadowsocks|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.CustomProxy} returns this
*/
proto.mullvad_daemon.management_interface.CustomProxy.prototype.setShadowsocks = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.mullvad_daemon.management_interface.CustomProxy.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.CustomProxy} returns this
 */
proto.mullvad_daemon.management_interface.CustomProxy.prototype.clearShadowsocks = function() {
  return this.setShadowsocks(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.CustomProxy.prototype.hasShadowsocks = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.mullvad_daemon.management_interface.AccessMethod.oneofGroups_ = [[1,2,3,4]];

/**
 * @enum {number}
 */
proto.mullvad_daemon.management_interface.AccessMethod.AccessMethodCase = {
  ACCESS_METHOD_NOT_SET: 0,
  DIRECT: 1,
  BRIDGES: 2,
  ENCRYPTED_DNS_PROXY: 3,
  CUSTOM: 4
};

/**
 * @return {proto.mullvad_daemon.management_interface.AccessMethod.AccessMethodCase}
 */
proto.mullvad_daemon.management_interface.AccessMethod.prototype.getAccessMethodCase = function() {
  return /** @type {proto.mullvad_daemon.management_interface.AccessMethod.AccessMethodCase} */(jspb.Message.computeOneofCase(this, proto.mullvad_daemon.management_interface.AccessMethod.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.AccessMethod.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.AccessMethod.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.AccessMethod} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.AccessMethod.toObject = function(includeInstance, msg) {
  var f, obj = {
    direct: (f = msg.getDirect()) && proto.mullvad_daemon.management_interface.AccessMethod.Direct.toObject(includeInstance, f),
    bridges: (f = msg.getBridges()) && proto.mullvad_daemon.management_interface.AccessMethod.Bridges.toObject(includeInstance, f),
    encryptedDnsProxy: (f = msg.getEncryptedDnsProxy()) && proto.mullvad_daemon.management_interface.AccessMethod.EncryptedDnsProxy.toObject(includeInstance, f),
    custom: (f = msg.getCustom()) && proto.mullvad_daemon.management_interface.CustomProxy.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.AccessMethod}
 */
proto.mullvad_daemon.management_interface.AccessMethod.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.AccessMethod;
  return proto.mullvad_daemon.management_interface.AccessMethod.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.AccessMethod} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.AccessMethod}
 */
proto.mullvad_daemon.management_interface.AccessMethod.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mullvad_daemon.management_interface.AccessMethod.Direct;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.AccessMethod.Direct.deserializeBinaryFromReader);
      msg.setDirect(value);
      break;
    case 2:
      var value = new proto.mullvad_daemon.management_interface.AccessMethod.Bridges;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.AccessMethod.Bridges.deserializeBinaryFromReader);
      msg.setBridges(value);
      break;
    case 3:
      var value = new proto.mullvad_daemon.management_interface.AccessMethod.EncryptedDnsProxy;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.AccessMethod.EncryptedDnsProxy.deserializeBinaryFromReader);
      msg.setEncryptedDnsProxy(value);
      break;
    case 4:
      var value = new proto.mullvad_daemon.management_interface.CustomProxy;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.CustomProxy.deserializeBinaryFromReader);
      msg.setCustom(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.AccessMethod.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.AccessMethod.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.AccessMethod} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.AccessMethod.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDirect();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mullvad_daemon.management_interface.AccessMethod.Direct.serializeBinaryToWriter
    );
  }
  f = message.getBridges();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mullvad_daemon.management_interface.AccessMethod.Bridges.serializeBinaryToWriter
    );
  }
  f = message.getEncryptedDnsProxy();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.mullvad_daemon.management_interface.AccessMethod.EncryptedDnsProxy.serializeBinaryToWriter
    );
  }
  f = message.getCustom();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.mullvad_daemon.management_interface.CustomProxy.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.AccessMethod.Direct.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.AccessMethod.Direct.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.AccessMethod.Direct} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.AccessMethod.Direct.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.AccessMethod.Direct}
 */
proto.mullvad_daemon.management_interface.AccessMethod.Direct.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.AccessMethod.Direct;
  return proto.mullvad_daemon.management_interface.AccessMethod.Direct.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.AccessMethod.Direct} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.AccessMethod.Direct}
 */
proto.mullvad_daemon.management_interface.AccessMethod.Direct.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.AccessMethod.Direct.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.AccessMethod.Direct.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.AccessMethod.Direct} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.AccessMethod.Direct.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.AccessMethod.Bridges.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.AccessMethod.Bridges.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.AccessMethod.Bridges} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.AccessMethod.Bridges.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.AccessMethod.Bridges}
 */
proto.mullvad_daemon.management_interface.AccessMethod.Bridges.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.AccessMethod.Bridges;
  return proto.mullvad_daemon.management_interface.AccessMethod.Bridges.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.AccessMethod.Bridges} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.AccessMethod.Bridges}
 */
proto.mullvad_daemon.management_interface.AccessMethod.Bridges.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.AccessMethod.Bridges.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.AccessMethod.Bridges.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.AccessMethod.Bridges} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.AccessMethod.Bridges.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.AccessMethod.EncryptedDnsProxy.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.AccessMethod.EncryptedDnsProxy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.AccessMethod.EncryptedDnsProxy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.AccessMethod.EncryptedDnsProxy.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.AccessMethod.EncryptedDnsProxy}
 */
proto.mullvad_daemon.management_interface.AccessMethod.EncryptedDnsProxy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.AccessMethod.EncryptedDnsProxy;
  return proto.mullvad_daemon.management_interface.AccessMethod.EncryptedDnsProxy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.AccessMethod.EncryptedDnsProxy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.AccessMethod.EncryptedDnsProxy}
 */
proto.mullvad_daemon.management_interface.AccessMethod.EncryptedDnsProxy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.AccessMethod.EncryptedDnsProxy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.AccessMethod.EncryptedDnsProxy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.AccessMethod.EncryptedDnsProxy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.AccessMethod.EncryptedDnsProxy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * optional Direct direct = 1;
 * @return {?proto.mullvad_daemon.management_interface.AccessMethod.Direct}
 */
proto.mullvad_daemon.management_interface.AccessMethod.prototype.getDirect = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.AccessMethod.Direct} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.AccessMethod.Direct, 1));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.AccessMethod.Direct|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.AccessMethod} returns this
*/
proto.mullvad_daemon.management_interface.AccessMethod.prototype.setDirect = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.mullvad_daemon.management_interface.AccessMethod.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.AccessMethod} returns this
 */
proto.mullvad_daemon.management_interface.AccessMethod.prototype.clearDirect = function() {
  return this.setDirect(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.AccessMethod.prototype.hasDirect = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Bridges bridges = 2;
 * @return {?proto.mullvad_daemon.management_interface.AccessMethod.Bridges}
 */
proto.mullvad_daemon.management_interface.AccessMethod.prototype.getBridges = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.AccessMethod.Bridges} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.AccessMethod.Bridges, 2));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.AccessMethod.Bridges|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.AccessMethod} returns this
*/
proto.mullvad_daemon.management_interface.AccessMethod.prototype.setBridges = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.mullvad_daemon.management_interface.AccessMethod.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.AccessMethod} returns this
 */
proto.mullvad_daemon.management_interface.AccessMethod.prototype.clearBridges = function() {
  return this.setBridges(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.AccessMethod.prototype.hasBridges = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional EncryptedDnsProxy encrypted_dns_proxy = 3;
 * @return {?proto.mullvad_daemon.management_interface.AccessMethod.EncryptedDnsProxy}
 */
proto.mullvad_daemon.management_interface.AccessMethod.prototype.getEncryptedDnsProxy = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.AccessMethod.EncryptedDnsProxy} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.AccessMethod.EncryptedDnsProxy, 3));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.AccessMethod.EncryptedDnsProxy|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.AccessMethod} returns this
*/
proto.mullvad_daemon.management_interface.AccessMethod.prototype.setEncryptedDnsProxy = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.mullvad_daemon.management_interface.AccessMethod.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.AccessMethod} returns this
 */
proto.mullvad_daemon.management_interface.AccessMethod.prototype.clearEncryptedDnsProxy = function() {
  return this.setEncryptedDnsProxy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.AccessMethod.prototype.hasEncryptedDnsProxy = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CustomProxy custom = 4;
 * @return {?proto.mullvad_daemon.management_interface.CustomProxy}
 */
proto.mullvad_daemon.management_interface.AccessMethod.prototype.getCustom = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.CustomProxy} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.CustomProxy, 4));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.CustomProxy|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.AccessMethod} returns this
*/
proto.mullvad_daemon.management_interface.AccessMethod.prototype.setCustom = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.mullvad_daemon.management_interface.AccessMethod.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.AccessMethod} returns this
 */
proto.mullvad_daemon.management_interface.AccessMethod.prototype.clearCustom = function() {
  return this.setCustom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.AccessMethod.prototype.hasCustom = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.AccessMethodSetting.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.AccessMethodSetting.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.AccessMethodSetting} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.AccessMethodSetting.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto.mullvad_daemon.management_interface.UUID.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    enabled: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    accessMethod: (f = msg.getAccessMethod()) && proto.mullvad_daemon.management_interface.AccessMethod.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.AccessMethodSetting}
 */
proto.mullvad_daemon.management_interface.AccessMethodSetting.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.AccessMethodSetting;
  return proto.mullvad_daemon.management_interface.AccessMethodSetting.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.AccessMethodSetting} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.AccessMethodSetting}
 */
proto.mullvad_daemon.management_interface.AccessMethodSetting.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mullvad_daemon.management_interface.UUID;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.UUID.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 4:
      var value = new proto.mullvad_daemon.management_interface.AccessMethod;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.AccessMethod.deserializeBinaryFromReader);
      msg.setAccessMethod(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.AccessMethodSetting.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.AccessMethodSetting.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.AccessMethodSetting} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.AccessMethodSetting.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mullvad_daemon.management_interface.UUID.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getAccessMethod();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.mullvad_daemon.management_interface.AccessMethod.serializeBinaryToWriter
    );
  }
};


/**
 * optional UUID id = 1;
 * @return {?proto.mullvad_daemon.management_interface.UUID}
 */
proto.mullvad_daemon.management_interface.AccessMethodSetting.prototype.getId = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.UUID} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.UUID, 1));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.UUID|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.AccessMethodSetting} returns this
*/
proto.mullvad_daemon.management_interface.AccessMethodSetting.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.AccessMethodSetting} returns this
 */
proto.mullvad_daemon.management_interface.AccessMethodSetting.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.AccessMethodSetting.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.AccessMethodSetting.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.AccessMethodSetting} returns this
 */
proto.mullvad_daemon.management_interface.AccessMethodSetting.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool enabled = 3;
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.AccessMethodSetting.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mullvad_daemon.management_interface.AccessMethodSetting} returns this
 */
proto.mullvad_daemon.management_interface.AccessMethodSetting.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional AccessMethod access_method = 4;
 * @return {?proto.mullvad_daemon.management_interface.AccessMethod}
 */
proto.mullvad_daemon.management_interface.AccessMethodSetting.prototype.getAccessMethod = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.AccessMethod} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.AccessMethod, 4));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.AccessMethod|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.AccessMethodSetting} returns this
*/
proto.mullvad_daemon.management_interface.AccessMethodSetting.prototype.setAccessMethod = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.AccessMethodSetting} returns this
 */
proto.mullvad_daemon.management_interface.AccessMethodSetting.prototype.clearAccessMethod = function() {
  return this.setAccessMethod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.AccessMethodSetting.prototype.hasAccessMethod = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.NewAccessMethodSetting.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.NewAccessMethodSetting.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.NewAccessMethodSetting} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.NewAccessMethodSetting.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    enabled: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    accessMethod: (f = msg.getAccessMethod()) && proto.mullvad_daemon.management_interface.AccessMethod.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.NewAccessMethodSetting}
 */
proto.mullvad_daemon.management_interface.NewAccessMethodSetting.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.NewAccessMethodSetting;
  return proto.mullvad_daemon.management_interface.NewAccessMethodSetting.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.NewAccessMethodSetting} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.NewAccessMethodSetting}
 */
proto.mullvad_daemon.management_interface.NewAccessMethodSetting.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 3:
      var value = new proto.mullvad_daemon.management_interface.AccessMethod;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.AccessMethod.deserializeBinaryFromReader);
      msg.setAccessMethod(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.NewAccessMethodSetting.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.NewAccessMethodSetting.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.NewAccessMethodSetting} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.NewAccessMethodSetting.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getAccessMethod();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.mullvad_daemon.management_interface.AccessMethod.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.NewAccessMethodSetting.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.NewAccessMethodSetting} returns this
 */
proto.mullvad_daemon.management_interface.NewAccessMethodSetting.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool enabled = 2;
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.NewAccessMethodSetting.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mullvad_daemon.management_interface.NewAccessMethodSetting} returns this
 */
proto.mullvad_daemon.management_interface.NewAccessMethodSetting.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional AccessMethod access_method = 3;
 * @return {?proto.mullvad_daemon.management_interface.AccessMethod}
 */
proto.mullvad_daemon.management_interface.NewAccessMethodSetting.prototype.getAccessMethod = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.AccessMethod} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.AccessMethod, 3));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.AccessMethod|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.NewAccessMethodSetting} returns this
*/
proto.mullvad_daemon.management_interface.NewAccessMethodSetting.prototype.setAccessMethod = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.NewAccessMethodSetting} returns this
 */
proto.mullvad_daemon.management_interface.NewAccessMethodSetting.prototype.clearAccessMethod = function() {
  return this.setAccessMethod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.NewAccessMethodSetting.prototype.hasAccessMethod = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mullvad_daemon.management_interface.ApiAccessMethodSettings.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.ApiAccessMethodSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.ApiAccessMethodSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.ApiAccessMethodSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.ApiAccessMethodSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
    direct: (f = msg.getDirect()) && proto.mullvad_daemon.management_interface.AccessMethodSetting.toObject(includeInstance, f),
    mullvadBridges: (f = msg.getMullvadBridges()) && proto.mullvad_daemon.management_interface.AccessMethodSetting.toObject(includeInstance, f),
    encryptedDnsProxy: (f = msg.getEncryptedDnsProxy()) && proto.mullvad_daemon.management_interface.AccessMethodSetting.toObject(includeInstance, f),
    customList: jspb.Message.toObjectList(msg.getCustomList(),
    proto.mullvad_daemon.management_interface.AccessMethodSetting.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.ApiAccessMethodSettings}
 */
proto.mullvad_daemon.management_interface.ApiAccessMethodSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.ApiAccessMethodSettings;
  return proto.mullvad_daemon.management_interface.ApiAccessMethodSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.ApiAccessMethodSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.ApiAccessMethodSettings}
 */
proto.mullvad_daemon.management_interface.ApiAccessMethodSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mullvad_daemon.management_interface.AccessMethodSetting;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.AccessMethodSetting.deserializeBinaryFromReader);
      msg.setDirect(value);
      break;
    case 2:
      var value = new proto.mullvad_daemon.management_interface.AccessMethodSetting;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.AccessMethodSetting.deserializeBinaryFromReader);
      msg.setMullvadBridges(value);
      break;
    case 3:
      var value = new proto.mullvad_daemon.management_interface.AccessMethodSetting;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.AccessMethodSetting.deserializeBinaryFromReader);
      msg.setEncryptedDnsProxy(value);
      break;
    case 4:
      var value = new proto.mullvad_daemon.management_interface.AccessMethodSetting;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.AccessMethodSetting.deserializeBinaryFromReader);
      msg.addCustom(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.ApiAccessMethodSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.ApiAccessMethodSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.ApiAccessMethodSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.ApiAccessMethodSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDirect();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mullvad_daemon.management_interface.AccessMethodSetting.serializeBinaryToWriter
    );
  }
  f = message.getMullvadBridges();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mullvad_daemon.management_interface.AccessMethodSetting.serializeBinaryToWriter
    );
  }
  f = message.getEncryptedDnsProxy();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.mullvad_daemon.management_interface.AccessMethodSetting.serializeBinaryToWriter
    );
  }
  f = message.getCustomList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.mullvad_daemon.management_interface.AccessMethodSetting.serializeBinaryToWriter
    );
  }
};


/**
 * optional AccessMethodSetting direct = 1;
 * @return {?proto.mullvad_daemon.management_interface.AccessMethodSetting}
 */
proto.mullvad_daemon.management_interface.ApiAccessMethodSettings.prototype.getDirect = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.AccessMethodSetting} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.AccessMethodSetting, 1));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.AccessMethodSetting|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.ApiAccessMethodSettings} returns this
*/
proto.mullvad_daemon.management_interface.ApiAccessMethodSettings.prototype.setDirect = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.ApiAccessMethodSettings} returns this
 */
proto.mullvad_daemon.management_interface.ApiAccessMethodSettings.prototype.clearDirect = function() {
  return this.setDirect(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.ApiAccessMethodSettings.prototype.hasDirect = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AccessMethodSetting mullvad_bridges = 2;
 * @return {?proto.mullvad_daemon.management_interface.AccessMethodSetting}
 */
proto.mullvad_daemon.management_interface.ApiAccessMethodSettings.prototype.getMullvadBridges = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.AccessMethodSetting} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.AccessMethodSetting, 2));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.AccessMethodSetting|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.ApiAccessMethodSettings} returns this
*/
proto.mullvad_daemon.management_interface.ApiAccessMethodSettings.prototype.setMullvadBridges = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.ApiAccessMethodSettings} returns this
 */
proto.mullvad_daemon.management_interface.ApiAccessMethodSettings.prototype.clearMullvadBridges = function() {
  return this.setMullvadBridges(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.ApiAccessMethodSettings.prototype.hasMullvadBridges = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AccessMethodSetting encrypted_dns_proxy = 3;
 * @return {?proto.mullvad_daemon.management_interface.AccessMethodSetting}
 */
proto.mullvad_daemon.management_interface.ApiAccessMethodSettings.prototype.getEncryptedDnsProxy = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.AccessMethodSetting} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.AccessMethodSetting, 3));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.AccessMethodSetting|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.ApiAccessMethodSettings} returns this
*/
proto.mullvad_daemon.management_interface.ApiAccessMethodSettings.prototype.setEncryptedDnsProxy = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.ApiAccessMethodSettings} returns this
 */
proto.mullvad_daemon.management_interface.ApiAccessMethodSettings.prototype.clearEncryptedDnsProxy = function() {
  return this.setEncryptedDnsProxy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.ApiAccessMethodSettings.prototype.hasEncryptedDnsProxy = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated AccessMethodSetting custom = 4;
 * @return {!Array<!proto.mullvad_daemon.management_interface.AccessMethodSetting>}
 */
proto.mullvad_daemon.management_interface.ApiAccessMethodSettings.prototype.getCustomList = function() {
  return /** @type{!Array<!proto.mullvad_daemon.management_interface.AccessMethodSetting>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mullvad_daemon.management_interface.AccessMethodSetting, 4));
};


/**
 * @param {!Array<!proto.mullvad_daemon.management_interface.AccessMethodSetting>} value
 * @return {!proto.mullvad_daemon.management_interface.ApiAccessMethodSettings} returns this
*/
proto.mullvad_daemon.management_interface.ApiAccessMethodSettings.prototype.setCustomList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.mullvad_daemon.management_interface.AccessMethodSetting=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mullvad_daemon.management_interface.AccessMethodSetting}
 */
proto.mullvad_daemon.management_interface.ApiAccessMethodSettings.prototype.addCustom = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.mullvad_daemon.management_interface.AccessMethodSetting, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mullvad_daemon.management_interface.ApiAccessMethodSettings} returns this
 */
proto.mullvad_daemon.management_interface.ApiAccessMethodSettings.prototype.clearCustomList = function() {
  return this.setCustomList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mullvad_daemon.management_interface.Settings.repeatedFields_ = [13];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.Settings.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.Settings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.Settings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.Settings.toObject = function(includeInstance, msg) {
  var f, obj = {
    relaySettings: (f = msg.getRelaySettings()) && proto.mullvad_daemon.management_interface.RelaySettings.toObject(includeInstance, f),
    bridgeSettings: (f = msg.getBridgeSettings()) && proto.mullvad_daemon.management_interface.BridgeSettings.toObject(includeInstance, f),
    bridgeState: (f = msg.getBridgeState()) && proto.mullvad_daemon.management_interface.BridgeState.toObject(includeInstance, f),
    allowLan: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    blockWhenDisconnected: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    autoConnect: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    tunnelOptions: (f = msg.getTunnelOptions()) && proto.mullvad_daemon.management_interface.TunnelOptions.toObject(includeInstance, f),
    showBetaReleases: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    splitTunnel: (f = msg.getSplitTunnel()) && proto.mullvad_daemon.management_interface.SplitTunnelSettings.toObject(includeInstance, f),
    obfuscationSettings: (f = msg.getObfuscationSettings()) && proto.mullvad_daemon.management_interface.ObfuscationSettings.toObject(includeInstance, f),
    customLists: (f = msg.getCustomLists()) && proto.mullvad_daemon.management_interface.CustomListSettings.toObject(includeInstance, f),
    apiAccessMethods: (f = msg.getApiAccessMethods()) && proto.mullvad_daemon.management_interface.ApiAccessMethodSettings.toObject(includeInstance, f),
    relayOverridesList: jspb.Message.toObjectList(msg.getRelayOverridesList(),
    proto.mullvad_daemon.management_interface.RelayOverride.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.Settings}
 */
proto.mullvad_daemon.management_interface.Settings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.Settings;
  return proto.mullvad_daemon.management_interface.Settings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.Settings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.Settings}
 */
proto.mullvad_daemon.management_interface.Settings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mullvad_daemon.management_interface.RelaySettings;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.RelaySettings.deserializeBinaryFromReader);
      msg.setRelaySettings(value);
      break;
    case 2:
      var value = new proto.mullvad_daemon.management_interface.BridgeSettings;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.BridgeSettings.deserializeBinaryFromReader);
      msg.setBridgeSettings(value);
      break;
    case 3:
      var value = new proto.mullvad_daemon.management_interface.BridgeState;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.BridgeState.deserializeBinaryFromReader);
      msg.setBridgeState(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowLan(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBlockWhenDisconnected(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAutoConnect(value);
      break;
    case 7:
      var value = new proto.mullvad_daemon.management_interface.TunnelOptions;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.TunnelOptions.deserializeBinaryFromReader);
      msg.setTunnelOptions(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShowBetaReleases(value);
      break;
    case 9:
      var value = new proto.mullvad_daemon.management_interface.SplitTunnelSettings;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.SplitTunnelSettings.deserializeBinaryFromReader);
      msg.setSplitTunnel(value);
      break;
    case 10:
      var value = new proto.mullvad_daemon.management_interface.ObfuscationSettings;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.ObfuscationSettings.deserializeBinaryFromReader);
      msg.setObfuscationSettings(value);
      break;
    case 11:
      var value = new proto.mullvad_daemon.management_interface.CustomListSettings;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.CustomListSettings.deserializeBinaryFromReader);
      msg.setCustomLists(value);
      break;
    case 12:
      var value = new proto.mullvad_daemon.management_interface.ApiAccessMethodSettings;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.ApiAccessMethodSettings.deserializeBinaryFromReader);
      msg.setApiAccessMethods(value);
      break;
    case 13:
      var value = new proto.mullvad_daemon.management_interface.RelayOverride;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.RelayOverride.deserializeBinaryFromReader);
      msg.addRelayOverrides(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.Settings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.Settings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.Settings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.Settings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRelaySettings();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mullvad_daemon.management_interface.RelaySettings.serializeBinaryToWriter
    );
  }
  f = message.getBridgeSettings();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mullvad_daemon.management_interface.BridgeSettings.serializeBinaryToWriter
    );
  }
  f = message.getBridgeState();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.mullvad_daemon.management_interface.BridgeState.serializeBinaryToWriter
    );
  }
  f = message.getAllowLan();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getBlockWhenDisconnected();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getAutoConnect();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getTunnelOptions();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.mullvad_daemon.management_interface.TunnelOptions.serializeBinaryToWriter
    );
  }
  f = message.getShowBetaReleases();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getSplitTunnel();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.mullvad_daemon.management_interface.SplitTunnelSettings.serializeBinaryToWriter
    );
  }
  f = message.getObfuscationSettings();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.mullvad_daemon.management_interface.ObfuscationSettings.serializeBinaryToWriter
    );
  }
  f = message.getCustomLists();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.mullvad_daemon.management_interface.CustomListSettings.serializeBinaryToWriter
    );
  }
  f = message.getApiAccessMethods();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.mullvad_daemon.management_interface.ApiAccessMethodSettings.serializeBinaryToWriter
    );
  }
  f = message.getRelayOverridesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto.mullvad_daemon.management_interface.RelayOverride.serializeBinaryToWriter
    );
  }
};


/**
 * optional RelaySettings relay_settings = 1;
 * @return {?proto.mullvad_daemon.management_interface.RelaySettings}
 */
proto.mullvad_daemon.management_interface.Settings.prototype.getRelaySettings = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.RelaySettings} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.RelaySettings, 1));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.RelaySettings|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.Settings} returns this
*/
proto.mullvad_daemon.management_interface.Settings.prototype.setRelaySettings = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.Settings} returns this
 */
proto.mullvad_daemon.management_interface.Settings.prototype.clearRelaySettings = function() {
  return this.setRelaySettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.Settings.prototype.hasRelaySettings = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BridgeSettings bridge_settings = 2;
 * @return {?proto.mullvad_daemon.management_interface.BridgeSettings}
 */
proto.mullvad_daemon.management_interface.Settings.prototype.getBridgeSettings = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.BridgeSettings} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.BridgeSettings, 2));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.BridgeSettings|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.Settings} returns this
*/
proto.mullvad_daemon.management_interface.Settings.prototype.setBridgeSettings = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.Settings} returns this
 */
proto.mullvad_daemon.management_interface.Settings.prototype.clearBridgeSettings = function() {
  return this.setBridgeSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.Settings.prototype.hasBridgeSettings = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional BridgeState bridge_state = 3;
 * @return {?proto.mullvad_daemon.management_interface.BridgeState}
 */
proto.mullvad_daemon.management_interface.Settings.prototype.getBridgeState = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.BridgeState} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.BridgeState, 3));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.BridgeState|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.Settings} returns this
*/
proto.mullvad_daemon.management_interface.Settings.prototype.setBridgeState = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.Settings} returns this
 */
proto.mullvad_daemon.management_interface.Settings.prototype.clearBridgeState = function() {
  return this.setBridgeState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.Settings.prototype.hasBridgeState = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool allow_lan = 4;
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.Settings.prototype.getAllowLan = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mullvad_daemon.management_interface.Settings} returns this
 */
proto.mullvad_daemon.management_interface.Settings.prototype.setAllowLan = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool block_when_disconnected = 5;
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.Settings.prototype.getBlockWhenDisconnected = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mullvad_daemon.management_interface.Settings} returns this
 */
proto.mullvad_daemon.management_interface.Settings.prototype.setBlockWhenDisconnected = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool auto_connect = 6;
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.Settings.prototype.getAutoConnect = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mullvad_daemon.management_interface.Settings} returns this
 */
proto.mullvad_daemon.management_interface.Settings.prototype.setAutoConnect = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional TunnelOptions tunnel_options = 7;
 * @return {?proto.mullvad_daemon.management_interface.TunnelOptions}
 */
proto.mullvad_daemon.management_interface.Settings.prototype.getTunnelOptions = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.TunnelOptions} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.TunnelOptions, 7));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.TunnelOptions|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.Settings} returns this
*/
proto.mullvad_daemon.management_interface.Settings.prototype.setTunnelOptions = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.Settings} returns this
 */
proto.mullvad_daemon.management_interface.Settings.prototype.clearTunnelOptions = function() {
  return this.setTunnelOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.Settings.prototype.hasTunnelOptions = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool show_beta_releases = 8;
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.Settings.prototype.getShowBetaReleases = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mullvad_daemon.management_interface.Settings} returns this
 */
proto.mullvad_daemon.management_interface.Settings.prototype.setShowBetaReleases = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional SplitTunnelSettings split_tunnel = 9;
 * @return {?proto.mullvad_daemon.management_interface.SplitTunnelSettings}
 */
proto.mullvad_daemon.management_interface.Settings.prototype.getSplitTunnel = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.SplitTunnelSettings} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.SplitTunnelSettings, 9));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.SplitTunnelSettings|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.Settings} returns this
*/
proto.mullvad_daemon.management_interface.Settings.prototype.setSplitTunnel = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.Settings} returns this
 */
proto.mullvad_daemon.management_interface.Settings.prototype.clearSplitTunnel = function() {
  return this.setSplitTunnel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.Settings.prototype.hasSplitTunnel = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional ObfuscationSettings obfuscation_settings = 10;
 * @return {?proto.mullvad_daemon.management_interface.ObfuscationSettings}
 */
proto.mullvad_daemon.management_interface.Settings.prototype.getObfuscationSettings = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.ObfuscationSettings} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.ObfuscationSettings, 10));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.ObfuscationSettings|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.Settings} returns this
*/
proto.mullvad_daemon.management_interface.Settings.prototype.setObfuscationSettings = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.Settings} returns this
 */
proto.mullvad_daemon.management_interface.Settings.prototype.clearObfuscationSettings = function() {
  return this.setObfuscationSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.Settings.prototype.hasObfuscationSettings = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional CustomListSettings custom_lists = 11;
 * @return {?proto.mullvad_daemon.management_interface.CustomListSettings}
 */
proto.mullvad_daemon.management_interface.Settings.prototype.getCustomLists = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.CustomListSettings} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.CustomListSettings, 11));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.CustomListSettings|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.Settings} returns this
*/
proto.mullvad_daemon.management_interface.Settings.prototype.setCustomLists = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.Settings} returns this
 */
proto.mullvad_daemon.management_interface.Settings.prototype.clearCustomLists = function() {
  return this.setCustomLists(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.Settings.prototype.hasCustomLists = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional ApiAccessMethodSettings api_access_methods = 12;
 * @return {?proto.mullvad_daemon.management_interface.ApiAccessMethodSettings}
 */
proto.mullvad_daemon.management_interface.Settings.prototype.getApiAccessMethods = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.ApiAccessMethodSettings} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.ApiAccessMethodSettings, 12));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.ApiAccessMethodSettings|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.Settings} returns this
*/
proto.mullvad_daemon.management_interface.Settings.prototype.setApiAccessMethods = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.Settings} returns this
 */
proto.mullvad_daemon.management_interface.Settings.prototype.clearApiAccessMethods = function() {
  return this.setApiAccessMethods(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.Settings.prototype.hasApiAccessMethods = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * repeated RelayOverride relay_overrides = 13;
 * @return {!Array<!proto.mullvad_daemon.management_interface.RelayOverride>}
 */
proto.mullvad_daemon.management_interface.Settings.prototype.getRelayOverridesList = function() {
  return /** @type{!Array<!proto.mullvad_daemon.management_interface.RelayOverride>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mullvad_daemon.management_interface.RelayOverride, 13));
};


/**
 * @param {!Array<!proto.mullvad_daemon.management_interface.RelayOverride>} value
 * @return {!proto.mullvad_daemon.management_interface.Settings} returns this
*/
proto.mullvad_daemon.management_interface.Settings.prototype.setRelayOverridesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.mullvad_daemon.management_interface.RelayOverride=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mullvad_daemon.management_interface.RelayOverride}
 */
proto.mullvad_daemon.management_interface.Settings.prototype.addRelayOverrides = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.mullvad_daemon.management_interface.RelayOverride, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mullvad_daemon.management_interface.Settings} returns this
 */
proto.mullvad_daemon.management_interface.Settings.prototype.clearRelayOverridesList = function() {
  return this.setRelayOverridesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.RelayOverride.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.RelayOverride.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.RelayOverride} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.RelayOverride.toObject = function(includeInstance, msg) {
  var f, obj = {
    hostname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ipv4AddrIn: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ipv6AddrIn: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.RelayOverride}
 */
proto.mullvad_daemon.management_interface.RelayOverride.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.RelayOverride;
  return proto.mullvad_daemon.management_interface.RelayOverride.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.RelayOverride} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.RelayOverride}
 */
proto.mullvad_daemon.management_interface.RelayOverride.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIpv4AddrIn(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIpv6AddrIn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.RelayOverride.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.RelayOverride.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.RelayOverride} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.RelayOverride.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHostname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string hostname = 1;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.RelayOverride.prototype.getHostname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.RelayOverride} returns this
 */
proto.mullvad_daemon.management_interface.RelayOverride.prototype.setHostname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ipv4_addr_in = 2;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.RelayOverride.prototype.getIpv4AddrIn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.RelayOverride} returns this
 */
proto.mullvad_daemon.management_interface.RelayOverride.prototype.setIpv4AddrIn = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.RelayOverride} returns this
 */
proto.mullvad_daemon.management_interface.RelayOverride.prototype.clearIpv4AddrIn = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.RelayOverride.prototype.hasIpv4AddrIn = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string ipv6_addr_in = 3;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.RelayOverride.prototype.getIpv6AddrIn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.RelayOverride} returns this
 */
proto.mullvad_daemon.management_interface.RelayOverride.prototype.setIpv6AddrIn = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.RelayOverride} returns this
 */
proto.mullvad_daemon.management_interface.RelayOverride.prototype.clearIpv6AddrIn = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.RelayOverride.prototype.hasIpv6AddrIn = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mullvad_daemon.management_interface.SplitTunnelSettings.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.SplitTunnelSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.SplitTunnelSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.SplitTunnelSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.SplitTunnelSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
    enableExclusions: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    appsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.SplitTunnelSettings}
 */
proto.mullvad_daemon.management_interface.SplitTunnelSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.SplitTunnelSettings;
  return proto.mullvad_daemon.management_interface.SplitTunnelSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.SplitTunnelSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.SplitTunnelSettings}
 */
proto.mullvad_daemon.management_interface.SplitTunnelSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableExclusions(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addApps(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.SplitTunnelSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.SplitTunnelSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.SplitTunnelSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.SplitTunnelSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnableExclusions();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getAppsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional bool enable_exclusions = 1;
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.SplitTunnelSettings.prototype.getEnableExclusions = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mullvad_daemon.management_interface.SplitTunnelSettings} returns this
 */
proto.mullvad_daemon.management_interface.SplitTunnelSettings.prototype.setEnableExclusions = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * repeated string apps = 2;
 * @return {!Array<string>}
 */
proto.mullvad_daemon.management_interface.SplitTunnelSettings.prototype.getAppsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.mullvad_daemon.management_interface.SplitTunnelSettings} returns this
 */
proto.mullvad_daemon.management_interface.SplitTunnelSettings.prototype.setAppsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.mullvad_daemon.management_interface.SplitTunnelSettings} returns this
 */
proto.mullvad_daemon.management_interface.SplitTunnelSettings.prototype.addApps = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mullvad_daemon.management_interface.SplitTunnelSettings} returns this
 */
proto.mullvad_daemon.management_interface.SplitTunnelSettings.prototype.clearAppsList = function() {
  return this.setAppsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.mullvad_daemon.management_interface.RelaySettings.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.mullvad_daemon.management_interface.RelaySettings.EndpointCase = {
  ENDPOINT_NOT_SET: 0,
  CUSTOM: 1,
  NORMAL: 2
};

/**
 * @return {proto.mullvad_daemon.management_interface.RelaySettings.EndpointCase}
 */
proto.mullvad_daemon.management_interface.RelaySettings.prototype.getEndpointCase = function() {
  return /** @type {proto.mullvad_daemon.management_interface.RelaySettings.EndpointCase} */(jspb.Message.computeOneofCase(this, proto.mullvad_daemon.management_interface.RelaySettings.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.RelaySettings.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.RelaySettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.RelaySettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.RelaySettings.toObject = function(includeInstance, msg) {
  var f, obj = {
    custom: (f = msg.getCustom()) && proto.mullvad_daemon.management_interface.CustomRelaySettings.toObject(includeInstance, f),
    normal: (f = msg.getNormal()) && proto.mullvad_daemon.management_interface.NormalRelaySettings.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.RelaySettings}
 */
proto.mullvad_daemon.management_interface.RelaySettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.RelaySettings;
  return proto.mullvad_daemon.management_interface.RelaySettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.RelaySettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.RelaySettings}
 */
proto.mullvad_daemon.management_interface.RelaySettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mullvad_daemon.management_interface.CustomRelaySettings;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.CustomRelaySettings.deserializeBinaryFromReader);
      msg.setCustom(value);
      break;
    case 2:
      var value = new proto.mullvad_daemon.management_interface.NormalRelaySettings;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.NormalRelaySettings.deserializeBinaryFromReader);
      msg.setNormal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.RelaySettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.RelaySettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.RelaySettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.RelaySettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustom();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mullvad_daemon.management_interface.CustomRelaySettings.serializeBinaryToWriter
    );
  }
  f = message.getNormal();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mullvad_daemon.management_interface.NormalRelaySettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional CustomRelaySettings custom = 1;
 * @return {?proto.mullvad_daemon.management_interface.CustomRelaySettings}
 */
proto.mullvad_daemon.management_interface.RelaySettings.prototype.getCustom = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.CustomRelaySettings} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.CustomRelaySettings, 1));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.CustomRelaySettings|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.RelaySettings} returns this
*/
proto.mullvad_daemon.management_interface.RelaySettings.prototype.setCustom = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.mullvad_daemon.management_interface.RelaySettings.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.RelaySettings} returns this
 */
proto.mullvad_daemon.management_interface.RelaySettings.prototype.clearCustom = function() {
  return this.setCustom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.RelaySettings.prototype.hasCustom = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional NormalRelaySettings normal = 2;
 * @return {?proto.mullvad_daemon.management_interface.NormalRelaySettings}
 */
proto.mullvad_daemon.management_interface.RelaySettings.prototype.getNormal = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.NormalRelaySettings} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.NormalRelaySettings, 2));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.NormalRelaySettings|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.RelaySettings} returns this
*/
proto.mullvad_daemon.management_interface.RelaySettings.prototype.setNormal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.mullvad_daemon.management_interface.RelaySettings.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.RelaySettings} returns this
 */
proto.mullvad_daemon.management_interface.RelaySettings.prototype.clearNormal = function() {
  return this.setNormal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.RelaySettings.prototype.hasNormal = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mullvad_daemon.management_interface.NormalRelaySettings.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.NormalRelaySettings.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.NormalRelaySettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.NormalRelaySettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.NormalRelaySettings.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.mullvad_daemon.management_interface.LocationConstraint.toObject(includeInstance, f),
    providersList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    tunnelType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    wireguardConstraints: (f = msg.getWireguardConstraints()) && proto.mullvad_daemon.management_interface.WireguardConstraints.toObject(includeInstance, f),
    openvpnConstraints: (f = msg.getOpenvpnConstraints()) && proto.mullvad_daemon.management_interface.OpenvpnConstraints.toObject(includeInstance, f),
    ownership: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.NormalRelaySettings}
 */
proto.mullvad_daemon.management_interface.NormalRelaySettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.NormalRelaySettings;
  return proto.mullvad_daemon.management_interface.NormalRelaySettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.NormalRelaySettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.NormalRelaySettings}
 */
proto.mullvad_daemon.management_interface.NormalRelaySettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mullvad_daemon.management_interface.LocationConstraint;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.LocationConstraint.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addProviders(value);
      break;
    case 3:
      var value = /** @type {!proto.mullvad_daemon.management_interface.TunnelType} */ (reader.readEnum());
      msg.setTunnelType(value);
      break;
    case 4:
      var value = new proto.mullvad_daemon.management_interface.WireguardConstraints;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.WireguardConstraints.deserializeBinaryFromReader);
      msg.setWireguardConstraints(value);
      break;
    case 5:
      var value = new proto.mullvad_daemon.management_interface.OpenvpnConstraints;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.OpenvpnConstraints.deserializeBinaryFromReader);
      msg.setOpenvpnConstraints(value);
      break;
    case 6:
      var value = /** @type {!proto.mullvad_daemon.management_interface.Ownership} */ (reader.readEnum());
      msg.setOwnership(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.NormalRelaySettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.NormalRelaySettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.NormalRelaySettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.NormalRelaySettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mullvad_daemon.management_interface.LocationConstraint.serializeBinaryToWriter
    );
  }
  f = message.getProvidersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = /** @type {!proto.mullvad_daemon.management_interface.TunnelType} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getWireguardConstraints();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.mullvad_daemon.management_interface.WireguardConstraints.serializeBinaryToWriter
    );
  }
  f = message.getOpenvpnConstraints();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.mullvad_daemon.management_interface.OpenvpnConstraints.serializeBinaryToWriter
    );
  }
  f = message.getOwnership();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional LocationConstraint location = 1;
 * @return {?proto.mullvad_daemon.management_interface.LocationConstraint}
 */
proto.mullvad_daemon.management_interface.NormalRelaySettings.prototype.getLocation = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.LocationConstraint} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.LocationConstraint, 1));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.LocationConstraint|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.NormalRelaySettings} returns this
*/
proto.mullvad_daemon.management_interface.NormalRelaySettings.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.NormalRelaySettings} returns this
 */
proto.mullvad_daemon.management_interface.NormalRelaySettings.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.NormalRelaySettings.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string providers = 2;
 * @return {!Array<string>}
 */
proto.mullvad_daemon.management_interface.NormalRelaySettings.prototype.getProvidersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.mullvad_daemon.management_interface.NormalRelaySettings} returns this
 */
proto.mullvad_daemon.management_interface.NormalRelaySettings.prototype.setProvidersList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.mullvad_daemon.management_interface.NormalRelaySettings} returns this
 */
proto.mullvad_daemon.management_interface.NormalRelaySettings.prototype.addProviders = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mullvad_daemon.management_interface.NormalRelaySettings} returns this
 */
proto.mullvad_daemon.management_interface.NormalRelaySettings.prototype.clearProvidersList = function() {
  return this.setProvidersList([]);
};


/**
 * optional TunnelType tunnel_type = 3;
 * @return {!proto.mullvad_daemon.management_interface.TunnelType}
 */
proto.mullvad_daemon.management_interface.NormalRelaySettings.prototype.getTunnelType = function() {
  return /** @type {!proto.mullvad_daemon.management_interface.TunnelType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.mullvad_daemon.management_interface.TunnelType} value
 * @return {!proto.mullvad_daemon.management_interface.NormalRelaySettings} returns this
 */
proto.mullvad_daemon.management_interface.NormalRelaySettings.prototype.setTunnelType = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.NormalRelaySettings} returns this
 */
proto.mullvad_daemon.management_interface.NormalRelaySettings.prototype.clearTunnelType = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.NormalRelaySettings.prototype.hasTunnelType = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional WireguardConstraints wireguard_constraints = 4;
 * @return {?proto.mullvad_daemon.management_interface.WireguardConstraints}
 */
proto.mullvad_daemon.management_interface.NormalRelaySettings.prototype.getWireguardConstraints = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.WireguardConstraints} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.WireguardConstraints, 4));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.WireguardConstraints|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.NormalRelaySettings} returns this
*/
proto.mullvad_daemon.management_interface.NormalRelaySettings.prototype.setWireguardConstraints = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.NormalRelaySettings} returns this
 */
proto.mullvad_daemon.management_interface.NormalRelaySettings.prototype.clearWireguardConstraints = function() {
  return this.setWireguardConstraints(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.NormalRelaySettings.prototype.hasWireguardConstraints = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional OpenvpnConstraints openvpn_constraints = 5;
 * @return {?proto.mullvad_daemon.management_interface.OpenvpnConstraints}
 */
proto.mullvad_daemon.management_interface.NormalRelaySettings.prototype.getOpenvpnConstraints = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.OpenvpnConstraints} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.OpenvpnConstraints, 5));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.OpenvpnConstraints|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.NormalRelaySettings} returns this
*/
proto.mullvad_daemon.management_interface.NormalRelaySettings.prototype.setOpenvpnConstraints = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.NormalRelaySettings} returns this
 */
proto.mullvad_daemon.management_interface.NormalRelaySettings.prototype.clearOpenvpnConstraints = function() {
  return this.setOpenvpnConstraints(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.NormalRelaySettings.prototype.hasOpenvpnConstraints = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Ownership ownership = 6;
 * @return {!proto.mullvad_daemon.management_interface.Ownership}
 */
proto.mullvad_daemon.management_interface.NormalRelaySettings.prototype.getOwnership = function() {
  return /** @type {!proto.mullvad_daemon.management_interface.Ownership} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.mullvad_daemon.management_interface.Ownership} value
 * @return {!proto.mullvad_daemon.management_interface.NormalRelaySettings} returns this
 */
proto.mullvad_daemon.management_interface.NormalRelaySettings.prototype.setOwnership = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.TransportPort.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.TransportPort.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.TransportPort} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.TransportPort.toObject = function(includeInstance, msg) {
  var f, obj = {
    protocol: jspb.Message.getFieldWithDefault(msg, 1, 0),
    port: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.TransportPort}
 */
proto.mullvad_daemon.management_interface.TransportPort.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.TransportPort;
  return proto.mullvad_daemon.management_interface.TransportPort.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.TransportPort} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.TransportPort}
 */
proto.mullvad_daemon.management_interface.TransportPort.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mullvad_daemon.management_interface.TransportProtocol} */ (reader.readEnum());
      msg.setProtocol(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.TransportPort.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.TransportPort.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.TransportPort} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.TransportPort.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProtocol();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional TransportProtocol protocol = 1;
 * @return {!proto.mullvad_daemon.management_interface.TransportProtocol}
 */
proto.mullvad_daemon.management_interface.TransportPort.prototype.getProtocol = function() {
  return /** @type {!proto.mullvad_daemon.management_interface.TransportProtocol} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mullvad_daemon.management_interface.TransportProtocol} value
 * @return {!proto.mullvad_daemon.management_interface.TransportPort} returns this
 */
proto.mullvad_daemon.management_interface.TransportPort.prototype.setProtocol = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint32 port = 2;
 * @return {number}
 */
proto.mullvad_daemon.management_interface.TransportPort.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.mullvad_daemon.management_interface.TransportPort} returns this
 */
proto.mullvad_daemon.management_interface.TransportPort.prototype.setPort = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.TransportPort} returns this
 */
proto.mullvad_daemon.management_interface.TransportPort.prototype.clearPort = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.TransportPort.prototype.hasPort = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.OpenvpnConstraints.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.OpenvpnConstraints.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.OpenvpnConstraints} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.OpenvpnConstraints.toObject = function(includeInstance, msg) {
  var f, obj = {
    port: (f = msg.getPort()) && proto.mullvad_daemon.management_interface.TransportPort.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.OpenvpnConstraints}
 */
proto.mullvad_daemon.management_interface.OpenvpnConstraints.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.OpenvpnConstraints;
  return proto.mullvad_daemon.management_interface.OpenvpnConstraints.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.OpenvpnConstraints} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.OpenvpnConstraints}
 */
proto.mullvad_daemon.management_interface.OpenvpnConstraints.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mullvad_daemon.management_interface.TransportPort;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.TransportPort.deserializeBinaryFromReader);
      msg.setPort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.OpenvpnConstraints.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.OpenvpnConstraints.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.OpenvpnConstraints} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.OpenvpnConstraints.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPort();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mullvad_daemon.management_interface.TransportPort.serializeBinaryToWriter
    );
  }
};


/**
 * optional TransportPort port = 1;
 * @return {?proto.mullvad_daemon.management_interface.TransportPort}
 */
proto.mullvad_daemon.management_interface.OpenvpnConstraints.prototype.getPort = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.TransportPort} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.TransportPort, 1));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.TransportPort|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.OpenvpnConstraints} returns this
*/
proto.mullvad_daemon.management_interface.OpenvpnConstraints.prototype.setPort = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.OpenvpnConstraints} returns this
 */
proto.mullvad_daemon.management_interface.OpenvpnConstraints.prototype.clearPort = function() {
  return this.setPort(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.OpenvpnConstraints.prototype.hasPort = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.WireguardConstraints.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.WireguardConstraints.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.WireguardConstraints} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.WireguardConstraints.toObject = function(includeInstance, msg) {
  var f, obj = {
    port: jspb.Message.getFieldWithDefault(msg, 1, 0),
    ipVersion: jspb.Message.getFieldWithDefault(msg, 2, 0),
    useMultihop: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    entryLocation: (f = msg.getEntryLocation()) && proto.mullvad_daemon.management_interface.LocationConstraint.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.WireguardConstraints}
 */
proto.mullvad_daemon.management_interface.WireguardConstraints.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.WireguardConstraints;
  return proto.mullvad_daemon.management_interface.WireguardConstraints.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.WireguardConstraints} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.WireguardConstraints}
 */
proto.mullvad_daemon.management_interface.WireguardConstraints.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    case 2:
      var value = /** @type {!proto.mullvad_daemon.management_interface.IpVersion} */ (reader.readEnum());
      msg.setIpVersion(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseMultihop(value);
      break;
    case 4:
      var value = new proto.mullvad_daemon.management_interface.LocationConstraint;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.LocationConstraint.deserializeBinaryFromReader);
      msg.setEntryLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.WireguardConstraints.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.WireguardConstraints.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.WireguardConstraints} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.WireguardConstraints.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {!proto.mullvad_daemon.management_interface.IpVersion} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getUseMultihop();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getEntryLocation();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.mullvad_daemon.management_interface.LocationConstraint.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 port = 1;
 * @return {number}
 */
proto.mullvad_daemon.management_interface.WireguardConstraints.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mullvad_daemon.management_interface.WireguardConstraints} returns this
 */
proto.mullvad_daemon.management_interface.WireguardConstraints.prototype.setPort = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.WireguardConstraints} returns this
 */
proto.mullvad_daemon.management_interface.WireguardConstraints.prototype.clearPort = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.WireguardConstraints.prototype.hasPort = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional IpVersion ip_version = 2;
 * @return {!proto.mullvad_daemon.management_interface.IpVersion}
 */
proto.mullvad_daemon.management_interface.WireguardConstraints.prototype.getIpVersion = function() {
  return /** @type {!proto.mullvad_daemon.management_interface.IpVersion} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.mullvad_daemon.management_interface.IpVersion} value
 * @return {!proto.mullvad_daemon.management_interface.WireguardConstraints} returns this
 */
proto.mullvad_daemon.management_interface.WireguardConstraints.prototype.setIpVersion = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.WireguardConstraints} returns this
 */
proto.mullvad_daemon.management_interface.WireguardConstraints.prototype.clearIpVersion = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.WireguardConstraints.prototype.hasIpVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool use_multihop = 3;
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.WireguardConstraints.prototype.getUseMultihop = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mullvad_daemon.management_interface.WireguardConstraints} returns this
 */
proto.mullvad_daemon.management_interface.WireguardConstraints.prototype.setUseMultihop = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional LocationConstraint entry_location = 4;
 * @return {?proto.mullvad_daemon.management_interface.LocationConstraint}
 */
proto.mullvad_daemon.management_interface.WireguardConstraints.prototype.getEntryLocation = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.LocationConstraint} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.LocationConstraint, 4));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.LocationConstraint|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.WireguardConstraints} returns this
*/
proto.mullvad_daemon.management_interface.WireguardConstraints.prototype.setEntryLocation = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.WireguardConstraints} returns this
 */
proto.mullvad_daemon.management_interface.WireguardConstraints.prototype.clearEntryLocation = function() {
  return this.setEntryLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.WireguardConstraints.prototype.hasEntryLocation = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.CustomRelaySettings.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.CustomRelaySettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.CustomRelaySettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.CustomRelaySettings.toObject = function(includeInstance, msg) {
  var f, obj = {
    host: jspb.Message.getFieldWithDefault(msg, 1, ""),
    config: (f = msg.getConfig()) && proto.mullvad_daemon.management_interface.ConnectionConfig.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.CustomRelaySettings}
 */
proto.mullvad_daemon.management_interface.CustomRelaySettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.CustomRelaySettings;
  return proto.mullvad_daemon.management_interface.CustomRelaySettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.CustomRelaySettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.CustomRelaySettings}
 */
proto.mullvad_daemon.management_interface.CustomRelaySettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 2:
      var value = new proto.mullvad_daemon.management_interface.ConnectionConfig;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.ConnectionConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.CustomRelaySettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.CustomRelaySettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.CustomRelaySettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.CustomRelaySettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mullvad_daemon.management_interface.ConnectionConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional string host = 1;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.CustomRelaySettings.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.CustomRelaySettings} returns this
 */
proto.mullvad_daemon.management_interface.CustomRelaySettings.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ConnectionConfig config = 2;
 * @return {?proto.mullvad_daemon.management_interface.ConnectionConfig}
 */
proto.mullvad_daemon.management_interface.CustomRelaySettings.prototype.getConfig = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.ConnectionConfig} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.ConnectionConfig, 2));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.ConnectionConfig|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.CustomRelaySettings} returns this
*/
proto.mullvad_daemon.management_interface.CustomRelaySettings.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.CustomRelaySettings} returns this
 */
proto.mullvad_daemon.management_interface.CustomRelaySettings.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.CustomRelaySettings.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.ConfigCase = {
  CONFIG_NOT_SET: 0,
  OPENVPN: 1,
  WIREGUARD: 2
};

/**
 * @return {proto.mullvad_daemon.management_interface.ConnectionConfig.ConfigCase}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.prototype.getConfigCase = function() {
  return /** @type {proto.mullvad_daemon.management_interface.ConnectionConfig.ConfigCase} */(jspb.Message.computeOneofCase(this, proto.mullvad_daemon.management_interface.ConnectionConfig.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.ConnectionConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.ConnectionConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    openvpn: (f = msg.getOpenvpn()) && proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig.toObject(includeInstance, f),
    wireguard: (f = msg.getWireguard()) && proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.ConnectionConfig}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.ConnectionConfig;
  return proto.mullvad_daemon.management_interface.ConnectionConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.ConnectionConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.ConnectionConfig}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig.deserializeBinaryFromReader);
      msg.setOpenvpn(value);
      break;
    case 2:
      var value = new proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.deserializeBinaryFromReader);
      msg.setWireguard(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.ConnectionConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.ConnectionConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpenvpn();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig.serializeBinaryToWriter
    );
  }
  f = message.getWireguard();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    protocol: jspb.Message.getFieldWithDefault(msg, 2, 0),
    username: jspb.Message.getFieldWithDefault(msg, 3, ""),
    password: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig;
  return proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {!proto.mullvad_daemon.management_interface.TransportProtocol} */ (reader.readEnum());
      msg.setProtocol(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProtocol();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig} returns this
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional TransportProtocol protocol = 2;
 * @return {!proto.mullvad_daemon.management_interface.TransportProtocol}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig.prototype.getProtocol = function() {
  return /** @type {!proto.mullvad_daemon.management_interface.TransportProtocol} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.mullvad_daemon.management_interface.TransportProtocol} value
 * @return {!proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig} returns this
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig.prototype.setProtocol = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string username = 3;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig} returns this
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string password = 4;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig} returns this
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    tunnel: (f = msg.getTunnel()) && proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig.toObject(includeInstance, f),
    peer: (f = msg.getPeer()) && proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig.toObject(includeInstance, f),
    ipv4Gateway: jspb.Message.getFieldWithDefault(msg, 3, ""),
    ipv6Gateway: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig;
  return proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig.deserializeBinaryFromReader);
      msg.setTunnel(value);
      break;
    case 2:
      var value = new proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig.deserializeBinaryFromReader);
      msg.setPeer(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIpv4Gateway(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setIpv6Gateway(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTunnel();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig.serializeBinaryToWriter
    );
  }
  f = message.getPeer();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig.serializeBinaryToWriter
    );
  }
  f = message.getIpv4Gateway();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    privateKey: msg.getPrivateKey_asB64(),
    addressesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig;
  return proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPrivateKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addAddresses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrivateKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getAddressesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional bytes private_key = 1;
 * @return {!(string|Uint8Array)}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig.prototype.getPrivateKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes private_key = 1;
 * This is a type-conversion wrapper around `getPrivateKey()`
 * @return {string}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig.prototype.getPrivateKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPrivateKey()));
};


/**
 * optional bytes private_key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPrivateKey()`
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig.prototype.getPrivateKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPrivateKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig} returns this
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig.prototype.setPrivateKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * repeated string addresses = 2;
 * @return {!Array<string>}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig.prototype.getAddressesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig} returns this
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig.prototype.setAddressesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig} returns this
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig.prototype.addAddresses = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig} returns this
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig.prototype.clearAddressesList = function() {
  return this.setAddressesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    publicKey: msg.getPublicKey_asB64(),
    allowedIpsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    endpoint: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig;
  return proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPublicKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addAllowedIps(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndpoint(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getAllowedIpsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getEndpoint();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional bytes public_key = 1;
 * @return {!(string|Uint8Array)}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig.prototype.getPublicKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes public_key = 1;
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {string}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig.prototype.getPublicKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPublicKey()));
};


/**
 * optional bytes public_key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig.prototype.getPublicKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPublicKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig} returns this
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig.prototype.setPublicKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * repeated string allowed_ips = 2;
 * @return {!Array<string>}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig.prototype.getAllowedIpsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig} returns this
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig.prototype.setAllowedIpsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig} returns this
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig.prototype.addAllowedIps = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig} returns this
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig.prototype.clearAllowedIpsList = function() {
  return this.setAllowedIpsList([]);
};


/**
 * optional string endpoint = 3;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig.prototype.getEndpoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig} returns this
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig.prototype.setEndpoint = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional TunnelConfig tunnel = 1;
 * @return {?proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.prototype.getTunnel = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig, 1));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.TunnelConfig|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig} returns this
*/
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.prototype.setTunnel = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig} returns this
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.prototype.clearTunnel = function() {
  return this.setTunnel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.prototype.hasTunnel = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PeerConfig peer = 2;
 * @return {?proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.prototype.getPeer = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig, 2));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.PeerConfig|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig} returns this
*/
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.prototype.setPeer = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig} returns this
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.prototype.clearPeer = function() {
  return this.setPeer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.prototype.hasPeer = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string ipv4_gateway = 3;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.prototype.getIpv4Gateway = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig} returns this
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.prototype.setIpv4Gateway = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string ipv6_gateway = 4;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.prototype.getIpv6Gateway = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig} returns this
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.prototype.setIpv6Gateway = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig} returns this
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.prototype.clearIpv6Gateway = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig.prototype.hasIpv6Gateway = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional OpenvpnConfig openvpn = 1;
 * @return {?proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.prototype.getOpenvpn = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig, 1));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.ConnectionConfig.OpenvpnConfig|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.ConnectionConfig} returns this
*/
proto.mullvad_daemon.management_interface.ConnectionConfig.prototype.setOpenvpn = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.mullvad_daemon.management_interface.ConnectionConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.ConnectionConfig} returns this
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.prototype.clearOpenvpn = function() {
  return this.setOpenvpn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.prototype.hasOpenvpn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional WireguardConfig wireguard = 2;
 * @return {?proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.prototype.getWireguard = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig, 2));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.ConnectionConfig.WireguardConfig|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.ConnectionConfig} returns this
*/
proto.mullvad_daemon.management_interface.ConnectionConfig.prototype.setWireguard = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.mullvad_daemon.management_interface.ConnectionConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.ConnectionConfig} returns this
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.prototype.clearWireguard = function() {
  return this.setWireguard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.ConnectionConfig.prototype.hasWireguard = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.QuantumResistantState.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.QuantumResistantState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.QuantumResistantState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.QuantumResistantState.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.QuantumResistantState}
 */
proto.mullvad_daemon.management_interface.QuantumResistantState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.QuantumResistantState;
  return proto.mullvad_daemon.management_interface.QuantumResistantState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.QuantumResistantState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.QuantumResistantState}
 */
proto.mullvad_daemon.management_interface.QuantumResistantState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mullvad_daemon.management_interface.QuantumResistantState.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.QuantumResistantState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.QuantumResistantState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.QuantumResistantState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.QuantumResistantState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.mullvad_daemon.management_interface.QuantumResistantState.State = {
  AUTO: 0,
  ON: 1,
  OFF: 2
};

/**
 * optional State state = 1;
 * @return {!proto.mullvad_daemon.management_interface.QuantumResistantState.State}
 */
proto.mullvad_daemon.management_interface.QuantumResistantState.prototype.getState = function() {
  return /** @type {!proto.mullvad_daemon.management_interface.QuantumResistantState.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mullvad_daemon.management_interface.QuantumResistantState.State} value
 * @return {!proto.mullvad_daemon.management_interface.QuantumResistantState} returns this
 */
proto.mullvad_daemon.management_interface.QuantumResistantState.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.DaitaSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.DaitaSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.DaitaSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.DaitaSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
    enabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    directOnly: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.DaitaSettings}
 */
proto.mullvad_daemon.management_interface.DaitaSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.DaitaSettings;
  return proto.mullvad_daemon.management_interface.DaitaSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.DaitaSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.DaitaSettings}
 */
proto.mullvad_daemon.management_interface.DaitaSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDirectOnly(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.DaitaSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.DaitaSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.DaitaSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.DaitaSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getDirectOnly();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional bool enabled = 1;
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.DaitaSettings.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mullvad_daemon.management_interface.DaitaSettings} returns this
 */
proto.mullvad_daemon.management_interface.DaitaSettings.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool direct_only = 2;
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.DaitaSettings.prototype.getDirectOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mullvad_daemon.management_interface.DaitaSettings} returns this
 */
proto.mullvad_daemon.management_interface.DaitaSettings.prototype.setDirectOnly = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.TunnelOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.TunnelOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.TunnelOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.TunnelOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    openvpn: (f = msg.getOpenvpn()) && proto.mullvad_daemon.management_interface.TunnelOptions.OpenvpnOptions.toObject(includeInstance, f),
    wireguard: (f = msg.getWireguard()) && proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions.toObject(includeInstance, f),
    generic: (f = msg.getGeneric()) && proto.mullvad_daemon.management_interface.TunnelOptions.GenericOptions.toObject(includeInstance, f),
    dnsOptions: (f = msg.getDnsOptions()) && proto.mullvad_daemon.management_interface.DnsOptions.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.TunnelOptions}
 */
proto.mullvad_daemon.management_interface.TunnelOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.TunnelOptions;
  return proto.mullvad_daemon.management_interface.TunnelOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.TunnelOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.TunnelOptions}
 */
proto.mullvad_daemon.management_interface.TunnelOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mullvad_daemon.management_interface.TunnelOptions.OpenvpnOptions;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.TunnelOptions.OpenvpnOptions.deserializeBinaryFromReader);
      msg.setOpenvpn(value);
      break;
    case 2:
      var value = new proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions.deserializeBinaryFromReader);
      msg.setWireguard(value);
      break;
    case 3:
      var value = new proto.mullvad_daemon.management_interface.TunnelOptions.GenericOptions;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.TunnelOptions.GenericOptions.deserializeBinaryFromReader);
      msg.setGeneric(value);
      break;
    case 4:
      var value = new proto.mullvad_daemon.management_interface.DnsOptions;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.DnsOptions.deserializeBinaryFromReader);
      msg.setDnsOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.TunnelOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.TunnelOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.TunnelOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.TunnelOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpenvpn();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mullvad_daemon.management_interface.TunnelOptions.OpenvpnOptions.serializeBinaryToWriter
    );
  }
  f = message.getWireguard();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions.serializeBinaryToWriter
    );
  }
  f = message.getGeneric();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.mullvad_daemon.management_interface.TunnelOptions.GenericOptions.serializeBinaryToWriter
    );
  }
  f = message.getDnsOptions();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.mullvad_daemon.management_interface.DnsOptions.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.TunnelOptions.OpenvpnOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.TunnelOptions.OpenvpnOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.TunnelOptions.OpenvpnOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.TunnelOptions.OpenvpnOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    mssfix: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.TunnelOptions.OpenvpnOptions}
 */
proto.mullvad_daemon.management_interface.TunnelOptions.OpenvpnOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.TunnelOptions.OpenvpnOptions;
  return proto.mullvad_daemon.management_interface.TunnelOptions.OpenvpnOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.TunnelOptions.OpenvpnOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.TunnelOptions.OpenvpnOptions}
 */
proto.mullvad_daemon.management_interface.TunnelOptions.OpenvpnOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMssfix(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.TunnelOptions.OpenvpnOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.TunnelOptions.OpenvpnOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.TunnelOptions.OpenvpnOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.TunnelOptions.OpenvpnOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 mssfix = 1;
 * @return {number}
 */
proto.mullvad_daemon.management_interface.TunnelOptions.OpenvpnOptions.prototype.getMssfix = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mullvad_daemon.management_interface.TunnelOptions.OpenvpnOptions} returns this
 */
proto.mullvad_daemon.management_interface.TunnelOptions.OpenvpnOptions.prototype.setMssfix = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.TunnelOptions.OpenvpnOptions} returns this
 */
proto.mullvad_daemon.management_interface.TunnelOptions.OpenvpnOptions.prototype.clearMssfix = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.TunnelOptions.OpenvpnOptions.prototype.hasMssfix = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    mtu: jspb.Message.getFieldWithDefault(msg, 1, 0),
    rotationInterval: (f = msg.getRotationInterval()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    quantumResistant: (f = msg.getQuantumResistant()) && proto.mullvad_daemon.management_interface.QuantumResistantState.toObject(includeInstance, f),
    daita: (f = msg.getDaita()) && proto.mullvad_daemon.management_interface.DaitaSettings.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions}
 */
proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions;
  return proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions}
 */
proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMtu(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setRotationInterval(value);
      break;
    case 4:
      var value = new proto.mullvad_daemon.management_interface.QuantumResistantState;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.QuantumResistantState.deserializeBinaryFromReader);
      msg.setQuantumResistant(value);
      break;
    case 5:
      var value = new proto.mullvad_daemon.management_interface.DaitaSettings;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.DaitaSettings.deserializeBinaryFromReader);
      msg.setDaita(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getRotationInterval();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getQuantumResistant();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.mullvad_daemon.management_interface.QuantumResistantState.serializeBinaryToWriter
    );
  }
  f = message.getDaita();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.mullvad_daemon.management_interface.DaitaSettings.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 mtu = 1;
 * @return {number}
 */
proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions.prototype.getMtu = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions} returns this
 */
proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions.prototype.setMtu = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions} returns this
 */
proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions.prototype.clearMtu = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions.prototype.hasMtu = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Duration rotation_interval = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions.prototype.getRotationInterval = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions} returns this
*/
proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions.prototype.setRotationInterval = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions} returns this
 */
proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions.prototype.clearRotationInterval = function() {
  return this.setRotationInterval(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions.prototype.hasRotationInterval = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional QuantumResistantState quantum_resistant = 4;
 * @return {?proto.mullvad_daemon.management_interface.QuantumResistantState}
 */
proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions.prototype.getQuantumResistant = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.QuantumResistantState} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.QuantumResistantState, 4));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.QuantumResistantState|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions} returns this
*/
proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions.prototype.setQuantumResistant = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions} returns this
 */
proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions.prototype.clearQuantumResistant = function() {
  return this.setQuantumResistant(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions.prototype.hasQuantumResistant = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional DaitaSettings daita = 5;
 * @return {?proto.mullvad_daemon.management_interface.DaitaSettings}
 */
proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions.prototype.getDaita = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.DaitaSettings} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.DaitaSettings, 5));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.DaitaSettings|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions} returns this
*/
proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions.prototype.setDaita = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions} returns this
 */
proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions.prototype.clearDaita = function() {
  return this.setDaita(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions.prototype.hasDaita = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.TunnelOptions.GenericOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.TunnelOptions.GenericOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.TunnelOptions.GenericOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.TunnelOptions.GenericOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    enableIpv6: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.TunnelOptions.GenericOptions}
 */
proto.mullvad_daemon.management_interface.TunnelOptions.GenericOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.TunnelOptions.GenericOptions;
  return proto.mullvad_daemon.management_interface.TunnelOptions.GenericOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.TunnelOptions.GenericOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.TunnelOptions.GenericOptions}
 */
proto.mullvad_daemon.management_interface.TunnelOptions.GenericOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableIpv6(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.TunnelOptions.GenericOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.TunnelOptions.GenericOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.TunnelOptions.GenericOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.TunnelOptions.GenericOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnableIpv6();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool enable_ipv6 = 1;
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.TunnelOptions.GenericOptions.prototype.getEnableIpv6 = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mullvad_daemon.management_interface.TunnelOptions.GenericOptions} returns this
 */
proto.mullvad_daemon.management_interface.TunnelOptions.GenericOptions.prototype.setEnableIpv6 = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional OpenvpnOptions openvpn = 1;
 * @return {?proto.mullvad_daemon.management_interface.TunnelOptions.OpenvpnOptions}
 */
proto.mullvad_daemon.management_interface.TunnelOptions.prototype.getOpenvpn = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.TunnelOptions.OpenvpnOptions} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.TunnelOptions.OpenvpnOptions, 1));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.TunnelOptions.OpenvpnOptions|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.TunnelOptions} returns this
*/
proto.mullvad_daemon.management_interface.TunnelOptions.prototype.setOpenvpn = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.TunnelOptions} returns this
 */
proto.mullvad_daemon.management_interface.TunnelOptions.prototype.clearOpenvpn = function() {
  return this.setOpenvpn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.TunnelOptions.prototype.hasOpenvpn = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional WireguardOptions wireguard = 2;
 * @return {?proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions}
 */
proto.mullvad_daemon.management_interface.TunnelOptions.prototype.getWireguard = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions, 2));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.TunnelOptions.WireguardOptions|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.TunnelOptions} returns this
*/
proto.mullvad_daemon.management_interface.TunnelOptions.prototype.setWireguard = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.TunnelOptions} returns this
 */
proto.mullvad_daemon.management_interface.TunnelOptions.prototype.clearWireguard = function() {
  return this.setWireguard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.TunnelOptions.prototype.hasWireguard = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional GenericOptions generic = 3;
 * @return {?proto.mullvad_daemon.management_interface.TunnelOptions.GenericOptions}
 */
proto.mullvad_daemon.management_interface.TunnelOptions.prototype.getGeneric = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.TunnelOptions.GenericOptions} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.TunnelOptions.GenericOptions, 3));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.TunnelOptions.GenericOptions|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.TunnelOptions} returns this
*/
proto.mullvad_daemon.management_interface.TunnelOptions.prototype.setGeneric = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.TunnelOptions} returns this
 */
proto.mullvad_daemon.management_interface.TunnelOptions.prototype.clearGeneric = function() {
  return this.setGeneric(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.TunnelOptions.prototype.hasGeneric = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional DnsOptions dns_options = 4;
 * @return {?proto.mullvad_daemon.management_interface.DnsOptions}
 */
proto.mullvad_daemon.management_interface.TunnelOptions.prototype.getDnsOptions = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.DnsOptions} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.DnsOptions, 4));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.DnsOptions|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.TunnelOptions} returns this
*/
proto.mullvad_daemon.management_interface.TunnelOptions.prototype.setDnsOptions = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.TunnelOptions} returns this
 */
proto.mullvad_daemon.management_interface.TunnelOptions.prototype.clearDnsOptions = function() {
  return this.setDnsOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.TunnelOptions.prototype.hasDnsOptions = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.DefaultDnsOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.DefaultDnsOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.DefaultDnsOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.DefaultDnsOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockAds: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    blockTrackers: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    blockMalware: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    blockAdultContent: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    blockGambling: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    blockSocialMedia: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.DefaultDnsOptions}
 */
proto.mullvad_daemon.management_interface.DefaultDnsOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.DefaultDnsOptions;
  return proto.mullvad_daemon.management_interface.DefaultDnsOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.DefaultDnsOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.DefaultDnsOptions}
 */
proto.mullvad_daemon.management_interface.DefaultDnsOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBlockAds(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBlockTrackers(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBlockMalware(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBlockAdultContent(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBlockGambling(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBlockSocialMedia(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.DefaultDnsOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.DefaultDnsOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.DefaultDnsOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.DefaultDnsOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockAds();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getBlockTrackers();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getBlockMalware();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getBlockAdultContent();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getBlockGambling();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getBlockSocialMedia();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional bool block_ads = 1;
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.DefaultDnsOptions.prototype.getBlockAds = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mullvad_daemon.management_interface.DefaultDnsOptions} returns this
 */
proto.mullvad_daemon.management_interface.DefaultDnsOptions.prototype.setBlockAds = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool block_trackers = 2;
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.DefaultDnsOptions.prototype.getBlockTrackers = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mullvad_daemon.management_interface.DefaultDnsOptions} returns this
 */
proto.mullvad_daemon.management_interface.DefaultDnsOptions.prototype.setBlockTrackers = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool block_malware = 3;
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.DefaultDnsOptions.prototype.getBlockMalware = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mullvad_daemon.management_interface.DefaultDnsOptions} returns this
 */
proto.mullvad_daemon.management_interface.DefaultDnsOptions.prototype.setBlockMalware = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool block_adult_content = 4;
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.DefaultDnsOptions.prototype.getBlockAdultContent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mullvad_daemon.management_interface.DefaultDnsOptions} returns this
 */
proto.mullvad_daemon.management_interface.DefaultDnsOptions.prototype.setBlockAdultContent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool block_gambling = 5;
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.DefaultDnsOptions.prototype.getBlockGambling = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mullvad_daemon.management_interface.DefaultDnsOptions} returns this
 */
proto.mullvad_daemon.management_interface.DefaultDnsOptions.prototype.setBlockGambling = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool block_social_media = 6;
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.DefaultDnsOptions.prototype.getBlockSocialMedia = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mullvad_daemon.management_interface.DefaultDnsOptions} returns this
 */
proto.mullvad_daemon.management_interface.DefaultDnsOptions.prototype.setBlockSocialMedia = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mullvad_daemon.management_interface.CustomDnsOptions.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.CustomDnsOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.CustomDnsOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.CustomDnsOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.CustomDnsOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.CustomDnsOptions}
 */
proto.mullvad_daemon.management_interface.CustomDnsOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.CustomDnsOptions;
  return proto.mullvad_daemon.management_interface.CustomDnsOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.CustomDnsOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.CustomDnsOptions}
 */
proto.mullvad_daemon.management_interface.CustomDnsOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addAddresses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.CustomDnsOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.CustomDnsOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.CustomDnsOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.CustomDnsOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string addresses = 1;
 * @return {!Array<string>}
 */
proto.mullvad_daemon.management_interface.CustomDnsOptions.prototype.getAddressesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.mullvad_daemon.management_interface.CustomDnsOptions} returns this
 */
proto.mullvad_daemon.management_interface.CustomDnsOptions.prototype.setAddressesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.mullvad_daemon.management_interface.CustomDnsOptions} returns this
 */
proto.mullvad_daemon.management_interface.CustomDnsOptions.prototype.addAddresses = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mullvad_daemon.management_interface.CustomDnsOptions} returns this
 */
proto.mullvad_daemon.management_interface.CustomDnsOptions.prototype.clearAddressesList = function() {
  return this.setAddressesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.DnsOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.DnsOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.DnsOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.DnsOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    defaultOptions: (f = msg.getDefaultOptions()) && proto.mullvad_daemon.management_interface.DefaultDnsOptions.toObject(includeInstance, f),
    customOptions: (f = msg.getCustomOptions()) && proto.mullvad_daemon.management_interface.CustomDnsOptions.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.DnsOptions}
 */
proto.mullvad_daemon.management_interface.DnsOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.DnsOptions;
  return proto.mullvad_daemon.management_interface.DnsOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.DnsOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.DnsOptions}
 */
proto.mullvad_daemon.management_interface.DnsOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mullvad_daemon.management_interface.DnsOptions.DnsState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = new proto.mullvad_daemon.management_interface.DefaultDnsOptions;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.DefaultDnsOptions.deserializeBinaryFromReader);
      msg.setDefaultOptions(value);
      break;
    case 3:
      var value = new proto.mullvad_daemon.management_interface.CustomDnsOptions;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.CustomDnsOptions.deserializeBinaryFromReader);
      msg.setCustomOptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.DnsOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.DnsOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.DnsOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.DnsOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDefaultOptions();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mullvad_daemon.management_interface.DefaultDnsOptions.serializeBinaryToWriter
    );
  }
  f = message.getCustomOptions();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.mullvad_daemon.management_interface.CustomDnsOptions.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.mullvad_daemon.management_interface.DnsOptions.DnsState = {
  DEFAULT: 0,
  CUSTOM: 1
};

/**
 * optional DnsState state = 1;
 * @return {!proto.mullvad_daemon.management_interface.DnsOptions.DnsState}
 */
proto.mullvad_daemon.management_interface.DnsOptions.prototype.getState = function() {
  return /** @type {!proto.mullvad_daemon.management_interface.DnsOptions.DnsState} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mullvad_daemon.management_interface.DnsOptions.DnsState} value
 * @return {!proto.mullvad_daemon.management_interface.DnsOptions} returns this
 */
proto.mullvad_daemon.management_interface.DnsOptions.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional DefaultDnsOptions default_options = 2;
 * @return {?proto.mullvad_daemon.management_interface.DefaultDnsOptions}
 */
proto.mullvad_daemon.management_interface.DnsOptions.prototype.getDefaultOptions = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.DefaultDnsOptions} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.DefaultDnsOptions, 2));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.DefaultDnsOptions|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.DnsOptions} returns this
*/
proto.mullvad_daemon.management_interface.DnsOptions.prototype.setDefaultOptions = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.DnsOptions} returns this
 */
proto.mullvad_daemon.management_interface.DnsOptions.prototype.clearDefaultOptions = function() {
  return this.setDefaultOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.DnsOptions.prototype.hasDefaultOptions = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CustomDnsOptions custom_options = 3;
 * @return {?proto.mullvad_daemon.management_interface.CustomDnsOptions}
 */
proto.mullvad_daemon.management_interface.DnsOptions.prototype.getCustomOptions = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.CustomDnsOptions} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.CustomDnsOptions, 3));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.CustomDnsOptions|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.DnsOptions} returns this
*/
proto.mullvad_daemon.management_interface.DnsOptions.prototype.setCustomOptions = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.DnsOptions} returns this
 */
proto.mullvad_daemon.management_interface.DnsOptions.prototype.clearCustomOptions = function() {
  return this.setCustomOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.DnsOptions.prototype.hasCustomOptions = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.PublicKey.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.PublicKey.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.PublicKey} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.PublicKey.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: msg.getKey_asB64(),
    created: (f = msg.getCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.PublicKey}
 */
proto.mullvad_daemon.management_interface.PublicKey.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.PublicKey;
  return proto.mullvad_daemon.management_interface.PublicKey.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.PublicKey} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.PublicKey}
 */
proto.mullvad_daemon.management_interface.PublicKey.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKey(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.PublicKey.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.PublicKey.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.PublicKey} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.PublicKey.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getCreated();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes key = 1;
 * @return {!(string|Uint8Array)}
 */
proto.mullvad_daemon.management_interface.PublicKey.prototype.getKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes key = 1;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.mullvad_daemon.management_interface.PublicKey.prototype.getKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKey()));
};


/**
 * optional bytes key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKey()`
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.PublicKey.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.mullvad_daemon.management_interface.PublicKey} returns this
 */
proto.mullvad_daemon.management_interface.PublicKey.prototype.setKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp created = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mullvad_daemon.management_interface.PublicKey.prototype.getCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.PublicKey} returns this
*/
proto.mullvad_daemon.management_interface.PublicKey.prototype.setCreated = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.PublicKey} returns this
 */
proto.mullvad_daemon.management_interface.PublicKey.prototype.clearCreated = function() {
  return this.setCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.PublicKey.prototype.hasCreated = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.ExcludedProcess.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.ExcludedProcess.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.ExcludedProcess} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.ExcludedProcess.toObject = function(includeInstance, msg) {
  var f, obj = {
    pid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    image: jspb.Message.getFieldWithDefault(msg, 2, ""),
    inherited: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.ExcludedProcess}
 */
proto.mullvad_daemon.management_interface.ExcludedProcess.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.ExcludedProcess;
  return proto.mullvad_daemon.management_interface.ExcludedProcess.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.ExcludedProcess} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.ExcludedProcess}
 */
proto.mullvad_daemon.management_interface.ExcludedProcess.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setImage(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInherited(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.ExcludedProcess.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.ExcludedProcess.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.ExcludedProcess} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.ExcludedProcess.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPid();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getImage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getInherited();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional uint32 pid = 1;
 * @return {number}
 */
proto.mullvad_daemon.management_interface.ExcludedProcess.prototype.getPid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mullvad_daemon.management_interface.ExcludedProcess} returns this
 */
proto.mullvad_daemon.management_interface.ExcludedProcess.prototype.setPid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string image = 2;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.ExcludedProcess.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.ExcludedProcess} returns this
 */
proto.mullvad_daemon.management_interface.ExcludedProcess.prototype.setImage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool inherited = 3;
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.ExcludedProcess.prototype.getInherited = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mullvad_daemon.management_interface.ExcludedProcess} returns this
 */
proto.mullvad_daemon.management_interface.ExcludedProcess.prototype.setInherited = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mullvad_daemon.management_interface.ExcludedProcessList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.ExcludedProcessList.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.ExcludedProcessList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.ExcludedProcessList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.ExcludedProcessList.toObject = function(includeInstance, msg) {
  var f, obj = {
    processesList: jspb.Message.toObjectList(msg.getProcessesList(),
    proto.mullvad_daemon.management_interface.ExcludedProcess.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.ExcludedProcessList}
 */
proto.mullvad_daemon.management_interface.ExcludedProcessList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.ExcludedProcessList;
  return proto.mullvad_daemon.management_interface.ExcludedProcessList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.ExcludedProcessList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.ExcludedProcessList}
 */
proto.mullvad_daemon.management_interface.ExcludedProcessList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mullvad_daemon.management_interface.ExcludedProcess;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.ExcludedProcess.deserializeBinaryFromReader);
      msg.addProcesses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.ExcludedProcessList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.ExcludedProcessList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.ExcludedProcessList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.ExcludedProcessList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProcessesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.mullvad_daemon.management_interface.ExcludedProcess.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ExcludedProcess processes = 1;
 * @return {!Array<!proto.mullvad_daemon.management_interface.ExcludedProcess>}
 */
proto.mullvad_daemon.management_interface.ExcludedProcessList.prototype.getProcessesList = function() {
  return /** @type{!Array<!proto.mullvad_daemon.management_interface.ExcludedProcess>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mullvad_daemon.management_interface.ExcludedProcess, 1));
};


/**
 * @param {!Array<!proto.mullvad_daemon.management_interface.ExcludedProcess>} value
 * @return {!proto.mullvad_daemon.management_interface.ExcludedProcessList} returns this
*/
proto.mullvad_daemon.management_interface.ExcludedProcessList.prototype.setProcessesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.mullvad_daemon.management_interface.ExcludedProcess=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mullvad_daemon.management_interface.ExcludedProcess}
 */
proto.mullvad_daemon.management_interface.ExcludedProcessList.prototype.addProcesses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.mullvad_daemon.management_interface.ExcludedProcess, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mullvad_daemon.management_interface.ExcludedProcessList} returns this
 */
proto.mullvad_daemon.management_interface.ExcludedProcessList.prototype.clearProcessesList = function() {
  return this.setProcessesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.AppVersionInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.AppVersionInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.AppVersionInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.AppVersionInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    supported: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    latestStable: jspb.Message.getFieldWithDefault(msg, 2, ""),
    latestBeta: jspb.Message.getFieldWithDefault(msg, 3, ""),
    suggestedUpgrade: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.AppVersionInfo}
 */
proto.mullvad_daemon.management_interface.AppVersionInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.AppVersionInfo;
  return proto.mullvad_daemon.management_interface.AppVersionInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.AppVersionInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.AppVersionInfo}
 */
proto.mullvad_daemon.management_interface.AppVersionInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSupported(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLatestStable(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLatestBeta(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSuggestedUpgrade(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.AppVersionInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.AppVersionInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.AppVersionInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.AppVersionInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSupported();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getLatestStable();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLatestBeta();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional bool supported = 1;
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.AppVersionInfo.prototype.getSupported = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mullvad_daemon.management_interface.AppVersionInfo} returns this
 */
proto.mullvad_daemon.management_interface.AppVersionInfo.prototype.setSupported = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string latest_stable = 2;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.AppVersionInfo.prototype.getLatestStable = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.AppVersionInfo} returns this
 */
proto.mullvad_daemon.management_interface.AppVersionInfo.prototype.setLatestStable = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string latest_beta = 3;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.AppVersionInfo.prototype.getLatestBeta = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.AppVersionInfo} returns this
 */
proto.mullvad_daemon.management_interface.AppVersionInfo.prototype.setLatestBeta = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string suggested_upgrade = 4;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.AppVersionInfo.prototype.getSuggestedUpgrade = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.AppVersionInfo} returns this
 */
proto.mullvad_daemon.management_interface.AppVersionInfo.prototype.setSuggestedUpgrade = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.AppVersionInfo} returns this
 */
proto.mullvad_daemon.management_interface.AppVersionInfo.prototype.clearSuggestedUpgrade = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.AppVersionInfo.prototype.hasSuggestedUpgrade = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mullvad_daemon.management_interface.RelayListCountry.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.RelayListCountry.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.RelayListCountry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.RelayListCountry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.RelayListCountry.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    code: jspb.Message.getFieldWithDefault(msg, 2, ""),
    citiesList: jspb.Message.toObjectList(msg.getCitiesList(),
    proto.mullvad_daemon.management_interface.RelayListCity.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.RelayListCountry}
 */
proto.mullvad_daemon.management_interface.RelayListCountry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.RelayListCountry;
  return proto.mullvad_daemon.management_interface.RelayListCountry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.RelayListCountry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.RelayListCountry}
 */
proto.mullvad_daemon.management_interface.RelayListCountry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 3:
      var value = new proto.mullvad_daemon.management_interface.RelayListCity;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.RelayListCity.deserializeBinaryFromReader);
      msg.addCities(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.RelayListCountry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.RelayListCountry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.RelayListCountry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.RelayListCountry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.mullvad_daemon.management_interface.RelayListCity.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.RelayListCountry.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.RelayListCountry} returns this
 */
proto.mullvad_daemon.management_interface.RelayListCountry.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string code = 2;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.RelayListCountry.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.RelayListCountry} returns this
 */
proto.mullvad_daemon.management_interface.RelayListCountry.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated RelayListCity cities = 3;
 * @return {!Array<!proto.mullvad_daemon.management_interface.RelayListCity>}
 */
proto.mullvad_daemon.management_interface.RelayListCountry.prototype.getCitiesList = function() {
  return /** @type{!Array<!proto.mullvad_daemon.management_interface.RelayListCity>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mullvad_daemon.management_interface.RelayListCity, 3));
};


/**
 * @param {!Array<!proto.mullvad_daemon.management_interface.RelayListCity>} value
 * @return {!proto.mullvad_daemon.management_interface.RelayListCountry} returns this
*/
proto.mullvad_daemon.management_interface.RelayListCountry.prototype.setCitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.mullvad_daemon.management_interface.RelayListCity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mullvad_daemon.management_interface.RelayListCity}
 */
proto.mullvad_daemon.management_interface.RelayListCountry.prototype.addCities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.mullvad_daemon.management_interface.RelayListCity, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mullvad_daemon.management_interface.RelayListCountry} returns this
 */
proto.mullvad_daemon.management_interface.RelayListCountry.prototype.clearCitiesList = function() {
  return this.setCitiesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mullvad_daemon.management_interface.RelayListCity.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.RelayListCity.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.RelayListCity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.RelayListCity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.RelayListCity.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    code: jspb.Message.getFieldWithDefault(msg, 2, ""),
    latitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    longitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    relaysList: jspb.Message.toObjectList(msg.getRelaysList(),
    proto.mullvad_daemon.management_interface.Relay.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.RelayListCity}
 */
proto.mullvad_daemon.management_interface.RelayListCity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.RelayListCity;
  return proto.mullvad_daemon.management_interface.RelayListCity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.RelayListCity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.RelayListCity}
 */
proto.mullvad_daemon.management_interface.RelayListCity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLatitude(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLongitude(value);
      break;
    case 5:
      var value = new proto.mullvad_daemon.management_interface.Relay;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.Relay.deserializeBinaryFromReader);
      msg.addRelays(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.RelayListCity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.RelayListCity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.RelayListCity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.RelayListCity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLatitude();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getLongitude();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getRelaysList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.mullvad_daemon.management_interface.Relay.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.RelayListCity.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.RelayListCity} returns this
 */
proto.mullvad_daemon.management_interface.RelayListCity.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string code = 2;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.RelayListCity.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.RelayListCity} returns this
 */
proto.mullvad_daemon.management_interface.RelayListCity.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double latitude = 3;
 * @return {number}
 */
proto.mullvad_daemon.management_interface.RelayListCity.prototype.getLatitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mullvad_daemon.management_interface.RelayListCity} returns this
 */
proto.mullvad_daemon.management_interface.RelayListCity.prototype.setLatitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double longitude = 4;
 * @return {number}
 */
proto.mullvad_daemon.management_interface.RelayListCity.prototype.getLongitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mullvad_daemon.management_interface.RelayListCity} returns this
 */
proto.mullvad_daemon.management_interface.RelayListCity.prototype.setLongitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * repeated Relay relays = 5;
 * @return {!Array<!proto.mullvad_daemon.management_interface.Relay>}
 */
proto.mullvad_daemon.management_interface.RelayListCity.prototype.getRelaysList = function() {
  return /** @type{!Array<!proto.mullvad_daemon.management_interface.Relay>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mullvad_daemon.management_interface.Relay, 5));
};


/**
 * @param {!Array<!proto.mullvad_daemon.management_interface.Relay>} value
 * @return {!proto.mullvad_daemon.management_interface.RelayListCity} returns this
*/
proto.mullvad_daemon.management_interface.RelayListCity.prototype.setRelaysList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.mullvad_daemon.management_interface.Relay=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mullvad_daemon.management_interface.Relay}
 */
proto.mullvad_daemon.management_interface.RelayListCity.prototype.addRelays = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.mullvad_daemon.management_interface.Relay, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mullvad_daemon.management_interface.RelayListCity} returns this
 */
proto.mullvad_daemon.management_interface.RelayListCity.prototype.clearRelaysList = function() {
  return this.setRelaysList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.Relay.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.Relay.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.Relay} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.Relay.toObject = function(includeInstance, msg) {
  var f, obj = {
    hostname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ipv4AddrIn: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ipv6AddrIn: jspb.Message.getFieldWithDefault(msg, 3, ""),
    includeInCountry: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    active: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    owned: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    provider: jspb.Message.getFieldWithDefault(msg, 7, ""),
    weight: jspb.Message.getFieldWithDefault(msg, 8, 0),
    endpointType: jspb.Message.getFieldWithDefault(msg, 9, 0),
    endpointData: (f = msg.getEndpointData()) && google_protobuf_any_pb.Any.toObject(includeInstance, f),
    location: (f = msg.getLocation()) && proto.mullvad_daemon.management_interface.Location.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.Relay}
 */
proto.mullvad_daemon.management_interface.Relay.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.Relay;
  return proto.mullvad_daemon.management_interface.Relay.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.Relay} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.Relay}
 */
proto.mullvad_daemon.management_interface.Relay.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHostname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIpv4AddrIn(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIpv6AddrIn(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeInCountry(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActive(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOwned(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setProvider(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readFixed64());
      msg.setWeight(value);
      break;
    case 9:
      var value = /** @type {!proto.mullvad_daemon.management_interface.Relay.RelayType} */ (reader.readEnum());
      msg.setEndpointType(value);
      break;
    case 10:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setEndpointData(value);
      break;
    case 11:
      var value = new proto.mullvad_daemon.management_interface.Location;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.Relay.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.Relay.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.Relay} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.Relay.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHostname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIpv4AddrIn();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIncludeInCountry();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getActive();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getOwned();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getProvider();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getWeight();
  if (f !== 0) {
    writer.writeFixed64(
      8,
      f
    );
  }
  f = message.getEndpointType();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getEndpointData();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.mullvad_daemon.management_interface.Location.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.mullvad_daemon.management_interface.Relay.RelayType = {
  OPENVPN: 0,
  BRIDGE: 1,
  WIREGUARD: 2
};

/**
 * optional string hostname = 1;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.Relay.prototype.getHostname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.Relay} returns this
 */
proto.mullvad_daemon.management_interface.Relay.prototype.setHostname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ipv4_addr_in = 2;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.Relay.prototype.getIpv4AddrIn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.Relay} returns this
 */
proto.mullvad_daemon.management_interface.Relay.prototype.setIpv4AddrIn = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string ipv6_addr_in = 3;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.Relay.prototype.getIpv6AddrIn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.Relay} returns this
 */
proto.mullvad_daemon.management_interface.Relay.prototype.setIpv6AddrIn = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.Relay} returns this
 */
proto.mullvad_daemon.management_interface.Relay.prototype.clearIpv6AddrIn = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.Relay.prototype.hasIpv6AddrIn = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool include_in_country = 4;
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.Relay.prototype.getIncludeInCountry = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mullvad_daemon.management_interface.Relay} returns this
 */
proto.mullvad_daemon.management_interface.Relay.prototype.setIncludeInCountry = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool active = 5;
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.Relay.prototype.getActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mullvad_daemon.management_interface.Relay} returns this
 */
proto.mullvad_daemon.management_interface.Relay.prototype.setActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool owned = 6;
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.Relay.prototype.getOwned = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mullvad_daemon.management_interface.Relay} returns this
 */
proto.mullvad_daemon.management_interface.Relay.prototype.setOwned = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional string provider = 7;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.Relay.prototype.getProvider = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.Relay} returns this
 */
proto.mullvad_daemon.management_interface.Relay.prototype.setProvider = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional fixed64 weight = 8;
 * @return {number}
 */
proto.mullvad_daemon.management_interface.Relay.prototype.getWeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.mullvad_daemon.management_interface.Relay} returns this
 */
proto.mullvad_daemon.management_interface.Relay.prototype.setWeight = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional RelayType endpoint_type = 9;
 * @return {!proto.mullvad_daemon.management_interface.Relay.RelayType}
 */
proto.mullvad_daemon.management_interface.Relay.prototype.getEndpointType = function() {
  return /** @type {!proto.mullvad_daemon.management_interface.Relay.RelayType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.mullvad_daemon.management_interface.Relay.RelayType} value
 * @return {!proto.mullvad_daemon.management_interface.Relay} returns this
 */
proto.mullvad_daemon.management_interface.Relay.prototype.setEndpointType = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional google.protobuf.Any endpoint_data = 10;
 * @return {?proto.google.protobuf.Any}
 */
proto.mullvad_daemon.management_interface.Relay.prototype.getEndpointData = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 10));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.Relay} returns this
*/
proto.mullvad_daemon.management_interface.Relay.prototype.setEndpointData = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.Relay} returns this
 */
proto.mullvad_daemon.management_interface.Relay.prototype.clearEndpointData = function() {
  return this.setEndpointData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.Relay.prototype.hasEndpointData = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Location location = 11;
 * @return {?proto.mullvad_daemon.management_interface.Location}
 */
proto.mullvad_daemon.management_interface.Relay.prototype.getLocation = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.Location} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.Location, 11));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.Location|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.Relay} returns this
*/
proto.mullvad_daemon.management_interface.Relay.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.Relay} returns this
 */
proto.mullvad_daemon.management_interface.Relay.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.Relay.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 11) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mullvad_daemon.management_interface.WireguardRelayEndpointData.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.WireguardRelayEndpointData.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.WireguardRelayEndpointData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.WireguardRelayEndpointData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.WireguardRelayEndpointData.toObject = function(includeInstance, msg) {
  var f, obj = {
    publicKey: msg.getPublicKey_asB64(),
    daita: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    shadowsocksExtraAddrInList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.WireguardRelayEndpointData}
 */
proto.mullvad_daemon.management_interface.WireguardRelayEndpointData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.WireguardRelayEndpointData;
  return proto.mullvad_daemon.management_interface.WireguardRelayEndpointData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.WireguardRelayEndpointData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.WireguardRelayEndpointData}
 */
proto.mullvad_daemon.management_interface.WireguardRelayEndpointData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPublicKey(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDaita(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addShadowsocksExtraAddrIn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.WireguardRelayEndpointData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.WireguardRelayEndpointData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.WireguardRelayEndpointData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.WireguardRelayEndpointData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getDaita();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getShadowsocksExtraAddrInList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional bytes public_key = 1;
 * @return {!(string|Uint8Array)}
 */
proto.mullvad_daemon.management_interface.WireguardRelayEndpointData.prototype.getPublicKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes public_key = 1;
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {string}
 */
proto.mullvad_daemon.management_interface.WireguardRelayEndpointData.prototype.getPublicKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPublicKey()));
};


/**
 * optional bytes public_key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPublicKey()`
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.WireguardRelayEndpointData.prototype.getPublicKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPublicKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.mullvad_daemon.management_interface.WireguardRelayEndpointData} returns this
 */
proto.mullvad_daemon.management_interface.WireguardRelayEndpointData.prototype.setPublicKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bool daita = 2;
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.WireguardRelayEndpointData.prototype.getDaita = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mullvad_daemon.management_interface.WireguardRelayEndpointData} returns this
 */
proto.mullvad_daemon.management_interface.WireguardRelayEndpointData.prototype.setDaita = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * repeated string shadowsocks_extra_addr_in = 3;
 * @return {!Array<string>}
 */
proto.mullvad_daemon.management_interface.WireguardRelayEndpointData.prototype.getShadowsocksExtraAddrInList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.mullvad_daemon.management_interface.WireguardRelayEndpointData} returns this
 */
proto.mullvad_daemon.management_interface.WireguardRelayEndpointData.prototype.setShadowsocksExtraAddrInList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.mullvad_daemon.management_interface.WireguardRelayEndpointData} returns this
 */
proto.mullvad_daemon.management_interface.WireguardRelayEndpointData.prototype.addShadowsocksExtraAddrIn = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mullvad_daemon.management_interface.WireguardRelayEndpointData} returns this
 */
proto.mullvad_daemon.management_interface.WireguardRelayEndpointData.prototype.clearShadowsocksExtraAddrInList = function() {
  return this.setShadowsocksExtraAddrInList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.Location.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.Location.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.Location} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.Location.toObject = function(includeInstance, msg) {
  var f, obj = {
    country: jspb.Message.getFieldWithDefault(msg, 1, ""),
    countryCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    city: jspb.Message.getFieldWithDefault(msg, 3, ""),
    cityCode: jspb.Message.getFieldWithDefault(msg, 4, ""),
    latitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    longitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.Location}
 */
proto.mullvad_daemon.management_interface.Location.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.Location;
  return proto.mullvad_daemon.management_interface.Location.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.Location} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.Location}
 */
proto.mullvad_daemon.management_interface.Location.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountryCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCityCode(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLatitude(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLongitude(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.Location.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.Location.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.Location} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.Location.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCountryCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCityCode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLatitude();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getLongitude();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
};


/**
 * optional string country = 1;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.Location.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.Location} returns this
 */
proto.mullvad_daemon.management_interface.Location.prototype.setCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string country_code = 2;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.Location.prototype.getCountryCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.Location} returns this
 */
proto.mullvad_daemon.management_interface.Location.prototype.setCountryCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string city = 3;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.Location.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.Location} returns this
 */
proto.mullvad_daemon.management_interface.Location.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string city_code = 4;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.Location.prototype.getCityCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.Location} returns this
 */
proto.mullvad_daemon.management_interface.Location.prototype.setCityCode = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional double latitude = 5;
 * @return {number}
 */
proto.mullvad_daemon.management_interface.Location.prototype.getLatitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mullvad_daemon.management_interface.Location} returns this
 */
proto.mullvad_daemon.management_interface.Location.prototype.setLatitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double longitude = 6;
 * @return {number}
 */
proto.mullvad_daemon.management_interface.Location.prototype.getLongitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mullvad_daemon.management_interface.Location} returns this
 */
proto.mullvad_daemon.management_interface.Location.prototype.setLongitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.mullvad_daemon.management_interface.DaemonEvent.oneofGroups_ = [[1,2,3,4,5,6,7]];

/**
 * @enum {number}
 */
proto.mullvad_daemon.management_interface.DaemonEvent.EventCase = {
  EVENT_NOT_SET: 0,
  TUNNEL_STATE: 1,
  SETTINGS: 2,
  RELAY_LIST: 3,
  VERSION_INFO: 4,
  DEVICE: 5,
  REMOVE_DEVICE: 6,
  NEW_ACCESS_METHOD: 7
};

/**
 * @return {proto.mullvad_daemon.management_interface.DaemonEvent.EventCase}
 */
proto.mullvad_daemon.management_interface.DaemonEvent.prototype.getEventCase = function() {
  return /** @type {proto.mullvad_daemon.management_interface.DaemonEvent.EventCase} */(jspb.Message.computeOneofCase(this, proto.mullvad_daemon.management_interface.DaemonEvent.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.DaemonEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.DaemonEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.DaemonEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.DaemonEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    tunnelState: (f = msg.getTunnelState()) && proto.mullvad_daemon.management_interface.TunnelState.toObject(includeInstance, f),
    settings: (f = msg.getSettings()) && proto.mullvad_daemon.management_interface.Settings.toObject(includeInstance, f),
    relayList: (f = msg.getRelayList()) && proto.mullvad_daemon.management_interface.RelayList.toObject(includeInstance, f),
    versionInfo: (f = msg.getVersionInfo()) && proto.mullvad_daemon.management_interface.AppVersionInfo.toObject(includeInstance, f),
    device: (f = msg.getDevice()) && proto.mullvad_daemon.management_interface.DeviceEvent.toObject(includeInstance, f),
    removeDevice: (f = msg.getRemoveDevice()) && proto.mullvad_daemon.management_interface.RemoveDeviceEvent.toObject(includeInstance, f),
    newAccessMethod: (f = msg.getNewAccessMethod()) && proto.mullvad_daemon.management_interface.AccessMethodSetting.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.DaemonEvent}
 */
proto.mullvad_daemon.management_interface.DaemonEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.DaemonEvent;
  return proto.mullvad_daemon.management_interface.DaemonEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.DaemonEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.DaemonEvent}
 */
proto.mullvad_daemon.management_interface.DaemonEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mullvad_daemon.management_interface.TunnelState;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.TunnelState.deserializeBinaryFromReader);
      msg.setTunnelState(value);
      break;
    case 2:
      var value = new proto.mullvad_daemon.management_interface.Settings;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.Settings.deserializeBinaryFromReader);
      msg.setSettings(value);
      break;
    case 3:
      var value = new proto.mullvad_daemon.management_interface.RelayList;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.RelayList.deserializeBinaryFromReader);
      msg.setRelayList(value);
      break;
    case 4:
      var value = new proto.mullvad_daemon.management_interface.AppVersionInfo;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.AppVersionInfo.deserializeBinaryFromReader);
      msg.setVersionInfo(value);
      break;
    case 5:
      var value = new proto.mullvad_daemon.management_interface.DeviceEvent;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.DeviceEvent.deserializeBinaryFromReader);
      msg.setDevice(value);
      break;
    case 6:
      var value = new proto.mullvad_daemon.management_interface.RemoveDeviceEvent;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.RemoveDeviceEvent.deserializeBinaryFromReader);
      msg.setRemoveDevice(value);
      break;
    case 7:
      var value = new proto.mullvad_daemon.management_interface.AccessMethodSetting;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.AccessMethodSetting.deserializeBinaryFromReader);
      msg.setNewAccessMethod(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.DaemonEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.DaemonEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.DaemonEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.DaemonEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTunnelState();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.mullvad_daemon.management_interface.TunnelState.serializeBinaryToWriter
    );
  }
  f = message.getSettings();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mullvad_daemon.management_interface.Settings.serializeBinaryToWriter
    );
  }
  f = message.getRelayList();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.mullvad_daemon.management_interface.RelayList.serializeBinaryToWriter
    );
  }
  f = message.getVersionInfo();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.mullvad_daemon.management_interface.AppVersionInfo.serializeBinaryToWriter
    );
  }
  f = message.getDevice();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.mullvad_daemon.management_interface.DeviceEvent.serializeBinaryToWriter
    );
  }
  f = message.getRemoveDevice();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.mullvad_daemon.management_interface.RemoveDeviceEvent.serializeBinaryToWriter
    );
  }
  f = message.getNewAccessMethod();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.mullvad_daemon.management_interface.AccessMethodSetting.serializeBinaryToWriter
    );
  }
};


/**
 * optional TunnelState tunnel_state = 1;
 * @return {?proto.mullvad_daemon.management_interface.TunnelState}
 */
proto.mullvad_daemon.management_interface.DaemonEvent.prototype.getTunnelState = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.TunnelState} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.TunnelState, 1));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.TunnelState|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.DaemonEvent} returns this
*/
proto.mullvad_daemon.management_interface.DaemonEvent.prototype.setTunnelState = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.mullvad_daemon.management_interface.DaemonEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.DaemonEvent} returns this
 */
proto.mullvad_daemon.management_interface.DaemonEvent.prototype.clearTunnelState = function() {
  return this.setTunnelState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.DaemonEvent.prototype.hasTunnelState = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Settings settings = 2;
 * @return {?proto.mullvad_daemon.management_interface.Settings}
 */
proto.mullvad_daemon.management_interface.DaemonEvent.prototype.getSettings = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.Settings} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.Settings, 2));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.Settings|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.DaemonEvent} returns this
*/
proto.mullvad_daemon.management_interface.DaemonEvent.prototype.setSettings = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.mullvad_daemon.management_interface.DaemonEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.DaemonEvent} returns this
 */
proto.mullvad_daemon.management_interface.DaemonEvent.prototype.clearSettings = function() {
  return this.setSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.DaemonEvent.prototype.hasSettings = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional RelayList relay_list = 3;
 * @return {?proto.mullvad_daemon.management_interface.RelayList}
 */
proto.mullvad_daemon.management_interface.DaemonEvent.prototype.getRelayList = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.RelayList} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.RelayList, 3));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.RelayList|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.DaemonEvent} returns this
*/
proto.mullvad_daemon.management_interface.DaemonEvent.prototype.setRelayList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.mullvad_daemon.management_interface.DaemonEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.DaemonEvent} returns this
 */
proto.mullvad_daemon.management_interface.DaemonEvent.prototype.clearRelayList = function() {
  return this.setRelayList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.DaemonEvent.prototype.hasRelayList = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional AppVersionInfo version_info = 4;
 * @return {?proto.mullvad_daemon.management_interface.AppVersionInfo}
 */
proto.mullvad_daemon.management_interface.DaemonEvent.prototype.getVersionInfo = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.AppVersionInfo} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.AppVersionInfo, 4));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.AppVersionInfo|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.DaemonEvent} returns this
*/
proto.mullvad_daemon.management_interface.DaemonEvent.prototype.setVersionInfo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.mullvad_daemon.management_interface.DaemonEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.DaemonEvent} returns this
 */
proto.mullvad_daemon.management_interface.DaemonEvent.prototype.clearVersionInfo = function() {
  return this.setVersionInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.DaemonEvent.prototype.hasVersionInfo = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional DeviceEvent device = 5;
 * @return {?proto.mullvad_daemon.management_interface.DeviceEvent}
 */
proto.mullvad_daemon.management_interface.DaemonEvent.prototype.getDevice = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.DeviceEvent} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.DeviceEvent, 5));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.DeviceEvent|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.DaemonEvent} returns this
*/
proto.mullvad_daemon.management_interface.DaemonEvent.prototype.setDevice = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.mullvad_daemon.management_interface.DaemonEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.DaemonEvent} returns this
 */
proto.mullvad_daemon.management_interface.DaemonEvent.prototype.clearDevice = function() {
  return this.setDevice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.DaemonEvent.prototype.hasDevice = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional RemoveDeviceEvent remove_device = 6;
 * @return {?proto.mullvad_daemon.management_interface.RemoveDeviceEvent}
 */
proto.mullvad_daemon.management_interface.DaemonEvent.prototype.getRemoveDevice = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.RemoveDeviceEvent} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.RemoveDeviceEvent, 6));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.RemoveDeviceEvent|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.DaemonEvent} returns this
*/
proto.mullvad_daemon.management_interface.DaemonEvent.prototype.setRemoveDevice = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.mullvad_daemon.management_interface.DaemonEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.DaemonEvent} returns this
 */
proto.mullvad_daemon.management_interface.DaemonEvent.prototype.clearRemoveDevice = function() {
  return this.setRemoveDevice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.DaemonEvent.prototype.hasRemoveDevice = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional AccessMethodSetting new_access_method = 7;
 * @return {?proto.mullvad_daemon.management_interface.AccessMethodSetting}
 */
proto.mullvad_daemon.management_interface.DaemonEvent.prototype.getNewAccessMethod = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.AccessMethodSetting} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.AccessMethodSetting, 7));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.AccessMethodSetting|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.DaemonEvent} returns this
*/
proto.mullvad_daemon.management_interface.DaemonEvent.prototype.setNewAccessMethod = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.mullvad_daemon.management_interface.DaemonEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.DaemonEvent} returns this
 */
proto.mullvad_daemon.management_interface.DaemonEvent.prototype.clearNewAccessMethod = function() {
  return this.setNewAccessMethod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.DaemonEvent.prototype.hasNewAccessMethod = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mullvad_daemon.management_interface.RelayList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.RelayList.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.RelayList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.RelayList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.RelayList.toObject = function(includeInstance, msg) {
  var f, obj = {
    countriesList: jspb.Message.toObjectList(msg.getCountriesList(),
    proto.mullvad_daemon.management_interface.RelayListCountry.toObject, includeInstance),
    openvpn: (f = msg.getOpenvpn()) && proto.mullvad_daemon.management_interface.OpenVpnEndpointData.toObject(includeInstance, f),
    bridge: (f = msg.getBridge()) && proto.mullvad_daemon.management_interface.BridgeEndpointData.toObject(includeInstance, f),
    wireguard: (f = msg.getWireguard()) && proto.mullvad_daemon.management_interface.WireguardEndpointData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.RelayList}
 */
proto.mullvad_daemon.management_interface.RelayList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.RelayList;
  return proto.mullvad_daemon.management_interface.RelayList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.RelayList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.RelayList}
 */
proto.mullvad_daemon.management_interface.RelayList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mullvad_daemon.management_interface.RelayListCountry;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.RelayListCountry.deserializeBinaryFromReader);
      msg.addCountries(value);
      break;
    case 2:
      var value = new proto.mullvad_daemon.management_interface.OpenVpnEndpointData;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.OpenVpnEndpointData.deserializeBinaryFromReader);
      msg.setOpenvpn(value);
      break;
    case 3:
      var value = new proto.mullvad_daemon.management_interface.BridgeEndpointData;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.BridgeEndpointData.deserializeBinaryFromReader);
      msg.setBridge(value);
      break;
    case 4:
      var value = new proto.mullvad_daemon.management_interface.WireguardEndpointData;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.WireguardEndpointData.deserializeBinaryFromReader);
      msg.setWireguard(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.RelayList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.RelayList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.RelayList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.RelayList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCountriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.mullvad_daemon.management_interface.RelayListCountry.serializeBinaryToWriter
    );
  }
  f = message.getOpenvpn();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mullvad_daemon.management_interface.OpenVpnEndpointData.serializeBinaryToWriter
    );
  }
  f = message.getBridge();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.mullvad_daemon.management_interface.BridgeEndpointData.serializeBinaryToWriter
    );
  }
  f = message.getWireguard();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.mullvad_daemon.management_interface.WireguardEndpointData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated RelayListCountry countries = 1;
 * @return {!Array<!proto.mullvad_daemon.management_interface.RelayListCountry>}
 */
proto.mullvad_daemon.management_interface.RelayList.prototype.getCountriesList = function() {
  return /** @type{!Array<!proto.mullvad_daemon.management_interface.RelayListCountry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mullvad_daemon.management_interface.RelayListCountry, 1));
};


/**
 * @param {!Array<!proto.mullvad_daemon.management_interface.RelayListCountry>} value
 * @return {!proto.mullvad_daemon.management_interface.RelayList} returns this
*/
proto.mullvad_daemon.management_interface.RelayList.prototype.setCountriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.mullvad_daemon.management_interface.RelayListCountry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mullvad_daemon.management_interface.RelayListCountry}
 */
proto.mullvad_daemon.management_interface.RelayList.prototype.addCountries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.mullvad_daemon.management_interface.RelayListCountry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mullvad_daemon.management_interface.RelayList} returns this
 */
proto.mullvad_daemon.management_interface.RelayList.prototype.clearCountriesList = function() {
  return this.setCountriesList([]);
};


/**
 * optional OpenVpnEndpointData openvpn = 2;
 * @return {?proto.mullvad_daemon.management_interface.OpenVpnEndpointData}
 */
proto.mullvad_daemon.management_interface.RelayList.prototype.getOpenvpn = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.OpenVpnEndpointData} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.OpenVpnEndpointData, 2));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.OpenVpnEndpointData|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.RelayList} returns this
*/
proto.mullvad_daemon.management_interface.RelayList.prototype.setOpenvpn = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.RelayList} returns this
 */
proto.mullvad_daemon.management_interface.RelayList.prototype.clearOpenvpn = function() {
  return this.setOpenvpn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.RelayList.prototype.hasOpenvpn = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional BridgeEndpointData bridge = 3;
 * @return {?proto.mullvad_daemon.management_interface.BridgeEndpointData}
 */
proto.mullvad_daemon.management_interface.RelayList.prototype.getBridge = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.BridgeEndpointData} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.BridgeEndpointData, 3));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.BridgeEndpointData|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.RelayList} returns this
*/
proto.mullvad_daemon.management_interface.RelayList.prototype.setBridge = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.RelayList} returns this
 */
proto.mullvad_daemon.management_interface.RelayList.prototype.clearBridge = function() {
  return this.setBridge(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.RelayList.prototype.hasBridge = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional WireguardEndpointData wireguard = 4;
 * @return {?proto.mullvad_daemon.management_interface.WireguardEndpointData}
 */
proto.mullvad_daemon.management_interface.RelayList.prototype.getWireguard = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.WireguardEndpointData} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.WireguardEndpointData, 4));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.WireguardEndpointData|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.RelayList} returns this
*/
proto.mullvad_daemon.management_interface.RelayList.prototype.setWireguard = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.RelayList} returns this
 */
proto.mullvad_daemon.management_interface.RelayList.prototype.clearWireguard = function() {
  return this.setWireguard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.RelayList.prototype.hasWireguard = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mullvad_daemon.management_interface.OpenVpnEndpointData.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.OpenVpnEndpointData.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.OpenVpnEndpointData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.OpenVpnEndpointData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.OpenVpnEndpointData.toObject = function(includeInstance, msg) {
  var f, obj = {
    endpointsList: jspb.Message.toObjectList(msg.getEndpointsList(),
    proto.mullvad_daemon.management_interface.OpenVpnEndpoint.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.OpenVpnEndpointData}
 */
proto.mullvad_daemon.management_interface.OpenVpnEndpointData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.OpenVpnEndpointData;
  return proto.mullvad_daemon.management_interface.OpenVpnEndpointData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.OpenVpnEndpointData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.OpenVpnEndpointData}
 */
proto.mullvad_daemon.management_interface.OpenVpnEndpointData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mullvad_daemon.management_interface.OpenVpnEndpoint;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.OpenVpnEndpoint.deserializeBinaryFromReader);
      msg.addEndpoints(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.OpenVpnEndpointData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.OpenVpnEndpointData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.OpenVpnEndpointData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.OpenVpnEndpointData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEndpointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.mullvad_daemon.management_interface.OpenVpnEndpoint.serializeBinaryToWriter
    );
  }
};


/**
 * repeated OpenVpnEndpoint endpoints = 1;
 * @return {!Array<!proto.mullvad_daemon.management_interface.OpenVpnEndpoint>}
 */
proto.mullvad_daemon.management_interface.OpenVpnEndpointData.prototype.getEndpointsList = function() {
  return /** @type{!Array<!proto.mullvad_daemon.management_interface.OpenVpnEndpoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mullvad_daemon.management_interface.OpenVpnEndpoint, 1));
};


/**
 * @param {!Array<!proto.mullvad_daemon.management_interface.OpenVpnEndpoint>} value
 * @return {!proto.mullvad_daemon.management_interface.OpenVpnEndpointData} returns this
*/
proto.mullvad_daemon.management_interface.OpenVpnEndpointData.prototype.setEndpointsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.mullvad_daemon.management_interface.OpenVpnEndpoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mullvad_daemon.management_interface.OpenVpnEndpoint}
 */
proto.mullvad_daemon.management_interface.OpenVpnEndpointData.prototype.addEndpoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.mullvad_daemon.management_interface.OpenVpnEndpoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mullvad_daemon.management_interface.OpenVpnEndpointData} returns this
 */
proto.mullvad_daemon.management_interface.OpenVpnEndpointData.prototype.clearEndpointsList = function() {
  return this.setEndpointsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.OpenVpnEndpoint.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.OpenVpnEndpoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.OpenVpnEndpoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.OpenVpnEndpoint.toObject = function(includeInstance, msg) {
  var f, obj = {
    port: jspb.Message.getFieldWithDefault(msg, 1, 0),
    protocol: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.OpenVpnEndpoint}
 */
proto.mullvad_daemon.management_interface.OpenVpnEndpoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.OpenVpnEndpoint;
  return proto.mullvad_daemon.management_interface.OpenVpnEndpoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.OpenVpnEndpoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.OpenVpnEndpoint}
 */
proto.mullvad_daemon.management_interface.OpenVpnEndpoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    case 2:
      var value = /** @type {!proto.mullvad_daemon.management_interface.TransportProtocol} */ (reader.readEnum());
      msg.setProtocol(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.OpenVpnEndpoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.OpenVpnEndpoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.OpenVpnEndpoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.OpenVpnEndpoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPort();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getProtocol();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional uint32 port = 1;
 * @return {number}
 */
proto.mullvad_daemon.management_interface.OpenVpnEndpoint.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mullvad_daemon.management_interface.OpenVpnEndpoint} returns this
 */
proto.mullvad_daemon.management_interface.OpenVpnEndpoint.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional TransportProtocol protocol = 2;
 * @return {!proto.mullvad_daemon.management_interface.TransportProtocol}
 */
proto.mullvad_daemon.management_interface.OpenVpnEndpoint.prototype.getProtocol = function() {
  return /** @type {!proto.mullvad_daemon.management_interface.TransportProtocol} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.mullvad_daemon.management_interface.TransportProtocol} value
 * @return {!proto.mullvad_daemon.management_interface.OpenVpnEndpoint} returns this
 */
proto.mullvad_daemon.management_interface.OpenVpnEndpoint.prototype.setProtocol = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mullvad_daemon.management_interface.BridgeEndpointData.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.BridgeEndpointData.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.BridgeEndpointData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.BridgeEndpointData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.BridgeEndpointData.toObject = function(includeInstance, msg) {
  var f, obj = {
    shadowsocksList: jspb.Message.toObjectList(msg.getShadowsocksList(),
    proto.mullvad_daemon.management_interface.ShadowsocksEndpointData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.BridgeEndpointData}
 */
proto.mullvad_daemon.management_interface.BridgeEndpointData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.BridgeEndpointData;
  return proto.mullvad_daemon.management_interface.BridgeEndpointData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.BridgeEndpointData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.BridgeEndpointData}
 */
proto.mullvad_daemon.management_interface.BridgeEndpointData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mullvad_daemon.management_interface.ShadowsocksEndpointData;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.ShadowsocksEndpointData.deserializeBinaryFromReader);
      msg.addShadowsocks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.BridgeEndpointData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.BridgeEndpointData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.BridgeEndpointData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.BridgeEndpointData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShadowsocksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.mullvad_daemon.management_interface.ShadowsocksEndpointData.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ShadowsocksEndpointData shadowsocks = 1;
 * @return {!Array<!proto.mullvad_daemon.management_interface.ShadowsocksEndpointData>}
 */
proto.mullvad_daemon.management_interface.BridgeEndpointData.prototype.getShadowsocksList = function() {
  return /** @type{!Array<!proto.mullvad_daemon.management_interface.ShadowsocksEndpointData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mullvad_daemon.management_interface.ShadowsocksEndpointData, 1));
};


/**
 * @param {!Array<!proto.mullvad_daemon.management_interface.ShadowsocksEndpointData>} value
 * @return {!proto.mullvad_daemon.management_interface.BridgeEndpointData} returns this
*/
proto.mullvad_daemon.management_interface.BridgeEndpointData.prototype.setShadowsocksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.mullvad_daemon.management_interface.ShadowsocksEndpointData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mullvad_daemon.management_interface.ShadowsocksEndpointData}
 */
proto.mullvad_daemon.management_interface.BridgeEndpointData.prototype.addShadowsocks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.mullvad_daemon.management_interface.ShadowsocksEndpointData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mullvad_daemon.management_interface.BridgeEndpointData} returns this
 */
proto.mullvad_daemon.management_interface.BridgeEndpointData.prototype.clearShadowsocksList = function() {
  return this.setShadowsocksList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.ShadowsocksEndpointData.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.ShadowsocksEndpointData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.ShadowsocksEndpointData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.ShadowsocksEndpointData.toObject = function(includeInstance, msg) {
  var f, obj = {
    port: jspb.Message.getFieldWithDefault(msg, 1, 0),
    cipher: jspb.Message.getFieldWithDefault(msg, 2, ""),
    password: jspb.Message.getFieldWithDefault(msg, 3, ""),
    protocol: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.ShadowsocksEndpointData}
 */
proto.mullvad_daemon.management_interface.ShadowsocksEndpointData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.ShadowsocksEndpointData;
  return proto.mullvad_daemon.management_interface.ShadowsocksEndpointData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.ShadowsocksEndpointData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.ShadowsocksEndpointData}
 */
proto.mullvad_daemon.management_interface.ShadowsocksEndpointData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCipher(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 4:
      var value = /** @type {!proto.mullvad_daemon.management_interface.TransportProtocol} */ (reader.readEnum());
      msg.setProtocol(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.ShadowsocksEndpointData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.ShadowsocksEndpointData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.ShadowsocksEndpointData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.ShadowsocksEndpointData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPort();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getCipher();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getProtocol();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional uint32 port = 1;
 * @return {number}
 */
proto.mullvad_daemon.management_interface.ShadowsocksEndpointData.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mullvad_daemon.management_interface.ShadowsocksEndpointData} returns this
 */
proto.mullvad_daemon.management_interface.ShadowsocksEndpointData.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string cipher = 2;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.ShadowsocksEndpointData.prototype.getCipher = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.ShadowsocksEndpointData} returns this
 */
proto.mullvad_daemon.management_interface.ShadowsocksEndpointData.prototype.setCipher = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string password = 3;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.ShadowsocksEndpointData.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.ShadowsocksEndpointData} returns this
 */
proto.mullvad_daemon.management_interface.ShadowsocksEndpointData.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional TransportProtocol protocol = 4;
 * @return {!proto.mullvad_daemon.management_interface.TransportProtocol}
 */
proto.mullvad_daemon.management_interface.ShadowsocksEndpointData.prototype.getProtocol = function() {
  return /** @type {!proto.mullvad_daemon.management_interface.TransportProtocol} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.mullvad_daemon.management_interface.TransportProtocol} value
 * @return {!proto.mullvad_daemon.management_interface.ShadowsocksEndpointData} returns this
 */
proto.mullvad_daemon.management_interface.ShadowsocksEndpointData.prototype.setProtocol = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mullvad_daemon.management_interface.WireguardEndpointData.repeatedFields_ = [1,4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.WireguardEndpointData.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.WireguardEndpointData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.WireguardEndpointData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.WireguardEndpointData.toObject = function(includeInstance, msg) {
  var f, obj = {
    portRangesList: jspb.Message.toObjectList(msg.getPortRangesList(),
    proto.mullvad_daemon.management_interface.PortRange.toObject, includeInstance),
    ipv4Gateway: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ipv6Gateway: jspb.Message.getFieldWithDefault(msg, 3, ""),
    shadowsocksPortRangesList: jspb.Message.toObjectList(msg.getShadowsocksPortRangesList(),
    proto.mullvad_daemon.management_interface.PortRange.toObject, includeInstance),
    udp2tcpPortsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.WireguardEndpointData}
 */
proto.mullvad_daemon.management_interface.WireguardEndpointData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.WireguardEndpointData;
  return proto.mullvad_daemon.management_interface.WireguardEndpointData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.WireguardEndpointData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.WireguardEndpointData}
 */
proto.mullvad_daemon.management_interface.WireguardEndpointData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mullvad_daemon.management_interface.PortRange;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.PortRange.deserializeBinaryFromReader);
      msg.addPortRanges(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIpv4Gateway(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIpv6Gateway(value);
      break;
    case 4:
      var value = new proto.mullvad_daemon.management_interface.PortRange;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.PortRange.deserializeBinaryFromReader);
      msg.addShadowsocksPortRanges(value);
      break;
    case 5:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint32() : [reader.readUint32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addUdp2tcpPorts(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.WireguardEndpointData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.WireguardEndpointData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.WireguardEndpointData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.WireguardEndpointData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPortRangesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.mullvad_daemon.management_interface.PortRange.serializeBinaryToWriter
    );
  }
  f = message.getIpv4Gateway();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIpv6Gateway();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getShadowsocksPortRangesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.mullvad_daemon.management_interface.PortRange.serializeBinaryToWriter
    );
  }
  f = message.getUdp2tcpPortsList();
  if (f.length > 0) {
    writer.writePackedUint32(
      5,
      f
    );
  }
};


/**
 * repeated PortRange port_ranges = 1;
 * @return {!Array<!proto.mullvad_daemon.management_interface.PortRange>}
 */
proto.mullvad_daemon.management_interface.WireguardEndpointData.prototype.getPortRangesList = function() {
  return /** @type{!Array<!proto.mullvad_daemon.management_interface.PortRange>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mullvad_daemon.management_interface.PortRange, 1));
};


/**
 * @param {!Array<!proto.mullvad_daemon.management_interface.PortRange>} value
 * @return {!proto.mullvad_daemon.management_interface.WireguardEndpointData} returns this
*/
proto.mullvad_daemon.management_interface.WireguardEndpointData.prototype.setPortRangesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.mullvad_daemon.management_interface.PortRange=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mullvad_daemon.management_interface.PortRange}
 */
proto.mullvad_daemon.management_interface.WireguardEndpointData.prototype.addPortRanges = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.mullvad_daemon.management_interface.PortRange, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mullvad_daemon.management_interface.WireguardEndpointData} returns this
 */
proto.mullvad_daemon.management_interface.WireguardEndpointData.prototype.clearPortRangesList = function() {
  return this.setPortRangesList([]);
};


/**
 * optional string ipv4_gateway = 2;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.WireguardEndpointData.prototype.getIpv4Gateway = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.WireguardEndpointData} returns this
 */
proto.mullvad_daemon.management_interface.WireguardEndpointData.prototype.setIpv4Gateway = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string ipv6_gateway = 3;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.WireguardEndpointData.prototype.getIpv6Gateway = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.WireguardEndpointData} returns this
 */
proto.mullvad_daemon.management_interface.WireguardEndpointData.prototype.setIpv6Gateway = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated PortRange shadowsocks_port_ranges = 4;
 * @return {!Array<!proto.mullvad_daemon.management_interface.PortRange>}
 */
proto.mullvad_daemon.management_interface.WireguardEndpointData.prototype.getShadowsocksPortRangesList = function() {
  return /** @type{!Array<!proto.mullvad_daemon.management_interface.PortRange>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mullvad_daemon.management_interface.PortRange, 4));
};


/**
 * @param {!Array<!proto.mullvad_daemon.management_interface.PortRange>} value
 * @return {!proto.mullvad_daemon.management_interface.WireguardEndpointData} returns this
*/
proto.mullvad_daemon.management_interface.WireguardEndpointData.prototype.setShadowsocksPortRangesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.mullvad_daemon.management_interface.PortRange=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mullvad_daemon.management_interface.PortRange}
 */
proto.mullvad_daemon.management_interface.WireguardEndpointData.prototype.addShadowsocksPortRanges = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.mullvad_daemon.management_interface.PortRange, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mullvad_daemon.management_interface.WireguardEndpointData} returns this
 */
proto.mullvad_daemon.management_interface.WireguardEndpointData.prototype.clearShadowsocksPortRangesList = function() {
  return this.setShadowsocksPortRangesList([]);
};


/**
 * repeated uint32 udp2tcp_ports = 5;
 * @return {!Array<number>}
 */
proto.mullvad_daemon.management_interface.WireguardEndpointData.prototype.getUdp2tcpPortsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.mullvad_daemon.management_interface.WireguardEndpointData} returns this
 */
proto.mullvad_daemon.management_interface.WireguardEndpointData.prototype.setUdp2tcpPortsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.mullvad_daemon.management_interface.WireguardEndpointData} returns this
 */
proto.mullvad_daemon.management_interface.WireguardEndpointData.prototype.addUdp2tcpPorts = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mullvad_daemon.management_interface.WireguardEndpointData} returns this
 */
proto.mullvad_daemon.management_interface.WireguardEndpointData.prototype.clearUdp2tcpPortsList = function() {
  return this.setUdp2tcpPortsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.PortRange.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.PortRange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.PortRange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.PortRange.toObject = function(includeInstance, msg) {
  var f, obj = {
    first: jspb.Message.getFieldWithDefault(msg, 1, 0),
    last: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.PortRange}
 */
proto.mullvad_daemon.management_interface.PortRange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.PortRange;
  return proto.mullvad_daemon.management_interface.PortRange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.PortRange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.PortRange}
 */
proto.mullvad_daemon.management_interface.PortRange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFirst(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLast(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.PortRange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.PortRange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.PortRange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.PortRange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFirst();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getLast();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 first = 1;
 * @return {number}
 */
proto.mullvad_daemon.management_interface.PortRange.prototype.getFirst = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mullvad_daemon.management_interface.PortRange} returns this
 */
proto.mullvad_daemon.management_interface.PortRange.prototype.setFirst = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 last = 2;
 * @return {number}
 */
proto.mullvad_daemon.management_interface.PortRange.prototype.getLast = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.mullvad_daemon.management_interface.PortRange} returns this
 */
proto.mullvad_daemon.management_interface.PortRange.prototype.setLast = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.AccountAndDevice.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.AccountAndDevice.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.AccountAndDevice} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.AccountAndDevice.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountNumber: jspb.Message.getFieldWithDefault(msg, 1, ""),
    device: (f = msg.getDevice()) && proto.mullvad_daemon.management_interface.Device.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.AccountAndDevice}
 */
proto.mullvad_daemon.management_interface.AccountAndDevice.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.AccountAndDevice;
  return proto.mullvad_daemon.management_interface.AccountAndDevice.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.AccountAndDevice} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.AccountAndDevice}
 */
proto.mullvad_daemon.management_interface.AccountAndDevice.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountNumber(value);
      break;
    case 2:
      var value = new proto.mullvad_daemon.management_interface.Device;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.Device.deserializeBinaryFromReader);
      msg.setDevice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.AccountAndDevice.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.AccountAndDevice.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.AccountAndDevice} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.AccountAndDevice.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountNumber();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDevice();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mullvad_daemon.management_interface.Device.serializeBinaryToWriter
    );
  }
};


/**
 * optional string account_number = 1;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.AccountAndDevice.prototype.getAccountNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.AccountAndDevice} returns this
 */
proto.mullvad_daemon.management_interface.AccountAndDevice.prototype.setAccountNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Device device = 2;
 * @return {?proto.mullvad_daemon.management_interface.Device}
 */
proto.mullvad_daemon.management_interface.AccountAndDevice.prototype.getDevice = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.Device} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.Device, 2));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.Device|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.AccountAndDevice} returns this
*/
proto.mullvad_daemon.management_interface.AccountAndDevice.prototype.setDevice = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.AccountAndDevice} returns this
 */
proto.mullvad_daemon.management_interface.AccountAndDevice.prototype.clearDevice = function() {
  return this.setDevice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.AccountAndDevice.prototype.hasDevice = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.Device.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.Device.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.Device} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.Device.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pubkey: msg.getPubkey_asB64(),
    hijackDns: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    created: (f = msg.getCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.Device}
 */
proto.mullvad_daemon.management_interface.Device.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.Device;
  return proto.mullvad_daemon.management_interface.Device.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.Device} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.Device}
 */
proto.mullvad_daemon.management_interface.Device.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPubkey(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHijackDns(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.Device.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.Device.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.Device} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.Device.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPubkey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getHijackDns();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getCreated();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.Device.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.Device} returns this
 */
proto.mullvad_daemon.management_interface.Device.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.Device.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.Device} returns this
 */
proto.mullvad_daemon.management_interface.Device.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bytes pubkey = 3;
 * @return {!(string|Uint8Array)}
 */
proto.mullvad_daemon.management_interface.Device.prototype.getPubkey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes pubkey = 3;
 * This is a type-conversion wrapper around `getPubkey()`
 * @return {string}
 */
proto.mullvad_daemon.management_interface.Device.prototype.getPubkey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPubkey()));
};


/**
 * optional bytes pubkey = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPubkey()`
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.Device.prototype.getPubkey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPubkey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.mullvad_daemon.management_interface.Device} returns this
 */
proto.mullvad_daemon.management_interface.Device.prototype.setPubkey = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional bool hijack_dns = 5;
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.Device.prototype.getHijackDns = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mullvad_daemon.management_interface.Device} returns this
 */
proto.mullvad_daemon.management_interface.Device.prototype.setHijackDns = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp created = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.mullvad_daemon.management_interface.Device.prototype.getCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.Device} returns this
*/
proto.mullvad_daemon.management_interface.Device.prototype.setCreated = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.Device} returns this
 */
proto.mullvad_daemon.management_interface.Device.prototype.clearCreated = function() {
  return this.setCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.Device.prototype.hasCreated = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mullvad_daemon.management_interface.DeviceList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.DeviceList.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.DeviceList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.DeviceList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.DeviceList.toObject = function(includeInstance, msg) {
  var f, obj = {
    devicesList: jspb.Message.toObjectList(msg.getDevicesList(),
    proto.mullvad_daemon.management_interface.Device.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.DeviceList}
 */
proto.mullvad_daemon.management_interface.DeviceList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.DeviceList;
  return proto.mullvad_daemon.management_interface.DeviceList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.DeviceList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.DeviceList}
 */
proto.mullvad_daemon.management_interface.DeviceList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mullvad_daemon.management_interface.Device;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.Device.deserializeBinaryFromReader);
      msg.addDevices(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.DeviceList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.DeviceList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.DeviceList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.DeviceList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDevicesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.mullvad_daemon.management_interface.Device.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Device devices = 1;
 * @return {!Array<!proto.mullvad_daemon.management_interface.Device>}
 */
proto.mullvad_daemon.management_interface.DeviceList.prototype.getDevicesList = function() {
  return /** @type{!Array<!proto.mullvad_daemon.management_interface.Device>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mullvad_daemon.management_interface.Device, 1));
};


/**
 * @param {!Array<!proto.mullvad_daemon.management_interface.Device>} value
 * @return {!proto.mullvad_daemon.management_interface.DeviceList} returns this
*/
proto.mullvad_daemon.management_interface.DeviceList.prototype.setDevicesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.mullvad_daemon.management_interface.Device=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mullvad_daemon.management_interface.Device}
 */
proto.mullvad_daemon.management_interface.DeviceList.prototype.addDevices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.mullvad_daemon.management_interface.Device, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mullvad_daemon.management_interface.DeviceList} returns this
 */
proto.mullvad_daemon.management_interface.DeviceList.prototype.clearDevicesList = function() {
  return this.setDevicesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.DeviceRemoval.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.DeviceRemoval.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.DeviceRemoval} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.DeviceRemoval.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountNumber: jspb.Message.getFieldWithDefault(msg, 1, ""),
    deviceId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.DeviceRemoval}
 */
proto.mullvad_daemon.management_interface.DeviceRemoval.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.DeviceRemoval;
  return proto.mullvad_daemon.management_interface.DeviceRemoval.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.DeviceRemoval} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.DeviceRemoval}
 */
proto.mullvad_daemon.management_interface.DeviceRemoval.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountNumber(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.DeviceRemoval.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.DeviceRemoval.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.DeviceRemoval} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.DeviceRemoval.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountNumber();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDeviceId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string account_number = 1;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.DeviceRemoval.prototype.getAccountNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.DeviceRemoval} returns this
 */
proto.mullvad_daemon.management_interface.DeviceRemoval.prototype.setAccountNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string device_id = 2;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.DeviceRemoval.prototype.getDeviceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.DeviceRemoval} returns this
 */
proto.mullvad_daemon.management_interface.DeviceRemoval.prototype.setDeviceId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.DeviceState.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.DeviceState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.DeviceState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.DeviceState.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0),
    device: (f = msg.getDevice()) && proto.mullvad_daemon.management_interface.AccountAndDevice.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.DeviceState}
 */
proto.mullvad_daemon.management_interface.DeviceState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.DeviceState;
  return proto.mullvad_daemon.management_interface.DeviceState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.DeviceState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.DeviceState}
 */
proto.mullvad_daemon.management_interface.DeviceState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mullvad_daemon.management_interface.DeviceState.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 2:
      var value = new proto.mullvad_daemon.management_interface.AccountAndDevice;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.AccountAndDevice.deserializeBinaryFromReader);
      msg.setDevice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.DeviceState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.DeviceState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.DeviceState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.DeviceState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDevice();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mullvad_daemon.management_interface.AccountAndDevice.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.mullvad_daemon.management_interface.DeviceState.State = {
  LOGGED_IN: 0,
  LOGGED_OUT: 1,
  REVOKED: 2
};

/**
 * optional State state = 1;
 * @return {!proto.mullvad_daemon.management_interface.DeviceState.State}
 */
proto.mullvad_daemon.management_interface.DeviceState.prototype.getState = function() {
  return /** @type {!proto.mullvad_daemon.management_interface.DeviceState.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mullvad_daemon.management_interface.DeviceState.State} value
 * @return {!proto.mullvad_daemon.management_interface.DeviceState} returns this
 */
proto.mullvad_daemon.management_interface.DeviceState.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional AccountAndDevice device = 2;
 * @return {?proto.mullvad_daemon.management_interface.AccountAndDevice}
 */
proto.mullvad_daemon.management_interface.DeviceState.prototype.getDevice = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.AccountAndDevice} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.AccountAndDevice, 2));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.AccountAndDevice|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.DeviceState} returns this
*/
proto.mullvad_daemon.management_interface.DeviceState.prototype.setDevice = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.DeviceState} returns this
 */
proto.mullvad_daemon.management_interface.DeviceState.prototype.clearDevice = function() {
  return this.setDevice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.DeviceState.prototype.hasDevice = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.DeviceEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.DeviceEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.DeviceEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.DeviceEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    cause: jspb.Message.getFieldWithDefault(msg, 1, 0),
    newState: (f = msg.getNewState()) && proto.mullvad_daemon.management_interface.DeviceState.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.DeviceEvent}
 */
proto.mullvad_daemon.management_interface.DeviceEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.DeviceEvent;
  return proto.mullvad_daemon.management_interface.DeviceEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.DeviceEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.DeviceEvent}
 */
proto.mullvad_daemon.management_interface.DeviceEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mullvad_daemon.management_interface.DeviceEvent.Cause} */ (reader.readEnum());
      msg.setCause(value);
      break;
    case 2:
      var value = new proto.mullvad_daemon.management_interface.DeviceState;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.DeviceState.deserializeBinaryFromReader);
      msg.setNewState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.DeviceEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.DeviceEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.DeviceEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.DeviceEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCause();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getNewState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mullvad_daemon.management_interface.DeviceState.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.mullvad_daemon.management_interface.DeviceEvent.Cause = {
  LOGGED_IN: 0,
  LOGGED_OUT: 1,
  REVOKED: 2,
  UPDATED: 3,
  ROTATED_KEY: 4
};

/**
 * optional Cause cause = 1;
 * @return {!proto.mullvad_daemon.management_interface.DeviceEvent.Cause}
 */
proto.mullvad_daemon.management_interface.DeviceEvent.prototype.getCause = function() {
  return /** @type {!proto.mullvad_daemon.management_interface.DeviceEvent.Cause} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mullvad_daemon.management_interface.DeviceEvent.Cause} value
 * @return {!proto.mullvad_daemon.management_interface.DeviceEvent} returns this
 */
proto.mullvad_daemon.management_interface.DeviceEvent.prototype.setCause = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional DeviceState new_state = 2;
 * @return {?proto.mullvad_daemon.management_interface.DeviceState}
 */
proto.mullvad_daemon.management_interface.DeviceEvent.prototype.getNewState = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.DeviceState} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.DeviceState, 2));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.DeviceState|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.DeviceEvent} returns this
*/
proto.mullvad_daemon.management_interface.DeviceEvent.prototype.setNewState = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.DeviceEvent} returns this
 */
proto.mullvad_daemon.management_interface.DeviceEvent.prototype.clearNewState = function() {
  return this.setNewState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.DeviceEvent.prototype.hasNewState = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mullvad_daemon.management_interface.RemoveDeviceEvent.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.RemoveDeviceEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.RemoveDeviceEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.RemoveDeviceEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.RemoveDeviceEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountNumber: jspb.Message.getFieldWithDefault(msg, 1, ""),
    newDeviceListList: jspb.Message.toObjectList(msg.getNewDeviceListList(),
    proto.mullvad_daemon.management_interface.Device.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.RemoveDeviceEvent}
 */
proto.mullvad_daemon.management_interface.RemoveDeviceEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.RemoveDeviceEvent;
  return proto.mullvad_daemon.management_interface.RemoveDeviceEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.RemoveDeviceEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.RemoveDeviceEvent}
 */
proto.mullvad_daemon.management_interface.RemoveDeviceEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountNumber(value);
      break;
    case 2:
      var value = new proto.mullvad_daemon.management_interface.Device;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.Device.deserializeBinaryFromReader);
      msg.addNewDeviceList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.RemoveDeviceEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.RemoveDeviceEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.RemoveDeviceEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.RemoveDeviceEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountNumber();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNewDeviceListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.mullvad_daemon.management_interface.Device.serializeBinaryToWriter
    );
  }
};


/**
 * optional string account_number = 1;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.RemoveDeviceEvent.prototype.getAccountNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.RemoveDeviceEvent} returns this
 */
proto.mullvad_daemon.management_interface.RemoveDeviceEvent.prototype.setAccountNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Device new_device_list = 2;
 * @return {!Array<!proto.mullvad_daemon.management_interface.Device>}
 */
proto.mullvad_daemon.management_interface.RemoveDeviceEvent.prototype.getNewDeviceListList = function() {
  return /** @type{!Array<!proto.mullvad_daemon.management_interface.Device>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mullvad_daemon.management_interface.Device, 2));
};


/**
 * @param {!Array<!proto.mullvad_daemon.management_interface.Device>} value
 * @return {!proto.mullvad_daemon.management_interface.RemoveDeviceEvent} returns this
*/
proto.mullvad_daemon.management_interface.RemoveDeviceEvent.prototype.setNewDeviceListList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.mullvad_daemon.management_interface.Device=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mullvad_daemon.management_interface.Device}
 */
proto.mullvad_daemon.management_interface.RemoveDeviceEvent.prototype.addNewDeviceList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.mullvad_daemon.management_interface.Device, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mullvad_daemon.management_interface.RemoveDeviceEvent} returns this
 */
proto.mullvad_daemon.management_interface.RemoveDeviceEvent.prototype.clearNewDeviceListList = function() {
  return this.setNewDeviceListList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.PlayPurchase.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.PlayPurchase.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.PlayPurchase} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.PlayPurchase.toObject = function(includeInstance, msg) {
  var f, obj = {
    productId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    purchaseToken: (f = msg.getPurchaseToken()) && proto.mullvad_daemon.management_interface.PlayPurchasePaymentToken.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.PlayPurchase}
 */
proto.mullvad_daemon.management_interface.PlayPurchase.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.PlayPurchase;
  return proto.mullvad_daemon.management_interface.PlayPurchase.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.PlayPurchase} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.PlayPurchase}
 */
proto.mullvad_daemon.management_interface.PlayPurchase.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductId(value);
      break;
    case 2:
      var value = new proto.mullvad_daemon.management_interface.PlayPurchasePaymentToken;
      reader.readMessage(value,proto.mullvad_daemon.management_interface.PlayPurchasePaymentToken.deserializeBinaryFromReader);
      msg.setPurchaseToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.PlayPurchase.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.PlayPurchase.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.PlayPurchase} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.PlayPurchase.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProductId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPurchaseToken();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mullvad_daemon.management_interface.PlayPurchasePaymentToken.serializeBinaryToWriter
    );
  }
};


/**
 * optional string product_id = 1;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.PlayPurchase.prototype.getProductId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.PlayPurchase} returns this
 */
proto.mullvad_daemon.management_interface.PlayPurchase.prototype.setProductId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PlayPurchasePaymentToken purchase_token = 2;
 * @return {?proto.mullvad_daemon.management_interface.PlayPurchasePaymentToken}
 */
proto.mullvad_daemon.management_interface.PlayPurchase.prototype.getPurchaseToken = function() {
  return /** @type{?proto.mullvad_daemon.management_interface.PlayPurchasePaymentToken} */ (
    jspb.Message.getWrapperField(this, proto.mullvad_daemon.management_interface.PlayPurchasePaymentToken, 2));
};


/**
 * @param {?proto.mullvad_daemon.management_interface.PlayPurchasePaymentToken|undefined} value
 * @return {!proto.mullvad_daemon.management_interface.PlayPurchase} returns this
*/
proto.mullvad_daemon.management_interface.PlayPurchase.prototype.setPurchaseToken = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mullvad_daemon.management_interface.PlayPurchase} returns this
 */
proto.mullvad_daemon.management_interface.PlayPurchase.prototype.clearPurchaseToken = function() {
  return this.setPurchaseToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mullvad_daemon.management_interface.PlayPurchase.prototype.hasPurchaseToken = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mullvad_daemon.management_interface.PlayPurchasePaymentToken.prototype.toObject = function(opt_includeInstance) {
  return proto.mullvad_daemon.management_interface.PlayPurchasePaymentToken.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mullvad_daemon.management_interface.PlayPurchasePaymentToken} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.PlayPurchasePaymentToken.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mullvad_daemon.management_interface.PlayPurchasePaymentToken}
 */
proto.mullvad_daemon.management_interface.PlayPurchasePaymentToken.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mullvad_daemon.management_interface.PlayPurchasePaymentToken;
  return proto.mullvad_daemon.management_interface.PlayPurchasePaymentToken.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mullvad_daemon.management_interface.PlayPurchasePaymentToken} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mullvad_daemon.management_interface.PlayPurchasePaymentToken}
 */
proto.mullvad_daemon.management_interface.PlayPurchasePaymentToken.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mullvad_daemon.management_interface.PlayPurchasePaymentToken.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mullvad_daemon.management_interface.PlayPurchasePaymentToken.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mullvad_daemon.management_interface.PlayPurchasePaymentToken} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mullvad_daemon.management_interface.PlayPurchasePaymentToken.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.mullvad_daemon.management_interface.PlayPurchasePaymentToken.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mullvad_daemon.management_interface.PlayPurchasePaymentToken} returns this
 */
proto.mullvad_daemon.management_interface.PlayPurchasePaymentToken.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * @enum {number}
 */
proto.mullvad_daemon.management_interface.AfterDisconnect = {
  NOTHING: 0,
  BLOCK: 1,
  RECONNECT: 2
};

/**
 * @enum {number}
 */
proto.mullvad_daemon.management_interface.TunnelType = {
  OPENVPN: 0,
  WIREGUARD: 1
};

/**
 * @enum {number}
 */
proto.mullvad_daemon.management_interface.FeatureIndicator = {
  QUANTUM_RESISTANCE: 0,
  MULTIHOP: 1,
  BRIDGE_MODE: 2,
  SPLIT_TUNNELING: 3,
  LOCKDOWN_MODE: 4,
  UDP_2_TCP: 5,
  SHADOWSOCKS: 6,
  LAN_SHARING: 7,
  DNS_CONTENT_BLOCKERS: 8,
  CUSTOM_DNS: 9,
  SERVER_IP_OVERRIDE: 10,
  CUSTOM_MTU: 11,
  CUSTOM_MSS_FIX: 12,
  DAITA: 13
};

/**
 * @enum {number}
 */
proto.mullvad_daemon.management_interface.Ownership = {
  ANY: 0,
  MULLVAD_OWNED: 1,
  RENTED: 2
};

/**
 * @enum {number}
 */
proto.mullvad_daemon.management_interface.IpVersion = {
  V4: 0,
  V6: 1
};

/**
 * @enum {number}
 */
proto.mullvad_daemon.management_interface.TransportProtocol = {
  UDP: 0,
  TCP: 1
};

goog.object.extend(exports, proto.mullvad_daemon.management_interface);
