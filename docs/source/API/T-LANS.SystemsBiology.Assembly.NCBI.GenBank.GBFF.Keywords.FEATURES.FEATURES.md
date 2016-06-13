---
title: FEATURES
---

# FEATURES
_namespace: [LANS.SystemsBiology.Assembly.NCBI.GenBank.GBFF.Keywords.FEATURES](N-LANS.SystemsBiology.Assembly.NCBI.GenBank.GBFF.Keywords.FEATURES.html)_



### Methods

#### __formatString
```csharp
LANS.SystemsBiology.Assembly.NCBI.GenBank.GBFF.Keywords.FEATURES.FEATURES.__formatString(System.String[])
```
去除数据中的断行

|Parameter Name|Remarks|
|--------------|-------|
|strData|-|


#### AddGenes
```csharp
LANS.SystemsBiology.Assembly.NCBI.GenBank.GBFF.Keywords.FEATURES.FEATURES.AddGenes
```
在CDS之前添加基因

#### GetByLocation
```csharp
LANS.SystemsBiology.Assembly.NCBI.GenBank.GBFF.Keywords.FEATURES.FEATURES.GetByLocation(System.Int32,System.Int32)
```


|Parameter Name|Remarks|
|--------------|-------|
|left|-|
|right|-|


#### ListFeatures
```csharp
LANS.SystemsBiology.Assembly.NCBI.GenBank.GBFF.Keywords.FEATURES.FEATURES.ListFeatures(System.String)
```
列举出所有 该字段之下的域的数据

|Parameter Name|Remarks|
|--------------|-------|
|FieldName|-|


#### Query
```csharp
LANS.SystemsBiology.Assembly.NCBI.GenBank.GBFF.Keywords.FEATURES.FEATURES.Query(System.String,LANS.SystemsBiology.Assembly.NCBI.GenBank.GBFF.Keywords.FEATURES.FeatureQualifiers,System.String)
```


|Parameter Name|Remarks|
|--------------|-------|
|KeyValue|Part of the key value that to search in this genbank file.|
|qKey|Qualifier enum value of the key|
|Key|Feature type that to search, default is search all type of the feature.|

_returns: The feature list that match the query conditions._

#### readBlock
```csharp
LANS.SystemsBiology.Assembly.NCBI.GenBank.GBFF.Keywords.FEATURES.FEATURES.readBlock(System.Int64,System.String[])
```
读取从某一个行号开始的文本块

|Parameter Name|Remarks|
|--------------|-------|
|Start|The start index of the reading.(读取的起始位置)|
|data|The text data source to read.(所读取的数据源)|




### Properties

#### FEATURE_HEADER
匹配每一个特性位点的头部标签的格式

