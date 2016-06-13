---
title: ColorFormat
---

# ColorFormat
_namespace: [OpenTK.Graphics](N-OpenTK.Graphics.html)_

Defines the ColorFormat component of a GraphicsMode.

### Methods

#### #ctor
```csharp
OpenTK.Graphics.ColorFormat.#ctor(System.Int32,System.Int32,System.Int32,System.Int32)
```
Constructs a new ColorFormat with the specified bits per pixel for 
 the Red, Green, Blue and Alpha color channels.

|Parameter Name|Remarks|
|--------------|-------|
|red|Bits per pixel for the Red color channel.|
|green|Bits per pixel for the Green color channel.|
|blue|Bits per pixel for the Blue color channel.|
|alpha|Bits per pixel for the Alpha color channel.|


#### CompareTo
```csharp
OpenTK.Graphics.ColorFormat.CompareTo(OpenTK.Graphics.ColorFormat)
```
Compares two instances.

|Parameter Name|Remarks|
|--------------|-------|
|other|The other instance.|

_returns: 
            Zero if this instance is equal to other;
            a positive value  if this instance is greater than other;
            a negative value otherwise.
            _

#### Equals
```csharp
OpenTK.Graphics.ColorFormat.Equals(System.Object)
```
Indicates whether this instance and a specified object are equal.

|Parameter Name|Remarks|
|--------------|-------|
|obj|Another object to compare to.|

_returns: True if this instance is equal to obj; false otherwise._

#### GetHashCode
```csharp
OpenTK.Graphics.ColorFormat.GetHashCode
```
Returns the hash code for this instance.
_returns: A System.Int32 with the hash code of this instance._

#### op_Equality
```csharp
OpenTK.Graphics.ColorFormat.op_Equality(OpenTK.Graphics.ColorFormat,OpenTK.Graphics.ColorFormat)
```
Compares two instances for equality.

|Parameter Name|Remarks|
|--------------|-------|
|left|The left operand.|
|right|The right operand.|

_returns: True if both instances are equal; false otherwise._

#### op_GreaterThan
```csharp
OpenTK.Graphics.ColorFormat.op_GreaterThan(OpenTK.Graphics.ColorFormat,OpenTK.Graphics.ColorFormat)
```
Compares two instances for inequality.

|Parameter Name|Remarks|
|--------------|-------|
|left|The left operand.|
|right|The right operand.|

_returns: True if left is greater than right; false otherwise._

#### op_GreaterThanOrEqual
```csharp
OpenTK.Graphics.ColorFormat.op_GreaterThanOrEqual(OpenTK.Graphics.ColorFormat,OpenTK.Graphics.ColorFormat)
```
Compares two instances for inequality.

|Parameter Name|Remarks|
|--------------|-------|
|left|The left operand.|
|right|The right operand.|

_returns: True if left is greater than or equal to right; false otherwise._

#### op_Implicit
```csharp
OpenTK.Graphics.ColorFormat.op_Implicit(System.Int32)~OpenTK.Graphics.ColorFormat
```
Converts the specified bpp into a new ColorFormat.

|Parameter Name|Remarks|
|--------------|-------|
|bpp|The bits per pixel to convert.|

_returns: A ColorFormat with the specified bits per pixel._

#### op_Inequality
```csharp
OpenTK.Graphics.ColorFormat.op_Inequality(OpenTK.Graphics.ColorFormat,OpenTK.Graphics.ColorFormat)
```
Compares two instances for inequality.

|Parameter Name|Remarks|
|--------------|-------|
|left|The left operand.|
|right|The right operand.|

_returns: True if both instances are not equal; false otherwise._

#### op_LessThan
```csharp
OpenTK.Graphics.ColorFormat.op_LessThan(OpenTK.Graphics.ColorFormat,OpenTK.Graphics.ColorFormat)
```
Compares two instances for inequality.

|Parameter Name|Remarks|
|--------------|-------|
|left|The left operand.|
|right|The right operand.|

_returns: True if left is less than right; false otherwise._

#### op_LessThanOrEqual
```csharp
OpenTK.Graphics.ColorFormat.op_LessThanOrEqual(OpenTK.Graphics.ColorFormat,OpenTK.Graphics.ColorFormat)
```
Compares two instances for inequality.

|Parameter Name|Remarks|
|--------------|-------|
|left|The left operand.|
|right|The right operand.|

_returns: True if left is less than or equal to right; false otherwise._

#### ToString
```csharp
OpenTK.Graphics.ColorFormat.ToString
```
Returns a @"T:System.String" that describes this instance.
_returns: A @"T:System.String" that describes this instance._



### Properties

#### Alpha
Gets the bits per pixel for the Alpha channel.
#### BitsPerPixel
Gets the sum of Red, Green, Blue and Alpha bits per pixel.
#### Blue
Gets the bits per pixel for the Blue channel.
#### Empty
Defines an empty ColorFormat, where all properties are set to zero.
#### Green
Gets the bits per pixel for the Green channel.
#### IsIndexed
Gets a System.Boolean indicating whether this ColorFormat is indexed.
#### Red
Gets the bits per pixel for the Red channel.

