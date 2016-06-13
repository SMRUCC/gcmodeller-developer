---
title: ExpressionFluxBuilder
---

# ExpressionFluxBuilder
_namespace: [LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.GCMarkupLanguage.Builder](N-LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.GCMarkupLanguage.Builder.html)_

表达流对象构建器，重建出目标模型的基因组、转录组

### Methods

#### #ctor
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.GCMarkupLanguage.Builder.ExpressionFluxBuilder.#ctor(LANS.SystemsBiology.Assembly.MetaCyc.File.FileSystem.DatabaseLoadder,LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.GCMarkupLanguage.BacterialModel)
```


|Parameter Name|Remarks|
|--------------|-------|
|MetaCyc|-|
|Model|在模型对象之中的代谢组必须是已经构建好了的|


#### CreateTranscripts
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.GCMarkupLanguage.Builder.ExpressionFluxBuilder.CreateTranscripts(LANS.SystemsBiology.Assembly.MetaCyc.File.FileSystem.DatabaseLoadder,LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.GCMarkupLanguage.BacterialModel)
```
创建RNA分子对象，然后添加进入代谢组对象之中

|Parameter Name|Remarks|
|--------------|-------|
|MetaCyc|-|
|Model|-|


#### CreateTransUnits
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.GCMarkupLanguage.Builder.ExpressionFluxBuilder.CreateTransUnits(LANS.SystemsBiology.Assembly.MetaCyc.File.FileSystem.DatabaseLoadder,LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.GCMarkupLanguage.BacterialModel)
```
根据MetaCyc数据库模型生成转录单元对象列表

|Parameter Name|Remarks|
|--------------|-------|
|MetaCyc|-|


#### GetAllUnmodifiedProduct
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.GCMarkupLanguage.Builder.ExpressionFluxBuilder.GetAllUnmodifiedProduct(LANS.SystemsBiology.Assembly.MetaCyc.File.FileSystem.DatabaseLoadder,LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.GCMarkupLanguage.BacterialModel)
```
获取所有未经过化学修饰的蛋白质多肽链单体对象

|Parameter Name|Remarks|
|--------------|-------|
|MetaCyc|-|
|Model|-|


#### Link
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.GCMarkupLanguage.Builder.ExpressionFluxBuilder.Link(LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.GCMarkupLanguage.GCML_Documents.XmlElements.Bacterial_GENOME.GeneObject,LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.GCMarkupLanguage.GCML_Documents.XmlElements.Bacterial_GENOME.Transcript[],Microsoft.VisualBasic.List{LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.GCMarkupLanguage.GCML_Documents.XmlElements.Bacterial_GENOME.Transcript})
```
将一个基因对象与相应的转录产物想联系起来

|Parameter Name|Remarks|
|--------------|-------|
|Gene|-|
|Transcripts|-|
|List|-|

> !!!请注意这里！！！




