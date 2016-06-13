---
title: CommonFileDialogTextBox
---

# CommonFileDialogTextBox
_namespace: [Microsoft.Windows.Dialogs.Controls](N-Microsoft.Windows.Dialogs.Controls.html)_

Defines the text box controls in the Common File Dialog.

### Methods

#### #ctor
```csharp
Microsoft.Windows.Dialogs.Controls.CommonFileDialogTextBox.#ctor(System.String,System.String)
```
Creates a new instance of this class with the specified name and text.

|Parameter Name|Remarks|
|--------------|-------|
|name|The name of this control.|
|text|The text to display for this control.|


#### Attach
```csharp
Microsoft.Windows.Dialogs.Controls.CommonFileDialogTextBox.Attach(Microsoft.Windows.Dialogs.IFileDialogCustomize)
```
Attach the TextBox control to the dialog object

|Parameter Name|Remarks|
|--------------|-------|
|dialog|Target dialog|




### Properties

#### customizedDialog
Holds an instance of the customized (/native) dialog and should
 be null until after the Attach() call is made.
#### Text
Gets or sets a value for the text string contained in the CommonFileDialogTextBox.

