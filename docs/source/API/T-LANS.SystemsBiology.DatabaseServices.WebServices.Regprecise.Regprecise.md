---
title: Regprecise
---

# Regprecise
_namespace: [LANS.SystemsBiology.DatabaseServices.WebServices.Regprecise](N-LANS.SystemsBiology.DatabaseServices.WebServices.Regprecise.html)_





### Methods

#### genes
```csharp
LANS.SystemsBiology.DatabaseServices.WebServices.Regprecise.Regprecise.genes(System.Int32,System.Boolean)
```
+ Retrieves a list of regulated genes that belongs to either a given regulon or regulog.

|Parameter Name|Remarks|
|--------------|-------|
|Id|Regulon or regulog identifier|
|regulon|-|


#### genomes
```csharp
LANS.SystemsBiology.DatabaseServices.WebServices.Regprecise.Regprecise.genomes
```
+ Retrieves a list of genomes that have at least one reconstructed regulon.

#### genomeStats
```csharp
LANS.SystemsBiology.DatabaseServices.WebServices.Regprecise.Regprecise.genomeStats
```
+ Retrieves a general statistics on regulons and regulatory sites in genomes

#### regulators
```csharp
LANS.SystemsBiology.DatabaseServices.WebServices.Regprecise.Regprecise.regulators(System.Int32,System.Boolean)
```
+ Retrieves a list of regulators that belong to either a given regulon or regulog.

|Parameter Name|Remarks|
|--------------|-------|
|Id|Regulon or regulog identifier|
|regulon|-|


#### regulog
```csharp
LANS.SystemsBiology.DatabaseServices.WebServices.Regprecise.Regprecise.regulog(System.Int32)
```
Retrieves a regulog

|Parameter Name|Remarks|
|--------------|-------|
|regulogId|Identifier of regulog|


#### regulogCollections
```csharp
LANS.SystemsBiology.DatabaseServices.WebServices.Regprecise.Regprecise.regulogCollections(System.String)
```
+ Retrieves description of regulog collections of a specific type.

|Parameter Name|Remarks|
|--------------|-------|
|type|Type of a collection of regulogs|


#### regulogCollectionStats
```csharp
LANS.SystemsBiology.DatabaseServices.WebServices.Regprecise.Regprecise.regulogCollectionStats(System.String)
```
+ Retrieves general statistics on regulog collections of a particular type.

|Parameter Name|Remarks|
|--------------|-------|
|type|-|


#### regulogs
```csharp
LANS.SystemsBiology.DatabaseServices.WebServices.Regprecise.Regprecise.regulogs(System.String,System.Int32)
```
+ Retrieves a list of regulogs that belongs to a specific collection

|Parameter Name|Remarks|
|--------------|-------|
|collectionType|Type of a collection of regulogs|
|collectionId|Identifier of collection|


#### regulon
```csharp
LANS.SystemsBiology.DatabaseServices.WebServices.Regprecise.Regprecise.regulon(System.Int32)
```
Retrieves a regulon.

|Parameter Name|Remarks|
|--------------|-------|
|regulonId|-|


#### regulons
```csharp
LANS.SystemsBiology.DatabaseServices.WebServices.Regprecise.Regprecise.regulons(System.Int32,System.Boolean)
```
+ Retrieves a list of regulons belonging to either a particular regulog or to a particular genome, input Either regulog identifier or genome identifier

|Parameter Name|Remarks|
|--------------|-------|
|Id|Either regulog identifier or genome identifier|
|genome|-|


#### release
```csharp
LANS.SystemsBiology.DatabaseServices.WebServices.Regprecise.Regprecise.release
```
Retrieves version and date of the current release of RegPrecise database

#### Retrieves``1
```csharp
LANS.SystemsBiology.DatabaseServices.WebServices.Regprecise.Regprecise.Retrieves``1(System.String)
```
只对集合类型有效

#### searchExtRegulons
```csharp
LANS.SystemsBiology.DatabaseServices.WebServices.Regprecise.Regprecise.searchExtRegulons(System.Int32,System.String)
```
Retrieves a list of regulon references by genome taxonomy id and comma-delimited list of gene locusTags, inputs the NCBI taxonomy id and comma-delimited list of gene locusTags

|Parameter Name|Remarks|
|--------------|-------|
|taxonomyId|NCBI taxonomy id of a genome|
|locusTags|comma-delimited list of gene locusTags|


#### searchRegulons
```csharp
LANS.SystemsBiology.DatabaseServices.WebServices.Regprecise.Regprecise.searchRegulons(System.String,System.String)
```
+ Retrieves a list of regulon references by the name/locus tag of either regulator or target regulated genes, Object type (either 'gene' or 'regulator') and text value representing either locusTag or name

|Parameter Name|Remarks|
|--------------|-------|
|objType|Object type to search, value can be "gene" or "regulator"|
|text|Either locus tag or a name of gene/regulator to search|


#### sites
```csharp
LANS.SystemsBiology.DatabaseServices.WebServices.Regprecise.Regprecise.sites(System.Int32,System.Boolean)
```
+ Retrieves a list of regulatory sites (TF binding sites or RNA regulatory elements) and associated regulated genes that belong to a given regulon or regulog.

|Parameter Name|Remarks|
|--------------|-------|
|Id|-|
|regulon|-|


#### wGetDownload
```csharp
LANS.SystemsBiology.DatabaseServices.WebServices.Regprecise.Regprecise.wGetDownload(LANS.SystemsBiology.DatabaseServices.Regprecise.WebServices.JSONLDM.regulon,LANS.SystemsBiology.DatabaseServices.Regprecise.WebServices.JSONLDM.genome,System.String,Microsoft.VisualBasic.Logging.LogFile,System.Boolean)
```
下载得到调控记录的时候同时也会得到从KEGG数据库之中所下载得到的蛋白质序列Fasta数据

|Parameter Name|Remarks|
|--------------|-------|
|regulon|-|
|genome|-|
|repository|-|
|ErrLog|-|
|disableRegulatorDownloads|-|



