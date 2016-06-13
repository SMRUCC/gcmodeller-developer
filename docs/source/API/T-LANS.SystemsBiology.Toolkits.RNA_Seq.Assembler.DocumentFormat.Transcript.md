---
title: Transcript
---

# Transcript
_namespace: [LANS.SystemsBiology.Toolkits.RNA_Seq.Assembler.DocumentFormat](N-LANS.SystemsBiology.Toolkits.RNA_Seq.Assembler.DocumentFormat.html)_

转录本对象，包含有基本的基因结构：ATG-TGA，TSSs，TTS以及链的方向，表达量的高低

### Methods

#### Copy``1
```csharp
LANS.SystemsBiology.Toolkits.RNA_Seq.Assembler.DocumentFormat.Transcript.Copy``1(LANS.SystemsBiology.Assembly.NCBI.GenBank.TabularFormat.ComponentModels.GeneBrief)
```
单个的ORF

#### CreateObject``1
```csharp
LANS.SystemsBiology.Toolkits.RNA_Seq.Assembler.DocumentFormat.Transcript.CreateObject``1(LANS.SystemsBiology.ComponentModel.Loci.NucleotideLocation)
```
要确保左小右大

|Parameter Name|Remarks|
|--------------|-------|
|contig|-|




### Properties

#### Left
@"T:LANS.SystemsBiology.SequenceModel.NucleotideModels.Contig".Left (The transcription start coordinate.)
#### Position
位点和基因对象之间的位置关系的简要描述
#### Raw
Htseq-Count raw/GeneLength
#### Right
@"T:LANS.SystemsBiology.SequenceModel.NucleotideModels.Contig".Right (The transcription stop coordinate.)
#### Strand
@"T:LANS.SystemsBiology.SequenceModel.NucleotideModels.Contig".Strands
#### TSSsShared
5'UTR左端的共享的reads计数

