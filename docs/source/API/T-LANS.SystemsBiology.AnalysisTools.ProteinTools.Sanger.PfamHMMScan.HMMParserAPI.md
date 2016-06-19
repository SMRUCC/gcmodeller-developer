---
title: HMMParserAPI
---

# HMMParserAPI
_namespace: [LANS.SystemsBiology.AnalysisTools.ProteinTools.Sanger.PfamHMMScan](N-LANS.SystemsBiology.AnalysisTools.ProteinTools.Sanger.PfamHMMScan.html)_





### Methods

#### __probability
```csharp
LANS.SystemsBiology.AnalysisTools.ProteinTools.Sanger.PfamHMMScan.HMMParserAPI.__probability(System.String)
```
All probability parameters are all stored As negative natural log probabilities With five digits Of precision To
 the right Of the Decimal point, rounded. For example, a probability Of 0:25 Is stored as 􀀀log 0:25 = 1:38629.
 The special Case Of a zero probability Is stored As '*’.

|Parameter Name|Remarks|
|--------------|-------|
|x|-|


#### LoadDoc
```csharp
LANS.SystemsBiology.AnalysisTools.ProteinTools.Sanger.PfamHMMScan.HMMParserAPI.LoadDoc(System.String)
```
加载Pfam-A.hmm里面的隐马科夫模型数据

|Parameter Name|Remarks|
|--------------|-------|
|path|Pfam-A.hmm|


#### NodeParser
```csharp
LANS.SystemsBiology.AnalysisTools.ProteinTools.Sanger.PfamHMMScan.HMMParserAPI.NodeParser(System.String[])
```
一个氨基酸残基

|Parameter Name|Remarks|
|--------------|-------|
|block|-|

> 
>  因为ln1=0，有些时候是0概率的，ln0会计算不出来，这个时候使用*代替
>  


