---
title: TabbedThumbnail
---

# TabbedThumbnail
_namespace: [Microsoft.Windows.Taskbar](N-Microsoft.Windows.Taskbar.html)_

Represents a tabbed thumbnail on the taskbar for a given window or a control.

### Methods

#### #ctor
```csharp
Microsoft.Windows.Taskbar.TabbedThumbnail.#ctor(System.Windows.Window,System.Windows.UIElement,System.Windows.Vector)
```
Creates a new TabbedThumbnail with the given window handle of the parent and
 a WPF child Window. For WindowsFormHost control, use TabbedThumbnail(IntPtr, Control) overload and pass
 the WindowsFormHost.Child as the second parameter.

|Parameter Name|Remarks|
|--------------|-------|
|parentWindow|Parent window for the UIElement control. 
 This window has to be a top-level window and the handle cannot be null|
|windowsControl__1|WPF Control (UIElement) for which a tabbed thumbnail needs to be displayed|
|peekOffset__2|Offset point used for displaying the peek bitmap. This setting is
 recomended for hidden WPF controls as it is difficult to calculate their offset.|

> This method can also be called when using a WindowsFormHost control in a WPF application.
>   Call this method with the main WPF Window's handle, and windowsFormHost.Child control.

#### Dispose
```csharp
Microsoft.Windows.Taskbar.TabbedThumbnail.Dispose(System.Boolean)
```
Release the native objects.

|Parameter Name|Remarks|
|--------------|-------|
|disposing|-|


#### Finalize
```csharp
Microsoft.Windows.Taskbar.TabbedThumbnail.Finalize
```


#### InvalidatePreview
```csharp
Microsoft.Windows.Taskbar.TabbedThumbnail.InvalidatePreview
```
Invalidate any existing thumbnail preview. Calling this method
 will force DWM to request a new bitmap next time user previews the thumbnails
 or requests Aero peek preview.

#### OnTabbedThumbnailClosed
```csharp
Microsoft.Windows.Taskbar.TabbedThumbnail.OnTabbedThumbnailClosed
```
Returns true if the thumbnail was removed from the taskbar; false if it was not.
_returns: Returns true if the thumbnail was removed from the taskbar; false if it was not._

#### SetImage
```csharp
Microsoft.Windows.Taskbar.TabbedThumbnail.SetImage(System.IntPtr)
```
Override the thumbnail and peek bitmap. 
 By providing this bitmap manually, Thumbnail Window manager will provide the 
 Desktop Window Manager (DWM) this bitmap instead of rendering one automatically.
 Use this property to update the bitmap whenever the control is updated and the user
 needs to be shown a new thumbnail on the taskbar preview (or aero peek).

|Parameter Name|Remarks|
|--------------|-------|
|hBitmap|A bitmap handle for the image to use.
 When the TabbedThumbnail is finalized, this class will delete the provided hBitmap.|

> 
>  If the bitmap doesn't have the right dimensions, the DWM may scale it or not 
>  render certain areas as appropriate - it is the user's responsibility
>  to render a bitmap with the proper dimensions.
>  

#### SetWindowIcon
```csharp
Microsoft.Windows.Taskbar.TabbedThumbnail.SetWindowIcon(System.IntPtr)
```
Sets the window icon for this thumbnail preview

|Parameter Name|Remarks|
|--------------|-------|
|iconHandle|Icon handle (hIcon) for the window/control associated with this preview|

> This method will not release the icon handle. It is the caller's responsibility to release the icon handle.



### Properties

#### ClippingRectangle
Specifies that only a portion of the window's client area
 should be used in the window's thumbnail.
 A value of null will clear the clipping area and use the default thumbnail.
#### DisplayFrameAroundBitmap
Specifies whether a standard window frame will be displayed
 around the bitmap. If the bitmap represents a top-level window,
 you would probably set this flag to true. If the bitmap
 represents a child window (or a frameless window), you would
 probably set this flag to false.
#### PeekOffset
Gets or sets the offset used for displaying the peek bitmap. This setting is
 recomended for hidden WPF controls as it is difficult to calculate their offset.
#### Title
Title for the window shown as the taskbar thumbnail.
#### Tooltip
Tooltip to be shown for this thumbnail on the taskbar. 
 By default this is full title of the window shown on the taskbar.

