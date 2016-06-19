---
title: FastaFile
---

# FastaFile
_namespace: [LANS.SystemsBiology.SequenceModel.FASTA](N-LANS.SystemsBiology.SequenceModel.FASTA.html)_

A FASTA file that contains multiple sequence data.
 (一个包含有多条序列数据的FASTA文件)



### Methods

#### #ctor
```csharp
LANS.SystemsBiology.SequenceModel.FASTA.FastaFile.#ctor(System.Collections.Generic.IEnumerable{LANS.SystemsBiology.SequenceModel.FASTA.FastaToken})
```
构造函数会自动移除空值对象

|Parameter Name|Remarks|
|--------------|-------|
|data|-|


#### AppendToFile
```csharp
LANS.SystemsBiology.SequenceModel.FASTA.FastaFile.AppendToFile(System.String)
```


|Parameter Name|Remarks|
|--------------|-------|
|file|
 The target FASTA file that to append this FASTA sequences.(将要拓展这些FASTA序列的目标FASTA文件)
 |


#### Distinct
```csharp
LANS.SystemsBiology.SequenceModel.FASTA.FastaFile.Distinct
```
Get a new fasta2 object which is been clear the duplicated records in the collection.
 (获取去除集合中的重复的记录新列表，原有列表中数据未被改变)

#### FlushData
```csharp
LANS.SystemsBiology.SequenceModel.FASTA.FastaFile.FlushData
```
Clear the sequence data in this fasta file.

#### Generate
```csharp
LANS.SystemsBiology.SequenceModel.FASTA.FastaFile.Generate
```
在写入数据到文本文件之前需要将目标对象转换为文本字符串

#### LoadNucleotideData
```csharp
LANS.SystemsBiology.SequenceModel.FASTA.FastaFile.LoadNucleotideData(System.String,System.Boolean)
```
加载一个FASTA序列文件并检查其中是否全部为核酸序列数据，假若不是，则会将该序列移除

|Parameter Name|Remarks|
|--------------|-------|
|path|-|


#### Match
```csharp
LANS.SystemsBiology.SequenceModel.FASTA.FastaFile.Match(System.String,System.Text.RegularExpressions.RegexOptions)
```
使用正则表达式来搜索在序列中含有特定模式的序列对象

|Parameter Name|Remarks|
|--------------|-------|
|regxText|-|


#### ParseDocument
```csharp
LANS.SystemsBiology.SequenceModel.FASTA.FastaFile.ParseDocument(System.String)
```
Try parsing a fasta file object from the text file content **doc**

|Parameter Name|Remarks|
|--------------|-------|
|doc|The file data content in the fasta file, not the path of the fasta file!|


#### Query
```csharp
LANS.SystemsBiology.SequenceModel.FASTA.FastaFile.Query(System.String,Microsoft.VisualBasic.CompareMethod)
```


|Parameter Name|Remarks|
|--------------|-------|
|KeyWord|A key string that to search in this fasta file.|
|CaseSensitive|For text compaired method that not case sensitive, otherwise in the method od binary than case sensitive.|


#### QueryAny
```csharp
LANS.SystemsBiology.SequenceModel.FASTA.FastaFile.QueryAny(System.String,Microsoft.VisualBasic.CompareMethod)
```


|Parameter Name|Remarks|
|--------------|-------|
|KeyWord|A key string that to search in this fasta file.|
|CaseSensitive|For text compaired method that not case sensitive, otherwise in the method od binary than case sensitive.|


#### Read
```csharp
LANS.SystemsBiology.SequenceModel.FASTA.FastaFile.Read(System.String,System.Boolean)
```
Load the fasta file from the local filesystem.

|Parameter Name|Remarks|
|--------------|-------|
|File|-|
|Explicit|当参数为真的时候，目标文件不存在则会抛出错误，反之则会返回一个空文件|


#### Save
```csharp
LANS.SystemsBiology.SequenceModel.FASTA.FastaFile.Save(System.Int32,System.String,System.Text.Encoding)
```
Save the fasta file into the local filesystem.

|Parameter Name|Remarks|
|--------------|-------|
|Path|-|
|encoding|不同的程序会对这个由要求，例如meme程序在linux系统之中要求序列文件为unicode编码格式而windows版本的meme程序则要求ascii格式|


#### SaveData``1
```csharp
LANS.SystemsBiology.SequenceModel.FASTA.FastaFile.SaveData``1(System.Collections.Generic.IEnumerable{``0},System.String,System.Text.Encoding)
```
可以使用这个方法来作为通用的继承与fasta对象的集合的序列的数据保存工作

|Parameter Name|Remarks|
|--------------|-------|
|data|-|
|path|-|
|encoding|-|



### Properties

#### SourceFile
本FASTA数据文件对象的文件位置
