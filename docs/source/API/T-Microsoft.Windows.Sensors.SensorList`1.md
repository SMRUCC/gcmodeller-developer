---
title: SensorList`1
---

# SensorList`1
_namespace: [Microsoft.Windows.Sensors](N-Microsoft.Windows.Sensors.html)_

Defines a strongly typed list of sensors.

### Methods

#### Add
```csharp
Microsoft.Windows.Sensors.SensorList`1.Add(`0)
```
Adds a sensor to the end of the list.

|Parameter Name|Remarks|
|--------------|-------|
|item|The sensor item.|


#### Clear
```csharp
Microsoft.Windows.Sensors.SensorList`1.Clear
```
Clears the list of sensors.

#### Contains
```csharp
Microsoft.Windows.Sensors.SensorList`1.Contains(`0)
```
Determines if the list contains a specified sensor.

|Parameter Name|Remarks|
|--------------|-------|
|item|The sensor to locate.|

_returns: true if the list contains the sensor; otherwise false._

#### CopyTo
```csharp
Microsoft.Windows.Sensors.SensorList`1.CopyTo(`0[],System.Int32)
```
Copies a sensor to a new list.

|Parameter Name|Remarks|
|--------------|-------|
|array|The destination list.|
|arrayIndex|The index of the item to copy.|


#### GetEnumerator
```csharp
Microsoft.Windows.Sensors.SensorList`1.GetEnumerator
```
Returns an enumerator for the list.
_returns: An enumerator._

#### IndexOf
```csharp
Microsoft.Windows.Sensors.SensorList`1.IndexOf(`0)
```
Returns a sensor at a particular index.

|Parameter Name|Remarks|
|--------------|-------|
|item|The sensor item.|

_returns: The index of the sensor._

#### Insert
```csharp
Microsoft.Windows.Sensors.SensorList`1.Insert(System.Int32,`0)
```
Inserts a sensor at a specific location in the list.

|Parameter Name|Remarks|
|--------------|-------|
|index|The index to insert the sensor.|
|item|The sensor to insert.|


#### Remove
```csharp
Microsoft.Windows.Sensors.SensorList`1.Remove(`0)
```
Removes a specific sensor from the list.

|Parameter Name|Remarks|
|--------------|-------|
|item|The sensor to remove.|

_returns: true if the sensor was removed from the list; otherwise false._

#### RemoveAt
```csharp
Microsoft.Windows.Sensors.SensorList`1.RemoveAt(System.Int32)
```
Removes a sensor at a specific location in the list.

|Parameter Name|Remarks|
|--------------|-------|
|index|The index of the sensor to remove.|


#### System_Collections_IEnumerable_GetEnumerator
```csharp
Microsoft.Windows.Sensors.SensorList`1.System_Collections_IEnumerable_GetEnumerator
```
Returns an enumerator for the list.
_returns: An enumerator._



### Properties

#### Count
Gets the number of items in the list.
#### IsReadOnly
Gets a value that determines if the list is read-only.
#### Item
Gets or sets a sensor at a specified location in the list.

