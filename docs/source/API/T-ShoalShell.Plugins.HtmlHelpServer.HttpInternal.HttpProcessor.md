---
title: HttpProcessor
---

# HttpProcessor
_namespace: [ShoalShell.Plugins.HtmlHelpServer.HttpInternal](N-ShoalShell.Plugins.HtmlHelpServer.HttpInternal.html)_



### Methods

#### HandlePOSTRequest
```csharp
ShoalShell.Plugins.HtmlHelpServer.HttpInternal.HttpProcessor.HandlePOSTRequest
```
This post data processing just reads everything into a memory stream.
 this is fine for smallish things, but for large stuff we should really
 hand an input stream to the request processor. However, the input stream 
 we hand him needs to let him see the "end of the stream" at this content 
 length, because otherwise he won't know when he's seen it all!

#### writeFailure
```csharp
ShoalShell.Plugins.HtmlHelpServer.HttpInternal.HttpProcessor.writeFailure(System.String)
```
404



### Properties

#### _404Page
You can customize your 404 error page at here.
#### http_url
File location or GET/POST request arguments
#### IsWWWRoot
????url???HTTP???
#### MAX_POST_SIZE
10MB

