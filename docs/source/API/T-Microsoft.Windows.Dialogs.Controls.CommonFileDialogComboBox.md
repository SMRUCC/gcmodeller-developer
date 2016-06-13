---
title: CommonFileDialogComboBox
---

# CommonFileDialogComboBox
_namespace: [Microsoft.Windows.Dialogs.Controls](N-Microsoft.Windows.Dialogs.Controls.html)_

Creates the ComboBox controls in the Common File Dialog.

### Methods

#### #ctor
```csharp
Microsoft.Windows.Dialogs.Controls.CommonFileDialogComboBox.#ctor(System.String)
```
Creates a new instance of this class with the specified name.

|Parameter Name|Remarks|
|--------------|-------|
|name|Text to display for this control|


#### Attach
```csharp
Microsoft.Windows.Dialogs.Controls.CommonFileDialogComboBox.Attach(Microsoft.Windows.Dialogs.IFileDialogCustomize)
```
Attach the ComboBox control to the dialog object

|Parameter Name|Remarks|
|--------------|-------|
|dialog|The target dialog|


#### ICommonFileDialogIndexedControls_RaiseSelectedIndexChangedEvent
```csharp
Microsoft.Windows.Dialogs.Controls.CommonFileDialogComboBox.ICommonFileDialogIndexedControls_RaiseSelectedIndexChangedEvent
```
Raises the SelectedIndexChanged event if this control is 
 enabled.
> Because this method is defined in an interface, we can either
>  have it as public, or make it private and explicitly implement (like below).
>  Making it public doesn't really help as its only internal (but can't have this 
>  internal because of the interface)
>  



### Properties

#### Items
Gets the collection of CommonFileDialogComboBoxItem objects.
#### SelectedIndex
Gets or sets the current index of the selected item.

