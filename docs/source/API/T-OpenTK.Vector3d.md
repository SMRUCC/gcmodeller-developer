---
title: Vector3d
---

# Vector3d
_namespace: [OpenTK](N-OpenTK.html)_

Represents a 3D vector using three double-precision floating-point numbers.

### Methods

#### #ctor
```csharp
OpenTK.Vector3d.#ctor(OpenTK.Vector4d)
```
Constructs a new instance from the given Vector4d.

|Parameter Name|Remarks|
|--------------|-------|
|v|The Vector4d to copy components from.|


#### Add
```csharp
OpenTK.Vector3d.Add(OpenTK.Vector3d@,OpenTK.Vector3d@,OpenTK.Vector3d@)
```
Adds two vectors.

|Parameter Name|Remarks|
|--------------|-------|
|a|Left operand.|
|b|Right operand.|
|result|Result of operation.|

_returns: Result of operation._

#### BaryCentric
```csharp
OpenTK.Vector3d.BaryCentric(OpenTK.Vector3d@,OpenTK.Vector3d@,OpenTK.Vector3d@,System.Double,System.Double,OpenTK.Vector3d@)
```
Interpolate 3 Vectors using Barycentric coordinates

|Parameter Name|Remarks|
|--------------|-------|
|a|First input Vector.|
|b|Second input Vector.|
|c|Third input Vector.|
|u|First Barycentric Coordinate.|
|v|Second Barycentric Coordinate.|
|result|Output Vector. a when u=v=0, b when u=1,v=0, c when u=0,v=1, and a linear combination of a,b,c otherwise|

_returns: a when u=v=0, b when u=1,v=0, c when u=0,v=1, and a linear combination of a,b,c otherwise_

#### CalculateAngle
```csharp
OpenTK.Vector3d.CalculateAngle(OpenTK.Vector3d@,OpenTK.Vector3d@,System.Double@)
```
Calculates the angle (in radians) between two vectors.

|Parameter Name|Remarks|
|--------------|-------|
|first|The first vector.|
|second|The second vector.|
|result|Angle (in radians) between the vectors.|

_returns: Angle (in radians) between the vectors._
> Note that the returned angle is never bigger than the constant Pi.

#### Clamp
```csharp
OpenTK.Vector3d.Clamp(OpenTK.Vector3d@,OpenTK.Vector3d@,OpenTK.Vector3d@,OpenTK.Vector3d@)
```
Clamp a vector to the given minimum and maximum vectors

|Parameter Name|Remarks|
|--------------|-------|
|vec|Input vector|
|min|Minimum vector|
|max|Maximum vector|
|result|The clamped vector|

_returns: The clamped vector_

#### ComponentMax
```csharp
OpenTK.Vector3d.ComponentMax(OpenTK.Vector3d@,OpenTK.Vector3d@,OpenTK.Vector3d@)
```
Calculate the component-wise maximum of two vectors

|Parameter Name|Remarks|
|--------------|-------|
|a|First operand|
|b|Second operand|
|result|The component-wise maximum|

_returns: The component-wise maximum_

#### ComponentMin
```csharp
OpenTK.Vector3d.ComponentMin(OpenTK.Vector3d@,OpenTK.Vector3d@,OpenTK.Vector3d@)
```
Calculate the component-wise minimum of two vectors

|Parameter Name|Remarks|
|--------------|-------|
|a|First operand|
|b|Second operand|
|result|The component-wise minimum|

_returns: The component-wise minimum_

#### Cross
```csharp
OpenTK.Vector3d.Cross(OpenTK.Vector3d@,OpenTK.Vector3d@,OpenTK.Vector3d@)
```
Caclulate the cross (vector) product of two vectors

|Parameter Name|Remarks|
|--------------|-------|
|left|First operand|
|right|Second operand|
|result|The cross product of the two inputs|

_returns: The cross product of the two inputs_

#### Div
```csharp
OpenTK.Vector3d.Div(OpenTK.Vector3d@,System.Double,OpenTK.Vector3d@)
```
Divide a vector by a scalar

|Parameter Name|Remarks|
|--------------|-------|
|a|Vector operand|
|f|Scalar operand|
|result|Result of the division|

