---
title: FBAlpRSolver
---

# FBAlpRSolver
_namespace: [LANS.SystemsBiology.GCModeller.AnalysisTools.ModelSolvers.FBA](N-LANS.SystemsBiology.GCModeller.AnalysisTools.ModelSolvers.FBA.html)_

求解FBA线性规划问题的模块对象

### Methods

#### #ctor
```csharp
LANS.SystemsBiology.GCModeller.AnalysisTools.ModelSolvers.FBA.FBAlpRSolver.#ctor(System.String)
```
初始化一个求解FBA线性规划问题的模块对象实例

|Parameter Name|Remarks|
|--------------|-------|
|rBin|Parameter for manual initialize the REngine, Example likes: "C:\Program Files\R\R-3.1.0\bin".|


#### RSolving
```csharp
LANS.SystemsBiology.GCModeller.AnalysisTools.ModelSolvers.FBA.FBAlpRSolver.RSolving(LANS.SystemsBiology.GCModeller.AnalysisTools.ModelSolvers.FBA.lpSolveRModel,System.String@)
```
using the R program to solve the linear programming problem that from the fba model.
 (使用R模块来求解FBA模型中的线性规划问题, {ObjectiveFunction, FluxDistribution()})

|Parameter Name|Remarks|
|--------------|-------|
|lpSolveRModel|-|
|script|Generated script output|

_returns: {ObjectiveFunction, FluxDistribution()}_




