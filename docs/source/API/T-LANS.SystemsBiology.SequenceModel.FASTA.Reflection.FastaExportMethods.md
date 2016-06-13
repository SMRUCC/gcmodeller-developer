---
title: FastaExportMethods
---

# FastaExportMethods
_namespace: [LANS.SystemsBiology.SequenceModel.FASTA.Reflection](N-LANS.SystemsBiology.SequenceModel.FASTA.Reflection.html)_

對象模塊將數據庫中的一條記錄轉換為一條FASTA序列對象

### Methods

#### Complement
```csharp
LANS.SystemsBiology.SequenceModel.FASTA.Reflection.FastaExportMethods.Complement(LANS.SystemsBiology.SequenceModel.FASTA.FastaFile)
```
将某一个FASTA序列集合中的序列进行互补操作，对于蛋白质序列，则返回空值

|Parameter Name|Remarks|
|--------------|-------|
|FASTA2|-|


#### FastaCorrupted
```csharp
LANS.SystemsBiology.SequenceModel.FASTA.Reflection.FastaExportMethods.FastaCorrupted(LANS.SystemsBiology.SequenceModel.FASTA.FastaToken)
```
有些从KEGG上面下载下来的数据会因为解析的问题出现错误，在这里判断是否有这种错误

|Parameter Name|Remarks|
|--------------|-------|
|fa|-|


#### FastaTrimCorrupt
```csharp
LANS.SystemsBiology.SequenceModel.FASTA.Reflection.FastaExportMethods.FastaTrimCorrupt(LANS.SystemsBiology.SequenceModel.FASTA.FastaToken)
```
这个函数是为了修正早期的KEGG序列数据下载工具的一些html解析错误，第一个字符肯定是M

|Parameter Name|Remarks|
|--------------|-------|
|fa|-|


#### Merge
```csharp
LANS.SystemsBiology.SequenceModel.FASTA.Reflection.FastaExportMethods.Merge(System.String,System.String,System.Boolean,System.Boolean)
```


|Parameter Name|Remarks|
|--------------|-------|
|inDIR|-|
|ext|-|
|trim|-|
|rawTitle|是否保留有原来的标题|


#### Reverse
```csharp
LANS.SystemsBiology.SequenceModel.FASTA.Reflection.FastaExportMethods.Reverse(LANS.SystemsBiology.SequenceModel.FASTA.FastaFile)
```
将序列首尾反转




