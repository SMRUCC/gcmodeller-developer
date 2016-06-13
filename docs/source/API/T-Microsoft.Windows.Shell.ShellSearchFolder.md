---
title: ShellSearchFolder
---

# ShellSearchFolder
_namespace: [Microsoft.Windows.Shell](N-Microsoft.Windows.Shell.html)_

Create and modify search folders.

### Methods

#### #ctor
```csharp
Microsoft.Windows.Shell.ShellSearchFolder.#ctor(Microsoft.Windows.Shell.SearchCondition,System.String[])
```
Create a simple search folder. Once the appropiate parameters are set, 
 the search folder can be enumerated to get the search results.

|Parameter Name|Remarks|
|--------------|-------|
|searchCondition|Specific condition on which to perform the search (property and expected value)|
|searchScopePath|List of folders/paths to perform the search on. These locations need to be indexed by the system.|


#### SetDisplayName
```csharp
Microsoft.Windows.Shell.ShellSearchFolder.SetDisplayName(System.String)
```
Sets the search folder display name.

#### SetFolderLogicalViewMode
```csharp
Microsoft.Windows.Shell.ShellSearchFolder.SetFolderLogicalViewMode(Microsoft.Windows.Shell.FolderLogicalViewMode)
```
Sets folder logical view mode. The default settings are based on the FolderTypeID which is set 
 by the SearchFolder::SetFolderTypeID method.

|Parameter Name|Remarks|
|--------------|-------|
|mode|The logical view mode to set.|


#### SetFolderTypeID
```csharp
Microsoft.Windows.Shell.ShellSearchFolder.SetFolderTypeID(System.Guid)
```
Sets a search folder type ID, as specified.

#### SetGroupColumn
```csharp
Microsoft.Windows.Shell.ShellSearchFolder.SetGroupColumn(Microsoft.Windows.Shell.PropertySystem.PropertyKey)
```
Sets a group column, as specified. If no group column is specified, no grouping occurs.
> This property may not work correctly with the ExplorerBrowser control.

#### SetIconSize
```csharp
Microsoft.Windows.Shell.ShellSearchFolder.SetIconSize(System.Int32)
```
Sets the search folder icon size.
 The default settings are based on the FolderTypeID which is set by the 
 SearchFolder::SetFolderTypeID method.

#### SetStacks
```csharp
Microsoft.Windows.Shell.ShellSearchFolder.SetStacks(Microsoft.Windows.Shell.PropertySystem.PropertyKey[])
```
Creates a list of stack keys, as specified. If this method is not called, 
 by default the folder will not be stacked.

|Parameter Name|Remarks|
|--------------|-------|
|propertyKeys|Array of property keys on which the folder is stacked.|


#### SetVisibleColumns
```csharp
Microsoft.Windows.Shell.ShellSearchFolder.SetVisibleColumns(Microsoft.Windows.Shell.PropertySystem.PropertyKey[])
```
Creates a new column list whose columns are all visible, 
 given an array of PropertyKey structures. The default is based on FolderTypeID.
> This property may not work correctly with the ExplorerBrowser control.

#### SortColumns
```csharp
Microsoft.Windows.Shell.ShellSearchFolder.SortColumns(Microsoft.Windows.Shell.SortColumn[])
```
Creates a list of sort column directions, as specified.
> This property may not work correctly with the ExplorerBrowser control.



### Properties

#### SearchCondition
Gets the @"T:Microsoft.Windows.Shell.SearchCondition" of the search. 
 When this property is not set, the resulting search will have no filters applied.
#### SearchScopePaths
Gets the search scope, as specified using an array of locations to search. 
 The search will include this location and all its subcontainers. The default is FOLDERID_Profile

