---
title: DensePairAnsiExtensions
---

# DensePairAnsiExtensions
_namespace: [Bio.Matrix](N-Bio.Matrix.html)_

Extension methods on Matrix related to DensePairAnsi.

### Methods

#### AsDensePairAnsi
```csharp
Bio.Matrix.DensePairAnsiExtensions.AsDensePairAnsi(Bio.Matrix.Matrix{System.String,System.String,Bio.Util.UOPair{System.Char}},System.Threading.Tasks.ParallelOptions)
```
Converts matrix to a DensePairAnsi. If matrix is already a DensePairAnsi, then returns the given matrix without copying.

|Parameter Name|Remarks|
|--------------|-------|
|inputMatrix|The matrix to convert from|
|parallelOptions|Options for controlling any parallelism.|

_returns: A densePairAnsi version of the matrix_

#### ToDensePairAnsi
```csharp
Bio.Matrix.DensePairAnsiExtensions.ToDensePairAnsi(Bio.Matrix.Matrix{System.String,System.String,Bio.Util.UOPair{System.Char}},System.Threading.Tasks.ParallelOptions)
```
Converts matrix to a DensePairAnsi. Even if the matrix is already an densePairAnsi, a new one is created..

|Parameter Name|Remarks|
|--------------|-------|
|matrix|The matrix to convert from|
|parallelOptions|Options for controlling any parallelism.|

_returns: A densePairAnsi version of the matrix_

#### WriteDensePairAnsi
```csharp
Bio.Matrix.DensePairAnsiExtensions.WriteDensePairAnsi(Bio.Matrix.Matrix{System.String,System.String,Bio.Util.UOPair{System.Char}},System.IO.TextWriter,System.Threading.Tasks.ParallelOptions)
```
Write a matrix to DensePairAnsi file format

|Parameter Name|Remarks|
|--------------|-------|
|matrix|The matrix to write|
|textWriter|The TextWriter to write to|
|parallelOptions|A ParallelOptions instance that configures the multithreaded behavior of this operation.|





