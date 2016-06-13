---
title: Assembly
---

# Assembly
_namespace: [Microsoft.VisualBasic.Scripting.ShoalShell.SPM.Nodes](N-Microsoft.VisualBasic.Scripting.ShoalShell.SPM.Nodes.html)_

用于引用的程序的定位的，用来处理相对路径以及网络路径

### Methods

#### GetType
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.SPM.Nodes.Assembly.GetType
```
Gets this partial module defined type information.(出错会返回空值)

#### LoadAssembly
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.SPM.Nodes.Assembly.LoadAssembly
```
出错的时候会返回空值
> 请注意，在执行的时候可能当前的工作目录会发生改变，所以计算相对路径的时候总是需要以当前的程序的位置来计算



### Properties

#### TypeId
这个属性使用于记录重复的命名空间模块之间的相互比较的
 路径可以不一样，但是这个必须要一样

