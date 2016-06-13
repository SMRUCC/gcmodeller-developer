---
title: SequenceParsers
---

# SequenceParsers
_namespace: [Bio.IO](N-Bio.IO.html)_

SequenceParsers class is an abstraction class which provides instances
 and lists of all Parsers currently supported by Bio.

### Methods

#### #cctor
```csharp
Bio.IO.SequenceParsers.#cctor
```
Initializes static members of the SequenceParsers class.

#### FindParserByFileName
```csharp
Bio.IO.SequenceParsers.FindParserByFileName(System.String)
```
Finds a suitable parser that supports the specified file, opens the file and returns the parser.

|Parameter Name|Remarks|
|--------------|-------|
|fileName|File name for which the parser is required.|

_returns: If found returns the open parser as ISequenceParser else returns null._

#### FindParserByName
```csharp
Bio.IO.SequenceParsers.FindParserByName(System.String,System.String)
```
Returns parser which supports the specified file.

|Parameter Name|Remarks|
|--------------|-------|
|fileName|File name for which the parser is required.|
|parserName|Name of the parser to use.|

_returns: If found returns the open parser as ISequenceParser else returns null._

#### GetSequenceParsers
```csharp
Bio.IO.SequenceParsers.GetSequenceParsers
```
Gets all registered parsers in core folder and addins (optional) folders.
_returns: List of registered parsers._

#### IsFasta
```csharp
Bio.IO.SequenceParsers.IsFasta(System.String)
```
Identifies if a file extension is a
 valid extension for FASTA formats.
_returns: 
            True  : if it is a valid fasta file extension.
            False : if it is a in-valid fasta file extension.
            _

#### IsFastQ
```csharp
Bio.IO.SequenceParsers.IsFastQ(System.String)
```
Identifies if a file extension is a
 valid extension for FastQ formats.
_returns: 
            True  : if it is a valid fastq file extension.
            False : if it is a in-valid fastq file extension.
            _

#### IsGenBank
```csharp
Bio.IO.SequenceParsers.IsGenBank(System.String)
```
Identifies if a file extension is a
 valid extension for GenBank formats.
_returns: 
            True  : if it is a valid GenBank file extension.
            False : if it is a in-valid GenBank file extension.
            _



### Properties

#### All
Gets the list of all parsers which is supported by the framework.
#### allParsers
List of all supported sequence parsers.
#### fasta
Gets an instance of FastaParser class which is capable of
 parsing FASTA format files.
#### fastq
Gets an instance of FastQParser class which is capable of
 parsing FASTQ format files.
#### genBank
Gets an instance of GenBankParser class which is capable of
 parsing GenBank format files.
#### gff
Gets an instance of GffParser class which is capable of
 parsing GFF format files.

