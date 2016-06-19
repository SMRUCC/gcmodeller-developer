---
title: ResourceNode
---

# ResourceNode
_namespace: [LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.FileStream.XmlFormat](N-LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.FileStream.XmlFormat.html)_





### Methods

#### CopyFile
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.FileStream.XmlFormat.ResourceNode.CopyFile(System.String,System.String,LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.FileStream.XmlFormat.HrefLink)
```
将目标资源文件**hreflink**复制到目标目录**subject**之中

|Parameter Name|Remarks|
|--------------|-------|
|subject|这个参数是模型的主Xml文件所在的文件夹，即root文件夹|
|hreflink|-|
|source|模型文件的复制原的root文件夹|


#### WriteResource``1
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.FileStream.XmlFormat.ResourceNode.WriteResource``1(``0,LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.FileStream.XmlFormat.HrefLink@)
```
在保存数据之前，请设置好工作目录

|Parameter Name|Remarks|
|--------------|-------|
|data|-|
|hreflink|-|



### Properties

#### ResourceCategory
The data storage directory name.(数据文件的存储目录)
#### TYPE_ID
The file reader required this property to located the resources
