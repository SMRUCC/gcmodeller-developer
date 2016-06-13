---
title: XsvSparseFormatter
---

# XsvSparseFormatter
_namespace: [Bio.IO.Xsv](N-Bio.IO.Xsv.html)_

This class will write a sparse sequence to a character separated value file,
 with one line per sequence item. The sequence ID, the sequence count and 
 offset (if provided) will be written as a comment to a sequence start line.
 Multiple sparse sequences can be written with the sequence start line
 acting as delimiters.
 E.g. formatting with '#' as sequence prefix and ',' as character separator
 #0,100, A sparse sequence of length 100 with 2 items
 12,A
 29,T
 #3,10, A sparse sequence of length 10 at offset 3 with 1 item
 2,G
 #0,10, A sparse sequence of length 15 with no items

### Methods

#### #ctor
```csharp
Bio.IO.Xsv.XsvSparseFormatter.#ctor(System.Char,System.Char)
```
Creates an XsvSparseFormatter to format ISequences with one 
 line per sequence item.

|Parameter Name|Remarks|
|--------------|-------|
|separatorChar|Separator character to be used between sequence item 
            position and its symbol.|
|sequenceIDPrefixChar|The character to prefix the sequence start 
            line with.|


#### Format
```csharp
Bio.IO.Xsv.XsvSparseFormatter.Format(System.IO.Stream,System.Collections.Generic.IEnumerable{Bio.ISequence})
```
Writes a set of entries.

|Parameter Name|Remarks|
|--------------|-------|
|stream|Stream to write to.|
|sequences|The data to write.|


#### Write
```csharp
Bio.IO.Xsv.XsvSparseFormatter.Write(System.IO.StreamWriter,Bio.ISequence,System.Int64)
```
Writes an ISequence to the location specified by the writer, 
 after adding an offset value to the position.

|Parameter Name|Remarks|
|--------------|-------|
|writer|Stream writer|
|data|The sequence to format.|
|positionOffset|Adds this offset value to the item position within the sequence|




### Properties

#### Description
Gets the description of the sequence formatter being
 implemented. This is intended to give the
 developer some information of the formatter.
#### Name
Gets the name of the sequence formatter being
 implemented. This is intended to give the
 developer some information of the formatter type.
#### Separator
The character to separate the position and sequence item symbol on each line
#### SequenceIDPrefix
this prefix will be printed at the start of the line with 
 the offset, count and sequence ID. This is treated as the comment 
 character prefix in the underlying XsvTextReader.
#### SupportedFileTypes
Gives the supported file types.

