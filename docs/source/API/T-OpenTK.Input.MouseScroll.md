---
title: MouseScroll
---

# MouseScroll
_namespace: [OpenTK.Input](N-OpenTK.Input.html)_

Represents the state of a mouse wheel.

### Methods

#### Equals
```csharp
OpenTK.Input.MouseScroll.Equals(OpenTK.Input.MouseScroll)
```
Determines whether the specified @"T:OpenTK.Input.MouseScroll" is equal to the current @"T:OpenTK.Input.MouseScroll".

|Parameter Name|Remarks|
|--------------|-------|
|other|The @"T:OpenTK.Input.MouseScroll" to compare with the current @"T:OpenTK.Input.MouseScroll".|

_returns: true if the specified @"T:OpenTK.Input.MouseScroll" is equal to the current
            @"T:OpenTK.Input.MouseScroll"; otherwise, false._

#### GetHashCode
```csharp
OpenTK.Input.MouseScroll.GetHashCode
```
Serves as a hash function for a @"T:OpenTK.Input.MouseScroll" object.
_returns: A hash code for this instance that is suitable for use in hashing algorithms and data structures such as a
            hash table._

#### op_Equality
```csharp
OpenTK.Input.MouseScroll.op_Equality(OpenTK.Input.MouseScroll,OpenTK.Input.MouseScroll)
```


|Parameter Name|Remarks|
|--------------|-------|
|left|A @"T:OpenTK.Input.MouseScroll" instance to test for equality.|
|right|A @"T:OpenTK.Input.MouseScroll" instance to test for equality.|


#### op_Inequality
```csharp
OpenTK.Input.MouseScroll.op_Inequality(OpenTK.Input.MouseScroll,OpenTK.Input.MouseScroll)
```


|Parameter Name|Remarks|
|--------------|-------|
|left|A @"T:OpenTK.Input.MouseScroll" instance to test for inequality.|
|right|A @"T:OpenTK.Input.MouseScroll" instance to test for inequality.|


#### ToString
```csharp
OpenTK.Input.MouseScroll.ToString
```
Returns a @"T:System.String" that represents the current @"T:OpenTK.Input.MouseScroll".
_returns: A @"T:System.String" that represents the current @"T:OpenTK.Input.MouseScroll"._



### Properties

#### X
Gets the absolute horizontal offset of the wheel,
 or 0 if no horizontal scroll wheel exists.
#### Y
Gets the absolute vertical offset of the wheel,
 or 0 if no vertical scroll wheel exists.

