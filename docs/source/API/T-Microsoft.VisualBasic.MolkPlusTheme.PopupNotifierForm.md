---
title: PopupNotifierForm
---

# PopupNotifierForm
_namespace: [Microsoft.VisualBasic.MolkPlusTheme](N-Microsoft.VisualBasic.MolkPlusTheme.html)_

This is the form of the actual notification window.

### Methods

#### #ctor
```csharp
Microsoft.VisualBasic.MolkPlusTheme.PopupNotifierForm.#ctor(Microsoft.VisualBasic.MolkPlusTheme.PopupNotifier)
```
Create a new instance.

|Parameter Name|Remarks|
|--------------|-------|
|parent__1|PopupNotifier|


#### AddValueMax255
```csharp
Microsoft.VisualBasic.MolkPlusTheme.PopupNotifierForm.AddValueMax255(System.Int32,System.Int32)
```
Add two values but do not return a value greater than 255.

|Parameter Name|Remarks|
|--------------|-------|
|input|first value|
|add|value to add|

_returns: sum of both values_

#### DedValueMin0
```csharp
Microsoft.VisualBasic.MolkPlusTheme.PopupNotifierForm.DedValueMin0(System.Int32,System.Int32)
```
Subtract two values but do not returns a value below 0.

|Parameter Name|Remarks|
|--------------|-------|
|input|first value|
|ded|value to subtract|

_returns: first value minus second value_

#### Dispose
```csharp
Microsoft.VisualBasic.MolkPlusTheme.PopupNotifierForm.Dispose(System.Boolean)
```
Dispose GDI objects.

|Parameter Name|Remarks|
|--------------|-------|
|disposing|-|


#### DisposeGDIObjects
```csharp
Microsoft.VisualBasic.MolkPlusTheme.PopupNotifierForm.DisposeGDIObjects
```
Free all GDI objects.

#### GetDarkerColor
```csharp
Microsoft.VisualBasic.MolkPlusTheme.PopupNotifierForm.GetDarkerColor(System.Drawing.Color)
```
Returns a color which is darker than the given color.

|Parameter Name|Remarks|
|--------------|-------|
|color|Color|

_returns: darker color_

#### GetLighterColor
```csharp
Microsoft.VisualBasic.MolkPlusTheme.PopupNotifierForm.GetLighterColor(System.Drawing.Color)
```
Returns a color which is lighter than the given color.

|Parameter Name|Remarks|
|--------------|-------|
|color|Color|

_returns: lighter color_

#### InitializeComponent
```csharp
Microsoft.VisualBasic.MolkPlusTheme.PopupNotifierForm.InitializeComponent
```
Used in design mode.

#### OptionsMenu_Closed
```csharp
Microsoft.VisualBasic.MolkPlusTheme.PopupNotifierForm.OptionsMenu_Closed(System.Object,System.Windows.Forms.ToolStripDropDownClosedEventArgs)
```
The options popup menu has been closed.

|Parameter Name|Remarks|
|--------------|-------|
|sender|-|
|e|-|


#### PopupNotifierForm_MouseMove
```csharp
Microsoft.VisualBasic.MolkPlusTheme.PopupNotifierForm.PopupNotifierForm_MouseMove(System.Object,System.Windows.Forms.MouseEventArgs)
```
Update form to display hover styles when the mouse moves over the notification form.

|Parameter Name|Remarks|
|--------------|-------|
|sender|-|
|e|-|


#### PopupNotifierForm_MouseUp
```csharp
Microsoft.VisualBasic.MolkPlusTheme.PopupNotifierForm.PopupNotifierForm_MouseUp(System.Object,System.Windows.Forms.MouseEventArgs)
```
A mouse button has been released, check if something has been clicked.

|Parameter Name|Remarks|
|--------------|-------|
|sender|-|
|e|-|


#### PopupNotifierForm_Paint
```csharp
Microsoft.VisualBasic.MolkPlusTheme.PopupNotifierForm.PopupNotifierForm_Paint(System.Object,System.Windows.Forms.PaintEventArgs)
```
Draw the notification form.

|Parameter Name|Remarks|
|--------------|-------|
|sender|-|
|e|-|


#### PopupNotifierForm_VisibleChanged
```csharp
Microsoft.VisualBasic.MolkPlusTheme.PopupNotifierForm.PopupNotifierForm_VisibleChanged(System.Object,System.EventArgs)
```
The form is shown/hidden.

|Parameter Name|Remarks|
|--------------|-------|
|sender|-|
|e|-|




### Properties

#### Parent
Gets or sets the parent control.
#### RectClose
gets the rectangle of the close button.
#### RectContentText
Gets the rectangle of the content text.
#### RectOptions
Gets the rectangle of the options button.

