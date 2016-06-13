---
title: GraphicsContext
---

# GraphicsContext
_namespace: [OpenTK.Graphics](N-OpenTK.Graphics.html)_

Represents and provides methods to manipulate an OpenGL render context.

### Methods

#### #ctor
```csharp
OpenTK.Graphics.GraphicsContext.#ctor(OpenTK.ContextHandle,OpenTK.Platform.IWindowInfo,OpenTK.Graphics.IGraphicsContext,System.Int32,System.Int32,OpenTK.Graphics.GraphicsContextFlags)
```
Constructs a new GraphicsContext from a pre-existing context created outside of OpenTK.

|Parameter Name|Remarks|
|--------------|-------|
|handle|The handle of the existing context. This must be a valid, unique handle that is not known to OpenTK.|
|window|This parameter is reserved.|
|shareContext|This parameter is reserved.|
|major|This parameter is reserved.|
|minor|This parameter is reserved.|
|flags|This parameter is reserved..|

> 
>             Different hardware supports different flags, major and minor versions. Invalid parameters will be silently ignored.
>             

#### Assert
```csharp
OpenTK.Graphics.GraphicsContext.Assert
```
Checks if a GraphicsContext exists in the calling thread and throws a GraphicsContextMissingException if it doesn't.

#### CreateDummyContext
```csharp
OpenTK.Graphics.GraphicsContext.CreateDummyContext(OpenTK.ContextHandle)
```
Creates a dummy GraphicsContext to allow OpenTK to work with contexts created by external libraries.

|Parameter Name|Remarks|
|--------------|-------|
|handle|The handle of a context.|

_returns: A new, dummy GraphicsContext instance._
> Instances created by this method will not be functional. Instance methods will have no effect.

#### Dispose
```csharp
OpenTK.Graphics.GraphicsContext.Dispose
```
Disposes of the GraphicsContext.

#### Equals
```csharp
OpenTK.Graphics.GraphicsContext.Equals(System.Object)
```
Compares two instances.

|Parameter Name|Remarks|
|--------------|-------|
|obj|The instance to compare to.|

_returns: True, if obj is equal to this instance; false otherwise._

#### Finalize
```csharp
OpenTK.Graphics.GraphicsContext.Finalize
```
Marks this context as deleted, but does not actually release unmanaged resources
 due to the threading requirements of OpenGL. Use @"M:OpenTK.Graphics.GraphicsContext.Dispose"
 instead.

#### GetHashCode
```csharp
OpenTK.Graphics.GraphicsContext.GetHashCode
```
Returns the hash code for this instance.
_returns: A System.Int32 with the hash code of this instance._

#### LoadAll
```csharp
OpenTK.Graphics.GraphicsContext.LoadAll
```
Loads all OpenGL entry points.

#### MakeCurrent
```csharp
OpenTK.Graphics.GraphicsContext.MakeCurrent(OpenTK.Platform.IWindowInfo)
```
Makes the GraphicsContext the current rendering target.

|Parameter Name|Remarks|
|--------------|-------|
|window|A valid @"T:OpenTK.Platform.IWindowInfo" structure.|

> 
>             You can use this method to bind the GraphicsContext to a different window than the one it was created from.
>             

#### OpenTK#Graphics#IGraphicsContextInternal#GetAddress
```csharp
OpenTK.Graphics.GraphicsContext.OpenTK#Graphics#IGraphicsContextInternal#GetAddress(System.IntPtr)
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

#### SwapBuffers
```csharp
OpenTK.Graphics.GraphicsContext.SwapBuffers
```
Swaps buffers on a context. This presents the rendered scene to the user.

#### ToString
```csharp
OpenTK.Graphics.GraphicsContext.ToString
```
Returns a @"T:System.String" representing this instance.
_returns: A @"T:System.String"  that contains a string representation of this instance._

#### Update
```csharp
OpenTK.Graphics.GraphicsContext.Update(OpenTK.Platform.IWindowInfo)
```
Updates the graphics context. This must be called when the render target
 is resized for proper behavior on Mac OS X.

|Parameter Name|Remarks|
|--------------|-------|
|window|-|




### Properties

#### CurrentContext
Gets the GraphicsContext that is current in the calling thread.
#### DirectRendering
Gets or sets a System.Boolean, indicating whether GraphicsContexts will perform direct rendering.
#### ErrorChecking
Gets or sets a System.Boolean, indicating whether automatic error checking should be performed.
 Influences the debug version of OpenTK.dll, only.
#### GraphicsMode
Gets the GraphicsMode of the context.
#### IsCurrent
Gets a @"T:System.Boolean" indicating whether this instance is current in the calling thread.
#### IsDisposed
Gets a @"T:System.Boolean" indicating whether this instance has been disposed.
 It is an error to access any instance methods if this property returns true.
#### OpenTK#Graphics#IGraphicsContextInternal#Context
Gets a handle to the OpenGL rendering context.
#### OpenTK#Graphics#IGraphicsContextInternal#Implementation
Gets the platform-specific implementation of this IGraphicsContext.
#### ShareContexts
Gets or sets a System.Boolean, indicating whether GraphicsContext resources are shared
#### SwapInterval
Gets or sets a positive integer in the range [1, n), indicating the number of
 @"T:OpenTK.DisplayDevice" refreshes between consecutive
 @"M:OpenTK.Graphics.GraphicsContext.SwapBuffers" calls. The maximum value for n is
 implementation-dependent. The default value is 1.
 This value will only affect instances where @"P:OpenTK.Graphics.GraphicsContext.VSync" is enabled.
 Invalid values will be clamped to the valid range.
#### VSync
[obsolete] Use SwapInterval property instead.
 Gets or sets a value indicating whether VSync is enabled. When VSync is
 enabled, @"M:OpenTK.Graphics.GraphicsContext.SwapBuffers" calls will be synced to the refresh
 rate of the @"T:OpenTK.DisplayDevice" that contains improving visual
 quality and reducing CPU usage. However, systems that cannot maintain
 the requested rendering rate will suffer from large jumps in performance.
 This can be counteracted by increasing the @"P:OpenTK.Graphics.GraphicsContext.SwapInterval"
 value.

