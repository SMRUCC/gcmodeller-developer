---
title: Vector4h
---

# Vector4h
_namespace: [OpenTK](N-OpenTK.html)_

4-component Vector of the Half type. Occupies 8 Byte total.

### Methods

#### #ctor
```csharp
OpenTK.Vector4h.#ctor(System.Runtime.Serialization.SerializationInfo,System.Runtime.Serialization.StreamingContext)
```
Constructor used by ISerializable to deserialize the object.

|Parameter Name|Remarks|
|--------------|-------|
|info|-|
|context|-|


#### Equals
```csharp
OpenTK.Vector4h.Equals(OpenTK.Vector4h)
```
Returns a value indicating whether this instance is equal to a specified OpenTK.Half4 vector.

|Parameter Name|Remarks|
|--------------|-------|
|other|OpenTK.Half4 to compare to this instance..|

_returns: True, if other is equal to this instance; false otherwise._

#### FromBinaryStream
```csharp
OpenTK.Vector4h.FromBinaryStream(System.IO.BinaryReader)
```
Updates the X,Y,Z and W components of this instance by reading from a Stream.

|Parameter Name|Remarks|
|--------------|-------|
|bin|A BinaryReader instance associated with an open Stream.|


#### FromBytes
```csharp
OpenTK.Vector4h.FromBytes(System.Byte[],System.Int32)
```
Converts an array of bytes into Half4.

|Parameter Name|Remarks|
|--------------|-------|
|value|A Half4 in it's byte[] representation.|
|startIndex|The starting position within value.|

_returns: A new Half4 instance._

#### GetBytes
```csharp
OpenTK.Vector4h.GetBytes(OpenTK.Vector4h)
```
Returns the Half4 as an array of bytes.

|Parameter Name|Remarks|
|--------------|-------|
|h|The Half4 to convert.|

_returns: The input as byte array._

#### GetObjectData
```csharp
OpenTK.Vector4h.GetObjectData(System.Runtime.Serialization.SerializationInfo,System.Runtime.Serialization.StreamingContext)
```
Used by ISerialize to serialize the object.

|Parameter Name|Remarks|
|--------------|-------|
|info|-|
|context|-|


#### op_Explicit
```csharp
OpenTK.Vector4h.op_Explicit(OpenTK.Vector4h)~OpenTK.Vector4d
```
Converts OpenTK.Half4 to OpenTK.Vector4d.

|Parameter Name|Remarks|
|--------------|-------|
|h4|The Half4 to convert.|

_returns: The resulting Vector4d._

#### ToBinaryStream
```csharp
OpenTK.Vector4h.ToBinaryStream(System.IO.BinaryWriter)
```
Writes the X,Y,Z and W components of this instance into a Stream.

|Parameter Name|Remarks|
|--------------|-------|
|bin|A BinaryWriter instance associated with an open Stream.|


#### ToString
```csharp
OpenTK.Vector4h.ToString
```
Returns a string that contains this Half4's numbers in human-legible form.

#### ToVector4
```csharp
OpenTK.Vector4h.ToVector4
```
Returns this Half4 instance's contents as Vector4.
_returns: OpenTK.Vector4_

#### ToVector4d
```csharp
OpenTK.Vector4h.ToVector4d
```
Returns this Half4 instance's contents as Vector4d.



### Properties

