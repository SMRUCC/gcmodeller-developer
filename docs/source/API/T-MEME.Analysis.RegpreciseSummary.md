---
title: RegpreciseSummary
---

# RegpreciseSummary
_namespace: [MEME.Analysis](N-MEME.Analysis.html)_





### Methods

#### __correlationFilter
```csharp
MEME.Analysis.RegpreciseSummary.__correlationFilter(System.String,System.String[],LANS.SystemsBiology.Toolkits.RNA_Seq.ICorrelations,System.Double)
```


|Parameter Name|Remarks|
|--------------|-------|
|ORF|-|
|regulators|-|
|correlations|-|
|cutOff|一般是0.6|


#### __createSites
```csharp
MEME.Analysis.RegpreciseSummary.__createSites(LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.ComponentModel.MotifSite,System.Collections.Generic.Dictionary{System.Int32,LANS.SystemsBiology.DatabaseServices.Regprecise.bbhMappings[]},LANS.SystemsBiology.DatabaseServices.Regprecise.WebServices.Regulations,System.Collections.Generic.Dictionary{System.String,LANS.SystemsBiology.Assembly.KEGG.DBGET.BriteHEntry.Module},LANS.SystemsBiology.Toolkits.RNA_Seq.ICorrelations,System.Double)
```


|Parameter Name|Remarks|
|--------------|-------|
|site|没有调控因子的记录，需要从数据库之中读取数据|
|regulators|需要进行注释的基因组和Regprecise数据库Mapping所得到的结果|


#### __getMapped
```csharp
MEME.Analysis.RegpreciseSummary.__getMapped(System.Collections.Generic.IEnumerable{LANS.SystemsBiology.DatabaseServices.Regprecise.bbhMappings})
```
得到基因组之中被mapped到的调控因子

#### GenerateRegulations
```csharp
MEME.Analysis.RegpreciseSummary.GenerateRegulations(System.Collections.Generic.Dictionary{System.Int32,LANS.SystemsBiology.DatabaseServices.Regprecise.bbhMappings[]},System.Collections.Generic.IEnumerable{LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.ComponentModel.MotifSite},System.String,System.Double)
```
以site位点为基准：从site找调控因子

|Parameter Name|Remarks|
|--------------|-------|
|regulators|-|
|sites|-|


#### LoadRegpreciseBBH
```csharp
MEME.Analysis.RegpreciseSummary.LoadRegpreciseBBH(System.String)
```


|Parameter Name|Remarks|
|--------------|-------|
|csv|-|


#### SiteToRegulation
```csharp
MEME.Analysis.RegpreciseSummary.SiteToRegulation(LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Analysis.MotifScans.MastSites,LANS.SystemsBiology.Toolkits.RNA_Seq.ICorrelations,LANS.SystemsBiology.Assembly.DOOR.DOOR)
```
直接将MastSite里面的Trace作为调控因子

|Parameter Name|Remarks|
|--------------|-------|
|site|-|
|correlations|-|



