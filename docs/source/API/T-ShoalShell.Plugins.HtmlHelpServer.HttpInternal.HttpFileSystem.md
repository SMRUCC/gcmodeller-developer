---
title: HttpFileSystem
---

# HttpFileSystem
_namespace: [ShoalShell.Plugins.HtmlHelpServer.HttpInternal](N-ShoalShell.Plugins.HtmlHelpServer.HttpInternal.html)_

不兼容IE和Edge浏览器???为什么会这样子？

### Methods

#### #ctor
```csharp
ShoalShell.Plugins.HtmlHelpServer.HttpInternal.HttpFileSystem.#ctor(System.Int32,System.String,System.Boolean)
```


|Parameter Name|Remarks|
|--------------|-------|
|port|-|
|root|-|
|nullExists|-|


#### __getMapDIR
```csharp
ShoalShell.Plugins.HtmlHelpServer.HttpInternal.HttpFileSystem.__getMapDIR(System.String@)
```
长

|Parameter Name|Remarks|
|--------------|-------|
|res|-|


#### __handleREST
```csharp
ShoalShell.Plugins.HtmlHelpServer.HttpInternal.HttpFileSystem.__handleREST(ShoalShell.Plugins.HtmlHelpServer.HttpInternal.HttpProcessor)
```
handle the GET/POST request at here

|Parameter Name|Remarks|
|--------------|-------|
|p|-|


#### __transferData
```csharp
ShoalShell.Plugins.HtmlHelpServer.HttpInternal.HttpFileSystem.__transferData(ShoalShell.Plugins.HtmlHelpServer.HttpInternal.HttpProcessor,System.String,System.Byte[])
```
为什么不需要添加content-type说明？？

|Parameter Name|Remarks|
|--------------|-------|
|p|-|
|ext|-|
|buf|-|


#### handleGETRequest
```csharp
ShoalShell.Plugins.HtmlHelpServer.HttpInternal.HttpFileSystem.handleGETRequest(ShoalShell.Plugins.HtmlHelpServer.HttpInternal.HttpProcessor)
```
为什么不需要添加@"M:ShoalShell.Plugins.HtmlHelpServer.HttpInternal.HttpProcessor.writeSuccess(System.String)"方法？？？

|Parameter Name|Remarks|
|--------------|-------|
|p|-|




### Properties

#### _virtualMappings
{url, mapping path}

