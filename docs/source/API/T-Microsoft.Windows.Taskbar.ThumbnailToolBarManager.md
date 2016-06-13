---
title: ThumbnailToolBarManager
---

# ThumbnailToolBarManager
_namespace: [Microsoft.Windows.Taskbar](N-Microsoft.Windows.Taskbar.html)_

Thumbnail toolbar manager class for adding a thumbnail toolbar with a specified set of buttons 
 to the thumbnail image of a window in a taskbar button flyout.

### Methods

#### AddButtons
```csharp
Microsoft.Windows.Taskbar.ThumbnailToolBarManager.AddButtons(System.Windows.UIElement,Microsoft.Windows.Taskbar.ThumbnailToolBarButton[])
```
Adds thumbnail toolbar for the specified WPF Control.

|Parameter Name|Remarks|
|--------------|-------|
|control|WPF Control for which the thumbnail toolbar buttons need to be added|
|buttons|Thumbnail buttons for the window's thumbnail toolbar|

> After a toolbar has been added to a thumbnail, buttons can be altered only through various 
>  properties on the ThumbnailToolBarButton. While individual buttons cannot be added or removed, 
>  they can be shown and hidden through ThumbnailToolBarButton.Visible as needed. 
>  The toolbar itself cannot be removed without re-creating the window itself.
>  




