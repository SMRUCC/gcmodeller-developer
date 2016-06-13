---
title: Debugger
---

# Debugger
_namespace: [Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.Debugging](N-Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.Debugging.html)_

这个对象是运行于Shoal内部的，用作为调试的客户端的。当IDE启动的时候，会打开调试服务，接着通过命令行启动Shoal程序，将端口号传递给本对象，二者之间通过Tcp协议进行通信

### Methods

#### #ctor
```csharp
Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.Debugging.Debugger.#ctor(Microsoft.VisualBasic.Scripting.ShoalShell.Configuration.Config,System.Int32)
```


|Parameter Name|Remarks|
|--------------|-------|
|Config|-|
|DebugListenerPort|IDE调试监听器@"T:Microsoft.VisualBasic.Scripting.ShoalShell.Runtime.Debugging.DebuggerListener"的监听端口号|




### Properties

#### __tcpClient
主动向IDE发送调试消息
#### ReadListenerServices
监听来自于IDE的控制命令

