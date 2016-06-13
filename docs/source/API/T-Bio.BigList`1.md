---
title: BigList`1
---

# BigList`1
_namespace: [Bio](N-Bio.html)_

Represents a strongly typed list of objects.
 Uses BigArray to store objects.

### Methods

#### #ctor
```csharp
Bio.BigList`1.#ctor(System.Collections.Generic.IEnumerable{`0},System.Int64)
```
Initialize a new big list with a collection and known size.

|Parameter Name|Remarks|
|--------------|-------|
|collection|Items to add|
|collectionCount|Size of list|


#### Add
```csharp
Bio.BigList`1.Add(`0)
```
Adds an object to the end of the BigList.

|Parameter Name|Remarks|
|--------------|-------|
|item|The object to be added to the end of the BigList.|


#### Clear
```csharp
Bio.BigList`1.Clear
```
Removes all elements from the BigList.

#### Contains
```csharp
Bio.BigList`1.Contains(`0)
```
Determines whether an element is in the BigList.

|Parameter Name|Remarks|
|--------------|-------|
|item|The object to locate in the BigList.|

_returns: true if item is found in the BigList, else false._

#### CopyTo
```csharp
Bio.BigList`1.CopyTo(System.Int64,`0[],System.Int32,System.Int64)
```
Copies a range of elements from the BigList to a compatible one-dimensional array, 
 starting at the specified index of the destination array.

|Parameter Name|Remarks|
|--------------|-------|
|index|The zero-based index in the source BigList at
                which copying begins.|
|destinationArray|The one-dimensional array that is the destination of the elements
                copied from BigList.|
|destinationIndex|The zero-based index in destinationArray at which copying begins.|
|count|The number of elements to copy.|


#### ForEach
```csharp
Bio.BigList`1.ForEach(System.Action{`0})
```
Performs the specified action on each element of the BigList.

|Parameter Name|Remarks|
|--------------|-------|
|action|The delegate to perform on each element of the BigList.|


#### GetEnumerator
```csharp
Bio.BigList`1.GetEnumerator
```
Returns an enumerator that iterates through the BigList.

#### IndexOf
```csharp
Bio.BigList`1.IndexOf(`0,System.Int64,System.Int64)
```
Searches for the specified object and returns the zero-based index of the
 first occurrence within the range of elements in the BigList
 that starts at the specified index and contains the specified number of elements.

|Parameter Name|Remarks|
|--------------|-------|
|item|The object to locate in the BigList. The value
                can be null for reference types.|
|startIndex|The zero-based starting index of the search. 0 (zero) is valid in an empty
                BigList.|
|count|The number of elements in the section to search.|

_returns: The zero-based index of the first occurrence of item within the range of
                elements in the BigList that starts at index and
                contains count number of elements, if found; otherwise, –1._

#### Insert
```csharp
Bio.BigList`1.Insert(System.Int64,`0)
```
Inserts an element into the BigList at the specified index.

|Parameter Name|Remarks|
|--------------|-------|
|index|The zero-based index at which item should be inserted.|
|item|The object to insert. The value can be null for reference types.|


#### Remove
```csharp
Bio.BigList`1.Remove(`0)
```
Removes the first occurrence of a specific object from the BigList.

|Parameter Name|Remarks|
|--------------|-------|
|item|The object to remove from the BigList.|

_returns: true if item is successfully removed; otherwise, false. This method also
                returns false if item was not found in the BigList._

#### RemoveAt
```csharp
Bio.BigList`1.RemoveAt(System.Int64)
```
Removes the element at the specified index of the BigList.

|Parameter Name|Remarks|
|--------------|-------|
|index|The zero-based index of the element to remove.|


#### System#Collections#IEnumerable#GetEnumerator
```csharp
Bio.BigList`1.System#Collections#IEnumerable#GetEnumerator
```
Returns an enumerator that iterates through the BigList.

#### TrimExcess
```csharp
Bio.BigList`1.TrimExcess
```
Sets the capacity to the actual number of elements in the BigList,
 if that number is less than a threshold value.

#### TrimToSize
```csharp
Bio.BigList`1.TrimToSize(System.Int64)
```
Trims the list and removes all elements above newSize

|Parameter Name|Remarks|
|--------------|-------|
|newSize|size of new array|




### Properties

#### _emptyArray
Empty array.
#### _items
BigArray instance to store elements.
#### _size
Holds number of elements present in the BigList.
#### Capacity
Gets or sets the capacity.
#### Count
Gets or sets the number of elements present in the BigList.
#### DefaultCapacity
Default capacity, used while adding first element 
 when capacity is not specified.
#### Item
Gets or sets the element at the specified index.

