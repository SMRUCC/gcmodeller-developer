---
title: Mouse
---

# Mouse
_namespace: [OpenTK.Input](N-OpenTK.Input.html)_

Provides access to mouse devices. Note: this API is not implemented yet.

### Methods

#### GetCursorState
```csharp
OpenTK.Input.Mouse.GetCursorState
```
Retreves the @"T:OpenTK.Input.MouseState" for the mouse cursor.
 The X and Y coordinates are defined in absolute desktop points, with the origin
 placed at the top-left corner of @"P:OpenTK.DisplayDevice.Default".
 Pointer ballistics (acceleration) are applied. Resolution is limited to the
 resolution of the @"T:OpenTK.DisplayDevice" containing the cursor,
 typically between 96 and 120 DPI.
_returns: A @"T:OpenTK.Input.MouseState" structure representing the state of the mouse cursor._

#### GetState
```csharp
OpenTK.Input.Mouse.GetState(System.Int32)
```
Retrieves the @"T:OpenTK.Input.MouseState" for the specified mouse device.
 The X, Y and wheel values are defined in a hardware-specific coordinate system.
 Pointer ballistics (acceleration) are NOT applied. Resolution is hardware-specific,
 typically between 200 and 2000 DPI.
 Use @"M:OpenTK.Input.Mouse.GetState" to retrieve the combined state of all mouse devices.
 Use @"M:OpenTK.Input.Mouse.GetCursorState" to retrieve the absolute coordinates of the mouse cursor.
 Use @"E:OpenTK.INativeWindow.MouseMove" for event-based mouse input.

|Parameter Name|Remarks|
|--------------|-------|
|index|The index of the mouse device.|

_returns: A @"T:OpenTK.Input.MouseState" structure representing the state for the specified mouse device._

#### SetPosition
```csharp
OpenTK.Input.Mouse.SetPosition(System.Double,System.Double)
```
Moves the mouse cursor to the specified screen position.

|Parameter Name|Remarks|
|--------------|-------|
|x|
             A @"T:System.Double" that represents the absolute x position of the cursor in screen coordinates.
             |
|y|
             A @"T:System.Double" that represents the absolute y position of the cursor in screen coordinates.
             |





