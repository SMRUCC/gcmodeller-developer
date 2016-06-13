---
title: Engine
---

# Engine
_namespace: [LANS.SystemsBiology.GCModeller.AnalysisTools.ModelSolvers.FBA.rFBA](N-LANS.SystemsBiology.GCModeller.AnalysisTools.ModelSolvers.FBA.rFBA.html)_

包括一个数学迭代计算引擎和一个FBA计算引擎，每迭代计算一次，则计算一次FBA

### Methods

#### ApplyFBAConstraint
```csharp
LANS.SystemsBiology.GCModeller.AnalysisTools.ModelSolvers.FBA.rFBA.Engine.ApplyFBAConstraint
```
将相应的反应对象的流量上限修改为所代表酶分子的基因的表达量

#### GetFBADataPackage
```csharp
LANS.SystemsBiology.GCModeller.AnalysisTools.ModelSolvers.FBA.rFBA.Engine.GetFBADataPackage
```
将FBA模型计算数据转换为一个Excel文件用于保存



### Properties

#### FBAColumns
使用基因号来表示一个酶促代谢反应的标号列表，对于非酶促代谢反应，则使用空字符串来代替
#### FBADataPackages
{RTime, FluxValueCollection{ObjectiveFunction, FluxValues}}()

