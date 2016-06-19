---
title: v228
---

# v228
_namespace: [LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.BLASTOutput.BlastPlus](N-LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.BLASTOutput.BlastPlus.html)_

2.2.28版本的BLAST+程序的日志输出文件

> 
>  默认的文件编码是@"P:System.Text.Encoding.UTF8"
>  


### Methods

#### __generateLine
```csharp
LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.BLASTOutput.BlastPlus.v228.__generateLine(LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.BLASTOutput.BlastPlus.Query,System.Double,System.Double)
```
导出最佳的符合条件的

|Parameter Name|Remarks|
|--------------|-------|
|query|-|
|coverage|-|
|identities|-|


#### CheckIntegrity
```csharp
LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.BLASTOutput.BlastPlus.v228.CheckIntegrity(LANS.SystemsBiology.SequenceModel.FASTA.FastaFile)
```
根据Query检查完整性

|Parameter Name|Remarks|
|--------------|-------|
|QuerySource|主要是使用到Query序列之中的Title属性|


#### ExportAllBestHist
```csharp
LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.BLASTOutput.BlastPlus.v228.ExportAllBestHist(System.Double,System.Double)
```
Exports all of the hits which it meet the condition of threshold.(导出所有的单项最佳)

#### ExportBestHit
```csharp
LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.BLASTOutput.BlastPlus.v228.ExportBestHit(System.Double,System.Double)
```
从本日志文件之中导出BestHit表格(单项最佳的)

#### ExportOverview
```csharp
LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.BLASTOutput.BlastPlus.v228.ExportOverview
```
不做任何筛选，导出所有的比对信息

#### SBHLines
```csharp
LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.BLASTOutput.BlastPlus.v228.SBHLines(LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.BLASTOutput.BlastPlus.Query,System.Double,System.Double)
```
导出所有符合条件的

|Parameter Name|Remarks|
|--------------|-------|
|Query|-|
|coverage|-|
|identities|-|



