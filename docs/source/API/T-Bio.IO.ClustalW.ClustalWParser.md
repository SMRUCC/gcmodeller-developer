---
title: ClustalWParser
---

# ClustalWParser
_namespace: [Bio.IO.ClustalW](N-Bio.IO.ClustalW.html)_

A ClustalWParser reads from a source of text that is formatted according to the ClustalW flat
 file specification, and converts the data to in-memory ISequenceAlignment objects.

### Methods

#### Parse
```csharp
Bio.IO.ClustalW.ClustalWParser.Parse(System.IO.Stream)
```
Parses a list of biological sequence alignment texts from a reader.

|Parameter Name|Remarks|
|--------------|-------|
|stream|A stream for a biological sequence alignment text, it will be closed at the end.|

_returns: The list of parsed ISequenceAlignment objects._

#### ParseOne
```csharp
Bio.IO.ClustalW.ClustalWParser.ParseOne(System.IO.StreamReader)
```
Parses a single biological sequence alignment text from a stream.

|Parameter Name|Remarks|
|--------------|-------|
|reader|Reader|

_returns: Sequence_

#### ReadNextLine
```csharp
Bio.IO.ClustalW.ClustalWParser.ReadNextLine(System.IO.TextReader)
```
Reads next line considering



### Properties

#### Alphabet
Gets or sets alphabet to use for sequences in parsed ISequenceAlignment objects.
#### Description
Gets the description of the sequence alignment parser being
 implemented. This is intended to give the
 developer some information of the parser.
#### line
Stores the last line read by the reader
#### Name
Gets the name of the sequence alignment parser being
 implemented. This is intended to give the
 developer some information of the parser type.
#### skipBlankLines
Indicates that the parser should skip any blank line while reading the stream.
#### SupportedFileTypes
Gets the file extensions that the parser implementation
 will support.

