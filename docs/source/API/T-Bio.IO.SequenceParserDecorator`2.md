---
title: SequenceParserDecorator`2
---

# SequenceParserDecorator`2
_namespace: [Bio.IO](N-Bio.IO.html)_

Parser decorator to convert IParser to ISequenceParser, this can be used to take
 specializations of IParser(T) and turn them into ISequenceParser (e.g. FastQ).

### Methods

#### #ctor
```csharp
Bio.IO.SequenceParserDecorator`2.#ctor(`0)
```
Constructor

|Parameter Name|Remarks|
|--------------|-------|
|innerParser|-|


#### Parse
```csharp
Bio.IO.SequenceParserDecorator`2.Parse(System.IO.Stream)
```
Parses a list of biological sequence texts from a given stream.

|Parameter Name|Remarks|
|--------------|-------|
|stream|The stream to pull the data from|

_returns: The collection of parsed ISequence objects._

#### ParseOne
```csharp
Bio.IO.SequenceParserDecorator`2.ParseOne(System.IO.Stream)
```
Parse a single sequence from the stream.

|Parameter Name|Remarks|
|--------------|-------|
|stream|Stream|

_returns: Sequence_



### Properties

#### Alphabet
Gets or sets the alphabet to use for parsed ISequence objects. If this is not set, the alphabet will
 be determined based on the file being parsed.
#### Description
Gets the description of the parser being
 implemented. This is intended to give the
 developer some information of the parser.
#### Name
Gets the name of the parser being implemented. 
 This is intended to give the developer name of the parser.
#### SupportedFileTypes
Gets the file extensions that the parser supports.
 If multiple extensions are supported then this property 
 will return a string containing all extensions with a ',' delimited.

