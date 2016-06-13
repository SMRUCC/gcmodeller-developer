---
title: FastAParser
---

# FastAParser
_namespace: [Bio.IO.FastA](N-Bio.IO.FastA.html)_

A FastaParser reads from a source of text that is formatted according to the FASTA flat
 file specification and converts the data to in-memory ISequence objects. For advanced
 users, the ability to select an encoding for the internal memory representation is
 provided. There is also a default encoding for each alphabet that may be encountered.
 Documentation for the latest FastA file format can be found at
 http://www.ncbi.nlm.nih.gov/blast/fasta.shtml .

### Methods

#### Parse
```csharp
Bio.IO.FastA.FastAParser.Parse(System.IO.Stream)
```
Returns an IEnumerable of sequences in the stream being parsed.

|Parameter Name|Remarks|
|--------------|-------|
|stream|Stream to parse.|

_returns: Returns ISequence arrays._

#### ParseOne
```csharp
Bio.IO.FastA.FastAParser.ParseOne(System.IO.TextReader,System.Byte[])
```
Returns an IEnumerable of sequences in the stream being parsed.

|Parameter Name|Remarks|
|--------------|-------|
|reader|Stream to parse.|
|buffer|Buffer to use.|

_returns: Returns a Sequence._



### Properties

#### Alphabet
Gets or sets the alphabet to use for parsed ISequence objects. If this is not set, the alphabet will
 be determined based on the file being parsed.
#### Description
Gets the description of the parser.
 This is intended to give developers some information 
 of the parser class. This property returns a simple description of what this
 class achieves.
#### Name
Gets the type of parser.
 This is intended to give developers name of the parser.
#### SupportedFileTypes
Gets a comma separated values of the possible FastA
 file extensions.

