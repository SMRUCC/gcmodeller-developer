---
title: DataStream
---

# DataStream
_namespace: [Microsoft.VisualBasic.DocumentFormat.Csv.DocumentStream.Linq](N-Microsoft.VisualBasic.DocumentFormat.Csv.DocumentStream.Linq.html)_

Buffered large text dataset Table reader

### Methods

#### AsLinq``1
```csharp
Microsoft.VisualBasic.DocumentFormat.Csv.DocumentStream.Linq.DataStream.AsLinq``1
```
Csv to LINQ

#### BufferProvider
```csharp
Microsoft.VisualBasic.DocumentFormat.Csv.DocumentStream.Linq.DataStream.BufferProvider
```

> 
>  这个函数主要是为了处理第一行数据
>  因为在构造函数部分已经读取了第一行来解析schema，所以在这里需要对第一个数据块做一些额外的处理
>  

#### ForEachBlock``1
```csharp
Microsoft.VisualBasic.DocumentFormat.Csv.DocumentStream.Linq.DataStream.ForEachBlock``1(System.Action{``0[]},System.Int32)
```
Processing large dataset in block partitions.(以分块任务的形式来处理一个非常大的数据集)

|Parameter Name|Remarks|
|--------------|-------|
|invoke|-|
|blockSize|行数|





