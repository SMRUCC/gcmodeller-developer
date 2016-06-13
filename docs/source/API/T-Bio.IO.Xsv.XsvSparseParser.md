---
title: XsvSparseParser
---

# XsvSparseParser
_namespace: [Bio.IO.Xsv](N-Bio.IO.Xsv.html)_

Implements common methods for parsing one or more sparse sequences from 
 an XsvSparseReader. This reads sequence items from the reader and 
 returns a sparse sequence created for the items. Multiple sparse sequences
 are separated by a "comment" line that starts with the sequence prefix 
 character.
 
 This also returns the optional offset position of the sequence, if 
 present, to support aligned sequences such as in a Contig.
 
 This is an abstract class and extending classes will have to implement
 the GetSparseReader() method.

### Methods

#### #ctor
```csharp
Bio.IO.Xsv.XsvSparseParser.#ctor(Bio.IAlphabet,System.Char,System.Char)
```
Creates a Sparse parser with the given encoding and alphabet

|Parameter Name|Remarks|
|--------------|-------|
|alphabet|Alphabet for the sequence items|
|separatorChar|The separator.|
|sequenceIdPrefixchar|Sequence ID Prefix.|


#### Parse
```csharp
Bio.IO.Xsv.XsvSparseParser.Parse(System.IO.StreamReader)
```
Creates a text reader from the file name and calls Parse(TextReader reader).

|Parameter Name|Remarks|
|--------------|-------|
|reader|Stream to be parsed.|

_returns: A list of sparse sequences that were present in the file._

#### ParseOne
```csharp
Bio.IO.Xsv.XsvSparseParser.ParseOne(Bio.IO.Xsv.XsvSparseReader)
```
The common ParseOne method called for parsing sequences from Xsv files. 
 This assumes that that the first line has been read into the XsvSparseReader 
 (i.e. GoToNextLine() has been called). This adds the offset position present in 
 the sequence start line to each position value in the sequence item.
 e.g. the following returns a sparse sequence with ID 'Test sequence' of length 100 
 with A at position 32 (25+7) and G at position 57 (50+7).
 # 7, 100, Test sequence
 25,A
 50,G

|Parameter Name|Remarks|
|--------------|-------|
|sparseReader|The Xsv sparse reader that can read the sparse sequences.
            Flag to indicate whether the resulting sequence should be in readonly mode or not.
            If this flag is set to true then the resulting sequence's isReadOnly property 
            will be set to true, otherwise it will be set to false.
            |

_returns: The first sequence present starting from the 
            current position in the reader as a SparseSequence. The sparse sequence has the ID present in the 
            sequence start line, and its length equals the count present in that line. 
            Null if EOF has been reached. Throws an exception if the current position did 
            not have the sequence start line with the sequence prefix ID character.
            _



### Properties

#### Alphabet
The alphabet to use for parsed ISequence objects.
#### Description
Gets the description of the parser.
#### MetadataOffsetKey
Key used internally to store offset data in a sparse sequence
#### Name
Gets the name of the parser.
#### SupportedFileTypes
Gives the supported file types.

