---
title: JumpListLink
---

# JumpListLink
_namespace: [Microsoft.Windows.Taskbar](N-Microsoft.Windows.Taskbar.html)_

Represents a jump list link object.

### Methods

#### #ctor
```csharp
Microsoft.Windows.Taskbar.JumpListLink.#ctor(System.String,System.String)
```
Initializes a new instance of a JumpListLink with the specified path.

|Parameter Name|Remarks|
|--------------|-------|
|pathValue|The path to the item. The path is required for the JumpList Link|
|titleValue|The title for the JumpListLink item. The title is required for the JumpList link.|


#### Dispose
```csharp
Microsoft.Windows.Taskbar.JumpListLink.Dispose
```
Release the native objects.

#### Finalize
```csharp
Microsoft.Windows.Taskbar.JumpListLink.Finalize
```
Implement the finalizer.



### Properties

#### Arguments
Gets or sets the object's arguments (passed to the command line).
#### IconReference
Gets or sets the icon reference (location and index) of the link's icon.
#### NativeShellLink
Gets an IShellLinkW representation of this object
#### Path
Gets or sets the link's path
#### ShowCommand
Gets or sets the show command of the lauched application.
#### Title
Gets or sets the link's title
#### WorkingDirectory
Gets or sets the object's working directory.

