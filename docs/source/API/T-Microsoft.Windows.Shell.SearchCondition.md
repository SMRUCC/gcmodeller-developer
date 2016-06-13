---
title: SearchCondition
---

# SearchCondition
_namespace: [Microsoft.Windows.Shell](N-Microsoft.Windows.Shell.html)_

Exposes properties and methods for retrieving information about a search condition.

### Methods

#### Dispose
```csharp
Microsoft.Windows.Shell.SearchCondition.Dispose(System.Boolean)
```
Release the native objects.

|Parameter Name|Remarks|
|--------------|-------|
|disposing|-|


#### Finalize
```csharp
Microsoft.Windows.Shell.SearchCondition.Finalize
```


#### GetSubConditions
```csharp
Microsoft.Windows.Shell.SearchCondition.GetSubConditions
```
Retrieves an array of the sub-conditions.



### Properties

#### ConditionOperation
Search condition operation to be performed on the property/value combination.
 See @"T:Microsoft.Windows.Shell.SearchConditionOperation" for more details.
#### ConditionType
Represents the condition type for the given node.
#### PropertyCanonicalName
The name of a property to be compared or NULL for an unspecified property.
#### PropertyKey
The property key for the property that is to be compared.
#### PropertyValue
A value (in @"T:System.String" format) to which the property is compared.

