package net.mullvad.mullvadvpn.compose.dialog

import androidx.activity.ComponentActivity
import androidx.compose.runtime.Composable
import androidx.compose.ui.test.AndroidComposeUiTest
import androidx.compose.ui.test.ExperimentalTestApi
import androidx.compose.ui.test.onNodeWithTag
import androidx.compose.ui.test.onNodeWithText
import androidx.compose.ui.test.performClick
import androidx.compose.ui.test.performTextInput
import androidx.compose.ui.test.runAndroidComposeUiTest
import br.com.colman.kotest.KotestRunnerAndroid
import io.kotest.core.spec.style.StringSpec
import io.mockk.mockk
import io.mockk.verify
import net.mullvad.mullvadvpn.compose.state.CreateCustomListUiState
import net.mullvad.mullvadvpn.compose.test.CREATE_CUSTOM_LIST_DIALOG_INPUT_TEST_TAG
import net.mullvad.mullvadvpn.lib.model.CustomListAlreadyExists
import net.mullvad.mullvadvpn.lib.model.UnknownCustomListError
import net.mullvad.mullvadvpn.lib.theme.AppTheme
import net.mullvad.mullvadvpn.usecase.customlists.CreateWithLocationsError
import org.junit.runner.RunWith

@OptIn(ExperimentalTestApi::class)
@RunWith(KotestRunnerAndroid::class)
class CreateCustomListDialogTest :
    StringSpec({
        "given no error should not show any error text" {
            runAndroidComposeUiTest<ComponentActivity> {
                val state = CreateCustomListUiState()
                setContentWithTheme { InitDialog(state) }

                onNodeWithText(NAME_EXIST_ERROR_TEXT).assertDoesNotExist()
                onNodeWithText(OTHER_ERROR_TEXT).assertDoesNotExist()
            }
        }

        "given custom list exists should show custom list exists error text" {
            runAndroidComposeUiTest<ComponentActivity> {
                val state =
                    CreateCustomListUiState(
                        error = CreateWithLocationsError.Create(CustomListAlreadyExists)
                    )
                setContentWithTheme { InitDialog(state) }

                onNodeWithText(NAME_EXIST_ERROR_TEXT).assertExists()
                onNodeWithText(OTHER_ERROR_TEXT).assertDoesNotExist()
            }
        }

        "given other custom list error should show an error occurred error text" {
            runAndroidComposeUiTest<ComponentActivity> {
                val state =
                    CreateCustomListUiState(
                        error = CreateWithLocationsError.Create(UnknownCustomListError(Throwable()))
                    )
                setContentWithTheme { InitDialog(state) }

                onNodeWithText(NAME_EXIST_ERROR_TEXT).assertDoesNotExist()
                onNodeWithText(OTHER_ERROR_TEXT).assertExists()
            }
        }

        "when cancel is clicked should dismiss dialog" {
            runAndroidComposeUiTest<ComponentActivity> {
                val mockedOnDismiss: () -> Unit = mockk(relaxed = true)
                val state = CreateCustomListUiState()
                setContentWithTheme { InitDialog(state, onDismiss = mockedOnDismiss) }

                onNodeWithText(CANCEL_BUTTON_TEXT).performClick()

                verify { mockedOnDismiss.invoke() }
            }
        }

        "given empty text input when submit is clicked then should not call on create" {
            runAndroidComposeUiTest<ComponentActivity> {
                val mockedCreateCustomList: (String) -> Unit = mockk(relaxed = true)
                val state = CreateCustomListUiState()
                setContentWithTheme { InitDialog(state, createCustomList = mockedCreateCustomList) }

                onNodeWithText(CREATE_BUTTON_TEXT).performClick()

                verify(exactly = 0) { mockedCreateCustomList.invoke(any()) }
            }
        }

        "given valid text input when submit is clicked then should call on create" {
            runAndroidComposeUiTest<ComponentActivity> {
                val mockedCreateCustomList: (String) -> Unit = mockk(relaxed = true)
                val inputText = "NEW LIST"
                val state = CreateCustomListUiState()
                setContentWithTheme { InitDialog(state, createCustomList = mockedCreateCustomList) }

                onNodeWithTag(CREATE_CUSTOM_LIST_DIALOG_INPUT_TEST_TAG).performTextInput(inputText)
                onNodeWithText(CREATE_BUTTON_TEXT).performClick()

                verify { mockedCreateCustomList.invoke(inputText) }
            }
        }

        "when input is changed should call on input changed" {
            runAndroidComposeUiTest<ComponentActivity> {
                val mockedOnInputChanged: () -> Unit = mockk(relaxed = true)
                val inputText = "NEW LIST"
                setContentWithTheme {
                    InitDialog(CreateCustomListUiState(), onInputChanged = mockedOnInputChanged)
                }

                onNodeWithTag(CREATE_CUSTOM_LIST_DIALOG_INPUT_TEST_TAG).performTextInput(inputText)

                verify { mockedOnInputChanged.invoke() }
            }
        }
    }) {

    companion object {
        private const val NAME_EXIST_ERROR_TEXT = "Name is already taken."
        private const val OTHER_ERROR_TEXT = "An error occurred."
        private const val CANCEL_BUTTON_TEXT = "Cancel"
        private const val CREATE_BUTTON_TEXT = "Create"
    }
}

@OptIn(ExperimentalTestApi::class)
private fun AndroidComposeUiTest<*>.setContentWithTheme(content: @Composable () -> Unit) {
    setContent { AppTheme(content) }
}

@Composable
private fun InitDialog(
    state: CreateCustomListUiState = CreateCustomListUiState(),
    createCustomList: (String) -> Unit = {},
    onInputChanged: () -> Unit = {},
    onDismiss: () -> Unit = {},
) {
    CreateCustomListDialog(
        state = state,
        createCustomList = createCustomList,
        onInputChanged = onInputChanged,
        onDismiss = onDismiss,
    )
}
