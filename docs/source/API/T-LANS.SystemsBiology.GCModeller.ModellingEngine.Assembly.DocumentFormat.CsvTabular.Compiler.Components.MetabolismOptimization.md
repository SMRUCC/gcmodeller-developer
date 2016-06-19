---
title: MetabolismOptimization
---

# MetabolismOptimization
_namespace: [LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.Compiler.Components](N-LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.Compiler.Components.html)_





### Methods

#### InreversibleRule
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.Compiler.Components.MetabolismOptimization.InreversibleRule(LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.FileStream.MetabolismFlux,System.Double)
```
假若优化值小于10，则优化值为10

|Parameter Name|Remarks|
|--------------|-------|
|Model|-|
|OptimizationValue|-|


#### ReversibleRule
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.Compiler.Components.MetabolismOptimization.ReversibleRule(LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.FileStream.MetabolismFlux,System.Double)
```
如果优化值大于10或者小于-10，则另一个方向为当前方向的0.5
 假如优化值小于10或者大于-10，则两个方向的值都为10

|Parameter Name|Remarks|
|--------------|-------|
|Model|-|
|OptimizationValue|-|



