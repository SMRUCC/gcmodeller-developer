---
title: Matrix4d
---

# Matrix4d
_namespace: [OpenTK](N-OpenTK.html)_

Represents a 4x4 matrix containing 3D rotation, scale, transform, and projection with double-precision components.

### Methods

#### #ctor
```csharp
OpenTK.Matrix4d.#ctor(System.Double,System.Double,System.Double,System.Double,System.Double,System.Double,System.Double,System.Double,System.Double,System.Double,System.Double,System.Double,System.Double,System.Double,System.Double,System.Double)
```
Constructs a new instance.

|Parameter Name|Remarks|
|--------------|-------|
|m00|First item of the first row.|
|m01|Second item of the first row.|
|m02|Third item of the first row.|
|m03|Fourth item of the first row.|
|m10|First item of the second row.|
|m11|Second item of the second row.|
|m12|Third item of the second row.|
|m13|Fourth item of the second row.|
|m20|First item of the third row.|
|m21|Second item of the third row.|
|m22|Third item of the third row.|
|m23|First item of the third row.|
|m30|Fourth item of the fourth row.|
|m31|Second item of the fourth row.|
|m32|Third item of the fourth row.|
|m33|Fourth item of the fourth row.|


#### Add
```csharp
OpenTK.Matrix4d.Add(OpenTK.Matrix4d@,OpenTK.Matrix4d@,OpenTK.Matrix4d@)
```
Adds two instances.

|Parameter Name|Remarks|
|--------------|-------|
|left|The left operand of the addition.|
|right|The right operand of the addition.|
|result|A new instance that is the result of the addition.|

_returns: A new instance that is the result of the addition._

#### ClearProjection
```csharp
OpenTK.Matrix4d.ClearProjection
```
Returns a copy of this Matrix4d without projection.

#### ClearRotation
```csharp
OpenTK.Matrix4d.ClearRotation
```
Returns a copy of this Matrix4d without rotation.

#### ClearScale
```csharp
OpenTK.Matrix4d.ClearScale
```
Returns a copy of this Matrix4d without scale.

#### ClearTranslation
```csharp
OpenTK.Matrix4d.ClearTranslation
```
Returns a copy of this Matrix4d without translation.

#### CreateFromAxisAngle
```csharp
OpenTK.Matrix4d.CreateFromAxisAngle(OpenTK.Vector3d,System.Double)
```
Build a rotation matrix from the specified axis/angle rotation.

|Parameter Name|Remarks|
|--------------|-------|
|axis|The axis to rotate about.|
|angle|Angle in radians to rotate counter-clockwise (looking in the direction of the given axis).|

_returns: A matrix instance._

#### CreateFromQuaternion
```csharp
OpenTK.Matrix4d.CreateFromQuaternion(OpenTK.Quaternion@)
```
Build a rotation matrix from the specified quaternion.

|Parameter Name|Remarks|
|--------------|-------|
|q|Quaternion to translate.|

_returns: A matrix instance._

#### CreateOrthographic
```csharp
OpenTK.Matrix4d.CreateOrthographic(System.Double,System.Double,System.Double,System.Double)
```
Creates an orthographic projection matrix.

|Parameter Name|Remarks|
|--------------|-------|
|width|The width of the projection volume.|
|height|The height of the projection volume.|
|zNear|The near edge of the projection volume.|
|zFar|The far edge of the projection volume.|


#### CreateOrthographicOffCenter
```csharp
OpenTK.Matrix4d.CreateOrthographicOffCenter(System.Double,System.Double,System.Double,System.Double,System.Double,System.Double)
```
Creates an orthographic projection matrix.

|Parameter Name|Remarks|
|--------------|-------|
|left|The left edge of the projection volume.|
|right|The right edge of the projection volume.|
|bottom|The bottom edge of the projection volume.|
|top|The top edge of the projection volume.|
|zNear|The near edge of the projection volume.|
|zFar|The far edge of the projection volume.|

_returns: The resulting Matrix4d instance._

#### CreatePerspectiveFieldOfView
```csharp
OpenTK.Matrix4d.CreatePerspectiveFieldOfView(System.Double,System.Double,System.Double,System.Double)
```
Creates a perspective projection matrix.

