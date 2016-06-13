---
title: BioAssemblyExtensions
---

# BioAssemblyExtensions
_namespace: [LANS.SystemsBiology](N-LANS.SystemsBiology.html)_



### Methods

#### DirectCast``1
```csharp
LANS.SystemsBiology.BioAssemblyExtensions.DirectCast``1(System.Collections.Generic.IEnumerable{``0})
```
Generate @"T:LANS.SystemsBiology.SequenceModel.FASTA.FastaFile" from a specific fasta source collection.

|Parameter Name|Remarks|
|--------------|-------|
|data|Target fasta source collection which its elements base type is @"T:LANS.SystemsBiology.SequenceModel.FASTA.FastaToken"|


#### GetBriefCode
```csharp
LANS.SystemsBiology.BioAssemblyExtensions.GetBriefCode(LANS.SystemsBiology.ComponentModel.Loci.Strands)
```
Convert the nucleotide sequence strand direction enumeration as character brief code. [@"T:LANS.SystemsBiology.ComponentModel.Loci.Strands" => +, -, ?]

|Parameter Name|Remarks|
|--------------|-------|
|strand|-|


#### GetBriefStrandCode
```csharp
LANS.SystemsBiology.BioAssemblyExtensions.GetBriefStrandCode(System.String)
```
Convert the nucleotide seuqnece strand description word as character brief code.
 (获取核酸链链方向的描述简要代码)

|Parameter Name|Remarks|
|--------------|-------|
|strand|-|


#### GetCOGCategory
```csharp
LANS.SystemsBiology.BioAssemblyExtensions.GetCOGCategory(System.String)
```
将COG字符串进行修剪，返回的是大写的COG符号
 COG4771P -> P; 
 P -> P; 
 <SPACE> -> -; 
 - -> -;

|Parameter Name|Remarks|
|--------------|-------|
|str|-|


#### GetStrands
```csharp
LANS.SystemsBiology.BioAssemblyExtensions.GetStrands(System.Char)
```
Convert the string value type nucleotide strand information description data into a strand enumerate data.

|Parameter Name|Remarks|
|--------------|-------|
|c|从文本文件之中所读取出来关于链方向的字符串描述数据|


#### Group``1
```csharp
LANS.SystemsBiology.BioAssemblyExtensions.Group``1(System.Collections.Generic.IEnumerable{``0},System.Int32)
```
对位点进行分组操作

|Parameter Name|Remarks|
|--------------|-------|
|contigs|-|
|offsets|-|


#### IsReversed
```csharp
LANS.SystemsBiology.BioAssemblyExtensions.IsReversed(LANS.SystemsBiology.SequenceModel.I_PolymerSequenceModel)
```
Is this ORF is in the reversed strand direction?(判断一段ORF核酸序列是否为反向的)

|Parameter Name|Remarks|
|--------------|-------|
|nt|
 This function parameter is only allowed nucleotide sequence.
 (请注意，这个只允许核酸序列)
 |





