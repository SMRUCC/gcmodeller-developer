---
title: SequenceAlignmentParserExtensions
---

# SequenceAlignmentParserExtensions
_namespace: [Bio](N-Bio.html)_

Extensions to the ISequenceAlignmentParser to support Open/Close/Dispose semantics.

### Methods

#### Close
```csharp
Bio.SequenceAlignmentParserExtensions.Close(Bio.IO.ISequenceAlignmentParser)
```
Closes the parser.

|Parameter Name|Remarks|
|--------------|-------|
|parser|Parser|


#### Open
```csharp
Bio.SequenceAlignmentParserExtensions.Open(Bio.IO.ISequenceAlignmentParser,System.String)
```
Opens a sequence file using the parser.

|Parameter Name|Remarks|
|--------------|-------|
|parser|Parser|
|filename|File to open|

_returns: Disposable object to close the stream._

#### Parse
```csharp
Bio.SequenceAlignmentParserExtensions.Parse(Bio.IO.ISequenceAlignmentParser,System.String)
```
Parses the sequences from the given filename.

|Parameter Name|Remarks|
|--------------|-------|
|parser|Sequence Parser|
|fileName|Filename to open/close|

_returns: Set of parsed sequences._

#### ParseOne
```csharp
Bio.SequenceAlignmentParserExtensions.ParseOne(Bio.IO.ISequenceAlignmentParser,System.String)
```
Parses the sequences from the open file.

|Parameter Name|Remarks|
|--------------|-------|
|parser|Sequence Parser|
|filename|File to parse|

_returns: Set of parsed sequences._

#### ParseOne``1
```csharp
Bio.SequenceAlignmentParserExtensions.ParseOne``1(Bio.IO.ISequenceAlignmentParser,System.String)
```
Parses the sequences from the open file.

|Parameter Name|Remarks|
|--------------|-------|
|parser|Sequence Parser|
|filename|File to parse|

_returns: Set of parsed sequences._




