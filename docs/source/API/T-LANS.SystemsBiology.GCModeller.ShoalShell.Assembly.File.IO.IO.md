---
title: IO
---

# IO
_namespace: [LANS.SystemsBiology.GCModeller.ShoalShell.Assembly.File.IO](N-LANS.SystemsBiology.GCModeller.ShoalShell.Assembly.File.IO.html)_

This namespace module contains the various biological database I/O (reads and write) operations.

### Methods

#### MergeFasta
```csharp
LANS.SystemsBiology.GCModeller.ShoalShell.Assembly.File.IO.IO.MergeFasta(System.String)
```
Merge the fasta files in a directory into a total fasta file.(将目标文件夹之中的文件合并至一个Fasta文件之中)

|Parameter Name|Remarks|
|--------------|-------|
|dir|-|


#### SaveFasta
```csharp
LANS.SystemsBiology.GCModeller.ShoalShell.Assembly.File.IO.IO.SaveFasta(LANS.SystemsBiology.SequenceModel.FASTA.FastaFile,System.String)
```
文件的默认编码格式是ASCII

|Parameter Name|Remarks|
|--------------|-------|
|fasta|-|
|saveto|-|


#### TrimNull
```csharp
LANS.SystemsBiology.GCModeller.ShoalShell.Assembly.File.IO.IO.TrimNull(LANS.SystemsBiology.SequenceModel.FASTA.FastaFile)
```
将没有序列的fasta对象删除

|Parameter Name|Remarks|
|--------------|-------|
|FASTA|-|





