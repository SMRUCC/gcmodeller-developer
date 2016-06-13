---
title: ShellObjectWatcher
---

# ShellObjectWatcher
_namespace: [Microsoft.Windows.Shell](N-Microsoft.Windows.Shell.html)_

Listens for changes in/on a ShellObject and raises events when they occur.
 This class supports all items under the shell namespace including
 files, folders and virtual folders (libraries, search results and network items), etc.

### Methods

#### #ctor
```csharp
Microsoft.Windows.Shell.ShellObjectWatcher.#ctor(Microsoft.Windows.Shell.ShellObject,System.Boolean)
```
Creates the ShellObjectWatcher for the given ShellObject

|Parameter Name|Remarks|
|--------------|-------|
|shellObject|The ShellObject to monitor|
|recursive|Whether to listen for changes recursively (for when monitoring a container)|


#### Dispose
```csharp
Microsoft.Windows.Shell.ShellObjectWatcher.Dispose
```
Disposes ShellObjectWatcher.

#### Finalize
```csharp
Microsoft.Windows.Shell.ShellObjectWatcher.Finalize
```
Finalizer for ShellObjectWatcher

#### ProcessChangeNotificationEvent
```csharp
Microsoft.Windows.Shell.ShellObjectWatcher.ProcessChangeNotificationEvent(Microsoft.Windows.Shell.WindowMessageEventArgs)
```
Processes all change notifications sent by the Windows Shell.

|Parameter Name|Remarks|
|--------------|-------|
|e|The windows message representing the notification event|


#### Start
```csharp
Microsoft.Windows.Shell.ShellObjectWatcher.Start
```
Start the watcher and begin receiving change notifications. 
 
 If the watcher is running, has no effect.
 Registration for notifications should be done before this is called.

#### Stop
```csharp
Microsoft.Windows.Shell.ShellObjectWatcher.Stop
```
Stop the watcher and prevent further notifications from being received.
 If the watcher is not running, this has no effect.



### Properties

#### Running
Gets whether the watcher is currently running.

