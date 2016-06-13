---
title: ParameterName
---

# ParameterName
_namespace: [Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.Tokens](N-Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.Tokens.html)_

开关参数：只适用于逻辑值参数，有表示True，没有则表示False，开关参数使用-或者--或者\或者/开头
 例如有如下的函数定义
 Function(a As Object, b as Boolean) 
 则调用的时候可以有下面的形式
 Function a $a b T/F/True/False/1/0/yesy/no
 或者开关形式
 Function a $a -b 或者 --b 或者 /b 或者 \b
 当然也可以
 Call $a -> Function True/False/yes/No/1/0/T/F
 Call $a -> Function /a 或者 \a 或者 -a 或者 --a

### Methods

#### #ctor
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.Tokens.ParameterName.#ctor(Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.Tokens.ParameterName.ParameterType,System.String)
```


|Parameter Name|Remarks|
|--------------|-------|
|Type|普通类型还是特殊类型|
|Expression|获得参数名称的一个表达式字符串|