_returns: Result of the division_

#### Divide
```csharp
OpenTK.Vector3d.Divide(OpenTK.Vector3d@,OpenTK.Vector3d@,OpenTK.Vector3d@)
```
Divide a vector by the components of a vector (scale).

|Parameter Name|Remarks|
|--------------|-------|
|vector|Left operand.|
|scale|Right operand.|
|result|Result of the operation.|

_returns: Result of the operation._

#### Dot
```csharp
OpenTK.Vector3d.Dot(OpenTK.Vector3d@,OpenTK.Vector3d@,System.Double@)
```
Calculate the dot (scalar) product of two vectors

|Parameter Name|Remarks|
|--------------|-------|
|left|First operand|
|right|Second operand|
|result|The dot product of the two inputs|

_returns: The dot product of the two inputs_

#### Equals
```csharp
OpenTK.Vector3d.Equals(OpenTK.Vector3d)
```
Indicates whether the current vector is equal to another vector.

|Parameter Name|Remarks|
|--------------|-------|
|other|A vector to compare with this vector.|

_returns: true if the current vector is equal to the vector parameter; otherwise, false._

#### GetHashCode
```csharp
OpenTK.Vector3d.GetHashCode
```
Returns the hashcode for this instance.
_returns: A System.Int32 containing the unique hashcode for this instance._

#### Lerp
```csharp
OpenTK.Vector3d.Lerp(OpenTK.Vector3d@,OpenTK.Vector3d@,System.Double,OpenTK.Vector3d@)
```
Returns a new Vector that is the linear blend of the 2 given Vectors

|Parameter Name|Remarks|
|--------------|-------|
|a|First input vector|
|b|Second input vector|
|blend|The blend factor. a when blend=0, b when blend=1.|
|result|a when blend=0, b when blend=1, and a linear combination otherwise|

_returns: a when blend=0, b when blend=1, and a linear combination otherwise_

#### Max
```csharp
OpenTK.Vector3d.Max(OpenTK.Vector3d,OpenTK.Vector3d)
```
Returns the Vector3d with the minimum magnitude

|Parameter Name|Remarks|
|--------------|-------|
|left|Left operand|
|right|Right operand|

_returns: The minimum Vector3_

#### Min
```csharp
OpenTK.Vector3d.Min(OpenTK.Vector3d,OpenTK.Vector3d)
```
Returns the Vector3d with the minimum magnitude

|Parameter Name|Remarks|
|--------------|-------|
|left|Left operand|
|right|Right operand|

_returns: The minimum Vector3_

#### Mult
```csharp
OpenTK.Vector3d.Mult(OpenTK.Vector3d@,System.Double,OpenTK.Vector3d@)
```
Multiply a vector and a scalar

|Parameter Name|Remarks|
|--------------|-------|
|a|Vector operand|
|f|Scalar operand|
|result|Result of the multiplication|

_returns: Result of the multiplication_

#### Multiply
```csharp
OpenTK.Vector3d.Multiply(OpenTK.Vector3d@,OpenTK.Vector3d@,OpenTK.Vector3d@)
```
Multiplies a vector by the components of a vector (scale).

|Parameter Name|Remarks|
|--------------|-------|
|vector|Left operand.|
|scale|Right operand.|
|result|Result of the operation.|

_returns: Result of the operation._

#### Normalize
```csharp
OpenTK.Vector3d.Normalize(OpenTK.Vector3d@,OpenTK.Vector3d@)
```
Scale a vector to unit length

|Parameter Name|Remarks|
|--------------|-------|
|vec|The input vector|
|result|The normalized vector|

_returns: The normalized vector_

#### Normalized
```csharp
OpenTK.Vector3d.Normalized
```
Returns a copy of the Vector3d scaled to unit length.

#### NormalizeFast
```csharp
OpenTK.Vector3d.NormalizeFast(OpenTK.Vector3d@,OpenTK.Vector3d@)
```
Scale a vector to approximately unit length

|Parameter Name|Remarks|
|--------------|-------|
|vec|The input vector|
|result|The normalized vector|

_returns: The normalized vector_

#### op_Addition
```csharp
OpenTK.Vector3d.op_Addition(OpenTK.Vector3d,OpenTK.Vector3d)
```
Adds two instances.

