---
title: Correlations
---

# Correlations
_namespace: [LANS.SystemsBiology.DatabaseServices.ComparativeGenomics.AnnotationTools](N-LANS.SystemsBiology.DatabaseServices.ComparativeGenomics.AnnotationTools.html)_

基因表达相关性的数据库服务

### Methods

#### #ctor
```csharp
LANS.SystemsBiology.DatabaseServices.ComparativeGenomics.AnnotationTools.Correlations.#ctor(Oracle.LinuxCompatibility.MySQL.ConnectionUri)
```


|Parameter Name|Remarks|
|--------------|-------|
|uri|一般情况下这个参数为空，程序会自动根据配置文件来查找数据源|


#### GetPcc
```csharp
LANS.SystemsBiology.DatabaseServices.ComparativeGenomics.AnnotationTools.Correlations.GetPcc(System.String,System.String)
```
无方向性的

|Parameter Name|Remarks|
|--------------|-------|
|id1|-|
|id2|-|


#### GetPccSignificantThan
```csharp
LANS.SystemsBiology.DatabaseServices.ComparativeGenomics.AnnotationTools.Correlations.GetPccSignificantThan(System.String,System.Double)
```
@"M:LANS.SystemsBiology.DatabaseServices.ComparativeGenomics.AnnotationTools.Correlations.GetPccGreaterThan(System.String,System.Double)"不取绝对值，这个函数是取绝对值的

|Parameter Name|Remarks|
|--------------|-------|
|id|-|
|cutoff|-|


#### GetSPcc
```csharp
LANS.SystemsBiology.DatabaseServices.ComparativeGenomics.AnnotationTools.Correlations.GetSPcc(System.String,System.String)
```
无方向性的

|Parameter Name|Remarks|
|--------------|-------|
|id1|-|
|id2|-|


#### GetWGCNAWeight
```csharp
LANS.SystemsBiology.DatabaseServices.ComparativeGenomics.AnnotationTools.Correlations.GetWGCNAWeight(System.String,System.String)
```
无方向性的

|Parameter Name|Remarks|
|--------------|-------|
|id1|-|
|id2|-|





