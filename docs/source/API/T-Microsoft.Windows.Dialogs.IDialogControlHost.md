---
title: IDialogControlHost
---

# IDialogControlHost
_namespace: [Microsoft.Windows.Dialogs](N-Microsoft.Windows.Dialogs.html)_

Indicates that the implementing class is a dialog that can host
 customizable dialog controls (subclasses of DialogControl).

### Methods

#### ApplyCollectionChanged
```csharp
Microsoft.Windows.Dialogs.IDialogControlHost.ApplyCollectionChanged
```
Applies changes to the collection.

#### ApplyControlPropertyChange
```csharp
Microsoft.Windows.Dialogs.IDialogControlHost.ApplyControlPropertyChange(System.String,Microsoft.Windows.Dialogs.DialogControl)
```
Called when a control currently in the collection 
 has a property changed.

|Parameter Name|Remarks|
|--------------|-------|
|propertyName|The name of the property changed.|
|control|The control whose property has changed.|


#### IsCollectionChangeAllowed
```csharp
Microsoft.Windows.Dialogs.IDialogControlHost.IsCollectionChangeAllowed
```
Returns if changes to the collection are allowed.
_returns: true if collection change is allowed._

#### IsControlPropertyChangeAllowed
```csharp
Microsoft.Windows.Dialogs.IDialogControlHost.IsControlPropertyChangeAllowed(System.String,Microsoft.Windows.Dialogs.DialogControl)
```
Handle notifications of individual child 
 pseudo-controls' properties changing..
 Prefilter should throw if the property 
 cannot be set in the dialog's current state.
 PostProcess should pass on changes to native control, 
 if appropriate.

|Parameter Name|Remarks|
|--------------|-------|
|propertyName|The name of the property.|
|control|The control propertyName applies to.|

_returns: true if the property change is allowed._




