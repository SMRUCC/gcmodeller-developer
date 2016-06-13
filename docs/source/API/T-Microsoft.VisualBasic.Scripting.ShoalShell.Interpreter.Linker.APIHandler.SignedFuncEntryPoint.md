---
title: SignedFuncEntryPoint
---

# SignedFuncEntryPoint
_namespace: [Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Linker.APIHandler](N-Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Linker.APIHandler.html)_

用于表示一个已经被签名的函数

### Methods

#### CreateObject
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Linker.APIHandler.SignedFuncEntryPoint.CreateObject(System.Reflection.MethodInfo,Microsoft.VisualBasic.Scripting.MetaData.OverloadsSignatureHandle[])
```
创建共享方法的签名实例

#### Equals
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Linker.APIHandler.SignedFuncEntryPoint.Equals(System.Object)
```
判断两个函数入口点对象是否具有完全一样的数字签名

|Parameter Name|Remarks|
|--------------|-------|
|obj|-|




### Properties

#### _numOfNonOptional
非可选参数的数目
#### FakeSingleParameter
当参数有多个的时候，出了第一个之外，其他的参数都是可选的或者类型为逻辑值，则该函数被定义为伪单参数函数
#### ParameterSignature
参数列表按照从小到大排序之后计算MD5哈希值作为参数列表的数字签名
#### TypeSignature
返回值的数字签名

