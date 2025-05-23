package net.mullvad.mullvadvpn.compose.textfield

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.input.KeyboardType

@Composable
fun DnsTextField(
    value: String,
    modifier: Modifier = Modifier,
    onValueChanged: (String) -> Unit = {},
    onSubmit: () -> Unit = {},
    placeholderText: String?,
    errorText: String?,
    isEnabled: Boolean = true,
    isValidValue: Boolean = true,
) {
    CustomTextField(
        value = value,
        keyboardType = KeyboardType.Text,
        modifier = modifier,
        onValueChanged = onValueChanged,
        onSubmit = { onSubmit() },
        isEnabled = isEnabled,
        placeholderText = placeholderText,
        supportingText = errorText?.let { { ErrorSupportingText(errorText) } },
        maxCharLength = Int.MAX_VALUE,
        isDigitsOnlyAllowed = false,
        isValidValue = isValidValue,
        textStyle = MaterialTheme.typography.titleMedium,
    )
}
