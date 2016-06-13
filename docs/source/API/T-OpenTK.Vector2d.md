---
title: Vector2d
---

# Vector2d
_namespace: [OpenTK](N-OpenTK.html)_

Represents a 2D vector using two double-precision floating-point numbers.

### Methods

#### #ctor
```csharp
OpenTK.Vector2d.#ctor(System.Double,System.Double)
```
Constructs left vector with the given coordinates.

|Parameter Name|Remarks|
|--------------|-------|
|x|The X coordinate.|
|y|The Y coordinate.|


#### Add
```csharp
OpenTK.Vector2d.Add(OpenTK.Vector2d@,OpenTK.Vector2d@,OpenTK.Vector2d@)
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
OpenTK.Vector2d.BaryCentric(OpenTK.Vector2d@,OpenTK.Vector2d@,OpenTK.Vector2d@,System.Double,System.Double,OpenTK.Vector2d@)
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
OpenTK.Vector2d.Clamp(OpenTK.Vector2d@,OpenTK.Vector2d@,OpenTK.Vector2d@,OpenTK.Vector2d@)
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
OpenTK.Vector2d.Div(OpenTK.Vector2d@,System.Double,OpenTK.Vector2d@)
```
Divide a vector by a scalar

|Parameter Name|Remarks|
|--------------|-------|
|a|Vector operand|
|d|Scalar operand|
|result|Result of the division|

_returns: Result of the division_

#### Divide
```csharp
OpenTK.Vector2d.Divide(OpenTK.Vector2d@,OpenTK.Vector2d@,OpenTK.Vector2d@)
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
OpenTK.Vector2d.Dot(OpenTK.Vector2d@,OpenTK.Vector2d@,System.Double@)
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
OpenTK.Vector2d.Equals(OpenTK.Vector2d)
```
Indicates whether the current vector is equal to another vector.

|Parameter Name|Remarks|
|--------------|-------|
|other|A vector to compare with this vector.|

_returns: true if the current vector is equal to the vector parameter; otherwise, false._

#### GetHashCode
```csharp
OpenTK.Vector2d.GetHashCode
```
Returns the hashcode for this instance.
_returns: A System.Int32 containing the unique hashcode for this instance._

#### Lerp
```csharp
OpenTK.Vector2d.Lerp(OpenTK.Vector2d@,OpenTK.Vector2d@,System.Double,OpenTK.Vector2d@)
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
OpenTK.Vector2d.Max(OpenTK.Vector2d@,OpenTK.Vector2d@,OpenTK.Vector2d@)
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
OpenTK.Vector2d.Min(OpenTK.Vector2d@,OpenTK.Vector2d@,OpenTK.Vector2d@)
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
OpenTK.Vector2d.Mult(OpenTK.Vector2d@,System.Double,OpenTK.Vector2d@)
```
Multiply a vector and a scalar

|Parameter Name|Remarks|
|--------------|-------|
|a|Vector operand|
|d|Scalar operand|
|result|Result of the multiplication|

_returns: Result of the multiplication_

#### Multiply
```csharp
OpenTK.Vector2d.Multiply(OpenTK.Vector2d@,OpenTK.Vector2d@,OpenTK.Vector2d@)
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
OpenTK.Vector2d.Normalize(OpenTK.Vector2d@,OpenTK.Vector2d@)
```
Scale a vector to unit length

|Parameter Name|Remarks|
|--------------|-------|
|vec|The input vector|
|result|The normalized vector|

_returns: The normalized vector_

#### Normalized
```csharp
OpenTK.Vector2d.Normalized
```
Returns a copy of the Vector2d scaled to unit length.

#### NormalizeFast
```csharp
OpenTK.Vector2d.NormalizeFast(OpenTK.Vector2d@,OpenTK.Vector2d@)
```
Scale a vector to approximately unit length

|Parameter Name|Remarks|
|--------------|-------|
|vec|The input vector|
|result|The normalized vector|

_returns: The normalized vector_

#### op_Addition
```csharp
OpenTK.Vector2d.op_Addition(OpenTK.Vector2d,OpenTK.Vector2d)
```
Adds two instances.

