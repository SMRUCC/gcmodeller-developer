---
title: TabbedThumbnailBitmapRequestedEventArgs
---

# TabbedThumbnailBitmapRequestedEventArgs
_namespace: [Microsoft.Windows.Taskbar](N-Microsoft.Windows.Taskbar.html)_

Event args for the TabbedThumbnailBitmapRequested event. The event allows applications to
 provide a bitmap for the tabbed thumbnail's preview and peek. The application should also
 set the Handled property if a custom bitmap is provided.

### Methods

#### #ctor
```csharp
Microsoft.Windows.Taskbar.TabbedThumbnailBitmapRequestedEventArgs.#ctor(System.Windows.UIElement)
```
Creates a Event Args for a TabbedThumbnailBitmapRequested event.

|Parameter Name|Remarks|
|--------------|-------|
|windowsControl|WPF Control (UIElement) related to the event|




### Properties

#### Handled
Gets or sets a value indicating whether the TabbedThumbnailBitmapRequested event was handled.
 Set this property if the SetImage method is called with a custom bitmap for the thumbnail/peek.

