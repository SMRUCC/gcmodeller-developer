---
title: PropertyKey
---

# PropertyKey
_namespace: [Microsoft.Windows.Shell.PropertySystem](N-Microsoft.Windows.Shell.PropertySystem.html)_

Defines a unique key for a Shell Property

### Methods

#### #ctor
```csharp
Microsoft.Windows.Shell.PropertySystem.PropertyKey.#ctor(System.String,System.Int32)
```
PropertyKey Constructor

|Parameter Name|Remarks|
|--------------|-------|
|formatId|A string represenstion of a GUID for the property|
|propertyId|Property identifier (PID)|


#### Equals
```csharp
Microsoft.Windows.Shell.PropertySystem.PropertyKey.Equals(System.Object)
```
Returns whether this object is equal to another. This is vital for performance of value types.

|Parameter Name|Remarks|
|--------------|-------|
|obj|The object to compare against.|

_returns: Equality result._

#### GetHashCode
```csharp
Microsoft.Windows.Shell.PropertySystem.PropertyKey.GetHashCode
```
Returns the hash code of the object. This is vital for performance of value types.

#### op_Equality
```csharp
Microsoft.Windows.Shell.PropertySystem.PropertyKey.op_Equality(Microsoft.Windows.Shell.PropertySystem.PropertyKey,Microsoft.Windows.Shell.PropertySystem.PropertyKey)
```
Implements the == (equality) operator.

|Parameter Name|Remarks|
|--------------|-------|
|propKey1|First property key to compare.|
|propKey2|Second property key to compare.|

_returns: true if object a equals object b. false otherwise._

#### op_Inequality
```csharp
Microsoft.Windows.Shell.PropertySystem.PropertyKey.op_Inequality(Microsoft.Windows.Shell.PropertySystem.PropertyKey,Microsoft.Windows.Shell.PropertySystem.PropertyKey)
```
Implements the != (inequality) operator.

|Parameter Name|Remarks|
|--------------|-------|
|propKey1|First property key to compare|
|propKey2|Second property key to compare.|

_returns: true if object a does not equal object b. false otherwise._

#### ToString
```csharp
Microsoft.Windows.Shell.PropertySystem.PropertyKey.ToString
```
Override ToString() to provide a user friendly string representation
_returns: String representing the property key_



### Properties

#### FormatId
A unique GUID for the property
#### PropertyId
Property identifier (PID)

