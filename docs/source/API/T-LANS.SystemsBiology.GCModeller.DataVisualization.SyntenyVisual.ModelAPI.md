---
title: ModelAPI
---

# ModelAPI
_namespace: [LANS.SystemsBiology.GCModeller.DataVisualization.SyntenyVisual](N-LANS.SystemsBiology.GCModeller.DataVisualization.SyntenyVisual.html)_



### Methods

#### __getName
```csharp
LANS.SystemsBiology.GCModeller.DataVisualization.SyntenyVisual.ModelAPI.__getName(LANS.SystemsBiology.NCBI.Extensions.Analysis.HitCollection,System.String,System.String)
```


|Parameter Name|Remarks|
|--------------|-------|
|hits|-|
|hitsTag|-|
|query|基因组标识符|


#### GetDrawsModel
```csharp
LANS.SystemsBiology.GCModeller.DataVisualization.SyntenyVisual.ModelAPI.GetDrawsModel(System.String,LANS.SystemsBiology.GCModeller.DataVisualization.SyntenyVisual.LineStyles)
```
Convert data model @"T:LANS.SystemsBiology.GCModeller.DataVisualization.SyntenyVisual.DeviceModel" to drawing object model @"T:LANS.SystemsBiology.GCModeller.DataVisualization.SyntenyVisual.DrawingModel"

|Parameter Name|Remarks|
|--------------|-------|
|path|The json file path of the drawing data model @"T:LANS.SystemsBiology.GCModeller.DataVisualization.SyntenyVisual.DeviceModel"|
|style|The link line style.(假若设置了这个参数的话，就会将模型里面的数据给覆盖掉)|


#### IsOrtholog
```csharp
LANS.SystemsBiology.GCModeller.DataVisualization.SyntenyVisual.ModelAPI.IsOrtholog(System.String,System.String,LANS.SystemsBiology.NCBI.Extensions.Analysis.HitCollection,System.String)
```
空值表示没有同源关系

|Parameter Name|Remarks|
|--------------|-------|
|query|基因组标识符|
|hit|基因组标识符|
|hits|-|
|hitsTag|基因组标识符|





