---
title: BlittableValueType
---

# BlittableValueType
_namespace: [OpenTK](N-OpenTK.html)_

Checks whether the specified type parameter is a blittable value type.

### Methods

#### Check``1
```csharp
OpenTK.BlittableValueType.Check``1(``0[][])
```
Checks whether type is a blittable value type.

|Parameter Name|Remarks|
|--------------|-------|
|type|An instance of the type to check.|

_returns: True if T is blittable; false otherwise._

#### StrideOf``1
```csharp
])
```
Returns the size of a single array element in bytes or 0 if the element is not blittable.

|Parameter Name|Remarks|
|--------------|-------|
|type|An instance of the value type.|

_returns: An integer, specifying the size of the type in bytes._




