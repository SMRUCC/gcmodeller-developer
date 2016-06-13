---
title: PieChartItem
---

# PieChartItem
_namespace: [Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus](N-Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.html)_

Represents a single pie slice in a pie chart.

### Methods

#### #ctor
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChartItem.#ctor(System.Runtime.Serialization.SerializationInfo,System.Runtime.Serialization.StreamingContext)
```
Constructs a new instance.

|Parameter Name|Remarks|
|--------------|-------|
|info|The serialization information for deserialization.|
|context|The context for deserialization.|


#### Clone
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChartItem.Clone
```
Makes an exact copy of this item.
_returns: A new replica of this item._

#### Deserialize
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChartItem.Deserialize(System.Runtime.Serialization.SerializationInfo,System.Runtime.Serialization.StreamingContext)
```
Loads the state of the item from the specified SerializationInfo.

|Parameter Name|Remarks|
|--------------|-------|
|info|The SerializationInfo that describes the item.|
|context|The state of the stream during deserialization.|


#### GetObjectData
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChartItem.GetObjectData(System.Runtime.Serialization.SerializationInfo,System.Runtime.Serialization.StreamingContext)
```
Populates a SerializationInfo with the data needed to serialize the target object.

|Parameter Name|Remarks|
|--------------|-------|
|info|The SerializationInfo to populate with data.|
|context|The destination for this serialization.|


#### MarkStructure
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChartItem.MarkStructure
```
Shortcut method to inform the control that the structure has changed.

#### MarkVisual
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChartItem.MarkVisual(System.Boolean)
```
Shortcut method to inform the control that the control needs refreshing.

|Parameter Name|Remarks|
|--------------|-------|
|recreateGraphics|True if the underlying pens and brushes need to be recreated.|


#### Serialize
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChartItem.Serialize(System.Runtime.Serialization.SerializationInfo,System.Runtime.Serialization.StreamingContext)
```
Populates a SerializationInfo with the data needed to serialize the target object.

|Parameter Name|Remarks|
|--------------|-------|
|info|The SerializationInfo to populate with data.|
|context|The destination for this serialization.|


#### SetOwner
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChartItem.SetOwner(Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart)
```
Sets the owning control.

|Parameter Name|Remarks|
|--------------|-------|
|control|The control that contains this item.|




### Properties

#### _Color
The fill color of the item.
#### _Offset
The offset of the item from the center of the pie, in pixels.
#### _Tag
A user-defined tag object
#### _Text
The textual representation of the item.
#### _ToolTipText
The tool tip text displayed when the mouse hovers over the item.
#### _Weight
The weight the item has.
#### Color
Gets or sets the fill color of the item.
#### Offset
Gets or sets the offset of the item from the center of the pie, in pixels.
#### owner
The control which contains this item.
#### Percent
Gets the percent of the control occupied by this item.
#### Tag
Gets or sets a user-defined tag value.
#### Text
Gets or sets the textual representation of the item.
#### ToolTipText
Gets or sets the tool tip text displayed when the mouse hovers over the item.
#### Weight
Gets or sets the weight the item has. This weight is taken over the total weight of all items
 to determine how large of an angle this slice has.

