---
title: API
---

# API
_namespace: [LANS.SystemsBiology.Assembly.Expasy.AnnotationsTool](N-LANS.SystemsBiology.Assembly.Expasy.AnnotationsTool.html)_





### Methods

#### __enzymeClassify
```csharp
LANS.SystemsBiology.Assembly.Expasy.AnnotationsTool.API.__enzymeClassify(LANS.SystemsBiology.Assembly.Expasy.AnnotationsTool.T_EnzymeClass_BLAST_OUT[],LANS.SystemsBiology.Assembly.Expasy.AnnotationsTool.API._____ENZYME_CLASS_HANDLER_)
```
由于evalue已经是在做blast的时候已经通过evalue开关参数所限制了，都认为evalue符合要求，故而在这里以identities值为标准

|Parameter Name|Remarks|
|--------------|-------|
|data|-|

> 在上一层待用之中已经使用了查询并行化了，所以在本函数之中将不能够再使用并行化，以免影响程序效率

#### __getKEGGReaction
```csharp
LANS.SystemsBiology.Assembly.Expasy.AnnotationsTool.API.__getKEGGReaction(LANS.SystemsBiology.Assembly.Expasy.AnnotationsTool.EnzymeClass,System.Collections.Generic.IEnumerable{LANS.SystemsBiology.Assembly.KEGG.DBGET.bGetObject.Reaction})
```
通过EC编号来查找KEGG Reaction数据库之中的相应的记录

|Parameter Name|Remarks|
|--------------|-------|
|EC|-|
|KEGG|-|


#### GenerateBasicDocument
```csharp
LANS.SystemsBiology.Assembly.Expasy.AnnotationsTool.API.GenerateBasicDocument(LANS.SystemsBiology.Assembly.Expasy.Database.Enzyme[])
```
从Expasy数据库之中创建基本的数据

|Parameter Name|Remarks|
|--------------|-------|
|Enzymes|-|


#### InvokeAnnotations
```csharp
LANS.SystemsBiology.Assembly.Expasy.AnnotationsTool.API.InvokeAnnotations(LANS.SystemsBiology.Assembly.Expasy.Database.NomenclatureDB,LANS.SystemsBiology.Assembly.Expasy.AnnotationsTool.T_EnzymeClass_BLAST_OUT[])
```


|Parameter Name|Remarks|
|--------------|-------|
|Expasy|-|
|Aligned|经过筛选之后的之后比对结果|



