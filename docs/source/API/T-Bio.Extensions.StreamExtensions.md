---
title: StreamExtensions
---

# StreamExtensions
_namespace: [Bio.Extensions](N-Bio.Extensions.html)_

Extensions for the Stream

### Methods

#### OpenRead
```csharp
Bio.Extensions.StreamExtensions.OpenRead(System.IO.Stream,System.Text.Encoding,System.Boolean,System.Int32,System.Boolean)
```
Opens the given stream for reading with a StreamReader.

|Parameter Name|Remarks|
|--------------|-------|
|stream|Stream|
|encoding|Encoding, defaults to UTF8|
|detectEncodingFromByteOrderMarks|-|
|bufferSize|Buffer size, defaults to 1k|
|leaveOpen|True to keep underlying stream open on disposal.|

_returns: StreamReader_

#### OpenWrite
```csharp
Bio.Extensions.StreamExtensions.OpenWrite(System.IO.Stream,System.Text.Encoding,System.Int32,System.Boolean)
```
Opens the given stream for writing with a StreamWriter.

|Parameter Name|Remarks|
|--------------|-------|
|stream|Stream|
|encoding|Encoding, defaults to UTF8|
|bufferSize|Buffer size, defaults to 1k|
|leaveOpen|True to keep underlying stream open on disposal.|

_returns: StreamWriter_




