---
title: SequenceFormatters
---

# SequenceFormatters
_namespace: [Bio.IO](N-Bio.IO.html)_

SequenceFormatter class is an abstraction class which provides instances
 and lists of all Formatter currently supported by Bio.

### Methods

#### #cctor
```csharp
Bio.IO.SequenceFormatters.#cctor
```
Initializes static members of the SequenceFormatters class.

#### FindFormatterByFileName
```csharp
Bio.IO.SequenceFormatters.FindFormatterByFileName(System.String)
```
Returns formatter which supports the specified file.

|Parameter Name|Remarks|
|--------------|-------|
|fileName|File name for which the formatter is required.|

_returns: If found returns the formatter as ISequenceFormatter else returns null._

#### FindFormatterByName
```csharp
Bio.IO.SequenceFormatters.FindFormatterByName(System.String,System.String)
```
Returns parser which supports the specified file.

|Parameter Name|Remarks|
|--------------|-------|
|fileName|File name for which the parser is required.|
|formatterName|Name of the formatter to use.|

_returns: If found returns the formatter as ISequenceFormatter else returns null._

#### GetSequenceFormatters
```csharp
Bio.IO.SequenceFormatters.GetSequenceFormatters
```
Gets all registered formatters in core folder and addins (optional) folders.
_returns: List of registered formatters._

#### IsFasta
```csharp
Bio.IO.SequenceFormatters.IsFasta(System.String)
```
Identifies if a file extension is a
 valid extension for FASTA formats.
_returns: 
            True  : if it is a valid fasta file extension.
            False : if it is a in-valid fasta file extension.
            _

#### IsFastQ
```csharp
Bio.IO.SequenceFormatters.IsFastQ(System.String)
```
Identifies if a file extension is a
 valid extension for FastQ formats.
_returns: 
            True  : if it is a valid fastq file extension.
            False : if it is a in-valid fastq file extension.
            _

#### IsGenBank
```csharp
Bio.IO.SequenceFormatters.IsGenBank(System.String)
```
Identifies if a file extension is a
 valid extension for GenBnak formats.
_returns: 
            True  : if it is a valid GenBank file extension.
            False : if it is a in-valid GenBank file extension.
            _



### Properties

#### All
Gets the list of all formatters which is supported by the framework.
#### allFormatters
List of all supported sequence formatters.
#### fasta
Gets an instance of FastaFormatter class which is capable of
 saving a ISequence according to the FASTA file format.
#### fastq
Gets an instance of FastQFormatter class which is capable of
 saving a IQualitativeSequence according to the FASTQ file format.
#### genBank
Gets an instance of GenBankFormatter class which is capable of
 saving a ISequence which contains the metadata of GenBank according to the GenBank file format.
#### gff
Gets an instance of GffFormatter class which is capable of
 saving a ISequence which contains the metadata of gff according to the GFF file format.

