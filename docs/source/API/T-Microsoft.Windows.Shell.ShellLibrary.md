---
title: ShellLibrary
---

# ShellLibrary
_namespace: [Microsoft.Windows.Shell](N-Microsoft.Windows.Shell.html)_

A Shell Library in the Shell Namespace

### Methods

#### #ctor
```csharp
Microsoft.Windows.Shell.ShellLibrary.#ctor(System.String,System.String,System.Boolean)
```
Creates a shell library in a given local folder, 
 using the given shell library name.

|Parameter Name|Remarks|
|--------------|-------|
|libraryName|The name of this library|
|folderPath|The path to the local folder|
|overwrite|Override an existing library with the same name|


#### Add
```csharp
Microsoft.Windows.Shell.ShellLibrary.Add(System.String)
```
Add an existing folder to this library

|Parameter Name|Remarks|
|--------------|-------|
|folderPath|The path to the folder to be added to the library.|


#### Clear
```csharp
Microsoft.Windows.Shell.ShellLibrary.Clear
```
Clear all items of this Library

#### Close
```csharp
Microsoft.Windows.Shell.ShellLibrary.Close
```
Close the library, and release its associated file system resources

#### Contains
```csharp
Microsoft.Windows.Shell.ShellLibrary.Contains(Microsoft.Windows.Shell.ShellFileSystemFolder)
```
Determines if a folder exists in the collection.

|Parameter Name|Remarks|
|--------------|-------|
|item|The folder.|

_returns: true, if the folder exists in the collection._

#### Dispose
```csharp
Microsoft.Windows.Shell.ShellLibrary.Dispose(System.Boolean)
```
Release resources

|Parameter Name|Remarks|
|--------------|-------|
|disposing|Indicates that this was called from Dispose(), rather than from the finalizer.|


#### Finalize
```csharp
Microsoft.Windows.Shell.ShellLibrary.Finalize
```
Release resources

#### FromShellItem
```csharp
Microsoft.Windows.Shell.ShellLibrary.FromShellItem(Microsoft.Windows.Shell.IShellItem,System.Boolean)
```
Load the library using a number of options

|Parameter Name|Remarks|
|--------------|-------|
|nativeShellItem|IShellItem|
|isReadOnly|read-only flag|

_returns: A ShellLibrary Object_

#### GetEnumerator
```csharp
Microsoft.Windows.Shell.ShellLibrary.GetEnumerator
```
Retrieves the collection enumerator.
_returns: The enumerator._

#### ICollection_CopyTo
```csharp
Microsoft.Windows.Shell.ShellLibrary.ICollection_CopyTo(Microsoft.Windows.Shell.ShellFileSystemFolder[],System.Int32)
```
Copies the collection to an array.

|Parameter Name|Remarks|
|--------------|-------|
|array|The array to copy to.|
|arrayIndex|The index in the array at which to start the copy.|


#### IList_Insert
```csharp
Microsoft.Windows.Shell.ShellLibrary.IList_Insert(System.Int32,Microsoft.Windows.Shell.ShellFileSystemFolder)
```
Inserts a FileSystemFolder at the specified index.

|Parameter Name|Remarks|
|--------------|-------|
|index|The index to insert at.|
|item|The FileSystemFolder to insert.|


#### IList_RemoveAt
```csharp
Microsoft.Windows.Shell.ShellLibrary.IList_RemoveAt(System.Int32)
```
Removes an item at the specified index.

|Parameter Name|Remarks|
|--------------|-------|
|index|The index to remove.|


#### IndexOf
```csharp
Microsoft.Windows.Shell.ShellLibrary.IndexOf(Microsoft.Windows.Shell.ShellFileSystemFolder)
```
Searches for the specified FileSystemFolder and returns the zero-based index of the
 first occurrence within Library list.

|Parameter Name|Remarks|
|--------------|-------|
|item|The item to search for.|

_returns: The index of the item in the collection, or -1 if the item does not exist._

#### Load
```csharp
Microsoft.Windows.Shell.ShellLibrary.Load(Microsoft.Windows.Shell.IKnownFolder,System.Boolean)
```
Load the library using a number of options

|Parameter Name|Remarks|
|--------------|-------|
|sourceKnownFolder|A known folder.|
|isReadOnly|If true, opens the library in read-only mode.|

_returns: A ShellLibrary Object_

#### Remove
```csharp
Microsoft.Windows.Shell.ShellLibrary.Remove(System.String)
```
Remove a folder or search connector

|Parameter Name|Remarks|
|--------------|-------|
|folderPath|The path of the item to remove.|

_returns: true if the item was removed._

#### ShowManageLibraryUI
```csharp
Microsoft.Windows.Shell.ShellLibrary.ShowManageLibraryUI(Microsoft.Windows.Shell.IKnownFolder,System.IntPtr,System.String,System.String,System.Boolean)
```
Shows the library management dialog which enables users to mange the library folders and default save location.

|Parameter Name|Remarks|
|--------------|-------|
|sourceKnownFolder|A known folder.|
|windowHandle|The parent window,or IntPtr.Zero for no parent|
|title|A title for the library management dialog, or null to use the library name as the title|
|instruction|An optional help string to display for the library management dialog|
|allowAllLocations|If true, do not show warning dialogs about locations that cannot be indexed|

> If the library is already open in read-write mode, the dialog will not save the changes.

#### System_Collections_IEnumerable_GetEnumerator
```csharp
Microsoft.Windows.Shell.ShellLibrary.System_Collections_IEnumerable_GetEnumerator
```
Retrieves the collection enumerator.
_returns: The enumerator._



### Properties

#### Count
The count of the items in the list.
#### DefaultSaveFolder
By default, this folder is the first location 
 added to the library. The default save folder 
 is both the default folder where files can 
 be saved, and also where the library XML 
 file will be saved, if no other path is specified
#### IconResourceId
The Resource Reference to the icon.
#### IsPinnedToNavigationPane
Whether the library will be pinned to the 
 Explorer Navigation Pane
#### IsPlatformSupported
Indicates whether this feature is supported on the current platform.
#### IsReadOnly
Indicates whether this list is read-only or not.
#### Item
Retrieves the folder at the specified index
#### LibrariesKnownFolder
Get a the known folder FOLDERID_Libraries
#### LibraryType
One of predefined Library types
#### LibraryTypeId
The Guid of the Library type
#### Name
The name of the library, every library must 
 have a name

