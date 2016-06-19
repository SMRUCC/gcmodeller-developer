---
title: DifferenceMeasurement
---

# DifferenceMeasurement
_namespace: [LANS.SystemsBiology.AnalysisTools.ComparativeGenomics](N-LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.html)_

MEASURES OF DIFFERENCES WITHIN AND BETWEEN GENOMES.(比较两条核酸序列之间的差异性)



### Methods

#### __bias
```csharp
LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.DifferenceMeasurement.__bias(LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.NucleicAcid,LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.NucleicAcid,LANS.SystemsBiology.SequenceModel.NucleotideModels.DNA,LANS.SystemsBiology.SequenceModel.NucleotideModels.DNA)
```
使用计算缓存进行计算

|Parameter Name|Remarks|
|--------------|-------|
|f|计算缓存|
|g|-|
|X|-|
|Y|-|


#### Sigma
```csharp
LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.DifferenceMeasurement.Sigma(LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.NucleicAcid,LANS.SystemsBiology.SequenceModel.NucleotideModels.NucleicAcid)
```


|Parameter Name|Remarks|
|--------------|-------|
|f|计算缓存：窗口片段数据或者整条DNA链|
|g|当需要比对序列上面的某一个片段与整条序列之间的差异性的时候，这个参数可以为该需要进行计算比对的序列片段对象|


#### SimilarDescription
```csharp
LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.DifferenceMeasurement.SimilarDescription(System.Double)
```


|Parameter Name|Remarks|
|--------------|-------|
|sigma|value from the calculation of function @"M:LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.DifferenceMeasurement.Sigma(LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.NucleicAcid,LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.NucleicAcid)"|



