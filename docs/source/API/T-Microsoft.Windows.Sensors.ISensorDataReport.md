---
title: ISensorDataReport
---

# ISensorDataReport
_namespace: [Microsoft.Windows.Sensors](N-Microsoft.Windows.Sensors.html)_

COM interop wrapper for the ISensorDataReport interface.

### Methods

#### GetSensorValue
```csharp
Microsoft.Windows.Sensors.ISensorDataReport.GetSensorValue(Microsoft.Windows.Shell.PropertySystem.PropertyKey@,Microsoft.Windows.Internal.PropVariant)
```
Get a single value reported by the sensor

|Parameter Name|Remarks|
|--------------|-------|
|propKey|The data field ID of interest|
|propValue|The data returned|


#### GetSensorValues
```csharp
Microsoft.Windows.Sensors.ISensorDataReport.GetSensorValues(Microsoft.Windows.Sensors.IPortableDeviceKeyCollection,Microsoft.Windows.Sensors.IPortableDeviceValues@)
```
Get multiple values reported by a sensor

|Parameter Name|Remarks|
|--------------|-------|
|keys|The collection of keys for values to obtain data for|
|values|The values returned by the query|


#### GetTimestamp
```csharp
Microsoft.Windows.Sensors.ISensorDataReport.GetTimestamp(Microsoft.Windows.Sensors.SystemTime@)
```
Get the timestamp for the data report

|Parameter Name|Remarks|
|--------------|-------|
|timeStamp|The timestamp returned for the data report|





