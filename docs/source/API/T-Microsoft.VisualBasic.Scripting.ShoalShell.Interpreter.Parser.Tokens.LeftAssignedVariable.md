---
title: LeftAssignedVariable
---

# LeftAssignedVariable
_namespace: [Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.Tokens](N-Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.Tokens.html)_

可能会存在指针引用的情况，这个对象类型的主要实现的功能是设置内存变量

### Methods

#### #ctor
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.Tokens.LeftAssignedVariable.#ctor(System.String)
```


|Parameter Name|Remarks|
|--------------|-------|
|Ref|
 1. Name 普通变量引用
 2. $var 变量地址引用 -> 值是实际的地址
 3. {expr} 内部表达式引用 -> 值是实际的地址
 4. [int] 位置引用
 |


#### InternalGetPointer
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.Tokens.LeftAssignedVariable.InternalGetPointer(System.Object)
```
会判断是否为有效的指针

|Parameter Name|Remarks|
|--------------|-------|
|Ref|-|




### Properties

#### IsInnerReference
是内部表达式 @"T:Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.Tokens.InternalExpression"
#### RefEntry
该变量在内存之中的引用地址

