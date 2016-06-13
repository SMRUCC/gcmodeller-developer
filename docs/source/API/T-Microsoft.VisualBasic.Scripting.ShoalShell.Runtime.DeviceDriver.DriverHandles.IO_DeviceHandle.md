---
title: IO_DeviceHandle
---

# IO_DeviceHandle
_namespace: [Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.DeviceDriver.DriverHandles](N-Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.DeviceDriver.DriverHandles.html)_

Target delegate must compatible with delegate Func(Of T, String, Boolean), the first parameter in the delegate is the 
 data type and the data to write to the file, the second parameter is the file path of the IO operation and the last bool 
 return value indicated that the io operation success or not. please notices that, for the considerations of the data 
 type compatible, the collection data type is recommended implement as generic enumeration interface.
 (目标接口委托对象必须要符合以下接口类型Func(Of T, String, Boolean)，其中第一个将要写文件的数据类型，第二个参数为
 文件路径，最后一个参数是文件是否写入成功，请注意，对于任意的集合类型推荐使用@"T:System.Collections.Generic.IEnumerable`1"泛型集合)

### Methods

#### #ctor
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.DeviceDriver.DriverHandles.IO_DeviceHandle.#ctor(System.Type)
```


|Parameter Name|Remarks|
|--------------|-------|
|DataType|目标数据类型，脚本引擎会自动根据函数的数据类型自动选择文件系统的写入方式的驱动程序|





