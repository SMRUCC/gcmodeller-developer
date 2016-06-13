---
title: PieChart
---

# PieChart
_namespace: [Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus](N-Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.html)_

A control for displaying pie charts.

### Methods

#### #ctor
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.#ctor
```
Constructs a new instance of a PieChart.

#### AttachPrintDocument
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.AttachPrintDocument(System.Drawing.Printing.PrintDocument)
```
Registers a PrintDocument to print this pie chart.

|Parameter Name|Remarks|
|--------------|-------|
|doc|The PrintDocument to register.|


#### BeginModification
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.BeginModification
```
Starts a modification transaction. As long as any modification trasactions are open,
 the changes made to the control will not be reflected. It is necessary to call
 EndModification for each call to BeginModification; otherwise, the control will
 never redraw.

#### ConstructDrawingMetrics
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.ConstructDrawingMetrics(System.Drawing.Rectangle,System.Windows.Forms.Padding)
```
Constructs the array of DrawingMetrics, which store drawing information about each pie slice.

#### DestructDrawingMetrics
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.DestructDrawingMetrics(Microsoft.VisualBasic.List{Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.DrawingMetrics2})
```
Destroys all of the DrawingMetrics currently in the array by releasing all of their resources.

#### EndModification
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.EndModification
```
Ends a modification transaction. As long as any modification trasactions are open,
 the changes made to the control will not be reflected. It is necessary to call
 EndModification for each call to BeginModification; otherwise, the control will
 never redraw.

#### FireAutoSizePieChanged
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.FireAutoSizePieChanged
```
Called to fire an AutoSizePieChanged event.

#### FireInclinationChanged
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.FireInclinationChanged
```
Called to fire an InclinationChanged event.

#### FireItemClicked
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.FireItemClicked(Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChartItem)
```
Called to fire an ItemClicked event.

|Parameter Name|Remarks|
|--------------|-------|
|item|The event arguments.|


#### FireItemDoubleClicked
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.FireItemDoubleClicked(Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChartItem)
```
Called to fire an ItemDoubleClicked event.

|Parameter Name|Remarks|
|--------------|-------|
|item|The event arguments.|


#### FireItemFocusChanged
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.FireItemFocusChanged
```
Called to fire an ItemFocusChanged event.

#### FireItemFocusChanging
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.FireItemFocusChanging(Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChartItem,Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChartItem)
```
Called to fire an ItemFocusChanging event.

|Parameter Name|Remarks|
|--------------|-------|
|oldItem|The item that was previously focused.|
|newItem|The item that is gaining focus.|


#### FireRadiusChanged
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.FireRadiusChanged
```
Called to fire an RadiusChanged event.

#### FireRotationChanged
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.FireRotationChanged
```
Called to fire an RotationChanged event.

#### FireShowEdgesChanged
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.FireShowEdgesChanged
```
Called to fire an ShowEdgesChanged event.

#### FireShowToolTipsChanged
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.FireShowToolTipsChanged
```
Called to fire an ShowToolTipsChanged event.

#### FireTextDisplayModeChanged
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.FireTextDisplayModeChanged
```
Called to fire an TextDisplayModeChanged event.

#### FireThicknessChanged
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.FireThicknessChanged
```
Called to fire an ThicknessChanged event.

#### GetAutoSizeRadius
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.GetAutoSizeRadius(System.Drawing.Rectangle,System.Windows.Forms.Padding)
```
Calculates the radius that will be used for autosizing the pie to fit the control.
_returns: The radius that will fit the pie in the control bounds._

#### GetMaximumItemOffset
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.GetMaximumItemOffset
```
Gets the maximum offset of all PieChartItems in the Items collection.
_returns: The maximum offset of all items._

#### HitTest
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.HitTest(System.Drawing.PointF)
```
Performs a hit test to see which PieChartItem is under the current mouse position.

|Parameter Name|Remarks|
|--------------|-------|
|controlPoint|The untranslated point given by the mouse move notification.|

_returns: The DrawingMetrics of the item under the point, or null if no item is there._

#### MarkStructuralChange
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.MarkStructuralChange
```
Sets a flag that indicates the control has changed structurally, and that DrawingMetrics
 will need to be completely recreated.

#### MarkVisualChange
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.MarkVisualChange(System.Boolean)
```
Sets a flag that indicates the control needs to be refreshed. If recreateGraphics is true,
 then pens and brushes will be recreated.

|Parameter Name|Remarks|
|--------------|-------|
|recreateGraphics|True if pens and brushes should be recreated.|


#### OnDoubleClick
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.OnDoubleClick(System.EventArgs)
```
Handles the DoubleClick event.

|Parameter Name|Remarks|
|--------------|-------|
|e|The event arguments.|


#### OnMouseClick
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.OnMouseClick(System.Windows.Forms.MouseEventArgs)
```
Handles the MouseClick event.

|Parameter Name|Remarks|
|--------------|-------|
|e|The event arguments.|


#### OnMouseEnter
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.OnMouseEnter(System.EventArgs)
```
Handles the MouseEnter event.