|Parameter Name|Remarks|
|--------------|-------|
|fovy|Angle of the field of view in the y direction (in radians)|
|aspect|Aspect ratio of the view (width / height)|
|zNear|Distance to the near clip plane|
|zFar|Distance to the far clip plane|

_returns: A projection matrix that transforms camera space to raster space_

#### CreatePerspectiveOffCenter
```csharp
OpenTK.Matrix4d.CreatePerspectiveOffCenter(System.Double,System.Double,System.Double,System.Double,System.Double,System.Double)
```
Creates an perspective projection matrix.

|Parameter Name|Remarks|
|--------------|-------|
|left|Left edge of the view frustum|
|right|Right edge of the view frustum|
|bottom|Bottom edge of the view frustum|
|top|Top edge of the view frustum|
|zNear|Distance to the near clip plane|
|zFar|Distance to the far clip plane|

_returns: A projection matrix that transforms camera space to raster space_

#### CreateRotationX
```csharp
OpenTK.Matrix4d.CreateRotationX(System.Double)
```
Builds a rotation matrix for a rotation around the x-axis.

|Parameter Name|Remarks|
|--------------|-------|
|angle|The counter-clockwise angle in radians.|

_returns: The resulting Matrix4d instance._

#### CreateRotationY
```csharp
OpenTK.Matrix4d.CreateRotationY(System.Double)
```
Builds a rotation matrix for a rotation around the y-axis.

|Parameter Name|Remarks|
|--------------|-------|
|angle|The counter-clockwise angle in radians.|

_returns: The resulting Matrix4d instance._

#### CreateRotationZ
```csharp
OpenTK.Matrix4d.CreateRotationZ(System.Double)
```
Builds a rotation matrix for a rotation around the z-axis.

|Parameter Name|Remarks|
|--------------|-------|
|angle|The counter-clockwise angle in radians.|

_returns: The resulting Matrix4d instance._

#### CreateTranslation
```csharp
OpenTK.Matrix4d.CreateTranslation(OpenTK.Vector3d)
```
Creates a translation matrix.

|Parameter Name|Remarks|
|--------------|-------|
|vector|The translation vector.|

_returns: The resulting Matrix4d instance._

#### Equals
```csharp
OpenTK.Matrix4d.Equals(OpenTK.Matrix4d)
```
Indicates whether the current matrix is equal to another matrix.

|Parameter Name|Remarks|
|--------------|-------|
|other|A matrix to compare with this matrix.|

_returns: true if the current matrix is equal to the matrix parameter; otherwise, false._

#### ExtractProjection
```csharp
OpenTK.Matrix4d.ExtractProjection
```
Returns the projection component of this instance.

#### ExtractRotation
```csharp
OpenTK.Matrix4d.ExtractRotation(System.Boolean)
```
Returns the rotation component of this instance. Quite slow.

|Parameter Name|Remarks|
|--------------|-------|
|row_normalise|Whether the method should row-normalise (i.e. remove scale from) the Matrix. Pass false if you know it's already normalised.|


#### ExtractScale
```csharp
OpenTK.Matrix4d.ExtractScale
```
Returns the scale component of this instance.

#### ExtractTranslation
```csharp
OpenTK.Matrix4d.ExtractTranslation
```
Returns the translation component of this instance.

#### Frustum
```csharp
OpenTK.Matrix4d.Frustum(System.Double,System.Double,System.Double,System.Double,System.Double,System.Double)
```
Build a projection matrix

|Parameter Name|Remarks|
|--------------|-------|
|left|Left edge of the view frustum|
|right|Right edge of the view frustum|
|bottom|Bottom edge of the view frustum|
|top|Top edge of the view frustum|
|near|Distance to the near clip plane|
|far|Distance to the far clip plane|

_returns: A projection matrix that transforms camera space to raster space_

#### GetHashCode
```csharp
OpenTK.Matrix4d.GetHashCode
```
Returns the hashcode for this instance.
_returns: A System.Int32 containing the unique hashcode for this instance._

