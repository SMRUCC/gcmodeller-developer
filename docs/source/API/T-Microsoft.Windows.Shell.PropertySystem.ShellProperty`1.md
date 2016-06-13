---
title: ShellProperty`1
---

# ShellProperty`1
_namespace: [Microsoft.Windows.Shell.PropertySystem](N-Microsoft.Windows.Shell.PropertySystem.html)_

Defines a strongly-typed property object. 
 All writable property objects must be of this type 
 to be able to call the value setter.

### Methods

#### #ctor
```csharp
Microsoft.Windows.Shell.PropertySystem.ShellProperty`1.#ctor(Microsoft.Windows.Shell.PropertySystem.PropertyKey,Microsoft.Windows.Shell.PropertySystem.ShellPropertyDescription,Microsoft.Windows.Shell.PropertySystem.IPropertyStore)
```
Constructs a new Property object

|Parameter Name|Remarks|
|--------------|-------|
|propertyKey|-|
|description|-|
|propertyStore|-|


#### ClearValue
```csharp
Microsoft.Windows.Shell.PropertySystem.ShellProperty`1.ClearValue
```
Clears the value of the property.

#### FormatForDisplay
```csharp
Microsoft.Windows.Shell.PropertySystem.ShellProperty`1.FormatForDisplay(Microsoft.Windows.Shell.PropertySystem.PropertyDescriptionFormatOptions)
```
Returns a formatted, Unicode string representation of a property value.

|Parameter Name|Remarks|
|--------------|-------|
|format|One or more of the PropertyDescriptionFormat flags 
 that indicate the desired format.|

_returns: The formatted value as a string, or null if this property 
 cannot be formatted for display._

#### TryFormatForDisplay
```csharp
Microsoft.Windows.Shell.PropertySystem.ShellProperty`1.TryFormatForDisplay(Microsoft.Windows.Shell.PropertySystem.PropertyDescriptionFormatOptions,System.String@)
```
Returns a formatted, Unicode string representation of a property value.

|Parameter Name|Remarks|
|--------------|-------|
|format|One or more of the PropertyDescriptionFormat flags 
 that indicate the desired format.|
|formattedString|The formatted value as a string, or null if this property 
 cannot be formatted for display.|

_returns: True if the method successfully locates the formatted string; otherwise 
 False._



### Properties

#### AllowSetTruncatedValue
Gets or sets a value that determines if a value can be truncated. The default for this property is false.
#### CanonicalName
Gets the case-sensitive name of a property as it is known to the system,
 regardless of its localized name.
#### Description
Get the property description object.
#### IconReference
Gets the image reference path and icon index associated with a property value (Windows 7 only).
#### PropertyKey
Gets the property key identifying this property.
#### Value
Gets or sets the strongly-typed value of this property.
 The value of the property is cleared if the value is set to null.
#### ValueAsObject
Gets the value for this property using the generic Object type.
 To obtain a specific type for this value, use the more type strong
 Property<T> class.
 Also, you can only set a value for this type using Property<T>
#### ValueType
Gets the associated runtime type.

