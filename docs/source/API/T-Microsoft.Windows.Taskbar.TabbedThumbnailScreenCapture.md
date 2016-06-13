---
title: TabbedThumbnailScreenCapture
---

# TabbedThumbnailScreenCapture
_namespace: [Microsoft.Windows.Taskbar](N-Microsoft.Windows.Taskbar.html)_

Helper class to capture a control or window as System.Drawing.Bitmap

### Methods

#### GrabWindowBitmap
```csharp
Microsoft.Windows.Taskbar.TabbedThumbnailScreenCapture.GrabWindowBitmap(System.Windows.UIElement,System.Int32,System.Int32,System.Int32,System.Int32)
```
Grabs a snapshot of a WPF UIElement and returns the image as Bitmap.

|Parameter Name|Remarks|
|--------------|-------|
|element|Represents the element to take the snapshot from.|
|dpiX|Represents the X DPI value used to capture this snapshot.|
|dpiY|Represents the Y DPI value used to capture this snapshot.|
|width|The requested bitmap width.|
|height|The requested bitmap height.|

_returns: Returns the bitmap (PNG format)._

#### ResizeImageWithAspect
```csharp
Microsoft.Windows.Taskbar.TabbedThumbnailScreenCapture.ResizeImageWithAspect(System.IntPtr,System.Int32,System.Int32,System.Boolean)
```
Resizes the given bitmap while maintaining the aspect ratio.

|Parameter Name|Remarks|
|--------------|-------|
|originalHBitmap|Original/source bitmap|
|newWidth|Maximum width for the new image|
|maxHeight|Maximum height for the new image|
|resizeIfWider|If true and requested image is wider than the source, the new image is resized accordingly.|





