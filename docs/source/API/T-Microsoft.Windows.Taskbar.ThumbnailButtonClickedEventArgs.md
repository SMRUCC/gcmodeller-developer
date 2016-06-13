---
title: ThumbnailButtonClickedEventArgs
---

# ThumbnailButtonClickedEventArgs
_namespace: [Microsoft.Windows.Taskbar](N-Microsoft.Windows.Taskbar.html)_

Event args for TabbedThumbnailButton.Click event

### Methods

#### #ctor
```csharp
Microsoft.Windows.Taskbar.ThumbnailButtonClickedEventArgs.#ctor(System.Windows.UIElement,Microsoft.Windows.Taskbar.ThumbnailToolBarButton)
```
Creates a Event Args for the TabbedThumbnailButton.Click event

|Parameter Name|Remarks|
|--------------|-------|
|windowsControl__1|WPF Control (UIElement) related to the event|
|button|Thumbnail toolbar button that was clicked|




### Properties

#### ThumbnailButton
Gets the ThumbnailToolBarButton that was clicked
#### WindowHandle
Gets the Window handle for the specific control/window that is related to this event.
#### WindowsControl
Gets the WPF Control (UIElement) that is related to this event. This property may be null
 for non-WPF applications.

