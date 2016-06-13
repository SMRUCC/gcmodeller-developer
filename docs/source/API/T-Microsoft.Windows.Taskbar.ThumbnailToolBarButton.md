---
title: ThumbnailToolBarButton
---

# ThumbnailToolBarButton
_namespace: [Microsoft.Windows.Taskbar](N-Microsoft.Windows.Taskbar.html)_

Represents a taskbar thumbnail button in the thumbnail toolbar.

### Methods

#### #ctor
```csharp
Microsoft.Windows.Taskbar.ThumbnailToolBarButton.#ctor(System.Drawing.Icon,System.String)
```
Initializes an instance of this class

|Parameter Name|Remarks|
|--------------|-------|
|icon__1|The icon to use for this button|
|tooltip__2|The tooltip string to use for this button.|


#### Dispose
```csharp
Microsoft.Windows.Taskbar.ThumbnailToolBarButton.Dispose(System.Boolean)
```
Release the native objects.

|Parameter Name|Remarks|
|--------------|-------|
|disposing|-|


#### Finalize
```csharp
Microsoft.Windows.Taskbar.ThumbnailToolBarButton.Finalize
```


#### FireClick
```csharp
Microsoft.Windows.Taskbar.ThumbnailToolBarButton.FireClick(Microsoft.Windows.Taskbar.TaskbarWindow)
```
The window manager should call this method to raise the public click event to all
 the subscribers.

|Parameter Name|Remarks|
|--------------|-------|
|taskbarWindow|Taskbar Window associated with this button|




### Properties

#### AddedToTaskbar
Indicates if this button was added to the taskbar. If it's not yet added,
 then we can't do any updates on it.
#### DismissOnClick
Gets or sets the property that describes the behavior when the button is clicked. 
 If set to true, the taskbar button's flyout will close immediately. Default is false.
#### Enabled
Gets or sets the thumbnail button's enabled state. If the button is disabled, it is present, 
 but has a visual state that indicates that it will not respond to user action. Default is true.
#### Flags
Native flags enum (used when creating the native button)
#### Icon
Gets or sets the thumbnail button's icon.
#### Id
Gets thumbnail button's id.
#### IsInteractive
Gets or sets the property that describes whether the button is interactive with the user. Default is true.
#### Tooltip
Gets or sets the thumbnail button's tooltip.
#### Visible
Gets or sets the thumbnail button's visibility. Default is true.
#### Win32ThumbButton
Native representation of the thumbnail button
#### WindowHandle
Handle to the window to which this button is for (on the taskbar).

