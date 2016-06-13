---
title: KnownFolderSettings
---

# KnownFolderSettings
_namespace: [Microsoft.Windows.Shell](N-Microsoft.Windows.Shell.html)_

Internal class to represent the KnownFolder settings/properties

### Methods

#### GetFolderProperties
```csharp
Microsoft.Windows.Shell.KnownFolderSettings.GetFolderProperties(Microsoft.Windows.Shell.IKnownFolderNative)
```
Populates a structure that contains 
 this known folder's properties.

#### GetPath
```csharp
Microsoft.Windows.Shell.KnownFolderSettings.GetPath(System.Boolean@,Microsoft.Windows.Shell.IKnownFolderNative)
```
Gets the path of this this known folder.

|Parameter Name|Remarks|
|--------------|-------|
|fileExists|
 Returns false if the folder is virtual, or a boolean
 value that indicates whether this known folder exists.
 |
|knownFolderNative|Native IKnownFolder reference|

_returns: 
 A @"T:System.String" containing the path, or @"F:System.String.Empty" if this known folder does not exist.
 _



### Properties

#### CanonicalName
Gets this known folder's canonical name.
#### Category
Gets the category designation for this known folder.
#### DefinitionOptions
Gets an value that describes this known folder's behaviors.
#### Description
Gets this known folder's description.
#### FileAttributes
Gets this known folder's file attributes, 
 such as "read-only".
#### FolderId
Gets the unique identifier for this known folder.
#### FolderType
Gets a string representation of this known folder's type.
#### FolderTypeId
Gets the unique identifier for this known folder's type.
#### LocalizedName
Gets this known folder's localized name.
#### LocalizedNameResourceId
Gets the resource identifier for this 
 known folder's localized name.
#### ParentId
Gets the unique identifier for this known folder's parent folder.
#### Path
Gets the path for this known folder.
#### PathExists
Gets a value that indicates whether this known folder's path exists on the computer.
#### Redirection
Gets a value that states whether this known folder 
 can have its path set to a new value, 
 including any restrictions on the redirection.
#### RelativePath
Gets this known folder's relative path.
#### Security
Gets this known folder's security attributes.
#### Tooltip
Gets this known folder's tool tip text.
#### TooltipResourceId
Gets the resource identifier for this 
 known folder's tool tip text.

