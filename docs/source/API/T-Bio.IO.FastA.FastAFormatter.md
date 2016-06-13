---
title: FastAFormatter
---

# FastAFormatter
_namespace: [Bio.IO.FastA](N-Bio.IO.FastA.html)_

Writes an ISequence the file specified while creating an instance of this class.
 The output is formatter according to the FastA format.

### Methods

#### #ctor
```csharp
Bio.IO.FastA.FastAFormatter.#ctor
```
Constructor

#### Format
```csharp
Bio.IO.FastA.FastAFormatter.Format(System.IO.Stream,Bio.ISequence)
```
Writes the specified sequence in FastA format to the file.
 Note that if the sequence contains more than the MaxSymbolsAllowedPerLine 
 value then it will split the symbols in the specified sequence in to multiple lines, 
 where each line will contain maximum of MaxSymbolsAllowedPerLine symbols.

|Parameter Name|Remarks|
|--------------|-------|
|stream|Stream to write to, it will be left open at the end.|
|data|Sequence to write.|


#### Write
```csharp
Bio.IO.FastA.FastAFormatter.Write(System.IO.TextWriter,Bio.ISequence)
```
Writes the specified sequence in FastA format to the file.
 Note that if the sequence contains more than the MaxSymbolsAllowedPerLine 
 value then it will split the symbols in the specified sequence in to multiple lines, 
 where each line will contain maximum of MaxSymbolsAllowedPerLine symbols.

|Parameter Name|Remarks|
|--------------|-------|
|writer|Stream to write to, it will be left open at the end.|
|data|Sequence to write.|




### Properties

#### AutoFlush
Gets or sets a value indicating whether the FastAFormatter will flush its buffer 
 to the underlying stream after every call to Write(ISequence).
#### buffer
Buffer used while writing to stream.
#### DefaultMaxSymbolsAllowedPerLine
Default Maximum symbols allowed per line. 
 As per FastA format, recommended value is 80.
#### Description
Gets the description of this formatter.
 This is intended to give developers some information 
 of the formatter class. This property returns a simple description of what this
 class achieves.
#### MaxSymbolsAllowedPerLine
Gets or sets the maximum symbols allowed per line.
 Default value is 80.
 Note that the FastA format recommends that all lines 
 should be less than 80 symbol in length.
#### Name
Gets the name of this formatter.
 This is intended to give developers name of the formatter.
#### SupportedFileTypes
Gets the file extension supported by this formatter.

