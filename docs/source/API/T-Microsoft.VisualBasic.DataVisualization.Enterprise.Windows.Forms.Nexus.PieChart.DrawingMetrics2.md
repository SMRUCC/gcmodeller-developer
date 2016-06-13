---
title: DrawingMetrics2
---

# DrawingMetrics2
_namespace: [Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart](N-Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.html)_

Represents the drawing data for a single pie slice. This includes
 GraphicsPath items for each surface and edge of the slice, Regions for
 hit testing, and Pens and Brushes for each surface.

### Methods

#### #ctor
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.DrawingMetrics2.#ctor(Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart,Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChartItem,System.Drawing.Rectangle,System.Single,System.Single)
```
Constructs a new DrawingMetrics.

|Parameter Name|Remarks|
|--------------|-------|
|control|The control this object is associated with.|
|item|The item this object is associated with.|
|startAngle|The start angle of this pie slice, in radians.|
|sweepAngle|The sweep angle of this pie slice, in radians.|


#### AddExteriorFigure
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.DrawingMetrics2.AddExteriorFigure(System.Drawing.Drawing2D.GraphicsPath,System.Drawing.Drawing2D.GraphicsPath,System.Drawing.PointF,System.Drawing.PointF,System.Single,System.Single)
```
Adds an exterior face part to the graphics paths given.

|Parameter Name|Remarks|
|--------------|-------|
|path|The GraphicsPath which represents the surface of the exterior.|
|edgePath|The GraphicsPath which represents the edges on the exterior.|
|rightPoint|The exterior point at the left of the exterior arc.|
|leftPoint|The exterior point at the right of the exterior arc.|
|startAngle|The start angle of the arc.|
|sweepAngle|The sweep angle of the arc.|


#### ChangeColorBrightness
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.DrawingMetrics2.ChangeColorBrightness(System.Drawing.Color,System.Single)
```
Changes the brightness of a color by a correctionFactor, which is an integer between
 -1 and 1. A correction factor of -1 will make the color black, while a correction
 factor of 1 will make the color white.

|Parameter Name|Remarks|
|--------------|-------|
|color|The color to change the brightness of.|
|correctionFactor|The factor to change the color's brightness by.|

_returns: The color with modified brightness._

#### CompareTo
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.DrawingMetrics2.CompareTo(Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.DrawingMetrics2)
```
Compares two DrawingMetrics. The criteria for comparison is what order
 the items should be drawn in.

|Parameter Name|Remarks|
|--------------|-------|
|other|The other object being compared.|

_returns: A positive value if this object is greater, 0 if the objects are equal, or a negative value if this object is less._

#### ConstructGraphics
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.DrawingMetrics2.ConstructGraphics
```
Constructs all of the pens and brushes required for drawing the slice.

#### ConstructPaths
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.DrawingMetrics2.ConstructPaths
```
Constructs all GraphicsPaths which represent every face of the slice.
 These GraphicsPaths are centered at (0,0), and a transform is applied to the Graphics
 object which draws the GraphicsPaths.

#### ConstructRegions
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.DrawingMetrics2.ConstructRegions
```
Constructs regions which represent the boundaries of all faces of the pie slice.

#### CreateEdgePen
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.DrawingMetrics2.CreateEdgePen
```
Creates a brush for drawing the edges.
_returns: A pen used for drawing the edges._

#### CreateExteriorBrush
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.DrawingMetrics2.CreateExteriorBrush
```
Creates a brush for the exterior face.
_returns: A brush used for filling the exterior face._

#### CreateExteriorFace
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.DrawingMetrics2.CreateExteriorFace(System.Drawing.Drawing2D.GraphicsPath@)
```
Creates an exterior face of a pie slice.

|Parameter Name|Remarks|
|--------------|-------|
|edgePath|The GraphicsPath which represents the edges of this face.|

_returns: The GraphicsPath which represents the surface of the face._

#### CreateInteriorBrush
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.DrawingMetrics2.CreateInteriorBrush(System.Single)
```
Creates a brush for drawing the interior edge, based on the angle the edge is shown at.

|Parameter Name|Remarks|
|--------------|-------|
|angle|The angle of the interior edge.|

_returns: A brush used for filling the interior face._

#### CreateInteriorFace
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.DrawingMetrics2.CreateInteriorFace(System.Single,System.Drawing.Drawing2D.GraphicsPath@)
```
Creates an interior face of a pie slice.

|Parameter Name|Remarks|
|--------------|-------|
|angle|The angle of the face.|
|edgePath|The GraphicsPath which represents the edges of this face.|

_returns: The GraphicsPath which represents the surface of the face._

#### CreateSurfaceBrush
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.DrawingMetrics2.CreateSurfaceBrush
```
Creates a brush for the top surface of the slice.
_returns: A brush used for filling the top face._

#### DestroyGraphics
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.DrawingMetrics2.DestroyGraphics
```
Disposes of all pens and brushes.

#### DestroyRegions
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.DrawingMetrics2.DestroyRegions
```
Disposes of all regions.

#### DestroyResources
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.DrawingMetrics2.DestroyResources
```
Disposes of all graphics and regions.

