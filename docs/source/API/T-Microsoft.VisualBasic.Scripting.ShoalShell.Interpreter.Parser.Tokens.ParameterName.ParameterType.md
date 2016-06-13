---
title: ParameterType
---

# ParameterType
_namespace: [Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.Tokens.ParameterName](N-Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Parser.Tokens.ParameterName.html)_

参数名出了普通类型的参数名需要填充参数名之外，其他类型的参数名都可以留空



### Properties

#### BooleanSwitch
逻辑值类型的开关参数
#### ExtensionMethodCaller
拓展函数的调用参数，即函数定义之中的第一个参数
#### EXtensionSingleParameter
当函数有两个参数的时候，使用拓展函数的形式调用，则第二个参数会可以看作为伪单参数
#### OrderReference
函数的参数之间是按照函数的定义顺序引用的
#### SingleParameter
函数只有一个参数，则可以忽略参数名直接调用

