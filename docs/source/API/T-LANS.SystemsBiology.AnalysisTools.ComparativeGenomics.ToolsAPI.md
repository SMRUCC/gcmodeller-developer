---
title: ToolsAPI
---

# ToolsAPI
_namespace: [LANS.SystemsBiology.AnalysisTools.ComparativeGenomics](N-LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.html)_





### Methods

#### __colorRender
```csharp
LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.ToolsAPI.__colorRender(System.String,LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.SiteSigma[],LANS.SystemsBiology.Assembly.NCBI.GenBank.TabularFormat.PTT,LANS.SystemsBiology.NCBI.Extensions.Analysis.BestHit,System.Collections.Generic.KeyValuePair{System.Int32,System.String[]}[])
```
获取delta位点染色数据

#### __compileSigma
```csharp
LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.ToolsAPI.__compileSigma(System.Collections.Generic.KeyValuePair{System.String,System.String}[],System.String)
```


|Parameter Name|Remarks|
|--------------|-------|
|dat|每一个文件之中的行数都是一样的，因为都是以同一个菌株作为计算的参照|
|export|-|


#### __genomeSigmaDiff
```csharp
LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.ToolsAPI.__genomeSigmaDiff(LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.ToolsAPI.Cache[],LANS.SystemsBiology.SequenceModel.FASTA.FastaToken)
```
应用于@"M:LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.ToolsAPI.BatchCalculation(System.String,System.String,System.Int32)"函数的非并行版本，请在上一层调用之中使用并行化

|Parameter Name|Remarks|
|--------------|-------|
|cache|计算缓存|
|compare|-|


#### __regionMetaParser
```csharp
LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.ToolsAPI.__regionMetaParser(LANS.SystemsBiology.SequenceModel.FASTA.FastaToken)
```


|Parameter Name|Remarks|
|--------------|-------|
|Fasta|>Region1(1492-6218)|


#### BatchCalculation
```csharp
LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.ToolsAPI.BatchCalculation(System.String,System.String,System.Int32)
```
对**source**文件夹之中的所有序列对象进行两两比对，适用于小规模的计算

|Parameter Name|Remarks|
|--------------|-------|
|source|-|
|EXPORT|-|
|windowsSize|-|


#### BatchCalculation2
```csharp
LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.ToolsAPI.BatchCalculation2(System.String,System.String,System.Int32)
```
对**source**文件夹之中的所有序列对象进行两两比对，适用于小规模的计算

|Parameter Name|Remarks|
|--------------|-------|
|source|-|
|EXPORT|-|
|windowsSize|-|


#### CompileCABIAS
```csharp
LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.ToolsAPI.CompileCABIAS(System.String,System.String)
```


|Parameter Name|Remarks|
|--------------|-------|
|genes|-|

> 
>  SpeciesID, CAI, CUBIAS_LIST
>  src1
>  src2
>  src3
>  ......
>  

#### GenerateDeltaDiffReport
```csharp
LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.ToolsAPI.GenerateDeltaDiffReport(System.String,System.Collections.Generic.IEnumerable{LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.ChromosomePartitioningEntry},System.Collections.Generic.IEnumerable{LANS.SystemsBiology.Assembly.NCBI.GenBank.CsvExports.GeneDumpInfo})
```
按照功能分组数据@"T:LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.ChromosomePartitioningEntry"进行比较基因组学分析报告文件的生成

|Parameter Name|Remarks|
|--------------|-------|
|source|-|
|CDSInfo|@"P:LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.SiteSigma.Site"位置上面的基因的信息|

> 
>  
>  Description QueryProtein PartionTAG genome1.delta genome1.similarity genome2.delta genome2.similarity
>  dsc1  a   1
>  dsc2  b   2
>  dsc3  c   3
>  
>  

#### GenomeSigmaDifference_p
```csharp
LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.ToolsAPI.GenomeSigmaDifference_p(LANS.SystemsBiology.SequenceModel.FASTA.FastaToken,LANS.SystemsBiology.SequenceModel.FASTA.FastaToken,System.Int32)
```
并行版本的计算函数

|Parameter Name|Remarks|
|--------------|-------|
|genome|-|
|windowsSize|默认为1kb的长度|


#### GetReferenceRule
```csharp
LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.ToolsAPI.GetReferenceRule(LANS.SystemsBiology.SequenceModel.FASTA.FastaToken,LANS.SystemsBiology.Assembly.NCBI.GenBank.TabularFormat.PTT)
```
获取默认的外标尺：基因组之中的dnaA-gyrB之间的序列

#### MeasureHomogeneity
```csharp
LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.ToolsAPI.MeasureHomogeneity(System.Collections.Generic.IEnumerable{LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.PartitioningData},LANS.SystemsBiology.SequenceModel.FASTA.FastaToken,System.Int32,System.Int32)
```
使用某一个标尺来计算基因组之中的序列片段的同质性的差异

|Parameter Name|Remarks|
|--------------|-------|
|Sp|标尺片段的结束位置|
|St|标尺片段的起始位置|


#### MergeDelta
```csharp
LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.ToolsAPI.MergeDelta(System.String,System.Collections.Generic.IEnumerable{LANS.SystemsBiology.ComponentModel.IGeneBrief},System.String,System.String,System.Int32)
```
要求所有的文件都必须要为同一个基因组比对不同的基因组，不可以改动输出文件的文件名

|Parameter Name|Remarks|
|--------------|-------|
|source|-|


#### MotifPartitionDistribution
```csharp
LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.ToolsAPI.MotifPartitionDistribution(System.Collections.Generic.IEnumerable{LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.PartitioningData},System.Collections.Generic.IEnumerable{LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.DocumentFormat.MEME.LDM.Motif})
```


|Parameter Name|Remarks|
|--------------|-------|
|data|-|
|Motifs|所加载的motif数据|


#### PartitioningDataFromFasta
```csharp
LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.ToolsAPI.PartitioningDataFromFasta(System.String)
```
>Region1(1492-6218)

|Parameter Name|Remarks|
|--------------|-------|
|Fasta|-|


#### PartitioningSigmaCompareWith
```csharp
LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.ToolsAPI.PartitioningSigmaCompareWith(System.Collections.Generic.IEnumerable{LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.PartitioningData},System.String,System.String,System.Int32)
```


#### PartitionSimilarity
```csharp
LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.ToolsAPI.PartitionSimilarity(System.Collections.Generic.IEnumerable{LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.PartitioningData})
```
计算基因组之中的不同的功能分段之间的同质性

|Parameter Name|Remarks|
|--------------|-------|
|Data|-|


#### SigmaCompareWith
```csharp
LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.ToolsAPI.SigmaCompareWith(System.String,System.String,System.String,System.Int32)
```


|Parameter Name|Remarks|
|--------------|-------|
|query|Query基因组的fasta序列的文件路径|
|sbjDIR|将要进行比较的基因组的fasta序列文件的存放文件夹|



