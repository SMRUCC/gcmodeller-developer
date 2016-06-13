---
title: Vector3
---

# Vector3
_namespace: [OpenTK](N-OpenTK.html)_

Represents a 3D vector using three single-precision floating-point numbers.

### Methods

#### #ctor
```csharp
OpenTK.Vector3.#ctor(OpenTK.Vector4)
```
Constructs a new Vector3 from the given Vector4.

|Parameter Name|Remarks|
|--------------|-------|
|v|The Vector4 to copy components from.|


#### Add
```csharp
OpenTK.Vector3.Add(OpenTK.Vector3@,OpenTK.Vector3@,OpenTK.Vector3@)
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
OpenTK.Vector3.BaryCentric(OpenTK.Vector3@,OpenTK.Vector3@,OpenTK.Vector3@,System.Single,System.Single,OpenTK.Vector3@)
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
OpenTK.Vector3.CalculateAngle(OpenTK.Vector3@,OpenTK.Vector3@,System.Single@)
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
OpenTK.Vector3.Clamp(OpenTK.Vector3@,OpenTK.Vector3@,OpenTK.Vector3@,OpenTK.Vector3@)
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
OpenTK.Vector3.ComponentMax(OpenTK.Vector3@,OpenTK.Vector3@,OpenTK.Vector3@)
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
OpenTK.Vector3.ComponentMin(OpenTK.Vector3@,OpenTK.Vector3@,OpenTK.Vector3@)
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
OpenTK.Vector3.Cross(OpenTK.Vector3@,OpenTK.Vector3@,OpenTK.Vector3@)
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
OpenTK.Vector3.Div(OpenTK.Vector3@,System.Single,OpenTK.Vector3@)
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
OpenTK.Vector3.Divide(OpenTK.Vector3@,OpenTK.Vector3@,OpenTK.Vector3@)
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
OpenTK.Vector3.Dot(OpenTK.Vector3@,OpenTK.Vector3@,System.Single@)
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
OpenTK.Vector3.Equals(OpenTK.Vector3)
```
Indicates whether the current vector is equal to another vector.

|Parameter Name|Remarks|
|--------------|-------|
|other|A vector to compare with this vector.|

_returns: true if the current vector is equal to the vector parameter; otherwise, false._

#### GetHashCode
```csharp
OpenTK.Vector3.GetHashCode
```
Returns the hashcode for this instance.
_returns: A System.Int32 containing the unique hashcode for this instance._

#### Lerp
```csharp
OpenTK.Vector3.Lerp(OpenTK.Vector3@,OpenTK.Vector3@,System.Single,OpenTK.Vector3@)
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
OpenTK.Vector3.Max(OpenTK.Vector3,OpenTK.Vector3)
```
Returns the Vector3 with the minimum magnitude

|Parameter Name|Remarks|
|--------------|-------|
|left|Left operand|
|right|Right operand|

_returns: The minimum Vector3_

#### Min
```csharp
OpenTK.Vector3.Min(OpenTK.Vector3,OpenTK.Vector3)
```
Returns the Vector3 with the minimum magnitude

|Parameter Name|Remarks|
|--------------|-------|
|left|Left operand|
|right|Right operand|

_returns: The minimum Vector3_

#### Mult
```csharp
OpenTK.Vector3.Mult(OpenTK.Vector3@,System.Single,OpenTK.Vector3@)
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
OpenTK.Vector3.Multiply(OpenTK.Vector3@,OpenTK.Vector3@,OpenTK.Vector3@)
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
OpenTK.Vector3.Normalize(OpenTK.Vector3@,OpenTK.Vector3@)
```
Scale a vector to unit length

|Parameter Name|Remarks|
|--------------|-------|
|vec|The input vector|
|result|The normalized vector|

_returns: The normalized vector_

#### Normalized
```csharp
OpenTK.Vector3.Normalized
```
Returns a copy of the Vector3 scaled to unit length.

#### NormalizeFast
```csharp
OpenTK.Vector3.NormalizeFast(OpenTK.Vector3@,OpenTK.Vector3@)
```
Scale a vector to approximately unit length

|Parameter Name|Remarks|
|--------------|-------|
|vec|The input vector|
|result|The normalized vector|

_returns: The normalized vector_

#### op_Addition
```csharp
OpenTK.Vector3.op_Addition(OpenTK.Vector3,OpenTK.Vector3)
```
Adds two instances.

|Parameter Name|Remarks|
|--------------|-------|
|left|The first instance.|
|right|The second instance.|

_returns: The result of the calculation._

#### op_Division
```csharp
OpenTK.Vector3.op_Division(OpenTK.Vector3,System.Single)
```
Divides an instance by a scalar.

|Parameter Name|Remarks|
|--------------|-------|
|vec|The instance.|
|scale|The scalar.|

_returns: The result of the calculation._

