---
title: BAMParser
---

# BAMParser
_namespace: [Bio.IO.BAM](N-Bio.IO.BAM.html)_

A BAMParser reads from a source of binary data that is formatted according to the BAM
 file specification, and converts the data to in-memory SequenceAlignmentMap object.
 Documentation for the latest BAM file format can be found at
 http://samtools.sourceforge.net/SAM1.pdf

### Methods

#### #ctor
```csharp
Bio.IO.BAM.BAMParser.#ctor
```
The default constructor which chooses the default encoding based on the alphabet.

#### Bio#IO#IParser{Bio#Algorithms#Alignment#ISequenceAlignment}#Parse
```csharp
Bio.IO.BAM.BAMParser.Bio#IO#IParser{Bio#Algorithms#Alignment#ISequenceAlignment}#Parse(System.IO.Stream)
```
Returns an iterator over a set of SAMAlignedSequences retrieved from a parsed BAM file.

|Parameter Name|Remarks|
|--------------|-------|
|stream|Stream to read|

_returns: IEnumerable SAMAlignedSequence object._

#### Bio#IO#IParser{Bio#Algorithms#Alignment#ISequenceAlignment}#ParseOne
```csharp
Bio.IO.BAM.BAMParser.Bio#IO#IParser{Bio#Algorithms#Alignment#ISequenceAlignment}#ParseOne(System.IO.Stream)
```
Returns a SequenceAlignmentMap object by parsing a BAM file.

|Parameter Name|Remarks|
|--------------|-------|
|stream|Stream to read.|

_returns: SequenceAlignmentMap object._

#### Decompress
```csharp
Bio.IO.BAM.BAMParser.Decompress(System.IO.Stream,System.IO.Stream)
```
Decompresses specified compressed stream to out stream.

|Parameter Name|Remarks|
|--------------|-------|
|compressedStream|Compressed stream to decompress.|
|outStream|Out stream.|


#### Dispose
```csharp
Bio.IO.BAM.BAMParser.Dispose(System.Boolean)
```
Disposes this object.

|Parameter Name|Remarks|
|--------------|-------|
|disposing|If true disposes resources held by this instance.|


#### GetAlignedSequence
```csharp
Bio.IO.BAM.BAMParser.GetAlignedSequence(System.Int32,System.Int32)
```
Returns an aligned sequence by parses the BAM file.

#### GetAlignment
```csharp
Bio.IO.BAM.BAMParser.GetAlignment(System.IO.Stream)
```
Returns SequenceAlignmentMap object by parsing specified BAM stream.

|Parameter Name|Remarks|
|--------------|-------|
|reader|-|


#### GetAlignmentMap
```csharp
Bio.IO.BAM.BAMParser.GetAlignmentMap(System.IO.Stream,Bio.IO.BAM.BAMIndexStorage,System.String,System.Nullable{System.Int32},System.Int32,System.Int32)
```
Returns the create sequence alignment map.

|Parameter Name|Remarks|
|--------------|-------|
|reader|-|
|bamIndexStorage|-|
|refSeqName|-|
|refSeqIndex|-|
|start|-|
|end|-|


#### GetHeader
```csharp
Bio.IO.BAM.BAMParser.GetHeader
```
Parses the BAM file and returns the Header.

#### GetIndexFromBAMStorage
```csharp
Bio.IO.BAM.BAMParser.GetIndexFromBAMStorage(System.IO.Stream)
```
Returns BAMIndex by parsing specified BAM stream.

|Parameter Name|Remarks|
|--------------|-------|
|stream|Stream to read.|


#### GetNextBlock
```csharp
Bio.IO.BAM.BAMParser.GetNextBlock
```
Gets next block by reading and decompressing the compressed block from compressed BAM file.

#### GetOptionalValue
```csharp
Bio.IO.BAM.BAMParser.GetOptionalValue(System.Char,System.Byte[],System.Int32@)
```
Gets optional value depending on the valuetype.

|Parameter Name|Remarks|
|--------------|-------|
|valueType|Value Type.|
|array|Byte array to read from.|
|startIndex|Start index of value in the array.|


#### GetSeqCharAsByte
```csharp
Bio.IO.BAM.BAMParser.GetSeqCharAsByte(System.Int32)
```
Gets equivalent sequence char for the specified encoded value.

|Parameter Name|Remarks|
|--------------|-------|
|encodedValue|Encoded value.|


#### GetStringLength
```csharp
Bio.IO.BAM.BAMParser.GetStringLength(System.Byte[],System.Int32)
```
Gets the length of the string in byte array.

|Parameter Name|Remarks|
|--------------|-------|
|array|Byte array which contains string.|
|startIndex|Start index of array from which string is stored.|


