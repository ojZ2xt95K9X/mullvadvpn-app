@file:Suppress("DEPRECATION")

package net.mullvad.mullvadvpn.compose.util

import android.content.ClipData
import android.os.Build
import androidx.compose.material3.SnackbarDuration
import androidx.compose.material3.SnackbarHostState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.ui.platform.ClipEntry
import androidx.compose.ui.platform.Clipboard
import androidx.compose.ui.platform.LocalClipboard
import androidx.compose.ui.text.AnnotatedString
import kotlinx.coroutines.launch

typealias CopyToClipboardHandle = suspend (content: String, toastMessage: String?) -> Unit

@Composable
fun createCopyToClipboardHandle(snackbarHostState: SnackbarHostState): CopyToClipboardHandle {
    val scope = rememberCoroutineScope()
    val clipboardManager: Clipboard = LocalClipboard.current

    return { textToCopy: String, toastMessage: String? ->
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.TIRAMISU && toastMessage != null) {
            scope.launch {
                snackbarHostState.showSnackbarImmediately(
                    message = toastMessage,
                    duration = SnackbarDuration.Short,
                )
            }
        }

        clipboardManager.setClipEntry(
            ClipEntry(ClipData(ClipData.newPlainText("text", textToCopy)))
        )
        clipboardManager.nativeClipboard.text = AnnotatedString(textToCopy)
    }
}
