---
title: SensorData
---

# SensorData
_namespace: [Microsoft.Windows.Sensors](N-Microsoft.Windows.Sensors.html)_

Defines a mapping of data field identifiers to the data returned in a sensor report.

### Methods

#### Add
```csharp
Microsoft.Windows.Sensors.SensorData.Add(System.Collections.Generic.KeyValuePair{System.Guid,System.Collections.Generic.IList{System.Object}})
```
Adds a specified key/value data pair to the collection.

|Parameter Name|Remarks|
|--------------|-------|
|item|The item to add.|


#### Clear
```csharp
Microsoft.Windows.Sensors.SensorData.Clear
```
Clears the items from the collection.

#### Contains
```csharp
Microsoft.Windows.Sensors.SensorData.Contains(System.Collections.Generic.KeyValuePair{System.Guid,System.Collections.Generic.IList{System.Object}})
```
Determines if the collection contains the specified key/value pair.

|Parameter Name|Remarks|
|--------------|-------|
|item|The item to locate.|

_returns: true if the collection contains the key/value pair; otherwise false._

#### ContainsKey
```csharp
Microsoft.Windows.Sensors.SensorData.ContainsKey(System.Guid)
```
Determines if a particular data field itentifer is present in the collection.

|Parameter Name|Remarks|
|--------------|-------|
|key|The data field identifier.|

_returns: true if the data field identifier is present._

#### CopyTo
```csharp
Microsoft.Windows.Sensors.SensorData.CopyTo(System.Collections.Generic.KeyValuePair{System.Guid,System.Collections.Generic.IList{System.Object}}[],System.Int32)
```
Copies an element collection to another collection.

|Parameter Name|Remarks|
|--------------|-------|
|array|The destination collection.|
|arrayIndex|The index of the item to copy.|


#### GetEnumerator
```csharp
Microsoft.Windows.Sensors.SensorData.GetEnumerator
```
Returns an enumerator for the collection.
_returns: An enumerator._

#### Remove
```csharp
Microsoft.Windows.Sensors.SensorData.Remove(System.Collections.Generic.KeyValuePair{System.Guid,System.Collections.Generic.IList{System.Object}})
```
Removes a particular item from the collection.

|Parameter Name|Remarks|
|--------------|-------|
|item|The item to remove.|

_returns: true if successful; otherwise false_

#### System_Collections_IEnumerable_GetEnumerator
```csharp
Microsoft.Windows.Sensors.SensorData.System_Collections_IEnumerable_GetEnumerator
```
Returns an enumerator for the collection.
_returns: An enumerator._

#### TryGetValue
```csharp
Microsoft.Windows.Sensors.SensorData.TryGetValue(System.Guid,System.Collections.Generic.IList{System.Object}@)
```
Attempts to get the value of a data item.

|Parameter Name|Remarks|
|--------------|-------|
|key|The data field identifier.|
|value|The data list.|

_returns: true if able to obtain the value; otherwise false._



### Properties

#### Count
Returns the number of items in the collection.
#### IsReadOnly
Gets a value that determines if the collection is read-only.
#### Item
Gets or sets the index operator for the dictionary by key.
#### Keys
Gets the list of the data field identifiers in this collection.
#### Values
Gets the list of data values in the dictionary.

