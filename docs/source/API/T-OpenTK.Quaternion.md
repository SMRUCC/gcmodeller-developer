---
title: Quaternion
---

# Quaternion
_namespace: [OpenTK](N-OpenTK.html)_

Represents a Quaternion.

### Methods

#### #ctor
```csharp
OpenTK.Quaternion.#ctor(System.Single,System.Single,System.Single,System.Single)
```
Construct a new Quaternion

|Parameter Name|Remarks|
|--------------|-------|
|x|The x component|
|y|The y component|
|z|The z component|
|w|The w component|


#### Add
```csharp
OpenTK.Quaternion.Add(OpenTK.Quaternion@,OpenTK.Quaternion@,OpenTK.Quaternion@)
```
Add two quaternions

|Parameter Name|Remarks|
|--------------|-------|
|left|The first operand|
|right|The second operand|
|result|The result of the addition|

_returns: The result of the addition_

#### Conjugate
```csharp
OpenTK.Quaternion.Conjugate(OpenTK.Quaternion@,OpenTK.Quaternion@)
```
Get the conjugate of the given quaternion

|Parameter Name|Remarks|
|--------------|-------|
|q|The quaternion|
|result|The conjugate of the given quaternion|

_returns: The conjugate of the given quaternion_

#### Equals
```csharp
OpenTK.Quaternion.Equals(OpenTK.Quaternion)
```
Compares this Quaternion instance to another Quaternion for equality.

|Parameter Name|Remarks|
|--------------|-------|
|other|The other Quaternion to be used in the comparison.|

_returns: True if both instances are equal; false otherwise._

#### FromAxisAngle
```csharp
OpenTK.Quaternion.FromAxisAngle(OpenTK.Vector3,System.Single)
```
Build a quaternion from the given axis and angle

|Parameter Name|Remarks|
|--------------|-------|
|axis|The axis to rotate about|
|angle|The rotation angle in radians|

_returns: The equivalent quaternion_

#### FromMatrix
```csharp
OpenTK.Quaternion.FromMatrix(OpenTK.Matrix3@,OpenTK.Quaternion@)
```
Builds a quaternion from the given rotation matrix

|Parameter Name|Remarks|
|--------------|-------|
|matrix|A rotation matrix|
|result|The equivalent quaternion|

_returns: The equivalent quaternion_

#### GetHashCode
```csharp
OpenTK.Quaternion.GetHashCode
```
Provides the hash code for this object.
_returns: A hash code formed from the bitwise XOR of this objects members._

#### Invert
```csharp
OpenTK.Quaternion.Invert(OpenTK.Quaternion@,OpenTK.Quaternion@)
```
Get the inverse of the given quaternion

|Parameter Name|Remarks|
|--------------|-------|
|q|The quaternion to invert|
|result|The inverse of the given quaternion|

_returns: The inverse of the given quaternion_

#### Inverted
```csharp
OpenTK.Quaternion.Inverted
```
Returns a copy of this Quaterniond with its rotation angle reversed.

#### Mult
```csharp
OpenTK.Quaternion.Mult(OpenTK.Quaternion@,OpenTK.Quaternion@,OpenTK.Quaternion@)
```
Multiplies two instances.

|Parameter Name|Remarks|
|--------------|-------|
|left|The first instance.|
|right|The second instance.|
|result|A new instance containing the result of the calculation.|

_returns: A new instance containing the result of the calculation._

#### Multiply
```csharp
OpenTK.Quaternion.Multiply(OpenTK.Quaternion,System.Single)
```
Multiplies an instance by a scalar.

|Parameter Name|Remarks|
|--------------|-------|
|quaternion|The instance.|
|scale|The scalar.|

_returns: A new instance containing the result of the calculation._

#### Normalize
```csharp
OpenTK.Quaternion.Normalize(OpenTK.Quaternion@,OpenTK.Quaternion@)
```
Scale the given quaternion to unit length

|Parameter Name|Remarks|
|--------------|-------|
|q|The quaternion to normalize|
|result|The normalized quaternion|

_returns: The normalized quaternion_

#### Normalized
```csharp
OpenTK.Quaternion.Normalized
```
Returns a copy of the Quaternion scaled to unit length.

#### op_Addition
```csharp
OpenTK.Quaternion.op_Addition(OpenTK.Quaternion,OpenTK.Quaternion)
```
Adds two instances.

|Parameter Name|Remarks|
|--------------|-------|
|left|The first instance.|
|right|The second instance.|

_returns: The result of the calculation._

#### op_Equality
```csharp
OpenTK.Quaternion.op_Equality(OpenTK.Quaternion,OpenTK.Quaternion)
```
Compares two instances for equality.

|Parameter Name|Remarks|
|--------------|-------|
|left|The first instance.|
|right|The second instance.|

_returns: True, if left equals right; false otherwise._

#### op_Inequality
```csharp
OpenTK.Quaternion.op_Inequality(OpenTK.Quaternion,OpenTK.Quaternion)
```
Compares two instances for inequality.

|Parameter Name|Remarks|
|--------------|-------|
|left|The first instance.|
|right|The second instance.|

_returns: True, if left does not equal right; false otherwise._

#### op_Multiply
```csharp
OpenTK.Quaternion.op_Multiply(System.Single,OpenTK.Quaternion)
```
Multiplies an instance by a scalar.

|Parameter Name|Remarks|
|--------------|-------|
|quaternion|The instance.|
|scale|The scalar.|

_returns: A new instance containing the result of the calculation._

#### op_Subtraction
```csharp
OpenTK.Quaternion.op_Subtraction(OpenTK.Quaternion,OpenTK.Quaternion)
```
Subtracts two instances.

|Parameter Name|Remarks|
|--------------|-------|
|left|The first instance.|
|right|The second instance.|

_returns: The result of the calculation._

#### Slerp
```csharp
OpenTK.Quaternion.Slerp(OpenTK.Quaternion,OpenTK.Quaternion,System.Single)
```
Do Spherical linear interpolation between two quaternions

|Parameter Name|Remarks|
|--------------|-------|
|q1|The first quaternion|
|q2|The second quaternion|
|blend|The blend factor|

_returns: A smooth blend between the given quaternions_

#### Sub
```csharp
OpenTK.Quaternion.Sub(OpenTK.Quaternion@,OpenTK.Quaternion@,OpenTK.Quaternion@)
```
Subtracts two instances.

|Parameter Name|Remarks|
|--------------|-------|
|left|The left instance.|
|right|The right instance.|
|result|The result of the operation.|

_returns: The result of the operation._

#### ToAxisAngle
```csharp
OpenTK.Quaternion.ToAxisAngle
```
Convert this instance to an axis-angle representation.
_returns: A Vector4 that is the axis-angle representation of this quaternion._

#### ToString
```csharp
OpenTK.Quaternion.ToString
```
Returns a System.String that represents the current Quaternion.



### Properties

#### Identity
Defines the identity quaternion.
#### Length
Gets the length (magnitude) of the quaternion.
#### LengthSquared
Gets the square of the quaternion length (magnitude).
#### W
Gets or sets the W component of this instance.
#### X
Gets or sets the X component of this instance.
#### XYZ
Gets or sets an OpenTK.Vector3 with the X, Y and Z components of this instance.
#### Y
Gets or sets the Y component of this instance.
#### Z
Gets or sets the Z component of this instance.

