---
title: Vector3h
---

# Vector3h
_namespace: [OpenTK](N-OpenTK.html)_

3-component Vector of the Half type. Occupies 6 Byte total.

### Methods

#### #ctor
```csharp
OpenTK.Vector3h.#ctor(System.Runtime.Serialization.SerializationInfo,System.Runtime.Serialization.StreamingContext)
```
Constructor used by ISerializable to deserialize the object.

|Parameter Name|Remarks|
|--------------|-------|
|info|-|
|context|-|


#### Equals
```csharp
OpenTK.Vector3h.Equals(OpenTK.Vector3h)
```
Returns a value indicating whether this instance is equal to a specified OpenTK.Half3 vector.

|Parameter Name|Remarks|
|--------------|-------|
|other|OpenTK.Half3 to compare to this instance..|

_returns: True, if other is equal to this instance; false otherwise._

#### FromBinaryStream
```csharp
OpenTK.Vector3h.FromBinaryStream(System.IO.BinaryReader)
```
Updates the X,Y and Z components of this instance by reading from a Stream.

|Parameter Name|Remarks|
|--------------|-------|
|bin|A BinaryReader instance associated with an open Stream.|


#### FromBytes
```csharp
OpenTK.Vector3h.FromBytes(System.Byte[],System.Int32)
```
Converts an array of bytes into Half3.

|Parameter Name|Remarks|
|--------------|-------|
|value|A Half3 in it's byte[] representation.|
|startIndex|The starting position within value.|

_returns: A new Half3 instance._

#### GetBytes
```csharp
OpenTK.Vector3h.GetBytes(OpenTK.Vector3h)
```
Returns the Half3 as an array of bytes.

|Parameter Name|Remarks|
|--------------|-------|
|h|The Half3 to convert.|

_returns: The input as byte array._

#### GetObjectData
```csharp
OpenTK.Vector3h.GetObjectData(System.Runtime.Serialization.SerializationInfo,System.Runtime.Serialization.StreamingContext)
```
Used by ISerialize to serialize the object.

|Parameter Name|Remarks|
|--------------|-------|
|info|-|
|context|-|


#### op_Explicit
```csharp
OpenTK.Vector3h.op_Explicit(OpenTK.Vector3h)~OpenTK.Vector3d
```
Converts OpenTK.Half3 to OpenTK.Vector3d.

|Parameter Name|Remarks|
|--------------|-------|
|h3|The Half3 to convert.|

_returns: The resulting Vector3d._

#### ToBinaryStream
```csharp
OpenTK.Vector3h.ToBinaryStream(System.IO.BinaryWriter)
```
Writes the X,Y and Z components of this instance into a Stream.

|Parameter Name|Remarks|
|--------------|-------|
|bin|A BinaryWriter instance associated with an open Stream.|


#### ToString
```csharp
OpenTK.Vector3h.ToString
```
Returns a string that contains this Half3's numbers in human-legible form.

#### ToVector3
```csharp
OpenTK.Vector3h.ToVector3
```
Returns this Half3 instance's contents as Vector3.
_returns: OpenTK.Vector3_

#### ToVector3d
```csharp
OpenTK.Vector3h.ToVector3d
```
Returns this Half3 instance's contents as Vector3d.



### Properties

#### SizeInBytes
The size in bytes for an instance of the Half3 struct is 6.
#### X
The X component of the Half3.
#### Xy
Gets or sets an OpenTK.Vector2h with the X and Y components of this instance.
#### Xz
Gets or sets an OpenTK.Vector2h with the X and Z components of this instance.
#### Xzy
Gets or sets an OpenTK.Vector3h with the X, Z, and Y components of this instance.
#### Y
The Y component of the Half3.
#### Yx
Gets or sets an OpenTK.Vector2h with the Y and X components of this instance.
#### Yxz
Gets or sets an OpenTK.Vector3h with the Y, X, and Z components of this instance.
#### Yz
Gets or sets an OpenTK.Vector2h with the Y and Z components of this instance.
#### Yzx
Gets or sets an OpenTK.Vector3h with the Y, Z, and X components of this instance.
#### Z
The Z component of the Half3.
#### Zx
Gets or sets an OpenTK.Vector2h with the Z and X components of this instance.
#### Zxy
Gets or sets an OpenTK.Vector3h with the Z, X, and Y components of this instance.
#### Zy
Gets or sets an OpenTK.Vector2h with the Z and Y components of this instance.
#### Zyx
Gets or sets an OpenTK.Vector3h with the Z, Y, and X components of this instance.

