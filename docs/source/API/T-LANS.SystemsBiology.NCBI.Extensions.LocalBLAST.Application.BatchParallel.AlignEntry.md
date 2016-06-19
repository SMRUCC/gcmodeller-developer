---
title: AlignEntry
---

# AlignEntry
_namespace: [LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.Application.BatchParallel](N-LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.Application.BatchParallel.html)_

blast结果文件的路径，在这里面包含有query和subject的来源的信息



### Methods

#### BiDirEquals
```csharp
LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.Application.BatchParallel.AlignEntry.BiDirEquals(LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.Application.BatchParallel.AlignEntry)
```
Is this paired of the blast output data is the bidirectional besthit result.(判断当前的这两个数据文件对象是否为双向比对结果)

|Parameter Name|Remarks|
|--------------|-------|
|Entry|-|


#### SelectEquals
```csharp
LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.Application.BatchParallel.AlignEntry.SelectEquals(System.Collections.Generic.IEnumerable{LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.Application.BatchParallel.AlignEntry})
```
选取当前对象的反向比对对象

|Parameter Name|Remarks|
|--------------|-------|
|data|-|



### Properties

#### FilePath
The file path of the blast output log data or the csv data file.(日志文件或者Csv数据文件)
