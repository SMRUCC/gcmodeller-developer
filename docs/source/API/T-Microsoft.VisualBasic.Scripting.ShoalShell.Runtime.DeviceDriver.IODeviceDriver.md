---
title: IODeviceDriver
---

# IODeviceDriver
_namespace: [Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.DeviceDriver](N-Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.DeviceDriver.html)_



### Methods

#### ImportsHandler
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.DeviceDriver.IODeviceDriver.ImportsHandler(System.Type)
```
返回成功导入的IO方法

|Parameter Name|Remarks|
|--------------|-------|
|Module|-|


#### WriteData
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.DeviceDriver.IODeviceDriver.WriteData(System.Object,System.String)
```
This function will trying to save the data in a properly method from the data type:
 Function will trying save the string as a text file;
 Basic data type collection will be save as a csv data table;
 All of the other data type will be saved based on the registry data;
 If the method is not found in the registry for the data type, then function will throw a method missing exception!
 (函数会尝试根据文件的类型来选择合适的保存格式:
 字符串类型会保存为文本文件
 数组会保存为Csv
 其他的复杂类型会尝试根据注册的句柄来执行相应的数据保存操作)

|Parameter Name|Remarks|
|--------------|-------|
|value|-|
|path|-|





