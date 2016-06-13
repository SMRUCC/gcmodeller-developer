---
title: CommonFileDialog
---

# CommonFileDialog
_namespace: [Microsoft.Windows.Dialogs](N-Microsoft.Windows.Dialogs.html)_

Defines the abstract base class for the common file dialogs.

### Methods

#### #ctor
```csharp
Microsoft.Windows.Dialogs.CommonFileDialog.#ctor(System.String)
```
Creates a new instance of this class with the specified title.

|Parameter Name|Remarks|
|--------------|-------|
|title|The title to display in the dialog.|


#### AddPlace
```csharp
Microsoft.Windows.Dialogs.CommonFileDialog.AddPlace(System.String,Microsoft.Windows.Shell.FileDialogAddPlaceLocation)
```
Adds a location (folder, library, search connector, known folder) to the list of
 places available for the user to open or save items. This method actually adds an item
 to the Favorite Links or Places section of the Open/Save dialog. Overload method
 takes in a string for the path.

|Parameter Name|Remarks|
|--------------|-------|
|path|The item to add to the places list.|
|location|One of the enumeration values that indicates placement of the item in the list.|


#### ApplyCollectionChanged
```csharp
Microsoft.Windows.Dialogs.CommonFileDialog.ApplyCollectionChanged
```
Applies changes to the collection.

#### ApplyControlPropertyChange
```csharp
Microsoft.Windows.Dialogs.CommonFileDialog.ApplyControlPropertyChange(System.String,Microsoft.Windows.Dialogs.DialogControl)
```
Called when a control currently in the collection 
 has a property changed.

|Parameter Name|Remarks|
|--------------|-------|
|propertyName|The name of the property changed.|
|control|The control whose property has changed.|


#### CheckFileItemsAvailable
```csharp
Microsoft.Windows.Dialogs.CommonFileDialog.CheckFileItemsAvailable
```
Ensures that the user has selected one or more files.

#### CheckFileNamesAvailable
```csharp
Microsoft.Windows.Dialogs.CommonFileDialog.CheckFileNamesAvailable
```
Ensures that the user has selected one or more files.

#### Dispose
```csharp
Microsoft.Windows.Dialogs.CommonFileDialog.Dispose
```
Releases the resources used by the current instance of the CommonFileDialog class.

#### GetCustomizedFileDialog
```csharp
Microsoft.Windows.Dialogs.CommonFileDialog.GetCustomizedFileDialog
```
Get the IFileDialogCustomize interface, preparing to add controls.

#### IsCollectionChangeAllowed
```csharp
Microsoft.Windows.Dialogs.CommonFileDialog.IsCollectionChangeAllowed
```
Returns if change to the colleciton is allowed.
_returns: true if collection change is allowed._

#### IsControlPropertyChangeAllowed
```csharp
Microsoft.Windows.Dialogs.CommonFileDialog.IsControlPropertyChangeAllowed(System.String,Microsoft.Windows.Dialogs.DialogControl)
```
Determines if changes to a specific property are allowed.

|Parameter Name|Remarks|
|--------------|-------|
|propertyName|The name of the property.|
|control|The control propertyName applies to.|

_returns: true if the property change is allowed._

#### OnFileOk
```csharp
Microsoft.Windows.Dialogs.CommonFileDialog.OnFileOk(System.ComponentModel.CancelEventArgs)
```
Raises the @"E:Microsoft.Windows.Dialogs.CommonFileDialog.FileOk" event just before the dialog is about to return with a result.

|Parameter Name|Remarks|
|--------------|-------|
|e|The event data.|


#### OnFileTypeChanged
```csharp
Microsoft.Windows.Dialogs.CommonFileDialog.OnFileTypeChanged(System.EventArgs)
```
Raises the @"E:Microsoft.Windows.Dialogs.CommonFileDialog.FileTypeChanged" event when the dialog is opened to notify the 
 application of the initial chosen filetype.

|Parameter Name|Remarks|
|--------------|-------|
|e|The event data.|


#### OnFolderChanged
```csharp
Microsoft.Windows.Dialogs.CommonFileDialog.OnFolderChanged(System.EventArgs)
```
Raises the @"E:Microsoft.Windows.Dialogs.CommonFileDialog.FolderChanged" event when the user navigates to a new folder.

|Parameter Name|Remarks|
|--------------|-------|
|e|The event data.|


#### OnFolderChanging
```csharp
Microsoft.Windows.Dialogs.CommonFileDialog.OnFolderChanging(Microsoft.Windows.Dialogs.CommonFileDialogFolderChangeEventArgs)
```
Raises the @"E:Microsoft.Windows.Dialogs.CommonFileDialog.FolderChanging" to stop navigation to a particular location.

