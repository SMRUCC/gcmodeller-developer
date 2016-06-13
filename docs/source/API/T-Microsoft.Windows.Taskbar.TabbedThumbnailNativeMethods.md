---
title: TabbedThumbnailNativeMethods
---

# TabbedThumbnailNativeMethods
_namespace: [Microsoft.Windows.Taskbar](N-Microsoft.Windows.Taskbar.html)_



### Methods

#### EnableCustomWindowPreview
```csharp
Microsoft.Windows.Taskbar.TabbedThumbnailNativeMethods.EnableCustomWindowPreview(System.IntPtr,System.Boolean)
```
Call this method to either enable custom previews on the taskbar (second argument as true)
 or to disable (second argument as false). If called with True, the method will call DwmSetWindowAttribute
 for the specific window handle and let DWM know that we will be providing a custom bitmap for the thumbnail
 as well as Aero peek.

|Parameter Name|Remarks|
|--------------|-------|
|hwnd|-|
|enable|-|


#### SetIconicThumbnail
```csharp
Microsoft.Windows.Taskbar.TabbedThumbnailNativeMethods.SetIconicThumbnail(System.IntPtr,System.IntPtr)
```
Sets the specified iconic thumbnail for the specified window.
 This is typically done in response to a DWM message.

|Parameter Name|Remarks|
|--------------|-------|
|hwnd|The window handle.|
|hBitmap|The thumbnail bitmap.|


#### SetPeekBitmap
```csharp
Microsoft.Windows.Taskbar.TabbedThumbnailNativeMethods.SetPeekBitmap(System.IntPtr,System.IntPtr,System.Drawing.Point,System.Boolean)
```
Sets the specified peek (live preview) bitmap for the specified
 window. This is typically done in response to a DWM message.

|Parameter Name|Remarks|
|--------------|-------|
|hwnd|The window handle.|
|bitmap|The thumbnail bitmap.|
|offset|The client area offset at which to display
 the specified bitmap.  The rest of the parent window will be
 displayed as "remembered" by the DWM.|
|displayFrame__1|Whether to display a standard window
 frame around the bitmap.|





