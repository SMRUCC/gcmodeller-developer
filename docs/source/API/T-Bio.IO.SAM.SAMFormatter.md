---
title: SAMFormatter
---

# SAMFormatter
_namespace: [Bio.IO.SAM](N-Bio.IO.SAM.html)_

Writes a SequenceAlignmentMap to a particular location, usually a file. 
 The output is formatted according to the SAM file format specification 1.4. 
 A method is also provided for quickly accessing the content in string 
 form for applications that do not need to first write to file.
 Documentation for the latest SAM file format can be found at
 http://samtools.sourceforge.net/SAM1.pdf

### Methods

#### Format
```csharp
Bio.IO.SAM.SAMFormatter.Format(System.IO.Stream,System.Collections.Generic.IEnumerable{Bio.Algorithms.Alignment.ISequenceAlignment})
```
Write a collection of ISequenceAlignments to a file.

|Parameter Name|Remarks|
|--------------|-------|
|stream|The name of the file to write the formatted sequence alignments.|
|sequenceAlignments|The sequenceAlignments to write.|


#### WriteHeader
```csharp
Bio.IO.SAM.SAMFormatter.WriteHeader(System.IO.TextWriter,Bio.IO.SAM.SAMAlignmentHeader)
```
Writes specified SAMAlignedHeader to specified text writer.

|Parameter Name|Remarks|
|--------------|-------|
|writer|Text Writer|
|header|Header to write.|


#### WriteSAMAlignedSequence
```csharp
Bio.IO.SAM.SAMFormatter.WriteSAMAlignedSequence(System.IO.TextWriter,Bio.Algorithms.Alignment.IAlignedSequence)
```
Writes SAMAlignedSequence to specified text writer.

|Parameter Name|Remarks|
|--------------|-------|
|writer|Text writer.|
|alignedSequence|SAM aligned sequence to write|




### Properties

#### AlignedSequenceFormat
Holds the format string needed for writing aligned sequence.
#### Description
Gets the description of the sequence alignment formatter being
 implemented. This is intended to give the developer some 
 information of the formatter.
#### Name
Gets the name of the sequence alignment formatter being
 implemented. This is intended to give the developer some
 information of the formatter type.
#### OptionalFieldFormat
Holds the format string needed for writing optional fields of aligned sequence.
#### SupportedFileTypes
Gets the file extensions that the formatter implementation
 will support.

