---
title: FSMMachine
---

# FSMMachine
_namespace: [Microsoft.VisualBasic.Scripting.ShoalShell.Runtime](N-Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.html)_

执行整个脚本的模块

### Methods

#### #ctor
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.FSMMachine.#ctor(Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.ScriptEngine,Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.LDM.SyntaxModel)
```
Initialize a runtime state machine for running a script file.

|Parameter Name|Remarks|
|--------------|-------|
|ScriptEngine|-|
|Script|-|


#### __execute
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.FSMMachine.__execute(System.Boolean@)
```


|Parameter Name|Remarks|
|--------------|-------|
|__return|是否执行了@"T:Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.LDM.Expressions.Keywords.Return"代码|


#### Execute
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.FSMMachine.Execute
```
已经包含有错误处理的代码了，由于这个是执行的是脚本文件，故而出错的时候会直接退出运行
> Dirty works here in this function.




