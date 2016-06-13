---
title: Ab1Parser
---

# Ab1Parser
_namespace: [Bio.IO.AppliedBiosystems](N-Bio.IO.AppliedBiosystems.html)_

Parses an applied biosystems data file format as defined in:
 http://www6.appliedbiosystems.com/support/software_community/ABIF_File_Format.pdf

### Methods

#### #ctor
```csharp
Bio.IO.AppliedBiosystems.Ab1Parser.#ctor
```
Default constructor.

#### Parse
```csharp
Bio.IO.AppliedBiosystems.Ab1Parser.Parse(System.IO.BinaryReader,Bio.IAlphabet)
```
Parsers the files binary content into a abi parser context using
 the specified alphabet.

|Parameter Name|Remarks|
|--------------|-------|
|reader|-|
|alphabet|-|


#### ParseOne
```csharp
Bio.IO.AppliedBiosystems.Ab1Parser.ParseOne(System.IO.Stream)
```
Parse a single sequence from the stream.

|Parameter Name|Remarks|
|--------------|-------|
|stream|Stream|

_returns: Sequence_



### Properties

#### Alphabet
Alphabet
#### Description
Description.
#### Name
Name.
#### SupportedFileTypes
Supported file types.

