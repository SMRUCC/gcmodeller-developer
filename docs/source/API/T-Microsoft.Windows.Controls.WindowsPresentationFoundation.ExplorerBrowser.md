---
title: ExplorerBrowser
---

# ExplorerBrowser
_namespace: [Microsoft.Windows.Controls.WindowsPresentationFoundation](N-Microsoft.Windows.Controls.WindowsPresentationFoundation.html)_

ExplorerBrowser

### Methods

#### #ctor
```csharp
Microsoft.Windows.Controls.WindowsPresentationFoundation.ExplorerBrowser.#ctor
```
Hosts the ExplorerBrowser WinForms wrapper in this control

#### Dispose
```csharp
Microsoft.Windows.Controls.WindowsPresentationFoundation.ExplorerBrowser.Dispose(System.Boolean)
```
Disposes the browser.

|Parameter Name|Remarks|
|--------------|-------|
|disposed|-|


#### ExplorerBrowser_Loaded
```csharp
Microsoft.Windows.Controls.WindowsPresentationFoundation.ExplorerBrowser.ExplorerBrowser_Loaded(System.Object,System.Windows.RoutedEventArgs)
```
To avoid the 'Dispatcher processing has been suspended' InvalidOperationException on Win7,
 the ExplorerBorwser native control is initialized after this control is fully loaded.

|Parameter Name|Remarks|
|--------------|-------|
|sender|-|
|e|-|


#### InitializeComponent
```csharp
Microsoft.Windows.Controls.WindowsPresentationFoundation.ExplorerBrowser.InitializeComponent
```
InitializeComponent

#### NavigationLogChanged
```csharp
Microsoft.Windows.Controls.WindowsPresentationFoundation.ExplorerBrowser.NavigationLogChanged(System.Object,Microsoft.Windows.Controls.NavigationLogEventArgs)
```
Synchronize NavigationLog collection to dependency collection

|Parameter Name|Remarks|
|--------------|-------|
|sender|-|
|args|-|


#### SelectionChanged
```csharp
Microsoft.Windows.Controls.WindowsPresentationFoundation.ExplorerBrowser.SelectionChanged(System.Object,System.EventArgs)
```
Synchronize SelectedItems collection to dependency collection

|Parameter Name|Remarks|
|--------------|-------|
|sender|-|
|e|-|


#### UpdateDependencyPropertiesFromCLRPRoperties
```csharp
Microsoft.Windows.Controls.WindowsPresentationFoundation.ExplorerBrowser.UpdateDependencyPropertiesFromCLRPRoperties(System.Object,System.EventArgs)
```
Map changes to the CLR flags to the dependency properties

|Parameter Name|Remarks|
|--------------|-------|
|sender|-|
|e|-|




### Properties

#### AdvancedQueryPane
Show/Hide the AdvancedQuery pane on subsequent navigation
#### AlignLeft
The view should be left-aligned.
#### AlwaysNavigate
Always navigate, even if you are attempting to navigate to the current folder.
#### AutoArrange
Automatically arrange the elements in the view.
#### CheckSelect
Turns on check mode for the view
#### CommandsOrganizePane
Show/Hide the Organize menu in the Commands pane on subsequent navigation
#### CommandsPane
Show/Hide the Commands pane on subsequent navigation
#### CommandsViewPane
Show/Hide the View menu in the Commands pane on subsequent navigation
#### DetailsPane
Show/Hide the Details pane on subsequent navigation
#### ExplorerBrowserControl
The underlying WinForms control
#### ExtendedTiles
When the view is in "tile view mode" the layout of a single item should be extended to the width of the view.
#### FullRowSelect
When an item is selected, the item and all its sub-items are highlighted.
#### HideFileNames
The view should not display file names
#### Items
The items in the ExplorerBrowser window
#### ItemsProperty
The items in the ExplorerBrowser window
#### NavigateOnce
Do not navigate further than the initial navigation.
#### NavigationLog
The selected items in the ExplorerBrowser window
#### NavigationLogIndex
Navigation log index
#### NavigationLogProperty
The NavigationLog
#### NavigationPane
Show/Hide the Navigation pane on subsequent navigation
#### NavigationTarget
The location the explorer browser is navigating to
#### NavigationTargetProperty
The DependencyProperty for the NavigationTarget property
#### NoBrowserViewState
The view should not save view state in the browser.
#### NoColumnHeader
Do not display a column header in the view in any view mode.
#### NoHeaderInAllViews
Only show the column header in details view mode.
#### NoIcons
The view should not display icons.
#### NoSubfolders
Do not show subfolders.
#### PreviewPane
Show/Hide the Preview pane on subsequent navigation
#### QueryPane
Show/Hide the Query pane on subsequent navigation
#### SelectedItems
The selected items in the ExplorerBrowser window
#### SelectedItemsProperty
The selected items in the ExplorerBrowser window
#### SingleClickActivate
Navigate with a single click
#### SingleSelection
Do not allow more than a single item to be selected.
#### ThumbnailSize
The size of the thumbnails in the explorer browser
#### ViewMode
The various view modes of the explorer browser control

