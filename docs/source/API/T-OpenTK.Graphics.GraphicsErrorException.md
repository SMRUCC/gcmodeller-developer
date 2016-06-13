---
title: GraphicsErrorException
---

# GraphicsErrorException
_namespace: [OpenTK.Graphics](N-OpenTK.Graphics.html)_

Identifies a specific OpenGL or OpenGL|ES error. Such exceptions are only thrown
 when OpenGL or OpenGL|ES automatic error checking is enabled -
 @"P:OpenTK.Graphics.GraphicsContext.ErrorChecking" property.
 Important: Do *not* catch this exception. Rather, fix the underlying issue that caused the error.

### Methods

#### #ctor
```csharp
OpenTK.Graphics.GraphicsErrorException.#ctor(System.String)
```
Constructs a new GraphicsErrorException instance with the specified error message.

|Parameter Name|Remarks|
|--------------|-------|
|message|-|





