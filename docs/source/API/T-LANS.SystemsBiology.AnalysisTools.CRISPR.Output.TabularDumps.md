---
title: TabularDumps
---

# TabularDumps
_namespace: [LANS.SystemsBiology.AnalysisTools.CRISPR.Output](N-LANS.SystemsBiology.AnalysisTools.CRISPR.Output.html)_



### Methods

#### BatchTrimConserved
```csharp
LANS.SystemsBiology.AnalysisTools.CRISPR.Output.TabularDumps.BatchTrimConserved(System.String,System.String,System.Collections.Generic.IEnumerable{LANS.SystemsBiology.Assembly.NCBI.GenBank.CsvExports.GeneDumpInfo},System.String)
```
请注意，这个函数的使用请务必要保证文件名除却拓展名以外都是是相同的

|Parameter Name|Remarks|
|--------------|-------|
|scan_source|这个是CRT的批量扫描输出的文件夹|
|besthit_source|这个是最佳双向比对的输出文件夹|
|export|-|


#### RemoveConserved
```csharp
LANS.SystemsBiology.AnalysisTools.CRISPR.Output.TabularDumps.RemoveConserved(LANS.SystemsBiology.NCBI.Extensions.Analysis.BestHit,System.Collections.Generic.IEnumerable{LANS.SystemsBiology.Assembly.NCBI.GenBank.CsvExports.GeneDumpInfo},LANS.SystemsBiology.AnalysisTools.CRISPR.Output.GenomeScanResult)
```
将保守的区域删除

|Parameter Name|Remarks|
|--------------|-------|
|besthit|-|
|CDSInfo|-|
|data|-|