#### op_Equality
```csharp
OpenTK.Vector3.op_Equality(OpenTK.Vector3,OpenTK.Vector3)
```
Compares two instances for equality.

|Parameter Name|Remarks|
|--------------|-------|
|left|The first instance.|
|right|The second instance.|

_returns: True, if left equals right; false otherwise._

#### op_Inequality
```csharp
OpenTK.Vector3.op_Inequality(OpenTK.Vector3,OpenTK.Vector3)
```
Compares two instances for inequality.

|Parameter Name|Remarks|
|--------------|-------|
|left|The first instance.|
|right|The second instance.|

_returns: True, if left does not equa lright; false otherwise._

#### op_Multiply
```csharp
OpenTK.Vector3.op_Multiply(OpenTK.Vector3,OpenTK.Vector3)
```
Component-wise multiplication between the specified instance by a scale vector.

|Parameter Name|Remarks|
|--------------|-------|
|scale|Left operand.|
|vec|Right operand.|

_returns: Result of multiplication._

#### op_Subtraction
```csharp
OpenTK.Vector3.op_Subtraction(OpenTK.Vector3,OpenTK.Vector3)
```
Subtracts two instances.

|Parameter Name|Remarks|
|--------------|-------|
|left|The first instance.|
|right|The second instance.|

_returns: The result of the calculation._

#### op_UnaryNegation
```csharp
OpenTK.Vector3.op_UnaryNegation(OpenTK.Vector3)
```
Negates an instance.

|Parameter Name|Remarks|
|--------------|-------|
|vec|The instance.|

_returns: The result of the calculation._

#### Scale
```csharp
OpenTK.Vector3.Scale(OpenTK.Vector3@)
```
Scales this instance by the given parameter.

|Parameter Name|Remarks|
|--------------|-------|
|scale|The scaling of the individual components.|


#### Sub
```csharp
OpenTK.Vector3.Sub(OpenTK.Vector3@,OpenTK.Vector3@,OpenTK.Vector3@)
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
OpenTK.Vector3.Subtract(OpenTK.Vector3@,OpenTK.Vector3@,OpenTK.Vector3@)
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
OpenTK.Vector3.ToString
```
Returns a System.String that represents the current Vector3.

#### Transform
```csharp
OpenTK.Vector3.Transform(OpenTK.Vector3@,OpenTK.Quaternion@,OpenTK.Vector3@)
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
OpenTK.Vector3.TransformNormal(OpenTK.Vector3@,OpenTK.Matrix4@,OpenTK.Vector3@)
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
OpenTK.Vector3.TransformNormalInverse(OpenTK.Vector3@,OpenTK.Matrix4@,OpenTK.Vector3@)
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
OpenTK.Vector3.TransformPerspective(OpenTK.Vector3@,OpenTK.Matrix4@,OpenTK.Vector3@)
```
Transform a Vector3 by the given Matrix, and project the resulting Vector4 back to a Vector3

|Parameter Name|Remarks|
|--------------|-------|
|vec|The vector to transform|
|mat|The desired transformation|
|result|The transformed vector|

_returns: The transformed vector_

#### TransformPosition
```csharp
OpenTK.Vector3.TransformPosition(OpenTK.Vector3@,OpenTK.Matrix4@,OpenTK.Vector3@)
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
OpenTK.Vector3.TransformVector(OpenTK.Vector3@,OpenTK.Matrix4@,OpenTK.Vector3@)
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
Defines the size of the Vector3 struct in bytes.
#### UnitX
Defines a unit-length Vector3 that points towards the X-axis.
#### UnitY
Defines a unit-length Vector3 that points towards the Y-axis.
#### UnitZ
/// Defines a unit-length Vector3 that points towards the Z-axis.
#### X
The X component of the Vector3.
#### Xy
Gets or sets an OpenTK.Vector2 with the X and Y components of this instance.
#### Xz
Gets or sets an OpenTK.Vector2 with the X and Z components of this instance.
#### Xzy
Gets or sets an OpenTK.Vector3 with the X, Z, and Y components of this instance.
#### Y
The Y component of the Vector3.
#### Yx
Gets or sets an OpenTK.Vector2 with the Y and X components of this instance.
#### Yxz
Gets or sets an OpenTK.Vector3 with the Y, X, and Z components of this instance.
#### Yz
Gets or sets an OpenTK.Vector2 with the Y and Z components of this instance.
#### Yzx
Gets or sets an OpenTK.Vector3 with the Y, Z, and X components of this instance.
#### Z
The Z component of the Vector3.
#### Zero
Defines a zero-length Vector3.
#### Zx
Gets or sets an OpenTK.Vector2 with the Z and X components of this instance.
#### Zxy
Gets or sets an OpenTK.Vector3 with the Z, X, and Y components of this instance.
#### Zy
Gets or sets an OpenTK.Vector2 with the Z and Y components of this instance.
#### Zyx
Gets or sets an OpenTK.Vector3 with the Z, Y, and X components of this instance.

