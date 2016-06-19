---
title: GeneDumpInfo
---

# GeneDumpInfo
_namespace: [LANS.SystemsBiology.Assembly.NCBI.GenBank.CsvExports](N-LANS.SystemsBiology.Assembly.NCBI.GenBank.CsvExports.html)_

The gene dump information from the NCBI genbank.
 (从GBK文件之中所导出来的一个基因对象的简要信息)



### Methods

#### DumpEXPORT
```csharp
LANS.SystemsBiology.Assembly.NCBI.GenBank.CsvExports.GeneDumpInfo.DumpEXPORT(LANS.SystemsBiology.Assembly.NCBI.GenBank.GBFF.Keywords.FEATURES.CDS)
```
Convert a feature site data in the NCBI GenBank file to the dump information table.

|Parameter Name|Remarks|
|--------------|-------|
|obj|CDS标记的特性字段|



### Properties

#### CDS
基因序列
#### LocusID
假若在GBK文件之中没有Locus_tag属性，则导出函数@"M:LANS.SystemsBiology.Assembly.NCBI.GenBank.CsvExports.GeneDumpInfo.DumpEXPORT(LANS.SystemsBiology.Assembly.NCBI.GenBank.GBFF.Keywords.FEATURES.CDS)"会尝试使用@"P:LANS.SystemsBiology.Assembly.NCBI.GenBank.CsvExports.GeneDumpInfo.ProteinId"来替代
#### SpeciesAccessionID
该蛋白质所位于的基因组的在NCBI之中的编号信息
