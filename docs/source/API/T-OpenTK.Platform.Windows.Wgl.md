---
title: Wgl
---

# Wgl
_namespace: [OpenTK.Platform.Windows](N-OpenTK.Platform.Windows.html)_



### Methods

#### SupportsExtension
```csharp
OpenTK.Platform.Windows.Wgl.SupportsExtension(System.IntPtr,System.String)
```
Checks if a Wgl extension is supported by the given context.

|Parameter Name|Remarks|
|--------------|-------|
|dc|The device context.|
|name|The extension to check.|

_returns: True if the extension is supported by the given context, false otherwise_

#### SupportsFunction
```csharp
OpenTK.Platform.Windows.Wgl.SupportsFunction(System.String)
```
Checks whether an extension function is supported.
 Do not use with core WGL functions, as this function
 will incorrectly return false.

|Parameter Name|Remarks|
|--------------|-------|
|name|The extension function to check (e.g. "wglGetExtensionsStringARB"|

_returns: True if the extension function is supported; otherwise, false._




