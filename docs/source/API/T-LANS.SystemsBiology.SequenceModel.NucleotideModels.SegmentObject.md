---
title: SegmentObject
---

# SegmentObject
_namespace: [LANS.SystemsBiology.SequenceModel.NucleotideModels](N-LANS.SystemsBiology.SequenceModel.NucleotideModels.html)_

片段数据，包含有在目标核酸链之上的位置信息以及用户给这个片段的自定义的标签信息



### Methods

#### Get_GCContent
```csharp
LANS.SystemsBiology.SequenceModel.NucleotideModels.SegmentObject.Get_GCContent(System.String)
```
获取目标核酸片段的GC含量值，假设已经全部转换为大写字母

#### GetFasta
```csharp
LANS.SystemsBiology.SequenceModel.NucleotideModels.SegmentObject.GetFasta
```
将当前的核酸片段数据对象转换为FASTA对象


### Properties

#### Complement
This sequence segment object site is on the complement strand?
#### Description
User data
#### GC_Content
获取当前核酸片段的GC含量值，假设已经全部转换为大写字母
#### SequenceData
The sequence data of this site.
#### Title
User tag data
