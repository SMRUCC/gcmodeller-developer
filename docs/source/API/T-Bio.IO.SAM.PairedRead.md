---
title: PairedRead
---

# PairedRead
_namespace: [Bio.IO.SAM](N-Bio.IO.SAM.html)_

Class to hold Paired reads.

### Methods

#### GetInsertLength
```csharp
Bio.IO.SAM.PairedRead.GetInsertLength(Bio.IO.SAM.SAMAlignedSequence,Bio.IO.SAM.SAMAlignedSequence,System.Boolean)
```
Gets the insert length of reads.

|Parameter Name|Remarks|
|--------------|-------|
|read1|First read.|
|read2|Second read.|
|validate|Validates the reads before calculating the insert length.|


#### GetPairedReadType
```csharp
Bio.IO.SAM.PairedRead.GetPairedReadType(Bio.IO.SAM.SAMAlignedSequence,Bio.IO.SAM.SAMAlignedSequence,System.Single,System.Single)
```
Gets the paired reads type.

|Parameter Name|Remarks|
|--------------|-------|
|read1|First aligned sequence.|
|read2|Second aligned sequence.|
|meanLengthOfInsert|Mean of the insertion length.|
|standardDeviationOfInsert|Standard deviation of insertion length.|


#### IsForwardRead
```csharp
Bio.IO.SAM.PairedRead.IsForwardRead(Bio.IO.SAM.SAMAlignedSequence)
```
Gets a boolean value which indicates that whether the specified read is forward oriented or not.

|Parameter Name|Remarks|
|--------------|-------|
|read|Aligned Sequence.|


#### IsReverseRead
```csharp
Bio.IO.SAM.PairedRead.IsReverseRead(Bio.IO.SAM.SAMAlignedSequence)
```
Gets a boolean value which indicates that whether the specified read is reverse oriented or not.

|Parameter Name|Remarks|
|--------------|-------|
|read|Aligned Sequence.|




### Properties

#### alignedSequences
holds reads.
#### InsertLength
Gets or sets the insert length.
#### PairedType
Paired type @"T:Bio.IO.SAM.PairedReadType"
#### Read1
First aligned sequence or read.
#### Read2
Second aligned sequence or read.
#### Reads
Gets the list of paired reads.

