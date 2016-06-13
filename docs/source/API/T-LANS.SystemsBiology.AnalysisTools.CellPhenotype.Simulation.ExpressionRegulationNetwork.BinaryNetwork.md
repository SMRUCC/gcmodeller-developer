---
title: BinaryNetwork
---

# BinaryNetwork
_namespace: [LANS.SystemsBiology.AnalysisTools.CellPhenotype.Simulation.ExpressionRegulationNetwork](N-LANS.SystemsBiology.AnalysisTools.CellPhenotype.Simulation.ExpressionRegulationNetwork.html)_

使用逻辑值来模拟计算基因表达调控网络

### Methods

#### __innerTicks
```csharp
LANS.SystemsBiology.AnalysisTools.CellPhenotype.Simulation.ExpressionRegulationNetwork.BinaryNetwork.__innerTicks(System.Int32)
```
返回调控网络之中处于表达状态的基因的数目

#### AllRegulatorInputs
```csharp
LANS.SystemsBiology.AnalysisTools.CellPhenotype.Simulation.ExpressionRegulationNetwork.BinaryNetwork.AllRegulatorInputs(System.Collections.Generic.IEnumerable{LANS.SystemsBiology.AnalysisTools.CellPhenotype.DocumentFormat.RegulatesFootprints})
```
将所有的调控因子都作为蒙特卡洛实验的输入

|Parameter Name|Remarks|
|--------------|-------|
|footprints|-|


#### AnalysisMonteCarloTopLevelInput
```csharp
LANS.SystemsBiology.AnalysisTools.CellPhenotype.Simulation.ExpressionRegulationNetwork.BinaryNetwork.AnalysisMonteCarloTopLevelInput(System.Collections.Generic.IEnumerable{LANS.SystemsBiology.AnalysisTools.CellPhenotype.DocumentFormat.RegulatesFootprints})
```
Monte Carlo experiment input analysis.(分析出最顶层的调控因子作为蒙特卡洛实验的输入之一)
> 由于有一些调控因子是找不到任何调控因子的，即该调控因子是位于网络的最上层，则这个调控因子的表达量就使用默认的输入值作为恒定值作为蒙特卡洛实验的输入值

#### GetGeneObjects
```csharp
LANS.SystemsBiology.AnalysisTools.CellPhenotype.Simulation.ExpressionRegulationNetwork.BinaryNetwork.GetGeneObjects
```
Gets the genes unique id collection.(获取本网络模型对象之中的基因的编号列表)

#### GetRegulator
```csharp
LANS.SystemsBiology.AnalysisTools.CellPhenotype.Simulation.ExpressionRegulationNetwork.BinaryNetwork.GetRegulator(System.Collections.Generic.Dictionary{System.String,LANS.SystemsBiology.AnalysisTools.CellPhenotype.Simulation.ExpressionRegulationNetwork.KineticsModel.BinaryExpression},System.String)
```
DEBUG

|Parameter Name|Remarks|
|--------------|-------|
|dict|-|
|id|-|


#### SetKernelLoops
```csharp
LANS.SystemsBiology.AnalysisTools.CellPhenotype.Simulation.ExpressionRegulationNetwork.BinaryNetwork.SetKernelLoops(System.Int32)
```
Setup the internal kernel cycles number of this binary cellular gene expression regulation network model.(对本计算模型设置内核循环的数目。)

|Parameter Name|Remarks|
|--------------|-------|
|KelCycles|The kernel cycle vaslue that will be setup as the runtime parameter of the model simulation.|


#### SetMutationFactor
```csharp
LANS.SystemsBiology.AnalysisTools.CellPhenotype.Simulation.ExpressionRegulationNetwork.BinaryNetwork.SetMutationFactor(System.String,System.Double)
```


|Parameter Name|Remarks|
|--------------|-------|
|GeneID|-|
|Factor|
 0 - 缺失突变
 1 - 正常表达
 >1 - 过量表达
 0-1 - 调控事件以低于平常的概率发生 
 |




### Properties

#### NonRegulationHandles
Gets all of the gene nodes handles collection in this expression regulation network.(获取在网络结构之上没有受到任何调控作用的基因网络节点)

