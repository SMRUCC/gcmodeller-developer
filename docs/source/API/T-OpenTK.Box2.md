---
title: Box2
---

# Box2
_namespace: [OpenTK](N-OpenTK.html)_

Defines a 2d box (rectangle).

### Methods

#### #ctor
```csharp
OpenTK.Box2.#ctor(System.Single,System.Single,System.Single,System.Single)
```
Constructs a new Box2 with the specified dimensions.

|Parameter Name|Remarks|
|--------------|-------|
|left|The position of the left boundary.|
|top|The position of the top boundary.|
|right|The position of the right boundary.|
|bottom|The position of the bottom boundary.|


#### FromTLRB
```csharp
OpenTK.Box2.FromTLRB(System.Single,System.Single,System.Single,System.Single)
```
Creates a new Box2 with the specified dimensions.

|Parameter Name|Remarks|
|--------------|-------|
|top|The position of the top boundary.|
|left|The position of the left boundary.|
|right|The position of the right boundary.|
|bottom|The position of the bottom boundary.|

_returns: A new OpenTK.Box2 with the specfied dimensions._

#### ToString
```csharp
OpenTK.Box2.ToString
```
Returns a @"T:System.String" describing the current instance.



### Properties

#### Bottom
The bottom boundary of the structure.
#### Height
Gets a float describing the height of the Box2 structure.
#### Left
The left boundary of the structure.
#### Right
The right boundary of the structure.
#### Top
The top boundary of the structure.
#### Width
Gets a float describing the width of the Box2 structure.

