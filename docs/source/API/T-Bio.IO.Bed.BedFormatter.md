---
title: BedFormatter
---

# BedFormatter
_namespace: [Bio.IO.Bed](N-Bio.IO.Bed.html)_

Formats lists of ISequenceRange or SequenceRangeGroupings into a file
 formatted in the BED format.
 Info for the specification of this format can be found at:
 http://genome.ucsc.edu/FAQ/FAQformat

### Methods

#### Format
```csharp
Bio.IO.Bed.BedFormatter.Format(System.IO.Stream,Bio.SequenceRangeGrouping)
```
Writes out a grouping of ISequenceRange objects to a specified
 stream.

|Parameter Name|Remarks|
|--------------|-------|
|stream|The stream where the formatted data is to be written, it will be closed at the end.|
|rangeGroup|The range grouping to be formatted.|




### Properties

#### Description
A short description of the format
#### Name
The name of this format: BED
#### SupportedFileTypes
Known file extensions for the BED format

