---
title: CheckBox
---

# CheckBox
_namespace: [Microsoft.VisualBasic.MolkPlusTheme.Renderer](N-Microsoft.VisualBasic.MolkPlusTheme.Renderer.html)_



### Methods

#### drawBox
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Renderer.CheckBox.drawBox(System.Drawing.Graphics,System.Drawing.Rectangle,System.Int32,System.Boolean,System.Boolean)
```
Draw a box of a checkbox in the center of a rectangle.

|Parameter Name|Remarks|
|--------------|-------|
|g|Graphics object where the box to be drawn.|
|rect|Rectangle where the box to be drawn.|
|size|Size of the box.|
|enabled|Determine whether checkbox is enabled.|
|hLited|Determine whether checkbox is highlited.|


#### drawCheck
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Renderer.CheckBox.drawCheck(System.Drawing.Graphics,System.Drawing.Rectangle,System.Windows.Forms.CheckState,System.Int32,System.Boolean)
```
Draw a check of a checkbox inside a rectangle.

|Parameter Name|Remarks|
|--------------|-------|
|g|Graphics object where the check to be drawn.|
|rect|Rectangle where the check to be drawn.|
|state|State of the check.|
|size|Size of the check.|
|enabled|Determine whether checkbox is enabled.|


#### drawCheckBox
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Renderer.CheckBox.drawCheckBox(System.Drawing.Graphics,System.Drawing.Rectangle,System.Windows.Forms.CheckState,System.Int32,System.Boolean,System.Boolean)
```
Draw a CheckBox inside a rectangle.

|Parameter Name|Remarks|
|--------------|-------|
|g|Graphics object where the CheckBox to be drawn.|
|rect|Rectangle where the CheckBox to be drawn.|
|state|CheckState of the CheckBox.|
|size|Size of the CheckBox.|
|enabled|Determine whether checkbox is enabled.|
|hLited|Determine whether checkbox is highlited.|

> Minimum value of size is 8.




