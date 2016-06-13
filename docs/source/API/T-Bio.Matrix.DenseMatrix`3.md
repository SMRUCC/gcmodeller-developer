---
title: DenseMatrix`3
---

# DenseMatrix`3
_namespace: [Bio.Matrix](N-Bio.Matrix.html)_

A Matrix that stores the values internally in a .NET 2-D array.

### Methods

#### #ctor
```csharp
],System.Collections.Generic.IEnumerable{`0},System.Collections.Generic.IEnumerable{`1},`2)
```
Initializes a new instance of the DenseMatrix class that wraps a .NET 2-D array

|Parameter Name|Remarks|
|--------------|-------|
|valueArray|The 2-D .NET array to wrap.|
|rowKeySequence|A sequence of row keys. The items will become the RowKeys of the Matrix.|
|colKeySequence|A sequence of colKeys. The items will come the ColKeys of the Matrix.|
|missingValue|The special value that represents missing.|


#### CreateDefaultInstance
```csharp
Bio.Matrix.DenseMatrix`3.CreateDefaultInstance(System.Collections.Generic.IEnumerable{`0},System.Collections.Generic.IEnumerable{`1},`2)
```
Initalizes a new instance of the DenseMatrix class filled with the default value of TValue. For example, if TValue is double,
 the matrix will be filled with 0.0's.

|Parameter Name|Remarks|
|--------------|-------|
|rowKeySequence|A sequence of row keys. The items will become the RowKeys of the Matrix.|
|colKeySequence|A sequence of colKeys. The items will come the ColKeys of the Matrix.|
|missingValue|The special Missing value.|

_returns: A new instance of DenseMatrix_

#### TryParseRFileWithDefaultMissing
```csharp
Bio.Matrix.DenseMatrix`3.TryParseRFileWithDefaultMissing(Bio.IO.INamedStreamCreator,`2,System.Char[],System.Threading.Tasks.ParallelOptions,Bio.Matrix.Matrix{`0,`1,`2}@,System.String@)
```
Create a DenseMatrix from a file in RFile format.

|Parameter Name|Remarks|
|--------------|-------|
|namedStreamCreator|a namedStreamCreator with delimited columns|
|missingValue|The special value that represents 'missing'|
|separatorArray|An array of character delimiters|
|parallelOptions|A ParallelOptions instance that configures the multithreaded behavior of this operation.|
|result|The DenseMatrix created|
|errorMsg|If the file is not parsable, an error message about the problem.|

_returns: True if the file is parsable; otherwise false_

#### TryParseTabbedRFileWithDefaultMissing
```csharp
Bio.Matrix.DenseMatrix`3.TryParseTabbedRFileWithDefaultMissing(System.String,`2,System.Threading.Tasks.ParallelOptions,Bio.Matrix.Matrix{`0,`1,`2}@,System.String@)
```
Create a DenseMatrix from a file in RFile format.

|Parameter Name|Remarks|
|--------------|-------|
|rFileName|a file in RFile format with tab delimited columns|
|missingValue|The special value that represents 'missing'|
|parallelOptions|A ParallelOptions instance that configures the multithreaded behavior of this operation.|
|result|The DenseMatrix created|
|errorMsg|If the file is not parsable, an error message about the problem.|

_returns: True if the file is parsable; otherwise false_



### Properties

#### ValueArray
The 2-D .NET array used to store values.

