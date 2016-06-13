---
title: DenseAnsiExtensions
---

# DenseAnsiExtensions
_namespace: [Bio.Matrix](N-Bio.Matrix.html)_

Extension methods on Matrix related to DenseAnsi.

### Methods

#### AsDenseAnsi
```csharp
Bio.Matrix.DenseAnsiExtensions.AsDenseAnsi(Bio.Matrix.Matrix{System.String,System.String,System.Char},System.Threading.Tasks.ParallelOptions)
```
Converts matrix to a DenseAnsi. If matrix is already a DenseAnsi, then returns the given matrix without copying.

|Parameter Name|Remarks|
|--------------|-------|
|inputMatrix|The matrix to convert from|
|parallelOptions|A ParallelOptions instance that configures the multithreaded behavior of this operation.|

_returns: A denseAnsi version of the matrix_

#### AsDenseAnsi``1
```csharp
Bio.Matrix.DenseAnsiExtensions.AsDenseAnsi``1(Bio.Matrix.Matrix{System.String,System.String,``0},System.Threading.Tasks.ParallelOptions)
```
Converts matrix to a DenseAnsi. If matrix is already a dense collection, then returns the given matrix without copying.

|Parameter Name|Remarks|
|--------------|-------|
|inputMatrix|The matrix to convert from|
|parallelOptions|A ParallelOptions instance that configures the multithreaded behavior of this operation.|

_returns: A denseAnsi version of the matrix_

#### ToDenseAnsi
```csharp
Bio.Matrix.DenseAnsiExtensions.ToDenseAnsi(Bio.Matrix.Matrix{System.String,System.String,System.Char},System.Threading.Tasks.ParallelOptions)
```
Converts matrix to a DenseAnsi. Even if the matrix is already an denseAnsi, a new one is created..

|Parameter Name|Remarks|
|--------------|-------|
|matrix|The matrix to convert from|
|parallelOptions|A ParallelOptions instance that configures the multithreaded behavior of this operation.|

_returns: A denseAnsi version of the matrix_

#### ToDenseAnsi``1
```csharp
Bio.Matrix.DenseAnsiExtensions.ToDenseAnsi``1(Bio.Matrix.Matrix{System.String,System.String,``0},System.Threading.Tasks.ParallelOptions)
```
Converts matrix to a DenseAnsi. Even if the matrix is already an denseAnsi, a new one is created..

|Parameter Name|Remarks|
|--------------|-------|
|matrix|The matrix to convert from|
|parallelOptions|A ParallelOptions instance that configures the multithreaded behavior of this operation.|

_returns: A denseAnsi version of the matrix_

#### WriteDenseAnsi
```csharp
Bio.Matrix.DenseAnsiExtensions.WriteDenseAnsi(Bio.Matrix.Matrix{System.String,System.String,System.Char},System.IO.TextWriter,System.Threading.Tasks.ParallelOptions,System.Boolean)
```
Writes a matrix with char values in DenseAnsi format to a textWriter. Does not need to convert to DenseAnsi format.

|Parameter Name|Remarks|
|--------------|-------|
|matrix|The matrix to write|
|textWriter|The stream to write to|
|parallelOptions|A ParallelOptions instance that configures the multithreaded behavior of this operation.|
|verbose|If true, may write out messages to the console telling how far along the writing is.|


#### WriteDenseAnsi``1
```csharp
Bio.Matrix.DenseAnsiExtensions.WriteDenseAnsi``1(Bio.Matrix.Matrix{System.String,System.String,``0},System.IO.TextWriter,System.Threading.Tasks.ParallelOptions,System.Boolean)
```
Writes a matrix in DenseAnsi format to a textWriter. Converts the values of the matrix to char (on the fly). Does not need to convert to DenseAnsi format.

|Parameter Name|Remarks|
|--------------|-------|
|matrix|The matrix to write|
|textWriter|The stream to write to|
|parallelOptions|A ParallelOptions instance that configures the multithreaded behavior of this operation.|
|verbose|If true, may write out messages to the console telling how far along the writing is.|





