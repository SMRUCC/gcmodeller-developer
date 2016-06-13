---
title: FluxObject
---

# FluxObject
_namespace: [LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.ObjectModels.Module](N-LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.ObjectModels.Module.html)_

细胞内部的流对象，本对象用于表示多个生物分子之间的相互作用关系

### Methods

#### InternalEventInvoke
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.ObjectModels.Module.FluxObject.InternalEventInvoke
```
同名函数调用有BUG？？？？？所以必须要使用不相同名字的函数来调用同名函数？

#### Invoke
```csharp
LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.ObjectModels.Module.FluxObject.Invoke(LANS.SystemsBiology.GCModeller.ModellingEngine.EngineSystem.ObjectModels.I_SystemEventDriver.___EVENT_HANDLE)
```
时间驱动程序所附加的额外的处理事件

|Parameter Name|Remarks|
|--------------|-------|
|___attachedEvents|该事件的执行入口点|




### Properties

#### get_ATP_EnergyConsumption
当前的这个反应流对象在一次内核循环之后所消耗掉的能量