|Parameter Name|Remarks|
|--------------|-------|
|e|The event arguments.|


#### OnMouseLeave
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.OnMouseLeave(System.EventArgs)
```
Handles the MouseLeave event.

|Parameter Name|Remarks|
|--------------|-------|
|e|The event arguments.|


#### OnMouseMove
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.OnMouseMove(System.Windows.Forms.MouseEventArgs)
```
Handles the MouseMove event.

|Parameter Name|Remarks|
|--------------|-------|
|e|The event arguments.|


#### OnPaddingChanged
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.OnPaddingChanged(System.EventArgs)
```
Handles the PaddingChanged event.

|Parameter Name|Remarks|
|--------------|-------|
|e|The event arguments.|


#### OnPaint
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.OnPaint(System.Windows.Forms.PaintEventArgs)
```
Handles the painting of the control.

|Parameter Name|Remarks|
|--------------|-------|
|pe|The paint event arguments.|


#### OnPrintPage
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.OnPrintPage(System.Object,System.Drawing.Printing.PrintPageEventArgs)
```
Called by a registered PrintDocument to control printing of the chart.

|Parameter Name|Remarks|
|--------------|-------|
|sender|The sender.|
|e|The event arguments.|


#### OnSizeChanged
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.OnSizeChanged(System.EventArgs)
```
Handles the SizeChanged event.

|Parameter Name|Remarks|
|--------------|-------|
|e|The event arguments.|


#### RecreateGraphics2
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.RecreateGraphics2(Microsoft.VisualBasic.List{Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.DrawingMetrics2},System.Drawing.Rectangle)
```
Recreates all of the pens and brushes used by the DrawingMetrics that have been constructed.

#### Render
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.Render(System.Drawing.Graphics,Microsoft.VisualBasic.List{Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.DrawingMetrics2},System.Drawing.Rectangle,System.Windows.Forms.Padding)
```
Renders the given DrawingMetrics, which are calculated using ConstructDrawingMetrics.

|Parameter Name|Remarks|
|--------------|-------|
|g|The graphics surface on which the chart is being rendered.|
|drawingMetrics|The drawing metrics to render.|


#### SaveAs
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.SaveAs(System.String,Microsoft.VisualBasic.Imaging.ImageFormats,System.Drawing.Size,System.Windows.Forms.Padding)
```
Saves the chart as an image.

|Parameter Name|Remarks|
|--------------|-------|
|fileName|The path to the file where the image will be saved.|
|format|The format to save the image in.|
|sizeInPixels|The size of the image, in pixels.|
|padding|The padding which defines the border of the image.|


#### SetFocusedItem
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.SetFocusedItem(Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChartItem)
```
Set the currently focused PieChartItem.

|Parameter Name|Remarks|
|--------------|-------|
|item|The item that currently has mouse focus.|




### Properties

#### _FocusedItem
The PieChartItem that has mouse focus.
#### _FocusedItemStyle
The style for focused items.
#### _Items
The collection which holds PieChartItems
#### _ItemStyle
The style for default (non-focused) items.
#### _Style
The collection of styles that apply to this PieChart.
#### AutoSizePie
Gets or sets if the pie should be sized to fit the control. If this property is true,
 the Radius property is ignored.
#### drawingMetrics
A list of DrawingMetrics objects that store calculated drawing data about each pie slice.
#### FocusedItem
The PieChartItem that has mouse focus.
#### FocusedItemStyle
The collection of styles that apply to this PieChart.
#### Inclination
Gets or sets the inclination of the control. This is represented in radians, where an angle of 0
 represents looking at the edge of the control and an angle of pi represents looking
 straight down at the top of the pie.
#### isStructureChanged
True if the structure of the pie has changed and the layout needs to be recalculated.
#### isVisualChanged
True if the pie needs to be redrawn.
#### Items
The collection which holds PieChartItems
#### ItemStyle
The collection of styles that apply to this PieChart.
#### Radius
Gets or sets radius of the control, in pixels. If AutoSizePie is set to true, this value will be ignored.
#### recreateGraphics
True if the underlying pens and brushes need to be recreated when the control is redrawn.
#### Rotation
Gets or sets the rotation of the pie chart. This is represented in radians, with positive values indicating
 a rotation in the clockwise direction.
#### ShowEdges
Gets or sets if edges should be drawn on pie slices. If false, edges are not drawn.
#### ShowToolTips
Gets or sets if tool tips should be shown when the mouse hovers over pie slices. If false, tool tips are not shown.
#### Style
The collection of styles that apply to this PieChart.
#### TextDisplayMode
Gets or sets if text should be drawn on pie slices.
#### Thickness
Gets or sets thickness of the pie, in pixels.
#### toolTip
The ToolTip control that is used when hovering over pie slices.
#### toolTipDefaultDelay
The default ToolTip delay, which is stored when the delay is overwritten by this control.
#### transactionRef
A reference counter for the number of change transactions that have been begun and not ended.

