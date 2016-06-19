---
title: MotifScans
---

# MotifScans
_namespace: [LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.Analysis.MotifScans](N-LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.Analysis.MotifScans.html)_

MEME操作实际上是将motif位点的序列进行分组，则某一个符合条件的位点应该不仅仅和PWM可以匹配，和生成那些位点的序列也应该匹配



### Methods

#### Mast
```csharp
LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.Analysis.MotifScans.MotifScans.Mast(LANS.SystemsBiology.SequenceModel.FASTA.FastaToken)
```
函数返回可能的匹配上的位点的位置以及序列片段，链的方向

|Parameter Name|Remarks|
|--------------|-------|
|Nt|-|


#### Match
```csharp
LANS.SystemsBiology.AnalysisTools.ComparativeGenomics.Analysis.MotifScans.MotifScans.Match(Microsoft.VisualBasic.ComponentModel.DataStructures.SlideWindowHandle{LANS.SystemsBiology.SequenceModel.NucleotideModels.DNA},System.Double,System.Boolean,System.Int64)
```


|Parameter Name|Remarks|
|--------------|-------|
|sequence|基因组上面的滑窗位点片段|
|PWMDelta|-|
|complement|-|



