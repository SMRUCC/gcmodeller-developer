---
title: ReadsMap
---

# ReadsMap
_namespace: [LANS.SystemsBiology.Toolkits.RNA_Seq.TSSAR](N-LANS.SystemsBiology.Toolkits.RNA_Seq.TSSAR.html)_

统计一个rna-seq文库之中的每一个碱基的频数



### Methods

#### Left
```csharp
LANS.SystemsBiology.Toolkits.RNA_Seq.TSSAR.ReadsMap.Left(LANS.SystemsBiology.Toolkits.RNA_Seq.BOW.DocumentFormat.SAM.DocumentElements.AlignmentReads)
```
获取目标Read片段的最左端的碱基位点的位置

|Parameter Name|Remarks|
|--------------|-------|
|Read|-|


#### LoadConfig
```csharp
LANS.SystemsBiology.Toolkits.RNA_Seq.TSSAR.ReadsMap.LoadConfig(System.String)
```
使用这个函数进行绘图设备的配置参数的读取操作

|Parameter Name|Remarks|
|--------------|-------|
|file|-|


#### MapDrawing
```csharp
LANS.SystemsBiology.Toolkits.RNA_Seq.TSSAR.ReadsMap.MapDrawing(LANS.SystemsBiology.Toolkits.RNA_Seq.BOW.DocumentFormat.SAM.SAM,System.Int64,System.Int64,LANS.SystemsBiology.Assembly.NCBI.GenBank.TabularFormat.PTT,LANS.SystemsBiology.AnalysisTools.DataVisualization.ChromosomeMap.Configurations)
```
绘制一段区域内的核酸序列之中的每一个碱基至上的Reads的频数

|Parameter Name|Remarks|
|--------------|-------|
|SAM|-|
|RangeStart|-|
|RangeEnds|-|
|PTT|-|
|Config|-|



