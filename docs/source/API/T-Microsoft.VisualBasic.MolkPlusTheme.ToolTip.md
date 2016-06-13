---
title: ToolTip
---

# ToolTip
_namespace: [Microsoft.VisualBasic.MolkPlusTheme](N-Microsoft.VisualBasic.MolkPlusTheme.html)_

Custom tooltip.

### Methods

#### #ctor
```csharp
Microsoft.VisualBasic.MolkPlusTheme.ToolTip.#ctor
```
ToolTip constructor.

#### hide
```csharp
Microsoft.VisualBasic.MolkPlusTheme.ToolTip.hide
```
Hide the ToolTip.

#### show
```csharp
Microsoft.VisualBasic.MolkPlusTheme.ToolTip.show(System.Windows.Forms.Control,System.Drawing.Rectangle)
```
Show ToolTip with specified control and rectangle area. This area is where the tooltip must avoid to cover.



### Properties

#### AnimationSpeed
Specifies fade effect period when the tooltip is displayed or hiden, in milliseconds.
#### AutoClose
Period of time the ToolTip is displayed, in milliseconds.
#### CustomLocation
Custom location where the ToolTip will be displayed.
 Used when the Location property is set CustomScreen or CustomClient.
#### EnableAutoClose
Automatically close the ToolTip when the specified time in AutoClose property has been passed.
#### Location
Determine how the ToolTip will be located.
#### OwnerDraw
ToolTip surface will be manually drawn by your code.
#### OwnerDrawBackground
ToolTip background will be manually drawn by your code.
 If this property is set to true, the Draw and Popup event will be raised as well, 
 and the whole ToolTip will be drawn by your code.
#### ShowShadow
Show the shadow effect of the tooltip. This property is ignored when OwnerDrawBackground property is set to true.

