---
title: Function
---

# Function
_namespace: [LANS.SystemsBiology.Assembly.NCBI.COG](N-LANS.SystemsBiology.Assembly.NCBI.COG.html)_



### Methods

#### __getCategory
```csharp
LANS.SystemsBiology.Assembly.NCBI.COG.Function.__getCategory(System.Char)
```
得到COG分类

|Parameter Name|Remarks|
|--------------|-------|
|cogChar|-|


#### __trimCOGs
```csharp
LANS.SystemsBiology.Assembly.NCBI.COG.Function.__trimCOGs(System.String)
```


|Parameter Name|Remarks|
|--------------|-------|
|value|COGxxxZZZ|


#### CanbeCategoryAs
```csharp
LANS.SystemsBiology.Assembly.NCBI.COG.Function.CanbeCategoryAs(System.String,LANS.SystemsBiology.Assembly.NCBI.COG.COGCategories)
```
当具有多个COG分类的时候，可以用这个来判断该基因是否可以被分类为指定的大分类

|Parameter Name|Remarks|
|--------------|-------|
|COG|必须是经过@"M:LANS.SystemsBiology.BioAssemblyExtensions.GetCOGCategory(System.String)"修剪的字符串|


#### GetCategories
```csharp
LANS.SystemsBiology.Assembly.NCBI.COG.Function.GetCategories(System.Int32)
```


|Parameter Name|Remarks|
|--------------|-------|
|category|相加得到的值，可以在这里使用这个函数进行分解|


#### GetCategory
```csharp
LANS.SystemsBiology.Assembly.NCBI.COG.Function.GetCategory(System.String)
```
请注意，这个函数只会返回一个COG编号

|Parameter Name|Remarks|
|--------------|-------|
|COG|已经自动处理好所有事情了|


#### Statistics
```csharp
LANS.SystemsBiology.Assembly.NCBI.COG.Function.Statistics(System.String[])
```


|Parameter Name|Remarks|
|--------------|-------|
|lstId|List COG id|





