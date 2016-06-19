﻿---
title: MetabolismEnzyme
---

# MetabolismEnzyme
_namespace: [LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.ObjectModels.Feature](N-LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.ObjectModels.Feature.html)_

每一个酶促反应对象上面的酶分子对象的引用，一个@"F:LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.ObjectModels.Feature.MetabolismEnzyme.EnzymeMetabolite"[酶分子]对一个特定的@"F:LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.ObjectModels.Feature.MetabolismEnzyme.EnzymeKineticLaw"[代谢反应的催化作用]



### Methods

#### CreateObject
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.ObjectModels.Feature.MetabolismEnzyme.CreateObject(System.String,LANS.SystemsBiology.DatabaseServices.SabiorkKineticLaws.TabularDump.EnzymeCatalystKineticLaw,LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.ObjectModels.Entity.Compound[])
```
从酶促反应处初始化目标对象

|Parameter Name|Remarks|
|--------------|-------|
|RefBase|酶蛋白质复合物分子对象的唯一标识符|



### Properties

#### CatalystMetabolite
这个酶分子对象所催化的代谢底物
#### EnzymeKineticLaw
本类型对象在初始化的时候会使用本属性中的@"P:LANS.SystemsBiology.DatabaseServices.SabiorkKineticLaws.TabularDump.EnzymeCatalystKineticLaw.Enzyme"
 和@"P:LANS.SystemsBiology.DatabaseServices.SabiorkKineticLaws.TabularDump.EnzymeCatalystKineticLaw.Metabolite"来进行两个属性的值的选择:
 @"F:LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.ObjectModels.Feature.MetabolismEnzyme.EnzymeMetabolite"
 @"F:LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.ObjectModels.Feature.MetabolismEnzyme.CatalystMetabolite"
#### EnzymeMetabolite
当前的这个酶分子对象的代谢底物类型
#### Quantity
本酶分子作为一种代谢底物在代谢组中的数量值大小