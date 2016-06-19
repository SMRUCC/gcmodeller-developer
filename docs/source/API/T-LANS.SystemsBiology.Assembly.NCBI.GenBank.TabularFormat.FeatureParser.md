---
title: FeatureParser
---

# FeatureParser
_namespace: [LANS.SystemsBiology.Assembly.NCBI.GenBank.TabularFormat](N-LANS.SystemsBiology.Assembly.NCBI.GenBank.TabularFormat.html)_





### Methods

#### attributeTokens
```csharp
LANS.SystemsBiology.Assembly.NCBI.GenBank.TabularFormat.FeatureParser.attributeTokens(System.String)
```
Row parsing into column tokens

|Parameter Name|Remarks|
|--------------|-------|
|Line|-|


#### CreateObject
```csharp
LANS.SystemsBiology.Assembly.NCBI.GenBank.TabularFormat.FeatureParser.CreateObject(System.String,System.Int32)
```


|Parameter Name|Remarks|
|--------------|-------|
|s_Data|-|
|version|gff1, gff2, gff3之间的差异是由于本属性值的列的读取方式的差异而产生的|


#### CreateObjectGff3
```csharp
LANS.SystemsBiology.Assembly.NCBI.GenBank.TabularFormat.FeatureParser.CreateObjectGff3(System.String)
```


|Parameter Name|Remarks|
|--------------|-------|
|s_Data|-|

> 
>  gi|66571684|gb|CP000050.1|	RefSeq	Coding gene	42	1370	.	+	.	name=dnaA;product="chromosome replication initiator DnaA"
>  

#### ToString
```csharp
LANS.SystemsBiology.Assembly.NCBI.GenBank.TabularFormat.FeatureParser.ToString(LANS.SystemsBiology.Assembly.NCBI.GenBank.TabularFormat.Feature)
```
生成gff文件之中的一行的基因组特性位点的数据


### Properties

#### SplitRegxExpression
A regex expression string that use for split the line text.
