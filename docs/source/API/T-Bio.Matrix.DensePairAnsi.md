---
title: DensePairAnsi
---

# DensePairAnsi
_namespace: [Bio.Matrix](N-Bio.Matrix.html)_

A Matrix that presents values externally as two sorted (16-bit) chars and internally as two bytes.
 For this class, the special Missing value must be the pair '?','?'.

### Methods

#### CreateEmptyInstance
```csharp
Bio.Matrix.DensePairAnsi.CreateEmptyInstance(System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String},Bio.Util.UOPair{System.Char})
```
Creates an DensePairAnsi with values missing.

|Parameter Name|Remarks|
|--------------|-------|
|rowKeySequence|A sequence of row keys. The items will become the RowKeys of the Matrix.|
|colKeySequence|A sequence of colKeys. The items will come the ColKeys of the Matrix.|
|missingValue|The special Missing value, which must be (UO '?','?')|

_returns: A new, empty, DensePairAnsi_

#### GetInstance
```csharp
Bio.Matrix.DensePairAnsi.GetInstance(System.String,System.Threading.Tasks.ParallelOptions)
```
Creates a DensePairAnsi object from a file in dense pair ansi format.

|Parameter Name|Remarks|
|--------------|-------|
|densePairAnsiFileName|a file in dense pair ansi format|
|parallelOptions|A ParallelOptions instance that configures the multithreaded behavior of this operation.|

_returns: the DensePairAnsi object_

#### GetInstanceFromSparse
```csharp
Bio.Matrix.DensePairAnsi.GetInstanceFromSparse(System.Collections.Generic.IEnumerable{Bio.Matrix.RowKeyColKeyValue{System.String,System.String,Bio.Util.UOPair{System.Char}}})
```
Create a DensePairAnsi object from a sequence of RowKeyColKeyValue triples.

|Parameter Name|Remarks|
|--------------|-------|
|tripleEnumerable|a sequence of RowKeyColKeyValue|

_returns: A DensePairAnsi object_



### Properties

#### StaticMissingValue
For DensePairAnsi the missing value is always the same: ?,?. This is a static version of that missing value.
#### StaticStoreMissingValue
For DensePairAnsi the missing value is always the same: ?,?. This is a static version of that missing value.

