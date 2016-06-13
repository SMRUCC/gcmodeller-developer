---
title: X11WindowInfo
---

# X11WindowInfo
_namespace: [OpenTK.Platform.X11](N-OpenTK.Platform.X11.html)_

Describes an X11 window.

### Methods

#### #ctor
```csharp
OpenTK.Platform.X11.X11WindowInfo.#ctor(System.IntPtr,OpenTK.Platform.X11.X11WindowInfo)
```
Constructs a new X11WindowInfo class from the specified window handle and parent.

|Parameter Name|Remarks|
|--------------|-------|
|handle|The handle of the window.|
|parent|The parent of the window.|


#### Dispose
```csharp
OpenTK.Platform.X11.X11WindowInfo.Dispose
```
Disposes of this X11WindowInfo instance.

#### Equals
```csharp
OpenTK.Platform.X11.X11WindowInfo.Equals(System.Object)
```
Checks if this and obj reference the same win32 window.

|Parameter Name|Remarks|
|--------------|-------|
|obj|The object to check against.|

_returns: True if this and obj reference the same win32 window; false otherwise._

#### GetHashCode
```csharp
OpenTK.Platform.X11.X11WindowInfo.GetHashCode
```
Returns the hash code for this instance.
_returns: A hash code for the current X11WindowInfo._

#### ToString
```csharp
OpenTK.Platform.X11.X11WindowInfo.ToString
```
Returns a System.String that represents the current window.
_returns: A System.String that represents the current window._



### Properties

#### Display
Gets or sets the connection to the X11 display.
#### EventMask
Gets or sets the X11 EventMask.
#### Handle
Gets or sets the handle of the window.
#### Parent
Gets or sets the parent of the window.
#### RootWindow
Gets or sets the X11 root window.
#### Screen
Gets or sets the X11 screen.
#### VisualInfo
Gets or sets the X11 VisualInfo.

