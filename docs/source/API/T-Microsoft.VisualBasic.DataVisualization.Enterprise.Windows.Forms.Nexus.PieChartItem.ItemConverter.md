---
title: ItemConverter
---

# ItemConverter
_namespace: [Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChartItem](N-Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChartItem.html)_

Used to convert PieChartItems to an InstanceDescriptor for runtime design.

### Methods

#### CanConvertTo
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChartItem.ItemConverter.CanConvertTo(System.ComponentModel.ITypeDescriptorContext,System.Type)
```
Returns whether this converter can convert the object to the specified type.

|Parameter Name|Remarks|
|--------------|-------|
|context|An ITypeDescriptorContext that provides a format context.|
|destinationType|A Type that represents the type you want to convert to.|

_returns: True if this converter can perform the conversion; otherwise, false._

#### ConvertTo
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChartItem.ItemConverter.ConvertTo(System.ComponentModel.ITypeDescriptorContext,System.Globalization.CultureInfo,System.Object,System.Type)
```
Converts the given value object to the specified type, using the specified context and culture information.

|Parameter Name|Remarks|
|--------------|-------|
|context|An ITypeDescriptorContext that provides a format context.|
|culture|A CultureInfo. If a null reference is passed, the current culture is assumed.|
|value|The Object to convert.|
|destinationType|The type to convert the value parameter to.|

_returns: An object that represents the converted value._




