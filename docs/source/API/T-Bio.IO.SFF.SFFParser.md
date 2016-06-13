---
title: SFFParser
---

# SFFParser
_namespace: [Bio.IO.SFF](N-Bio.IO.SFF.html)_

This class parses the Standard Flowgram Format (SFF) as defined by
 http://www.ncbi.nlm.nih.gov/Traces/trace.cgi?cmd=show&f=formats&m=doc&s=format
 and returns in-memory ISequence objects with both sequence information and quality data in the Sanger format.
 SFF was designed by 454 Life Sciences (Roche), the Whitehead Institute for Biomedical Research and the Wellcome Trust Sanger Institute.

### Methods

#### C2BE
```csharp
Bio.IO.SFF.SFFParser.C2BE(System.UInt64)
```
Method to convert to BigEndian for a ulong

|Parameter Name|Remarks|
|--------------|-------|
|value|-|


#### Parse
```csharp
Bio.IO.SFF.SFFParser.Parse(System.IO.Stream)
```
Parses the sequences out of a stream.

|Parameter Name|Remarks|
|--------------|-------|
|stream|Stream to read from|

_returns: Set of sequences_

#### ParseHeader
```csharp
Bio.IO.SFF.SFFParser.ParseHeader(System.IO.BinaryReader)
```
Parses out the header from the file

|Parameter Name|Remarks|
|--------------|-------|
|reader|-|


#### ParseOne
```csharp
Bio.IO.SFF.SFFParser.ParseOne(Bio.IO.SFF.SFFParser.SffHeader,System.IO.BinaryReader)
```
Parses a single sequence from the file.

|Parameter Name|Remarks|
|--------------|-------|
|header|Parsed header|
|reader|Binary reader|

_returns: Sequence_



### Properties

#### Alphabet
The alphabet to use for sequences (automatically set if not supplied)
#### Description
Description of the parser
#### Name
Name of the parser
#### SupportedFileTypes
Supported file formats (extensions) for this parser

