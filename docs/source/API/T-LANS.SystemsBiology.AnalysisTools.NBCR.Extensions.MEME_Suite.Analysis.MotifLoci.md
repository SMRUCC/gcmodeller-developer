---
title: MotifLoci
---

# MotifLoci
_namespace: [LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Analysis](N-LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Analysis.html)_

对MEME text里面的位点在整个基因组上面的定位



### Methods

#### __located
```csharp
LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Analysis.MotifLoci.__located(LANS.SystemsBiology.Assembly.NCBI.GenBank.TabularFormat.ComponentModels.GeneBrief,LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.DocumentFormat.MEME.LDM.Site,System.Collections.Generic.Dictionary{System.String,System.Collections.Generic.KeyValuePair{System.Double,System.Int32}})
```


|Parameter Name|Remarks|
|--------------|-------|
|GeneObject|-|
|site|位点都描绘的是在所输入的@"T:LANS.SystemsBiology.SequenceModel.FASTA.FastaFile"文件之中的序列上面你的左端的起始位置|


#### Located
```csharp
LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Analysis.MotifLoci.Located(LANS.SystemsBiology.Assembly.NCBI.GenBank.TabularFormat.ComponentModels.GeneBrief,LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.DocumentFormat.MEME.LDM.Site,System.Int32)
```
获取Motif位点在基因组上面的位置

|Parameter Name|Remarks|
|--------------|-------|
|gene|-|
|site|-|
|len|MEME序列的长度|



