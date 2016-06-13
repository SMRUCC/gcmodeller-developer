---
title: BigArray`1
---

# BigArray`1
_namespace: [Bio](N-Bio.html)_



### Methods

#### #ctor
```csharp
Bio.BigArray`1.#ctor(System.Int64)
```
Initializes a new instance of the BigArray.

|Parameter Name|Remarks|
|--------------|-------|
|length|Size of the BigArray to create.|


#### Allocate
```csharp
Bio.BigArray`1.Allocate(System.Int64)
```
Allocate the memory for the BigArray.

|Parameter Name|Remarks|
|--------------|-------|
|length|Length of the BigArray.|


#### Clear
```csharp
Bio.BigArray`1.Clear(System.Int64,System.Int64)
```
Sets a range of elements in the BigArray to zero, to false, or to null,
 depending on the element type.

|Parameter Name|Remarks|
|--------------|-------|
|startIndex|The starting index of the range of elements to clear.|
|count|The number of elements to clear.|


#### CopyTo
```csharp
Bio.BigArray`1.CopyTo(System.Int64,`0[],System.Int32,System.Int64)
```
Copies a range of elements from the BigArray to a compatible one-dimensional array, 
 starting at the specified index of the destination array.

|Parameter Name|Remarks|
|--------------|-------|
|index|The zero-based index in the source BigArray at
                which copying begins.|
|destinationArray|The one-dimensional array that is the destination of the elements
                copied from BigArray.|
|destinationIndex|The zero-based index in destinationArray at which copying begins.|
|count|The number of elements to copy.|


#### GetEnumerator
```csharp
Bio.BigArray`1.GetEnumerator
```
Returns an enumerator that iterates through the BigArray.

#### IndexOf
```csharp
Bio.BigArray`1.IndexOf(`0,System.Int64,System.Int64)
```
Searches for the specified object and returns the zero-based index of the
 first occurrence within the range of elements in the BigArray
 that starts at the specified index and contains the specified number of elements.

|Parameter Name|Remarks|
|--------------|-------|
|item|The object to locate in the BigArray. The value
                can be null for reference types.|
|startIndex|The zero-based starting index of the search. 0 (zero) is valid in an empty
                BigArray.|
|count|The number of elements in the section to search.|

_returns: The zero-based index of the first occurrence of item within the range of
                elements in the BigArray that starts at index and
                contains count number of elements, if found; otherwise, –1._

#### Resize
```csharp
Bio.BigArray`1.Resize(System.Int64)
```
Changes the size of the BigArray to the specified new size.

|Parameter Name|Remarks|
|--------------|-------|
|newSize|The size of the new BigArray.|


#### System#Collections#IEnumerable#GetEnumerator
```csharp
Bio.BigArray`1.System#Collections#IEnumerable#GetEnumerator
```
Returns an enumerator that iterates through the BigArray.



### Properties

#### BlockSize
Maximum elements can be stored in an internal block.
#### Item
Gets or sets the element at the specified index.
#### Length
Total number of elements contained within this instance.

