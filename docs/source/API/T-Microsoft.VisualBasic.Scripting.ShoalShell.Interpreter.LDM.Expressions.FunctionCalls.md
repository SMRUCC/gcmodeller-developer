---
title: FunctionCalls
---

# FunctionCalls
_namespace: [Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.LDM.Expressions](N-Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.LDM.Expressions.html)_

只是调用方法，函数的返回值直接返回给系统变量$
 方法返回Nothing
 函数返回函数值



### Properties

#### EntryPoint
对于@"P:Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.LDM.Expressions.PrimaryExpression.PrimaryExpression"类型而言，其不仅仅调用一个方法，而且还将方法的返回值赋值给一个指定的左端变量，
 由于变量之间赋值传递的情况也可能存在，故而这个属性也可能是引用一个内存地址，当找不到方法的时候，就会通过这个参数来查找内存变量
#### IsVariable
只有左端引用表达式不为空，其他的元素都为空
#### Parameters
解析得到的顺序应该和原始的脚本语句是一致的

