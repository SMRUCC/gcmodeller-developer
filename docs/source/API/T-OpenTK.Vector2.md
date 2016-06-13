---
title: Vector2
---

# Vector2
_namespace: [OpenTK](N-OpenTK.html)_

Represents a 2D vector using two single-precision floating-point numbers.

### Methods

#### #ctor
```csharp
OpenTK.Vector2.#ctor(OpenTK.Vector4)
```
Constructs a new Vector2 from the given Vector4.

|Parameter Name|Remarks|
|--------------|-------|
|v|The Vector4 to copy components from. Z and W are discarded.|


#### Add
```csharp
OpenTK.Vector2.Add(OpenTK.Vector2@,OpenTK.Vector2@,OpenTK.Vector2@)
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
OpenTK.Vector2.BaryCentric(OpenTK.Vector2@,OpenTK.Vector2@,OpenTK.Vector2@,System.Single,System.Single,OpenTK.Vector2@)
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
OpenTK.Vector2.Clamp(OpenTK.Vector2@,OpenTK.Vector2@,OpenTK.Vector2@,OpenTK.Vector2@)
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
OpenTK.Vector2.ComponentMax(OpenTK.Vector2@,OpenTK.Vector2@,OpenTK.Vector2@)
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
OpenTK.Vector2.ComponentMin(OpenTK.Vector2@,OpenTK.Vector2@,OpenTK.Vector2@)
```
Calculate the component-wise minimum of two vectors

|Parameter Name|Remarks|
|--------------|-------|
|a|First operand|
|b|Second operand|
|result|The component-wise minimum|

_returns: The component-wise minimum_

#### Div
```csharp
OpenTK.Vector2.Div(OpenTK.Vector2@,System.Single,OpenTK.Vector2@)
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
OpenTK.Vector2.Divide(OpenTK.Vector2@,OpenTK.Vector2@,OpenTK.Vector2@)
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
OpenTK.Vector2.Dot(OpenTK.Vector2@,OpenTK.Vector2@,System.Single@)
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
OpenTK.Vector2.Equals(OpenTK.Vector2)
```
Indicates whether the current vector is equal to another vector.

|Parameter Name|Remarks|
|--------------|-------|
|other|A vector to compare with this vector.|

_returns: true if the current vector is equal to the vector parameter; otherwise, false._

#### GetHashCode
```csharp
OpenTK.Vector2.GetHashCode
```
Returns the hashcode for this instance.
_returns: A System.Int32 containing the unique hashcode for this instance._

#### Lerp
```csharp
OpenTK.Vector2.Lerp(OpenTK.Vector2@,OpenTK.Vector2@,System.Single,OpenTK.Vector2@)
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
OpenTK.Vector2.Max(OpenTK.Vector2,OpenTK.Vector2)
```
Returns the Vector3 with the minimum magnitude

|Parameter Name|Remarks|
|--------------|-------|
|left|Left operand|
|right|Right operand|

_returns: The minimum Vector3_

#### Min
```csharp
OpenTK.Vector2.Min(OpenTK.Vector2,OpenTK.Vector2)
```
Returns the Vector3 with the minimum magnitude

|Parameter Name|Remarks|
|--------------|-------|
|left|Left operand|
|right|Right operand|

_returns: The minimum Vector3_

#### Mult
```csharp
OpenTK.Vector2.Mult(OpenTK.Vector2@,System.Single,OpenTK.Vector2@)
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
OpenTK.Vector2.Multiply(OpenTK.Vector2@,OpenTK.Vector2@,OpenTK.Vector2@)
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
OpenTK.Vector2.Normalize(OpenTK.Vector2@,OpenTK.Vector2@)
```
Scale a vector to unit length

|Parameter Name|Remarks|
|--------------|-------|
|vec|The input vector|
|result|The normalized vector|

_returns: The normalized vector_

#### Normalized
```csharp
OpenTK.Vector2.Normalized
```
Returns a copy of the Vector2 scaled to unit length.

#### NormalizeFast
```csharp
OpenTK.Vector2.NormalizeFast(OpenTK.Vector2@,OpenTK.Vector2@)
```
Scale a vector to approximately unit length

