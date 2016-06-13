---
title: ChromesomeMapAPI
---

# ChromesomeMapAPI
_namespace: [LANS.SystemsBiology.AnalysisTools.DataVisualization.ChromosomeMap](N-LANS.SystemsBiology.AnalysisTools.DataVisualization.ChromosomeMap.html)_

This module contains the required API function for create the chromosomes map of a specific bacteria genome.

### Methods

#### AddMotifSites
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.ChromosomeMap.ChromesomeMapAPI.AddMotifSites(LANS.SystemsBiology.AnalysisTools.DataVisualization.ChromosomeMap.DrawingModels.ChromesomeDrawingModel,System.Collections.Generic.IEnumerable{LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Analysis.GenomeMotifFootPrints.VirtualFootprints})
```


|Parameter Name|Remarks|
|--------------|-------|
|model|-|
|data|可以使用@"M:LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Analysis.GenomeMotifFootPrints.MotifFootPrintsGenerates.GroupMotifs(System.Collections.Generic.IEnumerable{LANS.SystemsBiology.AnalysisTools.NBCR.Extensions.MEME_Suite.Analysis.GenomeMotifFootPrints.PredictedRegulationFootprint},LANS.SystemsBiology.SequenceModel.NucleotideModels.NucleicAcid,System.Int32)"方法来合并一些重复的motif数据|


#### AddTSSs
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.ChromosomeMap.ChromesomeMapAPI.AddTSSs(LANS.SystemsBiology.AnalysisTools.DataVisualization.ChromosomeMap.DrawingModels.ChromesomeDrawingModel,System.Collections.Generic.IEnumerable{LANS.SystemsBiology.AnalysisTools.DataVisualization.DocumentFormat.Transcript})
```
将TSS位点以Motif位点的形式添加到绘图模型之上

|Parameter Name|Remarks|
|--------------|-------|
|Model|-|
|Sites|-|


#### ApplyCogColorProfile
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.ChromosomeMap.ChromesomeMapAPI.ApplyCogColorProfile(LANS.SystemsBiology.AnalysisTools.DataVisualization.ChromosomeMap.DrawingModels.ChromesomeDrawingModel,System.Collections.Generic.IEnumerable{LANS.SystemsBiology.NCBI.Extensions.LocalBLAST.Application.RpsBLAST.MyvaCOG})
```
按照COG分类来赋值COG颜色的

|Parameter Name|Remarks|
|--------------|-------|
|Model|-|
|MyvaCOG|-|


#### CreateDevice
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.ChromosomeMap.ChromesomeMapAPI.CreateDevice(LANS.SystemsBiology.AnalysisTools.DataVisualization.ChromosomeMap.Configurations)
```
请注意，在宽度上面是4倍的Margin

|Parameter Name|Remarks|
|--------------|-------|
|Config|-|


#### FromPttElements
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.ChromosomeMap.ChromesomeMapAPI.FromPttElements(System.Collections.Generic.IEnumerable{LANS.SystemsBiology.Assembly.NCBI.GenBank.TabularFormat.ComponentModels.GeneBrief},LANS.SystemsBiology.AnalysisTools.DataVisualization.ChromosomeMap.Configurations,System.Int32)
```
通常使用这个方法从PTT构件之中生成部分基因组的绘制模型数据

|Parameter Name|Remarks|
|--------------|-------|
|PTTGeneObjects|-|
|conf|-|


#### LoadConfig
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.ChromosomeMap.ChromesomeMapAPI.LoadConfig(System.String)
```
使用这个函数进行绘图设备的配置参数的读取操作

|Parameter Name|Remarks|
|--------------|-------|
|file|-|


#### SaveImage
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.ChromosomeMap.ChromesomeMapAPI.SaveImage(System.Collections.Generic.KeyValuePair{System.Drawing.Imaging.ImageFormat,System.Drawing.Bitmap[]},System.String,System.String)
```
Image formats can be one of the value: jpg,bmp,emf,exif,gif,png,wmf,tiff

|Parameter Name|Remarks|
|--------------|-------|
|res|@"M:LANS.SystemsBiology.AnalysisTools.DataVisualization.ChromosomeMap.DrawingDevice.InvokeDrawing(LANS.SystemsBiology.AnalysisTools.DataVisualization.ChromosomeMap.DrawingModels.ChromesomeDrawingModel)"函数所生成的绘图图形输出资源数据|
|Export|将要进行数据保存的文件夹|
|Format|Value variant in jpg,bmp,emf,exif,gif,png,wmf,tiff|





