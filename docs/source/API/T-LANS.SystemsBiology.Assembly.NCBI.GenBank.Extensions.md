---
title: Extensions
---

# Extensions
_namespace: [LANS.SystemsBiology.Assembly.NCBI.GenBank](N-LANS.SystemsBiology.Assembly.NCBI.GenBank.html)_





### Methods

#### __protShort
```csharp
LANS.SystemsBiology.Assembly.NCBI.GenBank.Extensions.__protShort(LANS.SystemsBiology.Assembly.NCBI.GenBank.GBFF.Keywords.FEATURES.Feature,System.Boolean)
```
假若是新注释的基因组还没有基因号，则默认使用位置来做唯一标示

|Parameter Name|Remarks|
|--------------|-------|
|feature|-|
|onlyLocusTag|-|


#### ExportProteins
```csharp
LANS.SystemsBiology.Assembly.NCBI.GenBank.Extensions.ExportProteins(LANS.SystemsBiology.Assembly.NCBI.GenBank.GBFF.File)
```
Export protein sequence with full annotation.

|Parameter Name|Remarks|
|--------------|-------|
|Gbk|-|


#### ExportProteins_Short
```csharp
LANS.SystemsBiology.Assembly.NCBI.GenBank.Extensions.ExportProteins_Short(LANS.SystemsBiology.Assembly.NCBI.GenBank.GBFF.File,System.Boolean)
```
Locus_tag Product_Description

|Parameter Name|Remarks|
|--------------|-------|
|gb|-|


#### GeneList
```csharp
LANS.SystemsBiology.Assembly.NCBI.GenBank.Extensions.GeneList(LANS.SystemsBiology.Assembly.NCBI.GenBank.GBFF.File)
```

_returns: {locus_tag, gene}_


