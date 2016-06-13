---
title: GamePad
---

# GamePad
_namespace: [OpenTK.Input](N-OpenTK.Input.html)_

Provides access to GamePad devices.
 A GamePad device offers a well-defined layout with
 one direction-pad, two thumbsticks, two triggers,
 four main buttons (A, B, X, Y) and up to seven
 auxilliary buttons.
 Use GetCapabilities to retrieve the exact
 capabilities of a given device.
 Use GetState to retrieve the current state
 of a given device.

### Methods

#### GetCapabilities
```csharp
OpenTK.Input.GamePad.GetCapabilities(System.Int32)
```
Retrieves a GamePadCapabilities structure describing the
 capabilities of a gamepad device.

|Parameter Name|Remarks|
|--------------|-------|
|index|The zero-based index of a gamepad device.|

_returns: A GamePadCapabilities structure describing the capabilities of the gamepad device._

#### GetState
```csharp
OpenTK.Input.GamePad.GetState(System.Int32)
```
Retrieves the GamePadState for the specified gamepad device.

|Parameter Name|Remarks|
|--------------|-------|
|index|The zero-based index of a gamepad device.|

_returns: A GamePadState structure describing the state of the gamepad device._

#### SetVibration
```csharp
OpenTK.Input.GamePad.SetVibration(System.Int32,System.Single,System.Single)
```
Sets the vibration intensity for the left and right motors of this @"T:OpenTK.Input.GamePad"

|Parameter Name|Remarks|
|--------------|-------|
|index|A zero-based device index for the GamePad device to affect|
|left|The vibration intensity for the left motor, between 0.0 and 1.0.|
|right|The vibration intensity for the right motor, between 0.0 and 1.0.|

_returns: true, if vibration was set, false otherwise. This method can return false
            if the GamePad hardware does not support vibration or if it cannot respond to
            the command for any reason. Do not loop until this becomes true, but rather ignore
            a return value of false.
            _




