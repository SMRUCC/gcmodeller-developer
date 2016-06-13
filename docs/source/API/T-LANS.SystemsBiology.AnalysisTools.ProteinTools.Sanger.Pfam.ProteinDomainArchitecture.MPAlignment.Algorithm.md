---
title: Algorithm
---

# Algorithm
_namespace: [LANS.SystemsBiology.AnalysisTools.ProteinTools.Sanger.Pfam.ProteinDomainArchitecture.MPAlignment](N-LANS.SystemsBiology.AnalysisTools.ProteinTools.Sanger.Pfam.ProteinDomainArchitecture.MPAlignment.html)_

Tools for comparing the protein domain structure similarity.

### Methods

#### __alignDomain
```csharp
LANS.SystemsBiology.AnalysisTools.ProteinTools.Sanger.Pfam.ProteinDomainArchitecture.MPAlignment.Algorithm.__alignDomain(LANS.SystemsBiology.AnalysisTools.ProteinTools.Sanger.Pfam.ProteinDomainArchitecture.MPAlignment.DomainDistribution[]@,LANS.SystemsBiology.AnalysisTools.ProteinTools.Sanger.Pfam.ProteinDomainArchitecture.MPAlignment.DomainDistribution[]@)
```
**a**和**b**都是已经经过排序的数据

|Parameter Name|Remarks|
|--------------|-------|
|a|-|
|b|-|

> 这个比对不是实际的物理位置构成的比较

#### __createDS
```csharp
LANS.SystemsBiology.AnalysisTools.ProteinTools.Sanger.Pfam.ProteinDomainArchitecture.MPAlignment.Algorithm.__createDS(LANS.SystemsBiology.ProteinModel.DomainObject[],System.Int32)
```
这个函数会进行归一化处理

|Parameter Name|Remarks|
|--------------|-------|
|domains|-|
|protLen|-|


#### AltEquals
```csharp
LANS.SystemsBiology.AnalysisTools.ProteinTools.Sanger.Pfam.ProteinDomainArchitecture.MPAlignment.Algorithm.AltEquals(LANS.SystemsBiology.AnalysisTools.ProteinTools.Sanger.Pfam.PfamString.PfamString,LANS.SystemsBiology.AnalysisTools.ProteinTools.Sanger.Pfam.PfamString.PfamString,System.Double)
```
初略的判断蛋白质的结构上面的等价性，等价性越高，则返回的数值越接近于1，反之不相等则返回0甚至小于零 {得分， 相似性}

|Parameter Name|Remarks|
|--------------|-------|
|Protein_1|-|
|Protein_2|-|

> 对于两个Domain之间的序列，其格式为[ABCT](start|ends)

#### PfamStringEquals
```csharp
LANS.SystemsBiology.AnalysisTools.ProteinTools.Sanger.Pfam.ProteinDomainArchitecture.MPAlignment.Algorithm.PfamStringEquals(LANS.SystemsBiology.AnalysisTools.ProteinTools.Sanger.Pfam.PfamString.PfamString,LANS.SystemsBiology.AnalysisTools.ProteinTools.Sanger.Pfam.PfamString.PfamString,System.Double,System.Boolean)
```
初略的判断蛋白质的结构上面的等价性，等价性越高，则返回的数值越接近于1，反之不相等则返回0甚至小于零 {得分， 相似性}

|Parameter Name|Remarks|
|--------------|-------|
|Protein_1|-|
|Protein_2|-|

> 对于两个Domain之间的序列，其格式为[ABCT](start|ends)

#### PositionEquals
```csharp
LANS.SystemsBiology.AnalysisTools.ProteinTools.Sanger.Pfam.ProteinDomainArchitecture.MPAlignment.Algorithm.PositionEquals(LANS.SystemsBiology.AnalysisTools.ProteinTools.Sanger.Pfam.ProteinDomainArchitecture.MPAlignment.DomainDistribution,LANS.SystemsBiology.AnalysisTools.ProteinTools.Sanger.Pfam.ProteinDomainArchitecture.MPAlignment.DomainDistribution,System.Double@,System.Double)
```
Domain position specific alignment

|Parameter Name|Remarks|
|--------------|-------|
|ds1|-|
|ds2|-|
|high_Scoring_thresholds|高分比对的计算阈值|





