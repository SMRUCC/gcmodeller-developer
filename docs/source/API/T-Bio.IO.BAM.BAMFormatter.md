---
title: BAMFormatter
---

# BAMFormatter
_namespace: [Bio.IO.BAM](N-Bio.IO.BAM.html)_

Writes a SequenceAlignmentMap to a particular location, usually a file. 
 The output is formatted according to the BAM file format. 
 Documentation for the latest BAM file format can be found at
 http://samtools.sourceforge.net/SAM1.pdf

### Methods

#### CompressBAMFile
```csharp
Bio.IO.BAM.BAMFormatter.CompressBAMFile(System.IO.Stream,System.IO.Stream)
```
Compress the specified stream (reader) and writes to the specified stream (writer).

|Parameter Name|Remarks|
|--------------|-------|
|reader|Stream to read from.|
|writer|Stream to write.|


#### CreateBAMIndexFile
```csharp
Bio.IO.BAM.BAMFormatter.CreateBAMIndexFile(System.IO.Stream,Bio.IO.BAM.BAMIndexStorage)
```
Creates BAMIndex object from the specified BAM file and writes to specified BAMIndex file.

|Parameter Name|Remarks|
|--------------|-------|
|compressedBAMStream|-|
|indexStorage|-|


#### Format
```csharp
Bio.IO.BAM.BAMFormatter.Format(System.IO.Stream,System.Collections.Generic.IEnumerable{Bio.Algorithms.Alignment.ISequenceAlignment})
```
Write a collection of ISequenceAlignments to a file.

|Parameter Name|Remarks|
|--------------|-------|
|stream|The name of the file to write the formatted sequence alignments.|
|sequenceAlignments|The sequenceAlignments to write.|


#### GetBGZFStructure
```csharp
Bio.IO.BAM.BAMFormatter.GetBGZFStructure(System.IO.Stream)
```
Gets BGZF structure from the GZipStream compression.

|Parameter Name|Remarks|
|--------------|-------|
|compressedStream|BAM file which is compressed according to BGZF compression.|


#### GetEncodedCIGAR
```csharp
Bio.IO.BAM.BAMFormatter.GetEncodedCIGAR(System.String)
```
Gets encoded CIGAR value.

|Parameter Name|Remarks|
|--------------|-------|
|cigar|CIGAR|


#### GetEncodedSequence
```csharp
Bio.IO.BAM.BAMFormatter.GetEncodedSequence(Bio.IO.SAM.SAMAlignedSequence)
```
Gets encoded sequence according to the BAM specification.

|Parameter Name|Remarks|
|--------------|-------|
|alignedSeq|-|


#### GetEOFBlock
```csharp
Bio.IO.BAM.BAMFormatter.GetEOFBlock
```
Gets empty block.

#### GetOptionalFieldIntValueSize
```csharp
Bio.IO.BAM.BAMFormatter.GetOptionalFieldIntValueSize(System.String)
```
Returns,
 1 if the int value can be held in an unsinged byte.
 -1 if the int value can be held in a singed byte.
 2 if the int value can be held in an unint16 (ushort).
 -2 if the int value can be held in an int16 (short).
 4 if the int value can be held in an uint32.
 -4 if the int value can be held in an int32.
 0 if the specified value can't parsed by an uint.

|Parameter Name|Remarks|
|--------------|-------|
|value|String representing int value.|


#### GetQualityValue
```csharp
Bio.IO.BAM.BAMFormatter.GetQualityValue(Bio.ISequence)
```
Gets quality values from specified sequence.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|Sequence object.|


#### WriteAlignedSequence
```csharp
Bio.IO.BAM.BAMFormatter.WriteAlignedSequence(Bio.IO.SAM.SAMAlignedSequence,System.IO.Stream)
```
Writes SAMAlignedSequence to specified stream.

|Parameter Name|Remarks|
|--------------|-------|
|alignedSeq|SAMAlignedSequence object.|
|writer|Stream to write.|


#### WriteHeader
```csharp
Bio.IO.BAM.BAMFormatter.WriteHeader(Bio.IO.SAM.SAMAlignmentHeader,System.IO.Stream)
```
Writes BAM header to the specified stream in BAM format.

|Parameter Name|Remarks|
|--------------|-------|
|header|SAMAlignmentHeader object|
|writer|Stream to write.|


#### WriteSequenceAlignment
```csharp
Bio.IO.BAM.BAMFormatter.WriteSequenceAlignment(Bio.Algorithms.Alignment.ISequenceAlignment,System.IO.Stream,Bio.IO.BAM.BAMIndexStorage)
```
Writes sequence alignment to specified stream.

|Parameter Name|Remarks|
|--------------|-------|
|sequenceAlignment|Sequence alignment object|
|writer|Stream to write.|
|indexStorage|BAMIndex file.|


#### WriteUncompressed
```csharp
Bio.IO.BAM.BAMFormatter.WriteUncompressed(Bio.IO.SAM.SequenceAlignmentMap,System.IO.Stream,System.Boolean)
```
Writes specified sequence alignment to stream.
 The output is formatted according to the BAM structure.

|Parameter Name|Remarks|
|--------------|-------|
|sequenceAlignmentMap|SequenceAlignmentMap object.|
|writer|Stream to write.|
|createSortedFile|If this flag is true output file will be sorted.|


#### WriteUncompressedSortedBAM
```csharp
Bio.IO.BAM.BAMFormatter.WriteUncompressedSortedBAM(Bio.IO.SAM.SequenceAlignmentMap,System.IO.Stream)
```
Writes specified sequence alignment to stream according to the specified sorted order.
 The output is formatted according to the BAM structure.

|Parameter Name|Remarks|
|--------------|-------|
|sequenceAlignmentMap|SequenceAlignmentMap object.|
|writer|Stream to write.|




### Properties

#### CreateIndexFile
Gets or sets the value indicating that whether to create index file or not.
#### CreateSortedBAMFile
Gets or sets the value indicating that whether the output file to be sorted or not.
#### DelimComma
Comma Delimiter.
#### Description
Gets the description of the sequence alignment formatter being
 implemented. This is intended to give the developer some 
 information of the formatter.
#### MaxBlockSize
Maximum Block size used while compressing the BAM file.
 64K = 65536 bytes.
#### Name
Gets the name of the sequence alignment formatter being
 implemented. This is intended to give the developer some
 information of the formatter type.
#### SortType
Gets or sets type of sort needed.
#### SupportedFileTypes
Gets the file extensions that the formatter implementation
 will support.

