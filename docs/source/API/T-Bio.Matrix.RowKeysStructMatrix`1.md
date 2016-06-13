---
title: RowKeysStructMatrix`1
---

# RowKeysStructMatrix`1
_namespace: [Bio.Matrix](N-Bio.Matrix.html)_

An abstract Matrix class for accessing values off disk instead of keeping them memory. For example, RowKeysAnsi
 is a subclass that access values from DenseAnsi format. The on-disk file format must be a subtype of DenseStructMatrix, 
 for example, DenseAnsi or PaddedDouble. The method is IDisposable and should be used with a 'Using' statement or should be closed.

### Methods

#### ByteArrayToValueOrMissing
```csharp
Bio.Matrix.RowKeysStructMatrix`1.ByteArrayToValueOrMissing(System.Byte[])
```
A method that converts bytes (read from the on-disk file) into a value.

|Parameter Name|Remarks|
|--------------|-------|
|byteArray|bytes from the on-disk file|

_returns: a value_

#### GetInstanceFromDenseStructFileNameInternal
```csharp
Bio.Matrix.RowKeysStructMatrix`1.GetInstanceFromDenseStructFileNameInternal(System.String,System.Threading.Tasks.ParallelOptions,System.IO.FileAccess,System.IO.FileShare)
```
Used by subclasses, such as RowKeyAnsi, to open a file on disk.
 The enseStructFileNam is IDisposable and so should be disposed of, for example, with the 'using statement'.

|Parameter Name|Remarks|
|--------------|-------|
|denseStructFileName|The file on disk to open|
|parallelOptions|A ParallelOptions instance that configures the multithreaded behavior of this operation.|
|fileAccess|A FileAccess value that specifies the operations that can be performed on the file. Defaults to 'Read'|
|fileShare|A FileShare value specifying the type of access other threads have to the file. Defaults to 'Read'|


#### GetInstanceFromRowKeysStructFileNameInternal
```csharp
Bio.Matrix.RowKeysStructMatrix`1.GetInstanceFromRowKeysStructFileNameInternal(System.String,System.Threading.Tasks.ParallelOptions,System.IO.FileAccess,System.IO.FileShare,System.Boolean)
```
Get a instance from a file in a RowKeys format

|Parameter Name|Remarks|
|--------------|-------|
|rowKeysStructFileName|The rowKeys file|
|parallelOptions|A ParallelOptions instance that configures the multithreaded behavior of this operation.|
|fileAccess|A FileAccess value that specifies the operations that can be performed on the file. Defaults to 'Read'|
|fileShare|A FileShare value specifying the type of access other threads have to the file. Defaults to 'Read'|
|verbose|-|


#### ValueOrMissingToByteArray
```csharp
Bio.Matrix.RowKeysStructMatrix`1.ValueOrMissingToByteArray(`0)
```
A method that converts a value (including the special missing value) to an array of bytes.

|Parameter Name|Remarks|
|--------------|-------|
|value|The value to convert|

_returns: The byte array_

#### WriteRowKeys
```csharp
Bio.Matrix.RowKeysStructMatrix`1.WriteRowKeys(System.String)
```
Write out the RowKeys file for a matrix. This file is an index to the rows of another file.

|Parameter Name|Remarks|
|--------------|-------|
|simpleFileName|The rowKeys file to write to. It must not include any path information. It will be created in the other file's directory.|




### Properties

#### BytesPerValue
The number of bytes per value in the on-disk file format.
#### ColSerialNumbers
The mapping from column keys to column indexes.

