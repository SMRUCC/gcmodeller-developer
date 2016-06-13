---
title: CommonFileDialogControl
---

# CommonFileDialogControl
_namespace: [Microsoft.Windows.Dialogs.Controls](N-Microsoft.Windows.Dialogs.Controls.html)_

Defines an abstract class that supports shared functionality for the 
 common file dialog controls.

### Methods

#### #ctor
```csharp
Microsoft.Windows.Dialogs.Controls.CommonFileDialogControl.#ctor(System.String,System.String)
```
Creates a new instance of this class with the specified name and text.

|Parameter Name|Remarks|
|--------------|-------|
|name|The name of the common file dialog control.|
|text|The text of the common file dialog control.|


#### Attach
```csharp
Microsoft.Windows.Dialogs.Controls.CommonFileDialogControl.Attach(Microsoft.Windows.Dialogs.IFileDialogCustomize)
```
Attach the custom control itself to the specified dialog

|Parameter Name|Remarks|
|--------------|-------|
|dialog|the target dialog|




### Properties

#### Enabled
Gets or sets a value that determines if this control is enabled.
#### IsAdded
Has this control been added to the dialog
#### Text
Gets or sets the text string that is displayed on the control.
#### textValue
Holds the text that is displayed for this control.
#### Visible
Gets or sets a boolean value that indicates whether 
 this control is visible.