|Parameter Name|Remarks|
|--------------|-------|
|left|The first instance.|
|right|The second instance.|

_returns: The result of the calculation._

#### op_Division
```csharp
OpenTK.Vector3d.op_Division(OpenTK.Vector3d,System.Double)
```
Divides an instance by a scalar.

|Parameter Name|Remarks|
|--------------|-------|
|vec|The instance.|
|scale|The scalar.|

_returns: The result of the calculation._

#### op_Equality
```csharp
OpenTK.Vector3d.op_Equality(OpenTK.Vector3d,OpenTK.Vector3d)
```
Compares two instances for equality.

|Parameter Name|Remarks|
|--------------|-------|
|left|The first instance.|
|right|The second instance.|

_returns: True, if left equals right; false otherwise._

#### op_Explicit
```csharp
OpenTK.Vector3d.op_Explicit(OpenTK.Vector3d)~OpenTK.Vector3
```
Converts OpenTK.Vector3d to OpenTK.Vector3.

|Parameter Name|Remarks|
|--------------|-------|
|v3d|The Vector3d to convert.|

_returns: The resulting Vector3._

#### op_Inequality
```csharp
OpenTK.Vector3d.op_Inequality(OpenTK.Vector3d,OpenTK.Vector3d)
```
Compares two instances for inequality.

|Parameter Name|Remarks|
|--------------|-------|
|left|The first instance.|
|right|The second instance.|

_returns: True, if left does not equa lright; false otherwise._

#### op_Multiply
```csharp
OpenTK.Vector3d.op_Multiply(OpenTK.Vector3d,OpenTK.Vector3d)
```
Component-wise multiplication between the specified instance by a scale vector.

|Parameter Name|Remarks|
|--------------|-------|
|scale|Left operand.|
|vec|Right operand.|

_returns: Result of multiplication._

#### op_Subtraction
```csharp
OpenTK.Vector3d.op_Subtraction(OpenTK.Vector3d,OpenTK.Vector3d)
```
Subtracts two instances.

|Parameter Name|Remarks|
|--------------|-------|
|left|The first instance.|
|right|The second instance.|

_returns: The result of the calculation._

#### op_UnaryNegation
```csharp
OpenTK.Vector3d.op_UnaryNegation(OpenTK.Vector3d)
```
Negates an instance.

|Parameter Name|Remarks|
|--------------|-------|
|vec|The instance.|

_returns: The result of the calculation._

#### Scale
```csharp
OpenTK.Vector3d.Scale(OpenTK.Vector3d@)
```
Scales this instance by the given parameter.

|Parameter Name|Remarks|
|--------------|-------|
|scale|The scaling of the individual components.|


#### Sub
```csharp
OpenTK.Vector3d.Sub(OpenTK.Vector3d@,OpenTK.Vector3d@,OpenTK.Vector3d@)
```
Subtract one Vector from another

|Parameter Name|Remarks|
|--------------|-------|
|a|First operand|
|b|Second operand|
|result|Result of subtraction|

_returns: Result of subtraction_

#### Subtract
```csharp
OpenTK.Vector3d.Subtract(OpenTK.Vector3d@,OpenTK.Vector3d@,OpenTK.Vector3d@)
```
Subtract one Vector from another

|Parameter Name|Remarks|
|--------------|-------|
|a|First operand|
|b|Second operand|
|result|Result of subtraction|

_returns: Result of subtraction_

#### ToString
```csharp
OpenTK.Vector3d.ToString
```
Returns a System.String that represents the current Vector3.

#### Transform
```csharp
OpenTK.Vector3d.Transform(OpenTK.Vector3d@,OpenTK.Quaterniond@,OpenTK.Vector3d@)
```
Transforms a vector by a quaternion rotation.

|Parameter Name|Remarks|
|--------------|-------|
|vec|The vector to transform.|
|quat|The quaternion to rotate the vector by.|
|result|The result of the operation.|

_returns: The result of the operation._

#### TransformNormal
```csharp
OpenTK.Vector3d.TransformNormal(OpenTK.Vector3d@,OpenTK.Matrix4d@,OpenTK.Vector3d@)
```
Transform a Normal by the given Matrix

