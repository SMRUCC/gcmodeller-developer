---
title: NexusParser
---

# NexusParser
_namespace: [Bio.IO.Nexus](N-Bio.IO.Nexus.html)_

A NexusParser reads from a source of text that is formatted according 
 to the NexusParser flat file specification, and converts the data to 
 in-memory ISequenceAlignment objects. For advanced users, the ability 
 to select an encoding for the internal memory representation is provided. 
 There is also a default encoding for each alphabet that may be encountered.

### Methods

#### GetTokens
```csharp
Bio.IO.Nexus.NexusParser.GetTokens(System.String)
```
Split the line and return the tokens in the line

|Parameter Name|Remarks|
|--------------|-------|
|line|Line to be split|

_returns: Tokens in line_

#### Parse
```csharp
Bio.IO.Nexus.NexusParser.Parse(System.IO.Stream)
```
Parses a list of biological sequence alignment texts from a reader.

|Parameter Name|Remarks|
|--------------|-------|
|stream|A stream for a biological sequence alignment text.|

_returns: The list of parsed ISequenceAlignment objects._

#### ParseCharacterBlock
```csharp
Bio.IO.Nexus.NexusParser.ParseCharacterBlock(System.IO.TextReader,System.Collections.Generic.IList{System.String})
```
Parse the Sequence data in the block

|Parameter Name|Remarks|
|--------------|-------|
|reader|A reader for a biological sequence text.|
|IDs|List of sequence IDs|

_returns: parse sequence in alignment_

#### ParseHeader
```csharp
Bio.IO.Nexus.NexusParser.ParseHeader(System.IO.TextReader)
```
Parse Nexus Header

|Parameter Name|Remarks|
|--------------|-------|
|reader|A reader for a biological sequence text.|


#### ParseOne
```csharp
Bio.IO.Nexus.NexusParser.ParseOne(System.IO.TextReader)
```
Parses a single biological sequence alignment text from a reader.

|Parameter Name|Remarks|
|--------------|-------|
|reader|A reader for a biological sequence alignment text.|

_returns: The parsed ISequenceAlignment object._

#### ParseTaxaBlock
```csharp
Bio.IO.Nexus.NexusParser.ParseTaxaBlock(System.IO.TextReader)
```
Gets the list of sequence titles

|Parameter Name|Remarks|
|--------------|-------|
|reader|A reader for a biological sequence text.|

_returns: List of sequence IDs_

#### ReadNextLine
```csharp
Bio.IO.Nexus.NexusParser.ReadNextLine(System.IO.TextReader)
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

