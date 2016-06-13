---
title: Matrix3d
---

# Matrix3d
_namespace: [OpenTK](N-OpenTK.html)_

Represents a 3x3 matrix containing 3D rotation and scale with double-precision components.

### Methods

#### #ctor
```csharp
OpenTK.Matrix3d.#ctor(OpenTK.Matrix4d)
```
Constructs a new instance.

|Parameter Name|Remarks|
|--------------|-------|
|matrix|A Matrix4d to take the upper-left 3x3 from.|


#### ClearRotation
```csharp
OpenTK.Matrix3d.ClearRotation
```
Returns a copy of this Matrix3 without rotation.

#### ClearScale
```csharp
OpenTK.Matrix3d.ClearScale
```
Returns a copy of this Matrix3 without scale.

#### CreateFromAxisAngle
```csharp
OpenTK.Matrix3d.CreateFromAxisAngle(OpenTK.Vector3d,System.Double)
```
Build a rotation matrix from the specified axis/angle rotation.

|Parameter Name|Remarks|
|--------------|-------|
|axis|The axis to rotate about.|
|angle|Angle in radians to rotate counter-clockwise (looking in the direction of the given axis).|

_returns: A matrix instance._

#### CreateFromQuaternion
```csharp
OpenTK.Matrix3d.CreateFromQuaternion(OpenTK.Quaterniond)
```
Build a rotation matrix from the specified quaternion.

|Parameter Name|Remarks|
|--------------|-------|
|q|Quaternion to translate.|

_returns: A matrix instance._

#### CreateRotationX
```csharp
OpenTK.Matrix3d.CreateRotationX(System.Double)
```
Builds a rotation matrix for a rotation around the x-axis.

|Parameter Name|Remarks|
|--------------|-------|
|angle|The counter-clockwise angle in radians.|

_returns: The resulting Matrix3d instance._

#### CreateRotationY
```csharp
OpenTK.Matrix3d.CreateRotationY(System.Double)
```
Builds a rotation matrix for a rotation around the y-axis.

|Parameter Name|Remarks|
|--------------|-------|
|angle|The counter-clockwise angle in radians.|

_returns: The resulting Matrix3d instance._

#### CreateRotationZ
```csharp
OpenTK.Matrix3d.CreateRotationZ(System.Double)
```
Builds a rotation matrix for a rotation around the z-axis.

|Parameter Name|Remarks|
|--------------|-------|
|angle|The counter-clockwise angle in radians.|

_returns: The resulting Matrix3d instance._

#### CreateScale
```csharp
OpenTK.Matrix3d.CreateScale(System.Double,System.Double,System.Double,OpenTK.Matrix3d@)
```
Creates a scale matrix.

|Parameter Name|Remarks|
|--------------|-------|
|x|Scale factor for the x axis.|
|y|Scale factor for the y axis.|
|z|Scale factor for the z axis.|
|result|A scale matrix.|

_returns: A scale matrix._

#### Equals
```csharp
OpenTK.Matrix3d.Equals(OpenTK.Matrix3d)
```
Indicates whether the current matrix is equal to another matrix.

|Parameter Name|Remarks|
|--------------|-------|
|other|A matrix to compare with this matrix.|

_returns: true if the current matrix is equal to the matrix parameter; otherwise, false._

#### ExtractRotation
```csharp
OpenTK.Matrix3d.ExtractRotation(System.Boolean)
```
Returns the rotation component of this instance. Quite slow.

|Parameter Name|Remarks|
|--------------|-------|
|row_normalise|Whether the method should row-normalise (i.e. remove scale from) the Matrix. Pass false if you know it's already normalised.|


#### ExtractScale
```csharp
OpenTK.Matrix3d.ExtractScale
```
Returns the scale component of this instance.

#### GetHashCode
```csharp
OpenTK.Matrix3d.GetHashCode
```
Returns the hashcode for this instance.
_returns: A System.Int32 containing the unique hashcode for this instance._

#### Invert
```csharp
OpenTK.Matrix3d.Invert(OpenTK.Matrix3d)
```
Calculate the inverse of the given matrix

|Parameter Name|Remarks|
|--------------|-------|
|mat|The matrix to invert|

_returns: The inverse of the given matrix if it has one, or the input if it is singular_

#### Inverted
```csharp
OpenTK.Matrix3d.Inverted
```
Returns an inverted copy of this instance.

#### Mult
```csharp
OpenTK.Matrix3d.Mult(OpenTK.Matrix3d@,OpenTK.Matrix3d@,OpenTK.Matrix3d@)
```
Multiplies two instances.

|Parameter Name|Remarks|
|--------------|-------|
|left|The left operand of the multiplication.|
|right|The right operand of the multiplication.|
|result|A new instance that is the result of the multiplication|

_returns: A new instance that is the result of the multiplication_

#### Normalize
```csharp
OpenTK.Matrix3d.Normalize
```
Divides each element in the Matrix by the @"P:OpenTK.Matrix3d.Determinant".

#### Normalized
```csharp
OpenTK.Matrix3d.Normalized
```
Returns a normalised copy of this instance.

#### op_Equality
```csharp
OpenTK.Matrix3d.op_Equality(OpenTK.Matrix3d,OpenTK.Matrix3d)
```
Compares two instances for equality.

|Parameter Name|Remarks|
|--------------|-------|
|left|The first instance.|
|right|The second instance.|

_returns: True, if left equals right; false otherwise._

#### op_Inequality
```csharp
OpenTK.Matrix3d.op_Inequality(OpenTK.Matrix3d,OpenTK.Matrix3d)
```
Compares two instances for inequality.

|Parameter Name|Remarks|
|--------------|-------|
|left|The first instance.|
|right|The second instance.|

_returns: True, if left does not equal right; false otherwise._

#### op_Multiply
```csharp
OpenTK.Matrix3d.op_Multiply(OpenTK.Matrix3d,OpenTK.Matrix3d)
```
Matrix multiplication

|Parameter Name|Remarks|
|--------------|-------|
|left|left-hand operand|
|right|right-hand operand|

_returns: A new Matrix3d which holds the result of the multiplication_

#### ToString
```csharp
OpenTK.Matrix3d.ToString
```
Returns a System.String that represents the current Matrix3d.
_returns: The string representation of the matrix._

#### Transpose
```csharp
OpenTK.Matrix3d.Transpose(OpenTK.Matrix3d@,OpenTK.Matrix3d@)
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
#### Determinant
Gets the determinant of this matrix.
#### Diagonal
Gets or sets the values along the main diagonal of the matrix.
#### Identity
The identity matrix.
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
#### Row0
First row of the matrix.
#### Row1
Second row of the matrix.
#### Row2
Third row of the matrix.
#### Trace
Gets the trace of the matrix, the sum of the values along the diagonal.

