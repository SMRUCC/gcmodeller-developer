---
title: WiggleParser
---

# WiggleParser
_namespace: [Bio.IO.Wiggle](N-Bio.IO.Wiggle.html)_

Implementation of wiggle parser with support for fixed/variable step formats.
 BED Wiggle is not supported in this implementation as its obsolete.

### Methods

#### ExtractMetadata
```csharp
Bio.IO.Wiggle.WiggleParser.ExtractMetadata(System.String)
```
Reads the track line and converts to key value pairs.

|Parameter Name|Remarks|
|--------------|-------|
|trackLine|Track line.|

_returns: Track line data in key-value format._

#### Parse
```csharp
Bio.IO.Wiggle.WiggleParser.Parse(System.IO.StreamReader)
```
Parse a wiggle annotation from a stream reader.

|Parameter Name|Remarks|
|--------------|-------|
|reader|Stream to parse.|

_returns: WiggleAnnotation object._

#### ParseHeader
```csharp
Bio.IO.Wiggle.WiggleParser.ParseHeader(System.IO.StreamReader)
```
Parse wiggle header including track line and metadata.

|Parameter Name|Remarks|
|--------------|-------|
|reader|Stream reader to parse.|

_returns: Wiggle annotation object initialized with data from the header._

#### ParseOne
```csharp
Bio.IO.Wiggle.WiggleParser.ParseOne(System.IO.Stream)
```
Return the single annotation from the stream.

|Parameter Name|Remarks|
|--------------|-------|
|stream|Stream|

_returns: WiggleAnnotation_



### Properties

#### Description
Gets a short description of this parser.
#### Name
Gets the name of this parser.
#### SupportedFileTypes
Gets the known file extensions for Wiggle files.

