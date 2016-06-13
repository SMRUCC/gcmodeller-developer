---
title: Dynamics
---

# Dynamics
_namespace: [Microsoft.VisualBasic.Scripting.ShoalShell.Runtime](N-Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.html)_

Dynamics programming environment. If the environment thorw member not found exception, then you should consider of the 
 target method namespace may be not registered yet so then you should try using 
 @"M:Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.Dynamics.CreateDefaultEnvironment" to initialize the environment.
 (Shoal脚本的动态编程环境，注意：假若提示找不到方法或者空引用，请使用带参数的@"M:Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.Dynamics.CreateDefaultEnvironment"[
 创建方法]在扫描完插件文件夹之后再来创建对象实例)
 
 @"T:System.IConvertible"所返回的是Shoal的系统保留变量的值

### Methods

#### CreateDefaultEnvironment
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.Dynamics.CreateDefaultEnvironment
```
Initialize the dynamics programming runtime environment from the @"P:Microsoft.VisualBasic.Scripting.ShoalShell.Configuration.Config.DefaultFile" configuration data.

#### GetTypeCode
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.Dynamics.GetTypeCode
```
Specifies the type of an object.

#### TryInvokeMember
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.Dynamics.TryInvokeMember(System.Dynamic.InvokeMemberBinder,System.Object[],System.Object@)
```
首先尝试查看@"F:Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.Dynamics._VirtualInvokeAPINsCache"里面的数据，假若没有的话在直接查找，假若有数据，则执行命名空间的连接操作之后在查找执行

|Parameter Name|Remarks|
|--------------|-------|
|binder|-|
|args|按照函数的定义排序的|
|result|-|





