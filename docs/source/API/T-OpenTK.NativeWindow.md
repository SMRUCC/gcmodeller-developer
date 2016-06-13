---
title: NativeWindow
---

# NativeWindow
_namespace: [OpenTK](N-OpenTK.html)_

Instances of this class implement the @"T:OpenTK.INativeWindow" interface on the current platform.

### Methods

#### #ctor
```csharp
OpenTK.NativeWindow.#ctor(System.Int32,System.Int32,System.Int32,System.Int32,System.String,OpenTK.GameWindowFlags,OpenTK.Graphics.GraphicsMode,OpenTK.DisplayDevice)
```
Constructs a new NativeWindow with the specified attributes.

|Parameter Name|Remarks|
|--------------|-------|
|x|Horizontal screen space coordinate of the NativeWindow's origin.|
|y|Vertical screen space coordinate of the NativeWindow's origin.|
|width|The width of the NativeWindow in pixels.|
|height|The height of the NativeWindow in pixels.|
|title|The title of the NativeWindow.|
|options|GameWindow options specifying window appearance and behavior.|
|mode|The OpenTK.Graphics.GraphicsMode of the NativeWindow.|
|device|The OpenTK.Graphics.DisplayDevice to construct the NativeWindow in.|


#### Close
```csharp
OpenTK.NativeWindow.Close
```
Closes the NativeWindow.

#### Dispose
```csharp
OpenTK.NativeWindow.Dispose
```
Releases all non-managed resources belonging to this NativeWindow.

#### EnsureUndisposed
```csharp
OpenTK.NativeWindow.EnsureUndisposed
```
Ensures that this NativeWindow has not been disposed.

#### OnClosed
```csharp
OpenTK.NativeWindow.OnClosed(System.EventArgs)
```
Called when the NativeWindow has closed.

|Parameter Name|Remarks|
|--------------|-------|
|e|Not used.|


#### OnClosing
```csharp
OpenTK.NativeWindow.OnClosing(System.ComponentModel.CancelEventArgs)
```
Called when the NativeWindow is about to close.

|Parameter Name|Remarks|
|--------------|-------|
|e|
            The @"T:System.ComponentModel.CancelEventArgs" for this event.
            Set e.Cancel to true in order to stop the NativeWindow from closing.|


#### OnDisposed
```csharp
OpenTK.NativeWindow.OnDisposed(System.EventArgs)
```
Called when the NativeWindow is disposed.

|Parameter Name|Remarks|
|--------------|-------|
|e|Not used.|


#### OnFocusedChanged
```csharp
OpenTK.NativeWindow.OnFocusedChanged(System.EventArgs)
```
Called when the @"P:OpenTK.INativeWindow.Focused" property of the NativeWindow has changed.

|Parameter Name|Remarks|
|--------------|-------|
|e|Not used.|


#### OnIconChanged
```csharp
OpenTK.NativeWindow.OnIconChanged(System.EventArgs)
```
Called when the @"P:OpenTK.INativeWindow.Icon" property of the NativeWindow has changed.

|Parameter Name|Remarks|
|--------------|-------|
|e|Not used.|


#### OnKeyDown
```csharp
OpenTK.NativeWindow.OnKeyDown(OpenTK.Input.KeyboardKeyEventArgs)
```
Occurs whenever a keybord key is pressed.

#### OnKeyPress
```csharp
OpenTK.NativeWindow.OnKeyPress(OpenTK.KeyPressEventArgs)
```
Called when a character is typed.

|Parameter Name|Remarks|
|--------------|-------|
|e|The @"T:OpenTK.KeyPressEventArgs" for this event.|


#### OnKeyUp
```csharp
OpenTK.NativeWindow.OnKeyUp(OpenTK.Input.KeyboardKeyEventArgs)
```
Called when a keybord key is released.

|Parameter Name|Remarks|
|--------------|-------|
|e|The @"T:OpenTK.Input.KeyboardKeyEventArgs" for this event.|


#### OnMouseDown
```csharp
OpenTK.NativeWindow.OnMouseDown(OpenTK.Input.MouseButtonEventArgs)
```
Raises the @"E:OpenTK.NativeWindow.MouseDown" event.

|Parameter Name|Remarks|
|--------------|-------|
|e|
            A @"T:OpenTK.Input.MouseButtonEventArgs" instance carrying mouse state information.
            The information carried by this instance is only valid within this method body.
            |


#### OnMouseEnter
```csharp
OpenTK.NativeWindow.OnMouseEnter(System.EventArgs)
```
Called whenever the mouse cursor reenters the window @"P:OpenTK.NativeWindow.Bounds".

|Parameter Name|Remarks|
|--------------|-------|
|e|Not used.|


#### OnMouseLeave
```csharp
OpenTK.NativeWindow.OnMouseLeave(System.EventArgs)
```
Called whenever the mouse cursor leaves the window @"P:OpenTK.NativeWindow.Bounds".

|Parameter Name|Remarks|
|--------------|-------|
|e|Not used.|


#### OnMouseMove
```csharp
OpenTK.NativeWindow.OnMouseMove(OpenTK.Input.MouseMoveEventArgs)
```
Raises the @"E:OpenTK.NativeWindow.MouseMove" event.

|Parameter Name|Remarks|
|--------------|-------|
|e|
            A @"T:OpenTK.Input.MouseMoveEventArgs" instance carrying mouse state information.
            The information carried by this instance is only valid within this method body.
            |


#### OnMouseUp
```csharp
OpenTK.NativeWindow.OnMouseUp(OpenTK.Input.MouseButtonEventArgs)
```
Raises the @"E:OpenTK.NativeWindow.MouseUp" event.

