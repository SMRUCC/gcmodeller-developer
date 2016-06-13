---
title: GamePadCapabilities
---

# GamePadCapabilities
_namespace: [OpenTK.Input](N-OpenTK.Input.html)_

Describes the capabilities of a GamePad input device.

### Methods

#### Equals
```csharp
OpenTK.Input.GamePadCapabilities.Equals(OpenTK.Input.GamePadCapabilities)
```
Determines whether the specified @"T:OpenTK.Input.GamePadCapabilities" is equal to the current @"T:OpenTK.Input.GamePadCapabilities".

|Parameter Name|Remarks|
|--------------|-------|
|other|The @"T:OpenTK.Input.GamePadCapabilities" to compare with the current @"T:OpenTK.Input.GamePadCapabilities".|

_returns: true if the specified @"T:OpenTK.Input.GamePadCapabilities" is equal to the current
            @"T:OpenTK.Input.GamePadCapabilities"; otherwise, false._

#### GetHashCode
```csharp
OpenTK.Input.GamePadCapabilities.GetHashCode
```
Serves as a hash function for a @"T:OpenTK.Input.GamePadCapabilities" object.
_returns: A hash code for this instance that is suitable for use in hashing algorithms and data structures such as a
            hash table._

#### op_Equality
```csharp
OpenTK.Input.GamePadCapabilities.op_Equality(OpenTK.Input.GamePadCapabilities,OpenTK.Input.GamePadCapabilities)
```


|Parameter Name|Remarks|
|--------------|-------|
|left|A @"T:OpenTK.Input.GamePadCapabilities" structure to test for equality.|
|right|A @"T:OpenTK.Input.GamePadCapabilities" structure to test for equality.|


#### op_Inequality
```csharp
OpenTK.Input.GamePadCapabilities.op_Inequality(OpenTK.Input.GamePadCapabilities,OpenTK.Input.GamePadCapabilities)
```


|Parameter Name|Remarks|
|--------------|-------|
|left|A @"T:OpenTK.Input.GamePadCapabilities" structure to test for inequality.|
|right|A @"T:OpenTK.Input.GamePadCapabilities" structure to test for inequality.|


#### ToString
```csharp
OpenTK.Input.GamePadCapabilities.ToString
```
Returns a @"T:System.String" that represents the current @"T:OpenTK.Input.GamePadCapabilities".
_returns: A @"T:System.String" that represents the current @"T:OpenTK.Input.GamePadCapabilities"._



### Properties

#### GamePadType
Gets a @"P:OpenTK.Input.GamePadCapabilities.GamePadType" value describing the type of a @"T:OpenTK.Input.GamePad" input device.
 This value depends on the connected device and the drivers in use. If IsConnected
 is false, then this value will be GamePadType.Unknown.
#### HasAButton
Gets a @"T:System.Boolean" value describing whether this GamePad has
 an A button.
#### HasBackButton
Gets a @"T:System.Boolean" value describing whether this GamePad has
 a back button.
#### HasBButton
Gets a @"T:System.Boolean" value describing whether this GamePad has
 a B button.
#### HasBigButton
Gets a @"T:System.Boolean" value describing whether this GamePad has
 a big button. (also known as "guide" or "home" button).
#### HasDPadDownButton
Gets a @"T:System.Boolean" value describing whether this GamePad has
 a down digital pad button.
#### HasDPadLeftButton
Gets a @"T:System.Boolean" value describing whether this GamePad has
 a left digital pad button.
#### HasDPadRightButton
Gets a @"T:System.Boolean" value describing whether this GamePad has
 a right digital pad button.
#### HasDPadUpButton
Gets a @"T:System.Boolean" value describing whether this GamePad has
 an up digital pad button.
#### HasLeftShoulderButton
Gets a @"T:System.Boolean" value describing whether this GamePad has
 a left shoulder button.
#### HasLeftStickButton
Gets a @"T:System.Boolean" value describing whether this GamePad has
 a left stick button.
#### HasLeftTrigger
Gets a @"T:System.Boolean" value describing whether this GamePad has
 a left trigger.
#### HasLeftVibrationMotor
Gets a @"T:System.Boolean" value describing whether this GamePad has
 a low-frequency vibration motor.
#### HasLeftXThumbStick
Gets a @"T:System.Boolean" value describing whether this GamePad has
 a left thumbstick with a x-axis.
#### HasLeftYThumbStick
Gets a @"T:System.Boolean" value describing whether this GamePad has
 a left thumbstick with a y-axis.
#### HasRightShoulderButton
Gets a @"T:System.Boolean" value describing whether this GamePad has
 a right shoulder button.
#### HasRightStickButton
Gets a @"T:System.Boolean" value describing whether this GamePad has
 a right stick button.
#### HasRightTrigger
Gets a @"T:System.Boolean" value describing whether this GamePad has
 a right trigger.
#### HasRightVibrationMotor
Gets a @"T:System.Boolean" value describing whether this GamePad has
 a high-frequency vibration motor.
#### HasRightXThumbStick
Gets a @"T:System.Boolean" value describing whether this GamePad has
 a right thumbstick with a x-axis.
#### HasRightYThumbStick
Gets a @"T:System.Boolean" value describing whether this GamePad has
 a right thumbstick with a y-axis.
#### HasStartButton
Gets a @"T:System.Boolean" value describing whether this GamePad has
 a start button.
#### HasVoiceSupport
Gets a @"T:System.Boolean" value describing whether this GamePad has
 a microphone input.
#### HasXButton
Gets a @"T:System.Boolean" value describing whether this GamePad has
 a X button.
#### HasYButton
Gets a @"T:System.Boolean" value describing whether this GamePad has
 a Y button.
#### IsConnected
Gets a @"T:System.Boolean" value describing whether this GamePad is
 currently connected.

