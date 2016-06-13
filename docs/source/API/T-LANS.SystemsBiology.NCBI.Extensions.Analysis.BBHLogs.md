---
title: BBHLogs
---

# BBHLogs
_namespace: [LANS.SystemsBiology.NCBI.Extensions.Analysis](N-LANS.SystemsBiology.NCBI.Extensions.Analysis.html)_



### Methods

#### __export
```csharp
LANS.SystemsBiology.NCBI.Extensions.Analysis.BBHLogs.__export(System.Collections.Generic.IEnumerable{LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.Application.BatchParallel.AlignEntry},LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.Application.BatchParallel.AlignEntry,System.Collections.Generic.Dictionary{LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.Application.BatchParallel.AlignEntry,LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.Application.BBH.BestHit[]},LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.Application.BBH.BestHit[])
```
得到最佳双向比对的结果, Top类型

|Parameter Name|Remarks|
|--------------|-------|
|Source|-|
|Entry|-|
|Files|-|
|Query|-|


#### BuildBBHEntry
```csharp
LANS.SystemsBiology.NCBI.Extensions.Analysis.BBHLogs.BuildBBHEntry(System.String,System.String)
```


|Parameter Name|Remarks|
|--------------|-------|
|DIR|Is a Directory which contains the text file output of the blastp searches.|


#### ExportBidirectionalBesthit
```csharp
LANS.SystemsBiology.NCBI.Extensions.Analysis.BBHLogs.ExportBidirectionalBesthit(System.Collections.Generic.IEnumerable{LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.Application.BatchParallel.AlignEntry},System.String,System.Collections.Generic.Dictionary{System.String,LANS.SystemsBiology.Assembly.NCBI.GenBank.CsvExports.GeneDumpInfo},System.Boolean)
```
批量导出双向最佳比对匹配结果

|Parameter Name|Remarks|
|--------------|-------|
|Source|单项最佳的两两比对的结果数据文件夹，里面的数据文件都是从blastp里面倒出来的besthit的csv文件|
|EXPORT|双向最佳的导出文件夹|
|CDSInfo|从GBK文件列表之中所导出来的蛋白质信息的汇总表|


#### ExportLogData
```csharp
LANS.SystemsBiology.NCBI.Extensions.Analysis.BBHLogs.ExportLogData(System.Collections.Generic.IEnumerable{LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.Application.BatchParallel.AlignEntry},System.String,Microsoft.VisualBasic.Text.TextGrepScriptEngine,Microsoft.VisualBasic.Text.TextGrepScriptEngine)
```
使用这个函数批量导出sbh数据，假若数据量比较小的话

|Parameter Name|Remarks|
|--------------|-------|
|source|-|
|EXPORT|-|
|queryGrep|假若解析的方法为空，则会尝试使用默认的方法解析标题|
|SubjectGrep|-|


#### LoadEntries
```csharp
LANS.SystemsBiology.NCBI.Extensions.Analysis.BBHLogs.LoadEntries(System.String,System.String)
```
从文件系统之中加载比对的文件的列表

|Parameter Name|Remarks|
|--------------|-------|
|DIR|-|
|ext|-|


#### LoadSBHEntry
```csharp
LANS.SystemsBiology.NCBI.Extensions.Analysis.BBHLogs.LoadSBHEntry(System.String,System.String)
```
只单独加载单向比对的数据入口点列表

|Parameter Name|Remarks|
|--------------|-------|
|DIR|-|
|query|-|





