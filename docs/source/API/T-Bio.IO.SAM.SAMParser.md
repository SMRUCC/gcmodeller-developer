---
title: SAMParser
---

# SAMParser
_namespace: [Bio.IO.SAM](N-Bio.IO.SAM.html)_

A SAMParser reads from a source of text that is formatted according to the SAM
 file specification (v1.4-r985), and converts the data to in-memory SequenceAlignmentMap object.
 For advanced users, the ability to select an encoding for the internal memory representation is
 provided. There is also a default encoding for each alphabet that may be encountered.
 Documentation for the latest SAM file format can be found at
 http://samtools.sourceforge.net/SAM1.pdf

### Methods

#### #ctor
```csharp
Bio.IO.SAM.SAMParser.#ctor
```
The default constructor which chooses the default encoding based on the alphabet.

#### Bio#IO#IParser{Bio#Algorithms#Alignment#ISequenceAlignment}#Parse
```csharp
Bio.IO.SAM.SAMParser.Bio#IO#IParser{Bio#Algorithms#Alignment#ISequenceAlignment}#Parse(System.IO.Stream)
```
Parses a list of sequence alignment texts from a stream.

|Parameter Name|Remarks|
|--------------|-------|
|stream|A stream for a sequence alignment text.|

_returns: The list of parsed ISequenceAlignment objects._

#### Parse
```csharp
Bio.IO.SAM.SAMParser.Parse(System.IO.Stream)
```
Parses a sequence alignment texts from a file.

|Parameter Name|Remarks|
|--------------|-------|
|stream|Text reader.|

_returns: SequenceAlignmentMap object._

#### ParseOne
```csharp
Bio.IO.SAM.SAMParser.ParseOne(System.IO.Stream)
```
Parses a sequence alignment texts from a stream.

|Parameter Name|Remarks|
|--------------|-------|
|stream|A stream for a sequence alignment text.|

_returns: The list of parsed ISequenceAlignment objects._

#### ParseOneWithSpecificFormat
```csharp
Bio.IO.SAM.SAMParser.ParseOneWithSpecificFormat(System.IO.TextReader)
```
Parses alignments in SAM format from a reader into a SequenceAlignmentMap object.

|Parameter Name|Remarks|
|--------------|-------|
|reader|A reader for a biological sequence alignment text.|

_returns: A new SequenceAlignmentMap instance containing parsed data._

#### ParseQualityNSequence
```csharp
Bio.IO.SAM.SAMParser.ParseQualityNSequence(Bio.IO.SAM.SAMAlignedSequence,Bio.IAlphabet,System.Byte[],System.Byte[],System.Boolean)
```
Parses sequence data and quality values and updates SAMAlignedSequence instance.

|Parameter Name|Remarks|
|--------------|-------|
|alignedSeq|SAM aligned Sequence.|
|alphabet|Alphabet of the sequence to be created.|
|sequencedata|Sequence data.|
|qualitydata|Quality values.|
|validate|Validation needed|


#### ParseSAMHeader
```csharp
Bio.IO.SAM.SAMParser.ParseSAMHeader(System.IO.TextReader)
```
Parses SAM alignment header from specified text reader.

|Parameter Name|Remarks|
|--------------|-------|
|reader|Text reader.|


#### ParseSequence
```csharp
Bio.IO.SAM.SAMParser.ParseSequence(System.String,Bio.IAlphabet)
```
Parse a single sequencer.

|Parameter Name|Remarks|
|--------------|-------|
|bioText|sequence alignment text.|
|alphabet|Alphabet of the sequences.|


#### ReadNextLine
```csharp
Bio.IO.SAM.SAMParser.ReadNextLine(System.IO.TextReader)
```
Reads next line considering
_returns: The read line._



### Properties

#### Alphabet
The alphabet to use for sequences in parsed SequenceAlignmentMap objects.
 Always returns singleton instance of SAMDNAAlpabet.
#### AsteriskAsByte
An asterisk encoded as a byte
#### ColonDelim
Constant for colon delimiter.
#### Description
Gets the description of the sequence alignment parser being
 implemented. This is intended to give the
 developer some information of the parser.
#### HeaderLinePattern
Constant to hold SAM alignment header line pattern.
#### Name
Gets the name of the sequence alignment parser being
 implemented. This is intended to give the
 developer some information of the parser type.
#### OptionalFieldLinePattern
Constant to hold SAM optional filed line pattern.
#### OptionalFieldRegex
Holds optional field regular expression object.
#### QualityFormatType
Holds the qualitative value type.
#### RefSequences
Reference sequences, used to resolve "=" symbol in the sequence data.
#### SupportedFileTypes
Gets the file extensions that the parser implementation
 will support.
#### TabDelim
Constant for tab and space delimiter.

