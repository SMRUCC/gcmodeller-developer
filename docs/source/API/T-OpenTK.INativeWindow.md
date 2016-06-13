---
title: INativeWindow
---

# INativeWindow
_namespace: [OpenTK](N-OpenTK.html)_

Defines the interface for a native window.

### Methods

#### Close
```csharp
OpenTK.INativeWindow.Close
```
Closes this window.

#### PointToClient
```csharp
OpenTK.INativeWindow.PointToClient(System.Drawing.Point)
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
OpenTK.INativeWindow.PointToScreen(System.Drawing.Point)
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
OpenTK.INativeWindow.ProcessEvents
```
Processes pending window events.



### Properties

#### Bounds
Gets or sets a @"T:System.Drawing.Rectangle" structure the contains the external bounds of this window, in screen coordinates.
 External bounds include the title bar, borders and drawing area of the window.
#### ClientRectangle
Gets or sets a @"T:System.Drawing.Rectangle" structure that contains the internal bounds of this window, in client coordinates.
 The internal bounds include the drawing area of the window, but exclude the titlebar and window borders.
#### ClientSize
Gets or sets a @"T:System.Drawing.Size" structure that contains the internal size this window.
#### Cursor
Gets or sets the @"T:OpenTK.MouseCursor" for this window.
#### CursorVisible
Gets or sets a value, indicating whether the mouse cursor is visible.
#### Exists
Gets a System.Boolean that indicates whether the window has been created and has not been destroyed.
#### Focused
Gets a System.Boolean that indicates whether this window has input focus.
#### Height
Gets or sets the external height of this window.
#### Icon
Gets or sets the @"T:System.Drawing.Icon" of the window.
#### InputDriver
This property is deprecated and should not be used.
#### Location
Gets or sets a @"T:System.Drawing.Point" structure that contains the location of this window on the desktop.
#### Size
Gets or sets a @"T:System.Drawing.Size" structure that contains the external size of this window.
#### Title
Gets or sets the title of the window.
#### Visible
Gets or sets a System.Boolean that indicates whether the window is visible.
#### Width
Gets or sets the external width of this window.
#### WindowBorder
Gets or sets the @"T:OpenTK.WindowBorder" for this window.
#### WindowInfo
Gets the @"T:OpenTK.Platform.IWindowInfo" for this window.
#### WindowState
Gets or sets the @"T:OpenTK.WindowState" for this window.
#### X
Gets or sets the horizontal location of this window on the desktop.
#### Y
Gets or sets the vertical location of this window on the desktop.

