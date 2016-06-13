---
title: RegpreciseAPI
---

# RegpreciseAPI
_namespace: [LANS.SystemsBiology.DatabaseServices.Regprecise](N-LANS.SystemsBiology.DatabaseServices.Regprecise.html)_



### Methods

#### __exportMotifs
```csharp
LANS.SystemsBiology.DatabaseServices.Regprecise.RegpreciseAPI.__exportMotifs(System.Collections.Generic.IEnumerable{System.Collections.Generic.KeyValuePair{System.String,LANS.SystemsBiology.DatabaseServices.Regtransbase.WebServices.FastaObject}},System.String,LANS.SystemsBiology.DatabaseServices.Regprecise.TranscriptionFactors)
```


|Parameter Name|Remarks|
|--------------|-------|
|source|-|
|Family|-|


#### DownloadRegulatorSequence
```csharp
LANS.SystemsBiology.DatabaseServices.Regprecise.RegpreciseAPI.DownloadRegulatorSequence(LANS.SystemsBiology.DatabaseServices.Regprecise.TranscriptionFactors,System.String)
```
Download regprecise regulator protein sequence from kegg database.

|Parameter Name|Remarks|
|--------------|-------|
|Regprecise|-|
|EXPORT|-|


#### Export
```csharp
LANS.SystemsBiology.DatabaseServices.Regprecise.RegpreciseAPI.Export(LANS.SystemsBiology.DatabaseServices.Regprecise.TranscriptionFactors,System.String)
```


|Parameter Name|Remarks|
|--------------|-------|
|Regprecise|-|
|outDIR|-|


#### ExportBySpecies
```csharp
LANS.SystemsBiology.DatabaseServices.Regprecise.RegpreciseAPI.ExportBySpecies(LANS.SystemsBiology.DatabaseServices.Regprecise.TranscriptionFactors,System.String)
```
还存在问题

|Parameter Name|Remarks|
|--------------|-------|
|Regprecise|-|
|ExportDir|-|


#### LoadRegulationDb
```csharp
LANS.SystemsBiology.DatabaseServices.Regprecise.RegpreciseAPI.LoadRegulationDb
```
加载自有的源之中的调控数据库

#### ReGenerate
```csharp
LANS.SystemsBiology.DatabaseServices.Regprecise.RegpreciseAPI.ReGenerate(LANS.SystemsBiology.DatabaseServices.Regprecise.TranscriptionFactors,System.String,System.String)
```
当有时候向RegulatorSequerncede Fasta文件之中添加了新的Regprecise数据库之中没有的蛋白质序列数据之后，可能会出现
 TFBS序列和Regulator之间的关系无法对应的情况，则这个时候可以使用本方法来重新刷新着两个Fasta序列文件
> 对于调控因子序列仅仅取出LocusTAG以及Description数据，TFBS文件是重新生成的




