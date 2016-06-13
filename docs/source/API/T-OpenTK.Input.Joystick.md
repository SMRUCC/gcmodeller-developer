---
title: Joystick
---

# Joystick
_namespace: [OpenTK.Input](N-OpenTK.Input.html)_

Provides access to Joystick devices.
 Joystick devices provide a varying number of axes and buttons.
 Use GetCapabilities to retrieve the number of supported
 axes and buttons on a given device.
 Use GetState to retrieve the current state of a given device.

### Methods

#### GetCapabilities
```csharp
OpenTK.Input.Joystick.GetCapabilities(System.Int32)
```
Retrieves the @"T:OpenTK.Input.JoystickCapabilities" of the device connected
 at the specified index.

|Parameter Name|Remarks|
|--------------|-------|
|index|The zero-based index of the device to poll.|

_returns: 
            A @"T:OpenTK.Input.JoystickCapabilities" structure describing
            the capabilities of the device at the specified index.
            If no device is connected at the specified index, the IsConnected
            property of the returned structure will be false.
            _

#### GetState
```csharp
OpenTK.Input.Joystick.GetState(System.Int32)
```
Retrieves the @"T:OpenTK.Input.JoystickState" of the device connected
 at the specified index.

|Parameter Name|Remarks|
|--------------|-------|
|index|The zero-based index of the device to poll.|

_returns: A @"T:OpenTK.Input.JoystickState" structure describing
            the current state of the device at the specified index.
            If no device is connected at this index, the IsConnected
            property of the returned structure will be false.
            _




