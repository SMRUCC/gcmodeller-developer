---
title: GamePadButtons
---

# GamePadButtons
_namespace: [OpenTK.Input](N-OpenTK.Input.html)_

Describes the @"T:OpenTK.Input.ButtonState" of @"T:OpenTK.Input.GamePad" @"T:OpenTK.Input.Buttons".

### Methods

#### #ctor
```csharp
OpenTK.Input.GamePadButtons.#ctor(OpenTK.Input.Buttons)
```
Initializes a new instance of the @"T:OpenTK.Input.GamePadButtons" structure.

|Parameter Name|Remarks|
|--------------|-------|
|state|A bitmask containing the button state.|


#### Equals
```csharp
OpenTK.Input.GamePadButtons.Equals(OpenTK.Input.GamePadButtons)
```
Determines whether the specified @"T:OpenTK.Input.GamePadButtons" is equal to the current @"T:OpenTK.Input.GamePadButtons".

|Parameter Name|Remarks|
|--------------|-------|
|other|The @"T:OpenTK.Input.GamePadButtons" to compare with the current @"T:OpenTK.Input.GamePadButtons".|

_returns: true if the specified @"T:OpenTK.Input.GamePadButtons" is equal to the current
            @"T:OpenTK.Input.GamePadButtons"; otherwise, false._

#### GetHashCode
```csharp
OpenTK.Input.GamePadButtons.GetHashCode
```
Serves as a hash function for a @"T:OpenTK.Input.GamePadButtons" object.
_returns: A hash code for this instance that is suitable for use in hashing algorithms and data structures such as a
            hash table._

#### op_Equality
```csharp
OpenTK.Input.GamePadButtons.op_Equality(OpenTK.Input.GamePadButtons,OpenTK.Input.GamePadButtons)
```


|Parameter Name|Remarks|
|--------------|-------|
|left|A @"T:OpenTK.Input.GamePadButtons" instance to test for equality.|
|right|A @"T:OpenTK.Input.GamePadButtons" instance to test for equality.|


#### op_Inequality
```csharp
OpenTK.Input.GamePadButtons.op_Inequality(OpenTK.Input.GamePadButtons,OpenTK.Input.GamePadButtons)
```


|Parameter Name|Remarks|
|--------------|-------|
|left|A @"T:OpenTK.Input.GamePadButtons" instance to test for inequality.|
|right|A @"T:OpenTK.Input.GamePadButtons" instance to test for inequality.|


#### ToString
```csharp
OpenTK.Input.GamePadButtons.ToString
```
Returns a @"T:System.String" that represents the current @"T:OpenTK.Input.GamePadButtons".
_returns: A @"T:System.String" that represents the current @"T:OpenTK.Input.GamePadButtons"._



### Properties

#### A
Gets the @"T:OpenTK.Input.ButtonState" for the A button.
#### B
Gets the @"T:OpenTK.Input.ButtonState" for the B button.
#### Back
Gets the @"T:OpenTK.Input.ButtonState" for the Back button.
#### BigButton
Gets the @"T:OpenTK.Input.ButtonState" for the big button.
 This button is also known as Home or Guide.
#### LeftShoulder
Gets the @"T:OpenTK.Input.ButtonState" for the left shoulder button.
#### LeftStick
Gets the @"T:OpenTK.Input.ButtonState" for the left stick button.
 This button represents a left stick that is pressed in.
#### RightShoulder
Gets the @"T:OpenTK.Input.ButtonState" for the right shoulder button.
#### RightStick
Gets the @"T:OpenTK.Input.ButtonState" for the right stick button.
 This button represents a right stick that is pressed in.
#### Start
Gets the @"T:OpenTK.Input.ButtonState" for the starth button.
#### X
Gets the @"T:OpenTK.Input.ButtonState" for the X button.
#### Y
Gets the @"T:OpenTK.Input.ButtonState" for the Y button.

