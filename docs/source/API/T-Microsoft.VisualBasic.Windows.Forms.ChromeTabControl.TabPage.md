---
title: TabPage
---

# TabPage
_namespace: [Microsoft.VisualBasic.Windows.Forms.ChromeTabControl](N-Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.html)_

Pages that work with the TabControl.

### Methods

#### #ctor
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TabPage.#ctor
```
Creates a new tab page.

#### Changed
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TabPage.Changed
```
Updates the parent control's areas.

#### Close
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TabPage.Close
```
Closes this page.

#### Dispose
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TabPage.Dispose(System.Boolean)
```
Gets called when the parent TabControl is disposing.

#### EnsureVisible
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TabPage.EnsureVisible
```
Makes this tab the selected tab in the control.

#### NewInstanceAttempted
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TabPage.NewInstanceAttempted(Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TabPage)
```
Gets called when a new instance of this tab page is attempted to be opened.

#### OnDeselected
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TabPage.OnDeselected
```
Gets triggered when this page is no longer selected in the tab control.

#### OnLoad
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TabPage.OnLoad(System.EventArgs)
```
Overrides the OnLoad event for this control.

|Parameter Name|Remarks|
|--------------|-------|
|e|The EventArgs for this event.|


#### OnScroll
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TabPage.OnScroll(System.Windows.Forms.ScrollEventArgs)
```
Overrides the OnScroll event for this conrol.

|Parameter Name|Remarks|
|--------------|-------|
|se|The ScrollEventArgs for this event.|


#### OnSelected
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TabPage.OnSelected
```
Gets triggered when this page is selected in the tab control.

#### RefreshControl
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TabPage.RefreshControl
```
Invalidates the parent control.

#### SetOwnerTabControl
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TabPage.SetOwnerTabControl(Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.ChromeTabControl)
```
Sets the owner of this tab.

|Parameter Name|Remarks|
|--------------|-------|
|tabcontrol|The owner of this tab.|


#### TabClosingAllowed
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TabPage.TabClosingAllowed
```
Gets called when the tab is being closed. Return true to cancel.
_returns: True to allow the closing. False to not allow it._



### Properties

#### Animator
The animator that animates the tab.
#### CanClose
Whether or not this page can be closed.
#### CanPin
Whether or not this page can be pinned.
#### CanReopen
Whether or not this page can be reopened.
#### Image
The full sized image for this page.
#### Image16
The 16x16 image for this page
#### Image16Transparent
The slightly transparent 16x16 image for this page.
#### Pinned
Whether or not this tab is pinned.
#### SingleInstance
Whether or not there can only be one instance of a tab.
#### TabDraggable
Whether or not this tab is draggable.
#### TabSelectable
Whether or not this tab is selectable or not.
#### TabWidth
The current width in pixels of the tab on top.
#### Title
The title of the page that shows up on the tab.

