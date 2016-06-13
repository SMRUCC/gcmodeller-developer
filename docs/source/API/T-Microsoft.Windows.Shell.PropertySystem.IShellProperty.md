---
title: IShellProperty
---

# IShellProperty
_namespace: [Microsoft.Windows.Shell.PropertySystem](N-Microsoft.Windows.Shell.PropertySystem.html)_

Defines the properties used by a Shell Property.

### Methods

#### FormatForDisplay
```csharp
Microsoft.Windows.Shell.PropertySystem.IShellProperty.FormatForDisplay(Microsoft.Windows.Shell.PropertySystem.PropertyDescriptionFormatOptions)
```
Gets a formatted, Unicode string representation of a property value.

|Parameter Name|Remarks|
|--------------|-------|
|format|One or more PropertyDescriptionFormat flags 
 chosen to produce the desired display format.|

_returns: The formatted value as a string._



### Properties

#### CanonicalName
Gets the case-sensitive name of the property as it is known to the system, 
 regardless of its localized name.
#### Description
Get the property description object.
#### IconReference
Gets the image reference path and icon index associated with a property value. 
 This API is only available in Windows 7.
#### PropertyKey
Gets the property key that identifies this property.
#### ValueAsObject
Gets the value for this property using the generic Object type.
#### ValueType
Gets the System.Type value for this property.