|Parameter Name|Remarks|
|--------------|-------|
|e|Cancelable event arguments.|


#### OnOpening
```csharp
Microsoft.Windows.Dialogs.CommonFileDialog.OnOpening(System.EventArgs)
```
Raises the @"E:Microsoft.Windows.Dialogs.CommonFileDialog.DialogOpening" event when the dialog is opened.

|Parameter Name|Remarks|
|--------------|-------|
|e|The event data.|


#### OnSelectionChanged
```csharp
Microsoft.Windows.Dialogs.CommonFileDialog.OnSelectionChanged(System.EventArgs)
```
Raises the @"E:Microsoft.Windows.Dialogs.CommonFileDialog.SelectionChanged" event when the user changes the selection in the dialog's view.

|Parameter Name|Remarks|
|--------------|-------|
|e|The event data.|


#### ResetUserSelections
```csharp
Microsoft.Windows.Dialogs.CommonFileDialog.ResetUserSelections
```
Removes the current selection.

#### ShowDialog
```csharp
Microsoft.Windows.Dialogs.CommonFileDialog.ShowDialog
```
Displays the dialog.
_returns: A @"T:Microsoft.Windows.Dialogs.CommonFileDialogResult" object._

#### SyncFileTypeComboToDefaultExtension
```csharp
Microsoft.Windows.Dialogs.CommonFileDialog.SyncFileTypeComboToDefaultExtension(Microsoft.Windows.Dialogs.IFileDialog)
```
Tries to set the File(s) Type Combo to match the value in 
 'DefaultExtension'. Only doing this if 'this' is a Save dialog 
 as it makes no sense to do this if only Opening a file.

|Parameter Name|Remarks|
|--------------|-------|
|dialog|The native/IFileDialog instance.|


#### ThrowIfDialogShowing
```csharp
Microsoft.Windows.Dialogs.CommonFileDialog.ThrowIfDialogShowing(System.String)
```
Throws an exception when the dialog is showing preventing
 a requested change to a property or the visible set of controls.

|Parameter Name|Remarks|
|--------------|-------|
|message|The message to include in the exception.|




### Properties

#### AddToMostRecentlyUsedList
Gets or sets a value that controls whether to show or hide the list of places where the user has recently opened or saved items.
#### AllowPropertyEditing
Gets or sets a value that controls whether 
 properties can be edited.
#### Controls
Gets the collection of controls for the dialog.
#### CookieIdentifier
Gets or sets a value that enables a calling application 
 to associate a GUID with a dialog's persisted state.
#### DefaultDirectory
Sets the folder and path used as a default if there is not a recently used folder value available.
#### DefaultDirectoryShellContainer
Sets the location (@"T:Microsoft.Windows.Shell.ShellContainer"[ShellContainer] 
 used as a default if there is not a recently used folder value available.
#### DefaultExtension
Gets or sets the default file extension to be added to file names. If the value is null
 or string.Empty, the extension is not added to the file names.
#### DefaultFileName
Default file name.
#### EnsureFileExists
Gets or sets a value that determines whether the file must exist beforehand.
#### EnsurePathExists
Gets or sets a value that specifies whether the returned file must be in an existing folder.
#### EnsureReadOnly
Gets or sets a value that determines whether read-only items are returned.
 Default value for CommonOpenFileDialog is true (allow read-only files) and 
 CommonSaveFileDialog is false (don't allow read-only files).
#### EnsureValidNames
Gets or sets a value that determines whether to validate file names.
#### FileAsShellObject
Gets the selected item as a ShellObject.
#### FileName
Gets the selected filename.
#### FileNameCollection
The collection of names selected by the user.
#### Filters
Gets the filters used by the dialog.
#### InitialDirectory
Gets or sets the initial directory displayed when the dialog is shown. 
 A null or empty string indicates that the dialog is using the default directory.
#### InitialDirectoryShellContainer
Gets or sets a location that is always selected when the dialog is opened, 
 regardless of previous user action. A null value implies that the dialog is using 
 the default location.
#### IsPlatformSupported
Indicates whether this feature is supported on the current platform.
#### NavigateToShortcut
Gets or sets a value that controls whether shortcuts should be treated as their target items, allowing an application to open a .lnk file.
#### RestoreDirectory
Gets or sets a value that determines the restore directory.
#### SelectedFileTypeIndex
Gets the index for the currently selected file type.
#### ShowHiddenItems
Gets or sets a value that controls whether to show hidden items.
#### ShowPlacesList
Gets or sets a value that controls whether 
 to show or hide the list of pinned places that
 the user can choose.
#### Title
Gets or sets the dialog title.

