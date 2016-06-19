﻿---
title: Domain
---

# Domain
_namespace: [LANS.SystemsBiology.Assembly.NCBI.CDD.Blastp](N-LANS.SystemsBiology.Assembly.NCBI.CDD.Blastp.html)_

The protein domain object that parse from the output log.
 (从日志文件之中所解析出来的蛋白质结构域对象)



### Methods

#### op_GreaterThan
```csharp
LANS.SystemsBiology.Assembly.NCBI.CDD.Blastp.Domain.op_GreaterThan(LANS.SystemsBiology.Assembly.NCBI.CDD.Blastp.Domain,LANS.SystemsBiology.Assembly.NCBI.CDD.Blastp.Domain)
```
比较两个Domain对象的位置的前后关系

|Parameter Name|Remarks|
|--------------|-------|
|a|-|
|b|-|


#### ToString
```csharp
LANS.SystemsBiology.Assembly.NCBI.CDD.Blastp.Domain.ToString
```
IDE debug


### Properties

#### ID
The protein domain id in the CDD database.
 (目标蛋白质结构域在CDD数据库之中的ID编号)
#### Left
The left side residue number of this domain.(本结构域的左侧的残基编号)
#### Right
The right side residue number of this domain.(本结构域的右侧的残基编号)