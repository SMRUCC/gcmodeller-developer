---
title: EntryPoint
---

# EntryPoint
_namespace: [Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.HybridsScripting](N-Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.HybridsScripting.html)_



### Methods

#### InitInvoke
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.HybridsScripting.EntryPoint.InitInvoke
```
初始化外部环境



### Properties

#### ConservedString
When the @"M:Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.HybridsScripting.InteropAdapter.Evaluate(System.String)"[handlers] can not found the data type 
 convert method for the basically type then it will try this system preserved string type convert 
 method to convert the data as string as default.
 (当@"F:Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.HybridsScripting.EntryPoint.DataConvertors"之中没有查找到目标类型的转换操作接口的时候，则默认使用本方法转换
 为字符串的格式，保留的字符串类型的转换函数)
#### DataConvertors
Basic type data convert interface.(基本数据类型的转换接口)
#### IsNull
This property indicated that the entry data which was parsing from the assembly module is valid or not.(可以使用本属性来判断目标解析数据是否可用)
#### Language
Script name.(混合编程的脚本名称)

