---
title: Regulator
---

# Regulator
_namespace: [LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.FileStream](N-LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.FileStream.html)_





### Methods

#### get_PCs
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.FileStream.Regulator.get_PCs
```
假若本调控因子有效应物的话，则返回一个列表，否则为空，{PC, {ProteinId, Effector}}

#### get_TargetGeneId
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.FileStream.Regulator.get_TargetGeneId
```
获取被本调控因子所调控的目标基因


### Properties

#### Effectors
请使用本属性来判断是否为蛋白质复合物，为@"P:LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.FileStream.Metabolite.Identifier"属性值
#### ProteinId
The unique identifier of the target regulator object.(目标调控因子对象的唯一标识符，基因号)
#### RegulatesMotif
@"T:LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.FileStream.TranscriptUnit"[目标转录单元对象]的@"P:LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.FileStream.MotifSite.Internal_GUID"