|Parameter Name|Remarks|
|--------------|-------|
|left|The left instance.|
|right|The right instance.|

_returns: The result of the operation._

#### op_Division
```csharp
OpenTK.Vector2d.op_Division(OpenTK.Vector2d,System.Double)
```
Divides an instance by a scalar.

|Parameter Name|Remarks|
|--------------|-------|
|vec|The instance.|
|f|The scalar.|

_returns: The result of the operation._

#### op_Equality
```csharp
OpenTK.Vector2d.op_Equality(OpenTK.Vector2d,OpenTK.Vector2d)
```
Compares two instances for equality.

|Parameter Name|Remarks|
|--------------|-------|
|left|The left instance.|
|right|The right instance.|

_returns: True, if both instances are equal; false otherwise._

#### op_Explicit
```csharp
OpenTK.Vector2d.op_Explicit(OpenTK.Vector2d)~OpenTK.Vector2
```
Converts OpenTK.Vector2d to OpenTK.Vector2.

|Parameter Name|Remarks|
|--------------|-------|
|v2d|The Vector2d to convert.|

_returns: The resulting Vector2._

#### op_Inequality
```csharp
OpenTK.Vector2d.op_Inequality(OpenTK.Vector2d,OpenTK.Vector2d)
```
Compares two instances for ienquality.

|Parameter Name|Remarks|
|--------------|-------|
|left|The left instance.|
|right|The right instance.|

_returns: True, if the instances are not equal; false otherwise._

#### op_Multiply
```csharp
OpenTK.Vector2d.op_Multiply(OpenTK.Vector2d,OpenTK.Vector2d)
```
Component-wise multiplication between the specified instance by a scale vector.

|Parameter Name|Remarks|
|--------------|-------|
|scale|Left operand.|
|vec|Right operand.|

_returns: Result of multiplication._

#### op_Subtraction
```csharp
OpenTK.Vector2d.op_Subtraction(OpenTK.Vector2d,OpenTK.Vector2d)
```
Subtracts two instances.

|Parameter Name|Remarks|
|--------------|-------|
|left|The left instance.|
|right|The right instance.|

_returns: The result of the operation._

#### op_UnaryNegation
```csharp
OpenTK.Vector2d.op_UnaryNegation(OpenTK.Vector2d)
```
Negates an instance.

|Parameter Name|Remarks|
|--------------|-------|
|vec|The instance.|

_returns: The result of the operation._

#### Scale
```csharp
OpenTK.Vector2d.Scale(OpenTK.Vector2d@)
```
Scales this instance by the given parameter.

|Parameter Name|Remarks|
|--------------|-------|
|scale|The scaling of the individual components.|


#### Sub
```csharp
OpenTK.Vector2d.Sub(OpenTK.Vector2d@,OpenTK.Vector2d@,OpenTK.Vector2d@)
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
OpenTK.Vector2d.Subtract(OpenTK.Vector2d@,OpenTK.Vector2d@,OpenTK.Vector2d@)
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
OpenTK.Vector2d.ToString
```
Returns a System.String that represents the current instance.

#### Transform
```csharp
OpenTK.Vector2d.Transform(OpenTK.Vector2d@,OpenTK.Quaterniond@,OpenTK.Vector2d@)
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
#### LengthSquared
Gets the square of the vector length (magnitude).
#### One
Defines an instance with all components set to 1.
#### PerpendicularLeft
Gets the perpendicular vector on the left side of this vector.
#### PerpendicularRight
Gets the perpendicular vector on the right side of this vector.
#### SizeInBytes
Defines the size of the Vector2d struct in bytes.
#### UnitX
Defines a unit-length Vector2d that points towards the X-axis.
#### UnitY
Defines a unit-length Vector2d that points towards the Y-axis.
#### X
The X coordinate of this instance.
#### Y
The Y coordinate of this instance.
#### Yx
Gets or sets an OpenTK.Vector2d with the Y and X components of this instance.
#### Zero
Defines a zero-length Vector2d.

