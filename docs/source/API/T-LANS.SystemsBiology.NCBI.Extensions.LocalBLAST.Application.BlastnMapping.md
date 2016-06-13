---
title: BlastnMapping
---

# BlastnMapping
_namespace: [LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.Application](N-LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.Application.html)_

Blastn Mapping for fastaq

### Methods

#### __createObject
```csharp
LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.Application.BlastnMapping.__createObject(LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.BLASTOutput.BlastPlus.Query,LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.BLASTOutput.BlastPlus.BlastnHit)
```
从blastn日志之中导出Mapping的数据

|Parameter Name|Remarks|
|--------------|-------|
|Query|-|
|hitMapping|-|


#### CreateObject
```csharp
LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.Application.BlastnMapping.CreateObject(LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.BLASTOutput.BlastPlus.Query)
```
从blastn日志之中导出Mapping的数据

|Parameter Name|Remarks|
|--------------|-------|
|Query|-|


#### Export
```csharp
LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.Application.BlastnMapping.Export(LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.BLASTOutput.BlastPlus.v228)
```
从blastn日志文件之中导出fastq对基因组的比对的结果

|Parameter Name|Remarks|
|--------------|-------|
|blastnMapping|-|


#### setUnique
```csharp
LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.Application.BlastnMapping.setUnique(LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.Application.BlastnMapping[]@)
```
Unique的判断原则：
 
 1. 假若一个query之中只含有一个hit，则为unique
 2. 假若一个query之中含有多个hit的话，假若只有一个hit是perfect类型的，则为unique
 3. 同一个query之中假若为多个perfect类型的hit的话，则不为unique

|Parameter Name|Remarks|
|--------------|-------|
|data|-|


#### TrimAssembly
```csharp
LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.Application.BlastnMapping.TrimAssembly(System.Collections.Generic.IEnumerable{LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.Application.BlastnMapping})
```
按照条件 @"P:LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.Application.BlastnMapping.Unique"=TRUE and @"P:LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.Application.BlastnMapping.PerfectAlignment"=TRUE
 进行可用的alignment mapping结果的筛选



### Properties

#### Gaps
Gaps(%)
#### Identities
Identities(%)
#### PerfectAlignment
Perfect?
#### ReferenceStrand
在进行装配的时候是以基因组上面的链方向以及位置为基准的
#### Unique
Unique?(这个属性值应该从blastn日志之中导出mapping数据的时候就执行了的)

