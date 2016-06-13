---
title: ParserExtensions
---

# ParserExtensions
_namespace: [Bio](N-Bio.html)_

Extensions to the IParser(T) to support Open/Close/Dispose semantics.

### Methods

#### Close``1
```csharp
Bio.ParserExtensions.Close``1(Bio.IO.IParser{``0})
```
Closes the parser.

|Parameter Name|Remarks|
|--------------|-------|
|parser|Parser|


#### Open``1
```csharp
Bio.ParserExtensions.Open``1(Bio.IO.IParser{``0},System.String)
```
Opens a sequence file using the parser.

|Parameter Name|Remarks|
|--------------|-------|
|parser|Parser|
|filename|File to open|

_returns: Disposable object to close the stream._

#### Parse``1
```csharp
Bio.ParserExtensions.Parse``1(Bio.IO.IParser{``0},System.String)
```
Parses the sequences from the given filename.

|Parameter Name|Remarks|
|--------------|-------|
|parser|Parser|
|fileName|Filename to open/close|

_returns: Set of parsed data elements._

#### ParseOne``1
```csharp
Bio.ParserExtensions.ParseOne``1(Bio.IO.IParser{``0},System.String)
```
Parses the sequences from the given filename.

|Parameter Name|Remarks|
|--------------|-------|
|parser|Parser|
|fileName|Filename to open/close|

_returns: Set of parsed data elements._




