---
title: ISequenceModel
---

# ISequenceModel
_namespace: [LANS.SystemsBiology.SequenceModel](N-LANS.SystemsBiology.SequenceModel.html)_

The biological sequence molecular model.(蛋白质序列，核酸序列都可以使用本对象来表示)

### Methods

#### Get_CompositionVector
```csharp
LANS.SystemsBiology.SequenceModel.ISequenceModel.Get_CompositionVector(LANS.SystemsBiology.SequenceModel.I_PolymerSequenceModel,System.Char[])
```
Get the composition vector for a sequence model using a specific composition description.

|Parameter Name|Remarks|
|--------------|-------|
|SequenceModel|-|
|compositions|This always should be the constant string of @"F:LANS.SystemsBiology.SequenceModel.ISequenceModel.AA_CHARS_ALL"[amino acid]
 or @"F:LANS.SystemsBiology.SequenceModel.ISequenceModel.NA_CHARS_ALL"[nucleotide].|


#### IsProteinSource
```csharp
LANS.SystemsBiology.SequenceModel.ISequenceModel.IsProteinSource(LANS.SystemsBiology.SequenceModel.I_PolymerSequenceModel)
```
目标序列数据是否为一条蛋白质序列

|Parameter Name|Remarks|
|--------------|-------|
|SequenceData|-|




### Properties

#### AA_CHARS_ALL
Enumerate all of the amino acid.(字符串常量枚举所有的氨基酸分子)
#### IsProtSource
This sequence is a protein type sequence?(判断这条序列是否为蛋白质序列)
#### Length
The @"P:LANS.SystemsBiology.SequenceModel.ISequenceModel.SequenceData" string length.
#### NA_CHARS_ALL
Enumerate all of the nucleotides.(字符串常量枚举所有的核苷酸分子类型)
#### SequenceData
Sequence data in a string type.(字符串类型的序列数据)

