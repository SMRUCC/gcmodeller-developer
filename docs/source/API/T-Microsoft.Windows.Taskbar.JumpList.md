---
title: JumpList
---

# JumpList
_namespace: [Microsoft.Windows.Taskbar](N-Microsoft.Windows.Taskbar.html)_

Represents an instance of a Taskbar button jump list.

### Methods

#### #ctor
```csharp
Microsoft.Windows.Taskbar.JumpList.#ctor(System.String,System.IntPtr)
```
Creates a new instance of the JumpList class with the specified
 appId. The JumpList is associated with the given window.

|Parameter Name|Remarks|
|--------------|-------|
|appID|Application Id to use for this instace.|
|windowHandle|Window handle for the window that is associated with this JumpList|


#### AddCustomCategories
```csharp
Microsoft.Windows.Taskbar.JumpList.AddCustomCategories(Microsoft.Windows.Taskbar.JumpListCustomCategory[])
```
Adds a collection of custom categories to the Taskbar jump list.

|Parameter Name|Remarks|
|--------------|-------|
|customCategories|The catagories to add to the jump list.|


#### AddToRecent
```csharp
Microsoft.Windows.Taskbar.JumpList.AddToRecent(System.String)
```
Reports document usage to the shell.

|Parameter Name|Remarks|
|--------------|-------|
|destination|The full path of the file to report usage.|


#### AddUserTasks
```csharp
Microsoft.Windows.Taskbar.JumpList.AddUserTasks(Microsoft.Windows.Taskbar.JumpListTask[])
```
Adds user tasks to the Taskbar JumpList. User tasks can only consist of JumpListTask or
 JumpListSeparator objects.

|Parameter Name|Remarks|
|--------------|-------|
|tasks|The user tasks to add to the JumpList.|


#### ClearAllUserTasks
```csharp
Microsoft.Windows.Taskbar.JumpList.ClearAllUserTasks
```
Removes all user tasks that have been added.

#### CreateJumpList
```csharp
Microsoft.Windows.Taskbar.JumpList.CreateJumpList
```
Create a JumpList for the application's taskbar button.
_returns: A new JumpList that is associated with the app id of the main application window_
> If there are any other child (top-level) windows for this application and they don't have
>  a specific JumpList created for them, they all will share the same JumpList as the main application window.
>  In order to have a individual JumpList for a top-level window, use the overloaded method CreateJumpListForIndividualWindow.

#### CreateJumpListForIndividualWindow
```csharp
Microsoft.Windows.Taskbar.JumpList.CreateJumpListForIndividualWindow(System.String,System.Windows.Window)
```
Create a JumpList for the application's taskbar button.

|Parameter Name|Remarks|
|--------------|-------|
|appId|Application Id for the individual window. This must be unique for each top-level window in order to have a individual JumpList.|
|window|WPF Window associated with the new JumpList|

_returns: A new JumpList that is associated with the specific WPF window_

#### Refresh
```csharp
Microsoft.Windows.Taskbar.JumpList.Refresh
```
Commits the pending JumpList changes and refreshes the Taskbar.



### Properties

#### ApplicationId
Gets or sets the application ID to use for this jump list.
#### KnownCategoryOrdinalPosition
Gets or sets the value for the known category location relative to the 
 custom category collection.
#### KnownCategoryToDisplay
Gets or sets the type of known categories to display.
#### MaxSlotsInList
Gets the recommended number of items to add to the jump list.
#### RemovedDestinations
Retrieves the current list of destinations that have been removed from the existing jump list by the user. 
 The removed destinations may become items on a custom jump list.

