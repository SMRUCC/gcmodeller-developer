---
title: NucleicAcidStaticsProperty
---

# NucleicAcidStaticsProperty
_namespace: [LANS.SystemsBiology.SequenceModel.NucleotideModels](N-LANS.SystemsBiology.SequenceModel.NucleotideModels.html)_



### Methods

#### __contentCommon
```csharp
LANS.SystemsBiology.SequenceModel.NucleotideModels.NucleicAcidStaticsProperty.__contentCommon(LANS.SystemsBiology.SequenceModel.I_PolymerSequenceModel,System.Int32,System.Int32,System.Boolean,System.Char[])
```


|Parameter Name|Remarks|
|--------------|-------|
|SequenceModel|-|
|SlideWindowSize|-|
|Steps|-|
|Circular|-|
|base|必须是大写的字符|


#### GCContent
```csharp
LANS.SystemsBiology.SequenceModel.NucleotideModels.NucleicAcidStaticsProperty.GCContent(System.String)
```
Calculate the GC content of the target sequence data.

|Parameter Name|Remarks|
|--------------|-------|
|NT|序列数据大小写不敏感|


#### GCSkew
```csharp
LANS.SystemsBiology.SequenceModel.NucleotideModels.NucleicAcidStaticsProperty.GCSkew(LANS.SystemsBiology.SequenceModel.I_PolymerSequenceModel,System.Int32,System.Int32,System.Boolean)
```
Calculation the GC skew of a specific nucleotide acid sequence.(对核酸链分子计算GC偏移量，请注意，当某一个滑窗区段内的GC是相等的话，则会出现正无穷)

|Parameter Name|Remarks|
|--------------|-------|
|SequenceModel|Target sequence object should be a nucleotide acid sequence.(目标对象必须为核酸链分子)|
|Circular|-|

_returns: 返回的矩阵是每一个核苷酸碱基上面的GC偏移量_

#### GetCompositionVector
```csharp
LANS.SystemsBiology.SequenceModel.NucleotideModels.NucleicAcidStaticsProperty.GetCompositionVector(System.Char[])
```
A, T, G, C

|Parameter Name|Remarks|
|--------------|-------|
|Sequence|-|

_returns: A, T, G, C_

#### Tm
```csharp
LANS.SystemsBiology.SequenceModel.NucleotideModels.NucleicAcidStaticsProperty.Tm(System.String)
```
The melting temperature of P1 is Tm(P1), which is a reference temperature for a primer to perform annealing and known as the Wallace formula




