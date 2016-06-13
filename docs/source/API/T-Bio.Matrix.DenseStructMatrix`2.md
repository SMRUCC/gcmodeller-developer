---
title: DenseStructMatrix`2
---

# DenseStructMatrix`2
_namespace: [Bio.Matrix](N-Bio.Matrix.html)_

An abstract class for implementing a Matrix class that stores its values internally as a struct
 and in a file as a fixed number of characters. It is the superclass of, for example, DenseAnsi.

### Methods

#### ColKeysInFile
```csharp
Bio.Matrix.DenseStructMatrix`2.ColKeysInFile(System.String)
```
From a file denseStruct format (for example, DenseAnsi format), returns a sequence of
 the colKeys. This method scans the file on disk, making it more efficient than first loading it into memory.

|Parameter Name|Remarks|
|--------------|-------|
|denseStructFileName|The name of a file in denseStruct format|

_returns: A sequence of colKeys._

#### GetInstanceFromSparseInternal
```csharp
Bio.Matrix.DenseStructMatrix`2.GetInstanceFromSparseInternal(System.Collections.Generic.IEnumerable{Bio.Matrix.RowKeyColKeyValue{System.String,System.String,`1}})
```
Create a DenseStructMatrix from a sequences of RowKeyColKeyValue triples.

|Parameter Name|Remarks|
|--------------|-------|
|tripleEnumerable|The squences of RowKeyColKeyValue triples|


#### RowKeysInFile
```csharp
Bio.Matrix.DenseStructMatrix`2.RowKeysInFile(System.String)
```
From a file denseStruct format (for example, DenseAnsi format), returns a sequence of
 the rowKeys. This method scans the file on disk, making it more efficient than first loading it into memory.

|Parameter Name|Remarks|
|--------------|-------|
|denseStructFileName|The name of a file in denseStruct format|

_returns: A sequence of rowKeys._

#### StoreListToString
```csharp
Bio.Matrix.DenseStructMatrix`2.StoreListToString(System.Collections.Generic.List{`0})
```
Implementor can assume that there is one value for every colKey

#### Write
```csharp
Bio.Matrix.DenseStructMatrix`2.Write(System.IO.TextWriter,System.Threading.Tasks.ParallelOptions)
```
Writes the matrix to textWriter.
 The first line is "var" TAB and then the tab-delimited col keys.
 Next is one line per row key. Each line is the row key TAB and then all the row's values with no delimiters.
 Delimiters are not needed because each value is represented with a fixed number of characters.
 Values may include the fixed-number-of-characters version of the special Missing value.

|Parameter Name|Remarks|
|--------------|-------|
|textWriter|The textWriter to write to.|
|parallelOptions|Options for controlling any parallelism.|




### Properties

#### RowKeyToStoreList
The dictionary that maps rowKeys into the stored version of a row. For example, for DenseAnsi the store list is a List of bytes.

