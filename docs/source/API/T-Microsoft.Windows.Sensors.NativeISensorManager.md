---
title: NativeISensorManager
---

# NativeISensorManager
_namespace: [Microsoft.Windows.Sensors](N-Microsoft.Windows.Sensors.html)_

A COM interop wrapper for the ISensorsManager interface

### Methods

#### GetSensorByID
```csharp
Microsoft.Windows.Sensors.NativeISensorManager.GetSensorByID(System.Guid,Microsoft.Windows.Sensors.ISensor@)
```
Get a unique instance of a sensor

|Parameter Name|Remarks|
|--------------|-------|
|sensorID|The unique ID of a sensor installed on a system|
|ppSensor|The ISensor interface pointer for the sensor found, or null if no sensor was found|


#### GetSensorsByCategory
```csharp
Microsoft.Windows.Sensors.NativeISensorManager.GetSensorsByCategory(System.Guid,Microsoft.Windows.Sensors.ISensorCollection@)
```
Get a collection of related sensors by category, Ex: Light

|Parameter Name|Remarks|
|--------------|-------|
|sensorCategory|The category of sensors to find|
|ppSensorsFound|The collection of sensors found|


#### GetSensorsByType
```csharp
Microsoft.Windows.Sensors.NativeISensorManager.GetSensorsByType(System.Guid,Microsoft.Windows.Sensors.ISensorCollection@)
```
Get sensors by type, Ex: Ambient Light

|Parameter Name|Remarks|
|--------------|-------|
|sensorType|The type of sensors to find|
|ppSensorsFound|The collection of sensors found|


#### RequestPermissions
```csharp
Microsoft.Windows.Sensors.NativeISensorManager.RequestPermissions(System.IntPtr,Microsoft.Windows.Sensors.ISensorCollection,System.Boolean)
```
Opens a system dialog box to request user permission to access sensor data

|Parameter Name|Remarks|
|--------------|-------|
|parent|HWND handle to a window that can act as a parent to the permissions dialog box|
|sensors|Pointer to the ISensorCollection interface that contains the list of sensors for which permission is being requested|
|modal|BOOL that specifies the dialog box mode|


#### SetEventSink
```csharp
Microsoft.Windows.Sensors.NativeISensorManager.SetEventSink(Microsoft.Windows.Sensors.ISensorManagerEvents)
```
Subscribe to ISensors events

|Parameter Name|Remarks|
|--------------|-------|
|pEvents|An interface pointer to the callback object created|





