---
title: RowKeysAnsi
---

# RowKeysAnsi
_namespace: [Bio.Matrix](N-Bio.Matrix.html)_

Be sure to use this is a "Using" to that it gets disposed correctly.

### Methods

#### GetInstanceFromDenseAnsi
```csharp
Bio.Matrix.RowKeysAnsi.GetInstanceFromDenseAnsi(System.String,System.Threading.Tasks.ParallelOptions,System.IO.FileAccess,System.IO.FileShare)
```
Create an instance of RowKeysAnsi from a file in DenseAnsi format.
 The RowKeysAnsi is IDisposable and so should be disposed of, for example, with the 'using statement'.

|Parameter Name|Remarks|
|--------------|-------|
|denseAnsiFileName|The DenseAnsi file|
|parallelOptions|A ParallelOptions instance that configures the multithreaded behavior of this operation.|
|fileAccess|A FileAccess value that specifies the operations that can be performed on the file. Defaults to 'Read'|
|fileShare|A FileShare value specifying the type of access other threads have to the file. Defaults to 'Read'|

_returns: A RowKeysAnsi object_

#### GetInstanceFromRowKeysAnsi
```csharp
Bio.Matrix.RowKeysAnsi.GetInstanceFromRowKeysAnsi(System.String,System.Threading.Tasks.ParallelOptions,System.IO.FileAccess,System.IO.FileShare,System.Boolean)
```
Create an instance of RowKeysAnsi from a file in RowKeysAnsi format.
 The RowKeysAnsi is IDisposable and so should be disposed of, for example, with the 'using statement'.

|Parameter Name|Remarks|
|--------------|-------|
|rowKeysAnsiFileName|The rowKeys ansi file|
|parallelOptions|A ParallelOptions instance that configures the multithreaded behavior of this operation.|
|fileAccess|A FileAccess value that specifies the operations that can be performed on the file. Defaults to 'Read'|
|fileShare|A FileShare value specifying the type of access other threads have to the file. Defaults to 'Read'|
|verbose|-|

_returns: a RowKeysAnsi instance_




