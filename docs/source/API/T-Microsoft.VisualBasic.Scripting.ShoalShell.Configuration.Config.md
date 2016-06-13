---
title: Config
---

# Config
_namespace: [Microsoft.VisualBasic.Scripting.ShoalShell.Configuration](N-Microsoft.VisualBasic.Scripting.ShoalShell.Configuration.html)_

脚本引擎的配置文件

### Methods

#### GetRegistryFile
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Configuration.Config.GetRegistryFile
```
Get shoal shell registry file path.(获取注册表的文件路径)

#### LoadDefault
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Configuration.Config.LoadDefault
```
Load the configuration file from the default file location: @"P:Microsoft.VisualBasic.Scripting.ShoalShell.Configuration.Config.DefaultFile".



### Properties

#### DefaultFile
The default file location of the shoal @"T:Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.ScriptEngine" configuration data.
#### InitDir
应用程序启动的时候的初始工作目录，默认为应用程序所在的文件夹
#### SPMRegistry
脚本引擎的类型注册表的文件位置，为空的话会使用默认的文件位置

