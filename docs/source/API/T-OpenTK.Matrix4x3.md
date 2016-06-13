---
title: Matrix4x3
---

# Matrix4x3
_namespace: [OpenTK](N-OpenTK.html)_

Represents a 3x4 matrix.

### Methods

#### #ctor
```csharp
OpenTK.Matrix4x3.#ctor(System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single,System.Single)
```
Constructs a new instance.

|Parameter Name|Remarks|
|--------------|-------|
|m00|First item of the first row of the matrix.|
|m01|Second item of the first row of the matrix.|
|m02|Third item of the first row of the matrix.|
|m10|First item of the second row of the matrix.|
|m11|Second item of the second row of the matrix.|
|m12|Third item of the second row of the matrix.|
|m20|First item of the third row of the matrix.|
|m21|Second item of the third row of the matrix.|
|m22|Third item of the third row of the matrix.|
|m30|First item of the fourth row of the matrix.|
|m31|Second item of the fourth row of the matrix.|
|m32|Third item of the fourth row of the matrix.|


#### Add
```csharp
OpenTK.Matrix4x3.Add(OpenTK.Matrix4x3@,OpenTK.Matrix4x3@,OpenTK.Matrix4x3@)
```
Adds two instances.

|Parameter Name|Remarks|
|--------------|-------|
|left|The left operand of the addition.|
|right|The right operand of the addition.|
|result|A new instance that is the result of the addition.|

_returns: A new instance that is the result of the addition._

#### CreateFromAxisAngle
```csharp
OpenTK.Matrix4x3.CreateFromAxisAngle(OpenTK.Vector3,System.Single)
```
Build a rotation matrix from the specified axis/angle rotation.

|Parameter Name|Remarks|
|--------------|-------|
|axis|The axis to rotate about.|
|angle|Angle in radians to rotate counter-clockwise (looking in the direction of the given axis).|

_returns: A matrix instance._

#### CreateFromQuaternion
```csharp
OpenTK.Matrix4x3.CreateFromQuaternion(OpenTK.Quaternion)
```
Builds a rotation matrix from a quaternion.

|Parameter Name|Remarks|
|--------------|-------|
|q|The quaternion to rotate by.|

_returns: A matrix instance._

#### CreateRotationX
```csharp
OpenTK.Matrix4x3.CreateRotationX(System.Single)
```
Builds a rotation matrix for a rotation around the x-axis.

|Parameter Name|Remarks|
|--------------|-------|
|angle|The counter-clockwise angle in radians.|

_returns: The resulting Matrix4 instance._

#### CreateRotationY
```csharp
OpenTK.Matrix4x3.CreateRotationY(System.Single)
```
Builds a rotation matrix for a rotation around the y-axis.

|Parameter Name|Remarks|
|--------------|-------|
|angle|The counter-clockwise angle in radians.|

_returns: The resulting Matrix4 instance._

#### CreateRotationZ
```csharp
OpenTK.Matrix4x3.CreateRotationZ(System.Single)
```
Builds a rotation matrix for a rotation around the z-axis.

|Parameter Name|Remarks|
|--------------|-------|
|angle|The counter-clockwise angle in radians.|

_returns: The resulting Matrix4 instance._

#### CreateScale
```csharp
OpenTK.Matrix4x3.CreateScale(System.Single,System.Single,System.Single)
```
Build a scaling matrix

|Parameter Name|Remarks|
|--------------|-------|
|x|Scale factor for x-axis|
|y|Scale factor for y-axis|
|z|Scale factor for z-axis|

_returns: A scaling matrix_

#### CreateTranslation
```csharp
OpenTK.Matrix4x3.CreateTranslation(OpenTK.Vector3)
```
Creates a translation matrix.

|Parameter Name|Remarks|
|--------------|-------|
|vector|The translation vector.|

_returns: The resulting Matrix4 instance._

#### Equals
```csharp
OpenTK.Matrix4x3.Equals(OpenTK.Matrix4x3)
```
Indicates whether the current matrix is equal to another matrix.

|Parameter Name|Remarks|
|--------------|-------|
|other|An matrix to compare with this matrix.|

_returns: true if the current matrix is equal to the matrix parameter; otherwise, false._

#### GetHashCode
```csharp
OpenTK.Matrix4x3.GetHashCode
```
Returns the hashcode for this instance.
_returns: A System.Int32 containing the unique hashcode for this instance._

#### Invert
```csharp
OpenTK.Matrix4x3.Invert(OpenTK.Matrix4x3@,OpenTK.Matrix4x3@)
```
Calculate the inverse of the given matrix

|Parameter Name|Remarks|
|--------------|-------|
|mat|The matrix to invert|
|result|The inverse of the given matrix if it has one, or the input if it is singular|

