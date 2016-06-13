---
title: SparseMatrix`3
---

# SparseMatrix`3
_namespace: [Bio.Matrix](N-Bio.Matrix.html)_

A matrix that internally represents only non-missing values. If most possible values are missing
 this saves memory. The trade off is that access is O(log(RowKeyCount)*log(ColKeyCount)) instead of being constant
 like the fastest dense methods.

### Methods

#### CreateEmptyInstance
```csharp
Bio.Matrix.SparseMatrix`3.CreateEmptyInstance(System.Collections.Generic.IEnumerable{`0},System.Collections.Generic.IEnumerable{`1},`2)
```
Create SparseMatrix with all missing values.

|Parameter Name|Remarks|
|--------------|-------|
|rowKeySequence|A sequence of row keys. The items will become the RowKeys of the Matrix.|
|colKeySequence|A sequence of colKeys. The items will come the ColKeys of the Matrix.|
|missingValue|The special value that represents missing|

_returns: The empty SparseMatrix created._

#### TryParseSparseFile
```csharp
Bio.Matrix.SparseMatrix`3.TryParseSparseFile(System.IO.TextReader,`2,System.Threading.Tasks.ParallelOptions,Bio.Matrix.Matrix{`0,`1,`2}@)
```
Tries to parse a sparse textReader and creates a SpareMatrix

|Parameter Name|Remarks|
|--------------|-------|
|textReader|The textReader stream in the sparse format|
|missingValue|The special value that represents missing in the SparseMatrix|
|parallelOptions|A ParallelOptions instance that configures the multithreaded behavior of this operation.|
|matrix|The resulting matrix|

_returns: true, if the textReader can be parsed; false, otherwise._




