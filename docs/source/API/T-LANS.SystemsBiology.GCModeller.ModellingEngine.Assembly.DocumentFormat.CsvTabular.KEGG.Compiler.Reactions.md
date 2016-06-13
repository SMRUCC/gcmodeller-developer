---
title: Reactions
---

# Reactions
_namespace: [LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.KEGG.Compiler](N-LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.KEGG.Compiler.html)_



### Methods

#### CompileCARMEN
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.KEGG.Compiler.Reactions.CompileCARMEN(System.Collections.Generic.IEnumerable{LANS.SystemsBiology.Assembly.KEGG.DBGET.bGetObject.Reaction},System.String,LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.FileStream.IO.XmlresxLoader,System.String,System.String,Microsoft.VisualBasic.Logging.LogFile)
```


|Parameter Name|Remarks|
|--------------|-------|
|KEGGReactions|整个KEGG Reaction的数据库，酶促反映对象会使用CARMEN软件进行筛选|
|CARMEN_DIR|-|
|ModelLoader|包含有整个KEGG数据库之中的Compound|


#### CompileExpasy
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.KEGG.Compiler.Reactions.CompileExpasy(System.Collections.Generic.IEnumerable{LANS.SystemsBiology.Assembly.Expasy.AnnotationsTool.T_EnzymeClass_BLAST_OUT},System.Collections.Generic.IEnumerable{LANS.SystemsBiology.Assembly.KEGG.DBGET.bGetObject.Reaction},LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.FileStream.IO.XmlresxLoader,LANS.SystemsBiology.Assembly.MetaCyc.File.FileSystem.DatabaseLoadder,LANS.SystemsBiology.Assembly.SBML.Level2.XmlFile,System.String,System.String,Microsoft.VisualBasic.Logging.LogFile)
```
在调用本方法之前，请确认已经将代谢物模型给编译好了

|Parameter Name|Remarks|
|--------------|-------|
|ECTable|-|
|KEGGReactions|-|
|ModelLoader|-|
|MetaCyc|-|
|Sbml|-|
|CompoundsDownloads|-|
|ReactionDownloads|-|
|Logging|-|


#### CompileSmallMoleculeReactions
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.KEGG.Compiler.Reactions.CompileSmallMoleculeReactions(LANS.SystemsBiology.Assembly.MetaCyc.File.FileSystem.DatabaseLoadder,System.Collections.Generic.Dictionary{System.String,LANS.SystemsBiology.Assembly.SBML.Level2.Elements.Reaction},System.Collections.Generic.Dictionary{System.String,LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.FileStream.Metabolite},System.String,Microsoft.VisualBasic.List{LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.FileStream.Metabolite}@,Microsoft.VisualBasic.Logging.LogFile)
```
编译所有不受任何酶分子催化的小分子化合物代谢反应过程

|Parameter Name|Remarks|
|--------------|-------|
|MetaCyc|-|
|Sbml|-|





