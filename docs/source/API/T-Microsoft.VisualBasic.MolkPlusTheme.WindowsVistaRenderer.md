---
title: WindowsVistaRenderer
---

# WindowsVistaRenderer
_namespace: [Microsoft.VisualBasic.MolkPlusTheme](N-Microsoft.VisualBasic.MolkPlusTheme.html)_

Renders toolstrip items using Windows Vista look and feel

### Methods

#### CreateBottomRadialPath
```csharp
Microsoft.VisualBasic.MolkPlusTheme.WindowsVistaRenderer.CreateBottomRadialPath(System.Drawing.Rectangle)
```
Creates the glow of the buttons

|Parameter Name|Remarks|
|--------------|-------|
|rectangle|-|


#### CreateOverflowChevron
```csharp
Microsoft.VisualBasic.MolkPlusTheme.WindowsVistaRenderer.CreateOverflowChevron(System.Drawing.Size)
```
Creates the chevron for the overflow button

|Parameter Name|Remarks|
|--------------|-------|
|overflowButtonSize|-|


#### DrawGlossyEffect
```csharp
Microsoft.VisualBasic.MolkPlusTheme.WindowsVistaRenderer.DrawGlossyEffect(System.Drawing.Graphics,System.Windows.Forms.ToolStrip,System.Int32)
```
Draws the glossy effect on the toolbar

|Parameter Name|Remarks|
|--------------|-------|
|g|-|
|t|-|


#### DrawVistaButtonBackground
```csharp
Microsoft.VisualBasic.MolkPlusTheme.WindowsVistaRenderer.DrawVistaButtonBackground(System.Drawing.Graphics,System.Drawing.Rectangle,System.Boolean,System.Boolean,System.Boolean)
```
Renders the background of a button on the specified rectangle using the specified device

#### DrawVistaMenuBackground
```csharp
Microsoft.VisualBasic.MolkPlusTheme.WindowsVistaRenderer.DrawVistaMenuBackground(System.Drawing.Graphics,System.Drawing.Rectangle,System.Boolean,System.Boolean)
```
Draws the background of a menu, vista style

|Parameter Name|Remarks|
|--------------|-------|
|g|-|
|r|-|
|highlighted|-|


#### DrawVistaMenuBorder
```csharp
Microsoft.VisualBasic.MolkPlusTheme.WindowsVistaRenderer.DrawVistaMenuBorder(System.Drawing.Graphics,System.Drawing.Rectangle)
```
Draws the border of the vista menu window

|Parameter Name|Remarks|
|--------------|-------|
|g|-|
|r|-|


#### GetToolStripRectangle
```csharp
Microsoft.VisualBasic.MolkPlusTheme.WindowsVistaRenderer.GetToolStripRectangle(System.Windows.Forms.ToolStrip)
```
Gets a rounded rectangle representing the hole area of the toolstrip

|Parameter Name|Remarks|
|--------------|-------|
|toolStrip|-|


#### InitializeToolStripMenuItem
```csharp
Microsoft.VisualBasic.MolkPlusTheme.WindowsVistaRenderer.InitializeToolStripMenuItem(System.Windows.Forms.ToolStripMenuItem)
```
Initializes properties for ToolStripMenuItem objects

|Parameter Name|Remarks|
|--------------|-------|
|item|-|




### Properties

#### BackgroundGlow
Gets ors sets if background glow should be rendered
#### ButtonRadius
Gets or sets the buttons rectangle radius
#### ColorTable
Gets or sets the color table of the renderer
#### GlossyEffect
Gets or sets if glossy effect should be rendered
#### ToolStripRadius
Gets or sets the radius of the rectangle of the hole ToolStrip

