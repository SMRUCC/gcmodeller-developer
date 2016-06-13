---
title: MouseState
---

# MouseState
_namespace: [OpenTK.Input](N-OpenTK.Input.html)_

Encapsulates the state of a mouse device.

### Methods

#### Equals
```csharp
OpenTK.Input.MouseState.Equals(OpenTK.Input.MouseState)
```
Compares two MouseState instances.

|Parameter Name|Remarks|
|--------------|-------|
|other|The instance to compare two.|

_returns: True, if both instances are equal; false otherwise._

#### GetHashCode
```csharp
OpenTK.Input.MouseState.GetHashCode
```
Generates a hashcode for the current instance.
_returns: 
            A @"T:System.Int32" represting the hashcode for this instance.
            _

#### IsButtonDown
```csharp
OpenTK.Input.MouseState.IsButtonDown(OpenTK.Input.MouseButton)
```
Gets a @"T:System.Boolean" indicating whether this button is down.

|Parameter Name|Remarks|
|--------------|-------|
|button|The @"T:OpenTK.Input.MouseButton" to check.|


#### IsButtonUp
```csharp
OpenTK.Input.MouseState.IsButtonUp(OpenTK.Input.MouseButton)
```
Gets a @"T:System.Boolean" indicating whether this button is up.

|Parameter Name|Remarks|
|--------------|-------|
|button|The @"T:OpenTK.Input.MouseButton" to check.|


#### op_Equality
```csharp
OpenTK.Input.MouseState.op_Equality(OpenTK.Input.MouseState,OpenTK.Input.MouseState)
```
Checks whether two @"T:OpenTK.Input.MouseState" instances are equal.

|Parameter Name|Remarks|
|--------------|-------|
|left|
            A @"T:OpenTK.Input.MouseState" instance.
            |
|right|
            A @"T:OpenTK.Input.MouseState" instance.
            |

_returns: 
            True if both left is equal to right; false otherwise.
            _

#### op_Inequality
```csharp
OpenTK.Input.MouseState.op_Inequality(OpenTK.Input.MouseState,OpenTK.Input.MouseState)
```
Checks whether two @"T:OpenTK.Input.MouseState" instances are not equal.

|Parameter Name|Remarks|
|--------------|-------|
|left|
            A @"T:OpenTK.Input.MouseState" instance.
            |
|right|
            A @"T:OpenTK.Input.MouseState" instance.
            |

_returns: 
            True if both left is not equal to right; false otherwise.
            _

#### ToString
```csharp
OpenTK.Input.MouseState.ToString
```
Returns a @"T:System.String" that represents the current @"T:OpenTK.Input.MouseState".
_returns: A @"T:System.String" that represents the current @"T:OpenTK.Input.MouseState"._



### Properties

#### IsConnected
Gets a value indicating whether this instance is connected.
#### Item
Gets a @"T:System.Boolean" indicating whether the specified
 @"T:OpenTK.Input.MouseButton" is pressed.
#### LeftButton
Gets a @"T:System.Boolean" indicating whether the left mouse button is pressed.
 This property is intended for XNA compatibility.
#### MiddleButton
Gets a @"T:System.Boolean" indicating whether the middle mouse button is pressed.
 This property is intended for XNA compatibility.
#### RightButton
Gets a @"T:System.Boolean" indicating whether the right mouse button is pressed.
 This property is intended for XNA compatibility.
#### Scroll
Gets a @"T:OpenTK.Input.MouseScroll" instance,
 representing the current state of the mouse scroll wheel.
#### ScrollWheelValue
Gets the absolute wheel position in integer units. This property is intended for XNA compatibility.
 To support high-precision mice, it is recommended to use @"P:OpenTK.Input.MouseState.WheelPrecise" instead.
#### Wheel
Gets the absolute wheel position in integer units.
 To support high-precision mice, it is recommended to use @"P:OpenTK.Input.MouseState.WheelPrecise" instead.
#### WheelPrecise
Gets the absolute wheel position in floating-point units.
#### X
Gets an integer representing the absolute x position of the pointer, in window pixel coordinates.
#### XButton1
Gets a @"T:System.Boolean" indicating whether the first extra mouse button is pressed.
 This property is intended for XNA compatibility.
#### XButton2
Gets a @"T:System.Boolean" indicating whether the second extra mouse button is pressed.
 This property is intended for XNA compatibility.
#### Y
Gets an integer representing the absolute y position of the pointer, in window pixel coordinates.

