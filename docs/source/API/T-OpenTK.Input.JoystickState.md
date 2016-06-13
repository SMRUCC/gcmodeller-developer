---
title: JoystickState
---

# JoystickState
_namespace: [OpenTK.Input](N-OpenTK.Input.html)_

Describes the current state of a @"T:OpenTK.Input.JoystickDevice".

### Methods

#### Equals
```csharp
OpenTK.Input.JoystickState.Equals(OpenTK.Input.JoystickState)
```
Determines whether the specified @"T:OpenTK.Input.JoystickState" is equal to the current @"T:OpenTK.Input.JoystickState".

|Parameter Name|Remarks|
|--------------|-------|
|other|The @"T:OpenTK.Input.JoystickState" to compare with the current @"T:OpenTK.Input.JoystickState".|

_returns: true if the specified @"T:OpenTK.Input.JoystickState" is equal to the current
            @"T:OpenTK.Input.JoystickState"; otherwise, false._

#### GetAxis
```csharp
OpenTK.Input.JoystickState.GetAxis(OpenTK.Input.JoystickAxis)
```
Gets a value between -1.0 and 1.0 representing the current offset of the specified @"T:OpenTK.Input.JoystickAxis".

|Parameter Name|Remarks|
|--------------|-------|
|axis|The @"T:OpenTK.Input.JoystickAxis" to query.|

_returns: 
            A value between -1.0 and 1.0 representing offset of the specified  @"T:OpenTK.Input.JoystickAxis".
            If the specified axis does not exist, then the return value is 0.0. Use @"M:OpenTK.Input.Joystick.GetCapabilities(System.Int32)"
            to query the number of available axes.
            _

#### GetButton
```csharp
OpenTK.Input.JoystickState.GetButton(OpenTK.Input.JoystickButton)
```
Gets the current @"T:OpenTK.Input.ButtonState" of the specified @"T:OpenTK.Input.JoystickButton".

|Parameter Name|Remarks|
|--------------|-------|
|button|The @"T:OpenTK.Input.JoystickButton" to query.|

_returns: @"F:OpenTK.Input.ButtonState.Pressed" if the specified button is pressed; otherwise, @"F:OpenTK.Input.ButtonState.Released"._

#### GetHashCode
```csharp
OpenTK.Input.JoystickState.GetHashCode
```
Serves as a hash function for a @"T:OpenTK.Input.JoystickState" object.
_returns: A hash code for this instance that is suitable for use in hashing algorithms and data structures such as a
            hash table._

#### GetHat
```csharp
OpenTK.Input.JoystickState.GetHat(OpenTK.Input.JoystickHat)
```
Gets the hat.

|Parameter Name|Remarks|
|--------------|-------|
|hat|Hat.|

_returns: The hat._

#### IsButtonDown
```csharp
OpenTK.Input.JoystickState.IsButtonDown(OpenTK.Input.JoystickButton)
```
Gets a value indicating whether the specified @"T:OpenTK.Input.JoystickButton" is currently pressed.

|Parameter Name|Remarks|
|--------------|-------|
|button|The @"T:OpenTK.Input.JoystickButton" to query.|

_returns: true if the specified button is pressed; otherwise, false._

#### IsButtonUp
```csharp
OpenTK.Input.JoystickState.IsButtonUp(OpenTK.Input.JoystickButton)
```
Gets a value indicating whether the specified @"T:OpenTK.Input.JoystickButton" is currently released.

|Parameter Name|Remarks|
|--------------|-------|
|button|The @"T:OpenTK.Input.JoystickButton" to query.|

_returns: true if the specified button is released; otherwise, false._

#### ToString
```csharp
OpenTK.Input.JoystickState.ToString
```
Returns a @"T:System.String" that represents the current @"T:OpenTK.Input.JoystickState".
_returns: A @"T:System.String" that represents the current @"T:OpenTK.Input.JoystickState"._



### Properties

#### IsConnected
Gets a value indicating whether this instance is connected.

