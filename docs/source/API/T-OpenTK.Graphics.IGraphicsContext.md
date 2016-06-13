---
title: IGraphicsContext
---

# IGraphicsContext
_namespace: [OpenTK.Graphics](N-OpenTK.Graphics.html)_

Provides methods for creating and interacting with an OpenGL context.

### Methods

#### LoadAll
```csharp
OpenTK.Graphics.IGraphicsContext.LoadAll
```
Loads all OpenGL entry points. Requires this instance to be current on the calling thread.

#### MakeCurrent
```csharp
OpenTK.Graphics.IGraphicsContext.MakeCurrent(OpenTK.Platform.IWindowInfo)
```
Makes the GraphicsContext current in the calling thread.

|Parameter Name|Remarks|
|--------------|-------|
|window|An OpenTK.Platform.IWindowInfo structure that points to a valid window.|

> OpenGL commands in one thread, affect the GraphicsContext which is current in that thread.It is an error to issue an OpenGL command in a thread without a current GraphicsContext.

#### SwapBuffers
```csharp
OpenTK.Graphics.IGraphicsContext.SwapBuffers
```
Swaps buffers, presenting the rendered scene to the user.

#### Update
```csharp
OpenTK.Graphics.IGraphicsContext.Update(OpenTK.Platform.IWindowInfo)
```
Updates the graphics context. This must be called when the region the graphics context
 is drawn to is resized.

|Parameter Name|Remarks|
|--------------|-------|
|window|-|




### Properties

#### ErrorChecking
Gets or sets a System.Boolean, indicating whether automatic error checking should be performed.
#### GraphicsMode
Gets the GraphicsMode of this instance.
#### IsCurrent
Gets a @"T:System.Boolean" indicating whether this instance is current in the calling thread.
#### IsDisposed
Gets a @"T:System.Boolean" indicating whether this instance has been disposed.
 It is an error to access any instance methods if this property returns true.
#### SwapInterval
Gets or sets a positive integer in the range [1, n), indicating the number of
 @"T:OpenTK.DisplayDevice" refreshes between consecutive
 @"M:OpenTK.Graphics.IGraphicsContext.SwapBuffers" calls. The maximum value for n is
 implementation-dependent. The default value is 1.
 This value will only affect instances where @"P:OpenTK.Graphics.IGraphicsContext.VSync" is enabled.
 Invalid values will be clamped to the valid range.
#### VSync
Gets or sets a value indicating whether VSync is enabled. When VSync is
 enabled, @"M:OpenTK.Graphics.IGraphicsContext.SwapBuffers" calls will be synced to the refresh
 rate of the @"T:OpenTK.DisplayDevice" that contains improving visual
 quality and reducing CPU usage. However, systems that cannot maintain
 the requested rendering rate will suffer from large jumps in performance.
 This can be counteracted by increasing the @"P:OpenTK.Graphics.IGraphicsContext.SwapInterval"
 value.

