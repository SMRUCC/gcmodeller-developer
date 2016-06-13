---
title: DialogControl
---

# DialogControl
_namespace: [Microsoft.Windows.Dialogs](N-Microsoft.Windows.Dialogs.html)_

Abstract base class for all dialog controls

### Methods

#### #ctor
```csharp
Microsoft.Windows.Dialogs.DialogControl.#ctor(System.String)
```
Creates a new instance of a dialog control with the specified name.

|Parameter Name|Remarks|
|--------------|-------|
|name__1|The name for this dialog.|


#### ApplyPropertyChange
```csharp
Microsoft.Windows.Dialogs.DialogControl.ApplyPropertyChange(System.String)
```
Calls the hosting dialog, if it exists, to
 to indicate that a property has changed, and that 
 the dialog should do whatever is necessary 
 to propagate the change to the native control.
 Note that if the dialog isn't set yet, 
 there are no restrictions on setting the property.

|Parameter Name|Remarks|
|--------------|-------|
|propName|The name of the property that is changing.|


#### CheckPropertyChangeAllowed
```csharp
Microsoft.Windows.Dialogs.DialogControl.CheckPropertyChangeAllowed(System.String)
```
Calls the hosting dialog, if it exists, to check whether the 
 property can be set in the dialog's current state. 
 The host should throw an exception if the change is not supported.
 Note that if the dialog isn't set yet, 
 there are no restrictions on setting the property.

|Parameter Name|Remarks|
|--------------|-------|
|propName|The name of the property that is changing|


#### Equals
```csharp
Microsoft.Windows.Dialogs.DialogControl.Equals(System.Object)
```
Compares two objects to determine whether they are equal

|Parameter Name|Remarks|
|--------------|-------|
|obj|The object to compare against.|

_returns: A @"T:System.Boolean" value._

#### GetHashCode
```csharp
Microsoft.Windows.Dialogs.DialogControl.GetHashCode
```
Serves as a hash function for a particular type.
_returns: An @"T:System.Int32" hash code for this control._



### Properties

#### HostingDialog
The native dialog that is hosting this control. This property is null is
 there is not associated dialog
#### Id
Gets the identifier for this control.
#### Name
Gets the name for this control.

