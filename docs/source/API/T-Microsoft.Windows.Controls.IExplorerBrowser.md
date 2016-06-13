---
title: IExplorerBrowser
---

# IExplorerBrowser
_namespace: [Microsoft.Windows.Controls](N-Microsoft.Windows.Controls.html)_



### Methods

#### Advise
```csharp
Microsoft.Windows.Controls.IExplorerBrowser.Advise(System.IntPtr,System.UInt32@)
```
Initiates a connection with IExplorerBrowser for event callbacks.

|Parameter Name|Remarks|
|--------------|-------|
|psbe|A pointer to the IExplorerBrowserEvents interface of the object to be 
 advised of IExplorerBrowser events|
|pdwCookie|When this method returns, contains a token that uniquely identifies 
 the event listener. This allows several event listeners to be subscribed at a time.|


#### BrowseToIDList
```csharp
Microsoft.Windows.Controls.IExplorerBrowser.BrowseToIDList(System.IntPtr,System.UInt32)
```
Browses to a pointer to an item identifier list (PIDL)

|Parameter Name|Remarks|
|--------------|-------|
|pidl|A pointer to a const ITEMIDLIST (item identifier list) that specifies an object's 
 location as the destination to navigate to. This parameter can be NULL.|
|uFlags|A flag that specifies the category of the pidl. This affects how 
 navigation is accomplished|


#### BrowseToObject
```csharp
Microsoft.Windows.Controls.IExplorerBrowser.BrowseToObject(System.Object,System.UInt32)
```
Browse to an object

|Parameter Name|Remarks|
|--------------|-------|
|punk|A pointer to an object to browse to. If the object cannot be browsed, 
 an error value is returned.|
|uFlags|A flag that specifies the category of the pidl. This affects how 
 navigation is accomplished. |


#### Destroy
```csharp
Microsoft.Windows.Controls.IExplorerBrowser.Destroy
```
Destroys the browser.

#### FillFromObject
```csharp
Microsoft.Windows.Controls.IExplorerBrowser.FillFromObject(System.Object,System.Int32)
```
Creates a results folder and fills it with items.

|Parameter Name|Remarks|
|--------------|-------|
|punk|An interface pointer on the source object that will fill the IResultsFolder|
|dwFlags|One of the EXPLORER_BROWSER_FILL_FLAGS|


#### GetCurrentView
```csharp
Microsoft.Windows.Controls.IExplorerBrowser.GetCurrentView(System.Guid@,System.IntPtr@)
```
Gets an interface for the current view of the browser.

|Parameter Name|Remarks|
|--------------|-------|
|riid|A reference to the desired interface ID.|
|ppv|When this method returns, contains the interface pointer requested in riid. 
 This will typically be IShellView or IShellView2. |


#### GetOptions
```csharp
Microsoft.Windows.Controls.IExplorerBrowser.GetOptions(Microsoft.Windows.Controls.ExplorerBrowserOptions@)
```
Gets the current browser options.

|Parameter Name|Remarks|
|--------------|-------|
|pdwFlag|When this method returns, contains the current EXPLORER_BROWSER_OPTIONS 
 for the browser.|


#### Initialize
```csharp
Microsoft.Windows.Controls.IExplorerBrowser.Initialize(System.IntPtr,Microsoft.Windows.Shell.NativeRect@,Microsoft.Windows.Controls.FolderSettings)
```
Prepares the browser to be navigated.

|Parameter Name|Remarks|
|--------------|-------|
|hwndParent|A handle to the owner window or control.|
|prc|A pointer to a RECT containing the coordinates of the bounding rectangle 
 the browser will occupy. The coordinates are relative to hwndParent. If this parameter is NULL,
 then method IExplorerBrowser::SetRect should subsequently be called.|
|pfs|A pointer to a FOLDERSETTINGS structure that determines how the folder will be
 displayed in the view. If this parameter is NULL, then method IExplorerBrowser::SetFolderSettings
 should be called, otherwise, the default view settings for the folder are used.|


#### RemoveAll
```csharp
Microsoft.Windows.Controls.IExplorerBrowser.RemoveAll
```
Removes all items from the results folder.

#### SetEmptyText
```csharp
Microsoft.Windows.Controls.IExplorerBrowser.SetEmptyText(System.String)
```
Sets the default empty text.

|Parameter Name|Remarks|
|--------------|-------|
|pszEmptyText|A pointer to a constant, null-terminated, Unicode string that contains 
 the empty text.|


#### SetFolderSettings
```csharp
Microsoft.Windows.Controls.IExplorerBrowser.SetFolderSettings(Microsoft.Windows.Controls.FolderSettings)
```
Sets the folder settings for the current view.

|Parameter Name|Remarks|
|--------------|-------|
|pfs|A pointer to a FOLDERSETTINGS structure that contains the folder settings 
 to be applied.|


#### SetOptions
```csharp
Microsoft.Windows.Controls.IExplorerBrowser.SetOptions(Microsoft.Windows.Controls.ExplorerBrowserOptions)
```
Sets the current browser options.

|Parameter Name|Remarks|
|--------------|-------|
|dwFlag|One or more EXPLORER_BROWSER_OPTIONS flags to be set.|


#### SetPropertyBag
```csharp
Microsoft.Windows.Controls.IExplorerBrowser.SetPropertyBag(System.String)
```
Sets the name of the property bag.

|Parameter Name|Remarks|
|--------------|-------|
|pszPropertyBag|A pointer to a constant, null-terminated, Unicode string that contains
 the name of the property bag. View state information that is specific to the application of the 
 client is stored (persisted) using this name.|


#### SetRect
```csharp
Microsoft.Windows.Controls.IExplorerBrowser.SetRect(System.IntPtr@,Microsoft.Windows.Shell.NativeRect)
```
Sets the size and position of the view windows created by the browser.

|Parameter Name|Remarks|
|--------------|-------|
|phdwp|A pointer to a DeferWindowPos handle. This paramater can be NULL.|
|rcBrowser|The coordinates that the browser will occupy.|


#### Unadvise
```csharp
Microsoft.Windows.Controls.IExplorerBrowser.Unadvise(System.UInt32)
```
Terminates an advisory connection.

|Parameter Name|Remarks|
|--------------|-------|
|dwCookie|A connection token previously returned from IExplorerBrowser::Advise.
 Identifies the connection to be terminated.|





