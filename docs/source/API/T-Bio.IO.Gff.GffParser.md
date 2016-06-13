---
title: GffParser
---

# GffParser
_namespace: [Bio.IO.Gff](N-Bio.IO.Gff.html)_

A GffParser reads from a source of text that is formatted according to the GFF flat
 file specification, and converts the data to in-memory ISequence objects. For advanced
 users, the ability to select an encoding for the internal memory representation is
 provided. There is also a default encoding for each alphabet that may be encountered.
 Documentation for the latest GFF file format can be found at following location under
 Creative Commons License that is,
 Online content created and hosted by the Wellcome Trust Sanger Institute is,
 unless otherwise stated, licensed under a Creative Commons Attribution-NonCommercial-NoDerivs 2.5 License.
 http://www.sanger.ac.uk/Software/formats/GFF/GFF_Spec.shtml

### Methods

#### CopyMetadata
```csharp
Bio.IO.Gff.GffParser.CopyMetadata
```
Copy file-scope metadata to all the sequences in the list.

#### GetAlphabetType
```csharp
Bio.IO.Gff.GffParser.GetAlphabetType(System.String)
```
Maps the string to a particular Alphabet type and returns
 the instance of mapped Alphabet type.

|Parameter Name|Remarks|
|--------------|-------|
|type|The alphabet type.|

_returns: Returns the appropriate Alphabet type for the specified string._

#### Parse
```csharp
Bio.IO.Gff.GffParser.Parse(System.IO.Stream)
```
Parses a list of GFF sequences.
_returns: The list of parsed ISequence objects._

#### ParseFeatures
```csharp
Bio.IO.Gff.GffParser.ParseFeatures(System.IO.TextReader,System.String)
```
Parses the consecutive feature lines for one sequence.

|Parameter Name|Remarks|
|--------------|-------|
|reader|-|
|line|-|


#### ParseHeaders
```csharp
Bio.IO.Gff.GffParser.ParseHeaders(System.IO.TextReader)
```
Process the headers.

#### ParseOne
```csharp
Bio.IO.Gff.GffParser.ParseOne(System.IO.Stream)
```
Parse a single sequence - not supported due to the file format.

|Parameter Name|Remarks|
|--------------|-------|
|stream|Stream|

_returns: Sequence_



### Properties

#### Alphabet
The alphabet to use for parsed ISequence objects. If this is not set, an alphabet will
 be determined based on the file being parsed.
#### Description
Gets the description of GFF parser.
 This is intended to give developers some information
 of the formatter class. This property returns a simple description of what the
 GffParser class achieves.
#### Name
Gets the type of Parser i.e GFF.
 This is intended to give developers some information
 of the parser class.
#### SupportedFileTypes
Shows the supported types.

