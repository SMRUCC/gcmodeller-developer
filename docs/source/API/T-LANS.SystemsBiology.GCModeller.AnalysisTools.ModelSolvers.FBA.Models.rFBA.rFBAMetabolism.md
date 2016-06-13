---
title: rFBAMetabolism
---

# rFBAMetabolism
_namespace: [LANS.SystemsBiology.GCModeller.AnalysisTools.ModelSolvers.FBA.Models.rFBA](N-LANS.SystemsBiology.GCModeller.AnalysisTools.ModelSolvers.FBA.Models.rFBA.html)_

Model builder for rFBA(FBA system with gene expression regulation) metabolism system

### Methods

#### __calFactor
```csharp
LANS.SystemsBiology.GCModeller.AnalysisTools.ModelSolvers.FBA.Models.rFBA.rFBAMetabolism.__calFactor(System.String,Microsoft.VisualBasic.List{System.String})
```
计算出目标基因对于反应的流量的上下限的影响大小

|Parameter Name|Remarks|
|--------------|-------|
|locus|-|


#### __regImpact
```csharp
LANS.SystemsBiology.GCModeller.AnalysisTools.ModelSolvers.FBA.Models.rFBA.rFBAMetabolism.__regImpact(System.String,Microsoft.VisualBasic.List{System.String})
```
计算出调控的影响大小

|Parameter Name|Remarks|
|--------------|-------|
|locus|-|
|trace|
 因为假若两个调控因子相互之间有调控关系，则在递归的过程之中会出现回路造成死循环，所以使用这个参数来避免这个问题
 |


#### SetObjectiveGenes
```csharp
LANS.SystemsBiology.GCModeller.AnalysisTools.ModelSolvers.FBA.Models.rFBA.rFBAMetabolism.SetObjectiveGenes(System.Collections.Generic.IEnumerable{System.String})
```
找出和基因相关的反应过程

|Parameter Name|Remarks|
|--------------|-------|
|locus|-|


#### SetRPKM
```csharp
LANS.SystemsBiology.GCModeller.AnalysisTools.ModelSolvers.FBA.Models.rFBA.rFBAMetabolism.SetRPKM(System.Collections.Generic.IEnumerable{LANS.SystemsBiology.GCModeller.AnalysisTools.ModelSolvers.FBA.DESeq2.ExprStats},System.String)
```
假若已经通过@"P:LANS.SystemsBiology.GCModeller.AnalysisTools.ModelSolvers.FBA.Models.rFBA.rFBAMetabolism.GeneFactors"设置了基因的突变的状态，那么笨函数将不会修改已经设置了的突变状态值

|Parameter Name|Remarks|
|--------------|-------|
|rpkm|-|
|sample|-|




### Properties

#### __regulations
{ORF, regulators}, 假设存在这个列表里面的都是受表达调控的，而不存在的则其表达是自由的
#### GeneFactors
基因的突变设置参数
 
 0 缺失突变
 1 正常表达
 0-1 低表达
 >1 高表达

