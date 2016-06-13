---
title: IGameWindow
---

# IGameWindow
_namespace: [OpenTK.Platform](N-OpenTK.Platform.html)_

Defines the interface for a GameWindow.

### Methods

#### MakeCurrent
```csharp
OpenTK.Platform.IGameWindow.MakeCurrent
```
Makes the GraphicsContext current on the calling thread.

#### Run
```csharp
OpenTK.Platform.IGameWindow.Run(System.Double)
```
Enters the game loop of the GameWindow using the specified update rate.

#### SwapBuffers
```csharp
OpenTK.Platform.IGameWindow.SwapBuffers
```
Swaps the front and back buffers of the current GraphicsContext, presenting the rendered scene to the user.




