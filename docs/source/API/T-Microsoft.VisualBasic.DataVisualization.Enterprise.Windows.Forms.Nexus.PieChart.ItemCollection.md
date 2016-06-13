---
title: ItemCollection
---

# ItemCollection
_namespace: [Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart](N-Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.html)_

Stores a collection of PieChartItem objects associated with a PieChart.

### Methods

#### #ctor
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.ItemCollection.#ctor(Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart)
```
Constructs a new instance.

|Parameter Name|Remarks|
|--------------|-------|
|container|The PieChart that this collection is associated with.|


#### Add
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.ItemCollection.Add(System.Object)
```
Adds an item to the list.

|Parameter Name|Remarks|
|--------------|-------|
|obj|The item to add to the list.|

_returns: The position at which the item was inserted._

#### Clear
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.ItemCollection.Clear
```
Removes all items from the collection.

#### Contains
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.ItemCollection.Contains(System.Object)
```
Determines whether the list contains a specific value.

|Parameter Name|Remarks|
|--------------|-------|
|obj|The object to locate in the list.|

_returns: True if an instance of the item was found in the list, otherwise false._

#### GetEnumerator
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.ItemCollection.GetEnumerator
```
Returns an enumerator that iterates through a collection.
_returns: An IEnumerator object that can be used to iterate through the collection._

#### ICollection_CopyTo
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.ItemCollection.ICollection_CopyTo(System.Array,System.Int32)
```
Copies the elements of the collection to an array, starting at a particular array index.

|Parameter Name|Remarks|
|--------------|-------|
|array|The one-dimensional array that is the destination of the elements copied from the collection.
 The array must have zero-based indexing.|
|index|The zero-based index in array at which copying begins|


#### IEnumerable_GetEnumerator
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.ItemCollection.IEnumerable_GetEnumerator
```
Returns an enumerator that iterates through a collection.
_returns: An IEnumerator object that can be used to iterate through the collection._

#### IndexOf
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.ItemCollection.IndexOf(System.Object)
```
Determines the index of a specific item in the list.

|Parameter Name|Remarks|
|--------------|-------|
|obj|The object to locate in the list.|

_returns: The index of the item if found in the list, otherwise -1._

#### Insert
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.ItemCollection.Insert(System.Int32,System.Object)
```
Inserts an item to the list at the specified index.

|Parameter Name|Remarks|
|--------------|-------|
|index|The zero-based index at which item should be inserted.|
|obj|The object to insert into the list.|


#### Remove
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.ItemCollection.Remove(System.Object)
```
Removes the first occurrence of a specific object from the collection.

|Parameter Name|Remarks|
|--------------|-------|
|obj|The object to remove from the collection.|

_returns: True if the item was successfully removed from the colleection, otherwise false.  This method
 also returns false if the item is not found in the original collection._

#### RemoveAt
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.ItemCollection.RemoveAt(System.Int32)
```
Removes the item at the specified index.

|Parameter Name|Remarks|
|--------------|-------|
|index|The zero-based index of the item to remove.|


#### Sort
```csharp
Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChart.ItemCollection.Sort(System.Collections.Generic.IComparer{Microsoft.VisualBasic.DataVisualization.Enterprise.Windows.Forms.Nexus.PieChartItem})
```
Sorts the items in the collection using the provided comparer.

|Parameter Name|Remarks|
|--------------|-------|
|comparer|The comparer used to compare PieChartItems.|




### Properties

#### container
The PieChart this collection is associated with.
#### Count
Gets the number of elements contained in the collection.
#### ICollection_IsReadOnly
Gets a value indicating whether the collection is read-only.
#### ICollection_IsSynchronized
Gets a value indicating whether access to the collection is synchronized (thread safe).
#### ICollection_SyncRoot
Gets an object that can be used to synchronize access to the collection.
#### IsFixedSize
Gets a value indicating whether the list has a fixed size.
#### IsReadOnly
Gets a value indicating whether the list is read-only.
#### Item
Gets or sets the element at the specified index.
#### Item2
Gets or sets the element at the specified index.
#### items
The list of items stored in this control.
#### totalWeight
The total weight of all items in this collection.

