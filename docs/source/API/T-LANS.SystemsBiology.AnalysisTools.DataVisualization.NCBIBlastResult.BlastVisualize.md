---
title: BlastVisualize
---

# BlastVisualize
_namespace: [LANS.SystemsBiology.AnalysisTools.DataVisualization.NCBIBlastResult](N-LANS.SystemsBiology.AnalysisTools.DataVisualization.NCBIBlastResult.html)_



### Methods

#### __createHits
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.NCBIBlastResult.BlastVisualize.__createHits(System.Collections.Generic.Dictionary{System.String,LANS.SystemsBiology.Assembly.NCBI.GenBank.CsvExports.GeneDumpInfo},LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.BLASTOutput.BlastPlus.v228)
```
只需要找出有hits的query，然后将位置列举出来即可

|Parameter Name|Remarks|
|--------------|-------|
|ORF|-|
|Blastoutput|-|


#### ApplyDescription
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.NCBIBlastResult.BlastVisualize.ApplyDescription(LANS.SystemsBiology.NCBI.Extensions.NCBIBlastResult.AlignmentTable,System.Collections.Generic.IEnumerable{LANS.SystemsBiology.Assembly.NCBI.GenBank.CsvExports.gbEntryBrief},System.Int32)
```
将编号信息转换为描述信息

|Parameter Name|Remarks|
|--------------|-------|
|table|-|
|info|-|


#### ApplyDescription2
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.NCBIBlastResult.BlastVisualize.ApplyDescription2(LANS.SystemsBiology.NCBI.Extensions.NCBIBlastResult.AlignmentTable,System.Collections.Generic.IEnumerable{LANS.SystemsBiology.Assembly.NCBI.GenBank.CsvExports.gbEntryBrief},System.Int32)
```
将编号信息转换为描述信息

|Parameter Name|Remarks|
|--------------|-------|
|table|-|
|info|-|


#### CreateTableFromBlastOutput
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.NCBIBlastResult.BlastVisualize.CreateTableFromBlastOutput(System.String,System.String,System.Collections.Generic.IEnumerable{LANS.SystemsBiology.Assembly.NCBI.GenBank.CsvExports.GeneDumpInfo})
```
这个函数主要是针对blastp的结果的

|Parameter Name|Remarks|
|--------------|-------|
|source|blast输出日志文件夹|


#### InvokeDrawing
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.NCBIBlastResult.BlastVisualize.InvokeDrawing(LANS.SystemsBiology.NCBI.Extensions.NCBIBlastResult.AlignmentTable,LANS.SystemsBiology.Assembly.NCBI.GenBank.TabularFormat.PTT,System.String[],System.Int32,System.Boolean,System.String,LANS.SystemsBiology.SequenceModel.FASTA.FastaToken,System.Boolean,System.Boolean,System.Boolean,System.Boolean,System.Boolean,System.String,System.Boolean,System.Double,LANS.SystemsBiology.AnalysisTools.DataVisualization.ComparativeGenomics.ModelAPI.ICOGsBrush)
```
对blast结果进行可视化

|Parameter Name|Remarks|
|--------------|-------|
|alignment|-|
|refQuery|-|
|AlignmentColorSchema|bit_scores, identities|


#### ShortID
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.NCBIBlastResult.BlastVisualize.ShortID(LANS.SystemsBiology.SequenceModel.FASTA.FastaFile,System.String)
```
对Entry信息进行简化

|Parameter Name|Remarks|
|--------------|-------|
|data|-|




### Properties

#### ConvertFactor
一个碱基或者一个氨基酸所对应的像素

