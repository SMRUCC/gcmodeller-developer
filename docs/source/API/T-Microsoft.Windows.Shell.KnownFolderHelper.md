---
title: KnownFolderHelper
---

# KnownFolderHelper
_namespace: [Microsoft.Windows.Shell](N-Microsoft.Windows.Shell.html)_

Creates the helper class for known folders.

### Methods

#### FromCanonicalName
```csharp
Microsoft.Windows.Shell.KnownFolderHelper.FromCanonicalName(System.String)
```
Returns the known folder given its canonical name.

|Parameter Name|Remarks|
|--------------|-------|
|canonicalName|A non-localized canonical name for the known folder, such as MyComputer.|

_returns: A known folder representing the specified name._

#### FromKnownFolderId
```csharp
Microsoft.Windows.Shell.KnownFolderHelper.FromKnownFolderId(System.Guid)
```
Returns a known folder given a globally unique identifier.

|Parameter Name|Remarks|
|--------------|-------|
|knownFolderId|A GUID for the requested known folder.|

_returns: A known folder representing the specified name._

#### FromKnownFolderIdInternal
```csharp
Microsoft.Windows.Shell.KnownFolderHelper.FromKnownFolderIdInternal(System.Guid)
```
Returns a known folder given a globally unique identifier.

|Parameter Name|Remarks|
|--------------|-------|
|knownFolderId|A GUID for the requested known folder.|

_returns: A known folder representing the specified name. Returns null if Known Folder is not found or could not be created._

#### FromParsingName
```csharp
Microsoft.Windows.Shell.KnownFolderHelper.FromParsingName(System.String)
```
Returns a known folder given its shell namespace parsing name, such as 
 ::{645FF040-5081-101B-9F08-00AA002F954E} for the Recycle Bin.

|Parameter Name|Remarks|
|--------------|-------|
|parsingName|The parsing name (or path) for the requested known folder.|

_returns: A known folder representing the specified name._

#### FromPath
```csharp
Microsoft.Windows.Shell.KnownFolderHelper.FromPath(System.String)
```
Returns a known folder given its shell path, such as C:\users\public\documents or 
 ::{645FF040-5081-101B-9F08-00AA002F954E} for the Recycle Bin.

|Parameter Name|Remarks|
|--------------|-------|
|path|The path for the requested known folder; either a physical path or a virtual path.|

_returns: A known folder representing the specified name._

#### FromPIDL
```csharp
Microsoft.Windows.Shell.KnownFolderHelper.FromPIDL(System.IntPtr)
```
Returns the native known folder (IKnownFolderNative) given a PID list

|Parameter Name|Remarks|
|--------------|-------|
|pidl|-|


#### GetKnownFolder
```csharp
Microsoft.Windows.Shell.KnownFolderHelper.GetKnownFolder(Microsoft.Windows.Shell.IKnownFolderNative)
```
Given a native KnownFolder (IKnownFolderNative), create the right type of
 IKnownFolder object (FileSystemKnownFolder or NonFileSystemKnownFolder)

|Parameter Name|Remarks|
|--------------|-------|
|knownFolderNative|Native Known Folder|





