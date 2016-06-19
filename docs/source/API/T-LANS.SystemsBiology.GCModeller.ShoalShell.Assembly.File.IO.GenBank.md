---
title: GenBank
---

# GenBank
_namespace: [LANS.SystemsBiology.GCModeller.ShoalShell.Assembly.File.IO](N-LANS.SystemsBiology.GCModeller.ShoalShell.Assembly.File.IO.html)_





### Methods

#### CopyBrief
```csharp
LANS.SystemsBiology.GCModeller.ShoalShell.Assembly.File.IO.GenBank.CopyBrief(LANS.SystemsBiology.Assembly.NCBI.GenBank.GBFF.File,System.Boolean)
```
http://www.cbs.dtu.dk/services/gwBrowser/

|Parameter Name|Remarks|
|--------------|-------|
|gbk|-|
|justCDS|-|


#### Distinct
```csharp
LANS.SystemsBiology.GCModeller.ShoalShell.Assembly.File.IO.GenBank.Distinct(System.String,System.Boolean)
```
函数返回去除掉重复记录之后的实际的记录数目

|Parameter Name|Remarks|
|--------------|-------|
|source|-|
|Trim|-|


#### Export
```csharp
LANS.SystemsBiology.GCModeller.ShoalShell.Assembly.File.IO.GenBank.Export(System.String,System.String,System.String[],System.Boolean)
```


|Parameter Name|Remarks|
|--------------|-------|
|source|-|
|ExportToDir|-|
|ext|默认文件的后缀名为*.gbk和*.gb|


#### ExportOriVMotif
```csharp
LANS.SystemsBiology.GCModeller.ShoalShell.Assembly.File.IO.GenBank.ExportOriVMotif(System.String)
```
导出所有质粒的复制起点的序列

|Parameter Name|Remarks|
|--------------|-------|
|source|-|


#### gbkLoadAsDump
```csharp
LANS.SystemsBiology.GCModeller.ShoalShell.Assembly.File.IO.GenBank.gbkLoadAsDump(LANS.SystemsBiology.Assembly.NCBI.GenBank.GBFF.File)
```
从gbk文件之中加载蛋白质的dump信息

|Parameter Name|Remarks|
|--------------|-------|
|gbk|-|


#### MergeAnnotations
```csharp
LANS.SystemsBiology.GCModeller.ShoalShell.Assembly.File.IO.GenBank.MergeAnnotations(System.String,System.String,System.String)
```
Merge the ncbi annotation data. parameter source and the merged is the csv file path of the CDs ncbi annotation data export. 
 notices that this function will group the duplicated accession id and onyl retrun the first object with the accessionid, 
 which means this function is also distince the protein source.

|Parameter Name|Remarks|
|--------------|-------|
|source|-|
|merged|-|
|save|-|


#### SelectByDefinition
```csharp
LANS.SystemsBiology.GCModeller.ShoalShell.Assembly.File.IO.GenBank.SelectByDefinition(System.Collections.Generic.IEnumerable{System.String},System.Collections.Generic.IEnumerable{LANS.SystemsBiology.Assembly.NCBI.GenBank.CsvExports.gbEntryBrief},System.String,System.String)
```
函数返回不成功的编号

|Parameter Name|Remarks|
|--------------|-------|
|list|-|
|entry_info|-|
|source|-|
|copyTo|-|


#### SelectCopyFasta
```csharp
LANS.SystemsBiology.GCModeller.ShoalShell.Assembly.File.IO.GenBank.SelectCopyFasta(System.Collections.Generic.IEnumerable{LANS.SystemsBiology.Assembly.NCBI.GenBank.CsvExports.Plasmid},System.String,System.String,System.Collections.Generic.IEnumerable{System.String})
```
根据**DataEntries**之中的编号来复制基因组的文件数据

|Parameter Name|Remarks|
|--------------|-------|
|DataEntries|-|
|source|-|
|copyto|-|
|ext|只需要列举出后缀名即可，不需要额外的.或者*.|



