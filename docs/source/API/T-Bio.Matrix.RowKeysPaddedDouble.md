---
title: RowKeysPaddedDouble
---

# RowKeysPaddedDouble
_namespace: [Bio.Matrix](N-Bio.Matrix.html)_

Be sure to use this is a "Using" to that it gets disposed correctly.

### Methods

#### GetInstanceFromPaddedDouble
```csharp
Bio.Matrix.RowKeysPaddedDouble.GetInstanceFromPaddedDouble(System.String,System.Threading.Tasks.ParallelOptions,System.IO.FileAccess,System.IO.FileShare)
```
Create an instance of RowKeysPaddedDouble from a file in PaddedDouble format.
 The RowKeysPaddedDouble is IDisposable and so should be disposed of, for example, with the 'using statement'.

|Parameter Name|Remarks|
|--------------|-------|
|paddedDoubleFileName|The PaddedDouble file|
|parallelOptions|A ParallelOptions instance that configures the multithreaded behavior of this operation.|
|fileAccess|A FileAccess value that specifies the operations that can be performed on the file. Defaults to 'Read'|
|fileShare|A FileShare value specifying the type of access other threads have to the file. Defaults to 'Read'|

_returns: A RowKeysPaddedDouble object_

#### GetInstanceFromRowKeys
```csharp
Bio.Matrix.RowKeysPaddedDouble.GetInstanceFromRowKeys(System.String,System.Threading.Tasks.ParallelOptions,System.IO.FileAccess,System.IO.FileShare)
```
Create an instance of RowKeysPaddedDouble from a file in RowKeysPaddedDouble format.
 The RowKeysPaddedDouble is IDisposable and so should be disposed of, for example, with the 'using statement'.

|Parameter Name|Remarks|
|--------------|-------|
|rowKeysFileName|The RowKeysPaddedDouble file|
|parallelOptions|A ParallelOptions instance that configures the multithreaded behavior of this operation.|
|fileAccess|A FileAccess value that specifies the operations that can be performed on the file. Defaults to 'Read'|
|fileShare|A FileShare value specifying the type of access other threads have to the file. Defaults to 'Read'|

_returns: A RowKeysPaddedDouble object_




