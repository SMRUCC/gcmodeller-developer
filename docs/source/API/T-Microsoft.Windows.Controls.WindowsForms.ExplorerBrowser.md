---
title: ExplorerBrowser
---

# ExplorerBrowser
_namespace: [Microsoft.Windows.Controls.WindowsForms](N-Microsoft.Windows.Controls.WindowsForms.html)_

This class is a wrapper around the Windows Explorer Browser control.

### Methods

#### #ctor
```csharp
Microsoft.Windows.Controls.WindowsForms.ExplorerBrowser.#ctor
```
Initializes the ExplorerBorwser WinForms wrapper.

#### GetCurrentViewMode
```csharp
Microsoft.Windows.Controls.WindowsForms.ExplorerBrowser.GetCurrentViewMode
```
Returns the current view mode of the browser

#### GetFolderView2
```csharp
Microsoft.Windows.Controls.WindowsForms.ExplorerBrowser.GetFolderView2
```
Gets the IFolderView2 interface from the explorer browser.

#### GetItemsArray
```csharp
Microsoft.Windows.Controls.WindowsForms.ExplorerBrowser.GetItemsArray
```
Gets the items in the ExplorerBrowser as an IShellItemArray

#### GetSelectedItemsArray
```csharp
Microsoft.Windows.Controls.WindowsForms.ExplorerBrowser.GetSelectedItemsArray
```
Gets the selected items in the explorer browser as an IShellItemArray

#### IExplorerPaneVisibility_GetPaneState
```csharp
Microsoft.Windows.Controls.WindowsForms.ExplorerBrowser.IExplorerPaneVisibility_GetPaneState(System.Guid@,Microsoft.Windows.Controls.ExplorerPaneState@)
```
Controls the visibility of the explorer borwser panes

|Parameter Name|Remarks|
|--------------|-------|
|explorerPane|a guid identifying the pane|
|peps|the pane state desired|


#### Microsoft_WindowsAPICodePack_Controls_IServiceProvider_QueryService
```csharp
Microsoft.Windows.Controls.WindowsForms.ExplorerBrowser.Microsoft_WindowsAPICodePack_Controls_IServiceProvider_QueryService(System.Guid@,System.Guid@,System.IntPtr@)
```


|Parameter Name|Remarks|
|--------------|-------|
|guidService|calling service|
|riid|requested interface guid|
|ppvObject|caller-allocated memory for interface pointer|


#### Navigate
```csharp
Microsoft.Windows.Controls.WindowsForms.ExplorerBrowser.Navigate(Microsoft.Windows.Shell.ShellObject)
```
Clears the Explorer Browser of existing content, fills it with
 content from the specified container, and adds a new point to the Travel Log.

|Parameter Name|Remarks|
|--------------|-------|
|shellObject|The shell container to navigate to.|


#### NavigateLogLocation
```csharp
Microsoft.Windows.Controls.WindowsForms.ExplorerBrowser.NavigateLogLocation(System.Int32)
```
Navigate within the navigation log. This does not change the set of 
 locations in the navigation log.

|Parameter Name|Remarks|
|--------------|-------|
|navigationLogIndex|An index into the navigation logs Locations collection.|

_returns: True if the navigation succeeded, false if it failed for any reason._

#### OnCreateControl
```csharp
Microsoft.Windows.Controls.WindowsForms.ExplorerBrowser.OnCreateControl
```
Creates and initializes the native ExplorerBrowser control

#### OnHandleDestroyed
```csharp
Microsoft.Windows.Controls.WindowsForms.ExplorerBrowser.OnHandleDestroyed(System.EventArgs)
```
Cleans up the explorer browser events+object when the window is being taken down.

|Parameter Name|Remarks|
|--------------|-------|
|e|An EventArgs that contains event data.|


#### OnPaint
```csharp
Microsoft.Windows.Controls.WindowsForms.ExplorerBrowser.OnPaint(System.Windows.Forms.PaintEventArgs)
```
Displays a placeholder for the explorer browser in design mode

|Parameter Name|Remarks|
|--------------|-------|
|e|Contains information about the paint event.|


#### OnSizeChanged
```csharp
Microsoft.Windows.Controls.WindowsForms.ExplorerBrowser.OnSizeChanged(System.EventArgs)
```
Sizes the native control to match the WinForms control wrapper.

|Parameter Name|Remarks|
|--------------|-------|
|e|Contains information about the size changed event.|




### Properties

#### ContentOptions
Options that control how the content of the ExplorerBorwser looks
#### Items
The set of ShellObjects in the Explorer Browser
#### NavigationLog
Contains the navigation history of the ExplorerBrowser
#### NavigationOptions
Options that control how the ExplorerBrowser navigates
#### PropertyBagName
The name of the property bag used to persist changes to the ExplorerBrowser's view state.
#### SelectedItems
The set of selected ShellObjects in the Explorer Browser

