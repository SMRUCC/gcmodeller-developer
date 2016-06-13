---
title: SensorDescriptionAttribute
---

# SensorDescriptionAttribute
_namespace: [Microsoft.Windows.Sensors](N-Microsoft.Windows.Sensors.html)_

An attribute which is applied on @"T:Microsoft.Windows.Sensors.Sensor"-derived types. Provides essential metadata
 such as the GUID of the sensor type for which this wrapper was written.

### Methods

#### #ctor
```csharp
Microsoft.Windows.Sensors.SensorDescriptionAttribute.#ctor(System.String)
```
Constructs the attribue with a string represening the sensor type GUID and the type of the data report class.

|Parameter Name|Remarks|
|--------------|-------|
|sensorType|String representing the sensor type GUID.|




### Properties

#### SensorType
Gets a string representing the sensor type GUID.
#### SensorTypeGuid
Gets the GUID of the sensor type.

