---
title: ColorSchema
---

# ColorSchema
_namespace: [LANS.SystemsBiology.AnalysisTools.DataVisualization.NCBIBlastResult](N-LANS.SystemsBiology.AnalysisTools.DataVisualization.NCBIBlastResult.html)_

Blast结果之中的hit对象的颜色映射



### Methods

#### GetBlastnIdentitiesColor
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.NCBIBlastResult.ColorSchema.GetBlastnIdentitiesColor(Microsoft.VisualBasic.ComponentModel.Ranges.RangeList{System.Double,Microsoft.VisualBasic.ComponentModel.TagValue{System.Drawing.Color}},System.Double)
```


|Parameter Name|Remarks|
|--------------|-------|
|p|p的值在0-100之间|
|Schema|-|


#### GetColor
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.NCBIBlastResult.ColorSchema.GetColor(Microsoft.VisualBasic.ComponentModel.Ranges.RangeList{System.Double,Microsoft.VisualBasic.ComponentModel.TagValue{System.Drawing.Color}},System.Double)
```


|Parameter Name|Remarks|
|--------------|-------|
|p|p的值在0-1之间|
|Schema|-|


#### IdentitiesBrush
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.NCBIBlastResult.ColorSchema.IdentitiesBrush(System.Func{LANS.SystemsBiology.NCBI.Extensions.Analysis.Hit,System.Double})
```


|Parameter Name|Remarks|
|--------------|-------|
|scores|需要从这里得到分数|



