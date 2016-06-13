---
title: Circos
---

# Circos
_namespace: [LANS.SystemsBiology.AnalysisTools.DataVisualization.Interaction.Circos.Documents.Configurations](N-LANS.SystemsBiology.AnalysisTools.DataVisualization.Interaction.Circos.Documents.Configurations.html)_

circos.conf
 ____ _
 / ___(_)_ __ ___ ___ ___
 | | | | '__/ __/ _ \/ __|
 | |___| | | | (_| (_) \__ \
 \____|_|_| \___\___/|___/

 round Is good

 circos - generate circularly composited information graphics
 
 (Circo基因组绘图程序的主配置文件)

### Methods

#### AddPlotElement
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.Interaction.Circos.Documents.Configurations.Circos.AddPlotElement(LANS.SystemsBiology.AnalysisTools.DataVisualization.Interaction.Circos.Documents.Configurations.Nodes.Plots.Plot)
```
函数会根据元素的个数的情况自动的调整在圈内的位置

|Parameter Name|Remarks|
|--------------|-------|
|plotElement|-|


#### ForceAutoLayout
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.Interaction.Circos.Documents.Configurations.Circos.ForceAutoLayout(LANS.SystemsBiology.AnalysisTools.DataVisualization.Interaction.Circos.Documents.Configurations.Nodes.Plots.Plot[])
```
强制所指定的绘图元素自动布局

|Parameter Name|Remarks|
|--------------|-------|
|elements|-|


#### GetBlastAlignmentData
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.Interaction.Circos.Documents.Configurations.Circos.GetBlastAlignmentData
```
不可以使用并行拓展，因为有顺序之分
 
 {SpeciesName, Color}



### Properties

#### BasicKaryotypeData
基因组的骨架信息
#### karyotype
The basically genome structure plots.(基本的数据文件)
#### Plots
内部元素是有顺序的区别的
#### Size
The genome size.(基因组的大小，当@"P:LANS.SystemsBiology.AnalysisTools.DataVisualization.Interaction.Circos.Documents.Configurations.Circos.BasicKaryotypeData"为空值的时候返回数值0)

