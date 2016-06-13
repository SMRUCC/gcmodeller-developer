---
title: GamePadThumbSticks
---

# GamePadThumbSticks
_namespace: [OpenTK.Input](N-OpenTK.Input.html)_

Describes the current thumb stick state of a @"T:OpenTK.Input.GamePad" device

### Methods

#### Equals
```csharp
OpenTK.Input.GamePadThumbSticks.Equals(OpenTK.Input.GamePadThumbSticks)
```
Determines whether the specified @"T:OpenTK.Input.GamePadThumbSticks" is equal to the current @"T:OpenTK.Input.GamePadThumbSticks".

|Parameter Name|Remarks|
|--------------|-------|
|other|The @"T:OpenTK.Input.GamePadThumbSticks" to compare with the current @"T:OpenTK.Input.GamePadThumbSticks".|

_returns: true if the specified @"T:OpenTK.Input.GamePadThumbSticks" is equal to the current
            @"T:OpenTK.Input.GamePadThumbSticks"; otherwise, false._

#### GetHashCode
```csharp
OpenTK.Input.GamePadThumbSticks.GetHashCode
```
Serves as a hash function for a @"T:OpenTK.Input.GamePadThumbSticks" object.
_returns: A hash code for this instance that is suitable for use in hashing algorithms and data structures such as a
            hash table._

#### op_Equality
```csharp
OpenTK.Input.GamePadThumbSticks.op_Equality(OpenTK.Input.GamePadThumbSticks,OpenTK.Input.GamePadThumbSticks)
```


|Parameter Name|Remarks|
|--------------|-------|
|left|A @"T:OpenTK.Input.GamePadThumbSticks" instance to test for equality.|
|right|A @"T:OpenTK.Input.GamePadThumbSticks" instance to test for equality.|


#### op_Inequality
```csharp
OpenTK.Input.GamePadThumbSticks.op_Inequality(OpenTK.Input.GamePadThumbSticks,OpenTK.Input.GamePadThumbSticks)
```


|Parameter Name|Remarks|
|--------------|-------|
|left|A @"T:OpenTK.Input.GamePadThumbSticks" instance to test for inequality.|
|right|A @"T:OpenTK.Input.GamePadThumbSticks" instance to test for inequality.|


#### ToString
```csharp
OpenTK.Input.GamePadThumbSticks.ToString
```
Returns a @"T:System.String" that represents the current @"T:OpenTK.Input.GamePadThumbSticks".
_returns: A @"T:System.String" that represents the current @"T:OpenTK.Input.GamePadThumbSticks"._



### Properties

#### Left
Gets a @"T:OpenTK.Vector2" describing the state of the left thumb stick.
#### Right
Gets a @"T:OpenTK.Vector2" describing the state of the right thumb stick.

