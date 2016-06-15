---
title: SNPScan
---

# SNPScan
_namespace: [LANS.SystemsBiology.AnalysisTools.SequenceTools.SNP](N-LANS.SystemsBiology.AnalysisTools.SequenceTools.SNP.html)_



### Methods

#### ScanRaw
```csharp
LANS.SystemsBiology.AnalysisTools.SequenceTools.SNP.SNPScan.ScanRaw(LANS.SystemsBiology.SequenceModel.FASTA.FastaFile)
```


|Parameter Name|Remarks|
|--------------|-------|
|nt|可以不经过任何处理，程序在这里会自动使用clustal进行对齐操作|


#### ScanSNPs
```csharp
LANS.SystemsBiology.AnalysisTools.SequenceTools.SNP.SNPScan.ScanSNPs(LANS.SystemsBiology.SequenceModel.FASTA.FastaFile,System.Int32,System.Boolean,System.Boolean)
```
Scan snp sites from the given fasta sequence file.

|Parameter Name|Remarks|
|--------------|-------|
|nt|序列必须都是已经经过clustal对齐了的，并且拥有FileName属性值|





