---
title: ShellPropertyCollection
---

# ShellPropertyCollection
_namespace: [Microsoft.Windows.Shell.PropertySystem](N-Microsoft.Windows.Shell.PropertySystem.html)_

Creates a readonly collection of IProperty objects.

### Methods

#### #ctor
```csharp
Microsoft.Windows.Shell.PropertySystem.ShellPropertyCollection.#ctor(System.String)
```
Creates a new ShellPropertyCollection object with the specified file or folder path.

|Parameter Name|Remarks|
|--------------|-------|
|path|The path to the file or folder.|


#### Contains
```csharp
Microsoft.Windows.Shell.PropertySystem.ShellPropertyCollection.Contains(Microsoft.Windows.Shell.PropertySystem.PropertyKey)
```
Checks if a property with the given property key is available.

|Parameter Name|Remarks|
|--------------|-------|
|key|The property key.|

_returns: True if available, false otherwise._

#### Dispose
```csharp
Microsoft.Windows.Shell.PropertySystem.ShellPropertyCollection.Dispose
```
Release the native objects.

#### Finalize
```csharp
Microsoft.Windows.Shell.PropertySystem.ShellPropertyCollection.Finalize
```
Implement the finalizer.



### Properties

#### Item
Gets a property associated with the supplied property key.

