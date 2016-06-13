---
title: ShellPropertyWriter
---

# ShellPropertyWriter
_namespace: [Microsoft.Windows.Shell.PropertySystem](N-Microsoft.Windows.Shell.PropertySystem.html)_

Creates a property writer capable of setting multiple properties for a given ShellObject.

### Methods

#### Close
```csharp
Microsoft.Windows.Shell.PropertySystem.ShellPropertyWriter.Close
```
Call this method to commit the writes (calls to WriteProperty method)
 and dispose off the writer.

#### Dispose
```csharp
Microsoft.Windows.Shell.PropertySystem.ShellPropertyWriter.Dispose(System.Boolean)
```
Release the native and managed objects.

|Parameter Name|Remarks|
|--------------|-------|
|disposing|true to release both managed and unmanaged resources; false to release only unmanaged resources.
 |


#### Finalize
```csharp
Microsoft.Windows.Shell.PropertySystem.ShellPropertyWriter.Finalize
```


#### WriteProperty
```csharp
Microsoft.Windows.Shell.PropertySystem.ShellPropertyWriter.WriteProperty(Microsoft.Windows.Shell.PropertySystem.IShellProperty,System.Object,System.Boolean)
```
Writes the specified property given an IShellProperty and a value. To allow truncation of the given value, set allowTruncatedValue
 to true.

|Parameter Name|Remarks|
|--------------|-------|
|shellProperty|The property name.|
|value|The property value.|
|allowTruncatedValue|True to allow truncation (default); otherwise False.|


#### WriteProperty``1
```csharp
Microsoft.Windows.Shell.PropertySystem.ShellPropertyWriter.WriteProperty``1(Microsoft.Windows.Shell.PropertySystem.ShellProperty{``0},``0,System.Boolean)
```
Writes the specified property given a strongly-typed ShellProperty and a value. To allow truncation of the given value, set allowTruncatedValue
 to true.

|Parameter Name|Remarks|
|--------------|-------|
|shellProperty|The property name.|
|value|The property value.|
|allowTruncatedValue|True to allow truncation (default); otherwise False.|




### Properties

#### ParentShellObject
Reference to parent ShellObject (associated with this writer)