_returns: The inverse of the given matrix if it has one, or the input if it is singular_

#### Mult
```csharp
OpenTK.Matrix4x3.Mult(OpenTK.Matrix4x3@,System.Single,OpenTK.Matrix4x3@)
```
Multiplies an instance by a scalar.

|Parameter Name|Remarks|
|--------------|-------|
|left|The left operand of the multiplication.|
|right|The right operand of the multiplication.|
|result|A new instance that is the result of the multiplication|

_returns: A new instance that is the result of the multiplication_

#### op_Addition
```csharp
OpenTK.Matrix4x3.op_Addition(OpenTK.Matrix4x3,OpenTK.Matrix4x3)
```
Matrix addition

|Parameter Name|Remarks|
|--------------|-------|
|left|left-hand operand|
|right|right-hand operand|

_returns: A new Matrix4x3 which holds the result of the addition_

#### op_Equality
```csharp
OpenTK.Matrix4x3.op_Equality(OpenTK.Matrix4x3,OpenTK.Matrix4x3)
```
Compares two instances for equality.

|Parameter Name|Remarks|
|--------------|-------|
|left|The first instance.|
|right|The second instance.|

_returns: True, if left equals right; false otherwise._

#### op_Inequality
```csharp
OpenTK.Matrix4x3.op_Inequality(OpenTK.Matrix4x3,OpenTK.Matrix4x3)
```
Compares two instances for inequality.

|Parameter Name|Remarks|
|--------------|-------|
|left|The first instance.|
|right|The second instance.|

_returns: True, if left does not equal right; false otherwise._

#### op_Multiply
```csharp
OpenTK.Matrix4x3.op_Multiply(OpenTK.Matrix4x3,System.Single)
```
Matrix-scalar multiplication

|Parameter Name|Remarks|
|--------------|-------|
|left|left-hand operand|
|right|right-hand operand|

_returns: A new Matrix4x3 which holds the result of the multiplication_

#### op_Subtraction
```csharp
OpenTK.Matrix4x3.op_Subtraction(OpenTK.Matrix4x3,OpenTK.Matrix4x3)
```
Matrix subtraction

|Parameter Name|Remarks|
|--------------|-------|
|left|left-hand operand|
|right|right-hand operand|

_returns: A new Matrix4x3 which holds the result of the subtraction_

#### Subtract
```csharp
OpenTK.Matrix4x3.Subtract(OpenTK.Matrix4x3@,OpenTK.Matrix4x3@,OpenTK.Matrix4x3@)
```
Subtracts one instance from another.

|Parameter Name|Remarks|
|--------------|-------|
|left|The left operand of the subraction.|
|right|The right operand of the subraction.|
|result|A new instance that is the result of the subraction.|

_returns: A new instance that is the result of the subraction._

#### ToString
```csharp
OpenTK.Matrix4x3.ToString
```
Returns a System.String that represents the current Matrix4x3.
_returns: The string representation of the matrix._

#### Transpose
```csharp
OpenTK.Matrix4x3.Transpose(OpenTK.Matrix4x3@,OpenTK.Matrix3x4@)
```
Calculate the transpose of the given matrix

|Parameter Name|Remarks|
|--------------|-------|
|mat|The matrix to transpose|
|result|The result of the calculation|

_returns: The transpose of the given matrix_



### Properties

#### Column0
Gets the first column of this matrix.
#### Column1
Gets the second column of this matrix.
#### Column2
Gets the third column of this matrix.
#### Diagonal
Gets or sets the values along the main diagonal of the matrix.
#### Item
Gets or sets the value at a specified row and column.
#### M11
Gets or sets the value at row 1, column 1 of this instance.
#### M12
Gets or sets the value at row 1, column 2 of this instance.
#### M13
Gets or sets the value at row 1, column 3 of this instance.
#### M21
Gets or sets the value at row 2, column 1 of this instance.
#### M22
Gets or sets the value at row 2, column 2 of this instance.
#### M23
Gets or sets the value at row 2, column 3 of this instance.
#### M31
Gets or sets the value at row 3, column 1 of this instance.
#### M32
Gets or sets the value at row 3, column 2 of this instance.
#### M33
Gets or sets the value at row 3, column 3 of this instance.
#### M41
Gets or sets the value at row 4, column 1 of this instance.
#### M42
Gets or sets the value at row 4, column 2 of this instance.
#### M43
Gets or sets the value at row 4, column 3 of this instance.
#### Row0
Top row of the matrix
#### Row1
2nd row of the matrix
#### Row2
3rd row of the matrix
#### Row3
Bottom row of the matrix
#### Trace
Gets the trace of the matrix, the sum of the values along the diagonal.
#### Zero
The zero matrix

