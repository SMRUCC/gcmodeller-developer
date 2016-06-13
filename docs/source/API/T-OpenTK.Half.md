---
title: Half
---

# Half
_namespace: [OpenTK](N-OpenTK.html)_

The name Half is derived from half-precision floating-point number.
 It occupies only 16 bits, which are split into 1 Sign bit, 5 Exponent bits and 10 Mantissa bits.

### Methods

#### #ctor
```csharp
OpenTK.Half.#ctor(System.Runtime.Serialization.SerializationInfo,System.Runtime.Serialization.StreamingContext)
```
Constructor used by ISerializable to deserialize the object.

|Parameter Name|Remarks|
|--------------|-------|
|info|-|
|context|-|


#### CompareTo
```csharp
OpenTK.Half.CompareTo(OpenTK.Half)
```
Compares this instance to a specified half-precision floating-point number
 and returns an integer that indicates whether the value of this instance
 is less than, equal to, or greater than the value of the specified half-precision
 floating-point number.

|Parameter Name|Remarks|
|--------------|-------|
|other|A half-precision floating-point number to compare.|

_returns: 
            A signed number indicating the relative values of this instance and value. If the number is:
            Less than zero, then this instance is less than other, or this instance is not a number
            (OpenTK.Half.NaN) and other is a number.Zero: this instance is equal to value, or both this instance and other
            are not a number (OpenTK.Half.NaN), OpenTK.Half.PositiveInfinity, or
            OpenTK.Half.NegativeInfinity.Greater than zero: this instance is greater than othrs, or this instance is a number
            and other is not a number (OpenTK.Half.NaN)._

#### Equals
```csharp
OpenTK.Half.Equals(OpenTK.Half)
```
Returns a value indicating whether this instance is equal to a specified OpenTK.Half value.

|Parameter Name|Remarks|
|--------------|-------|
|other|OpenTK.Half object to compare to this instance..|

_returns: True, if other is equal to this instance; false otherwise._

#### FromBinaryStream
```csharp
OpenTK.Half.FromBinaryStream(System.IO.BinaryReader)
```
Updates the Half by reading from a Stream.

|Parameter Name|Remarks|
|--------------|-------|
|bin|A BinaryReader instance associated with an open Stream.|


#### FromBytes
```csharp
OpenTK.Half.FromBytes(System.Byte[],System.Int32)
```
Converts an array of bytes into Half.

|Parameter Name|Remarks|
|--------------|-------|
|value|A Half in it's byte[] representation.|
|startIndex|The starting position within value.|

_returns: A new Half instance._

#### GetBytes
```csharp
OpenTK.Half.GetBytes(OpenTK.Half)
```
Returns the Half as an array of bytes.

|Parameter Name|Remarks|
|--------------|-------|
|h|The Half to convert.|

_returns: The input as byte array._

#### GetObjectData
```csharp
OpenTK.Half.GetObjectData(System.Runtime.Serialization.SerializationInfo,System.Runtime.Serialization.StreamingContext)
```
Used by ISerialize to serialize the object.

|Parameter Name|Remarks|
|--------------|-------|
|info|-|
|context|-|


#### HalfToFloat
```csharp
OpenTK.Half.HalfToFloat(System.UInt16)
```
Ported from OpenEXR's IlmBase 1.0.1

#### op_Explicit
```csharp
OpenTK.Half.op_Explicit(System.Double)~OpenTK.Half
```
Converts a System.Double to a OpenTK.Half.

|Parameter Name|Remarks|
|--------------|-------|
|d|The value to convert.
            A @"T:System.Double"
            |

_returns: The result of the conversion.
            A @"T:OpenTK.Half"
            _

#### op_Implicit
```csharp
OpenTK.Half.op_Implicit(OpenTK.Half)~System.Double
```
Converts a OpenTK.Half to a System.Double.

|Parameter Name|Remarks|
|--------------|-------|
|h|The value to convert.
            A @"T:OpenTK.Half"
            |

_returns: The result of the conversion.
            A @"T:System.Double"
            _

#### Parse
```csharp
OpenTK.Half.Parse(System.String,System.Globalization.NumberStyles,System.IFormatProvider)
```
Converts the string representation of a number to a half-precision floating-point equivalent.

|Parameter Name|Remarks|
|--------------|-------|
|s|String representation of the number to convert.|
|style|Specifies the format of s.|
|provider|Culture-specific formatting information.|

_returns: A new Half instance._

#### SingleToHalf
```csharp
OpenTK.Half.SingleToHalf(System.Int32)
```
Ported from OpenEXR's IlmBase 1.0.1

#### ToBinaryStream
```csharp
OpenTK.Half.ToBinaryStream(System.IO.BinaryWriter)
```
Writes the Half into a Stream.

|Parameter Name|Remarks|
|--------------|-------|
|bin|A BinaryWriter instance associated with an open Stream.|


#### ToSingle
```csharp
OpenTK.Half.ToSingle
```
Converts the 16-bit half to 32-bit floating-point.
_returns: A single-precision floating-point number._

#### ToString
```csharp
OpenTK.Half.ToString(System.String,System.IFormatProvider)
```
Converts this Half into a human-legible string representation.

|Parameter Name|Remarks|
|--------------|-------|
|format|Formatting for the output string.|
|formatProvider|Culture-specific formatting information.|

_returns: The string representation of this instance._

#### TryParse
```csharp
OpenTK.Half.TryParse(System.String,System.Globalization.NumberStyles,System.IFormatProvider,OpenTK.Half@)
```
Converts the string representation of a number to a half-precision floating-point equivalent. Returns success.

|Parameter Name|Remarks|
|--------------|-------|
|s|String representation of the number to convert.|
|style|Specifies the format of s.|
|provider|Culture-specific formatting information.|
|result|The Half instance to write to.|

_returns: Success._



### Properties

#### Epsilon
Smallest positive e for which half (1.0 + e) != half (1.0)
#### IsNaN
Returns true if the Half represents Not A Number (NaN)
#### IsNegativeInfinity
Returns true if the Half represents negative infinity.
#### IsPositiveInfinity
Returns true if the Half represents positive infinity.
#### IsZero
Returns true if the Half is zero.
#### MaxValue
Largest positive half
#### MinNormalizedValue
Smallest positive normalized half
#### MinValue
Smallest positive half
#### SizeInBytes
The size in bytes for an instance of the Half struct.

