---
title: DatabaseLoadder
---

# DatabaseLoadder
_namespace: [LANS.SystemsBiology.Assembly.MetaCyc.File.FileSystem](N-LANS.SystemsBiology.Assembly.MetaCyc.File.FileSystem.html)_

当对MetaCyc数据库进行延时加载的时候，则需要使用到本对象进行数据的读取操作



### Methods

#### CreateInstance
```csharp
LANS.SystemsBiology.Assembly.MetaCyc.File.FileSystem.DatabaseLoadder.CreateInstance(System.String,System.Boolean)
```
Preload the target metacyc database.(MetaCyc数据库预加载)

|Parameter Name|Remarks|
|--------------|-------|
|MetaCycDir|-|


#### GetBindRxns
```csharp
LANS.SystemsBiology.Assembly.MetaCyc.File.FileSystem.DatabaseLoadder.GetBindRxns
```
Returns the BindRxns table in the target metacyc database.

#### GetCompounds
```csharp
LANS.SystemsBiology.Assembly.MetaCyc.File.FileSystem.DatabaseLoadder.GetCompounds
```
Returns the compounds table in the target metacyc database.

#### GetDNABindingSites
```csharp
LANS.SystemsBiology.Assembly.MetaCyc.File.FileSystem.DatabaseLoadder.GetDNABindingSites
```
Returns the DNABindingSites table in the target metacyc database.

#### GetEnzrxns
```csharp
LANS.SystemsBiology.Assembly.MetaCyc.File.FileSystem.DatabaseLoadder.GetEnzrxns
```
Returns the Enzrxns table in the target metacyc database.

#### GetGenes
```csharp
LANS.SystemsBiology.Assembly.MetaCyc.File.FileSystem.DatabaseLoadder.GetGenes
```
Returns the Genes table in the target metacyc database.

#### GetPathways
```csharp
LANS.SystemsBiology.Assembly.MetaCyc.File.FileSystem.DatabaseLoadder.GetPathways
```
Returns the Pathways table in the target metacyc database.

#### GetPromoters
```csharp
LANS.SystemsBiology.Assembly.MetaCyc.File.FileSystem.DatabaseLoadder.GetPromoters
```
Returns the Promoters table in the target metacyc database.

#### GetProteinFeature
```csharp
LANS.SystemsBiology.Assembly.MetaCyc.File.FileSystem.DatabaseLoadder.GetProteinFeature
```
Returns the ProteinFeature table in the target metacyc database.

#### GetProteins
```csharp
LANS.SystemsBiology.Assembly.MetaCyc.File.FileSystem.DatabaseLoadder.GetProteins
```
Returns the Proteins table in the target metacyc database.
> 
>  在本处的蛋白质指的是具备有生物学活性的多肽链单体蛋白，而蛋白质复合物则指的是多个多肽链单体蛋白的
>  聚合物以及其与小分子化合物所形成的复合物
>  

#### GetProtLigandCplx
```csharp
LANS.SystemsBiology.Assembly.MetaCyc.File.FileSystem.DatabaseLoadder.GetProtLigandCplx
```
Returns the ProtLigandCplx table in the target metacyc database.

#### GetReactions
```csharp
LANS.SystemsBiology.Assembly.MetaCyc.File.FileSystem.DatabaseLoadder.GetReactions
```
Returns the Reactions table in the target metacyc database.

#### GetRegulations
```csharp
LANS.SystemsBiology.Assembly.MetaCyc.File.FileSystem.DatabaseLoadder.GetRegulations
```
Returns the Regulations table in the target metacyc database.

#### GetTerminators
```csharp
LANS.SystemsBiology.Assembly.MetaCyc.File.FileSystem.DatabaseLoadder.GetTerminators
```
Returns the Terminators table in the target metacyc database.

#### GetTransUnits
```csharp
LANS.SystemsBiology.Assembly.MetaCyc.File.FileSystem.DatabaseLoadder.GetTransUnits
```
Returns the TransUnits table in the target metacyc database.


### Properties

#### Database
MetaCyc database directory.(MetaCyc数据库文件夹)
