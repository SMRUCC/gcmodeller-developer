---
title: Assembler
---

# Assembler
_namespace: [LANS.SystemsBiology.Toolkits.RNA_Seq.Assembler](N-LANS.SystemsBiology.Toolkits.RNA_Seq.Assembler.html)_

在进行装配的时候应该尽量的在两个reads的左端错开一个距离，否则会装配完没有剩余（非线程安全）

### Methods

#### #ctor
```csharp
LANS.SystemsBiology.Toolkits.RNA_Seq.Assembler.Assembler.#ctor(System.Int32)
```


|Parameter Name|Remarks|
|--------------|-------|
|Delta|下一个reads的左端与当前的contig的右端的最长的距离，建议为reads长度的平均值的一半|


#### __Assembler
```csharp
LANS.SystemsBiology.Toolkits.RNA_Seq.Assembler.Assembler.__Assembler(Microsoft.VisualBasic.List{Microsoft.VisualBasic.Parallel.GroupListNode{LANS.SystemsBiology.SequenceModel.NucleotideModels.Contig,System.Int64}}@,LANS.SystemsBiology.ComponentModel.Loci.NucleotideLocation,LANS.SystemsBiology.Toolkits.RNA_Seq.Assembler.Assembler.getMethod,LANS.SystemsBiology.Toolkits.RNA_Seq.Assembler.Assembler.setMethod,LANS.SystemsBiology.ComponentModel.Loci.SegmentRelationships,System.Int32,LANS.SystemsBiology.Toolkits.RNA_Seq.Assembler.Assembler.DeltaPrediction,System.Int32)
```
序列装配对象的核心算法

|Parameter Name|Remarks|
|--------------|-------|
|readsBuffer|-|
|currentContig|-|
|getMethod|-|
|setMethod|-|
|relationPrediction|-|
|initReads|起点的初始reads|

_returns: 
 对于转录起始位点的预测，则跟从文献之中的方法，当凭借完了之后，就会进行富集，假若左端的reads数多于30条则认为是TSSs
 _

#### Assembling
```csharp
LANS.SystemsBiology.Toolkits.RNA_Seq.Assembler.Assembler.Assembling(System.Collections.Generic.IEnumerable{LANS.SystemsBiology.SequenceModel.NucleotideModels.Contig})
```


|Parameter Name|Remarks|
|--------------|-------|
|data|假设这里都是已经处理好的数据，则在这个装配函数之中就只会根据重叠的情况来进行装配|


#### ForwardsDeltaPrediction
```csharp
LANS.SystemsBiology.Toolkits.RNA_Seq.Assembler.Assembler.ForwardsDeltaPrediction(LANS.SystemsBiology.ComponentModel.Loci.NucleotideLocation,LANS.SystemsBiology.ComponentModel.Loci.NucleotideLocation,System.Int32)
```
当前的contig的右端和当前的下一个reads的左端的距离是否满足条件

|Parameter Name|Remarks|
|--------------|-------|
|currentContig|-|
|nextReads|-|
|Delta|-|


#### ReversedDeltaPrediction
```csharp
LANS.SystemsBiology.Toolkits.RNA_Seq.Assembler.Assembler.ReversedDeltaPrediction(LANS.SystemsBiology.ComponentModel.Loci.NucleotideLocation,LANS.SystemsBiology.ComponentModel.Loci.NucleotideLocation,System.Int32)
```
当前contig的左端和下一个reads的右端的距离是否满足条件

|Parameter Name|Remarks|
|--------------|-------|
|currentContig|-|
|nextReads|-|
|Delta|-|




### Properties

#### ForwardsReadsBuffer
正向的数据已经从小到大排过序了的，由于在装配的时候在第一个循环的过程之中会遍历所有的元素，所以有些会在装配之后还有剩余，
 这个是正常现象，不影响结果，因为在装配的函数之中由于性能优化的需要忽略掉了对遍历的元素的删除的过程
#### ReversedReadsBuffer
反向的数据已经从大到小排过序了的
#### Transcripts
装配得到的转录对象的在基因组上面的转录的内容

