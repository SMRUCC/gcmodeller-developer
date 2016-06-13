---
title: SyntaxModel
---

# SyntaxModel
_namespace: [Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.LDM](N-Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.LDM.html)_

This object just the data model which was generated from the script parser, didn't contains any runtime information.
 (只有解析出来的词元模型，，没有包含有函数指针的句柄信息，还不能够直接运行)

### Methods

#### ScriptParser
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.LDM.SyntaxModel.ScriptParser(System.String,System.String)
```


|Parameter Name|Remarks|
|--------------|-------|
|ScriptText|-|
|File|脚本文件的文件路径|


#### ThrowSyntaxException
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.LDM.SyntaxModel.ThrowSyntaxException(Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.LDM.Expressions.Keywords.SyntaxError[],System.String)
```
at Shoal.Testing.Debugger.Main() in G:\Shoal\Shoal.Testing\Debugger.vb:line 21

|Parameter Name|Remarks|
|--------------|-------|
|Tokens|-|
|File|-|




### Properties

#### Expressions
The script lines in the script file.
#### GotoJumpsLabel
Value是指向@"P:Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.LDM.SyntaxModel.Expressions"列表之中的元素的位置下表
#### Keywords
在@"T:Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.LDM.Expressions.Keywords.SyntaxError"的命名空间之下的所有的类型都是脚本之中的关键词

