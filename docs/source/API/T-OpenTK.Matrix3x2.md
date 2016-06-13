---
title: Matrix3x2
---

# Matrix3x2
_namespace: [OpenTK](N-OpenTK.html)_

Represents a 3x2 matrix.

### Methods

#### #ctor
```csharp
OpenTK.Matrix3x2.#ctor(System.Single,System.Single,System.Single,System.Single,System.Single,System.Single)
```
Constructs a new instance

|Parameter Name|Remarks|
|--------------|-------|
|m00|First item of the first row of the matrix.|
|m01|Second item of the first row of the matrix.|
|m10|First item of the second row of the matrix.|
|m11|Second item of the second row of the matrix.|
|m20|First item of the third row of the matrix.|
|m21|Second item of the third row of the matrix.|


#### Add
```csharp
OpenTK.Matrix3x2.Add(OpenTK.Matrix3x2,OpenTK.Matrix3x2)
```
Adds two instances.

|Parameter Name|Remarks|
|--------------|-------|
|left|The left operand of the addition.|
|right|The right operand of the addition.|

_returns: A new instance that is the result of the addition._

#### CreateRotation
```csharp
OpenTK.Matrix3x2.CreateRotation(System.Single)
```
Builds a rotation matrix.

|Parameter Name|Remarks|
|--------------|-------|
|angle|The counter-clockwise angle in radians.|

_returns: The resulting Matrix3x2 instance._

#### CreateScale
```csharp
OpenTK.Matrix3x2.CreateScale(System.Single,System.Single)
```
Creates a scale matrix.

|Parameter Name|Remarks|
|--------------|-------|
|x|Scale factor for the x axis.|
|y|Scale factor for the y axis.|

_returns: A scale matrix._

#### Equals
```csharp
OpenTK.Matrix3x2.Equals(OpenTK.Matrix3x2)
```
Indicates whether the current matrix is equal to another matrix.

|Parameter Name|Remarks|
|--------------|-------|
|other|An matrix to compare with this matrix.|

_returns: true if the current matrix is equal to the matrix parameter; otherwise, false._

#### GetHashCode
```csharp
OpenTK.Matrix3x2.GetHashCode
```
Returns the hashcode for this instance.
_returns: A System.Int32 containing the unique hashcode for this instance._

#### Mult
```csharp
OpenTK.Matrix3x2.Mult(OpenTK.Matrix3x2,OpenTK.Matrix2x4)
```
Multiplies two instances.

|Parameter Name|Remarks|
|--------------|-------|
|left|The left operand of the multiplication.|
|right|The right operand of the multiplication.|

_returns: A new instance that is the result of the multiplication._

#### op_Addition
```csharp
OpenTK.Matrix3x2.op_Addition(OpenTK.Matrix3x2,OpenTK.Matrix3x2)
```
Matrix addition

|Parameter Name|Remarks|
|--------------|-------|
|left|left-hand operand|
|right|right-hand operand|

_returns: A new Matrix3x2 which holds the result of the addition_

#### op_Equality
```csharp
OpenTK.Matrix3x2.op_Equality(OpenTK.Matrix3x2,OpenTK.Matrix3x2)
```
Compares two instances for equality.

|Parameter Name|Remarks|
|--------------|-------|
|left|The first instance.|
|right|The second instance.|

_returns: True, if left equals right; false otherwise._

#### op_Inequality
```csharp
OpenTK.Matrix3x2.op_Inequality(OpenTK.Matrix3x2,OpenTK.Matrix3x2)
```
Compares two instances for inequality.

|Parameter Name|Remarks|
|--------------|-------|
|left|The first instance.|
|right|The second instance.|

_returns: True, if left does not equal right; false otherwise._

#### op_Multiply
```csharp
OpenTK.Matrix3x2.op_Multiply(OpenTK.Matrix3x2,OpenTK.Matrix2x4)
```
Matrix multiplication

|Parameter Name|Remarks|
|--------------|-------|
|left|left-hand operand|
|right|right-hand operand|

_returns: A new Matrix3x4 which holds the result of the multiplication_

#### op_Subtraction
```csharp
OpenTK.Matrix3x2.op_Subtraction(OpenTK.Matrix3x2,OpenTK.Matrix3x2)
```
Matrix subtraction

|Parameter Name|Remarks|
|--------------|-------|
|left|left-hand operand|
|right|right-hand operand|

_returns: A new Matrix3x2 which holds the result of the subtraction_

#### Subtract
```csharp
OpenTK.Matrix3x2.Subtract(OpenTK.Matrix3x2,OpenTK.Matrix3x2)
```
Subtracts two instances.

|Parameter Name|Remarks|
|--------------|-------|
|left|The left operand of the subtraction.|
|right|The right operand of the subtraction.|

_returns: A new instance that is the result of the subtraction._

#### ToString
```csharp
OpenTK.Matrix3x2.ToString
```
Returns a System.String that represents the current Matrix3d.
_returns: The string representation of the matrix._

#### Transpose
```csharp
OpenTK.Matrix3x2.Transpose(OpenTK.Matrix3x2)
```
Calculate the transpose of the given matrix.

|Parameter Name|Remarks|
|--------------|-------|
|mat|The matrix to transpose.|

_returns: The transpose of the given matrix._



### Properties

#### Column0
Gets or sets the first column of this matrix.
#### Column1
Gets or sets the second column of this matrix.
#### Diagonal
Gets or sets the values along the main diagonal of the matrix.
#### Item
Gets or sets the value at a specified row and column.
#### M11
Gets or sets the value at row 1, column 1 of this instance.
#### M12
Gets or sets the value at row 1, column 2 of this instance.
#### M21
Gets or sets the value at row 2, column 1 of this instance.
#### M22
Gets or sets the value at row 2, column 2 of this instance.
#### M31
Gets or sets the value at row 3, column 1 of this instance.
#### M32
Gets or sets the value at row 3, column 2 of this instance.
#### Row0
Top row of the matrix.
#### Row1
Second row of the matrix.
#### Row2
Bottom row of the matrix.
#### Trace
Gets the trace of the matrix, the sum of the values along the diagonal.
#### Zero
The zero matrix.

