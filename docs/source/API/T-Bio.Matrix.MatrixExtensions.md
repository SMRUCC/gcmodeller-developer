---
title: MatrixExtensions
---

# MatrixExtensions
_namespace: [Bio.Matrix](N-Bio.Matrix.html)_

Provides a set of static methods for Matrix objects.

### Methods

#### AsDenseMatrix``3
```csharp
Bio.Matrix.MatrixExtensions.AsDenseMatrix``3(Bio.Matrix.Matrix{``0,``1,``2})
```
Converts matrix to a DenseMatrix. If the inputMatrix is a DenseMatrix, then returns the given matrix without copying. The copy could, therefore,
 be either shallow or deep.

|Parameter Name|Remarks|
|--------------|-------|
|inputMatrix|The matrix to convert.|

_returns: A DenseMatrix with same rowKeys, colKeys, missing and nonmissing values, and special missing value. If the inputMatrix is a DenseMatrix, then it will be returned unchanged._

#### ToDenseMatrix``3
```csharp
Bio.Matrix.MatrixExtensions.ToDenseMatrix``3(Bio.Matrix.Matrix{``0,``1,``2})
```
Converts matrix to a new DenseMatrix. Even if the inputMatrix is a DenseMatrix, a new DenseMatrix is created. The copy is, thus,
 always deep if TValue is an atomic type.

|Parameter Name|Remarks|
|--------------|-------|
|inputMatrix|The matrix to convert.|

_returns: A new DenseMatrix with same rowKeys, colKeys, missing and nonmissing values, and special missing value._

#### WriteDense``3
```csharp
Bio.Matrix.MatrixExtensions.WriteDense``3(Bio.Matrix.Matrix{``0,``1,``2},System.String)
```
Writes the matrix to a file in dense format. A directory will be created if needed.
 The first line is "var" TAB and then the tab-delimited col keys.
 Next is one line per row key. Each line is the row key TAB and then the tab-limited values.
 Values may include the special Missing value.

|Parameter Name|Remarks|
|--------------|-------|
|matrix|The matrix to write|
|filename|The filename to write to.|


#### WriteSparse``3
```csharp
Bio.Matrix.MatrixExtensions.WriteSparse``3(Bio.Matrix.Matrix{``0,``1,``2},System.IO.TextWriter)
```
Writes the matrix to textWriter in sparse format.
 The first line is "var" TAB "cid" TAB "val"
 Next is one line per nonmissing value. Each line is: rowKey TAB colKey TAB value

|Parameter Name|Remarks|
|--------------|-------|
|matrix|The matrix to write|
|textWriter|The textWriter to write to.|





