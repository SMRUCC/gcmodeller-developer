---
title: ExplorerBrowserViewEvents
---

# ExplorerBrowserViewEvents
_namespace: [Microsoft.Windows.Internal](N-Microsoft.Windows.Internal.html)_

This provides a connection point container compatible dispatch interface for
 hooking into the ExplorerBrowser view.

### Methods

#### #ctor
```csharp
Microsoft.Windows.Internal.ExplorerBrowserViewEvents.#ctor
```
Default constructor for ExplorerBrowserViewEvents

#### Dispose
```csharp
Microsoft.Windows.Internal.ExplorerBrowserViewEvents.Dispose(System.Boolean)
```
Disconnects and disposes object.

|Parameter Name|Remarks|
|--------------|-------|
|disposed|-|


#### Finalize
```csharp
Microsoft.Windows.Internal.ExplorerBrowserViewEvents.Finalize
```
Finalizer for ExplorerBrowserViewEvents

#### ViewContentsChanged
```csharp
Microsoft.Windows.Internal.ExplorerBrowserViewEvents.ViewContentsChanged
```
The contents of the view have changed

#### ViewFileListEnumDone
```csharp
Microsoft.Windows.Internal.ExplorerBrowserViewEvents.ViewFileListEnumDone
```
The enumeration of files in the view is complete

#### ViewSelectedItemChanged
```csharp
Microsoft.Windows.Internal.ExplorerBrowserViewEvents.ViewSelectedItemChanged
```
The selected item in the view has changed (not the same as the selection has changed)

#### ViewSelectionChanged
```csharp
Microsoft.Windows.Internal.ExplorerBrowserViewEvents.ViewSelectionChanged
```
The view selection has changed




