---
title: LQuerySchedule
---

# LQuerySchedule
_namespace: [Microsoft.VisualBasic.Parallel.Linq](N-Microsoft.VisualBasic.Parallel.Linq.html)_

Parallel Linq query library for VisualBasic.
 (用于高效率执行批量查询操作和用于检测操作超时的工具对象，请注意，为了提高查询的工作效率，请尽量避免在查询操作之中生成新的临时对象
 并行版本的LINQ查询和原始的线程操作相比具有一些性能上面的局限性)

### Methods

#### AutoConfig
```csharp
Microsoft.VisualBasic.Parallel.Linq.LQuerySchedule.AutoConfig(System.Int32)
```
假如小于0，则认为是自动配置，0被认为是单线程，反之直接返回

|Parameter Name|Remarks|
|--------------|-------|
|n|-|


#### LQuery``2
```csharp
Microsoft.VisualBasic.Parallel.Linq.LQuerySchedule.LQuery``2(System.Collections.Generic.IEnumerable{``0},System.Func{``0,``1},System.Int32)
```
将大量的短时间的任务进行分区，合并，然后再执行并行化

|Parameter Name|Remarks|
|--------------|-------|
|inputs|-|
|task|-|




### Properties

#### CPU_NUMBER
Get the number of processors on the current machine.(获取当前的系统主机的CPU核心数)
#### Recommended_NUM_THREADS
The possible recommended threads of the linq based on you machine processors number, i'm not sure...

