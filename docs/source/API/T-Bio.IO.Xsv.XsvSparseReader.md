---
title: XsvSparseReader
---

# XsvSparseReader
_namespace: [Bio.IO.Xsv](N-Bio.IO.Xsv.html)_

This is used to read a sparse sequences from a text reader available as 
 character separated values in a line. There is one sequence item per line and 
 each record has two fields: position (int) and sequence item symbol (char).
 A comment line should be the first line for the reader and it contains
 the following fields separated by the separator character:
 1. the starting offset (in case this is an aligned sequence, 0 by default),
 2. the count of the sequence, and 
 3. the sequence ID string (newlines removed).
 e.g. reader for sparse sequence source with '#' as sequence ID prefix and ',' as separator 
 would read the following file contents:
 
 #0,100,A sparse sequence with 5 items
 12,A
 29,T
 56,G
 85,A
 32,C

### Methods

#### #ctor
```csharp
Bio.IO.Xsv.XsvSparseReader.#ctor(System.IO.TextReader,System.Char,System.Char)
```
Creates a reader for a sparse sequence that has sequence items as 
 character separated values, one per line.

|Parameter Name|Remarks|
|--------------|-------|
|reader|The text reader with the contents of the sparse sequence|
|separator|The character that separates the sequence item position from its symbol. 
            This is also used to separate the offset, count, id in the sequence comment line.|
|sequenceIDPrefix|The character used to prefix the sequence comment line that 
            contains the offset, count, id in the sequence. this is used as a comment prefix character
            in the underlying XsvTextReader.|


#### GetSequenceCount
```csharp
Bio.IO.Xsv.XsvSparseReader.GetSequenceCount
```
If the current line is the sequence start line it returns the sequence count field.
 This throws an exception if the current line is not prefixed by the sequence id prefix,
 or if the sequence count is not present as an integer in the second character separated field.
_returns: The sequence count integer for this sparse sequence_

#### GetSequenceId
```csharp
Bio.IO.Xsv.XsvSparseReader.GetSequenceId
```
If the current line is the sequence start line it returns the sequence ID field in it.
 This throws an exception if the current line is not prefixed by the sequence id prefix,
 or if the sequence id is not present as the third character separated field.
_returns: The sequence ID string for this sparse sequence_

#### GetSequenceOffset
```csharp
Bio.IO.Xsv.XsvSparseReader.GetSequenceOffset
```
If the current line is the sequence start line it returns the sequence offset field.
 This thows an exception if the current line is not prefixed by the sequence id prefix,
 or if the sequence offset is not present as an integer in the first character separated field.
_returns: The sequence offset integer for this sparse sequence_



### Properties

#### CommentPrefixes
Do not allow changing CommentPrefix since it is set by the constructor 
 as the sequenceIDPrefix.
#### SkipCommentLines
Do not allow changing IgnoreComment since comments are required to 
 be enabled to set sequence I.

