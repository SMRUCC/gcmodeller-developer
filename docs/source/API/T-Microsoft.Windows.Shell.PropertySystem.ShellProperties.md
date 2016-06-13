---
title: ShellProperties
---

# ShellProperties
_namespace: [Microsoft.Windows.Shell.PropertySystem](N-Microsoft.Windows.Shell.PropertySystem.html)_

Defines a partial class that implements helper methods for retrieving Shell properties
 using a canonical name, property key, or a strongly-typed property. Also provides
 access to all the strongly-typed system properties and default properties collections.

### Methods

#### Dispose
```csharp
Microsoft.Windows.Shell.PropertySystem.ShellProperties.Dispose(System.Boolean)
```
Cleans up memory

#### GetProperty
```csharp
Microsoft.Windows.Shell.PropertySystem.ShellProperties.GetProperty(System.String)
```
Returns a property available in the default property collection using 
 the given canonical name.

|Parameter Name|Remarks|
|--------------|-------|
|canonicalName|The canonical name.|

_returns: An IShellProperty._

#### GetProperty``1
```csharp
Microsoft.Windows.Shell.PropertySystem.ShellProperties.GetProperty``1(System.String)
```
Returns a strongly typed property available in the default property collection using 
 the given canonical name.

|Parameter Name|Remarks|
|--------------|-------|
|canonicalName|The canonical name.|

_returns: A strongly-typed ShellProperty for the given canonical name._

#### GetPropertyWriter
```csharp
Microsoft.Windows.Shell.PropertySystem.ShellProperties.GetPropertyWriter
```
Returns the shell property writer used when writing multiple properties.
_returns: A ShellPropertyWriter._
> Use the Using pattern with the returned ShellPropertyWriter or
>  manually call the Close method on the writer to commit the changes 
>  and dispose the writer



### Properties

#### DefaultPropertyCollection
Gets the collection of all the default properties for this item.
#### System
Gets all the properties for the system through an accessor.

