---
title: PhylipParser
---

# PhylipParser
_namespace: [Bio.IO.Phylip](N-Bio.IO.Phylip.html)_

A PhylipParser reads from a source of text that is formatted according 
 to the PhylipParser flat file specification, and converts the data to 
 in-memory ISequenceAlignment objects.

### Methods

#### Parse
```csharp
Bio.IO.Phylip.PhylipParser.Parse(System.IO.Stream)
```
Parses a list of biological sequence alignment texts from a reader.

|Parameter Name|Remarks|
|--------------|-------|
|stream|A stream for a biological sequence alignment text.|

_returns: The list of parsed ISequenceAlignment objects._

#### ParseOne
```csharp
Bio.IO.Phylip.PhylipParser.ParseOne(System.IO.TextReader)
```
Parses a single biological sequence alignment text from a reader.

|Parameter Name|Remarks|
|--------------|-------|
|reader|A reader for a biological sequence alignment text.|

_returns: The parsed ISequenceAlignment object._

#### ReadNextLine
```csharp
Bio.IO.Phylip.PhylipParser.ReadNextLine(System.IO.TextReader)
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

