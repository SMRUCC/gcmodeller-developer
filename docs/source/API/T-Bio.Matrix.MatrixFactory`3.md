---
title: MatrixFactory`3
---

# MatrixFactory`3
_namespace: [Bio.Matrix](N-Bio.Matrix.html)_

A class for creating a factory for parsing matrix files.

### Methods

#### #ctor
```csharp
Bio.Matrix.MatrixFactory`3.#ctor
```
A parameterless constructor for the MatrixFactor.

#### GetInstance
```csharp
Bio.Matrix.MatrixFactory`3.GetInstance
```
Initializes a new instance of a Matrix parse factory.
_returns: A MatrixFactory that can be used to create a Matrix instance from a file._

#### Parse
```csharp
Bio.Matrix.MatrixFactory`3.Parse(System.String,`2,System.Threading.Tasks.ParallelOptions)
```
Create a Matrix by parsing the file. The MatrixFactory may try many different parsers to get a result.

|Parameter Name|Remarks|
|--------------|-------|
|filename|The name of the file containing the matrix information.|
|missingValue|The special value that represents missing in the created matrix.|
|parallelOptions|A ParallelOptions instance that configures the multithreaded behavior of this operation.|

_returns: the Matrix created_

#### RegisterMatrixParser
```csharp
Bio.Matrix.MatrixFactory`3.RegisterMatrixParser(Bio.Matrix.TryParseMatrixDelegate{`0,`1,`2})
```
Adds the specificed parsing function to the MatrixFactory

|Parameter Name|Remarks|
|--------------|-------|
|tryParseMatrixDelegate|The function to add.|


#### TryParse
```csharp
Bio.Matrix.MatrixFactory`3.TryParse(System.String,`2,System.Threading.Tasks.ParallelOptions,Bio.Matrix.Matrix{`0,`1,`2}@)
```
Create a Matrix by parsing the file. The MatrixFactory may try many different parsers to get a result.

|Parameter Name|Remarks|
|--------------|-------|
|filename|The name of the file containing the matrix information.|
|missingValue|The special value that represents missing in the created matrix.|
|parallelOptions|A ParallelOptions instance that configures the multithreaded behavior of this operation.|
|result|The matrix created.|

_returns: true, if some parse succeeds; otherwise, false_



### Properties

#### ErrorMessages
The last error messges

