---
title: Sensor
---

# Sensor
_namespace: [Microsoft.Windows.Sensors](N-Microsoft.Windows.Sensors.html)_

Defines a general wrapper for a sensor.

### Methods

#### ClearEventInterest
```csharp
Microsoft.Windows.Sensors.Sensor.ClearEventInterest(System.Guid)
```
Informs the sensor driver to clear a specific type of event.

|Parameter Name|Remarks|
|--------------|-------|
|eventType|The type of event of interest.|


#### GetProperties
```csharp
Microsoft.Windows.Sensors.Sensor.GetProperties(System.Int32[])
```
Retrieves the values of multiple properties by their index.
 Assumes that the GUID component of the property keys is the sensor's type GUID.

|Parameter Name|Remarks|
|--------------|-------|
|propIndexes|The indexes of the properties to retrieve.|

_returns: An array that contains the property values._
> 
>  The returned array will contain null values for some properties if the values could not be retrieved.
>  

#### GetProperty
```csharp
Microsoft.Windows.Sensors.Sensor.GetProperty(System.Int32)
```
Retrieves a property value by the property index.
 Assumes the GUID component in the property key takes the sensor's type GUID.

|Parameter Name|Remarks|
|--------------|-------|
|propIndex|A property index.|

_returns: A property value._

#### GetSupportedProperties
```csharp
Microsoft.Windows.Sensors.Sensor.GetSupportedProperties
```
Returns a list of supported properties for the sensor.
_returns: A strongly typed list of supported properties._

#### Initialize
```csharp
Microsoft.Windows.Sensors.Sensor.Initialize
```
Initializes the Sensor wrapper after it has been bound to the native ISensor interface
 and is ready for subsequent initialization.

#### IsEventInterestSet
```csharp
Microsoft.Windows.Sensors.Sensor.IsEventInterestSet(System.Guid)
```
Determines whether the sensor driver will file events for a particular type of event.

|Parameter Name|Remarks|
|--------------|-------|
|eventType|The type of event, as a GUID.|

_returns: true if the sensor will report interest in the specified event._

#### SetEventInterest
```csharp
Microsoft.Windows.Sensors.Sensor.SetEventInterest(System.Guid)
```
Informs the sensor driver of interest in a specific type of event.

|Parameter Name|Remarks|
|--------------|-------|
|eventType|The type of event of interest.|


#### SetProperties
```csharp
Microsoft.Windows.Sensors.Sensor.SetProperties(Microsoft.Windows.Sensors.DataFieldInfo[])
```
Sets the values of multiple properties.

|Parameter Name|Remarks|
|--------------|-------|
|data|An array that contains the property keys and values.|

_returns: A dictionary of the new values for the properties. Actual values may not match the requested values._

#### ToString
```csharp
Microsoft.Windows.Sensors.Sensor.ToString
```
Returns a string that represents the current object.
_returns: A string that represents the current object._

#### TryUpdateData
```csharp
Microsoft.Windows.Sensors.Sensor.TryUpdateData
```
Attempts a synchronous data update from the sensor.
_returns: true if the request was successful; otherwise false._

#### UpdateData
```csharp
Microsoft.Windows.Sensors.Sensor.UpdateData
```
Requests a synchronous data update from the sensor. The method throws an exception if the request fails.



### Properties

#### AutoUpdateDataReport
Gets or sets a value that specifies whether the data should be automatically updated. 
 If the value is not set, call TryUpdateDataReport or UpdateDataReport to update the DataReport member.
#### CategoryId
Gets a value that specifies the GUID for the sensor category.
#### ConnectionType
Gets a value that specifies the sensor's connection type.
#### DataReport
Gets a value that specifies the most recent data reported by the sensor.
#### Description
Gets a value that specifies the sensor's description.
#### DevicePath
Gets a value that specifies the sensor's device path.
#### FriendlyName
Gets a value that specifies the sensor's friendly name.
#### Manufacturer
Gets a value that specifies the manufacturer of the sensor.
#### MinimumReportInterval
Gets a value that specifies the minimum report interval.
#### Model
Gets a value that specifies the sensor's model.
#### ReportInterval
Gets or sets a value that specifies the report interval.
#### SensorId
Gets a value that specifies the GUID for the sensor instance.
#### SerialNumber
Gets a value that specifies the sensor's serial number.
#### State
Gets a value that specifies the sensor's current state.
#### TypeId
Gets a value that specifies the GUID for the sensor type.

