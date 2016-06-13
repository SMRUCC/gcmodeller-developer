---
title: RowKeysPairAnsi
---

# RowKeysPairAnsi
_namespace: [Bio.Matrix](N-Bio.Matrix.html)_

Be sure to use this is a "Using" to that it gets disposed correctly.

### Methods

#### GetInstanceFromPairAnsi
```csharp
Bio.Matrix.RowKeysPairAnsi.GetInstanceFromPairAnsi(System.String,System.Threading.Tasks.ParallelOptions,System.IO.FileAccess,System.IO.FileShare)
```
Create an instance of RowKeysPairAnsi from a file in DensePairAnsi format.
 The RowKeysPairAnsi is IDisposable and so should be disposed of, for example, with the 'using statement'.

|Parameter Name|Remarks|
|--------------|-------|
|pairAnsiFileName|The pairAnsi file|
|parallelOptions|A ParallelOptions instance that configures the multithreaded behavior of this operation.|
|fileAccess|A FileAccess value that specifies the operations that can be performed on the file. Defaults to 'Read'|
|fileShare|A FileShare value specifying the type of access other threads have to the file. Defaults to 'Read'|

_returns: A RowKeysPairAnsi object _

#### GetInstanceFromRowKeysAnsi
```csharp
Bio.Matrix.RowKeysPairAnsi.GetInstanceFromRowKeysAnsi(System.String,System.Threading.Tasks.ParallelOptions,System.IO.FileAccess,System.IO.FileShare)
```
Create an instance of RowKeysPairAnsi from a file in RowKeysPairAnsi format.
 The RowKeysPairAnsi is IDisposable and so should be disposed of, for example, with the 'using statement'.

|Parameter Name|Remarks|
|--------------|-------|
|rowKeysAnsiFileName|The RowKeysPairAnsi file|
|parallelOptions|A ParallelOptions instance that configures the multithreaded behavior of this operation.|
|fileAccess|A FileAccess value that specifies the operations that can be performed on the file. Defaults to 'Read'|
|fileShare|A FileShare value specifying the type of access other threads have to the file. Defaults to 'Read'|

_returns: A RowKeysPairAnsi object_