|Parameter Name|Remarks|
|--------------|-------|
|e|
            A @"T:OpenTK.Input.MouseButtonEventArgs" instance carrying mouse state information.
            The information carried by this instance is only valid within this method body.
            |


#### OnMouseWheel
```csharp
OpenTK.NativeWindow.OnMouseWheel(OpenTK.Input.MouseWheelEventArgs)
```
Raises the @"E:OpenTK.NativeWindow.MouseWheel" event.

|Parameter Name|Remarks|
|--------------|-------|
|e|
            A @"T:OpenTK.Input.MouseWheelEventArgs" instance carrying mouse state information.
            The information carried by this instance is only valid within this method body.
            |


#### OnMove
```csharp
OpenTK.NativeWindow.OnMove(System.EventArgs)
```
Called when the NativeWindow is moved.

|Parameter Name|Remarks|
|--------------|-------|
|e|Not used.|


#### OnResize
```csharp
OpenTK.NativeWindow.OnResize(System.EventArgs)
```
Called when the NativeWindow is resized.

|Parameter Name|Remarks|
|--------------|-------|
|e|Not used.|


#### OnTitleChanged
```csharp
OpenTK.NativeWindow.OnTitleChanged(System.EventArgs)
```
Called when the @"P:OpenTK.INativeWindow.Title" property of the NativeWindow has changed.

|Parameter Name|Remarks|
|--------------|-------|
|e|Not used.|


#### OnVisibleChanged
```csharp
OpenTK.NativeWindow.OnVisibleChanged(System.EventArgs)
```
Called when the @"P:OpenTK.INativeWindow.Visible" property of the NativeWindow has changed.

|Parameter Name|Remarks|
|--------------|-------|
|e|Not used.|


#### OnWindowBorderChanged
```csharp
OpenTK.NativeWindow.OnWindowBorderChanged(System.EventArgs)
```
Called when the WindowBorder of this NativeWindow has changed.

|Parameter Name|Remarks|
|--------------|-------|
|e|Not used.|


#### OnWindowStateChanged
```csharp
OpenTK.NativeWindow.OnWindowStateChanged(System.EventArgs)
```
Called when the WindowState of this NativeWindow has changed.

|Parameter Name|Remarks|
|--------------|-------|
|e|Not used.|


#### PointToClient
```csharp
OpenTK.NativeWindow.PointToClient(System.Drawing.Point)
```
Transforms the specified point from screen to client coordinates.

|Parameter Name|Remarks|
|--------------|-------|
|point|
            A @"T:System.Drawing.Point" to transform.
            |

_returns: 
            The point transformed to client coordinates.
            _

#### PointToScreen
```csharp
OpenTK.NativeWindow.PointToScreen(System.Drawing.Point)
```
Transforms the specified point from client to screen coordinates.

|Parameter Name|Remarks|
|--------------|-------|
|point|
            A @"T:System.Drawing.Point" to transform.
            |

_returns: 
            The point transformed to screen coordinates.
            _

#### ProcessEvents
```csharp
OpenTK.NativeWindow.ProcessEvents(System.Boolean)
```
Processes operating system events until the NativeWindow becomes idle.

|Parameter Name|Remarks|
|--------------|-------|
|retainEvents|If true, the state of underlying system event propagation will be preserved, otherwise event propagation will be enabled if it has not been already.|




### Properties

#### Bounds
Gets or sets a @"T:System.Drawing.Rectangle" structure
 that specifies the external bounds of this window, in screen coordinates.
 The coordinates are specified in device-independent points and
 include the title bar, borders and drawing area of the window.
#### ClientRectangle
Gets or sets a @"T:System.Drawing.Rectangle" structure
 that defines the bounds of the OpenGL surface, in window coordinates.
 The coordinates are specified in device-dependent pixels.
#### ClientSize
Gets or sets a @"T:System.Drawing.Size" structure
 that defines the size of the OpenGL surface in window coordinates.
 The coordinates are specified in device-dependent pixels.
#### Cursor
Gets or sets the @"T:OpenTK.MouseCursor" for this window.
#### CursorVisible
Gets or sets a value indicating whether the mouse cursor is visible.
#### Exists
Gets a value indicating whether a render window exists.
#### Focused
Gets a System.Boolean that indicates whether this NativeWindow has input focus.
#### Height
Gets or sets the height of the OpenGL surface in window coordinates.
 The coordinates are specified in device-dependent pixels.
#### Icon
Gets or sets the System.Drawing.Icon for this GameWindow.
#### InputDriver
This property is deprecated.
#### IsDisposed
Gets or sets a @"T:System.Boolean", which indicates whether
 this instance has been disposed.
#### Location
Gets or sets a @"T:System.Drawing.Point" structure that contains the location of this window on the desktop.
#### Size
Gets or sets a @"T:System.Drawing.Size" structure that contains the external size of this window.
#### Title
Gets or sets the NativeWindow title.
#### Visible
Gets or sets a System.Boolean that indicates whether this NativeWindow is visible.
#### Width
Gets or sets the height of the OpenGL surface in window coordinates.
 The coordinates are specified in device-dependent pixels.
#### WindowBorder
Gets or states the border of the NativeWindow.
#### WindowInfo
Gets the @"T:OpenTK.Platform.IWindowInfo" of this window.
#### WindowState
Gets or states the state of the NativeWindow.
#### X
Gets or sets the horizontal location of this window in screen coordinates.
 The coordinates are specified in device-independent points.
#### Y
Gets or sets the vertical location of this window in screen coordinates.
 The coordinates are specified in device-independent points.