#### Invert
```csharp
OpenTK.Matrix4d.Invert(OpenTK.Matrix4d)
```
Calculate the inverse of the given matrix

|Parameter Name|Remarks|
|--------------|-------|
|mat|The matrix to invert|

_returns: The inverse of the given matrix if it has one, or the input if it is singular_

#### Inverted
```csharp
OpenTK.Matrix4d.Inverted
```
Returns an inverted copy of this instance.

#### LookAt
```csharp
OpenTK.Matrix4d.LookAt(System.Double,System.Double,System.Double,System.Double,System.Double,System.Double,System.Double,System.Double,System.Double)
```
Build a world space to camera space matrix

|Parameter Name|Remarks|
|--------------|-------|
|eyeX|Eye (camera) position in world space|
|eyeY|Eye (camera) position in world space|
|eyeZ|Eye (camera) position in world space|
|targetX|Target position in world space|
|targetY|Target position in world space|
|targetZ|Target position in world space|
|upX|Up vector in world space (should not be parallel to the camera direction, that is target - eye)|
|upY|Up vector in world space (should not be parallel to the camera direction, that is target - eye)|
|upZ|Up vector in world space (should not be parallel to the camera direction, that is target - eye)|

_returns: A Matrix4 that transforms world space to camera space_

#### Mult
```csharp
OpenTK.Matrix4d.Mult(OpenTK.Matrix4d@,System.Double,OpenTK.Matrix4d@)
```
Multiplies an instance by a scalar.

|Parameter Name|Remarks|
|--------------|-------|
|left|The left operand of the multiplication.|
|right|The right operand of the multiplication.|
|result|A new instance that is the result of the multiplication|

_returns: A new instance that is the result of the multiplication_

#### Normalize
```csharp
OpenTK.Matrix4d.Normalize
```
Divides each element in the Matrix by the @"P:OpenTK.Matrix4d.Determinant".

#### Normalized
```csharp
OpenTK.Matrix4d.Normalized
```
Returns a normalised copy of this instance.

#### op_Addition
```csharp
OpenTK.Matrix4d.op_Addition(OpenTK.Matrix4d,OpenTK.Matrix4d)
```
Matrix addition

|Parameter Name|Remarks|
|--------------|-------|
|left|left-hand operand|
|right|right-hand operand|

_returns: A new Matrix4d which holds the result of the addition_

#### op_Equality
```csharp
OpenTK.Matrix4d.op_Equality(OpenTK.Matrix4d,OpenTK.Matrix4d)
```
Compares two instances for equality.

|Parameter Name|Remarks|
|--------------|-------|
|left|The first instance.|
|right|The second instance.|

_returns: True, if left equals right; false otherwise._

#### op_Inequality
```csharp
OpenTK.Matrix4d.op_Inequality(OpenTK.Matrix4d,OpenTK.Matrix4d)
```
Compares two instances for inequality.

|Parameter Name|Remarks|
|--------------|-------|
|left|The first instance.|
|right|The second instance.|

_returns: True, if left does not equal right; false otherwise._

#### op_Multiply
```csharp
OpenTK.Matrix4d.op_Multiply(OpenTK.Matrix4d,System.Single)
```
Matrix-scalar multiplication

|Parameter Name|Remarks|
|--------------|-------|
|left|left-hand operand|
|right|right-hand operand|

_returns: A new Matrix4d which holds the result of the multiplication_

#### op_Subtraction
```csharp
OpenTK.Matrix4d.op_Subtraction(OpenTK.Matrix4d,OpenTK.Matrix4d)
```
Matrix subtraction

|Parameter Name|Remarks|
|--------------|-------|
|left|left-hand operand|
|right|right-hand operand|

_returns: A new Matrix4d which holds the result of the subtraction_

#### Perspective
```csharp
OpenTK.Matrix4d.Perspective(System.Double,System.Double,System.Double,System.Double)
```
Build a projection matrix

|Parameter Name|Remarks|
|--------------|-------|
|fovy|Angle of the field of view in the y direction (in radians)|
|aspect|Aspect ratio of the view (width / height)|
|near|Distance to the near clip plane|
|far|Distance to the far clip plane|