#### SizeInBytes
The size in bytes for an instance of the Half4 struct is 8.
#### W
The W component of the Half4.
#### Wx
Gets or sets an OpenTK.Vector2h with the W and X components of this instance.
#### Wxy
Gets or sets an OpenTK.Vector3h with the W, X, and Y components of this instance.
#### Wxyz
Gets or sets an OpenTK.Vector4h with the W, X, Y, and Z components of this instance.
#### Wxz
Gets or sets an OpenTK.Vector3h with the W, X, and Z components of this instance.
#### Wxzy
Gets or sets an OpenTK.Vector4h with the W, X, Z, and Y components of this instance.
#### Wy
Gets or sets an OpenTK.Vector2h with the W and Y components of this instance.
#### Wyx
Gets or sets an OpenTK.Vector3h with the W, Y, and X components of this instance.
#### Wyxz
Gets or sets an OpenTK.Vector4h with the W, Y, X, and Z components of this instance.
#### Wyz
Gets or sets an OpenTK.Vector3h with the W, Y, and Z components of this instance.
#### Wyzx
Gets or sets an OpenTK.Vector4h with the W, Y, Z, and X components of this instance.
#### Wz
Gets or sets an OpenTK.Vector2h with the W and Z components of this instance.
#### Wzx
Gets or sets an OpenTK.Vector3h with the W, Z, and X components of this instance.
#### Wzxy
Gets or sets an OpenTK.Vector4h with the W, Z, X, and Y components of this instance.
#### Wzy
Gets or sets an OpenTK.Vector3h with the W, Z, and Y components of this instance.
#### Wzyw
Gets an OpenTK.Vector4h with the W, Z, Y, and W components of this instance.
#### Wzyx
Gets or sets an OpenTK.Vector4h with the W, Z, Y, and X components of this instance.
#### X
The X component of the Half4.
#### Xw
Gets or sets an OpenTK.Vector2h with the X and W components of this instance.
#### Xwy
Gets or sets an OpenTK.Vector3h with the X, W, and Y components of this instance.
#### Xwyz
Gets or sets an OpenTK.Vector4h with the X, W, Y, and Z components of this instance.
#### Xwz
Gets or sets an OpenTK.Vector3h with the X, W, and Z components of this instance.
#### Xwzy
Gets or sets an OpenTK.Vector4h with the X, W, Z, and Y components of this instance.
#### Xy
Gets or sets an OpenTK.Vector2h with the X and Y components of this instance.
#### Xyw
Gets or sets an OpenTK.Vector3h with the X, Y, and Z components of this instance.
#### Xywz
Gets or sets an OpenTK.Vector4h with the X, Y, W, and Z components of this instance.
#### Xyz
Gets or sets an OpenTK.Vector3h with the X, Y, and Z components of this instance.
#### Xz
Gets or sets an OpenTK.Vector2h with the X and Z components of this instance.
#### Xzw
Gets or sets an OpenTK.Vector3h with the X, Z, and W components of this instance.
#### Xzwy
Gets or sets an OpenTK.Vector4h with the X, Z, W, and Y components of this instance.
#### Xzy
Gets or sets an OpenTK.Vector3h with the X, Z, and Y components of this instance.
#### Xzyw
Gets or sets an OpenTK.Vector4h with the X, Z, Y, and W components of this instance.
#### Y
The Y component of the Half4.
#### Yw
Gets or sets an OpenTK.Vector2h with the Y and W components of this instance.
#### Ywx
Gets or sets an OpenTK.Vector3h with the Y, W, and X components of this instance.
#### Ywxz
Gets or sets an OpenTK.Vector4h with the Y, W, X, and Z components of this instance.
#### Ywz
Gets an OpenTK.Vector3h with the Y, W, and Z components of this instance.
#### Ywzx
Gets or sets an OpenTK.Vector4h with the Y, W, Z, and X components of this instance.
#### Yx
Gets or sets an OpenTK.Vector2h with the Y and X components of this instance.
#### Yxw
Gets or sets an OpenTK.Vector3h with the Y, X, and W components of this instance.
#### Yxwz
Gets or sets an OpenTK.Vector4h with the Y, X, W, and Z components of this instance.
#### Yxz
Gets or sets an OpenTK.Vector3h with the Y, X, and Z components of this instance.
#### Yxzw
Gets or sets an OpenTK.Vector4h with the Y, X, Z, and W components of this instance.
#### Yywz
Gets an OpenTK.Vector4h with the Y, Y, W, and Z components of this instance.
#### Yyzw
Gets an OpenTK.Vector4h with the Y, Y, Z, and W components of this instance.
#### Yz
Gets or sets an OpenTK.Vector2h with the Y and Z components of this instance.
#### Yzw
Gets or sets an OpenTK.Vector3h with the Y, Z, and W components of this instance.
#### Yzwx
Gets or sets an OpenTK.Vector4h with the Y, Z, W, and X components of this instance.
#### Yzx
Gets or sets an OpenTK.Vector3h with the Y, Z, and X components of this instance.
#### Yzxw
Gets or sets an OpenTK.Vector4h with the Y, Z, X, and W components of this instance.
#### Z
The Z component of the Half4.
#### Zw
Gets an OpenTK.Vector2h with the Z and W components of this instance.
#### Zwx
Gets or sets an OpenTK.Vector3h with the Z, W, and X components of this instance.
#### Zwxy
Gets or sets an OpenTK.Vector4h with the Z, W, X, and Y components of this instance.
#### Zwy
Gets or sets an OpenTK.Vector3h with the Z, W, and Y components of this instance.
#### Zwyx
Gets or sets an OpenTK.Vector4h with the Z, W, Y, and X components of this instance.
#### Zwzy
Gets an OpenTK.Vector4h with the Z, W, Z, and Y components of this instance.
#### Zx
Gets or sets an OpenTK.Vector2h with the Z and X components of this instance.
#### Zxw
Gets or sets an OpenTK.Vector3h with the Z, X, and W components of this instance.
#### Zxwy
Gets or sets an OpenTK.Vector4h with the Z, X, W, and Y components of this instance.
#### Zxy
Gets or sets an OpenTK.Vector3h with the Z, X, and Y components of this instance.
#### Zxyw
Gets or sets an OpenTK.Vector4h with the Z, X, Y, and Z components of this instance.
#### Zy
Gets or sets an OpenTK.Vector2h with the Z and Y components of this instance.
#### Zyw
Gets or sets an OpenTK.Vector3h with the Z, Y, and W components of this instance.
#### Zywx
Gets or sets an OpenTK.Vector4h with the Z, Y, W, and X components of this instance.
#### Zyx
Gets or sets an OpenTK.Vector3h with the Z, Y, and X components of this instance.
#### Zyxw
Gets or sets an OpenTK.Vector4h with the Z, Y, X, and W components of this instance.

