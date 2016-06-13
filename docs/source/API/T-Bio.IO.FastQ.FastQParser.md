---
title: FastQParser
---

# FastQParser
_namespace: [Bio.IO.FastQ](N-Bio.IO.FastQ.html)_

A FastQParser reads from a source of text that is formatted according to the FASTQ
 file specification and converts the data to in-memory QualitativeSequence objects.

### Methods

#### #ctor
```csharp
Bio.IO.FastQ.FastQParser.#ctor
```
Initializes a new instance of the FastQParser class.

#### Parse
```csharp
Bio.IO.FastQ.FastQParser.Parse(System.IO.Stream)
```
Gets the IEnumerable of QualitativeSequences from the steam being parsed.

|Parameter Name|Remarks|
|--------------|-------|
|stream|Stream to be parsed.|

_returns: Returns the QualitativeSequences._

#### ParseOne
```csharp
Bio.IO.FastQ.FastQParser.ParseOne(System.IO.StreamReader,Bio.FastQFormatType)
```
Returns a single QualitativeSequence from the FASTQ data.

|Parameter Name|Remarks|
|--------------|-------|
|reader|Reader to be parsed.|
|formatType|FASTQ format type.|

_returns: Returns a QualitativeSequence._

#### ReadNextLine
```csharp
Bio.IO.FastQ.FastQParser.ReadNextLine(System.IO.TextReader,System.Boolean)
```
Gets the next available line from the specified stream reader.

|Parameter Name|Remarks|
|--------------|-------|
|reader|Stream reader.|
|skipBlankLine|
                Flag to skip blank lines. If true this method returns
                first non blank line available from the current position, else returns next available line.
            |




### Properties

#### Alphabet
Gets or sets the alphabet to use for parsed ISequence objects. If this is not set, the alphabet will
 be determined based on the file being parsed.
#### Description
Gets the description of the parser.
 This is intended to give developers some information
 of the parser class. This property returns a simple description of what this
 class achieves.
#### FormatType
Gets or sets the format type to be used.
 The FastQFormatType to be used for parsed QualitativeSequence objects.
 Default value is Illumina_v1_8
#### Name
Gets the type of parser.
 This is intended to give developers name of the parser.
#### SupportedFileTypes
Gets a comma separated values of the possible FastQ
 file extensions.

