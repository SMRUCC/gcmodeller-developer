---
title: TaskbarManager
---

# TaskbarManager
_namespace: [Microsoft.Windows.Taskbar](N-Microsoft.Windows.Taskbar.html)_

Represents an instance of the Windows taskbar

### Methods

#### GetCurrentProcessAppId
```csharp
Microsoft.Windows.Taskbar.TaskbarManager.GetCurrentProcessAppId
```
Gets the current process' explicit application user model id.
_returns: The app id or null if no app id has been defined._

#### SetApplicationIdForSpecificWindow
```csharp
Microsoft.Windows.Taskbar.TaskbarManager.SetApplicationIdForSpecificWindow(System.Windows.Window,System.String)
```
Sets the application user model id for a given window

|Parameter Name|Remarks|
|--------------|-------|
|appId|The app id to set|
|window|Window that needs a specific application id|

> AppId specifies a unique Application User Model ID (AppID) for the application or individual 
>  top-level window whose taskbar button will hold the custom JumpList built through the methods @"T:Microsoft.Windows.Taskbar.JumpList" class.
>  By setting an appId for a specific window, the window will not be grouped with it's parent window/application. Instead it will have it's own taskbar button.

#### SetCurrentProcessAppId
```csharp
Microsoft.Windows.Taskbar.TaskbarManager.SetCurrentProcessAppId(System.String)
```
Sets the current process' explicit application user model id.

|Parameter Name|Remarks|
|--------------|-------|
|appId|The application id.|


#### SetOverlayIcon
```csharp
Microsoft.Windows.Taskbar.TaskbarManager.SetOverlayIcon(System.Windows.Window,System.Drawing.Icon,System.String)
```
Applies an overlay to a taskbar button of the given WPF window to indicate application status or a notification to the user.

|Parameter Name|Remarks|
|--------------|-------|
|window|The window whose associated taskbar button receives the overlay. This window belong to a calling process associated with the button's application and must be already loaded.|
|icon|The overlay icon|
|accessibilityText|String that provides an alt text version of the information conveyed by the overlay, for accessibility purposes|


#### SetProgressState
```csharp
Microsoft.Windows.Taskbar.TaskbarManager.SetProgressState(Microsoft.Windows.Taskbar.TaskbarProgressBarState,System.Windows.Window)
```
Sets the type and state of the progress indicator displayed on a taskbar button 
 of the given WPF window

|Parameter Name|Remarks|
|--------------|-------|
|window|The window whose associated taskbar button is being used as a progress indicator. 
 This window belong to a calling process associated with the button's application and must be already loaded.|
|state|Progress state of the progress button|


#### SetProgressValue
```csharp
Microsoft.Windows.Taskbar.TaskbarManager.SetProgressValue(System.Int32,System.Int32,System.Windows.Window)
```
Displays or updates a progress bar hosted in a taskbar button of the given WPF window 
 to show the specific percentage completed of the full operation.

|Parameter Name|Remarks|
|--------------|-------|
|window|The window whose associated taskbar button is being used as a progress indicator. 
 This window belong to a calling process associated with the button's application and must be already loaded.|
|currentValue|An application-defined value that indicates the proportion of the operation that has been completed at the time the method is called.|
|maximumValue|An application-defined value that specifies the value currentValue will have when the operation is complete.|




### Properties

#### ApplicationId
Gets or sets the application user model id. Use this to explicitly
 set the application id when generating custom jump lists
#### ApplicationIdSetProcessWide
Indicates if the user has set the application id for the whole process (all windows)
#### Instance
Represents an instance of the Windows Taskbar
#### IsPlatformSupported
Indicates whether this feature is supported on the current platform.
#### OwnerHandle
Sets the handle of the window whose taskbar button will be used
 to display progress.
#### TabbedThumbnail
Gets the Tabbed Thumbnail manager class for adding/updating
 tabbed thumbnail previews.
#### ThumbnailToolBars
Gets the Thumbnail toolbar manager class for adding/updating
 toolbar buttons.

