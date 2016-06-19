---
title: Installer
---

# Installer
_namespace: [LANS.SystemsBiology.Repository](N-LANS.SystemsBiology.Repository.html)_





### Methods

#### BuildLocusHash
```csharp
LANS.SystemsBiology.Repository.Installer.BuildLocusHash(System.Collections.Generic.IEnumerable{LANS.SystemsBiology.Repository.GeneInfo},LANS.SystemsBiology.Repository.GenbankIndex)
```
key: @"P:LANS.SystemsBiology.Repository.GeneInfo.locus_tag"

|Parameter Name|Remarks|
|--------------|-------|
|source|-|
|x|-|


#### BuildNameHash
```csharp
LANS.SystemsBiology.Repository.Installer.BuildNameHash(System.Collections.Generic.IEnumerable{LANS.SystemsBiology.Repository.GeneInfo},LANS.SystemsBiology.Repository.GenbankIndex)
```
key: @"P:LANS.SystemsBiology.Repository.GeneInfo.name", @"P:LANS.SystemsBiology.Repository.GeneInfo.locus_tag"

|Parameter Name|Remarks|
|--------------|-------|
|source|-|
|x|-|


#### GetsiRNATargetSeqs
```csharp
LANS.SystemsBiology.Repository.Installer.GetsiRNATargetSeqs(System.Collections.Generic.IEnumerable{LANS.SystemsBiology.Assembly.Bac_sRNA.org.Interaction},LANS.SystemsBiology.Repository.Genbank)
```
Query target nt sequence

|Parameter Name|Remarks|
|--------------|-------|
|siRNAtarget|
 这个应该是通过对@"P:LANS.SystemsBiology.Assembly.Bac_sRNA.org.Interaction.Organism"Group之后所得到的数据
 |
|repo|-|


#### Install
```csharp
LANS.SystemsBiology.Repository.Installer.Install(System.String,System.Boolean)
```
这个函数主要是进行创建数据库的索引文件

|Parameter Name|Remarks|
|--------------|-------|
|DIR|Extract location of file: all.gbk.tar.gz from NCBI FTP website.|



