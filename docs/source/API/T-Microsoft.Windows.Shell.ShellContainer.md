---
title: ShellContainer
---

# ShellContainer
_namespace: [Microsoft.Windows.Shell](N-Microsoft.Windows.Shell.html)_

Represents the base class for all types of Shell "containers". Any class deriving from this class
 can contain other ShellObjects (e.g. ShellFolder, FileSystemKnownFolder, ShellLibrary, etc)

### Methods

#### Dispose
```csharp
Microsoft.Windows.Shell.ShellContainer.Dispose(System.Boolean)
```
Release resources

|Parameter Name|Remarks|
|--------------|-------|
|disposing|True indicates that this is being called from Dispose(), rather than the finalizer.|


#### GetEnumerator
```csharp
Microsoft.Windows.Shell.ShellContainer.GetEnumerator
```
Enumerates through contents of the ShellObjectContainer
_returns: Enumerated contents_




