---
title: KeyboardState
---

# KeyboardState
_namespace: [OpenTK.Input](N-OpenTK.Input.html)_

Encapsulates the state of a Keyboard device.

### Methods

#### Equals
```csharp
OpenTK.Input.KeyboardState.Equals(OpenTK.Input.KeyboardState)
```
Compares two KeyboardState instances.

|Parameter Name|Remarks|
|--------------|-------|
|other|The instance to compare two.|

_returns: True, if both instances are equal; false otherwise._

#### GetHashCode
```csharp
OpenTK.Input.KeyboardState.GetHashCode
```
Generates a hashcode for the current instance.
_returns: 
            A @"T:System.Int32" represting the hashcode for this instance.
            _

#### IsKeyDown
```csharp
OpenTK.Input.KeyboardState.IsKeyDown(System.Int16)
```
Gets a @"T:System.Boolean" indicating whether this scan code is down.

|Parameter Name|Remarks|
|--------------|-------|
|code|The scan code to check.|


#### IsKeyUp
```csharp
OpenTK.Input.KeyboardState.IsKeyUp(System.Int16)
```
Gets a @"T:System.Boolean" indicating whether this scan code is down.

|Parameter Name|Remarks|
|--------------|-------|
|code|The scan code to check.|


#### op_Equality
```csharp
OpenTK.Input.KeyboardState.op_Equality(OpenTK.Input.KeyboardState,OpenTK.Input.KeyboardState)
```
Checks whether two @"T:OpenTK.Input.KeyboardState" instances are equal.

|Parameter Name|Remarks|
|--------------|-------|
|left|
            A @"T:OpenTK.Input.KeyboardState" instance.
            |
|right|
            A @"T:OpenTK.Input.KeyboardState" instance.
            |

_returns: 
            True if both left is equal to right; false otherwise.
            _

#### op_Inequality
```csharp
OpenTK.Input.KeyboardState.op_Inequality(OpenTK.Input.KeyboardState,OpenTK.Input.KeyboardState)
```
Checks whether two @"T:OpenTK.Input.KeyboardState" instances are not equal.

|Parameter Name|Remarks|
|--------------|-------|
|left|
            A @"T:OpenTK.Input.KeyboardState" instance.
            |
|right|
            A @"T:OpenTK.Input.KeyboardState" instance.
            |

_returns: 
            True if both left is not equal to right; false otherwise.
            _



### Properties

#### IsConnected
Gets a @"T:System.Boolean" indicating whether this keyboard
 is connected.
#### Item
Gets a @"T:System.Boolean" indicating whether the specified
 @"T:OpenTK.Input.Key" is pressed.

