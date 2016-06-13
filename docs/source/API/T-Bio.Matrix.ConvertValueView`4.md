---
title: ConvertValueView`4
---

# ConvertValueView`4
_namespace: [Bio.Matrix](N-Bio.Matrix.html)_

Creates a view on a matrix in which values converted one-to-one. For example, Suppose you have a matrix with
 char values such as '0', '1', '2' (with '?' for missing) and you need doubles (with double.NaN as missing).
 With this class you can wrap your original matrix, making it act like the matrix you need.

### Methods

#### #ctor
```csharp
Bio.Matrix.ConvertValueView`4.#ctor
```
Parameterless constructor. Don't use without setting the member variables with, for example, the SetUp method

#### SetUp
```csharp
Bio.Matrix.ConvertValueView`4.SetUp(Bio.Matrix.Matrix{`0,`1,`3},Bio.Util.ValueConverter{`3,`2},`2)
```
Set all important member variables after using the parameterless constructor.

|Parameter Name|Remarks|
|--------------|-------|
|parentMatrix|parent Matrix.|
|converter|The converter.|
|missingValue|The missingValue.|




### Properties

#### ParentMatrix
Get the original matrix that this view wraps.
#### ParentValueToViewValue
A function that converts a value of the wrapped matrix into a value of the wrapping matrix.
#### ViewValueToParentValue
A function that converts value of the wrapped matrix into a value of the wrapped matrix.

