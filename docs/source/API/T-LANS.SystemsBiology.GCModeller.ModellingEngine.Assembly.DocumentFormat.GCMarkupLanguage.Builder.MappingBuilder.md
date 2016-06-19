---
title: MappingBuilder
---

# MappingBuilder
_namespace: [LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.GCMarkupLanguage.Builder](N-LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.GCMarkupLanguage.Builder.html)_

在模型中的对象间建立连接



### Methods

#### GeneLinkMetabolism
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.GCMarkupLanguage.Builder.MappingBuilder.GeneLinkMetabolism
```
Link the gene object to the specific metabolism reaction using its product property.(将基因对象与相应的代谢反应进行连接)

#### Link
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.GCMarkupLanguage.Builder.MappingBuilder.Link(LANS.SystemsBiology.Assembly.MetaCyc.File.DataFiles.Proteins,LANS.SystemsBiology.Assembly.MetaCyc.File.DataFiles.ProtLigandCplxes,LANS.SystemsBiology.Assembly.MetaCyc.File.DataFiles.Compounds,LANS.SystemsBiology.Assembly.MetaCyc.File.DataFiles.Regulations)
```
分别生成酶促反应对象的催化关系以及调控关系

|Parameter Name|Remarks|
|--------------|-------|
|Proteins|-|
|ProtLigandCplxes|-|


#### LinkGene
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.GCMarkupLanguage.Builder.MappingBuilder.LinkGene(System.String,Microsoft.VisualBasic.List{LANS.SystemsBiology.Assembly.MetaCyc.File.DataFiles.Slots.Protein.IEnzyme},System.Int32)
```
蛋白质复合物对基因对象的连接的递归算法

|Parameter Name|Remarks|
|--------------|-------|
|EnzymeId|-|
|EnzymeList|-|



