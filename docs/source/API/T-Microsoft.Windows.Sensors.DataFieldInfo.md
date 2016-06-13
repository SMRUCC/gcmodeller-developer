---
title: DataFieldInfo
---

# DataFieldInfo
_namespace: [Microsoft.Windows.Sensors](N-Microsoft.Windows.Sensors.html)_

Defines a structure that contains the property ID (key) and value.

### Methods

#### #ctor
```csharp
Microsoft.Windows.Sensors.DataFieldInfo.#ctor(Microsoft.Windows.Shell.PropertySystem.PropertyKey,System.Object)
```
Initializes the structure.

|Parameter Name|Remarks|
|--------------|-------|
|propKey|A property ID (key).|
|value|A property value. The type must be valid for the property ID.|


#### Equals
```csharp
Microsoft.Windows.Sensors.DataFieldInfo.Equals(Microsoft.Windows.Sensors.DataFieldInfo)
```
Determines if this key and value pair and another key and value pair are equal.

|Parameter Name|Remarks|
|--------------|-------|
|other|The item to compare.|

_returns: true if equal; otherwise false._

#### GetHashCode
```csharp
Microsoft.Windows.Sensors.DataFieldInfo.GetHashCode
```
Returns the hash code for a particular DataFieldInfo structure.
_returns: A hash code._

#### op_Equality
```csharp
Microsoft.Windows.Sensors.DataFieldInfo.op_Equality(Microsoft.Windows.Sensors.DataFieldInfo,Microsoft.Windows.Sensors.DataFieldInfo)
```
DataFieldInfo == operator overload

|Parameter Name|Remarks|
|--------------|-------|
|first|The first item to compare.|
|second|The second item to compare.|

_returns: true if equal; otherwise false._

#### op_Inequality
```csharp
Microsoft.Windows.Sensors.DataFieldInfo.op_Inequality(Microsoft.Windows.Sensors.DataFieldInfo,Microsoft.Windows.Sensors.DataFieldInfo)
```
DataFieldInfo != operator overload

|Parameter Name|Remarks|
|--------------|-------|
|first|The first item to compare.|
|second|The second item to comare.|

_returns: true if not equal; otherwise false._



### Properties

#### Key
Gets the property's key.
#### Value
Gets the property's value.

