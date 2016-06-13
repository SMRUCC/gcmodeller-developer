---
title: BedParser
---

# BedParser
_namespace: [Bio.IO.Bed](N-Bio.IO.Bed.html)_

Parses ISequenceRange objects that are formatted according to the BED
 format. This is a format of tab delimited text where the each line
 represents one range and each defines an ID, start and stop index.
 Info for the specification of this format can be found at:
 http://genome.ucsc.edu/FAQ/FAQformat
 In this format indices start their count from zero. The chromosome start
 index is inclusive and the chromosome end index is exclusive.
 There are three required fields in each line as described above. There
 are also 9 option fields. These are: name, score, strand, thickStartm
 thickEnd, itemRgb, blockCount, blockSizes, and blockStarts.
 This parser does not support the bigBED format.

### Methods

#### ParseRange
```csharp
Bio.IO.Bed.BedParser.ParseRange(System.IO.Stream)
```
Parse a set of ISequenceRange objects from a stream.

|Parameter Name|Remarks|
|--------------|-------|
|stream|The stream from which the sequence range is to be parsed.|

_returns: The list of sequence ranges._

#### ParseRangeGrouping
```csharp
Bio.IO.Bed.BedParser.ParseRangeGrouping(System.IO.Stream)
```
Parse a set of ISequenceRange objects into a SequenceRange
 grouping from a stream.

|Parameter Name|Remarks|
|--------------|-------|
|stream|The stream from which the sequence range is to be parsed.|

_returns: The sequence range groups._



### Properties

#### Description
A short description of the BED parser
#### Name
The name of this parser: BED
#### SupportedFileTypes
Known file extensions for BED files

