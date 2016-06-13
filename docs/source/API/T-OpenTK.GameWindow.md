---
title: GameWindow
---

# GameWindow
_namespace: [OpenTK](N-OpenTK.html)_

The GameWindow class contains cross-platform methods to create and render on an OpenGL
 window, handle input and load resources.

### Methods

#### #ctor
```csharp
OpenTK.GameWindow.#ctor(System.Int32,System.Int32,OpenTK.Graphics.GraphicsMode,System.String,OpenTK.GameWindowFlags,OpenTK.DisplayDevice,System.Int32,System.Int32,OpenTK.Graphics.GraphicsContextFlags,OpenTK.Graphics.IGraphicsContext)
```
Constructs a new GameWindow with the specified attributes.

|Parameter Name|Remarks|
|--------------|-------|
|width|The width of the GameWindow in pixels.|
|height|The height of the GameWindow in pixels.|
|mode|The OpenTK.Graphics.GraphicsMode of the GameWindow.|
|title|The title of the GameWindow.|
|options|GameWindow options regarding window appearance and behavior.|
|device|The OpenTK.Graphics.DisplayDevice to construct the GameWindow in.|
|major|The major version for the OpenGL GraphicsContext.|
|minor|The minor version for the OpenGL GraphicsContext.|
|flags|The GraphicsContextFlags version for the OpenGL GraphicsContext.|
|sharedContext|An IGraphicsContext to share resources with.|


#### Dispose
```csharp
OpenTK.GameWindow.Dispose(System.Boolean)
```
Override to add custom cleanup logic.

|Parameter Name|Remarks|
|--------------|-------|
|manual|True, if this method was called by the application; false if this was called by the finalizer thread.|


#### Exit
```csharp
OpenTK.GameWindow.Exit
```
Closes the GameWindow. Equivalent to @"M:OpenTK.NativeWindow.Close" method.
> Override if you are not using @"M:OpenTK.GameWindow.Run".If you override this method, place a call to base.Exit(), to ensure proper OpenTK shutdown.

#### MakeCurrent
```csharp
OpenTK.GameWindow.MakeCurrent
```
Makes the GraphicsContext current on the calling thread.

#### OnClosing
```csharp
OpenTK.GameWindow.OnClosing(System.ComponentModel.CancelEventArgs)
```
Called when the NativeWindow is about to close.

|Parameter Name|Remarks|
|--------------|-------|
|e|
            The @"T:System.ComponentModel.CancelEventArgs" for this event.
            Set e.Cancel to true in order to stop the GameWindow from closing.|


#### OnLoad
```csharp
OpenTK.GameWindow.OnLoad(System.EventArgs)
```
Called after an OpenGL context has been established, but before entering the main loop.

|Parameter Name|Remarks|
|--------------|-------|
|e|Not used.|


#### OnRenderFrame
```csharp
OpenTK.GameWindow.OnRenderFrame(OpenTK.FrameEventArgs)
```
Called when the frame is rendered.

|Parameter Name|Remarks|
|--------------|-------|
|e|Contains information necessary for frame rendering.|

> 
>             Subscribe to the @"E:OpenTK.GameWindow.RenderFrame" event instead of overriding this method.
>             

#### OnResize
```csharp
OpenTK.GameWindow.OnResize(System.EventArgs)
```
Called when this window is resized.

|Parameter Name|Remarks|
|--------------|-------|
|e|Not used.|

> 
>             You will typically wish to update your viewport whenever
>             the window is resized. See the
>             @"M:OpenTK.Graphics.OpenGL.GL.Viewport(System.Int32,System.Int32,System.Int32,System.Int32)" method.
>             

#### OnUnload
```csharp
OpenTK.GameWindow.OnUnload(System.EventArgs)
```
Called after GameWindow.Exit was called, but before destroying the OpenGL context.

|Parameter Name|Remarks|
|--------------|-------|
|e|Not used.|


#### OnUpdateFrame
```csharp
OpenTK.GameWindow.OnUpdateFrame(OpenTK.FrameEventArgs)
```
Called when the frame is updated.

|Parameter Name|Remarks|
|--------------|-------|
|e|Contains information necessary for frame updating.|

> 
>             Subscribe to the @"E:OpenTK.GameWindow.UpdateFrame" event instead of overriding this method.
>             

#### OnWindowInfoChanged
```csharp
OpenTK.GameWindow.OnWindowInfoChanged(System.EventArgs)
```
Called when the WindowInfo for this GameWindow has changed.

|Parameter Name|Remarks|
|--------------|-------|
|e|Not used.|


#### Run
```csharp
OpenTK.GameWindow.Run(System.Double,System.Double)
```
Enters the game loop of the GameWindow updating and rendering at the specified frequency.

|Parameter Name|Remarks|
|--------------|-------|
|updates_per_second|The frequency of UpdateFrame events.|
|frames_per_second|The frequency of RenderFrame events.|

> 
>             When overriding the default game loop you should call ProcessEvents()
>             to ensure that your GameWindow responds to operating system events.
>             
>             Once ProcessEvents() returns, it is time to call update and render the next frame.
>             

#### SwapBuffers
```csharp
OpenTK.GameWindow.SwapBuffers
```
Swaps the front and back buffer, presenting the rendered scene to the user.



### Properties

#### Context
Returns the opengl IGraphicsContext associated with the current GameWindow.
#### IsExiting
Gets a value indicating whether the shutdown sequence has been initiated
 for this window, by calling GameWindow.Exit() or hitting the 'close' button.
 If this property is true, it is no longer safe to use any OpenTK.Input or
 OpenTK.Graphics.OpenGL functions or properties.
#### Joysticks
Gets a readonly IList containing all available OpenTK.Input.JoystickDevices.
#### Keyboard
Gets the primary Keyboard device, or null if no Keyboard exists.
#### Mouse
Gets the primary Mouse device, or null if no Mouse exists.
#### RenderFrequency
Gets a double representing the actual frequency of RenderFrame events, in hertz (i.e. fps or frames per second).
#### RenderPeriod
Gets a double representing the period of RenderFrame events, in seconds.
#### RenderTime
Gets a double representing the time spent in the RenderFrame function, in seconds.
#### TargetRenderFrequency
Gets or sets a double representing the target render frequency, in hertz.
#### TargetRenderPeriod
Gets or sets a double representing the target render period, in seconds.
#### TargetUpdateFrequency
Gets or sets a double representing the target update frequency, in hertz.
#### TargetUpdatePeriod
Gets or sets a double representing the target update period, in seconds.
#### UpdateFrequency
Gets a double representing the frequency of UpdateFrame events, in hertz.
#### UpdatePeriod
Gets a double representing the period of UpdateFrame events, in seconds.
#### UpdateTime
Gets a double representing the time spent in the UpdateFrame function, in seconds.
#### VSync
Gets or sets the VSyncMode.
#### WindowState
Gets or states the state of the NativeWindow.

