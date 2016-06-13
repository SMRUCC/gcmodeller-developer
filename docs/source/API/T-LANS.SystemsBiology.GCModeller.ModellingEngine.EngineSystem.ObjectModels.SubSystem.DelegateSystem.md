---
title: DelegateSystem
---

# DelegateSystem
_namespace: [LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.ObjectModels.SubSystem](N-LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.ObjectModels.SubSystem.html)_



### Methods

#### CreateDelegate
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.ObjectModels.SubSystem.DelegateSystem.CreateDelegate(LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.GCMarkupLanguage.GCML_Documents.XmlElements.Metabolism.Reaction,LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.MathematicsModels.EnzymeKinetics.MichaelisMenten,LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.ObjectModels.Entity.Compound[],LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.ObjectModels.Feature.MetabolismEnzyme[],Microsoft.VisualBasic.Logging.LogFile)
```
创建代谢流对象
 1. 数据模型中的反应对象无任何标记的时候，创建普通的代谢流
 2. 数据模型中的反应对象有酶分子标记的时候，创建酶促反应代谢流

#### CreateEnzymeObjects
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.ObjectModels.SubSystem.DelegateSystem.CreateEnzymeObjects(LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.ObjectModels.Entity.Compound[],LANS.SystemsBiology.DatabaseServices.SabiorkKineticLaws.TabularDump.EnzymeCatalystKineticLaw[])
```
从反应过程中的定义创建酶分子对象，由于一种酶分子可以对多种反应进行催化，并且可能存在对不同的反应表现出不同的动力学性质，故而在初始化后得到的酶分子，其标识符和数据模型基类可能会存在重合，但是却拥有者各自独立的动力学参数

|Parameter Name|Remarks|
|--------------|-------|
|Metabolites|-|


#### GetNetworkComponents
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.ObjectModels.SubSystem.DelegateSystem.GetNetworkComponents(System.String)
```
对于酶促反映而言，会产生与酶分子数量相同的反映数目

|Parameter Name|Remarks|
|--------------|-------|
|UniqueId|-|





