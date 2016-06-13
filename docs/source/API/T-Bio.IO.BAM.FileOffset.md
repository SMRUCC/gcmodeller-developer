---
title: FileOffset
---

# FileOffset
_namespace: [Bio.IO.BAM](N-Bio.IO.BAM.html)_

Class to hold offset of a BAM file.

### Methods

#### #ctor
```csharp
Bio.IO.BAM.FileOffset.#ctor(System.UInt64,System.UInt16)
```
Create a new file offset.

|Parameter Name|Remarks|
|--------------|-------|
|compressedStreamPosition|-|
|decompressedStreamPosition|-|


#### CompareTo
```csharp
Bio.IO.BAM.FileOffset.CompareTo(Bio.IO.BAM.FileOffset)
```
Compares two FileOffsets.

|Parameter Name|Remarks|
|--------------|-------|
|other|Other file offset to compare.|


#### Equals
```csharp
Bio.IO.BAM.FileOffset.Equals(Bio.IO.BAM.FileOffset)
```
Returns a value indicating whether this instance is equal to a specified FileOffset instance.

|Parameter Name|Remarks|
|--------------|-------|
|other|An FileOffset instance to compare to this instance.|

_returns:  true if other has the same value as this instance; otherwise, false._

#### GetHashCode
```csharp
Bio.IO.BAM.FileOffset.GetHashCode
```
Gets the Hashcode for this instance.

#### op_Equality
```csharp
Bio.IO.BAM.FileOffset.op_Equality(Bio.IO.BAM.FileOffset,Bio.IO.BAM.FileOffset)
```
Returns a value indicating whether x is equal to y.

|Parameter Name|Remarks|
|--------------|-------|
|x|First operand.|
|y|second operand.|


#### op_GreaterThan
```csharp
Bio.IO.BAM.FileOffset.op_GreaterThan(Bio.IO.BAM.FileOffset,Bio.IO.BAM.FileOffset)
```
Returns a value indicating whether x is greater than y.

|Parameter Name|Remarks|
|--------------|-------|
|x|First operand.|
|y|second operand.|


#### op_GreaterThanOrEqual
```csharp
Bio.IO.BAM.FileOffset.op_GreaterThanOrEqual(Bio.IO.BAM.FileOffset,Bio.IO.BAM.FileOffset)
```
Returns a value indicating whether x is greater than or equal to y.

|Parameter Name|Remarks|
|--------------|-------|
|x|First operand.|
|y|second operand.|


#### op_Inequality
```csharp
Bio.IO.BAM.FileOffset.op_Inequality(Bio.IO.BAM.FileOffset,Bio.IO.BAM.FileOffset)
```
Returns a value indicating whether x is not equal to y.

|Parameter Name|Remarks|
|--------------|-------|
|x|First operand.|
|y|second operand.|


#### op_LessThan
```csharp
Bio.IO.BAM.FileOffset.op_LessThan(Bio.IO.BAM.FileOffset,Bio.IO.BAM.FileOffset)
```
Returns a value indicating whether x is less than y.

|Parameter Name|Remarks|
|--------------|-------|
|x|First operand.|
|y|second operand.|


#### op_LessThanOrEqual
```csharp
Bio.IO.BAM.FileOffset.op_LessThanOrEqual(Bio.IO.BAM.FileOffset,Bio.IO.BAM.FileOffset)
```
Returns a value indicating whether x is less than or equal to y.

|Parameter Name|Remarks|
|--------------|-------|
|x|First operand.|
|y|second operand.|




### Properties

#### BothDataElements
The two types are stored in one 64 bit field here.
#### CompressedBlockOffset
Gets or sets BGZF block start offset.
#### UncompressedBlockOffset
Gets or sets an offset of uncompressed block inside a BGZF block 
 from which aligned sequences starts or ends.

