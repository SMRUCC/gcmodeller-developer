---
title: PropertySystemDevices
---

# PropertySystemDevices
_namespace: [Microsoft.Windows.Shell.PropertySystem.ShellProperties](N-Microsoft.Windows.Shell.PropertySystem.ShellProperties.html)_

System.Devices Properties



### Properties

#### BatteryLife
Name: System.Devices.BatteryLife -- PKEY_Devices_BatteryLifeDescription: Remaining battery life of the device as an integer between 0 and 100 percent.
Type: Byte -- VT_UI1FormatID: {49CD1F76-5626-4B17-A4E8-18B4AA1A2213}, 10
#### BatteryPlusCharging
Name: System.Devices.BatteryPlusCharging -- PKEY_Devices_BatteryPlusChargingDescription: Remaining battery life of the device as an integer between 0 and 100 percent and the device's charging state.
Type: Byte -- VT_UI1FormatID: {49CD1F76-5626-4B17-A4E8-18B4AA1A2213}, 22
#### BatteryPlusChargingText
Name: System.Devices.BatteryPlusChargingText -- PKEY_Devices_BatteryPlusChargingTextDescription: Remaining battery life of the device and the device's charging state as a string.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {49CD1F76-5626-4B17-A4E8-18B4AA1A2213}, 23
#### Category
Name: System.Devices.Category -- PKEY_Devices_Category_Desc_SingularDescription: Singular form of device category.
Type: Multivalue String -- VT_VECTOR | VT_LPWSTR (For variants: VT_ARRAY | VT_BSTR)FormatID: {78C34FC8-104A-4ACA-9EA4-524D52996E57}, 91
#### CategoryGroup
Name: System.Devices.CategoryGroup -- PKEY_Devices_CategoryGroup_DescDescription: Plural form of device category.
Type: Multivalue String -- VT_VECTOR | VT_LPWSTR (For variants: VT_ARRAY | VT_BSTR)FormatID: {78C34FC8-104A-4ACA-9EA4-524D52996E57}, 94
#### CategoryPlural
Name: System.Devices.CategoryPlural -- PKEY_Devices_Category_Desc_PluralDescription: Plural form of device category.
Type: Multivalue String -- VT_VECTOR | VT_LPWSTR (For variants: VT_ARRAY | VT_BSTR)FormatID: {78C34FC8-104A-4ACA-9EA4-524D52996E57}, 92
#### ChargingState
Name: System.Devices.ChargingState -- PKEY_Devices_ChargingStateDescription: Boolean value representing if the device is currently charging.
Type: Byte -- VT_UI1FormatID: {49CD1F76-5626-4B17-A4E8-18B4AA1A2213}, 11
#### Connected
Name: System.Devices.Connected -- PKEY_Devices_IsConnectedDescription: Device connection state. If VARIANT_TRUE, indicates the device is currently connected to the computer.
Type: Boolean -- VT_BOOLFormatID: {78C34FC8-104A-4ACA-9EA4-524D52996E57}, 55
#### ContainerId
Name: System.Devices.ContainerId -- PKEY_Devices_ContainerIdDescription: Device container ID.
Type: Guid -- VT_CLSIDFormatID: {8C7ED206-3F8A-4827-B3AB-AE9E1FAEFC6C}, 2
#### DefaultTooltip
Name: System.Devices.DefaultTooltip -- PKEY_Devices_DefaultTooltipDescription: Tooltip for default state
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {880F70A2-6082-47AC-8AAB-A739D1A300C3}, 153
#### DeviceDescription1
Name: System.Devices.DeviceDescription1 -- PKEY_Devices_DeviceDescription1Description: First line of descriptive text about the device.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {78C34FC8-104A-4ACA-9EA4-524D52996E57}, 81
#### DeviceDescription2
Name: System.Devices.DeviceDescription2 -- PKEY_Devices_DeviceDescription2Description: Second line of descriptive text about the device.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {78C34FC8-104A-4ACA-9EA4-524D52996E57}, 82
#### DiscoveryMethod
Name: System.Devices.DiscoveryMethod -- PKEY_Devices_DiscoveryMethodDescription: Device discovery method. This indicates on what transport or physical connection the device is discovered.
Type: Multivalue String -- VT_VECTOR | VT_LPWSTR (For variants: VT_ARRAY | VT_BSTR)FormatID: {78C34FC8-104A-4ACA-9EA4-524D52996E57}, 52
#### FriendlyName
Name: System.Devices.FriendlyName -- PKEY_Devices_FriendlyNameDescription: Device friendly name.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {656A3BB3-ECC0-43FD-8477-4AE0404A96CD}, 12288
#### FunctionPaths
Name: System.Devices.FunctionPaths -- PKEY_Devices_FunctionPathsDescription: Available functions for this device.
Type: Multivalue String -- VT_VECTOR | VT_LPWSTR (For variants: VT_ARRAY | VT_BSTR)FormatID: {D08DD4C0-3A9E-462E-8290-7B636B2576B9}, 3
#### InterfacePaths
Name: System.Devices.InterfacePaths -- PKEY_Devices_InterfacePathsDescription: Available interfaces for this device.
Type: Multivalue String -- VT_VECTOR | VT_LPWSTR (For variants: VT_ARRAY | VT_BSTR)FormatID: {D08DD4C0-3A9E-462E-8290-7B636B2576B9}, 2
#### IsDefault
Name: System.Devices.IsDefault -- PKEY_Devices_IsDefaultDeviceDescription: If VARIANT_TRUE, the device is not working properly.
Type: Boolean -- VT_BOOLFormatID: {78C34FC8-104A-4ACA-9EA4-524D52996E57}, 86
#### IsNetworkConnected
Name: System.Devices.IsNetworkConnected -- PKEY_Devices_IsNetworkDeviceDescription: If VARIANT_TRUE, the device is not working properly.
Type: Boolean -- VT_BOOLFormatID: {78C34FC8-104A-4ACA-9EA4-524D52996E57}, 85
#### IsShared
Name: System.Devices.IsShared -- PKEY_Devices_IsSharedDeviceDescription: If VARIANT_TRUE, the device is not working properly.
Type: Boolean -- VT_BOOLFormatID: {78C34FC8-104A-4ACA-9EA4-524D52996E57}, 84
#### IsSoftwareInstalling
Name: System.Devices.IsSoftwareInstalling -- PKEY_Devices_IsSoftwareInstallingDescription: If VARIANT_TRUE, the device installer is currently installing software.
Type: Boolean -- VT_BOOLFormatID: {83DA6326-97A6-4088-9453-A1923F573B29}, 9
#### LaunchDeviceStageFromExplorer
Name: System.Devices.LaunchDeviceStageFromExplorer -- PKEY_Devices_LaunchDeviceStageFromExplorerDescription: Indicates whether to launch Device Stage or not
Type: Boolean -- VT_BOOLFormatID: {78C34FC8-104A-4ACA-9EA4-524D52996E57}, 77
#### LocalMachine
Name: System.Devices.LocalMachine -- PKEY_Devices_IsLocalMachineDescription: If VARIANT_TRUE, the device in question is actually the computer.
Type: Boolean -- VT_BOOLFormatID: {78C34FC8-104A-4ACA-9EA4-524D52996E57}, 70
#### Manufacturer
Name: System.Devices.Manufacturer -- PKEY_Devices_ManufacturerDescription: Device manufacturer.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {656A3BB3-ECC0-43FD-8477-4AE0404A96CD}, 8192
#### MissedCalls
Name: System.Devices.MissedCalls -- PKEY_Devices_MissedCallsDescription: Number of missed calls on the device.
Type: Byte -- VT_UI1FormatID: {49CD1F76-5626-4B17-A4E8-18B4AA1A2213}, 5
#### ModelName
Name: System.Devices.ModelName -- PKEY_Devices_ModelNameDescription: Model name of the device.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {656A3BB3-ECC0-43FD-8477-4AE0404A96CD}, 8194
#### ModelNumber
Name: System.Devices.ModelNumber -- PKEY_Devices_ModelNumberDescription: Model number of the device.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {656A3BB3-ECC0-43FD-8477-4AE0404A96CD}, 8195
#### NetworkedTooltip
Name: System.Devices.NetworkedTooltip -- PKEY_Devices_NetworkedTooltipDescription: Tooltip for connection state
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {880F70A2-6082-47AC-8AAB-A739D1A300C3}, 152
#### NetworkName
Name: System.Devices.NetworkName -- PKEY_Devices_NetworkNameDescription: Name of the device's network.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {49CD1F76-5626-4B17-A4E8-18B4AA1A2213}, 7
#### NetworkType
Name: System.Devices.NetworkType -- PKEY_Devices_NetworkTypeDescription: String representing the type of the device's network.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {49CD1F76-5626-4B17-A4E8-18B4AA1A2213}, 8
#### NewPictures
Name: System.Devices.NewPictures -- PKEY_Devices_NewPicturesDescription: Number of new pictures on the device.
Type: UInt16 -- VT_UI2FormatID: {49CD1F76-5626-4B17-A4E8-18B4AA1A2213}, 4
#### Notification
Name: System.Devices.Notification -- PKEY_Devices_NotificationDescription: Device Notification Property.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {06704B0C-E830-4C81-9178-91E4E95A80A0}, 3
#### Notifications
Devices.Notifications Properties
#### NotificationStore
Name: System.Devices.NotificationStore -- PKEY_Devices_NotificationStoreDescription: Device Notification Store.
Type: Object -- VT_UNKNOWNFormatID: {06704B0C-E830-4C81-9178-91E4E95A80A0}, 2
#### NotWorkingProperly
Name: System.Devices.NotWorkingProperly -- PKEY_Devices_IsNotWorkingProperlyDescription: If VARIANT_TRUE, the device is not working properly.
Type: Boolean -- VT_BOOLFormatID: {78C34FC8-104A-4ACA-9EA4-524D52996E57}, 83
#### Paired
Name: System.Devices.Paired -- PKEY_Devices_IsPairedDescription: Device paired state. If VARIANT_TRUE, indicates the device is not paired with the computer.
Type: Boolean -- VT_BOOLFormatID: {78C34FC8-104A-4ACA-9EA4-524D52996E57}, 56
#### PrimaryCategory
Name: System.Devices.PrimaryCategory -- PKEY_Devices_PrimaryCategoryDescription: Primary category group for this device.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {D08DD4C0-3A9E-462E-8290-7B636B2576B9}, 10
#### Roaming
Name: System.Devices.Roaming -- PKEY_Devices_RoamingDescription: Status indicator used to indicate if the device is roaming.
Type: Byte -- VT_UI1FormatID: {49CD1F76-5626-4B17-A4E8-18B4AA1A2213}, 9
#### SafeRemovalRequired
Name: System.Devices.SafeRemovalRequired -- PKEY_Devices_SafeRemovalRequiredDescription: Indicates if a device requires safe removal or not
Type: Boolean -- VT_BOOLFormatID: {AFD97640-86A3-4210-B67C-289C41AABE55}, 2
#### SharedTooltip
Name: System.Devices.SharedTooltip -- PKEY_Devices_SharedTooltipDescription: Tooltip for sharing state
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {880F70A2-6082-47AC-8AAB-A739D1A300C3}, 151
#### SignalStrength
Name: System.Devices.SignalStrength -- PKEY_Devices_SignalStrengthDescription: Device signal strength.
Type: Byte -- VT_UI1FormatID: {49CD1F76-5626-4B17-A4E8-18B4AA1A2213}, 2
#### Status1
Name: System.Devices.Status1 -- PKEY_Devices_Status1Description: 1st line of device status.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {D08DD4C0-3A9E-462E-8290-7B636B2576B9}, 257
#### Status2
Name: System.Devices.Status2 -- PKEY_Devices_Status2Description: 2nd line of device status.
Type: String -- VT_LPWSTR (For variants: VT_BSTR)FormatID: {D08DD4C0-3A9E-462E-8290-7B636B2576B9}, 258
#### StorageCapacity
Name: System.Devices.StorageCapacity -- PKEY_Devices_StorageCapacityDescription: Total storage capacity of the device.
Type: UInt64 -- VT_UI8FormatID: {49CD1F76-5626-4B17-A4E8-18B4AA1A2213}, 12
#### StorageFreeSpace
Name: System.Devices.StorageFreeSpace -- PKEY_Devices_StorageFreeSpaceDescription: Total free space of the storage of the device.
Type: UInt64 -- VT_UI8FormatID: {49CD1F76-5626-4B17-A4E8-18B4AA1A2213}, 13
#### StorageFreeSpacePercent
Name: System.Devices.StorageFreeSpacePercent -- PKEY_Devices_StorageFreeSpacePercentDescription: Total free space of the storage of the device as a percentage.
Type: UInt32 -- VT_UI4FormatID: {49CD1F76-5626-4B17-A4E8-18B4AA1A2213}, 14
#### TextMessages
Name: System.Devices.TextMessages -- PKEY_Devices_TextMessagesDescription: Number of unread text messages on the device.
Type: Byte -- VT_UI1FormatID: {49CD1F76-5626-4B17-A4E8-18B4AA1A2213}, 3
#### Voicemail
Name: System.Devices.Voicemail -- PKEY_Devices_VoicemailDescription: Status indicator used to indicate if the device has voicemail.
Type: Byte -- VT_UI1FormatID: {49CD1F76-5626-4B17-A4E8-18B4AA1A2213}, 6

