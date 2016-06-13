---
title: TabbedThumbnailEventArgs
---

# TabbedThumbnailEventArgs
_namespace: [Microsoft.Windows.Taskbar](N-Microsoft.Windows.Taskbar.html)_

Event args for various Tabbed Thumbnail related events

### Methods

#### #ctor
```csharp
Microsoft.Windows.Taskbar.TabbedThumbnailEventArgs.#ctor(System.Windows.UIElement)
```
Creates a Event Args for a specific tabbed thumbnail event.

|Parameter Name|Remarks|
|--------------|-------|
|windowsControl__1|WPF Control (UIElement) related to the event|




### Properties

#### WindowHandle
Gets the Window handle for the specific control/window that is related to this event.
#### WindowsControl
Gets the WPF Control (UIElement) that is related to this event. This property may be null
 for non-WPF applications.

