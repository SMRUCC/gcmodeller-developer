---
title: ShellPropertyFactory
---

# ShellPropertyFactory
_namespace: [Microsoft.Windows.Shell.PropertySystem](N-Microsoft.Windows.Shell.PropertySystem.html)_

Factory class for creating typed ShellProperties.
 Generates/caches expressions to create generic ShellProperties.

### Methods

#### CreateShellProperty
```csharp
Microsoft.Windows.Shell.PropertySystem.ShellPropertyFactory.CreateShellProperty(Microsoft.Windows.Shell.PropertySystem.PropertyKey,Microsoft.Windows.Shell.PropertySystem.IPropertyStore)
```
Creates a generic ShellProperty.

|Parameter Name|Remarks|
|--------------|-------|
|propKey|PropertyKey|
|store|IPropertyStore from which to get property|

_returns: ShellProperty matching type of value in property._

#### VarEnumToSystemType
```csharp
Microsoft.Windows.Shell.PropertySystem.ShellPropertyFactory.VarEnumToSystemType(System.Runtime.InteropServices.VarEnum)
```
Converts VarEnum to its associated .net Type.

|Parameter Name|Remarks|
|--------------|-------|
|VarEnumType|VarEnum value|

_returns: Associated .net equivelent._




