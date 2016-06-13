---
title: NucleicAcid
---

# NucleicAcid
_namespace: [LANS.SystemsBiology.SequenceModel.NucleotideModels](N-LANS.SystemsBiology.SequenceModel.NucleotideModels.html)_

The nucleotide sequence object.(核酸序列对象)

### Methods

#### #ctor
```csharp
LANS.SystemsBiology.SequenceModel.NucleotideModels.NucleicAcid.#ctor(LANS.SystemsBiology.SequenceModel.ISequenceModel)
```
Construct the nucleotide seuqnece form a nt sequence model object. The nt sequence object should inherits from the base class @"T:LANS.SystemsBiology.SequenceModel.ISequenceModel"

|Parameter Name|Remarks|
|--------------|-------|
|SequenceData|-|


#### __generateSeqCache
```csharp
LANS.SystemsBiology.SequenceModel.NucleotideModels.NucleicAcid.__generateSeqCache
```
假若修改了@"F:LANS.SystemsBiology.SequenceModel.NucleotideModels.NucleicAcid._innerSeqModel"之中的对象的话，则需要使用本方法重新生成序列缓存数据

#### Complement
```csharp
LANS.SystemsBiology.SequenceModel.NucleotideModels.NucleicAcid.Complement(System.String)
```
Gets the complement sequence of a nucleotide sequence.(获取某一条核酸序列的互补序列，但是新得到的序列并不会首尾反转)

|Parameter Name|Remarks|
|--------------|-------|
|DNAseq|The target dna nucleotide sequence to complement.|


#### GetSegment
```csharp
LANS.SystemsBiology.SequenceModel.NucleotideModels.NucleicAcid.GetSegment(System.Int64,System.Int64)
```
**Start**和**End**的值都是数组的下标，在本函数之中已经自动为这两个参数+1了

|Parameter Name|Remarks|
|--------------|-------|
|Start|位置的左端的开始位置|
|End|右端的结束位置|


#### ReadSegment
```csharp
LANS.SystemsBiology.SequenceModel.NucleotideModels.NucleicAcid.ReadSegment(System.Int32,System.Int32)
```
**Left**的值是数组的下标，在本函数之中已经自动为这个参数+1了

|Parameter Name|Remarks|
|--------------|-------|
|Length|片段的长度|


#### Split
```csharp
LANS.SystemsBiology.SequenceModel.NucleotideModels.NucleicAcid.Split(System.Int32)
```
分割得到的小片段的长度

|Parameter Name|Remarks|
|--------------|-------|
|SegmentLength|-|




### Properties

#### __nucleotideAsChar

#### _innerSeqCache
Cache data for maintaining the high performance on sequence operation.
#### _innerSeqModel
这个延时加载的设计好像并没有什么卵用
#### GC
Calculate the GC content of the current sequence data.
#### NucleotideConvert
大小写不敏感
#### SequenceData
字符串形式的序列数据
#### Tm
The melting temperature of P1 is Tm(P1), which is a reference temperature for a primer to perform annealing and known as the Wallace formula
#### UserTag
用户定义的标签数据，有时候用于在不同的序列之间唯一的标记当前的这条序列

