---
title: APIEntryPoint
---

# APIEntryPoint
_namespace: [Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Linker.APIHandler](N-Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Linker.APIHandler.html)_

命令执行的入口点，使用这个对象进行函数重载的处理

### Methods

#### #ctor
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Linker.APIHandler.APIEntryPoint.#ctor(System.String,Microsoft.VisualBasic.CommandLine.Reflection.EntryPoints.APIEntryPoint)
```
共享方法和实例方法

|Parameter Name|Remarks|
|--------------|-------|
|Name|-|
|InitEntryPoint|如果不知道该怎么处理这个参数，请使用Nothing|


#### __getTypeSignatureHandles
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Linker.APIHandler.APIEntryPoint.__getTypeSignatureHandles(System.Reflection.MethodInfo)
```
获取用于支持函授重载所需要的数字签名信息

|Parameter Name|Remarks|
|--------------|-------|
|EntryInfo|-|


#### OverloadsAPIEntryPoint
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Linker.APIHandler.APIEntryPoint.OverloadsAPIEntryPoint(Microsoft.VisualBasic.CommandLine.Reflection.EntryPoints.APIEntryPoint)
```
向当前的执行入口点添加一个重载函数，当当前的执行入口点之中具备有两个完全相同的函数签名的入口点的时候，新的入口点会替换掉旧的入口点

|Parameter Name|Remarks|
|--------------|-------|
|EntryPoint|-|




### Properties

#### _OverloadAPIEntryPoints
Shoal脚本命令的函数重载
#### IsOverloaded
当前的这个执行入口点是否有重载的命令
#### Name
Shoal API命令的名称
#### OverloadsNumber
Overloads Entry Point Counts. (当前的这个执行入口点之中的重载的函数的反射入口点的数目)

