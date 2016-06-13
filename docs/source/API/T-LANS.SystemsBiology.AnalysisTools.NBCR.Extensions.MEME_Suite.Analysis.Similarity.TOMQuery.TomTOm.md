---
title: TomTOm
---

# TomTOm
_namespace: [LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Analysis.Similarity.TOMQuery](N-LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Analysis.Similarity.TOMQuery.html)_

various motif column comparison functions and score combination methods

### Methods

#### Compare
```csharp
LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Analysis.Similarity.TOMQuery.TomTOm.Compare(LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Analysis.MotifScans.AnnotationModel,LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Analysis.MotifScans.AnnotationModel,LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Analysis.Similarity.TOMQuery.TomTOm.ColumnCompare,LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Analysis.Similarity.TOMQuery.Parameters)
```


|Parameter Name|Remarks|
|--------------|-------|
|query|-|
|LDM|GCModeller的数据库里面的Motif模型|
|method|-|


#### CompareBest
```csharp
LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Analysis.Similarity.TOMQuery.TomTOm.CompareBest(System.String,System.String,System.Double,System.Double,System.Double)
```


|Parameter Name|Remarks|
|--------------|-------|
|query|query的MEME.txt|


#### ED
```csharp
LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Analysis.Similarity.TOMQuery.TomTOm.ED(LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Analysis.MotifScans.ResidueSite,LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Analysis.MotifScans.ResidueSite)
```


|Parameter Name|Remarks|
|--------------|-------|
|X|-|
|Y|-|


#### PCC
```csharp
LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Analysis.Similarity.TOMQuery.TomTOm.PCC(LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Analysis.MotifScans.ResidueSite,LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Analysis.MotifScans.ResidueSite)
```
PCC, Pearson correlation coefficient;

|Parameter Name|Remarks|
|--------------|-------|
|X|-|
|Y|-|


#### ToChar
```csharp
LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Analysis.Similarity.TOMQuery.TomTOm.ToChar(LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Analysis.MotifScans.ResidueSite)
```
大写字母表示概率很高的，小写字母表示概率比较低的，N表示任意碱基

|Parameter Name|Remarks|
|--------------|-------|
|x|-|





