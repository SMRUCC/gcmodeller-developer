---
title: ParserFormatterExtensions`1
---

# ParserFormatterExtensions`1
_namespace: [Bio](N-Bio.html)_

Extensions to the parser/formatter framework to support Open/Close/Dispose semantics.

### Methods

#### Close
```csharp
Bio.ParserFormatterExtensions`1.Close(`0)
```
Closes the parser.

|Parameter Name|Remarks|
|--------------|-------|
|parser|Parser|


#### GetOpenStream
```csharp
Bio.ParserFormatterExtensions`1.GetOpenStream(`0,System.Boolean)
```
Parses the sequences from the open file.

|Parameter Name|Remarks|
|--------------|-------|
|parser|Sequence Parser|
|writable|True for a writable stream|

_returns: Set of parsed sequences._

#### Open
```csharp
Bio.ParserFormatterExtensions`1.Open(`0,System.String)
```
Opens a sequence file using the parser.

|Parameter Name|Remarks|
|--------------|-------|
|parser|Parser|
|filename|File to open|

_returns: Disposable object to close the stream._



### Properties

#### fileData
This associates some data to the given parser to hold the filename and filestream.

