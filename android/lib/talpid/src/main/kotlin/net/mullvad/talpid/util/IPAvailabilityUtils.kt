package net.mullvad.talpid.util

import co.touchlab.kermit.Logger
import java.net.DatagramSocket
import java.net.Inet6Address
import java.net.InetAddress
import java.net.InetSocketAddress
import java.net.SocketException

object IPAvailabilityUtils {
    suspend fun isIPv4Available(protect: (socket: DatagramSocket) -> Unit): Boolean =
        isIPAvailable(InetAddress.getByName("1.1.1.1"), protect)

    suspend fun isIPv6Available(protect: (socket: DatagramSocket) -> Unit): Boolean =
        isIPAvailable(
            InetAddress.getByName("2001:0db8:85a3:08d3:1319:8a2e:0370:7344"),
            protect,
        )

    private suspend inline fun <reified T : InetAddress> isIPAvailable(
        ip: T,
        protect: (socket: DatagramSocket) -> Unit,
    ): Boolean {
        val socket = DatagramSocket()
        return try {
            protect(socket)
            socket.connect(InetSocketAddress(ip, 1))
            socket.localAddress.hostAddress?.isNotEmpty() == true && socket.localAddress is T
        } catch (e: SocketException) {
            Logger.e("Failed to connect to $ip: ${e.message}")
            false
        } finally {
            socket.close()
        }
    }
}
