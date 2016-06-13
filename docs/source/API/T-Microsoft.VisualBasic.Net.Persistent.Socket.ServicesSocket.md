---
title: ServicesSocket
---

# ServicesSocket
_namespace: [Microsoft.VisualBasic.Net.Persistent.Socket](N-Microsoft.VisualBasic.Net.Persistent.Socket.html)_



### Methods

#### #ctor
```csharp
Microsoft.VisualBasic.Net.Persistent.Socket.ServicesSocket.#ctor(System.Int32,Microsoft.VisualBasic.Net.Abstract.ExceptionHandler)
```
消息处理的方法接口： Public Delegate Function DataResponseHandler(str As String, RemotePort As Integer) As String

|Parameter Name|Remarks|
|--------------|-------|
|LocalPort|监听的本地端口号，假若需要进行端口映射的话，则可以在@"M:Microsoft.VisualBasic.Net.Persistent.Socket.ServicesSocket.Run"方法之中设置映射的端口号|


#### __initSocket
```csharp
Microsoft.VisualBasic.Net.Persistent.Socket.ServicesSocket.__initSocket(System.Net.IPEndPoint)
```
Bind the socket to the local endpoint and listen for incoming connections.

|Parameter Name|Remarks|
|--------------|-------|
|localEndPoint|-|


#### __initSocketThread
```csharp
Microsoft.VisualBasic.Net.Persistent.Socket.ServicesSocket.__initSocketThread(System.Net.Sockets.Socket)
```
Create the state object for the async receive.

|Parameter Name|Remarks|
|--------------|-------|
|handler|-|


#### AcceptCallback
```csharp
Microsoft.VisualBasic.Net.Persistent.Socket.ServicesSocket.AcceptCallback(System.IAsyncResult)
```
Get the socket that handles the client request.

|Parameter Name|Remarks|
|--------------|-------|
|ar|-|


#### Dispose
```csharp
Microsoft.VisualBasic.Net.Persistent.Socket.ServicesSocket.Dispose
```
Stop the server socket listening threads.(终止服务器Socket监听线程)

#### Run
```csharp
Microsoft.VisualBasic.Net.Persistent.Socket.ServicesSocket.Run(System.Net.IPEndPoint)
```
This server waits for a connection and then uses asychronous operations to
 accept the connection, get data from the connected client,
 echo that data back to the connected client.
 It then disconnects from the client and waits for another client.(请注意，当服务器的代码运行到这里之后，代码将被阻塞在这里)



### Properties

#### _LocalPort
Socket对象监听的端口号
#### disposedValue
退出监听线程所需要的
#### LocalPort
The server services listening on this local port.(当前的这个服务器对象实例所监听的本地端口号)