#### GetTempStream
```csharp
Bio.IO.BAM.BAMParser.GetTempStream(System.UInt32)
```
Gets the temp stream to store Decompressed blocks.
 If the specified capacity is with in the Maximum integer (32 bit int) limit then 
 a MemoryStream is created else a temp file is created to store Decompressed data.

|Parameter Name|Remarks|
|--------------|-------|
|capacity|Required capacity.|


#### IsCompressedBAMFile
```csharp
Bio.IO.BAM.BAMParser.IsCompressedBAMFile(System.Byte[])
```
Returns a boolean value indicating whether a BAM file is compressed or uncompressed.

|Parameter Name|Remarks|
|--------------|-------|
|array|Byte array containing first 4 bytes of a BAM file|

_returns: Returns true if the specified byte array indicates that the BAM file is compressed else returns false._

#### IsEOF
```csharp
Bio.IO.BAM.BAMParser.IsEOF
```
Returns a boolean indicating whether the reader is reached end of file or not.
_returns: Returns true if the end of the file has been reached._

#### IsUnCompressedBAMFile
```csharp
Bio.IO.BAM.BAMParser.IsUnCompressedBAMFile(System.Byte[])
```
Returns a boolean value indicating whether a BAM file is valid uncompressed BAM file or not.

|Parameter Name|Remarks|
|--------------|-------|
|array|Byte array containing first 4 bytes of a BAM file|

_returns: Returns true if the specified byte array indicates a valid uncompressed BAM file else returns false._

#### Parse
```csharp
Bio.IO.BAM.BAMParser.Parse(System.IO.Stream)
```
Returns an iterator over a set of SAMAlignedSequences retrieved from a parsed BAM file.

|Parameter Name|Remarks|
|--------------|-------|
|stream|Stream to read|

_returns: IEnumerable SAMAlignedSequence object._

#### ParseOne
```csharp
Bio.IO.BAM.BAMParser.ParseOne(System.IO.Stream)
```
Returns a SequenceAlignmentMap object by parsing a BAM file.

|Parameter Name|Remarks|
|--------------|-------|
|stream|Stream to read.|

_returns: SequenceAlignmentMap object._

#### ReadUnCompressedData
```csharp
Bio.IO.BAM.BAMParser.ReadUnCompressedData(System.Byte[],System.Int32,System.Int32)
```
Reads specified number of uncompressed bytes from BAM file to byte array

|Parameter Name|Remarks|
|--------------|-------|
|array|Byte array to copy.|
|offset|Offset of Byte array from which the data has to be copied.|
|count|Number of bytes to copy.|


#### ReduceChunks
```csharp
Bio.IO.BAM.BAMParser.ReduceChunks
```
Merges small chunks belongs to a bin which are in the same compressed block.
 This will reduce number of seek calls required.

#### SortAndMergeChunks
```csharp
Bio.IO.BAM.BAMParser.SortAndMergeChunks(System.Collections.Generic.IEnumerable{Bio.IO.BAM.Chunk})
```
Sorts and merges the overlapping chunks.

|Parameter Name|Remarks|
|--------------|-------|
|chunks|Chunks to sort and merge.|


#### ValidateReader
```csharp
Bio.IO.BAM.BAMParser.ValidateReader
```
Validates the BAM stream.



### Properties

#### Alphabet
The alphabet to use for sequences in parsed SequenceAlignmentMap objects.
 Always returns singleton instance of SAMDnaAlphabet.
#### BAMAlphabet
Symbols supported by BAM.
#### bamIndex
Holds the bam index object created from a BAM file.
#### createBamIndex
Flag to indicate to whether to create BAMIndex while parsing BAM file or not.
#### currentCompressedBlockStartPos
Holds the current position of the compressed BAM file stream.
 Used while creating BAMIndex objects from a BAM file and while parsing a BAM file using a BAM index file.
#### deCompressedStream
A temporary file stream to hold uncompressed blocks.
#### Description
Gets the description of the sequence alignment parser being
 implemented. This is intended to give the
 developer some information of the parser.
#### isCompressed
Flag to indicate whether the BAM file is compressed or not.
#### Name
Gets the name of the sequence alignment parser being
 implemented. This is intended to give the
 developer some information of the parser type.
#### readStream
Holds the BAM file stream.
#### refSeqLengths
Holds the length of the reference sequences.
#### refSeqNames
Holds the names of the reference sequence.
#### RefSequences
Reference sequences, used to resolve "=" symbol in the sequence data.
#### SupportedFileTypes
Gets the file extensions that the parser implementation
 will support.

