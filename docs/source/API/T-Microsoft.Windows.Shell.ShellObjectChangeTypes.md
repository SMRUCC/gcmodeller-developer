---
title: ShellObjectChangeTypes
---

# ShellObjectChangeTypes
_namespace: [Microsoft.Windows.Shell](N-Microsoft.Windows.Shell.html)_

Describes the event that has occurred. 
 Typically, only one event is specified at a time. 
 If more than one event is specified, 
 the values contained in the dwItem1 and dwItem2 parameters must be the same, 
 respectively, for all specified events. 
 This parameter can be one or more of the following values:



### Properties

#### AllEventsMask
All events have occurred.
#### AssociationChange
A file type association has changed. 
 SHCNF_IDLIST must be specified in the uFlags parameter. 
 dwItem1 and dwItem2 are not used and must be NULL.
#### AttributesChange
The attributes of an item or folder have changed. 
 SHCNF_IDLIST or SHCNF_PATH must be specified in uFlags. 
 dwItem1 contains the item or folder that has changed.
 dwItem2 is not used and should be NULL.
#### DirectoryContentsUpdate
The contents of an existing folder have changed, but the folder still exists and has not been renamed. 
 SHCNF_IDLIST or SHCNF_PATH must be specified in uFlags. 
 dwItem1 contains the folder that has changed. 
 dwItem2 is not used and should be NULL. 
 If a folder has been created, deleted, or renamed, use SHCNE_MKDIR, SHCNE_RMDIR, or SHCNE_RENAMEFOLDER, respectively.
#### DirectoryCreate
A folder has been created. SHCNF_IDLIST or SHCNF_PATH must be specified in uFlags. 
 dwItem1 contains the folder that was created. 
 dwItem2 is not used and should be NULL.
#### DirectoryDelete
A folder has been removed. SHCNF_IDLIST or SHCNF_PATH must be specified in uFlags. 
 dwItem1 contains the folder that was removed. 
 dwItem2 is not used and should be NULL.
#### DirectoryRename
The name of a folder has changed. SHCNF_IDLIST or SHCNF_PATH must be specified in uFlags. 
 dwItem1 contains the previous PIDL or name of the folder. 
 dwItem2 contains the new PIDL or name of the folder.
#### DiskEventsMask
Specifies a combination of all of the disk event identifiers.
#### DriveAdd
A drive has been added. SHCNF_IDLIST or SHCNF_PATH must be specified in uFlags. 
 dwItem1 contains the root of the drive that was added. 
 dwItem2 is not used and should be NULL.
#### DriveRemove
A drive has been removed. SHCNF_IDLIST or SHCNF_PATH must be specified in uFlags. 
 dwItem1 contains the root of the drive that was removed. 
 dwItem2 is not used and should be NULL.
#### FreeSpace
The amount of free space on a drive has changed. 
 SHCNF_IDLIST or SHCNF_PATH must be specified in uFlags. 
 dwItem1 contains the root of the drive on which the free space changed. 
 dwItem2 is not used and should be NULL.
#### FromInterrupt
The specified event occurred as a result of a system interrupt. 
 As this value modifies other event values, it cannot be used alone.
#### GlobalEventsMask
Specifies a combination of all of the global event identifiers.
#### ItemCreate
A nonfolder item has been created. SHCNF_IDLIST or SHCNF_PATH must be specified in uFlags. 
 dwItem1 contains the item that was created.
 dwItem2 is not used and should be NULL.
#### ItemDelete
A nonfolder item has been deleted. SHCNF_IDLIST or SHCNF_PATH must be specified in uFlags. 
 dwItem1 contains the item that was deleted. 
 dwItem2 is not used and should be NULL.
#### ItemRename
The name of a nonfolder item has changed. 
 SHCNF_IDLIST or SHCNF_PATH must be specified in uFlags. 
 dwItem1 contains the previous PIDL or name of the item. 
 dwItem2 contains the new PIDL or name of the item.
#### MediaInsert
Storage media has been inserted into a drive. SHCNF_IDLIST or SHCNF_PATH must be specified in uFlags. 
 dwItem1 contains the root of the drive that contains the new media. 
 dwItem2 is not used and should be NULL.
#### MediaRemove
Storage media has been removed from a drive. SHCNF_IDLIST or SHCNF_PATH must be specified in uFlags. 
 dwItem1 contains the root of the drive from which the media was removed. 
 dwItem2 is not used and should be NULL.
#### NetShare
A folder on the local computer is being shared via the network. 
 SHCNF_IDLIST or SHCNF_PATH must be specified in uFlags. 
 dwItem1 contains the folder that is being shared. 
 dwItem2 is not used and should be NULL.
#### NetUnshare
A folder on the local computer is no longer being shared via the network. 
 SHCNF_IDLIST or SHCNF_PATH must be specified in uFlags. 
 dwItem1 contains the folder that is no longer being shared. 
 dwItem2 is not used and should be NULL.
#### None
None
#### ServerDisconnect
The computer has disconnected from a server. 
 SHCNF_IDLIST or SHCNF_PATH must be specified in uFlags. 
 dwItem1 contains the server from which the computer was disconnected. 
 dwItem2 is not used and should be NULL.
#### SystemImageUpdate
An image in the system image list has changed. 
 SHCNF_DWORD must be specified in uFlags.
 dwItem1 is not used and should be NULL.
 dwItem2 contains the index in the system image list that has changed.
#### Update
An existing item (a folder or a nonfolder) has changed, but the item still exists and has not been renamed. 
 SHCNF_IDLIST or SHCNF_PATH must be specified in uFlags. 
 dwItem1 contains the item that has changed. 
 dwItem2 is not used and should be NULL. 
 If a nonfolder item has been created, deleted, or renamed, 
 use SHCNE_CREATE, SHCNE_DELETE, or SHCNE_RENAMEITEM, respectively, instead.

