---
title: Vector2h
---

# Vector2h
_namespace: [OpenTK](N-OpenTK.html)_

2-component Vector of the Half type. Occupies 4 Byte total.

### Methods

#### #ctor
```csharp
OpenTK.Vector2h.#ctor(System.Runtime.Serialization.SerializationInfo,System.Runtime.Serialization.StreamingContext)
```
Constructor used by ISerializable to deserialize the object.

|Parameter Name|Remarks|
|--------------|-------|
|info|-|
|context|-|


#### Equals
```csharp
OpenTK.Vector2h.Equals(OpenTK.Vector2h)
```
Returns a value indicating whether this instance is equal to a specified OpenTK.Half2 vector.

|Parameter Name|Remarks|
|--------------|-------|
|other|OpenTK.Half2 to compare to this instance..|

_returns: True, if other is equal to this instance; false otherwise._

#### FromBinaryStream
```csharp
OpenTK.Vector2h.FromBinaryStream(System.IO.BinaryReader)
```
Updates the X and Y components of this instance by reading from a Stream.

|Parameter Name|Remarks|
|--------------|-------|
|bin|A BinaryReader instance associated with an open Stream.|


#### FromBytes
```csharp
OpenTK.Vector2h.FromBytes(System.Byte[],System.Int32)
```
Converts an array of bytes into Half2.

|Parameter Name|Remarks|
|--------------|-------|
|value|A Half2 in it's byte[] representation.|
|startIndex|The starting position within value.|

_returns: A new Half2 instance._

#### GetBytes
```csharp
OpenTK.Vector2h.GetBytes(OpenTK.Vector2h)
```
Returns the Half2 as an array of bytes.

|Parameter Name|Remarks|
|--------------|-------|
|h|The Half2 to convert.|

_returns: The input as byte array._

#### GetObjectData
```csharp
OpenTK.Vector2h.GetObjectData(System.Runtime.Serialization.SerializationInfo,System.Runtime.Serialization.StreamingContext)
```
Used by ISerialize to serialize the object.

|Parameter Name|Remarks|
|--------------|-------|
|info|-|
|context|-|


#### op_Explicit
```csharp
OpenTK.Vector2h.op_Explicit(OpenTK.Vector2h)~OpenTK.Vector2d
```
Converts OpenTK.Half2 to OpenTK.Vector2d.

|Parameter Name|Remarks|
|--------------|-------|
|h|The Half2 to convert.|

_returns: The resulting Vector2d._

#### ToBinaryStream
```csharp
OpenTK.Vector2h.ToBinaryStream(System.IO.BinaryWriter)
```
Writes the X and Y components of this instance into a Stream.

|Parameter Name|Remarks|
|--------------|-------|
|bin|A BinaryWriter instance associated with an open Stream.|


#### ToString
```csharp
OpenTK.Vector2h.ToString
```
Returns a string that contains this Half2's numbers in human-legible form.

#### ToVector2
```csharp
OpenTK.Vector2h.ToVector2
```
Returns this Half2 instance's contents as Vector2.
_returns: OpenTK.Vector2_

#### ToVector2d
```csharp
OpenTK.Vector2h.ToVector2d
```
Returns this Half2 instance's contents as Vector2d.



### Properties

#### SizeInBytes
The size in bytes for an instance of the Half2 struct is 4.
#### X
The X component of the Half2.
#### Y
The Y component of the Half2.
#### Yx
Gets or sets an OpenTK.Vector2h with the Y and X components of this instance.

