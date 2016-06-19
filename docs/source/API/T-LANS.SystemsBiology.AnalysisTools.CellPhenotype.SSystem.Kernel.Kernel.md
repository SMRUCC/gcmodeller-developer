﻿---
title: Kernel
---

# Kernel
_namespace: [LANS.SystemsBiology.AnalysisTools.CellPhenotype.SSystem.Kernel](N-LANS.SystemsBiology.AnalysisTools.CellPhenotype.SSystem.Kernel.html)_

The simulation system kernel.



### Methods

#### __innerTicks
```csharp
LANS.SystemsBiology.AnalysisTools.CellPhenotype.SSystem.Kernel.Kernel.__innerTicks(System.Int32)
```
The kernel loop.(内核循环)

#### Run
```csharp
LANS.SystemsBiology.AnalysisTools.CellPhenotype.SSystem.Kernel.Kernel.Run(LANS.SystemsBiology.AnalysisTools.CellPhenotype.SSystem.Script.Model)
```
Run a compiled model.(运行一个已经编译好的模型文件)

|Parameter Name|Remarks|
|--------------|-------|
|Model|-|



### Properties

#### __engine
模拟器的数学计算引擎
#### Channels
Alter the system state.
#### DataAcquisition
Data collecting
#### Kicks
Object that action the disturbing
#### RuntimeTicks
Gets the system run time ticks
#### Vars
Store the system state.