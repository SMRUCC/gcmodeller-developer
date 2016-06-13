---
title: ShellObject
---

# ShellObject
_namespace: [Microsoft.Windows.Shell](N-Microsoft.Windows.Shell.html)_

The base class for all Shell objects in Shell Namespace.

### Methods

#### Dispose
```csharp
Microsoft.Windows.Shell.ShellObject.Dispose
```
Release the native objects.

#### Equals
```csharp
Microsoft.Windows.Shell.ShellObject.Equals(System.Object)
```
Returns whether this object is equal to another.

|Parameter Name|Remarks|
|--------------|-------|
|obj|The object to compare against.|

_returns: Equality result._

#### Finalize
```csharp
Microsoft.Windows.Shell.ShellObject.Finalize
```
Implement the finalizer.

#### FromParsingName
```csharp
Microsoft.Windows.Shell.ShellObject.FromParsingName(System.String)
```
Creates a ShellObject subclass given a parsing name.
 For file system items, this method will only accept absolute paths.

|Parameter Name|Remarks|
|--------------|-------|
|parsingName|The parsing name of the object.|

_returns: A newly constructed ShellObject object._

#### GetDisplayName
```csharp
Microsoft.Windows.Shell.ShellObject.GetDisplayName(Microsoft.Windows.Shell.DisplayNameType)
```
Returns the display name of the ShellFolder object. DisplayNameType represents one of the 
 values that indicates how the name should look. 
 See @"T:Microsoft.Windows.Shell.DisplayNameType"for a list of possible values.

|Parameter Name|Remarks|
|--------------|-------|
|displayNameType|A disaply name type.|

_returns: A string._

#### GetHashCode
```csharp
Microsoft.Windows.Shell.ShellObject.GetHashCode
```
Returns the hash code of the object.

#### op_Equality
```csharp
Microsoft.Windows.Shell.ShellObject.op_Equality(Microsoft.Windows.Shell.ShellObject,Microsoft.Windows.Shell.ShellObject)
```
Implements the == (equality) operator.

|Parameter Name|Remarks|
|--------------|-------|
|leftShellObject|First object to compare.|
|rightShellObject|Second object to compare.|

_returns: True if leftShellObject equals rightShellObject; false otherwise._

#### op_Inequality
```csharp
Microsoft.Windows.Shell.ShellObject.op_Inequality(Microsoft.Windows.Shell.ShellObject,Microsoft.Windows.Shell.ShellObject)
```
Implements the != (inequality) operator.

|Parameter Name|Remarks|
|--------------|-------|
|leftShellObject|First object to compare.|
|rightShellObject|Second object to compare.|

_returns: True if leftShellObject does not equal leftShellObject; false otherwise._

#### ToString
```csharp
Microsoft.Windows.Shell.ShellObject.ToString
```
Overrides object.ToString()
_returns: A string representation of the object._

#### Update
```csharp
Microsoft.Windows.Shell.ShellObject.Update(System.Runtime.InteropServices.ComTypes.IBindCtx)
```
Updates the native shell item that maps to this shell object. This is necessary when the shell item 
 changes after the shell object has been created. Without this method call, the retrieval of properties will
 return stale data.

|Parameter Name|Remarks|
|--------------|-------|
|bindContext|Bind context object|




### Properties

#### _internalName
A friendly name for this object that' suitable for display
#### _internalParsingName
Parsing name for this Object e.g. c:\Windows\file.txt,
 or ::{Some Guid}
#### _internalPIDL
PID List (PIDL) for this object
#### IsFileSystemObject
Gets a value that determines if this ShellObject is a file system object.
#### IsLink
Gets a value that determines if this ShellObject is a link or shortcut.
#### IsPlatformSupported
Indicates whether this feature is supported on the current platform.
#### m_nativeShellItem
Internal member to keep track of the native IShellItem2
#### Name
Gets the normal display for this ShellItem.
#### NativePropertyStore
Gets access to the native IPropertyStore (if one is already
 created for this item and still valid. This is usually done by the
 ShellPropertyWriter class. The reference will be set to null
 when the writer has been closed/commited).
#### NativeShellItem
Return the native ShellFolder object
#### NativeShellItem2
Return the native ShellFolder object as newer IShellItem2
#### Parent
Gets the parent ShellObject.
 Returns null if the object has no parent, i.e. if this object is the Desktop folder.
#### ParsingName
Gets the parsing name for this ShellItem.
#### PIDL
Gets the PID List (PIDL) for this ShellItem.
#### Properties
Gets an object that allows the manipulation of ShellProperties for this shell item.
#### Thumbnail
Gets the thumbnail of the ShellObject.

