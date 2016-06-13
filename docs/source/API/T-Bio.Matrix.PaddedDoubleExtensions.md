---
title: PaddedDoubleExtensions
---

# PaddedDoubleExtensions
_namespace: [Bio.Matrix](N-Bio.Matrix.html)_

Extension methods on Matrix related to PaddedDouble.

### Methods

#### AsPaddedDouble
```csharp
Bio.Matrix.PaddedDoubleExtensions.AsPaddedDouble(Bio.Matrix.Matrix{System.String,System.String,System.Double},System.Threading.Tasks.ParallelOptions)
```
Converts matrix to a PaddedDouble. If matrix is already a dense collection, then returns the given matrix without copying.

|Parameter Name|Remarks|
|--------------|-------|
|inputMatrix|The matrix to convert from|
|parallelOptions|A ParallelOptions instance that configures the multithreaded behavior of this operation.|

_returns: A paddedDouble version of the matrix_

#### ToPaddedDouble
```csharp
Bio.Matrix.PaddedDoubleExtensions.ToPaddedDouble(Bio.Matrix.Matrix{System.String,System.String,System.Double},System.Threading.Tasks.ParallelOptions)
```
Converts matrix to a PaddedDouble. Even if the matrix is already an paddedDouble, a new one is created..

|Parameter Name|Remarks|
|--------------|-------|
|matrix|The matrix to convert from|
|parallelOptions|A ParallelOptions instance that configures the multithreaded behavior of this operation.|

_returns: A paddedDouble version of the matrix_

#### WritePaddedDouble
```csharp
Bio.Matrix.PaddedDoubleExtensions.WritePaddedDouble(Bio.Matrix.Matrix{System.String,System.String,System.Double},System.IO.TextWriter,System.Threading.Tasks.ParallelOptions)
```
Write in PaddedDouble file format to a TextWriter

|Parameter Name|Remarks|
|--------------|-------|
|matrix|The matrix to write|
|textWriter|The TextWriter to write to|
|parallelOptions|A ParallelOptions instance that configures the multithreaded behavior of this operation.|





