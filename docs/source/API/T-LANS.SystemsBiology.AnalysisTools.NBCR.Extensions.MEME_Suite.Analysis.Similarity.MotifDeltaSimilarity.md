---
title: MotifDeltaSimilarity
---

# MotifDeltaSimilarity
_namespace: [LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Analysis.Similarity](N-LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Analysis.Similarity.html)_





### Methods

#### __counts
```csharp
LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Analysis.Similarity.MotifDeltaSimilarity.__counts(LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.ComponentModel.MotifPM[],LANS.SystemsBiology.SequenceModel.NucleotideModels.DNA[])
```
计算某些连续的碱基片段在序列之中的出现频率

|Parameter Name|Remarks|
|--------------|-------|
|ns|-|


#### DinucleotideBIAS
```csharp
LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Analysis.Similarity.MotifDeltaSimilarity.DinucleotideBIAS(LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.ComponentModel.MotifPM[],LANS.SystemsBiology.SequenceModel.NucleotideModels.DNA,LANS.SystemsBiology.SequenceModel.NucleotideModels.DNA)
```
Dinucleotide relative abundance values (dinucleotide bias) are assessed through the odds ratio p(XY) = f(XY)/f(X)f(Y), 
 where fX denotes the frequency of the nucleotide X and fXY is the frequency of the dinucleotide XY in the sequence under study.

#### MergeSubsamples
```csharp
LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Analysis.Similarity.MotifDeltaSimilarity.MergeSubsamples(System.String,System.Double)
```


|Parameter Name|Remarks|
|--------------|-------|
|source|Subsample经过MEME计算所导出的文件夹|


#### MotifDiff
```csharp
LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Analysis.Similarity.MotifDeltaSimilarity.MotifDiff(System.String,System.String)
```


|Parameter Name|Remarks|
|--------------|-------|
|a|**a**和**b**都是MEME的文本结果文件的文件路径|
|b|-|


#### Sigma
```csharp
LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Analysis.Similarity.MotifDeltaSimilarity.Sigma(LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.ComponentModel.MotifPM[],LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.ComponentModel.MotifPM[])
```
A measure of difference between two sequences f and g (from different organisms or from different regions of the same genome) 
 is the average absolute dinucleotide relative abundance difference calculated as

 sigma(f, g) = (1/16)*∑|pXY(f)-pXY(g)|
 
 where the sum extends over all dinucleotides (abbreviated sigma-differences).

|Parameter Name|Remarks|
|--------------|-------|
|f|-|
|g|-|



