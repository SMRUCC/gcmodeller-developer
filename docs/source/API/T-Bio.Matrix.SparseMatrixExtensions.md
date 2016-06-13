---
title: SparseMatrixExtensions
---

# SparseMatrixExtensions
_namespace: [Bio.Matrix](N-Bio.Matrix.html)_

Extension methods on Matrix related to DenseAnsi.

### Methods

#### AsSparseMatrix``3
```csharp
Bio.Matrix.SparseMatrixExtensions.AsSparseMatrix``3(Bio.Matrix.Matrix{``0,``1,``2})
```
Converts matrix to a SparseMatrix. If matrix is already a SparseMatrix, then returns the given matrix without copying.

|Parameter Name|Remarks|
|--------------|-------|
|inputMatrix|The matrix to convert from|

_returns: A SparseMatrix version of the matrix_

#### ToSparseMatrix``3
```csharp
Bio.Matrix.SparseMatrixExtensions.ToSparseMatrix``3(Bio.Matrix.Matrix{``0,``1,``2})
```
Converts matrix to a SparseMatrix. Even if the matrix is already an SparseMatrix, a new one is created..

|Parameter Name|Remarks|
|--------------|-------|
|matrix|The matrix to convert from|

_returns: A SparseMatrix version of the matrix_




