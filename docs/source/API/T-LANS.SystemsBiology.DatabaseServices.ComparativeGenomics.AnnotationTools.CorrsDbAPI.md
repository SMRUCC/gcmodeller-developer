---
title: CorrsDbAPI
---

# CorrsDbAPI
_namespace: [LANS.SystemsBiology.DatabaseServices.ComparativeGenomics.AnnotationTools](N-LANS.SystemsBiology.DatabaseServices.ComparativeGenomics.AnnotationTools.html)_





### Methods

#### __commits
```csharp
LANS.SystemsBiology.DatabaseServices.ComparativeGenomics.AnnotationTools.CorrsDbAPI.__commits(Oracle.LinuxCompatibility.MySQL.MySQL,LANS.SystemsBiology.Toolkits.RNA_Seq.WGCNA.WGCNAWeight,LANS.SystemsBiology.Toolkits.RNA_Seq.PccMatrix,LANS.SystemsBiology.Toolkits.RNA_Seq.PccMatrix)
```
先排序在进行遍历，不需要再进行随机查找了，太耗费时间了

|Parameter Name|Remarks|
|--------------|-------|
|MySQL|-|
|WGCNA_MAT|-|
|PccMatrix|-|
|sPccMAT|-|


#### WriteDatabase
```csharp
LANS.SystemsBiology.DatabaseServices.ComparativeGenomics.AnnotationTools.CorrsDbAPI.WriteDatabase(Microsoft.VisualBasic.DocumentFormat.Csv.DocumentStream.File,System.String,Oracle.LinuxCompatibility.MySQL.ConnectionUri)
```


|Parameter Name|Remarks|
|--------------|-------|
|raw|第一列是基因的编号列表，其他的列都是基因的表达数据|
|uri|-|
|WGCNA|WGCNA脚本所计算出来的Cytoscape的边文件|



