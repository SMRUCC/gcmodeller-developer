---
title: ShellScriptAPI
---

# ShellScriptAPI
_namespace: [LANS.SystemsBiology.AnalysisTools.DataVisualization.Interaction.Phylip](N-LANS.SystemsBiology.AnalysisTools.DataVisualization.Interaction.Phylip.html)_



### Methods

#### __exportMatrix
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.Interaction.Phylip.ShellScriptAPI.__exportMatrix(LANS.SystemsBiology.NCBI.Extensions.Analysis.BestHit)
```
矩阵文件的格式要求为：
 行的标题（每一行中的第一个元素）为基因组的名称
 每一列为某一个基因的频率或者其他数值
 例如：
 基因1，基因2，基因3， ...
 基因组1 1 1 0
 基因组2 2 1 4

|Parameter Name|Remarks|
|--------------|-------|
|besthit|-|


#### CreateNodeLabelAnnotation
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.Interaction.Phylip.ShellScriptAPI.CreateNodeLabelAnnotation(System.String,System.String,System.Collections.Generic.IEnumerable{LANS.SystemsBiology.Assembly.NCBI.GenBank.CsvExports.gbEntryBrief})
```
{Trimmed_ID, uid}

#### ExportGendistMatrixFromBesthitMeta
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.Interaction.Phylip.ShellScriptAPI.ExportGendistMatrixFromBesthitMeta(System.Collections.Generic.IEnumerable{LANS.SystemsBiology.NCBI.Extensions.Analysis.BestHit},System.String,System.Boolean,System.Int32)
```
直接使用identities值作为最开始的等位基因的频率值

|Parameter Name|Remarks|
|--------------|-------|
|MetaSource|-|
|Limits|0或者小于零的数值都为不限制,假设做出数量的限制的话，函数只会提取指定数目的基因组数据，都是和外标尺最接近的基因组|


#### LoadHitsVennData
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.Interaction.Phylip.ShellScriptAPI.LoadHitsVennData(System.String)
```


|Parameter Name|Remarks|
|--------------|-------|
|source|Xml数据的文件夹|


#### NeighborMatrixFromVennMatrix
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.Interaction.Phylip.ShellScriptAPI.NeighborMatrixFromVennMatrix(Microsoft.VisualBasic.DocumentFormat.Csv.DocumentStream.File)
```
从已经生成的韦恩矩阵之中生成距离矩阵

#### SelfOverviewsMAT
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.Interaction.Phylip.ShellScriptAPI.SelfOverviewsMAT(LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.BLASTOutput.Views.Overview)
```
不可以使用并行化拓展，因为有一一对应关系

|Parameter Name|Remarks|
|--------------|-------|
|overview|-|





