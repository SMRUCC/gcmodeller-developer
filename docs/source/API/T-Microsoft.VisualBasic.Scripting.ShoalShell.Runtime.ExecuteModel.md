---
title: ExecuteModel
---

# ExecuteModel
_namespace: [Microsoft.VisualBasic.Scripting.ShoalShell.Runtime](N-Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.html)_

执行依据脚本语句

### Methods

#### __execMemberAccessor
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.ExecuteModel.__execMemberAccessor(Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.LDM.Expressions.FunctionCalls,System.Object@)
```
**obj** -> **Expr**
 执行的是对象本身所具有的实例方法或者属性值的获取，请注意，这个必须要为拓展方法形式

|Parameter Name|Remarks|
|--------------|-------|
|obj|方法所执行的对象|


#### __fillBool
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.ExecuteModel.__fillBool(System.Reflection.ParameterInfo[])
```
逻辑值默认为False

|Parameter Name|Remarks|
|--------------|-------|
|params|-|


#### __functionCalls
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.ExecuteModel.__functionCalls(Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.Linker.APIHandler.APIEntryPoint,Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.LDM.Expressions.FunctionCalls)
```
执行的是API方法

|Parameter Name|Remarks|
|--------------|-------|
|API|-|
|Expr|-|


#### __libraries
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.ExecuteModel.__libraries
```
列举出所有已经注册的动态链接库

#### Cd
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.ExecuteModel.Cd(Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.LDM.Expressions.PrimaryExpression)
```
~ 是主文件夹的简写

|Parameter Name|Remarks|
|--------------|-------|
|Expression|-|


#### Delegate
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.ExecuteModel.Delegate(Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.LDM.Expressions.PrimaryExpression)
```
在入口点管理器之中生成一个匿名函数

|Parameter Name|Remarks|
|--------------|-------|
|Expression|-|


#### DynamicsExpression
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.ExecuteModel.DynamicsExpression(Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.LDM.Expressions.PrimaryExpression)
```
在解释器阶段由于缺少类型信息无法判断目标类型，所以被设置为动态类型

#### Exec
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.ExecuteModel.Exec(Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.LDM.Expressions.PrimaryExpression)
```
Evaluate the Shoal Language DataModel and returns the script value.
 (出于性能方面的考虑，这个执行函数是没有进行任何错误处理的)

|Parameter Name|Remarks|
|--------------|-------|
|Expression|-|


#### FileIO
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.ExecuteModel.FileIO(Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.LDM.Expressions.PrimaryExpression)
```
> 操作符将数据写入文件

|Parameter Name|Remarks|
|--------------|-------|
|Expression|-|


#### ForLoop
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.ExecuteModel.ForLoop(Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.LDM.Expressions.PrimaryExpression)
```
For n in {a, b, c, d, e} => {delegate}
 For i in {5 to 100 step 9} => {delegate}

|Parameter Name|Remarks|
|--------------|-------|
|Expression|-|


#### FunctionCalls
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.ExecuteModel.FunctionCalls(Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.LDM.Expressions.PrimaryExpression)
```
函数调用。函数的执行级别优先于Delegate函数指针

#### HybirdsScriptPush
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.ExecuteModel.HybirdsScriptPush(Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.LDM.Expressions.PrimaryExpression)
```
>> Setup variable of hybrids scripting;

#### HybridsScript
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.ExecuteModel.HybridsScript(Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.LDM.Expressions.PrimaryExpression)
```
<< Hybrids scripting;

#### Library
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.ExecuteModel.Library(Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.LDM.Expressions.PrimaryExpression)
```
动态注册一个链接库，在进行挂载

|Parameter Name|Remarks|
|--------------|-------|
|Expression|-|


#### Memory
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.ExecuteModel.Memory(Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.LDM.Expressions.PrimaryExpression)
```
Memory [varName]

|Parameter Name|Remarks|
|--------------|-------|
|Expression|-|


#### OutDeviceRef
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.ExecuteModel.OutDeviceRef(Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.LDM.Expressions.PrimaryExpression)
```
单独执行输出设备的调用，在终端输出或者打开绘图窗口




