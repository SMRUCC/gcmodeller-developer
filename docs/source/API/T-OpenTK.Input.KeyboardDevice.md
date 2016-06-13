---
title: KeyboardDevice
---

# KeyboardDevice
_namespace: [OpenTK.Input](N-OpenTK.Input.html)_

Represents a keyboard device and provides methods to query its status.

### Methods

#### GetHashCode
```csharp
OpenTK.Input.KeyboardDevice.GetHashCode
```
Returns the hash code for this KeyboardDevice.
_returns: A 32-bit signed integer hash code._

#### ToString
```csharp
OpenTK.Input.KeyboardDevice.ToString
```
Returns a System.String representing this KeyboardDevice.
_returns: A System.String representing this KeyboardDevice._



### Properties

#### Description
Gets a @"T:System.String" which describes this instance.
#### DeviceID
Gets an IntPtr representing a device dependent ID.
#### DeviceType
Gets the @"T:OpenTK.Input.InputDeviceType" for this instance.
#### Item
Gets a value indicating the status of the specified Key.
#### KeyRepeat
Gets or sets a System.Boolean indicating key repeat status.
#### NumberOfFunctionKeys
Gets an integer representing the number of function keys (F-keys) on this KeyboardDevice.
#### NumberOfKeys
Gets an integer representing the number of keys on this KeyboardDevice.
#### NumberOfLeds
Gets a value indicating the number of led indicators on this KeyboardDevice.

