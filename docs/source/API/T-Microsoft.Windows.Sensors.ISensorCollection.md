---
title: ISensorCollection
---

# ISensorCollection
_namespace: [Microsoft.Windows.Sensors](N-Microsoft.Windows.Sensors.html)_

A COM interop wrapper for the ISensorCollection interface

### Methods

#### Add
```csharp
Microsoft.Windows.Sensors.ISensorCollection.Add(Microsoft.Windows.Sensors.ISensor)
```
Add a sensor to the collection

|Parameter Name|Remarks|
|--------------|-------|
|pSensor|The sensor to add|


#### Clear
```csharp
Microsoft.Windows.Sensors.ISensorCollection.Clear
```
Clear the collection

#### GetAt
```csharp
Microsoft.Windows.Sensors.ISensorCollection.GetAt(System.UInt32,Microsoft.Windows.Sensors.ISensor@)
```
Get a sensor by index

|Parameter Name|Remarks|
|--------------|-------|
|ulIndex|The index for the sensor to retrieve|
|ppSensor|The sensor retrieved|


#### GetCount
```csharp
Microsoft.Windows.Sensors.ISensorCollection.GetCount(System.UInt32@)
```
Get the sensor count for the collection

|Parameter Name|Remarks|
|--------------|-------|
|pCount|The count returned|


#### Remove
```csharp
Microsoft.Windows.Sensors.ISensorCollection.Remove(Microsoft.Windows.Sensors.ISensor)
```
Remove a sensor from the collection

|Parameter Name|Remarks|
|--------------|-------|
|pSensor|The sensor to remove|


#### RemoveByID
```csharp
Microsoft.Windows.Sensors.ISensorCollection.RemoveByID(System.Guid)
```
Remove a sensor from the collection

|Parameter Name|Remarks|
|--------------|-------|
|sensorID|Remove sensor by ID|





