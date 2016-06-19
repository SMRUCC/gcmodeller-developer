---
title: ColorRender
---

# ColorRender
_namespace: [LANS.SystemsBiology.AnalysisTools.DataVisualization.GeneticClock](N-LANS.SystemsBiology.AnalysisTools.DataVisualization.GeneticClock.html)_

获取值大小梯度颜色



### Methods

#### #ctor
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.GeneticClock.ColorRender.#ctor(LANS.SystemsBiology.InteractionModel.DataServicesExtension.SerialsData[],System.Boolean)
```


|Parameter Name|Remarks|
|--------------|-------|
|DataSet|-|
|Global|颜色的梯度计算是否为全局性的，默认为全局性的|


#### GetColorRenderingProfiles
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.GeneticClock.ColorRender.GetColorRenderingProfiles
```
获取和数值大小相关的密度颜色

#### GetDesityRule
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.GeneticClock.ColorRender.GetDesityRule(System.Int32)
```


|Parameter Name|Remarks|
|--------------|-------|
|counts|-|


#### InternalGlobalCalculation
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.GeneticClock.ColorRender.InternalGlobalCalculation(LANS.SystemsBiology.InteractionModel.DataServicesExtension.SerialsData[])
```
全局的值就只有一个

|Parameter Name|Remarks|
|--------------|-------|
|DataSet|-|


#### InternalLocalCalculation
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.GeneticClock.ColorRender.InternalLocalCalculation(LANS.SystemsBiology.InteractionModel.DataServicesExtension.SerialsData[])
```
单条的每一个样品数据都有自己的映射

|Parameter Name|Remarks|
|--------------|-------|
|DataSet|-|


#### Interpolate
```csharp
LANS.SystemsBiology.AnalysisTools.DataVisualization.GeneticClock.ColorRender.Interpolate(System.Double[])
```
对数据进行平均插值

|Parameter Name|Remarks|
|--------------|-------|
|data|-|



