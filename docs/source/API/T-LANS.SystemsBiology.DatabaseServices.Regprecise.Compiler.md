---
title: Compiler
---

# Compiler
_namespace: [LANS.SystemsBiology.DatabaseServices.Regprecise](N-LANS.SystemsBiology.DatabaseServices.Regprecise.html)_



### Methods

#### __genomePartitions
```csharp
LANS.SystemsBiology.DatabaseServices.Regprecise.Compiler.__genomePartitions(Microsoft.VisualBasic.List{LANS.SystemsBiology.DatabaseServices.Regprecise.FastaReaders.Site},System.String,LANS.SystemsBiology.DatabaseServices.Regprecise.WebServices.JSONLDM.regulon[])
```
检查，OK

|Parameter Name|Remarks|
|--------------|-------|
|sites|-|
|repository|-|
|familyGroup|-|


#### Compile
```csharp
LANS.SystemsBiology.DatabaseServices.Regprecise.Compiler.Compile(System.Collections.Generic.IEnumerable{LANS.SystemsBiology.DatabaseServices.Regprecise.WebServices.JSONLDM.genome},System.String)
```
请在下载完了整个数据库之后再使用这个函数来进行编译

|Parameter Name|Remarks|
|--------------|-------|
|Regprecise|-|
|repository|-|


#### SitesFamilyCategory
```csharp
LANS.SystemsBiology.DatabaseServices.Regprecise.Compiler.SitesFamilyCategory(System.String,System.Boolean)
```
生成meme计算所需要的调控位点的fasta文件（按照家族分类）

|Parameter Name|Remarks|
|--------------|-------|
|repositoryDIR|为了保持简洁性，没有引用配置项目。。。需要手动设定数据源|
|genomePartitioning|当一个家族里面的序列数太多的时候是否需要按照基因组进行分组，默认不分组|





