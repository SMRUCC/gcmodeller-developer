---
title: DbFile
---

# DbFile
_namespace: [LANS.SystemsBiology.Assembly.NCBI.CDD](N-LANS.SystemsBiology.Assembly.NCBI.CDD.html)_

CDD database builder.(CDD数据库构建工具)

> 
>  ftp://ftp.ncbi.nlm.nih.gov/pub/mmdb/cdd/cdd.tar.gz
>  


### Methods

#### ContainsId
```csharp
LANS.SystemsBiology.Assembly.NCBI.CDD.DbFile.ContainsId(System.String)
```
非并行版本的@"P:LANS.SystemsBiology.Assembly.NCBI.CDD.SmpFile.Identifier"[AccessionId], @"P:LANS.SystemsBiology.Assembly.NCBI.CDD.SmpFile.Id"[TagId], @"P:LANS.SystemsBiology.Assembly.NCBI.CDD.SmpFile.CommonName"[CommonName]

#### ContainsId_p
```csharp
LANS.SystemsBiology.Assembly.NCBI.CDD.DbFile.ContainsId_p(System.String)
```
并行版本的

|Parameter Name|Remarks|
|--------------|-------|
|Id|-|


#### PreLoad
```csharp
LANS.SystemsBiology.Assembly.NCBI.CDD.DbFile.PreLoad(System.String)
```
在编译整个CDD数据库之前进行预加载

|Parameter Name|Remarks|
|--------------|-------|
|DIR|-|


#### Takes
```csharp
LANS.SystemsBiology.Assembly.NCBI.CDD.DbFile.Takes(System.Collections.Generic.IEnumerable{System.String})
```
根据唯一标识符的集合来获取数据库记录数据

|Parameter Name|Remarks|
|--------------|-------|
|lstAccId|-|



### Properties

#### Smp
不存在则返回空值
