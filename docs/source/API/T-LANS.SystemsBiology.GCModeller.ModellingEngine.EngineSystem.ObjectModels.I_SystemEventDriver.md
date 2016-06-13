---
title: I_SystemEventDriver
---

# I_SystemEventDriver
_namespace: [LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.ObjectModels](N-LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.ObjectModels.html)_

Driver for all of the events in the target @"F:LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.ObjectModels.I_SystemEventDriver._cellObject"[virtual cell.]
 (目标虚拟细胞对象之中的所有网络之中的边的驱动程序模块)

### Methods

#### EmptyEvent
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.ObjectModels.I_SystemEventDriver.EmptyEvent
```
DO_NOTHING

#### InvokeEvents
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.ObjectModels.I_SystemEventDriver.InvokeEvents
```
Running the virtual cell from here!

#### JoinEvents
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.ObjectModels.I_SystemEventDriver.JoinEvents(System.Collections.Generic.IEnumerable{LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.ObjectModels.Module.FluxObject})
```
Adding the flux object events into this @"T:LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.ObjectModels.I_SystemEventDriver"

|Parameter Name|Remarks|
|--------------|-------|
|Events|-|




### Properties

#### _innerAttachedEventHandle
@"M:LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.ObjectModels.I_SystemEventDriver.___Internal_get_attachedEvent"函数的执行入口点
#### _lstAttachedEvent
附加需要处理的额外事件

