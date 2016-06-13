---
title: ScriptEngine
---

# ScriptEngine
_namespace: [Microsoft.VisualBasic.Scripting.ShoalShell.Runtime](N-Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.html)_

Shoal Shell script Engine, you can using this object to embedded a script engine into 
 your application or using this script engine as a powerfully debugging tool.
 Try using @"T:Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.Dynamics" object to dynamics programming in your .NET program.

### Methods

#### #ctor
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.ScriptEngine.#ctor
```
Create the Shoal @"T:Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.ScriptEngine" instance using the default configuration file: @"M:Microsoft.VisualBasic.Scripting.ShoalShell.Configuration.Config.LoadDefault".
 (采用默认的配置文件数据来初始化脚本引擎)

#### Exec
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.ScriptEngine.Exec(System.String)
```
Evaluate the script line which is user input from the terminal.
 (处理来自于终端输入的一行脚本代码)

|Parameter Name|Remarks|
|--------------|-------|
|Script|User input from the terminal.|


#### Source
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.ScriptEngine.Source(System.String)
```
Evaluate script which is on a specific file system location: **path**.
 (处理来自于文件之中的脚本代码)

|Parameter Name|Remarks|
|--------------|-------|
|path|The file path of the script file.|




### Properties

#### MMUDevice
Shoal Shell memory management device.
#### Strings
String interpolated services.(字符串服务)

