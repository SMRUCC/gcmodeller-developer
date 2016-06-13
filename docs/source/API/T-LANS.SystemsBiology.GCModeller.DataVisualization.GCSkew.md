---
title: GCSkew
---

# GCSkew
_namespace: [LANS.SystemsBiology.GCModeller.DataVisualization](N-LANS.SystemsBiology.GCModeller.DataVisualization.html)_



### Methods

#### DrawAixs
```csharp
LANS.SystemsBiology.GCModeller.DataVisualization.GCSkew.DrawAixs(Microsoft.VisualBasic.Imaging.IGraphics,System.Drawing.Point,System.Drawing.Size,System.Drawing.Font,System.Double,System.Double)
```
绘制基本的坐标轴

|Parameter Name|Remarks|
|--------------|-------|
|g|-|
|location|-|
|size|-|
|tagFont|-|


#### InvokeDrawing
```csharp
LANS.SystemsBiology.GCModeller.DataVisualization.GCSkew.InvokeDrawing(System.Drawing.Image,LANS.SystemsBiology.SequenceModel.FASTA.FastaToken,System.Drawing.Point,System.Int32)
```
将GC偏移曲线绘制到目标比对图形**source**之上

|Parameter Name|Remarks|
|--------------|-------|
|source|-|
|nt|-|
|Location|坐标轴原点的位置|
|Width|坐标轴纵轴的宽度|


#### InvokeDrawingGCContent
```csharp
LANS.SystemsBiology.GCModeller.DataVisualization.GCSkew.InvokeDrawingGCContent(System.Drawing.Image,LANS.SystemsBiology.SequenceModel.FASTA.FastaToken,System.Drawing.Point,System.Int32)
```
将GC含量曲线绘制到目标比对图形**source**之上

|Parameter Name|Remarks|
|--------------|-------|
|source|-|
|nt|Attributes的 1 和 2 分别为nt的开始和结束的位置|
|Location|坐标轴原点的位置|
|Width|坐标轴纵轴的宽度|





