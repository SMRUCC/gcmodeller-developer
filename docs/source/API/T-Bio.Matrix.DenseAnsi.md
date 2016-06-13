---
title: DenseAnsi
---

# DenseAnsi
_namespace: [Bio.Matrix](N-Bio.Matrix.html)_

A Matrix that presents values externally as a (16-bit) char and internally as a (8-bit) byte.
 For this class, the special Missing value must be '?'.

### Methods

#### CreateEmptyInstance
```csharp
Bio.Matrix.DenseAnsi.CreateEmptyInstance(System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String},System.Char)
```
Creates an DenseAnsi with values missing.

|Parameter Name|Remarks|
|--------------|-------|
|rowKeySequence|A sequence of row keys. The items will become the RowKeys of the Matrix.|
|colKeySequence|A sequence of colKeys. The items will come the ColKeys of the Matrix.|
|missingValue|The special Missing value, which must be '?'|

_returns: A new, empty, DenseAnsi_

#### GetInstance
```csharp
Bio.Matrix.DenseAnsi.GetInstance(System.String,System.Threading.Tasks.ParallelOptions)
```
Creates a DenseAnsi object from a file in dense ansi format.

|Parameter Name|Remarks|
|--------------|-------|
|denseAnsiFileName|a file in dense ansi format|
|parallelOptions|A ParallelOptions instance that configures the multithreaded behavior of this operation.|

_returns: the DenseAnsi object_

#### GetInstanceFromSparse
```csharp
Bio.Matrix.DenseAnsi.GetInstanceFromSparse(System.Collections.Generic.IEnumerable{Bio.Matrix.RowKeyColKeyValue{System.String,System.String,System.Char}})
```
Create a DenseAnsi object from a sequence of RowKeyColKeyValue triples.

|Parameter Name|Remarks|
|--------------|-------|
|tripleEnumerable|a sequence of RowKeyColKeyValue|

_returns: A DenseAnsi object_

#### TryGetInstance
```csharp
Bio.Matrix.DenseAnsi.TryGetInstance(System.String,System.Char,System.Threading.Tasks.ParallelOptions,Bio.Matrix.Matrix{System.String,System.String,System.Char}@)
```
This awkward method is provided for the sake of MatrixFactory. Right now it simply catches exceptions. Should switch and make it fail silently when doesn't work.

#### TryGetInstanceFromSparse
```csharp
Bio.Matrix.DenseAnsi.TryGetInstanceFromSparse(System.String,Bio.Matrix.DenseAnsi@)
```
Creates a DenseAnsi from file(s) in sparse format.

|Parameter Name|Remarks|
|--------------|-------|
|inputSparsePattern|The name of a file (or a pattern matching several files). The file(s) are in sparse format.|
|denseAnsi|The new DenseAnsi (or null, if the method fails).|

_returns: true if the file(s) is read and the DenseAnsi is created; otherwise, false _

#### TryParseDenseAnsiFormatAsDoubleMatrix
```csharp
Bio.Matrix.DenseAnsi.TryParseDenseAnsiFormatAsDoubleMatrix(System.String,System.Double,System.Threading.Tasks.ParallelOptions,Bio.Matrix.Matrix{System.String,System.String,System.Double}@)
```
Parse a file in DenseAnsi format such that the values are returned as doubles.

|Parameter Name|Remarks|
|--------------|-------|
|filename|The file to parse|
|missingValue|The special value that represents missing|
|parallelOptions|A ParallelOptions instance that configures the multithreaded behavior of this operation.|
|matrix|The matrix created from parsing the file|

_returns: True if the file can be parsed; false, otherwise._

#### TryParseDenseAnsiFormatAsGenericMatrix``1
```csharp
Bio.Matrix.DenseAnsi.TryParseDenseAnsiFormatAsGenericMatrix``1(System.String,``0,System.Threading.Tasks.ParallelOptions,Bio.Matrix.Matrix{System.String,System.String,``0}@)
```
Tries to read a file in DenseAnsi format and then creates a DenseAnsi class with values of the desired type.

|Parameter Name|Remarks|
|--------------|-------|
|filename|The dense ansi formatted file to read from.|
|missingValue|The special value that represents missing|
|parallelOptions|A ParallelOptions instance that configures the multithreaded behavior of this operation.|
|matrix|A matrix that internally stores values in a DenseAnsi object.|

_returns: true, if the file can be parsed; false, otherwise._

#### WriteDenseAnsi
```csharp
Bio.Matrix.DenseAnsi.WriteDenseAnsi(System.IO.TextWriter,System.Threading.Tasks.ParallelOptions,System.Boolean)
```
Write this DenseAnsi matrix to a textWriter

|Parameter Name|Remarks|
|--------------|-------|
|textWriter|-|
|parallelOptions|A ParallelOptions instance that configures the multithreaded behavior of this operation.|
|verbose|ignored|




### Properties

#### MissingValue
Always '?'
#### StaticMissingValue
Always '?'
#### StaticStoreMissingValue
Always (byte)'?'

