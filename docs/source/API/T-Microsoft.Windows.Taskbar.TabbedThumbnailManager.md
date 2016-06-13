---
title: TabbedThumbnailManager
---

# TabbedThumbnailManager
_namespace: [Microsoft.Windows.Taskbar](N-Microsoft.Windows.Taskbar.html)_

Represents the main class for adding and removing tabbed thumbnails on the Taskbar
 for child windows and controls.

### Methods

#### #ctor
```csharp
Microsoft.Windows.Taskbar.TabbedThumbnailManager.#ctor
```
Internal constructor that creates a new dictionary for keeping track of the window handles
 and their corresponding thumbnail preview objects.

#### AddThumbnailPreview
```csharp
Microsoft.Windows.Taskbar.TabbedThumbnailManager.AddThumbnailPreview(Microsoft.Windows.Taskbar.TabbedThumbnail)
```
Adds a new tabbed thumbnail to the taskbar.

|Parameter Name|Remarks|
|--------------|-------|
|preview|Thumbnail preview for a specific window handle or control. The preview
 object can be initialized with specific properties for the title, bitmap, and tooltip.|


#### ClearThumbnailClip
```csharp
Microsoft.Windows.Taskbar.TabbedThumbnailManager.ClearThumbnailClip(System.IntPtr)
```
Clear a clip that is already in place and return to the default display of the thumbnail.

|Parameter Name|Remarks|
|--------------|-------|
|windowHandle|The handle to a window represented in the taskbar. This has to be a top-level window.|


#### GetThumbnailPreview
```csharp
Microsoft.Windows.Taskbar.TabbedThumbnailManager.GetThumbnailPreview(System.Windows.UIElement)
```
Gets the TabbedThumbnail object associated with the given WPF Window

|Parameter Name|Remarks|
|--------------|-------|
|windowsControl|WPF Control (UIElement) for which the preview object is requested|

_returns: TabbedThumbnail associated with the given WPF Window_

#### InvalidateThumbnails
```csharp
Microsoft.Windows.Taskbar.TabbedThumbnailManager.InvalidateThumbnails
```
Invalidates all the tabbed thumbnails. This will force the Desktop Window Manager
 to not use the cached thumbnail or preview or aero peek and request a new one next time.
> This method should not be called frequently. 
>  Doing so can lead to poor performance as new bitmaps are created and retrieved.

#### IsThumbnailPreviewAdded
```csharp
Microsoft.Windows.Taskbar.TabbedThumbnailManager.IsThumbnailPreviewAdded(System.Windows.UIElement)
```
Determines whether the given control has been added to the taskbar's tabbed thumbnail list.

|Parameter Name|Remarks|
|--------------|-------|
|control|The preview to locate on the taskbar's tabbed thumbnail list|

_returns: true if the tab is already added on the taskbar; otherwise, false._

#### RemoveThumbnailPreview
```csharp
Microsoft.Windows.Taskbar.TabbedThumbnailManager.RemoveThumbnailPreview(System.Windows.UIElement)
```
Remove the tabbed thumbnail from the taskbar.

|Parameter Name|Remarks|
|--------------|-------|
|windowsControl|TabbedThumbnail associated with the WPF Control (UIElement) that 
 is to be removed from the taskbar|


#### SetActiveTab
```csharp
Microsoft.Windows.Taskbar.TabbedThumbnailManager.SetActiveTab(System.Windows.UIElement)
```
Sets the given WPF window as being active on the taskbar tabbed thumbnails list.
 Call this method to keep the application and the taskbar in sync as to which window/control
 is currently active (or selected, in the case of tabbed application).

|Parameter Name|Remarks|
|--------------|-------|
|windowsControl|WPF control that is currently active in the application|


#### SetTabOrder
```csharp
Microsoft.Windows.Taskbar.TabbedThumbnailManager.SetTabOrder(Microsoft.Windows.Taskbar.TabbedThumbnail,Microsoft.Windows.Taskbar.TabbedThumbnail)
```
Moves an existing thumbnail to a new position in the application's group.

|Parameter Name|Remarks|
|--------------|-------|
|previewToChange|Preview for the window whose order is being changed. 
 This value is required, must already be added via AddThumbnailPreview method, and cannot be null.|
|insertBeforePreview|The preview of the tab window whose thumbnail that previewToChange is inserted to the left of. 
 This preview must already be added via AddThumbnailPreview. If this value is null, the previewToChange tab is added to the end of the list.
 |


#### SetThumbnailClip
```csharp
Microsoft.Windows.Taskbar.TabbedThumbnailManager.SetThumbnailClip(System.IntPtr,System.Nullable{System.Drawing.Rectangle})
```
Selects a portion of a window's client area to display as that window's thumbnail in the taskbar.

|Parameter Name|Remarks|
|--------------|-------|
|windowHandle|The handle to a window represented in the taskbar. This has to be a top-level window.|
|clippingRectangle|Rectangle structure that specifies a selection within the window's client area,
 relative to the upper-left corner of that client area.
 If this parameter is null, the clipping area will be cleared and the default display of the thumbnail will be used instead.|




### Properties

#### _tabbedThumbnailCache
Internal dictionary to keep track of the user's window handle and its 
 corresponding thumbnail preview objects.

