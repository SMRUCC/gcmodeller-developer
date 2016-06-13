---
title: ShellFileGetAttributesOptions
---

# ShellFileGetAttributesOptions
_namespace: [Microsoft.Windows.Shell.ShellNativeMethods](N-Microsoft.Windows.Shell.ShellNativeMethods.html)_





### Properties

#### Browsable
The specified items can be browsed in place.
#### CanCopy
The specified items can be copied.
#### CanDelete
The specified items can be deleted.
#### CanLink
Shortcuts can be created for the specified items. This flag has the same value as DROPEFFECT. 
 The normal use of this flag is to add a Create Shortcut item to the shortcut menu that is displayed 
 during drag-and-drop operations. However, SFGAO_CANLINK also adds a Create Shortcut item to the Microsoft 
 Windows Explorer's File menu and to normal shortcut menus. 
 If this item is selected, your application's IContextMenu::InvokeCommand is invoked with the lpVerb 
 member of the CMINVOKECOMMANDINFO structure set to "link." Your application is responsible for creating the link.
#### CanMoniker
It is possible to create monikers for the specified file objects or folders.
#### CanMove
The specified items can be moved.
#### CanRename
The specified items can be renamed.
#### CapabilityMask
This flag is a mask for the capability flags.
#### Compressed
The specified items are compressed.
#### ContentsMask
This flag is a mask for the contents attributes.
#### DisplayAttributeMask
This flag is a mask for the display attributes.
#### DropTarget
The specified items are drop targets.
#### Encrypted
The specified items are encrypted.
#### FileSystem
The specified folders or file objects are part of the file system 
 that is, they are files, directories, or root directories).
#### FileSystemAncestor
The specified folders contain one or more file system folders.
#### Folder
The specified items are folders.
#### Ghosted
The specified items are ghosted icons.
#### HasPropertySheet
The specified items have property sheets.
#### HasStorage
Not supported.
#### HasSubFolder
The specified folders have subfolders = and are, therefore, 
 expandable in the left pane of Windows Explorer).
#### Hidden
The item is hidden and should not be displayed unless the 
 Show hidden files and folders option is enabled in Folder Settings.
#### IsSlow
Indicates that accessing the object = through IStream or other storage interfaces, 
 is a slow operation. 
 Applications should avoid accessing items flagged with SFGAO_ISSLOW.
#### Link
The specified items are shortcuts.
#### NewContent
The objects contain new content.
#### Nonenumerated
The items are nonenumerated items.
#### PkeyMask
Mask used by PKEY_SFGAOFlags to remove certain values that are considered 
 to cause slow calculations or lack context. 
 Equal to SFGAO_VALIDATE | SFGAO_ISSLOW | SFGAO_HASSUBFOLDER.
#### ReadOnly
The specified items are read-only. In the case of folders, this means 
 that new items cannot be created in those folders.
#### Removable
The specified items are on removable media or are themselves removable devices.
#### Share
The specified folder objects are shared.
#### Storage
The specified items can be bound to an IStorage interface through IShellFolder::BindToObject.
#### StorageAncestor
Children of this item are accessible through IStream or IStorage. 
 Those children are flagged with SFGAO_STORAGE or SFGAO_STREAM.
#### StorageCapabilityMask
This flag is a mask for the storage capability attributes.
#### Stream
Indicates that the item has a stream associated with it that can be accessed 
 by a call to IShellFolder::BindToObject with IID_IStream in the riid parameter.
#### System
Windows 7 and later. The specified items are system items.
#### Validate
When specified as input, SFGAO_VALIDATE instructs the folder to validate that the items 
 pointed to by the contents of apidl exist. If one or more of those items do not exist, 
 IShellFolder::GetAttributesOf returns a failure code. 
 When used with the file system folder, SFGAO_VALIDATE instructs the folder to discard cached 
 properties retrieved by clients of IShellFolder2::GetDetailsEx that may 
 have accumulated for the specified items.

