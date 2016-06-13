---
title: MMUDevice
---

# MMUDevice
_namespace: [Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.MMU](N-Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.MMU.html)_

Memory Management Unit Device.(大小写不敏感的，直接使用即可)

### Methods

#### __addInternal
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.MMU.MMUDevice.__addInternal(System.String,Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.MMU.IPageUnit@)
```


|Parameter Name|Remarks|
|--------------|-------|
|keyFind|必须为小写的|
|var|-|


#### __importsConstantsInit
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.MMU.MMUDevice.__importsConstantsInit
```
导入系统初始的默认常量

#### AddressOf
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.MMU.MMUDevice.AddressOf(System.String,System.Boolean)
```
目标内存对象不存在则会返回-1指针值

|Parameter Name|Remarks|
|--------------|-------|
|Name|-|
|autoAlloc|内存对象不存在的时候是否自动分配内存空间|


#### Allocate
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.MMU.MMUDevice.Allocate(Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.MMU.IPageUnit)
```
为新的变量分配新的内存区域

|Parameter Name|Remarks|
|--------------|-------|
|var|-|


#### ImportConstant
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.MMU.MMUDevice.ImportConstant(System.String,System.Object,System.String)
```
常量是大小写敏感的，但是变量大小写不敏感

|Parameter Name|Remarks|
|--------------|-------|
|Name|不需要加前导符号|
|value|-|
|Type|-|


#### InitLocals
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.MMU.MMUDevice.InitLocals(System.String,System.Object,System.String)
```
函数会返回该新申请的变量的内存之中的地址

|Parameter Name|Remarks|
|--------------|-------|
|Name|-|
|value|-|
|Type|-|




### Properties

#### GetPageUnit
请不要删除前面的前导符号，这个方法会优先读取映射的内存不，但是更新的时候会两个部分都会更新掉
#### MMU_CHUNKS
内存设备
#### MTRR
寄存器
#### SystemReserved
The pointer address of this variable in the memory is always ZERO.
 (内存之中的地址总是 0; @"T:Microsoft.VisualBasic.Scripting.ShoalShell.Interpreter.LDM.Expressions.Keywords.Return"函数会写入返回数据到这个保留变量之中)

