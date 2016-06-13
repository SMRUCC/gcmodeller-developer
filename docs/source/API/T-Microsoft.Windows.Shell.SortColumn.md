---
title: SortColumn
---

# SortColumn
_namespace: [Microsoft.Windows.Shell](N-Microsoft.Windows.Shell.html)_

Stores information about how to sort a column that is displayed in the folder view.

### Methods

#### #ctor
```csharp
Microsoft.Windows.Shell.SortColumn.#ctor(Microsoft.Windows.Shell.PropertySystem.PropertyKey,Microsoft.Windows.Shell.SortDirection)
```
Creates a sort column with the specified direction for the given property.

|Parameter Name|Remarks|
|--------------|-------|
|propertyKey|Property key for the property that the user will sort.|
|direction|The direction in which the items are sorted.|


#### Equals
```csharp
Microsoft.Windows.Shell.SortColumn.Equals(System.Object)
```
Determines if this object is equal to another.

|Parameter Name|Remarks|
|--------------|-------|
|obj|The object to compare|

_returns: Returns true if the objects are equal; false otherwise._

#### GetHashCode
```csharp
Microsoft.Windows.Shell.SortColumn.GetHashCode
```
Generates a nearly unique hashcode for this structure.
_returns: A hash code._

#### op_Equality
```csharp
Microsoft.Windows.Shell.SortColumn.op_Equality(Microsoft.Windows.Shell.SortColumn,Microsoft.Windows.Shell.SortColumn)
```
Implements the == (equality) operator.

|Parameter Name|Remarks|
|--------------|-------|
|col1|First object to compare.|
|col2|Second object to compare.|

_returns: True if col1 equals col2; false otherwise._

#### op_Inequality
```csharp
Microsoft.Windows.Shell.SortColumn.op_Inequality(Microsoft.Windows.Shell.SortColumn,Microsoft.Windows.Shell.SortColumn)
```
Implements the != (unequality) operator.

|Parameter Name|Remarks|
|--------------|-------|
|col1|First object to compare.|
|col2|Second object to compare.|

_returns: True if col1 does not equals col1; false otherwise._



### Properties

#### Direction
The direction in which the items are sorted.
#### PropertyKey
The ID of the column by which the user will sort. A PropertyKey structure. 
 For example, for the "Name" column, the property key is PKEY_ItemNameDisplay or
 @"P:Microsoft.Windows.Shell.PropertySystem.SystemProperties.System.ItemName".

