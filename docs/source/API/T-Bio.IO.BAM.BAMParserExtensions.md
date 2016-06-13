---
title: BAMParserExtensions
---

# BAMParserExtensions
_namespace: [Bio.IO.BAM](N-Bio.IO.BAM.html)_

Parser extensions for the BAM parsers.

### Methods

#### GetBAMIndexFileName
```csharp
Bio.IO.BAM.BAMParserExtensions.GetBAMIndexFileName(System.String)
```
Attempts to find the name of an index file for the given BAM file name, throws an error if none is found.

|Parameter Name|Remarks|
|--------------|-------|
|fileName|The name of the BAM file.|

_returns: The name of the index file for the given BAM file._

#### Parse
```csharp
Bio.IO.BAM.BAMParserExtensions.Parse(Bio.IO.BAM.BAMParser,System.String)
```
Returns an iterator over a set of SAMAlignedSequences retrieved from a parsed BAM file.

|Parameter Name|Remarks|
|--------------|-------|
|parser|Parser|
|filename|Filename|

_returns: IEnumerable SAMAlignedSequence object._

#### ParseRange
```csharp
Bio.IO.BAM.BAMParserExtensions.ParseRange(Bio.IO.BAM.BAMParser,System.String,Bio.SequenceRange)
```
Parses specified BAM file using index file.

|Parameter Name|Remarks|
|--------------|-------|
|parser|BAM parser|
|fileName|BAM file name.|
|range|SequenceRange object which contains reference sequence name and start and end co-ordinates.|

_returns: SequenceAlignmentMap object which contains alignments for specified reference sequence and for specified range._




