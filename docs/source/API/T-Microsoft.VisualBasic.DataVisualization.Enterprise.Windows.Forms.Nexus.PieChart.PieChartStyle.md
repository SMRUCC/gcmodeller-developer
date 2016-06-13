---
title: PieChartStyle
---

# PieChartStyle
_namespace: [Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart](N-Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.html)_

Represents the possible styles corresponding to a PieChart.

### Methods

#### #ctor
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.PieChartStyle.#ctor(Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart)
```
Constructs a new instance of PieChartItemStyle.

|Parameter Name|Remarks|
|--------------|-------|
|container|The control that contains the style.|




### Properties

#### autoSize
Whether or not the pie should be sized to automatically fit the control.
#### AutoSizeMinimumRadius
The minimum radius when the control is auto-sized.
#### AutoSizePie
Gets or sets if the pie should be sized to fit the control. If this property is true,
 the Radius property is ignored.
#### container
The control that contains the style.
#### EllipseHeight
Gets the height of the minor axis of the ellipse. This is half the total
 height of the ellipse.
#### EllipseWidth
Gets the width of the major axis of the ellipse. This is half the total
 width of the ellipse.
#### HeightWidthRatio
Gets the height-width ratio for the ellipse.
#### Inclination
Gets or sets the inclination of the control. This is represented in radians, where an angle of 0
 represents looking at the edge of the control and an angle of pi represents looking
 straight down at the top of the pie.
#### m_inclination
The inclination at which the pie is viewed.
#### m_radius
The radius of the pie.
#### m_rotation
The rotation of the pie.
#### m_showEdges
Whether or not edges should be drawn.
#### m_showToolTips
Whether or not tool tips should be shown on the control.
#### m_textDisplayMode
The text display mode of the control.
#### m_thickness
The thickness of the pie.
#### Radius
Gets or sets radius of the control, in pixels. If AutoSizePie is set to true, this value will be ignored.
#### RadiusInternal
Gets or sets the radius of the control, ignoring the AutoSizePie property.
#### Rotation
Gets or sets the rotation of the pie chart. This is represented in radians, with positive values indicating
 a rotation in the clockwise direction.
#### ShadowBrightnessFactor
Represents the brightness factor used in determining shadow colors.
#### ShowEdges
Gets or sets if edges should be drawn on pie slices. If false, edges are not drawn.
#### ShowToolTips
Gets or sets if tool tips should be shown when the mouse hovers over pie slices. If false, tool tips are not shown.
#### TextDisplayMode
Gets or sets if text should be drawn on pie slices.
#### Thickness
Gets or sets thickness of the pie, in pixels.
#### VisualThickness
Gets the visual thickness of the pie, after the inclination has been taken into account.

