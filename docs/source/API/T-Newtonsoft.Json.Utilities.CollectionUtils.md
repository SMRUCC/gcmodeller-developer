---
title: CollectionUtils
---

# CollectionUtils
_namespace: [Newtonsoft.Json.Utilities](N-Newtonsoft.Json.Utilities.html)_



### Methods

#### AddRange``1
```csharp
Newtonsoft.Json.Utilities.CollectionUtils.AddRange``1(System.Collections.Generic.IList{``0},System.Collections.Generic.IEnumerable{``0})
```
Adds the elements of the specified collection to the specified generic IList.

|Parameter Name|Remarks|
|--------------|-------|
|initial|The list to add to.|
|collection|The collection of elements to add.|


#### IndexOf``1
```csharp
Newtonsoft.Json.Utilities.CollectionUtils.IndexOf``1(System.Collections.Generic.IEnumerable{``0},``0,System.Collections.Generic.IEqualityComparer{``0})
```
Returns the index of the first occurrence in a sequence by using a specified IEqualityComparer.

|Parameter Name|Remarks|
|--------------|-------|
|list|A sequence in which to locate a value.|
|value|The object to locate in the sequence|
|comparer|An equality comparer to compare values.|

_returns: The zero-based index of the first occurrence of value within the entire sequence, if found; otherwise, –1._

#### IsNullOrEmpty``1
```csharp
Newtonsoft.Json.Utilities.CollectionUtils.IsNullOrEmpty``1(System.Collections.Generic.ICollection{``0})
```
Determines whether the collection is null or empty.

|Parameter Name|Remarks|
|--------------|-------|
|collection|The collection.|

_returns: true if the collection is null or empty; otherwise, false.
            _




