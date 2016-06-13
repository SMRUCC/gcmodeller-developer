---
title: ReflectionAPI
---

# ReflectionAPI
_namespace: [Microsoft.VisualBasic.Windows.Forms.PlugIns](N-Microsoft.VisualBasic.Windows.Forms.PlugIns.html)_



### Methods

#### GetControls``1
```csharp
Microsoft.VisualBasic.Windows.Forms.PlugIns.ReflectionAPI.GetControls``1(Microsoft.VisualBasic.Windows.Forms.Form)
```
从一个指定的窗体对象之上获取一个特定类型的控件的集合

|Parameter Name|Remarks|
|--------------|-------|
|host|-|


#### Invoke
```csharp
Microsoft.VisualBasic.Windows.Forms.PlugIns.ReflectionAPI.Invoke(System.Object[],System.Reflection.MethodInfo)
```


|Parameter Name|Remarks|
|--------------|-------|
|parameters|Method calling parameters object array.|
|Method|Target method reflection information.|


#### LoadPlugIn
```csharp
Microsoft.VisualBasic.Windows.Forms.PlugIns.ReflectionAPI.LoadPlugIn(System.Windows.Forms.MenuStrip,System.String)
```
从一个DLL文件之中加载命令

|Parameter Name|Remarks|
|--------------|-------|
|menu|-|
|assem|Target DLL assembly file.(目标程序集模块的文件名)|

_returns: 返回成功加载的命令的数目_




