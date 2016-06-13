---
title: ToolTip
---

# ToolTip
_namespace: [Microsoft.VisualBasic.MolkPlusTheme.Renderer](N-Microsoft.VisualBasic.MolkPlusTheme.Renderer.html)_



### Methods

#### containsToolTip
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Renderer.ToolTip.containsToolTip(System.String,System.String,System.Drawing.Image)
```
Determine if a tooltip information isnot empty.

|Parameter Name|Remarks|
|--------------|-------|
|title|Tooltip title.|
|text|Tooltip text.|
|img|Tooltip image.|

_returns: Boolean._

#### drawToolTip
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Renderer.ToolTip.drawToolTip(System.String,System.String,System.Drawing.Image,System.Drawing.Graphics,System.Drawing.Rectangle)
```
Draw tooltip information on a tooltip window.

|Parameter Name|Remarks|
|--------------|-------|
|title|Tooltip title.|
|text|Tooltip text.|
|img|Tooltip image.|
|g|Graphics object used to paint.|
|rect|Bounding rectangle where tooltip information to be drawn.|


#### getContent
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Renderer.ToolTip.getContent(System.String,System.String,System.Drawing.Image)
```
Get the content of the tooltip information.

|Parameter Name|Remarks|
|--------------|-------|
|title|Tooltip title.|
|text|Tooltip text.|
|image|Tooltip image.|

_returns: @"T:Microsoft.VisualBasic.MolkPlusTheme.Renderer.ToolTip.Content"_

#### measureSize
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Renderer.ToolTip.measureSize(System.String,System.String,System.Drawing.Image)
```
Measure the size of a tooltip based on its contents.

|Parameter Name|Remarks|
|--------------|-------|
|title|Tooltip title.|
|text|Tooltip text.|
|img|Tooltip image.|

_returns: Size._



### Properties

#### SeparatorPen
A pen for drawing line separator in tooltip.
#### TextBrush
A brush for drawing a string in tooltip.

