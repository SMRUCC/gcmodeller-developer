---
title: AnonymousDelegate
---

# AnonymousDelegate
_namespace: [Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter](N-Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.html)_

匿名函数

### Methods

#### CdTemp
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.AnonymousDelegate.CdTemp
```
当切换目录之后扫描当前目录之下的所有的临时命令脚本

#### Exec
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.AnonymousDelegate.Exec(System.String,Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.LDM.Expressions.FunctionCalls,System.Boolean@)
```


|Parameter Name|Remarks|
|--------------|-------|
|Expr|-|
|success|这个变量主要是用来指示是否找到了相应的函数入口点|




### Properties

#### GetScriptDelegate
会在两个字典之中进行查找，由于可能会因为不小心重名的缘故会造成临时脚本被执行，产生无法察觉的BUG，所以在这里临时脚本命令的优先级是最低的

