---
title: FastQFormatter
---

# FastQFormatter
_namespace: [Bio.IO.FastQ](N-Bio.IO.FastQ.html)_

Writes a QualitativeSequence to a file. The output is formatted
 according to the FastQ file format.

### Methods

#### #ctor
```csharp
Bio.IO.FastQ.FastQFormatter.#ctor
```
Initializes a new instance of the FastQFormatter class.

#### Bio#IO#IFormatter{Bio#ISequence}#Format
```csharp
Bio.IO.FastQ.FastQFormatter.Bio#IO#IFormatter{Bio#ISequence}#Format(System.IO.Stream,Bio.ISequence)
```
Writes the specified QualitativeSequence in FastQ format to the file.

|Parameter Name|Remarks|
|--------------|-------|
|stream|Stream|
|data|QualitativeSequence to write.|


#### Format
```csharp
Bio.IO.FastQ.FastQFormatter.Format(System.IO.StreamWriter,Bio.IQualitativeSequence)
```
Write out a sequence to the given stream writer.

|Parameter Name|Remarks|
|--------------|-------|
|writer|-|
|qualitativeSequence|-|




### Properties

#### AutoFlush
Gets or sets a value indicating whether the FastQFormatter will flush its buffer 
 to the underlying stream after every call to Write method.
#### Description
Gets the description of this formatter.
 This is intended to give developers some information 
 of the formatter class. This property returns a simple description of what this
 class achieves.
#### FormatType
Gets or sets the format type to be used.
 The FastQFormatType to be used for formatting QualitativeSequence objects.
 Default value is Illumina_v1_8
#### Name
Gets the name of this formatter.
 This is intended to give developers name of the formatter.
#### SupportedFileTypes
Gets the file extension supported by this formatter.

