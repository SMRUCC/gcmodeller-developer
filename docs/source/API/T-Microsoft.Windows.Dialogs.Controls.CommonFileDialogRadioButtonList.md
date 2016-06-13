---
title: CommonFileDialogRadioButtonList
---

# CommonFileDialogRadioButtonList
_namespace: [Microsoft.Windows.Dialogs.Controls](N-Microsoft.Windows.Dialogs.Controls.html)_

Represents a radio button list for the Common File Dialog.

### Methods

#### #ctor
```csharp
Microsoft.Windows.Dialogs.Controls.CommonFileDialogRadioButtonList.#ctor(System.String)
```
Creates a new instance of this class with the specified name.

|Parameter Name|Remarks|
|--------------|-------|
|name|The name of this control.|


#### Attach
```csharp
Microsoft.Windows.Dialogs.Controls.CommonFileDialogRadioButtonList.Attach(Microsoft.Windows.Dialogs.IFileDialogCustomize)
```
Attach the RadioButtonList control to the dialog object

|Parameter Name|Remarks|
|--------------|-------|
|dialog|The target dialog|


#### ICommonFileDialogIndexedControls_RaiseSelectedIndexChangedEvent
```csharp
Microsoft.Windows.Dialogs.Controls.CommonFileDialogRadioButtonList.ICommonFileDialogIndexedControls_RaiseSelectedIndexChangedEvent
```
Occurs when the user changes the SelectedIndex.
> Because this method is defined in an interface, we can either
>  have it as public, or make it private and explicitly implement (like below).
>  Making it public doesn't really help as its only internal (but can't have this 
>  internal because of the interface)
>  



### Properties

#### Items
Gets the collection of CommonFileDialogRadioButtonListItem objects
#### SelectedIndex
Gets or sets the current index of the selected item.

