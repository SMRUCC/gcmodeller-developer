---
title: FileReader
---

# FileReader
_namespace: [LANS.SystemsBiology.Assembly.MetaCyc.File](N-LANS.SystemsBiology.Assembly.MetaCyc.File.html)_

Database file reader of the metacyc database.
 (MetaCyc数据库中的数据库文件的读取模块)

### Methods

#### GetData
```csharp
LANS.SystemsBiology.Assembly.MetaCyc.File.FileReader.GetData(System.String[])
```
Get the data text line
 (获取非注释的文本行)

#### GetDbProperty
```csharp
LANS.SystemsBiology.Assembly.MetaCyc.File.FileReader.GetDbProperty(System.String[])
```
从数据库文件中的注释行获取属性值

#### TryParse
```csharp
LANS.SystemsBiology.Assembly.MetaCyc.File.FileReader.TryParse(System.String,LANS.SystemsBiology.Assembly.MetaCyc.File.Property@,LANS.SystemsBiology.Assembly.MetaCyc.File.ObjectModel[]@)
```
Try parse the data file.

|Parameter Name|Remarks|
|--------------|-------|
|path|-|
|prop|-|
|objs|-|

_returns: Returns error message_




