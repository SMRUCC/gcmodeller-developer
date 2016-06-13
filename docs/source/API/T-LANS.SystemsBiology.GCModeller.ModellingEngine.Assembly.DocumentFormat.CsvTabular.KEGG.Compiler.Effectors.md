---
title: Effectors
---

# Effectors
_namespace: [LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.KEGG.Compiler](N-LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.KEGG.Compiler.html)_

本处理过程的目的是将模型之中的Regulation关系之中的Effector替换为KEGG的经过Normalization操作之后的UniqueId

### Methods

#### CreateDictionary
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.KEGG.Compiler.Effectors.CreateDictionary(LANS.SystemsBiology.Assembly.MetaCyc.File.DataFiles.Compounds)
```
可能会有重复的记录，仅仅依靠拓展函数无法解决这个问题，故而专门编写本方法来解决这个问题

|Parameter Name|Remarks|
|--------------|-------|
|MetaCycCompounds|-|


#### MappingEffectors
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.KEGG.Compiler.Effectors.MappingEffectors(LANS.SystemsBiology.Assembly.MetaCyc.File.FileSystem.DatabaseLoadder,Microsoft.VisualBasic.List{LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.FileStream.Metabolite},LANS.SystemsBiology.DatabaseServices.Regprecise.TranscriptionFactors)
```
在当前的这个函数之中已经将MetaCyc的标识符赋值给KEGGCompound了

|Parameter Name|Remarks|
|--------------|-------|
|MetaCyc|-|
|KEGGCompounds|-|
|Regprecise|-|


#### MappingKEGGRegprecise
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.KEGG.Compiler.Effectors.MappingKEGGRegprecise(System.Collections.Generic.Dictionary{System.String,LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.FileStream.Metabolite},Microsoft.VisualBasic.List{LANS.SystemsBiology.Assembly.MetaCyc.Schema.EffectorMap})
```


|Parameter Name|Remarks|
|--------------|-------|
|KEGGCompounds|{MetaCycId, Metabolite}|
|MetaCycRegpreciseMapping|-|





