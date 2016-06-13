---
title: SAMAlignedSequenceHeader
---

# SAMAlignedSequenceHeader
_namespace: [Bio.IO.SAM](N-Bio.IO.SAM.html)_

SAMAlignedSequenceHeader holds aligned sequence headers of the sam file format.

### Methods

#### #ctor
```csharp
Bio.IO.SAM.SAMAlignedSequenceHeader.#ctor
```
Creates new SAMAlignedSequenceHeader instance.

#### GetBin
```csharp
Bio.IO.SAM.SAMAlignedSequenceHeader.GetBin
```
Returns the bin number.

#### GetFlag
```csharp
Bio.IO.SAM.SAMAlignedSequenceHeader.GetFlag(System.String)
```
Gets the SAMFlag for the specified string value.

|Parameter Name|Remarks|
|--------------|-------|
|value|Value for which the SAMFlag is required.|


#### GetRefSeqAlignmentLengthFromCIGAR
```csharp
Bio.IO.SAM.SAMAlignedSequenceHeader.GetRefSeqAlignmentLengthFromCIGAR
```
Gets the reference sequence alignment length depending on the CIGAR value.
_returns: Length of the alignment._

#### IsValidCIGAR
```csharp
Bio.IO.SAM.SAMAlignedSequenceHeader.IsValidCIGAR(System.String)
```
Validates CIGAR.

|Parameter Name|Remarks|
|--------------|-------|
|cigar|CIGAR value to validate.|


#### IsValidISize
```csharp
Bio.IO.SAM.SAMAlignedSequenceHeader.IsValidISize(System.Int32)
```
Validates ISize.

|Parameter Name|Remarks|
|--------------|-------|
|isize|ISIZE value to validate.|


#### IsValidMapQ
```csharp
Bio.IO.SAM.SAMAlignedSequenceHeader.IsValidMapQ(System.Int32)
```
Validates MapQ.

|Parameter Name|Remarks|
|--------------|-------|
|mapq|MapQ value to validate.|


#### IsValidMPos
```csharp
Bio.IO.SAM.SAMAlignedSequenceHeader.IsValidMPos(System.Int32)
```
Validates MPos.

|Parameter Name|Remarks|
|--------------|-------|
|mpos|MPOS value to validate.|


#### IsValidMRNM
```csharp
Bio.IO.SAM.SAMAlignedSequenceHeader.IsValidMRNM(System.String)
```
Validates MRNM.

|Parameter Name|Remarks|
|--------------|-------|
|mrnm|MRNM value to validate.|


#### IsValidPos
```csharp
Bio.IO.SAM.SAMAlignedSequenceHeader.IsValidPos(System.Int32)
```
Validates Pos.

|Parameter Name|Remarks|
|--------------|-------|
|pos|Position value to validate.|


#### IsValidQName
```csharp
Bio.IO.SAM.SAMAlignedSequenceHeader.IsValidQName(System.String)
```
Validates QName.

|Parameter Name|Remarks|
|--------------|-------|
|qname|QName value to validate.|


#### IsValidRName
```csharp
Bio.IO.SAM.SAMAlignedSequenceHeader.IsValidRName(System.String)
```
Validates RName.

|Parameter Name|Remarks|
|--------------|-------|
|rname|RName value to validate.|


#### RegionToBin
```csharp
Bio.IO.SAM.SAMAlignedSequenceHeader.RegionToBin(System.Int32,System.Int32)
```
Gets Bin for the specified region.
 Note that this method returns zero for negative values.

|Parameter Name|Remarks|
|--------------|-------|
|start|Zero based start co-ordinate of alignment.|
|end|Zero based end co-ordinate of the alignment.|


#### SetPreValidatedCIGAR
```csharp
Bio.IO.SAM.SAMAlignedSequenceHeader.SetPreValidatedCIGAR(System.String)
```
Sets the value of an extended CIGAR string known to be valid

|Parameter Name|Remarks|
|--------------|-------|
|value|-|


#### SetPreValidatedMRNM
```csharp
Bio.IO.SAM.SAMAlignedSequenceHeader.SetPreValidatedMRNM(System.String)
```
Set the MRNM value without validating that it is a valid value

|Parameter Name|Remarks|
|--------------|-------|
|value|-|


#### SetPreValidatedRName
```csharp
Bio.IO.SAM.SAMAlignedSequenceHeader.SetPreValidatedRName(System.String)
```
Set the name of the reference without validating it by a regular expression, useful
 when the same value is being repeatedly used.

|Parameter Name|Remarks|
|--------------|-------|
|rName|-|




### Properties

#### alignmentLength
Holds the length of the alignment determined by the CIGAR value if available or the default read length if not.
#### bin
Gets the Bin depending on the POS and CIGAR.
#### cigar
Extended CIGAR string.
#### CIGARRegxExpr
Regular Expression object for CIGAR.
#### CIGARRegxExprPattern
Regular expression pattern for CIGAR.
#### DefaultCIGAR
Default value for CIGAR.
#### DefaultReadLength
Default value for read/query length.
#### Flag
SAM flags.
 @"T:Bio.IO.SAM.SAMFlags"
#### isize
Inferred insert size.
#### ISize_MaxValue
Represents the largest possible value of ISize. This field is constant.
#### ISize_MinValue
Represents the smallest possible value of ISize. This field is constant.
#### mapq
Mapping quality (phred-scaled posterior probability that the 
 mapping position of this read is incorrect).
#### MapQ_MaxValue
Represents the largest possible value of MapQ. This field is constant.
#### MapQ_MinValue
Represents the smallest possible value of MapQ. This field is constant.
#### mpos
One-based leftmost mate position of the clipped sequence.
#### MPOS_MaxValue
Represents the largest possible value of MPOS. This field is constant.
#### MPOS_MinValue
Represents the smallest possible value of MPOS. This field is constant.
#### mrnm
Mate reference sequence name.
#### MRNMRegxExpr
Regular Expression object for MRNM.
#### MRNMRegxExprPattern
Regular expression pattern for MRNM.
#### OptionalFields
Optional fields.
#### pos
One-based leftmost position/coordinate of the aligned sequence.
#### POS_MaxValue
Represents the largest possible value of POS. This field is constant.
#### POS_MinValue
Represents the smallest possible value of POS. This field is constant.
#### qname
Query pair name if paired; or Query name if unpaired.
#### QNameIllegalCharacters
Regular expression pattern for QName.
#### RefEndPos
Gets one based alignment end position of reference sequence depending on CIGAR Value.
#### rname
Reference sequence name.
#### RNameRegxExpr
Regular Expression object for RName.
#### RNameRegxExprPattern
Regular expression pattern for RName.

