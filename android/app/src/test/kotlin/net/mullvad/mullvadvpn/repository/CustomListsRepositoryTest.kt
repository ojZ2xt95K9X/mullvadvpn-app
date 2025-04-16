package net.mullvad.mullvadvpn.repository

import arrow.core.left
import arrow.core.right
import io.kotest.assertions.arrow.core.shouldBeLeft
import io.kotest.assertions.arrow.core.shouldBeRight
import io.kotest.core.spec.style.StringSpec
import io.kotest.matchers.shouldBe
import io.mockk.coEvery
import io.mockk.coVerify
import io.mockk.every
import io.mockk.mockk
import io.mockk.mockkStatic
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.test.UnconfinedTestDispatcher
import net.mullvad.mullvadvpn.lib.daemon.grpc.ManagementService
import net.mullvad.mullvadvpn.lib.model.CustomList
import net.mullvad.mullvadvpn.lib.model.CustomListAlreadyExists
import net.mullvad.mullvadvpn.lib.model.CustomListId
import net.mullvad.mullvadvpn.lib.model.CustomListName
import net.mullvad.mullvadvpn.lib.model.GeoLocationId
import net.mullvad.mullvadvpn.lib.model.GetCustomListError
import net.mullvad.mullvadvpn.lib.model.NameAlreadyExists
import net.mullvad.mullvadvpn.lib.model.Settings

@ExperimentalCoroutinesApi
class CustomListsRepositoryTest :
    StringSpec({
        val mockManagementService: ManagementService = mockk(relaxed = true)
        lateinit var customListsRepository: CustomListsRepository
        val settingsFlow: MutableStateFlow<Settings> = MutableStateFlow(mockk(relaxed = true))

        beforeEach {
            mockkStatic(RELAY_LIST_EXTENSIONS)
            every { mockManagementService.settings } returns settingsFlow
            customListsRepository =
                CustomListsRepository(
                    managementService = mockManagementService,
                    dispatcher = UnconfinedTestDispatcher(),
                )
        }

        "get custom list by id should return custom list when id matches custom list in settings" {
            val customListId = CustomListId("1")
            val expectedCustomList =
                CustomList(
                    id = customListId,
                    name = mockk(relaxed = true),
                    locations = emptyList()
                )
            val mockSettings: Settings = mockk()
            every { mockSettings.customLists } returns listOf(expectedCustomList)
            settingsFlow.value = mockSettings

            // Act
            val result = customListsRepository.getCustomListById(customListId)

            // Assert
            result shouldBeRight expectedCustomList
        }

        "get custom list by id should return get custom list error when id does not matches custom list in settings" {
            // Arrange
            val customListId = CustomListId("1")
            val mockCustomList =
                CustomList(
                    id = customListId,
                    name = mockk(relaxed = true),
                    locations = emptyList(),
                )
            val mockSettings: Settings = mockk()
            val otherCustomListId = CustomListId("2")
            every { mockSettings.customLists } returns listOf(mockCustomList)
            settingsFlow.value = mockSettings

            // Act
            val result = customListsRepository.getCustomListById(otherCustomListId)

            // Assert
            result shouldBeLeft GetCustomListError(otherCustomListId)
        }

        "create custom list should return id when creation is successful" {
            // Arrange
            val customListId = CustomListId("1")
            val customListName = CustomListName.fromString("CUSTOM")
            coEvery { mockManagementService.createCustomList(customListName) } returns
                customListId.right()

            // Act
            val result = customListsRepository.createCustomList(customListName)

            // Assert
            result shouldBeRight customListId
        }

        "create custom list should return lists exists error from management service" {
            // Arrange
            val customListName = CustomListName.fromString("CUSTOM")
            coEvery { mockManagementService.createCustomList(customListName) } returns
                CustomListAlreadyExists.left()

            // Act
            val result = customListsRepository.createCustomList(customListName)

            // Assert
            result shouldBeLeft CustomListAlreadyExists
        }

        "update custom list name should return success when call ManagementService is successful" {
            // Arrange
            val customListId = CustomListId("1")
            val customListName = CustomListName.fromString("CUSTOM")
            val mockSettings: Settings = mockk()
            val mockCustomList =
                CustomList(
                    id = customListId,
                    name = mockk(relaxed = true),
                    locations = emptyList(),
                )
            every { mockSettings.customLists } returns listOf(mockCustomList)
            settingsFlow.value = mockSettings
            coEvery { mockManagementService.updateCustomList(any<CustomList>()) } returns
                Unit.right()

            // Act
            val result = customListsRepository.updateCustomListName(customListId, customListName)

            // Assert
            result.shouldBeRight()
        }

        "update custom list name should return list exists error when list exists error is received" {
            val customListId = CustomListId("1")
            val customListName = CustomListName.fromString("CUSTOM")
            val expectedError = NameAlreadyExists(customListName)
            val mockSettings: Settings = mockk()
            val mockCustomList =
                CustomList(
                    id = customListId,
                    name = CustomListName.fromString("OLD CUSTOM"),
                    locations = emptyList(),
                )
            val updatedCustomList =
                CustomList(id = customListId, name = customListName, locations = emptyList())
            every { mockSettings.customLists } returns listOf(mockCustomList)
            settingsFlow.value = mockSettings
            coEvery { mockManagementService.updateCustomList(updatedCustomList) } returns
                expectedError.left()

            // Act
            val result = customListsRepository.updateCustomListName(customListId, customListName)

            // Assert
            result shouldBeLeft expectedError
        }

        "when delete custom lists is called Managementservice delete custom list should be called" {

            // Arrange
            val customListId = CustomListId("1")
            coEvery { mockManagementService.deleteCustomList(customListId) } returns Unit.right()

            // Act
            customListsRepository.deleteCustomList(customListId)

            // Assert
            coVerify { mockManagementService.deleteCustomList(customListId) }
        }

        "update custom list locations should return successful when list exists and update is successful" {
            // Arrange
            val customListId = CustomListId("1")
            val customListName = CustomListName.fromString("CUSTOM")
            val location = GeoLocationId.Country("se")
            val mockSettings: Settings = mockk()
            val mockCustomList =
                CustomList(id = customListId, name = customListName, locations = emptyList())
            val updatedCustomList =
                CustomList(id = customListId, name = customListName, locations = listOf(location))
            every { mockSettings.customLists } returns listOf(mockCustomList)
            settingsFlow.value = mockSettings
            coEvery { mockManagementService.updateCustomList(updatedCustomList) } returns
                Unit.right()

            // Act
            val result =
                customListsRepository.updateCustomListLocations(customListId, listOf(location))

            // Assert
            result.shouldBeRight()
        }

        "update custom list locations should return get custom list error when list does not exist" {
            // Arrange
            val mockSettings: Settings = mockk()
            val customListId = CustomListId("1")
            val otherCustomListId = CustomListId("2")
            val getCustomListError = GetCustomListError(otherCustomListId)
            val mockCustomList =
                CustomList(
                    id = customListId,
                    name = CustomListName.fromString("name"),
                    locations = emptyList(),
                )
            val locationId = GeoLocationId.Country("se")
            every { mockSettings.customLists } returns listOf(mockCustomList)
            settingsFlow.value = mockSettings

            // Act
            val result =
                customListsRepository.updateCustomListLocations(
                    otherCustomListId,
                    listOf(locationId),
                )

            // Assert
            result shouldBeLeft getCustomListError
        }
    }) {
    companion object {
        private const val RELAY_LIST_EXTENSIONS =
            "net.mullvad.mullvadvpn.relaylist.RelayListExtensionsKt"
    }
}
