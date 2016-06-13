---
title: SensorManager
---

# SensorManager
_namespace: [Microsoft.Windows.Sensors](N-Microsoft.Windows.Sensors.html)_

Manages the sensors conected to the system.

### Methods

#### BuildSensorTypeMap
```csharp
Microsoft.Windows.Sensors.SensorManager.BuildSensorTypeMap
```
Interrogates assemblies currently loaded into the AppDomain for classes deriving from @"T:Microsoft.Windows.Sensors.Sensor".
 Builds data structures which map those types to sensor type GUIDs.

#### GetAllSensors
```csharp
Microsoft.Windows.Sensors.SensorManager.GetAllSensors
```
Retireves a collection of all sensors.
_returns: A list of all sensors._

#### GetSensorBySensorId``1
```csharp
Microsoft.Windows.Sensors.SensorManager.GetSensorBySensorId``1(System.Guid)
```
Returns a specific sensor by sensor ID.

|Parameter Name|Remarks|
|--------------|-------|
|sensorId|The unique identifier of the sensor.|

_returns: A particular sensor._

#### GetSensorsByCategoryId
```csharp
Microsoft.Windows.Sensors.SensorManager.GetSensorsByCategoryId(System.Guid)
```
Retrieves a collection of sensors filtered by category ID.

|Parameter Name|Remarks|
|--------------|-------|
|category|The category ID of the requested sensors.|

_returns: A list of sensors of the specified category ID._

#### GetSensorsByTypeId
```csharp
Microsoft.Windows.Sensors.SensorManager.GetSensorsByTypeId(System.Guid)
```
Returns a collection of sensors filtered by type ID.

|Parameter Name|Remarks|
|--------------|-------|
|typeId|The type ID of the sensors requested.|

_returns: A list of sensors of the spefified type ID._

#### GetSensorsByTypeId``1
```csharp
Microsoft.Windows.Sensors.SensorManager.GetSensorsByTypeId``1
```
Returns a strongly typed collection of specific sensor types.
_returns: A strongly types list of sensors._

#### GetSensorWrapperInstance``1
```csharp
Microsoft.Windows.Sensors.SensorManager.GetSensorWrapperInstance``1(Microsoft.Windows.Sensors.ISensor)
```
Returns an instance of a sensor wrapper appropritate for the given sensor COM interface.
 If no appropriate sensor wrapper type could be found, the object created will be of the base-class type @"T:Microsoft.Windows.Sensors.Sensor".

|Parameter Name|Remarks|
|--------------|-------|
|nativeISensor|The underlying sensor COM interface.|

_returns: A wrapper instance._

#### OnSensorsChanged
```csharp
Microsoft.Windows.Sensors.SensorManager.OnSensorsChanged(System.Guid,Microsoft.Windows.Sensors.SensorAvailabilityChange)
```
Notification that the list of sensors has changed

#### RequestPermission
```csharp
Microsoft.Windows.Sensors.SensorManager.RequestPermission(System.IntPtr,System.Boolean,Microsoft.Windows.Sensors.SensorList{Microsoft.Windows.Sensors.Sensor})
```
Opens a system dialog box to request user permission to access sensor data.

|Parameter Name|Remarks|
|--------------|-------|
|parentWindowHandle|The handle to a window that can act as a parent to the permissions dialog box.|
|modal|Specifies whether the window should be modal.|
|sensors|The sensors for which to request permission.|




### Properties

#### guidToSensorDescr
Sensor type GUID -> .NET Type + report type
#### sensorTypeToGuid
.NET type -> type GUID.

