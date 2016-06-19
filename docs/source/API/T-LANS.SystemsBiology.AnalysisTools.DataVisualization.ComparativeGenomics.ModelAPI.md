---
title: ModelAPI
---

# ModelAPI
_namespace: [LANS.SystemsBiology.AnalysisTools.DataVisualization.ComparativeGenomics](N-LANS.SystemsBiology.AnalysisTools.DataVisualization.ComparativeGenomics.html)_





### Methods

#### __COGsColor``1
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.ComparativeGenomics.ModelAPI.__COGsColor``1(System.Collections.Generic.IEnumerable{``0},System.Collections.Generic.Dictionary{System.String,System.Drawing.Brush}@)
```
假若**COGsColor**参数为空的话，就会根据PTT里面的注释生成颜色谱

|Parameter Name|Remarks|
|--------------|-------|
|anno|-|
|COGsColor|-|


#### CreateObject
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.ComparativeGenomics.ModelAPI.CreateObject(LANS.SystemsBiology.Assembly.NCBI.GenBank.TabularFormat.ComponentModels.GeneBrief[],System.Int32,System.String,LANS.SystemsBiology.AnalysisTools.DataVisualization.ComparativeGenomics.ModelAPI.GetDrawingID,System.Boolean,LANS.SystemsBiology.AnalysisTools.DataVisualization.ComparativeGenomics.ModelAPI.ICOGsBrush)
```


|Parameter Name|Remarks|
|--------------|-------|
|PTT|-|
|len|-|
|title|-|
|COGsColor|-|
|__getId|Public Delegate Function GetDrawingID(Gene As @"T:LANS.SystemsBiology.Assembly.NCBI.GenBank.TabularFormat.ComponentModels.GeneBrief") As @"T:System.String"|



