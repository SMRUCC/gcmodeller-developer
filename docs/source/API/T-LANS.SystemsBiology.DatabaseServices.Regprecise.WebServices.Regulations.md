---
title: Regulations
---

# Regulations
_namespace: [LANS.SystemsBiology.DatabaseServices.Regprecise.WebServices](N-LANS.SystemsBiology.DatabaseServices.Regprecise.WebServices.html)_

%Repository%/Regprecise/MEME/regulations.xml
 (在进行了MEME分析之后，使用这个模块来生成所预测的调控关系)

### Methods

#### GetMotifFamily
```csharp
LANS.SystemsBiology.DatabaseServices.Regprecise.WebServices.Regulations.GetMotifFamily(System.String)
```


|Parameter Name|Remarks|
|--------------|-------|
|site|$"{site.geneLocusTag}:{site.position}"|


#### GetRegulations
```csharp
LANS.SystemsBiology.DatabaseServices.Regprecise.WebServices.Regulations.GetRegulations(System.String)
```
{locus_tag:position}

|Parameter Name|Remarks|
|--------------|-------|
|uid|-|


#### GetRegulator
```csharp
LANS.SystemsBiology.DatabaseServices.Regprecise.WebServices.Regulations.GetRegulator(System.Int32)
```
通过vimssid编号来获取得到调控因子的数据模型

|Parameter Name|Remarks|
|--------------|-------|
|geneVIMSSId|-|


#### GetSite
```csharp
LANS.SystemsBiology.DatabaseServices.Regprecise.WebServices.Regulations.GetSite(System.String)
```
$"{@"P:LANS.SystemsBiology.DatabaseServices.Regprecise.WebServices.JSONLDM.site.geneLocusTag"}:{@"P:LANS.SystemsBiology.DatabaseServices.Regprecise.WebServices.JSONLDM.site.position"}"

|Parameter Name|Remarks|
|--------------|-------|
|geneLocusTag|-|





