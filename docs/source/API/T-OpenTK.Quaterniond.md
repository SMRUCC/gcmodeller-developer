---
title: Quaterniond
---

# Quaterniond
_namespace: [OpenTK](N-OpenTK.html)_

Represents a double-precision Quaternion.

### Methods

#### #ctor
```csharp
OpenTK.Quaterniond.#ctor(System.Double,System.Double,System.Double,System.Double)
```
Construct a new Quaterniond

|Parameter Name|Remarks|
|--------------|-------|
|x|The x component|
|y|The y component|
|z|The z component|
|w|The w component|


#### Add
```csharp
OpenTK.Quaterniond.Add(OpenTK.Quaterniond@,OpenTK.Quaterniond@,OpenTK.Quaterniond@)
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
OpenTK.Quaterniond.Conjugate(OpenTK.Quaterniond@,OpenTK.Quaterniond@)
```
Get the conjugate of the given Quaterniond

|Parameter Name|Remarks|
|--------------|-------|
|q|The Quaterniond|
|result|The conjugate of the given Quaterniond|

_returns: The conjugate of the given Quaterniond_

#### Equals
```csharp
OpenTK.Quaterniond.Equals(OpenTK.Quaterniond)
```
Compares this Quaterniond instance to another Quaterniond for equality.

|Parameter Name|Remarks|
|--------------|-------|
|other|The other Quaterniond to be used in the comparison.|

_returns: True if both instances are equal; false otherwise._

#### FromAxisAngle
```csharp
OpenTK.Quaterniond.FromAxisAngle(OpenTK.Vector3d,System.Double)
```
Build a Quaterniond from the given axis and angle

|Parameter Name|Remarks|
|--------------|-------|
|axis|The axis to rotate about|
|angle|The rotation angle in radians|


#### FromMatrix
```csharp
OpenTK.Quaterniond.FromMatrix(OpenTK.Matrix3d@,OpenTK.Quaterniond@)
```
Builds a quaternion from the given rotation matrix

|Parameter Name|Remarks|
|--------------|-------|
|matrix|A rotation matrix|
|result|The equivalent quaternion|

_returns: The equivalent quaternion_

#### GetHashCode
```csharp
OpenTK.Quaterniond.GetHashCode
```
Provides the hash code for this object.
_returns: A hash code formed from the bitwise XOR of this objects members._

#### Invert
```csharp
OpenTK.Quaterniond.Invert(OpenTK.Quaterniond@,OpenTK.Quaterniond@)
```
Get the inverse of the given Quaterniond

|Parameter Name|Remarks|
|--------------|-------|
|q|The Quaterniond to invert|
|result|The inverse of the given Quaterniond|

_returns: The inverse of the given Quaterniond_

#### Inverted
```csharp
OpenTK.Quaterniond.Inverted
```
Returns a copy of this Quaterniond with its rotation angle reversed.

#### Mult
```csharp
OpenTK.Quaterniond.Mult(OpenTK.Quaterniond@,OpenTK.Quaterniond@,OpenTK.Quaterniond@)
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
OpenTK.Quaterniond.Multiply(OpenTK.Quaterniond,System.Double)
```
Multiplies an instance by a scalar.

|Parameter Name|Remarks|
|--------------|-------|
|quaternion|The instance.|
|scale|The scalar.|

_returns: A new instance containing the result of the calculation._

#### Normalize
```csharp
OpenTK.Quaterniond.Normalize(OpenTK.Quaterniond@,OpenTK.Quaterniond@)
```
Scale the given Quaterniond to unit length

|Parameter Name|Remarks|
|--------------|-------|
|q|The Quaterniond to normalize|
|result|The normalized Quaterniond|

_returns: The normalized Quaterniond_

#### Normalized
```csharp
OpenTK.Quaterniond.Normalized
```
Returns a copy of the Quaterniond scaled to unit length.

#### op_Addition
```csharp
OpenTK.Quaterniond.op_Addition(OpenTK.Quaterniond,OpenTK.Quaterniond)
```
Adds two instances.

|Parameter Name|Remarks|
|--------------|-------|
|left|The first instance.|
|right|The second instance.|

_returns: The result of the calculation._

#### op_Equality
```csharp
OpenTK.Quaterniond.op_Equality(OpenTK.Quaterniond,OpenTK.Quaterniond)
```
Compares two instances for equality.

|Parameter Name|Remarks|
|--------------|-------|
|left|The first instance.|
|right|The second instance.|

_returns: True, if left equals right; false otherwise._

#### op_Inequality
```csharp
OpenTK.Quaterniond.op_Inequality(OpenTK.Quaterniond,OpenTK.Quaterniond)
```
Compares two instances for inequality.

|Parameter Name|Remarks|
|--------------|-------|
|left|The first instance.|
|right|The second instance.|

_returns: True, if left does not equal right; false otherwise._

#### op_Multiply
```csharp
OpenTK.Quaterniond.op_Multiply(System.Double,OpenTK.Quaterniond)
```
Multiplies an instance by a scalar.

|Parameter Name|Remarks|
|--------------|-------|
|quaternion|The instance.|
|scale|The scalar.|

_returns: A new instance containing the result of the calculation._

#### op_Subtraction
```csharp
OpenTK.Quaterniond.op_Subtraction(OpenTK.Quaterniond,OpenTK.Quaterniond)
```
Subtracts two instances.

|Parameter Name|Remarks|
|--------------|-------|
|left|The first instance.|
|right|The second instance.|

_returns: The result of the calculation._

#### Slerp
```csharp
OpenTK.Quaterniond.Slerp(OpenTK.Quaterniond,OpenTK.Quaterniond,System.Double)
```
Do Spherical linear interpolation between two quaternions

|Parameter Name|Remarks|
|--------------|-------|
|q1|The first Quaterniond|
|q2|The second Quaterniond|
|blend|The blend factor|

_returns: A smooth blend between the given quaternions_

#### Sub
```csharp
OpenTK.Quaterniond.Sub(OpenTK.Quaterniond@,OpenTK.Quaterniond@,OpenTK.Quaterniond@)
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
OpenTK.Quaterniond.ToAxisAngle
```
Convert this instance to an axis-angle representation.
_returns: A Vector4 that is the axis-angle representation of this quaternion._

#### ToString
```csharp
OpenTK.Quaterniond.ToString
```
Returns a System.String that represents the current Quaterniond.



### Properties

#### Identity
Defines the identity quaternion.
#### Length
Gets the length (magnitude) of the Quaterniond.
#### LengthSquared
Gets the square of the Quaterniond length (magnitude).
#### W
Gets or sets the W component of this instance.
#### X
Gets or sets the X component of this instance.
#### XYZ
Gets or sets an OpenTK.Vector3d with the X, Y and Z components of this instance.
#### Y
Gets or sets the Y component of this instance.
#### Z
Gets or sets the Z component of this instance.

