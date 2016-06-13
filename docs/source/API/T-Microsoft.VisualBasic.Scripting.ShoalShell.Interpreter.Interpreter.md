---
title: Interpreter
---

# Interpreter
_namespace: [Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter](N-Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.html)_

Parsing the script text into a LDM data model for the script executing.

### Methods

#### __parsingFile
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Interpreter.__parsingFile(System.String)
```
同时支持网络位置或者本地文件系统的位置

|Parameter Name|Remarks|
|--------------|-------|
|path|-|


#### InternalExpressionParser
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Interpreter.InternalExpressionParser(System.String)
```
处理来自于终端输入的只有一行的@"T:Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.Tokens.InternalExpression"脚本代码

|Parameter Name|Remarks|
|--------------|-------|
|Line|-|


#### MSLParser
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Interpreter.MSLParser(System.String)
```
处理来自于文件之中的可能具有多行分行的脚本代码

|Parameter Name|Remarks|
|--------------|-------|
|Script|-|


#### ParseFile
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Interpreter.ParseFile(System.String)
```
使用@"T:Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.TextTokenliser.MSLTokens"来解析

|Parameter Name|Remarks|
|--------------|-------|
|File|
 The parser function supports both local file system url or http network file.
 (文件路径)
 |





