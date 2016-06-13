---
title: IGraphicsContextInternal
---

# IGraphicsContextInternal
_namespace: [OpenTK.Graphics](N-OpenTK.Graphics.html)_

Provides methods to create new GraphicsContexts. Should only be used for extending OpenTK.

### Methods

#### GetAddress
```csharp
OpenTK.Graphics.IGraphicsContextInternal.GetAddress(System.IntPtr)
```
Retrieves the implementation-defined address of an OpenGL function.

|Parameter Name|Remarks|
|--------------|-------|
|function|
            A pointer to a null-terminated buffer
            containing the name of the OpenGL function.
            |

_returns: 
            A pointer to the specified function or an invalid pointer if the function is not
            available in the current OpenGL context. The return value and calling convention
            depends on the underlying platform.
            _
> @"M:OpenTK.Graphics.IGraphicsContextInternal.GetAddress(System.String)"

#### LoadAll
```csharp
OpenTK.Graphics.IGraphicsContextInternal.LoadAll
```
Loads all OpenGL entry points. Requires this instance to be current on the calling thread.



### Properties

#### Context
Gets a handle to the OpenGL rendering context.
#### Implementation
Gets the internal implementation of the current instance.

