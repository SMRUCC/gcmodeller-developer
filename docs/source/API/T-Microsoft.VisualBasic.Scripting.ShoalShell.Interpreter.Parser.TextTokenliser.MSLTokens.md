---
title: MSLTokens
---

# MSLTokens
_namespace: [Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.TextTokenliser](N-Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.TextTokenliser.html)_

Tokenliser working in multiline string literal mode.

### Methods

#### __newLine
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.TextTokenliser.MSLTokens.__newLine(System.Char,Microsoft.VisualBasic.List{System.Char}@,System.Collections.Generic.Stack{System.Char}@,Microsoft.VisualBasic.List{Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.Tokens.Token}@)
```


|Parameter Name|Remarks|
|--------------|-------|
|OprTag|分隔符的类型|
|TempToken|-|
|Stack|-|
|TokenList|-|


#### Parsing
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.TextTokenliser.MSLTokens.Parsing(System.String)
```
将表达式解析为词元，每一个词元都不含有前导或者后置的空白符号
 断词元的条件是Stack必须为空

|Parameter Name|Remarks|
|--------------|-------|
|Expression|在调用之前请先试用Trim函数进行处理|




### Properties

#### FinishYet
表达式是否已经解析完毕了
#### IsBlank
空白行
#### IsCommentLine
当前的整行代码是否为注释行

