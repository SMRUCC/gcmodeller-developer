---
title: JoystickHatState
---

# JoystickHatState
_namespace: [OpenTK.Input](N-OpenTK.Input.html)_

Describes the state of a joystick hat.

### Methods

#### Equals
```csharp
OpenTK.Input.JoystickHatState.Equals(OpenTK.Input.JoystickHatState)
```
Determines whether the specified @"T:OpenTK.Input.JoystickHatState" is equal to the current @"T:OpenTK.Input.JoystickHatState".

|Parameter Name|Remarks|
|--------------|-------|
|other|The @"T:OpenTK.Input.JoystickHatState" to compare with the current @"T:OpenTK.Input.JoystickHatState".|

_returns: true if the specified @"T:OpenTK.Input.JoystickHatState" is equal to the current
            @"T:OpenTK.Input.JoystickHatState"; otherwise, false._

#### GetHashCode
```csharp
OpenTK.Input.JoystickHatState.GetHashCode
```
Serves as a hash function for a @"T:OpenTK.Input.JoystickHatState" object.
_returns: A hash code for this instance that is suitable for use in hashing algorithms and data structures such as a
            hash table._

#### ToString
```csharp
OpenTK.Input.JoystickHatState.ToString
```
Returns a @"T:System.String" that represents the current @"T:OpenTK.Input.JoystickHatState".
_returns: A @"T:System.String" that represents the current @"T:OpenTK.Input.JoystickHatState"._



### Properties

#### IsDown
Gets a @"T:System.Boolean" indicating
 whether this hat lies in the bottom hemicircle.
#### IsLeft
Gets a @"T:System.Boolean" indicating
 whether this hat lies in the left hemicircle.
#### IsRight
Gets a @"T:System.Boolean" indicating
 whether this hat lies in the right hemicircle.
#### IsUp
Gets a @"T:System.Boolean" indicating
 whether this hat lies in the top hemicircle.
#### Position
Gets a @"T:OpenTK.Input.HatPosition" value indicating
 the position of this hat.

