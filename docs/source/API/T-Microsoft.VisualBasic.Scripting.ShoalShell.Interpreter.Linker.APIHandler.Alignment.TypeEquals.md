---
title: TypeEquals
---

# TypeEquals
_namespace: [Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Linker.APIHandler.Alignment](N-Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Linker.APIHandler.Alignment.html)_

这个模块只是用来判断函数如何重载的，数据类型的转换有系统自动完成

### Methods

#### IsInterfaceInheritsFrom
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Linker.APIHandler.Alignment.TypeEquals.IsInterfaceInheritsFrom(System.Type,System.Type)
```
Is a inherits from b

|Parameter Name|Remarks|
|--------------|-------|
|a|继承类型继承自基本类型，具备有基本类型的所有特性|
|b|基本类型|


#### TypeEquals
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Linker.APIHandler.Alignment.TypeEquals.TypeEquals(System.Type,System.Type)
```
判断两种类型是否相等

|Parameter Name|Remarks|
|--------------|-------|
|FuncDef|当前的这个重载方法的参数定义的类型|
|InputParam|从脚本传递进来的函数参数的类型|





