---
title: FieldTextFileParser
---

# FieldTextFileParser
_namespace: [Bio.IO.Text](N-Bio.IO.Text.html)_

Field parser reads from a source of text (default tab-delimited)
 and converts the data to in-memory ISequence objects.
 Example, tab-delimited sequence file contains two columns:
 First column contain sequence id and second column contains the sequence.

### Methods

#### #ctor
```csharp
Bio.IO.Text.FieldTextFileParser.#ctor
```
Initialize instance of for Tab (default) parser class.

#### Parse
```csharp
Bio.IO.Text.FieldTextFileParser.Parse(System.IO.Stream)
```
Returns an IEnumerable of sequences in the stream being parsed.

|Parameter Name|Remarks|
|--------------|-------|
|stream|Stream to parse.|

_returns: Returns ISequence arrays._

#### ParseLine
```csharp
Bio.IO.Text.FieldTextFileParser.ParseLine(System.String)
```
Parses one line from the text file.

|Parameter Name|Remarks|
|--------------|-------|
|line|-|


#### ParseOne
```csharp
Bio.IO.Text.FieldTextFileParser.ParseOne(System.IO.Stream)
```
Parse a single sequence from the stream.

|Parameter Name|Remarks|
|--------------|-------|
|stream|Stream.|

_returns: Sequence_



### Properties

#### Alphabet
The alphabet to use for parsed ISequence objects. If this is not set, the alphabet will
 be determined based on the file being parsed.
#### ContainsHeader
Gets or sets value whether file contains header.
 By default first line is considered as header line.
#### Delimiter
Gets or sets value of delimiter. The delimiter defines how columns in file are separated.
#### Description
Gets the description of field parser.
 This is intended to give developers some information
 of the parser class. This property returns a simple description of what the
 FieldParser class achieves.
#### Name
Gets the type of Parser i.e field parser.
 This is intended to give developers some information
 about parser class.
#### SupportedFileTypes
Gets a comma separated values of the possible
 file extensions for a TAB file.

