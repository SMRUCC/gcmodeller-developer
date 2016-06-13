---
title: ISensor
---

# ISensor
_namespace: [Microsoft.Windows.Sensors](N-Microsoft.Windows.Sensors.html)_

A COM interop wrapper for the ISensor interface.

### Methods

#### GetCategory
```csharp
Microsoft.Windows.Sensors.ISensor.GetCategory(System.Guid@)
```
Category of sensor Ex: Location

|Parameter Name|Remarks|
|--------------|-------|
|sensorCategory|The sensor category to be returned|


#### GetData
```csharp
Microsoft.Windows.Sensors.ISensor.GetData(Microsoft.Windows.Sensors.ISensorDataReport@)
```
Get the most recent ISensorDataReport for the sensor

|Parameter Name|Remarks|
|--------------|-------|
|dataReport|The data report returned|


#### GetEventInterest
```csharp
Microsoft.Windows.Sensors.ISensor.GetEventInterest(System.IntPtr@,System.UInt32@)
```
Reports the set of event interests.

|Parameter Name|Remarks|
|--------------|-------|
|pValues|-|
|count|-|


#### GetFriendlyName
```csharp
Microsoft.Windows.Sensors.ISensor.GetFriendlyName(System.String@)
```
Human readable name for sensor

|Parameter Name|Remarks|
|--------------|-------|
|friendlyName|The friendly name for the sensor|


#### GetID
```csharp
Microsoft.Windows.Sensors.ISensor.GetID(System.Guid@)
```
Unique ID of sensor within the sensors platform

|Parameter Name|Remarks|
|--------------|-------|
|id|The unique ID to be returned|


#### GetProperties
```csharp
Microsoft.Windows.Sensors.ISensor.GetProperties(Microsoft.Windows.Sensors.IPortableDeviceKeyCollection,Microsoft.Windows.Sensors.IPortableDeviceValues@)
```
Bulk Sensor metadata query: make, model, serial number, etc

|Parameter Name|Remarks|
|--------------|-------|
|keys|The PROPERTYKEY collection for the properties to be retrieved|
|properties|The properties returned|


#### GetProperty
```csharp
Microsoft.Windows.Sensors.ISensor.GetProperty(Microsoft.Windows.Shell.PropertySystem.PropertyKey@,Microsoft.Windows.Internal.PropVariant)
```
Sensor metadata: make, model, serial number, etc

|Parameter Name|Remarks|
|--------------|-------|
|key|The PROPERTYKEY for the property to be retrieved|
|property|The property returned|


#### GetState
```csharp
Microsoft.Windows.Sensors.ISensor.GetState(Microsoft.Windows.Sensors.NativeSensorState@)
```
Get the sensor state

|Parameter Name|Remarks|
|--------------|-------|
|state|The SensorState returned|


#### GetSupportedDataFields
```csharp
Microsoft.Windows.Sensors.ISensor.GetSupportedDataFields(Microsoft.Windows.Sensors.IPortableDeviceKeyCollection@)
```
Get the array of SensorDataField objects that describe the individual values that can be reported by the sensor

|Parameter Name|Remarks|
|--------------|-------|
|dataFields|A collection of PROPERTYKEY structures representing the data values reported by the sensor|


#### GetType
```csharp
Microsoft.Windows.Sensors.ISensor.GetType(System.Guid@)
```
Specific type of sensor: Ex: IPLocationSensor

|Parameter Name|Remarks|
|--------------|-------|
|sensorType|The sensor Type to be returned|


#### SetEventInterest
```csharp
Microsoft.Windows.Sensors.ISensor.SetEventInterest(System.Guid[],System.UInt32)
```
Sets the set of event interests

|Parameter Name|Remarks|
|--------------|-------|
|pValues|The array of GUIDs representing sensor events of interest|
|count|The number of guids included|


#### SetEventSink
```csharp
Microsoft.Windows.Sensors.ISensor.SetEventSink(Microsoft.Windows.Sensors.ISensorEvents)
```
Subscribe to ISensor events

|Parameter Name|Remarks|
|--------------|-------|
|pEvents|An interface pointer to the callback object created for events|


#### SetProperties
```csharp
Microsoft.Windows.Sensors.ISensor.SetProperties(Microsoft.Windows.Sensors.IPortableDeviceValues,Microsoft.Windows.Sensors.IPortableDeviceValues@)
```
Bulk Sensor metadata set for settable properties

|Parameter Name|Remarks|
|--------------|-------|
|properties|The properties to be set|
|results|The PROPERTYKEY/HRESULT pairs indicating success/failure for each property set|


#### SupportsDataField
```csharp
Microsoft.Windows.Sensors.ISensor.SupportsDataField(Microsoft.Windows.Shell.PropertySystem.PropertyKey,System.Boolean@)
```
Reports whether or not a sensor can deliver the requested data type

|Parameter Name|Remarks|
|--------------|-------|
|key|The GUID to find matching PROPERTYKEY structures for|
|isSupported|A collection of PROPERTYKEY structures representing the data values|


#### SupportsEvent
```csharp
Microsoft.Windows.Sensors.ISensor.SupportsEvent(System.Guid,System.Boolean@)
```
Reports whether or not a sensor supports the specified event.

|Parameter Name|Remarks|
|--------------|-------|
|eventGuid|The event identifier|
|isSupported|true if the event is supported, otherwise false|





