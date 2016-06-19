---
title: Compiler
---

# Compiler
_namespace: [LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.Compiler](N-LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.Compiler.html)_





### Methods

#### __Initialize_MetaCyc
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.Compiler.Compiler.__Initialize_MetaCyc(LANS.SystemsBiology.Assembly.MetaCyc.File.FileSystem.DatabaseLoadder)
```
所有与MetaCyc数据库相关的模块变量请在这里初始化

#### _createProteinAssembly
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.Compiler.Compiler._createProteinAssembly(Microsoft.VisualBasic.List{LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.FileStream.Regulator}@,Microsoft.VisualBasic.Dictionary{LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.FileStream.Metabolite}@)
```
这个方法主要是用于对于有Effector的TF生成TF的复合物，从而产生代谢组对基因表达调控的约束

#### _createTranscripts
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.Compiler.Compiler._createTranscripts(System.Collections.Generic.KeyValuePair{System.String,System.String}[],System.Collections.Generic.KeyValuePair{System.String,System.String}[])
```
{UniqueId, SequenceData.ToUpper}

|Parameter Name|Remarks|
|--------------|-------|
|GeneSequence|-|
|ProteinSequence|-|


#### AnalysisTransmenbraneFlux
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.Compiler.Compiler.AnalysisTransmenbraneFlux
```
本函数会将@"P:LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.FileStream.IO.XmlresxLoader.TransmembraneTransportation"解析完毕，并使用@"P:LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.FileStream.MetabolismFlux.Identifier"属性
 从@"P:LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.FileStream.IO.XmlresxLoader.MetabolismModel"列表之中移除相对应的过程

#### Compile
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.Compiler.Compiler.Compile(Microsoft.VisualBasic.CommandLine.CommandLine)
```


|Parameter Name|Remarks|
|--------------|-------|
|ModelProperty|本参数里面除了模型属性的参数外，还有基因组的注释数据|


#### GetGeneId
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.Compiler.Compiler.GetGeneId(LANS.SystemsBiology.Assembly.MetaCyc.File.FileSystem.DatabaseLoadder)
```
将MetaCyc的基因号映射为NCBI上面的基因号

|Parameter Name|Remarks|
|--------------|-------|
|MetaCyc|-|


#### Link
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.Compiler.Compiler.Link
```
执行连接操作并将临时数据保存至Exported文件夹
> 请注意每一步的函数调用之间是有顺序

#### LinkEffectors
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.Compiler.Compiler.LinkEffectors(Microsoft.VisualBasic.DocumentFormat.Csv.DocumentStream.File)
```
连接效应物到调控因子之上

|Parameter Name|Remarks|
|--------------|-------|
|CrossTalks|-|


#### PreCompile
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.Compiler.Compiler.PreCompile(Microsoft.VisualBasic.CommandLine.CommandLine)
```


|Parameter Name|Remarks|
|--------------|-------|
|argvs|[@"T:Microsoft.VisualBasic.CommandLine.CommandLine"[MetaCyc database data directory|Export directory|RegpreciseRegulators]] -
 -precompile -metacyc "@"F:LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.Compiler.Compiler._MetaCyc"" -regprecise_regulator "@"F:LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.Compiler.Compiler._RegpreciseRegulators"" -export "ModelParentDir"
 假若-transcript_regulation参数为空的话，则使用MetaCyc数据库中的Regulation关系数据表|



