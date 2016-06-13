---
title: CommonOpenFileDialog
---

# CommonOpenFileDialog
_namespace: [Microsoft.Windows.Dialogs](N-Microsoft.Windows.Dialogs.html)_

Creates a Vista or Windows 7 Common File Dialog, allowing the user to select one or more files.

### Methods

#### #ctor
```csharp
Microsoft.Windows.Dialogs.CommonOpenFileDialog.#ctor(System.String)
```
Creates a new instance of this class with the specified name.

|Parameter Name|Remarks|
|--------------|-------|
|name|The name of this dialog.|




### Properties

#### AllowNonFileSystemItems
Gets or sets a value that determines whether the user can select non-filesystem items, 
 such as Library, Search Connectors, or Known Folders.
#### FileNames
Gets a collection of the selected file names.
#### FilesAsShellObject
Gets a collection of the selected items as ShellObject objects.
#### IsFolderPicker
Gets or sets a value that determines whether the user can select folders or files.
 Default value is false.
#### Multiselect
Gets or sets a value that determines whether the user can select more than one file.

