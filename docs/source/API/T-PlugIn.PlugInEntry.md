---
title: PlugInEntry
---

# PlugInEntry
_namespace: [PlugIn](N-PlugIn.html)_

Module PlugInsMain.(目标模块，在本模块之中包含有一系列插件命令信息，本对象定义了插件在菜单之上的根菜单项目)

### Methods

#### GetControls``1
```csharp
PlugIn.PlugInEntry.GetControls``1(System.Windows.Forms.Form)
```
从一个指定的窗体对象之上获取一个特定类型的控件的集合

|Parameter Name|Remarks|
|--------------|-------|
|Target|-|


#### Invoke
```csharp
PlugIn.PlugInEntry.Invoke(System.Object[],System.Reflection.MethodInfo)
```


|Parameter Name|Remarks|
|--------------|-------|
|Parameters|Method calling parameters object array.|
|Method|Target method reflection information.|


#### LoadPlugIn
```csharp
PlugIn.PlugInEntry.LoadPlugIn(System.Windows.Forms.MenuStrip,System.String)
```
从一个DLL文件之中加载命令

|Parameter Name|Remarks|
|--------------|-------|
|Menu|-|
|AssemblyPath|Target DLL assembly file.(目标程序集模块的文件名)|

_returns: 返回成功加载的命令的数目_




