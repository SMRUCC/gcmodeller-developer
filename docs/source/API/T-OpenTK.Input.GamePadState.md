---
title: GamePadState
---

# GamePadState
_namespace: [OpenTK.Input](N-OpenTK.Input.html)_

Describes the current state of a @"T:OpenTK.Input.GamePad" device.

### Methods

#### Equals
```csharp
OpenTK.Input.GamePadState.Equals(OpenTK.Input.GamePadState)
```
Determines whether the specified @"T:OpenTK.Input.GamePadState" is equal to the current @"T:OpenTK.Input.GamePadState".

|Parameter Name|Remarks|
|--------------|-------|
|other|The @"T:OpenTK.Input.GamePadState" to compare with the current @"T:OpenTK.Input.GamePadState".|

_returns: true if the specified @"T:OpenTK.Input.GamePadState" is equal to the current
            @"T:OpenTK.Input.GamePadState"; otherwise, false._

#### GetHashCode
```csharp
OpenTK.Input.GamePadState.GetHashCode
```
Serves as a hash function for a @"T:OpenTK.Input.GamePadState" object.
_returns: A hash code for this instance that is suitable for use in hashing algorithms and data structures such as a
            hash table._

#### ToString
```csharp
OpenTK.Input.GamePadState.ToString
```
Returns a @"T:System.String" that represents the current @"T:OpenTK.Input.GamePadState".
_returns: A @"T:System.String" that represents the current @"T:OpenTK.Input.GamePadState"._



### Properties

#### Buttons
Gets a @"T:OpenTK.Input.GamePadButtons" structure describing the
 state of the GamePad buttons.
#### DPad
Gets a @"T:OpenTK.Input.GamePadDPad" structure describing the
 state of the GamePad directional pad.
#### IsConnected
Gets a value indicating whether this GamePad instance is connected.
#### PacketNumber
Gets the packet number for this GamePadState instance.
 Use the packet number to determine whether the state of a
 GamePad device has changed.
#### ThumbSticks
Gets a @"T:OpenTK.Input.GamePadThumbSticks" structure describing the
 state of the GamePad thumb sticks.
#### Triggers
Gets a @"T:OpenTK.Input.GamePadTriggers" structure describing the
 state of the GamePad triggers.

