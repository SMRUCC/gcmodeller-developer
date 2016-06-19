---
title: MatrixSerialization
---

# MatrixSerialization
_namespace: [LANS.SystemsBiology.Toolkits.RNA_Seq](N-LANS.SystemsBiology.Toolkits.RNA_Seq.html)_

对PCC矩阵进行快速的二进制序列化

> 由于是一个二维的矩阵，坐标之间有着一一对应的顺序关系，所以这里不可以使用并行化拓展


### Methods

#### Load
```csharp
LANS.SystemsBiology.Toolkits.RNA_Seq.MatrixSerialization.Load(System.String)
```
加载二进制数据库

|Parameter Name|Remarks|
|--------------|-------|
|from|-|


#### Serialize
```csharp
LANS.SystemsBiology.Toolkits.RNA_Seq.MatrixSerialization.Serialize(LANS.SystemsBiology.Toolkits.RNA_Seq.dataExprMAT.ExprSamples)
```
<TOTAL_BYTES> + <STRING_LENGTH>

|Parameter Name|Remarks|
|--------------|-------|
|sample|-|



