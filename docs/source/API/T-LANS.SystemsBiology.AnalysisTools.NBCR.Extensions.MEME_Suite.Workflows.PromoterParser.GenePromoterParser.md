---
title: GenePromoterParser
---

# GenePromoterParser
_namespace: [LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Workflows.PromoterParser](N-LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Workflows.PromoterParser.html)_

直接从基因的启动子区选取序列数据以及外加操纵子的第一个基因的启动子序列



### Methods

#### #ctor
```csharp
LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Workflows.PromoterParser.GenePromoterParser.#ctor(LANS.SystemsBiology.SequenceModel.FASTA.FastaToken,LANS.SystemsBiology.Assembly.NCBI.GenBank.TabularFormat.PTT)
```
基因组的Fasta核酸序列

|Parameter Name|Remarks|
|--------------|-------|
|Fasta|-|


#### CreateObject
```csharp
LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Workflows.PromoterParser.GenePromoterParser.CreateObject(System.Int32,LANS.SystemsBiology.Assembly.NCBI.GenBank.TabularFormat.PTT,LANS.SystemsBiology.SequenceModel.NucleotideModels.SegmentReader)
```
解析出所有基因前面的序列片段

|Parameter Name|Remarks|
|--------------|-------|
|Length|-|
|PTT|-|
|GenomeSeq|-|


#### DiffExpressionPromoters
```csharp
LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Workflows.PromoterParser.GenePromoterParser.DiffExpressionPromoters(LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Workflows.PromoterParser.GenePromoterParser,System.Collections.Generic.IEnumerable{LANS.SystemsBiology.Toolkits.RNA_Seq.RTools.DESeq2.ResultData},System.String)
```
根据DESeq的结果得到启动子区的序列进行MEME分析

|Parameter Name|Remarks|
|--------------|-------|
|Promoter|-|
|DESeq|-|
|EXPORT|-|


#### GenerateExpressionLevelMappings
```csharp
LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Workflows.PromoterParser.GenePromoterParser.GenerateExpressionLevelMappings(System.Collections.Generic.IEnumerable{LANS.SystemsBiology.Toolkits.RNA_Seq.RTools.DESeq2.ResultData})
```
等级映射只能够在相同的实验条件下得到的样本之中进行操作

|Parameter Name|Remarks|
|--------------|-------|
|DESeq|-|


#### GetSequenceById
```csharp
LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Workflows.PromoterParser.GenePromoterParser.GetSequenceById(LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Workflows.PromoterParser.GenePromoterParser,System.Collections.Generic.IEnumerable{System.String},System.Int32)
```


|Parameter Name|Remarks|
|--------------|-------|
|Promoter|-|
|idList|-|
|Length|-|


#### ParsingKEGGModules
```csharp
LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Workflows.PromoterParser.GenePromoterParser.ParsingKEGGModules(LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Workflows.PromoterParser.GenePromoterParser,System.String,System.String,System.String,LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Workflows.PromoterParser.GetLocusTags)
```


|Parameter Name|Remarks|
|--------------|-------|
|modsDIR|包含有KEGG Modules的文件夹|


#### ParsingKEGGPathways
```csharp
LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Workflows.PromoterParser.GenePromoterParser.ParsingKEGGPathways(LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Workflows.PromoterParser.GenePromoterParser,System.String,System.String,System.String,LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Workflows.PromoterParser.GetLocusTags)
```
可能包含有RNA基因，故而会很容易导致出错

|Parameter Name|Remarks|
|--------------|-------|
|Parser|-|
|DOOR|-|
|PathwaysDIR|-|
|EXPORT|-|


#### ParsingList
```csharp
LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Workflows.PromoterParser.GenePromoterParser.ParsingList(LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Workflows.PromoterParser.GenePromoterParser,LANS.SystemsBiology.Assembly.DOOR.DOOR,System.Collections.Generic.IEnumerable{System.String},System.String,System.String,LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Workflows.PromoterParser.GetLocusTags)
```


|Parameter Name|Remarks|
|--------------|-------|
|locus|需要进行解析的基因的编号的列表|



