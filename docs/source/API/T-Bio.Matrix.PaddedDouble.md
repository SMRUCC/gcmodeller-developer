---
title: PaddedDouble
---

# PaddedDouble
_namespace: [Bio.Matrix](N-Bio.Matrix.html)_

A matrix object that reads double out of a file, as needed, rather than keeping them in memory.

### Methods

#### CreateEmptyInstance
```csharp
Bio.Matrix.PaddedDouble.CreateEmptyInstance(System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{System.String},System.Double)
```
Create an empty instance of a PaddedDouble file

|Parameter Name|Remarks|
|--------------|-------|
|rowKeySequence|A sequence of row keys. The items will become the RowKeys of the Matrix.|
|colKeySequence|A sequence of colKeys. The items will come the ColKeys of the Matrix.|
|missingValue|The special value that represents missing|

_returns: An empty PaddedDouble instance_

#### EachSparseLine
```csharp
Bio.Matrix.PaddedDouble.EachSparseLine(System.String,System.Boolean,System.String,Bio.Util.CounterWithMessages)
```
Returns the contents of a files in PaddedDouble format as a sequence of string arrays in sparse file format.
 Saves memory by never creating a PaddedDouble instance.

|Parameter Name|Remarks|
|--------------|-------|
|filePattern|Files in PaddedDouble format|
|zeroIsOK|tells if it's OK if not files match parts of the file pattern.|
|fileMessageOrNull|A string containing '{0}' to write as each file is opened.|
|counterWithMessages|Send status messages to standard output|

_returns: A sequence of string arrays. Each string array has three values: the var, the cid, and the val._

#### GetInstance
```csharp
Bio.Matrix.PaddedDouble.GetInstance(System.String,System.Threading.Tasks.ParallelOptions)
```
Creates an instance of PaddedDouble from a file in PaddedDouble format.

|Parameter Name|Remarks|
|--------------|-------|
|paddedDoubleFileName|a file in PaddedDouble format|
|parallelOptions|A ParallelOptions instance that configures the multithreaded behavior of this operation.|

_returns: The created PaddedDouble_

#### GetInstanceFromSparse
```csharp
Bio.Matrix.PaddedDouble.GetInstanceFromSparse(System.Collections.Generic.IEnumerable{Bio.Matrix.RowKeyColKeyValue{System.String,System.String,System.Double}})
```
Create a PaddedDouble object from a sequence of RowKeyColKeyValue triples.

|Parameter Name|Remarks|
|--------------|-------|
|tripleEnumerable|a sequence of RowKeyColKeyValue|

_returns: A PaddedDouble object_

#### StoreToSparseVal
```csharp
Bio.Matrix.PaddedDouble.StoreToSparseVal(System.Double)
```
A method that converts a double into a string suitable for writing to a file.

|Parameter Name|Remarks|
|--------------|-------|
|store|The double|

_returns: the string_

#### TryGetInstance
```csharp
Bio.Matrix.PaddedDouble.TryGetInstance(System.String,System.Double,System.Threading.Tasks.ParallelOptions,Bio.Matrix.Matrix{System.String,System.String,System.Double}@)
```
This awkward method is provided for the sake of MatrixFactory. Right now it simply catches exceptions. Should switch and make it fail silently when doesn't work.

#### TryGetInstanceFromSparse
```csharp
Bio.Matrix.PaddedDouble.TryGetInstanceFromSparse(System.String,Bio.Matrix.PaddedDouble@)
```
Create an instance of PaddedDouble from a sparse input file

|Parameter Name|Remarks|
|--------------|-------|
|inputSparsePattern|The sparse input file|
|paddedDouble|The PaddedDouble matrix created|

_returns: true if the file parses as PaddedDouble; otherwise, false_



### Properties

#### BytesPerValue
The number of ANSI characters in a file used to write out a double in text format.
#### FormatString
The format string used to write doubles into ANSI text.
#### StaticMissingValue
The special value used to represent missing values. Always double.NaN.
#### StaticStoreMissingValue
The special value used to represent missing values internally. Always double.NaN.

