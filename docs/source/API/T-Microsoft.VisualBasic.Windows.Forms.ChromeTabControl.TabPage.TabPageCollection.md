---
title: TabPageCollection
---

# TabPageCollection
_namespace: [Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TabPage](N-Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TabPage.html)_

Collection of tab pages that syncs with the tab control.

### Methods

#### Add
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TabPage.TabPageCollection.Add(Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TabPage)
```
Adds a page to the list and animates it in.

|Parameter Name|Remarks|
|--------------|-------|
|newTab|The item to open.|


#### AddNoAnimate
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TabPage.TabPageCollection.AddNoAnimate(Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TabPage)
```
Adds a page to the list but doesn't animate it when it opens.

|Parameter Name|Remarks|
|--------------|-------|
|item|The item to open.|


#### Clear
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TabPage.TabPageCollection.Clear
```
Should never really be called.

#### GetInstanceIndices
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TabPage.TabPageCollection.GetInstanceIndices(Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TabPage,Microsoft.VisualBasic.List{Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TabPage})
```
Gets the index of an already opened instance of a tab. -1 for not found.

#### GetTabToReopen
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TabPage.TabPageCollection.GetTabToReopen
```
Returns the tab that is next on line to be reopened.

#### HasTabToReopen
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TabPage.TabPageCollection.HasTabToReopen
```
Whether or not there is a tab available to be reopened.
_returns: True if a tab is ready._

#### MoveItem
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TabPage.TabPageCollection.MoveItem(System.Int32,System.Int32)
```
Moves a page from one index to another.

|Parameter Name|Remarks|
|--------------|-------|
|oldIndex|The index it is currently at.|
|newIndex|The new index you want it to be at.|


#### ReopenTab
```csharp
Microsoft.VisualBasic.Windows.Forms.ChromeTabControl.TabPage.TabPageCollection.ReopenTab
```
Reopened the last closed tab.



### Properties

#### SelectedIndex
The index of the currently selected tab.

