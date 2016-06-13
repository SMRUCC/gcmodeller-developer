---
title: SAMAlignedSequence
---

# SAMAlignedSequence
_namespace: [Bio.IO.SAM](N-Bio.IO.SAM.html)_

Class to hold Reads or aligned sequence or query sequence in SAM Alignment.

### Methods

#### #ctor
```csharp
Bio.IO.SAM.SAMAlignedSequence.#ctor(Bio.IO.SAM.SAMAlignedSequenceHeader)
```
Creates new instance of SAMAlignedSequence with specified SAMAlignedSequenceHeader.

|Parameter Name|Remarks|
|--------------|-------|
|seqHeader|-|


#### GetEncodedQualityScores
```csharp
Bio.IO.SAM.SAMAlignedSequence.GetEncodedQualityScores
```
Gets encoded quality scores.

#### GetQualityScores
```csharp
Bio.IO.SAM.SAMAlignedSequence.GetQualityScores
```
Gets Phred base quality scores.

#### SetPreValidatedCIGAR
```csharp
Bio.IO.SAM.SAMAlignedSequence.SetPreValidatedCIGAR(System.String)
```
Set a pre-validated extended cigar string, the alignment length and bin are still calculated

|Parameter Name|Remarks|
|--------------|-------|
|value|-|


#### SetPreValidatedMRNM
```csharp
Bio.IO.SAM.SAMAlignedSequence.SetPreValidatedMRNM(System.String)
```
Set the mate reference sequence name assuming the value is already valid.

|Parameter Name|Remarks|
|--------------|-------|
|item|-|


#### SetPreValidatedRName
```csharp
Bio.IO.SAM.SAMAlignedSequence.SetPreValidatedRName(System.String)
```
Sets the RName using a name that has already been validated as valid, and so does not need to be checked
 against the regular expression.

|Parameter Name|Remarks|
|--------------|-------|
|name|-|




### Properties

#### Bin
Gets bin depending on POS and CIGAR values.
#### CIGAR
Extended CIGAR string.
#### Flag
SAM flags.
 @"T:Bio.IO.SAM.SAMFlags"
#### IsDummyRead
Is this read a special dummy read? 
 
 These read types are a special type in later BAM file formats that are designed to hold
 annotation data. They are identified as having SEQ set to *, FLAG bits 0x100 and 0x200 set
 (secondary and filtered), and a CT tag.
#### ISize
Inferred insert size.
#### MapQ
Mapping quality (phred-scaled posterior probability that the 
 mapping position of this read is incorrect).
#### metadata
Metadata of this aligned sequence.
 SAMAlignedSequenceHeader is stored with the key "SAMAlignedSequenceHeader".
#### MPos
One-based leftmost mate position of the clipped sequence.
#### MRNM
Mate reference sequence name.
#### OptionalFields
Optional fields.
#### Pos
One-based leftmost position/coordinate of the clipped sequence.
#### QName
Query pair name if paired; or Query name if unpaired.
#### QuerySequence
Gets or sets read/query/aligned sequence.
#### RefEndPos
Gets one based alignment end position of reference sequence depending on CIGAR Value.
#### RName
Reference sequence name.
#### seqHeader
SAM aligned sequence header.
#### sequences
Always returns QuerySequence in a list.