#### GetAlphaTransparentSurfaceColor
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.DrawingMetrics2.GetAlphaTransparentSurfaceColor(System.Drawing.Color)
```
Gets the correct alpha-transparent surface color from a given color. This
 takes into effect the proper brightness correction as well, and differentiates
 between the focused and nonfocused state.

|Parameter Name|Remarks|
|--------------|-------|
|color|The color to transform.|

_returns: The transformed color._

#### GetTextPosition
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.DrawingMetrics2.GetTextPosition
```
Gets the position at which the text of the object should be drawn.
_returns: The point at which the text should be drawn._
> This method returns the center point in the block where the text is drawn.

#### RecreateGraphics
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.DrawingMetrics2.RecreateGraphics
```
Recreates all of the pens and brushes required for drawing the slice.

#### RenderBottom
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.DrawingMetrics2.RenderBottom(System.Drawing.Graphics)
```
Draws the bottom edges of the slice.

|Parameter Name|Remarks|
|--------------|-------|
|g|The Graphics on which the control is being rendered.|


#### RenderExterior
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.DrawingMetrics2.RenderExterior(System.Drawing.Graphics)
```
Draws the exterior faces and edges of the slice.

|Parameter Name|Remarks|
|--------------|-------|
|g|The Graphics on which the control is being rendered.|


#### RenderInterior
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.DrawingMetrics2.RenderInterior(System.Drawing.Graphics)
```
Draws the interior faces and edges of the slice.

|Parameter Name|Remarks|
|--------------|-------|
|g|The Graphics on which the control is being rendered.|


#### RenderText
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.DrawingMetrics2.RenderText(System.Drawing.Graphics)
```
Draws the text of the slice.

|Parameter Name|Remarks|
|--------------|-------|
|g|The Graphics on which the control is being rendered.|


#### RenderTop
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.DrawingMetrics2.RenderTop(System.Drawing.Graphics)
```
Draws the top faces and edges of the slice.

|Parameter Name|Remarks|
|--------------|-------|
|g|The Graphics on which the control is being rendered.|


#### TransformAngle
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.DrawingMetrics2.TransformAngle(System.Single)
```
Transforms the real angle of a pie slice into the angle that can be drawn at the given inclination.
 The angle must be transformed because when the circle representing the pie is drawn inclined,
 the angle on the circle must be made to match the angle on the corresponding ellipse.

|Parameter Name|Remarks|
|--------------|-------|
|angle|The angle on a circle being transformed into an ellipse.|

_returns: The angle as it appears on an ellipse._



### Properties

#### BottomFace
Gets the GraphicsPath that represents the bottom surface.
#### Control
The control this object is associated with.
#### DrawingBounds
Gets or sets the bounds which the whole pie fits in.
#### EdgePen
Gets the pen used for drawing the edges.
#### EndAngle
The end angle of this control, in radians.
#### EndBrush
Gets the brush used for drawing the ending interior surface.
#### EndFace
Gets the GraphicsPath that represents the ending interior surface.
#### EndFaceEdges
Gets the GraphicsPath that represents the edges bordering the ending interior face.
#### ExteriorBrush
Gets the brush used for drawing the exterior surface.
#### ExteriorFace
Gets the GraphicsPath that represents the exterior surface.
#### ExteriorFaceEdges
Gets the GraphicsPath that represents the edges bordering the exterior face.
#### ExteriorRegion
Gets the Region which represents the exterior surface(s).
#### InteriorRegion
Gets the Region which represents the interior surface(s).
#### IsBottomItem
Gets whether or not this slice is a "bottom" slice, meaning that the slice contains pi / 2 in its range
 and is thus at the bottom of the chart on the screen.
#### IsFocused
Gets whether or not the PieChartItem that this DrawingMetrics represents is the focused one.
#### IsLeftItem
Gets whether or not this is a "left" slice, meaning that the slice is bound between
 pi / 2 and 3 * pi / 2 and is thus on the left of the chart on the screen.
#### IsRightItem
Gets whether or not this is a "right" slice, meaning that the slice is bound
 between 3 * pi / 2 and 5 * pi / 2 and is thus on the right of the chart on the screen.
#### IsTopItem
Gets whether or not this slice is a "top" slice, meaning that the slice contains 3*pi / 2 in its range
 and is thus at the top of the chart on the screen.
#### Item
The item this control is associated with.
#### OffsetSize
Gets the offset size of the pie slice. This offset is the real screen offset
 at which the pie slice should be drawn.
#### StartAngle
The start angle of this control, in radians.
#### StartBrush
Gets the brush used for drawing the starting interior surface.
#### StartFace
Gets the GraphicsPath that represents the starting interior surface.
#### StartFaceEdges
Gets the GraphicsPath that represents the edges bordering the starting interior face.
#### SurfaceBrush
Gets the brush used for drawing the top surface.
#### SweepAngle
The sweep angle of this control, in radians.
#### TopFace
Gets the GraphicsPath that represents the top surface.
#### TopRegion
Gets the Region which represents the top surface.
#### TransformedStartAngle
The transformed start angle. See the TransformAngle method for details about why the angles need to be transformed.
#### TransformedSweepAngle
The transformed end angle. See the TransformAngle method for details about why the angles need to be transformed.
#### VisibleRegion
Gets the Region which represents the entire surface.