|Parameter Name|Remarks|
|--------------|-------|
|norm|The normal to transform|
|mat|The desired transformation|
|result|The transformed normal|

_returns: The transformed normal_
> 
>             This calculates the inverse of the given matrix, use TransformNormalInverse if you
>             already have the inverse to avoid this extra calculation
>             

#### TransformNormalInverse
```csharp
OpenTK.Vector3d.TransformNormalInverse(OpenTK.Vector3d@,OpenTK.Matrix4d@,OpenTK.Vector3d@)
```
Transform a Normal by the (transpose of the) given Matrix

|Parameter Name|Remarks|
|--------------|-------|
|norm|The normal to transform|
|invMat|The inverse of the desired transformation|
|result|The transformed normal|

_returns: The transformed normal_
> 
>             This version doesn't calculate the inverse matrix.
>             Use this version if you already have the inverse of the desired transform to hand
>             

#### TransformPerspective
```csharp
OpenTK.Vector3d.TransformPerspective(OpenTK.Vector3d@,OpenTK.Matrix4d@,OpenTK.Vector3d@)
```
Transform a Vector3d by the given Matrix, and project the resulting Vector4d back to a Vector3d

|Parameter Name|Remarks|
|--------------|-------|
|vec|The vector to transform|
|mat|The desired transformation|
|result|The transformed vector|

_returns: The transformed vector_

#### TransformPosition
```csharp
OpenTK.Vector3d.TransformPosition(OpenTK.Vector3d@,OpenTK.Matrix4d@,OpenTK.Vector3d@)
```
Transform a Position by the given Matrix

|Parameter Name|Remarks|
|--------------|-------|
|pos|The position to transform|
|mat|The desired transformation|
|result|The transformed position|

_returns: The transformed position_

#### TransformVector
```csharp
OpenTK.Vector3d.TransformVector(OpenTK.Vector3d@,OpenTK.Matrix4d@,OpenTK.Vector3d@)
```
Transform a direction vector by the given Matrix
 Assumes the matrix has a bottom row of (0,0,0,1), that is the translation part is ignored.

|Parameter Name|Remarks|
|--------------|-------|
|vec|The vector to transform|
|mat|The desired transformation|
|result|The transformed vector|

_returns: The transformed vector_



### Properties

#### Item
Gets or sets the value at the index of the Vector.
#### Length
Gets the length (magnitude) of the vector.
#### LengthFast
Gets an approximation of the vector length (magnitude).
#### LengthSquared
Gets the square of the vector length (magnitude).
#### One
Defines an instance with all components set to 1.
#### SizeInBytes
Defines the size of the Vector3d struct in bytes.
#### UnitX
Defines a unit-length Vector3d that points towards the X-axis.
#### UnitY
Defines a unit-length Vector3d that points towards the Y-axis.
#### UnitZ
/// Defines a unit-length Vector3d that points towards the Z-axis.
#### X
The X component of the Vector3.
#### Xy
Gets or sets an OpenTK.Vector2d with the X and Y components of this instance.
#### Xz
Gets or sets an OpenTK.Vector2d with the X and Z components of this instance.
#### Xzy
Gets or sets an OpenTK.Vector3d with the X, Z, and Y components of this instance.
#### Y
The Y component of the Vector3.
#### Yx
Gets or sets an OpenTK.Vector2d with the Y and X components of this instance.
#### Yxz
Gets or sets an OpenTK.Vector3d with the Y, X, and Z components of this instance.
#### Yz
Gets or sets an OpenTK.Vector2d with the Y and Z components of this instance.
#### Yzx
Gets or sets an OpenTK.Vector3d with the Y, Z, and X components of this instance.
#### Z
The Z component of the Vector3.
#### Zero
Defines a zero-length Vector3.
#### Zx
Gets or sets an OpenTK.Vector2d with the Z and X components of this instance.
#### Zxy
Gets or sets an OpenTK.Vector3d with the Z, X, and Y components of this instance.
#### Zy
Gets or sets an OpenTK.Vector2d with the Z and Y components of this instance.
#### Zyx
Gets or sets an OpenTK.Vector3d with the Z, Y, and X components of this instance.

