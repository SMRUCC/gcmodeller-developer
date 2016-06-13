---
title: Vector4d
---

# Vector4d
_namespace: [OpenTK](N-OpenTK.html)_

Represents a 4D vector using four double-precision floating-point numbers.

### Methods

#### #ctor
```csharp
OpenTK.Vector4d.#ctor(OpenTK.Vector4d)
```
Constructs a new Vector4d from the given Vector4d.

|Parameter Name|Remarks|
|--------------|-------|
|v|The Vector4d to copy components from.|

> @"M:OpenTK.Vector4d.#ctor(OpenTK.Vector3d,System.Double)"

#### Add
```csharp
OpenTK.Vector4d.Add(OpenTK.Vector4d@,OpenTK.Vector4d@,OpenTK.Vector4d@)
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
OpenTK.Vector4d.BaryCentric(OpenTK.Vector4d@,OpenTK.Vector4d@,OpenTK.Vector4d@,System.Double,System.Double,OpenTK.Vector4d@)
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

#### Clamp
```csharp
OpenTK.Vector4d.Clamp(OpenTK.Vector4d@,OpenTK.Vector4d@,OpenTK.Vector4d@,OpenTK.Vector4d@)
```
Clamp a vector to the given minimum and maximum vectors

|Parameter Name|Remarks|
|--------------|-------|
|vec|Input vector|
|min|Minimum vector|
|max|Maximum vector|
|result|The clamped vector|

_returns: The clamped vector_

#### Div
```csharp
OpenTK.Vector4d.Div(OpenTK.Vector4d@,System.Double,OpenTK.Vector4d@)
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
OpenTK.Vector4d.Divide(OpenTK.Vector4d@,OpenTK.Vector4d@,OpenTK.Vector4d@)
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
OpenTK.Vector4d.Dot(OpenTK.Vector4d@,OpenTK.Vector4d@,System.Double@)
```
Calculate the dot product of two vectors

|Parameter Name|Remarks|
|--------------|-------|
|left|First operand|
|right|Second operand|
|result|The dot product of the two inputs|

_returns: The dot product of the two inputs_

#### Equals
```csharp
OpenTK.Vector4d.Equals(OpenTK.Vector4d)
```
Indicates whether the current vector is equal to another vector.

|Parameter Name|Remarks|
|--------------|-------|
|other|A vector to compare with this vector.|

_returns: true if the current vector is equal to the vector parameter; otherwise, false._

#### GetHashCode
```csharp
OpenTK.Vector4d.GetHashCode
```
Returns the hashcode for this instance.
_returns: A System.Int32 containing the unique hashcode for this instance._

#### Lerp
```csharp
OpenTK.Vector4d.Lerp(OpenTK.Vector4d@,OpenTK.Vector4d@,System.Double,OpenTK.Vector4d@)
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
OpenTK.Vector4d.Max(OpenTK.Vector4d@,OpenTK.Vector4d@,OpenTK.Vector4d@)
```
Calculate the component-wise maximum of two vectors

|Parameter Name|Remarks|
|--------------|-------|
|a|First operand|
|b|Second operand|
|result|The component-wise maximum|

_returns: The component-wise maximum_

#### Min
```csharp
OpenTK.Vector4d.Min(OpenTK.Vector4d@,OpenTK.Vector4d@,OpenTK.Vector4d@)
```
Calculate the component-wise minimum of two vectors

|Parameter Name|Remarks|
|--------------|-------|
|a|First operand|
|b|Second operand|
|result|The component-wise minimum|

_returns: The component-wise minimum_

#### Mult
```csharp
OpenTK.Vector4d.Mult(OpenTK.Vector4d@,System.Double,OpenTK.Vector4d@)
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
OpenTK.Vector4d.Multiply(OpenTK.Vector4d@,OpenTK.Vector4d@,OpenTK.Vector4d@)
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
OpenTK.Vector4d.Normalize(OpenTK.Vector4d@,OpenTK.Vector4d@)
```
Scale a vector to unit length

|Parameter Name|Remarks|
|--------------|-------|
|vec|The input vector|
|result|The normalized vector|

_returns: The normalized vector_

#### Normalized
```csharp
OpenTK.Vector4d.Normalized
```
Returns a copy of the Vector4d scaled to unit length.

#### NormalizeFast
```csharp
OpenTK.Vector4d.NormalizeFast(OpenTK.Vector4d@,OpenTK.Vector4d@)
```
Scale a vector to approximately unit length

|Parameter Name|Remarks|
|--------------|-------|
|vec|The input vector|
|result|The normalized vector|

_returns: The normalized vector_

#### op_Addition
```csharp
OpenTK.Vector4d.op_Addition(OpenTK.Vector4d,OpenTK.Vector4d)
```
Adds two instances.

|Parameter Name|Remarks|
|--------------|-------|
|left|The first instance.|
|right|The second instance.|

_returns: The result of the calculation._

#### op_Division
```csharp
OpenTK.Vector4d.op_Division(OpenTK.Vector4d,System.Double)
```
Divides an instance by a scalar.

|Parameter Name|Remarks|
|--------------|-------|
|vec|The instance.|
|scale|The scalar.|

_returns: The result of the calculation._

#### op_Equality
```csharp
OpenTK.Vector4d.op_Equality(OpenTK.Vector4d,OpenTK.Vector4d)
```
Compares two instances for equality.

|Parameter Name|Remarks|
|--------------|-------|
|left|The first instance.|
|right|The second instance.|

_returns: True, if left equals right; false otherwise._

#### op_Explicit
```csharp
OpenTK.Vector4d.op_Explicit(OpenTK.Vector4d)~OpenTK.Vector4
```
Converts OpenTK.Vector4d to OpenTK.Vector4.

|Parameter Name|Remarks|
|--------------|-------|
|v4d|The Vector4d to convert.|

_returns: The resulting Vector4._

#### op_Inequality
```csharp
OpenTK.Vector4d.op_Inequality(OpenTK.Vector4d,OpenTK.Vector4d)
```
Compares two instances for inequality.

|Parameter Name|Remarks|
|--------------|-------|
|left|The first instance.|
|right|The second instance.|

_returns: True, if left does not equa lright; false otherwise._

#### op_Multiply
```csharp
OpenTK.Vector4d.op_Multiply(OpenTK.Vector4d,OpenTK.Vector4d)
```
Component-wise multiplication between the specified instance by a scale vector.

|Parameter Name|Remarks|
|--------------|-------|
|scale|Left operand.|
|vec|Right operand.|

_returns: Result of multiplication._

#### op_Subtraction
```csharp
OpenTK.Vector4d.op_Subtraction(OpenTK.Vector4d,OpenTK.Vector4d)
```
Subtracts two instances.

|Parameter Name|Remarks|
|--------------|-------|
|left|The first instance.|
|right|The second instance.|

_returns: The result of the calculation._

#### op_UnaryNegation
```csharp
OpenTK.Vector4d.op_UnaryNegation(OpenTK.Vector4d)
```
Negates an instance.

|Parameter Name|Remarks|
|--------------|-------|
|vec|The instance.|

_returns: The result of the calculation._

#### Scale
```csharp
OpenTK.Vector4d.Scale(OpenTK.Vector4d@)
```
Scales this instance by the given parameter.

|Parameter Name|Remarks|
|--------------|-------|
|scale|The scaling of the individual components.|


#### Sub
```csharp
OpenTK.Vector4d.Sub(OpenTK.Vector4d@,OpenTK.Vector4d@,OpenTK.Vector4d@)
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
OpenTK.Vector4d.Subtract(OpenTK.Vector4d@,OpenTK.Vector4d@,OpenTK.Vector4d@)
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
OpenTK.Vector4d.ToString
```
Returns a System.String that represents the current Vector4d.

#### Transform
```csharp
OpenTK.Vector4d.Transform(OpenTK.Vector4d@,OpenTK.Quaterniond@,OpenTK.Vector4d@)
```
Transforms a vector by a quaternion rotation.

|Parameter Name|Remarks|
|--------------|-------|
|vec|The vector to transform.|
|quat|The quaternion to rotate the vector by.|
|result|The result of the operation.|

_returns: The result of the operation._



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
Defines the size of the Vector4d struct in bytes.
#### UnitW
Defines a unit-length Vector4d that points towards the W-axis.
#### UnitX
Defines a unit-length Vector4d that points towards the X-axis.
#### UnitY
Defines a unit-length Vector4d that points towards the Y-axis.
#### UnitZ
Defines a unit-length Vector4d that points towards the Z-axis.
#### W
The W component of the Vector4d.
#### Wx
Gets or sets an OpenTK.Vector2d with the W and X components of this instance.
#### Wxy
Gets or sets an OpenTK.Vector3d with the W, X, and Y components of this instance.
#### Wxyz
Gets or sets an OpenTK.Vector4d with the W, X, Y, and Z components of this instance.
#### Wxz
Gets or sets an OpenTK.Vector3d with the W, X, and Z components of this instance.
#### Wxzy
Gets or sets an OpenTK.Vector4d with the W, X, Z, and Y components of this instance.
#### Wy
Gets or sets an OpenTK.Vector2d with the W and Y components of this instance.
#### Wyx
Gets or sets an OpenTK.Vector3d with the W, Y, and X components of this instance.
#### Wyxz
Gets or sets an OpenTK.Vector4d with the W, Y, X, and Z components of this instance.
#### Wyz
Gets or sets an OpenTK.Vector3d with the W, Y, and Z components of this instance.
#### Wyzx
Gets or sets an OpenTK.Vector4d with the W, Y, Z, and X components of this instance.
#### Wz
Gets or sets an OpenTK.Vector2d with the W and Z components of this instance.
#### Wzx
Gets or sets an OpenTK.Vector3d with the W, Z, and X components of this instance.
#### Wzxy
Gets or sets an OpenTK.Vector4d with the W, Z, X, and Y components of this instance.
#### Wzy
Gets or sets an OpenTK.Vector3d with the W, Z, and Y components of this instance.
#### Wzyw
Gets an OpenTK.Vector4d with the W, Z, Y, and W components of this instance.
#### Wzyx
Gets or sets an OpenTK.Vector4d with the W, Z, Y, and X components of this instance.
#### X
The X component of the Vector4d.
#### Xw
Gets or sets an OpenTK.Vector2d with the X and W components of this instance.
#### Xwy
Gets or sets an OpenTK.Vector3d with the X, W, and Y components of this instance.
#### Xwyz
Gets or sets an OpenTK.Vector4d with the X, W, Y, and Z components of this instance.
#### Xwz
Gets or sets an OpenTK.Vector3d with the X, W, and Z components of this instance.
#### Xwzy
Gets or sets an OpenTK.Vector4d with the X, W, Z, and Y components of this instance.
#### Xy
Gets or sets an OpenTK.Vector2d with the X and Y components of this instance.
#### Xyw
Gets or sets an OpenTK.Vector3d with the X, Y, and Z components of this instance.
#### Xywz
Gets or sets an OpenTK.Vector4d with the X, Y, W, and Z components of this instance.
#### Xyz
Gets or sets an OpenTK.Vector3d with the X, Y, and Z components of this instance.
#### Xz
Gets or sets an OpenTK.Vector2d with the X and Z components of this instance.
#### Xzw
Gets or sets an OpenTK.Vector3d with the X, Z, and W components of this instance.
#### Xzwy
Gets or sets an OpenTK.Vector4d with the X, Z, W, and Y components of this instance.
#### Xzy
Gets or sets an OpenTK.Vector3d with the X, Z, and Y components of this instance.
#### Xzyw
Gets or sets an OpenTK.Vector4d with the X, Z, Y, and W components of this instance.
#### Y
The Y component of the Vector4d.
#### Yw
Gets or sets an OpenTK.Vector2d with the Y and W components of this instance.
#### Ywx
Gets or sets an OpenTK.Vector3d with the Y, W, and X components of this instance.
#### Ywxz
Gets or sets an OpenTK.Vector4d with the Y, W, X, and Z components of this instance.
#### Ywz
Gets an OpenTK.Vector3d with the Y, W, and Z components of this instance.
#### Ywzx
Gets or sets an OpenTK.Vector4d with the Y, W, Z, and X components of this instance.
#### Yx
Gets or sets an OpenTK.Vector2d with the Y and X components of this instance.
#### Yxw
Gets or sets an OpenTK.Vector3d with the Y, X, and W components of this instance.
#### Yxwz
Gets or sets an OpenTK.Vector4d with the Y, X, W, and Z components of this instance.
#### Yxz
Gets or sets an OpenTK.Vector3d with the Y, X, and Z components of this instance.
#### Yxzw
Gets or sets an OpenTK.Vector4d with the Y, X, Z, and W components of this instance.
#### Yywz
Gets an OpenTK.Vector4d with the Y, Y, W, and Z components of this instance.
#### Yyzw
Gets an OpenTK.Vector4d with the Y, Y, Z, and W components of this instance.
#### Yz
Gets or sets an OpenTK.Vector2d with the Y and Z components of this instance.
#### Yzw
Gets or sets an OpenTK.Vector3d with the Y, Z, and W components of this instance.
#### Yzwx
Gets or sets an OpenTK.Vector4d with the Y, Z, W, and X components of this instance.
#### Yzx
Gets or sets an OpenTK.Vector3d with the Y, Z, and X components of this instance.
#### Yzxw
Gets or sets an OpenTK.Vector4d with the Y, Z, X, and W components of this instance.
#### Z
The Z component of the Vector4d.
#### Zero
Defines a zero-length Vector4d.
#### Zw
Gets an OpenTK.Vector2d with the Z and W components of this instance.
#### Zwx
Gets or sets an OpenTK.Vector3d with the Z, W, and X components of this instance.
#### Zwxy
Gets or sets an OpenTK.Vector4d with the Z, W, X, and Y components of this instance.
#### Zwy
Gets or sets an OpenTK.Vector3d with the Z, W, and Y components of this instance.
#### Zwyx
Gets or sets an OpenTK.Vector4d with the Z, W, Y, and X components of this instance.
#### Zwzy
Gets an OpenTK.Vector4d with the Z, W, Z, and Y components of this instance.
#### Zx
Gets or sets an OpenTK.Vector2d with the Z and X components of this instance.
#### Zxw
Gets or sets an OpenTK.Vector3d with the Z, X, and W components of this instance.
#### Zxwy
Gets or sets an OpenTK.Vector4d with the Z, X, W, and Y components of this instance.
#### Zxy
Gets or sets an OpenTK.Vector3d with the Z, X, and Y components of this instance.
#### Zxyw
Gets or sets an OpenTK.Vector4d with the Z, X, Y, and Z components of this instance.
#### Zy
Gets or sets an OpenTK.Vector2d with the Z and Y components of this instance.
#### Zyw
Gets or sets an OpenTK.Vector3d with the Z, Y, and W components of this instance.
#### Zywx
Gets or sets an OpenTK.Vector4d with the Z, Y, W, and X components of this instance.
#### Zyx
Gets or sets an OpenTK.Vector3d with the Z, Y, and X components of this instance.
#### Zyxw
Gets or sets an OpenTK.Vector4d with the Z, Y, X, and W components of this instance.

