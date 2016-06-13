---
title: WiggleFormatter
---

# WiggleFormatter
_namespace: [Bio.IO.Wiggle](N-Bio.IO.Wiggle.html)_

Writes a wiggle annotation format to a file or a stream.

### Methods

#### Format
```csharp
Bio.IO.Wiggle.WiggleFormatter.Format(System.IO.Stream,System.Collections.Generic.IEnumerable{Bio.IO.Wiggle.WiggleAnnotation})
```
Writes a set of entries.

|Parameter Name|Remarks|
|--------------|-------|
|stream|Stream to write to.|
|annotations|The data to write.|


#### WriteOne
```csharp
Bio.IO.Wiggle.WiggleFormatter.WriteOne(System.IO.StreamWriter,Bio.IO.Wiggle.WiggleAnnotation)
```
Writes a single data entry.

|Parameter Name|Remarks|
|--------------|-------|
|writer|Stream to write to.|
|annotation|The data to write.|




### Properties

#### Description
Gets a short description of this formatter.
#### Name
Gets the name of this formatter.
#### SupportedFileTypes
Gets the file extensions that the formatter will support.
 If multiple extensions are supported then this property 
 will return a string containing all extensions with a ',' delimited.

