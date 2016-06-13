---
title: CommonSaveFileDialog
---

# CommonSaveFileDialog
_namespace: [Microsoft.Windows.Dialogs](N-Microsoft.Windows.Dialogs.html)_

Creates a Vista or Windows 7 Common File Dialog, allowing the user to select the filename and location for a saved file.

### Methods

#### #ctor
```csharp
Microsoft.Windows.Dialogs.CommonSaveFileDialog.#ctor(System.String)
```
Creates a new instance of this class with the specified name.

|Parameter Name|Remarks|
|--------------|-------|
|name|The name of this dialog.|


#### SetCollectedPropertyKeys
```csharp
Microsoft.Windows.Dialogs.CommonSaveFileDialog.SetCollectedPropertyKeys(System.Boolean,Microsoft.Windows.Shell.PropertySystem.PropertyKey[])
```
Specifies which properties will be collected in the save dialog.

|Parameter Name|Remarks|
|--------------|-------|
|appendDefault|True to show default properties for the currently selected 
 filetype in addition to the properties specified by propertyList. False to show only properties 
 specified by pList.
 List of properties to collect. This parameter can be null.|

> 
>  SetCollectedPropertyKeys can be called at any time before the dialog is displayed or while it 
>  is visible. If different properties are to be collected depending on the chosen filetype, 
>  then SetCollectedProperties can be called in response to CommonFileDialog::FileTypeChanged event.
>  Note: By default, no properties are collected in the save dialog.
>  

#### SetSaveAsItem
```csharp
Microsoft.Windows.Dialogs.CommonSaveFileDialog.SetSaveAsItem(Microsoft.Windows.Shell.ShellObject)
```
Sets an item to appear as the initial entry in a Save As dialog.

|Parameter Name|Remarks|
|--------------|-------|
|item|The initial entry to be set in the dialog.|

> The name of the item is displayed in the file name edit box, 
>  and the containing folder is opened in the view. This would generally be 
>  used when the application is saving an item that already exists.



### Properties

#### AlwaysAppendDefaultExtension
Gets or sets a value that controls whether the 
 returned file name has a file extension that matches the 
 currently selected file type. If necessary, the dialog appends the correct 
 file extension.
#### CollectedProperties
Retrieves the set of property values for a saved item or an item in the process of being saved.
#### CreatePrompt
Gets or sets a value that controls whether to prompt for creation if the item returned in the save dialog does not exist.
#### IsExpandedMode
Gets or sets a value that controls whether to the save dialog 
 displays in expanded mode.
#### OverwritePrompt
Gets or sets a value that controls whether to prompt before 
 overwriting an existing file of the same name. Default value is true.

