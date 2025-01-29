package net.mullvad.talpid

import android.net.ConnectivityManager
import android.net.LinkProperties
import android.net.Network
import android.net.NetworkCapabilities
import android.net.NetworkRequest
import co.touchlab.kermit.Logger
import java.net.Inet4Address
import java.net.Inet6Address
import java.net.InetAddress
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.SharingStarted
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.distinctUntilChanged
import kotlinx.coroutines.flow.filterIsInstance
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.onEach
import kotlinx.coroutines.flow.scan
import kotlinx.coroutines.flow.stateIn
import net.mullvad.talpid.model.ConnectionStatus
import net.mullvad.talpid.util.NetworkEvent
import net.mullvad.talpid.util.defaultNetworkFlow
import net.mullvad.talpid.util.networkFlow

class ConnectivityListener(val connectivityManager: ConnectivityManager, val talpidVpnService: TalpidVpnService) {
    private lateinit var _isConnected: StateFlow<ConnectionStatus>
    // Used by JNI
    val isConnected
        get() = _isConnected.value

    private lateinit var _currentDnsServers: StateFlow<List<InetAddress>>
    // Used by JNI
    val currentDnsServers
        get() = ArrayList(_currentDnsServers.value)

    fun register(scope: CoroutineScope) {
        _currentDnsServers =
            dnsServerChanges().stateIn(scope, SharingStarted.Eagerly, currentDnsServers())

        _isConnected =
            hasInternetCapability()
                .onEach { Logger.d("Status $it") }
                //.onEach { notifyConnectivityChange(it.ipv4, it.ipv6) }
                .stateIn(scope, SharingStarted.Eagerly, ConnectionStatus(false, false))
    }

    fun protect(socket: Int) = talpidVpnService.protect(socket)

    private fun dnsServerChanges(): Flow<List<InetAddress>> =
        connectivityManager
            .defaultNetworkFlow()
            .filterIsInstance<NetworkEvent.LinkPropertiesChanged>()
            .onEach { Logger.d("Link properties changed") }
            .onEach { it.linkProperties.routes.forEach {
                Logger.i("Status route: ${it.toString()}")
            } }
            .map { it.linkProperties.dnsServersWithoutFallback() }

    private fun currentDnsServers(): List<InetAddress> =
        connectivityManager
            .getLinkProperties(connectivityManager.activeNetwork)
            ?.dnsServersWithoutFallback() ?: emptyList()

    private fun LinkProperties.dnsServersWithoutFallback(): List<InetAddress> =
        dnsServers.filter { it.hostAddress != TalpidVpnService.FALLBACK_DUMMY_DNS_SERVER }

    private fun hasInternetCapability(): Flow<ConnectionStatus> {
        val request =
            NetworkRequest.Builder()
                .addCapability(NetworkCapabilities.NET_CAPABILITY_INTERNET)
                //.addCapability(NetworkCapabilities.NET_CAPABILITY_NOT_VPN)
                .build()

        return connectivityManager
            .networkFlow(request)
            .scan(setOf<Network>()) { networks, event ->
                when (event) {
                    is NetworkEvent.Available -> {
                        Logger.d("Network available ${event.network}")
                        (networks + event.network).also {
                            Logger.d("Number of networks: ${it.size}")
                        }
                    }
                    is NetworkEvent.Lost -> {
                        Logger.d("Network lost ${event.network}")
                        (networks - event.network).also {
                            Logger.d("Number of networks: ${it.size}")
                        }
                    }
                    else -> networks
                }
            }
            .map {
                ConnectionStatus(
                    it.any { network -> network.isIPv4() },
                    it.any { network -> network.isIPv6() }
                )
            }
            .onEach {
                notifyConnectivityChange(it.ipv4, it.ipv6)
            }
            .distinctUntilChanged()
    }

    private external fun notifyConnectivityChange(isIPv4: Boolean, isIPv6: Boolean)

    private fun Network.isIPv4(): Boolean =
        connectivityManager.getLinkProperties(this)?.linkAddresses?.any {
            it.address is Inet4Address
        } == true

    private fun Network.isIPv6(): Boolean =
        connectivityManager.getLinkProperties(this)?.linkAddresses?.any {
            Logger.i("Status address: ${it.address}")
            it.address is Inet6Address
        } == true
}
