---
title: SyntaxParser
---

# SyntaxParser
_namespace: [Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter](N-Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.html)_

语法解析器

### Methods

#### __createParameters
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.SyntaxParser.__createParameters(Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.Tokens.Token[],System.Int32)
```


|Parameter Name|Remarks|
|--------------|-------|
|Tokens|-|
|Index|
 3:  没有进行拓展方法的调用的
 5:  进行了拓展方法的调用的
 |


#### MakeCollection
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.SyntaxParser.MakeCollection(System.String)
```
请先去除掉大括号

|Parameter Name|Remarks|
|--------------|-------|
|Expression|-|


#### Parsing
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.SyntaxParser.Parsing(System.String,Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.Tokens.Token[],System.String)
```
Create the Shoal script language data model from the @"M:Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.TextTokenliser.MSLTokens.Parsing(System.String)" result.
 (为了提高解析的性能，这里不会使用反射操作来进行解析操作的自动注册的，而是通过在下面的手工排序来得到最好的解析性能)

|Parameter Name|Remarks|
|--------------|-------|
|Expression|-|
|Tokens|-|
|Comments|-|


#### TryParseCollectionOpr
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.SyntaxParser.TryParseCollectionOpr(System.String,Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.Tokens.Token[])
```
@"F:Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.Tokens.Operator.Operators.CollectionOprOrDelegate"

|Parameter Name|Remarks|
|--------------|-------|
|Expression|只是用于显示的原始脚本行|
|Tokens|使用这个已经解析好的词元进行@"T:Microsoft.VisualBasic.Scripting.ShoalShell.Compiler.CodeDOM.Expression"|


#### TryParseDelegate
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.SyntaxParser.TryParseDelegate(System.String,Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.Tokens.Token[])
```
*T <= {
 Imports test
 Return rand
 }

|Parameter Name|Remarks|
|--------------|-------|
|Expression|-|
|Tokens|-|


#### TryParseDieException
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.SyntaxParser.TryParseDieException(System.String,Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.Tokens.Token[])
```
单独的抛出错误的语句

|Parameter Name|Remarks|
|--------------|-------|
|expression|-|
|Tokens|-|

_returns: die <message> when <condition>_

#### TryParseDoUntil
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.SyntaxParser.TryParseDoUntil(System.String,Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.Tokens.Token[])
```
DoUntil <boolean> {Delegate}

|Parameter Name|Remarks|
|--------------|-------|
|Expression|-|
|Tokens|-|


#### TryParseDoWhile
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.SyntaxParser.TryParseDoWhile(System.String,Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.Tokens.Token[])
```
DoWhile <boolean> {delegate}

|Parameter Name|Remarks|
|--------------|-------|
|Expression|-|
|Tokens|-|


#### TryParseDynamicsCast
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.SyntaxParser.TryParseDynamicsCast(System.String,Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.Tokens.Token[])
```
var < (typeID) {expression}

|Parameter Name|Remarks|
|--------------|-------|
|Expression|-|
|Tokens|-|


#### TryParseForLoop
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.SyntaxParser.TryParseForLoop(System.String,Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.Tokens.Token[])
```
For var in {status} {Delegate}

|Parameter Name|Remarks|
|--------------|-------|
|Expression|-|
|Tokens|-|


#### TryParseFunctionCalls
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.SyntaxParser.TryParseFunctionCalls(System.String,Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.Tokens.Token[])
```


|Parameter Name|Remarks|
|--------------|-------|
|expression|只是用于显示的原始脚本行|
|Tokens|使用这个已经解析好的词元进行@"T:Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.LDM.Expressions.FunctionCalls"|


#### TryParseGoto
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.SyntaxParser.TryParseGoto(System.String,Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.Tokens.Token[])
```
Goto Label When BooleanExpression

|Parameter Name|Remarks|
|--------------|-------|
|expression|-|
|Tokens|-|


#### TryParseHashTable
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.SyntaxParser.TryParseHashTable(System.String,Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.Tokens.Token[])
```
var = $args => --ssl
 或者
 $args => /name

|Parameter Name|Remarks|
|--------------|-------|
|expression|-|
|Tokens|-|


#### TryParseHybirdsScriptPush
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.SyntaxParser.TryParseHybirdsScriptPush(System.String,Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.Tokens.Token[])
```
@"F:Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.Tokens.Operator.Operators.HybirdsScriptPush"

|Parameter Name|Remarks|
|--------------|-------|
|expression|只是用于显示的原始脚本行|
|Tokens|使用这个已经解析好的词元进行@"T:Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.LDM.Expressions.DynamicsExpression"|


#### TryParseHybridsScript
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.SyntaxParser.TryParseHybridsScript(System.String,Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.Tokens.Token[])
```
@"F:Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.Tokens.Operator.Operators.HybridsScript"

|Parameter Name|Remarks|
|--------------|-------|
|expression|只是用于显示的原始脚本行|
|Tokens|使用这个已经解析好的词元进行@"T:Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.LDM.Expressions.DynamicsExpression"|


#### TryParseIf
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.SyntaxParser.TryParseIf(System.String,Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.Tokens.Token[])
```
If <boolean> {delegate}
 ElseIf <boolean> {delegate}
 Else {Delegate}

|Parameter Name|Remarks|
|--------------|-------|
|Expression|-|
|Tokens|-|


#### TryParseImports
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.SyntaxParser.TryParseImports(System.String,Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.Tokens.Token[])
```


|Parameter Name|Remarks|
|--------------|-------|
|expression|只是用于显示的原始脚本行|
|Tokens|使用这个已经解析好的词元进行@"T:Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.LDM.Expressions.FunctionCalls"|


#### TryParseInclude
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.SyntaxParser.TryParseInclude(System.String,Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.Tokens.Token[])
```
Include file1, file2, file3

|Parameter Name|Remarks|
|--------------|-------|
|expression|-|
|Tokens|-|


#### TryParseLibrary
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.SyntaxParser.TryParseLibrary(System.String,Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.Tokens.Token[])
```
没有跟随文件名说明是列举出所有安装的模块

|Parameter Name|Remarks|
|--------------|-------|
|Expression|-|
|Tokens|-|


#### TryParseOutputHandle
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.SyntaxParser.TryParseOutputHandle(System.String,Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.Tokens.Token[])
```
开头的第一个字符必须是$或者&

|Parameter Name|Remarks|
|--------------|-------|
|expression|只是用于显示的原始脚本行|
|Tokens|使用这个已经解析好的词元进行@"T:Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.LDM.Expressions.FunctionCalls"|


#### TryParseRedirectStream
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.SyntaxParser.TryParseRedirectStream(System.String,Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.Tokens.Token[])
```
@name

|Parameter Name|Remarks|
|--------------|-------|
|Expression|-|
|Tokens|-|