_returns: A projection matrix that transforms camera space to raster space_

#### Rotate
```csharp
OpenTK.Matrix4d.Rotate(OpenTK.Quaterniond)
```
Build a rotation matrix from a quaternion

|Parameter Name|Remarks|
|--------------|-------|
|q|the quaternion|

_returns: A rotation matrix_

#### RotateX
```csharp
OpenTK.Matrix4d.RotateX(System.Double)
```
Build a rotation matrix that rotates about the x-axis

|Parameter Name|Remarks|
|--------------|-------|
|angle|angle in radians to rotate counter-clockwise around the x-axis|

_returns: A rotation matrix_

#### RotateY
```csharp
OpenTK.Matrix4d.RotateY(System.Double)
```
Build a rotation matrix that rotates about the y-axis

|Parameter Name|Remarks|
|--------------|-------|
|angle|angle in radians to rotate counter-clockwise around the y-axis|

_returns: A rotation matrix_

#### RotateZ
```csharp
OpenTK.Matrix4d.RotateZ(System.Double)
```
Build a rotation matrix that rotates about the z-axis

|Parameter Name|Remarks|
|--------------|-------|
|angle|angle in radians to rotate counter-clockwise around the z-axis|

_returns: A rotation matrix_

#### Scale
```csharp
OpenTK.Matrix4d.Scale(System.Double,System.Double,System.Double)
```
Build a scaling matrix

|Parameter Name|Remarks|
|--------------|-------|
|x|Scale factor for x-axis|
|y|Scale factor for y-axis|
|z|Scale factor for z-axis|

_returns: A scaling matrix_

#### Subtract
```csharp
OpenTK.Matrix4d.Subtract(OpenTK.Matrix4d@,OpenTK.Matrix4d@,OpenTK.Matrix4d@)
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
OpenTK.Matrix4d.ToString
```
Returns a System.String that represents the current Matrix44.

#### Translation
```csharp
OpenTK.Matrix4d.Translation(System.Double,System.Double,System.Double)
```
Build a translation matrix with the given translation

|Parameter Name|Remarks|
|--------------|-------|
|x|X translation|
|y|Y translation|
|z|Z translation|

_returns: A Translation matrix_

#### Transpose
```csharp
OpenTK.Matrix4d.Transpose(OpenTK.Matrix4d@,OpenTK.Matrix4d@)
```
Calculate the transpose of the given matrix

|Parameter Name|Remarks|
|--------------|-------|
|mat|The matrix to transpose|
|result|The result of the calculation|

_returns: The transpose of the given matrix_



### Properties

#### Column0
The first column of this matrix
#### Column1
The second column of this matrix
#### Column2
The third column of this matrix
#### Column3
The fourth column of this matrix
#### Determinant
The determinant of this matrix
#### Diagonal
Gets or sets the values along the main diagonal of the matrix.
#### Identity
The identity matrix
#### Item
Gets or sets the value at a specified row and column.
#### M11
Gets or sets the value at row 1, column 1 of this instance.
#### M12
Gets or sets the value at row 1, column 2 of this instance.
#### M13
Gets or sets the value at row 1, column 3 of this instance.
#### M14
Gets or sets the value at row 1, column 4 of this instance.
#### M21
Gets or sets the value at row 2, column 1 of this instance.
#### M22
Gets or sets the value at row 2, column 2 of this instance.
#### M23
Gets or sets the value at row 2, column 3 of this instance.
#### M24
Gets or sets the value at row 2, column 4 of this instance.
#### M31
Gets or sets the value at row 3, column 1 of this instance.
#### M32
Gets or sets the value at row 3, column 2 of this instance.
#### M33
Gets or sets the value at row 3, column 3 of this instance.
#### M34
Gets or sets the value at row 3, column 4 of this instance.
#### M41
Gets or sets the value at row 4, column 1 of this instance.
#### M42
Gets or sets the value at row 4, column 2 of this instance.
#### M43
Gets or sets the value at row 4, column 3 of this instance.
#### M44
Gets or sets the value at row 4, column 4 of this instance.
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

