---
title: DomainAnalysis
---

# DomainAnalysis
_namespace: [LANS.SystemsBiology.AnalysisTools.ProteinTools.Sanger.Pfam](N-LANS.SystemsBiology.AnalysisTools.ProteinTools.Sanger.Pfam.html)_





### Methods

#### __createStructureRegion
```csharp
LANS.SystemsBiology.AnalysisTools.ProteinTools.Sanger.Pfam.DomainAnalysis.__createStructureRegion(LANS.SystemsBiology.AnalysisTools.ProteinTools.Sanger.Pfam.PfamString.PfamString,LANS.SystemsBiology.SequenceModel.FASTA.FastaToken)
```
将两个Pfam结构域之间的序列取出来，使用Chou-Fasman计算二级结构

|Parameter Name|Remarks|
|--------------|-------|
|describ|-|
|sequence|-|

_returns: [ABCT](start|ends)_

#### CreatePfamString
```csharp
LANS.SystemsBiology.AnalysisTools.ProteinTools.Sanger.Pfam.DomainAnalysis.CreatePfamString(LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.BLASTOutput.BlastPlus.v228,LANS.SystemsBiology.SequenceModel.FASTA.FastaFile,System.Int32,System.Int32,System.Boolean,System.Double,System.Double,System.Double,System.Double)
```


|Parameter Name|Remarks|
|--------------|-------|
|blastOutput|不需要进行@"M:Microsoft.VisualBasic.Text.TextGrepScriptEngine.Grep(System.String)"[格式化操作]|
|query|是进过grep操作之后的数据|


#### EnzymeClassified
```csharp
LANS.SystemsBiology.AnalysisTools.ProteinTools.Sanger.Pfam.DomainAnalysis.EnzymeClassified(System.Collections.Generic.IEnumerable{LANS.SystemsBiology.Assembly.Expasy.AnnotationsTool.T_EnzymeClass_BLAST_OUT},System.Collections.Generic.IEnumerable{LANS.SystemsBiology.AnalysisTools.ProteinTools.Sanger.Pfam.ProteinDomainArchitecture.MPAlignment.MPCsvArchive})
```
这个方法只会筛选出可能的最佳的分类注释

|Parameter Name|Remarks|
|--------------|-------|
|data|-|
|MPAlignment|-|


#### FillChouFasmanData
```csharp
LANS.SystemsBiology.AnalysisTools.ProteinTools.Sanger.Pfam.DomainAnalysis.FillChouFasmanData(LANS.SystemsBiology.AnalysisTools.ProteinTools.Sanger.Pfam.PfamString.PfamString,LANS.SystemsBiology.SequenceModel.FASTA.FastaToken)
```
假若没有找到相应的fasta序列，则会返回原来的数据

|Parameter Name|Remarks|
|--------------|-------|
|pfString|-|
|Fasta|经过了Grep操作的fasta序列数据|


#### ToPfamString
```csharp
LANS.SystemsBiology.AnalysisTools.ProteinTools.Sanger.Pfam.DomainAnalysis.ToPfamString(LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.BLASTOutput.BlastPlus.Query,System.Double,System.Double,System.Double,System.Double)
```
将blastp比对数据转换为Pfam-String数据

|Parameter Name|Remarks|
|--------------|-------|
|QueryIteration|-|
|offset|0.11|
|identities|暂时无用|



