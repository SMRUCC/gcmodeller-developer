---
title: FunctionCalls
---

# FunctionCalls
_namespace: [Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Linker.APIHandler.Alignment](N-Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Linker.APIHandler.Alignment.html)_

所输入的参数是可能没有顺序的，但是函数的参数定义是有顺序的

### Methods

#### __boolsEquals
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Linker.APIHandler.Alignment.FunctionCalls.__boolsEquals(System.Reflection.ParameterInfo,System.Object)
```
处理逻辑开关标记的

|Parameter Name|Remarks|
|--------------|-------|
|FuncDef|-|
|inputParam|-|

_returns: 函数不会计算拓展函数的调用参数_

#### AlignType
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Linker.APIHandler.Alignment.FunctionCalls.AlignType(System.Type,System.Object)
```


|Parameter Name|Remarks|
|--------------|-------|
|paramDef|函数之中的参数类型的定义|
|valueInput|-|


#### IsOrderReference``1
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Linker.APIHandler.Alignment.FunctionCalls.IsOrderReference``1(System.Collections.Generic.KeyValuePair{System.String,``0}[])
```
用户所输入的参数是否是和函数的定义的顺序是一致的

|Parameter Name|Remarks|
|--------------|-------|
|InputParam|-|


#### MultipleAlignment
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Linker.APIHandler.Alignment.FunctionCalls.MultipleAlignment(System.Reflection.ParameterInfo[],System.Collections.Generic.Dictionary{System.String,System.Object}@)
```


|Parameter Name|Remarks|
|--------------|-------|
|FuncDef|-|
|InputParam|-|


#### OrderAlignment
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Linker.APIHandler.Alignment.FunctionCalls.OrderAlignment(System.Reflection.ParameterInfo[],System.Collections.Generic.Dictionary{System.String,System.Object}@)
```
输入的参数里面是没有任何的特殊的名称的，会使用字典查询，不会像@"M:Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Linker.APIHandler.Alignment.FunctionCalls.OrderReferenceAlignment(System.Reflection.ParameterInfo[],System.Object[])"

|Parameter Name|Remarks|
|--------------|-------|
|FuncDef|-|
|InputParam|-|


#### OrderReferenceAlignment
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Linker.APIHandler.Alignment.FunctionCalls.OrderReferenceAlignment(System.Reflection.ParameterInfo[],System.Object[])
```
一一对应比较

|Parameter Name|Remarks|
|--------------|-------|
|FuncDef|-|
|InputParam|-|

> 一一对应比较和参数名无关

#### OverloadsAlignment
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Linker.APIHandler.Alignment.FunctionCalls.OverloadsAlignment(System.Reflection.MethodInfo,System.Collections.Generic.Dictionary{System.String,System.Object})
```


|Parameter Name|Remarks|
|--------------|-------|
|FuncDef|-|
|InputParam|-|





