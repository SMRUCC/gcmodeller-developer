---
title: Contig
---

# Contig
_namespace: [LANS.SystemsBiology.SequenceModel.NucleotideModels](N-LANS.SystemsBiology.SequenceModel.NucleotideModels.html)_

这个基础的模型对象只有在基因组上面的位置信息

### Methods

#### #ctor
```csharp
LANS.SystemsBiology.SequenceModel.NucleotideModels.Contig.#ctor(LANS.SystemsBiology.ComponentModel.Loci.NucleotideLocation)
```
这个构造函数已经使用@"M:LANS.SystemsBiology.ComponentModel.Loci.NucleotideLocation.Copy"函数从数据源**mappinglocation**进行复制

|Parameter Name|Remarks|
|--------------|-------|
|MappingLocation|-|


#### GetRelatedUpstream
```csharp
LANS.SystemsBiology.SequenceModel.NucleotideModels.Contig.GetRelatedUpstream(LANS.SystemsBiology.Assembly.NCBI.GenBank.TabularFormat.PTT,System.Int32)
```
会同时将上游以及上游重叠的基因都找出来

|Parameter Name|Remarks|
|--------------|-------|
|PTT|-|




### Properties

#### MappingLocation
在参考基因组上面的Mapping得到的位置，假若需要修改位置，假若害怕影响到原有的数据的话，则请复写这个属性然后使用复制的方法得到新的位点数据