|Parameter Name|Remarks|
|--------------|-------|
|vec|The input vector|
|result|The normalized vector|

_returns: The normalized vector_

#### op_Addition
```csharp
OpenTK.Vector2.op_Addition(OpenTK.Vector2,OpenTK.Vector2)
```
Adds the specified instances.

|Parameter Name|Remarks|
|--------------|-------|
|left|Left operand.|
|right|Right operand.|

_returns: Result of addition._

#### op_Division
```csharp
OpenTK.Vector2.op_Division(OpenTK.Vector2,System.Single)
```
Divides the specified instance by a scalar.

|Parameter Name|Remarks|
|--------------|-------|
|vec|Left operand|
|scale|Right operand|

_returns: Result of the division._

#### op_Equality
```csharp
OpenTK.Vector2.op_Equality(OpenTK.Vector2,OpenTK.Vector2)
```
Compares the specified instances for equality.

|Parameter Name|Remarks|
|--------------|-------|
|left|Left operand.|
|right|Right operand.|

_returns: True if both instances are equal; false otherwise._

#### op_Inequality
```csharp
OpenTK.Vector2.op_Inequality(OpenTK.Vector2,OpenTK.Vector2)
```
Compares the specified instances for inequality.

|Parameter Name|Remarks|
|--------------|-------|
|left|Left operand.|
|right|Right operand.|

_returns: True if both instances are not equal; false otherwise._

#### op_Multiply
```csharp
OpenTK.Vector2.op_Multiply(OpenTK.Vector2,OpenTK.Vector2)
```
Component-wise multiplication between the specified instance by a scale vector.

|Parameter Name|Remarks|
|--------------|-------|
|scale|Left operand.|
|vec|Right operand.|

_returns: Result of multiplication._

#### op_Subtraction
```csharp
OpenTK.Vector2.op_Subtraction(OpenTK.Vector2,OpenTK.Vector2)
```
Subtracts the specified instances.

|Parameter Name|Remarks|
|--------------|-------|
|left|Left operand.|
|right|Right operand.|

_returns: Result of subtraction._

#### op_UnaryNegation
```csharp
OpenTK.Vector2.op_UnaryNegation(OpenTK.Vector2)
```
Negates the specified instance.

|Parameter Name|Remarks|
|--------------|-------|
|vec|Operand.|

_returns: Result of negation._

#### PerpDot
```csharp
OpenTK.Vector2.PerpDot(OpenTK.Vector2@,OpenTK.Vector2@,System.Single@)
```
Calculate the perpendicular dot (scalar) product of two vectors

|Parameter Name|Remarks|
|--------------|-------|
|left|First operand|
|right|Second operand|
|result|The perpendicular dot product of the two inputs|

_returns: The perpendicular dot product of the two inputs_

#### Scale
```csharp
OpenTK.Vector2.Scale(OpenTK.Vector2@)
```
Scales this instance by the given parameter.

|Parameter Name|Remarks|
|--------------|-------|
|scale|The scaling of the individual components.|


#### Sub
```csharp
OpenTK.Vector2.Sub(OpenTK.Vector2@,OpenTK.Vector2@,OpenTK.Vector2@)
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
OpenTK.Vector2.Subtract(OpenTK.Vector2@,OpenTK.Vector2@,OpenTK.Vector2@)
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
OpenTK.Vector2.ToString
```
Returns a System.String that represents the current Vector2.

#### Transform
```csharp
OpenTK.Vector2.Transform(OpenTK.Vector2@,OpenTK.Quaternion@,OpenTK.Vector2@)
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
#### PerpendicularLeft
Gets the perpendicular vector on the left side of this vector.
#### PerpendicularRight
Gets the perpendicular vector on the right side of this vector.
#### SizeInBytes
Defines the size of the Vector2 struct in bytes.
#### UnitX
Defines a unit-length Vector2 that points towards the X-axis.
#### UnitY
Defines a unit-length Vector2 that points towards the Y-axis.
#### X
The X component of the Vector2.
#### Y
The Y component of the Vector2.
#### Yx
Gets or sets an OpenTK.Vector2 with the Y and X components of this instance.
#### Zero
Defines a zero-length Vector2.

