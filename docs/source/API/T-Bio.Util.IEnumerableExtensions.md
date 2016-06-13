---
title: IEnumerableExtensions
---

# IEnumerableExtensions
_namespace: [Bio.Util](N-Bio.Util.html)_

Extensions to IEnumerable{T}

### Methods

#### Append``1
```csharp
Bio.Util.IEnumerableExtensions.Append``1(System.Collections.Generic.IEnumerable{``0},System.Collections.Generic.IEnumerable{``0}[])
```
Yield a concatenation of the two Enumerable lists

|Parameter Name|Remarks|
|--------------|-------|
|enumerable|-|
|enumerables|-|


#### AsSingletonEnumerable``1
```csharp
Bio.Util.IEnumerableExtensions.AsSingletonEnumerable``1(``0)
```
Yield this

|Parameter Name|Remarks|
|--------------|-------|
|obj|-|


#### ElementAt``1
```csharp
Bio.Util.IEnumerableExtensions.ElementAt``1(System.Collections.Generic.IEnumerable{``0},System.Int64)
```
Returns the element at a specified index in a sequence.

|Parameter Name|Remarks|
|--------------|-------|
|collection| An System.Collections.Generic.IEnumerable to return an element from.|
|index|The zero-based index of the element to retrieve.|

_returns: The element at the specified position in the source sequence._

#### First``1
```csharp
Bio.Util.IEnumerableExtensions.First``1(System.Collections.Generic.IList{``0})
```
Same semantics as Enumerable.First(), but optimized for ILists. Throws an exception if the list is empty.

|Parameter Name|Remarks|
|--------------|-------|
|list|-|


#### ForEach``1
```csharp
Bio.Util.IEnumerableExtensions.ForEach``1(System.Collections.Generic.IEnumerable{``0},System.Action{``0,System.Int32})
```
Calls an action on each element of a sequence. The action takes two arguments: an element and the index of the element.
 It has no return value.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|the input sequence|
|action|An action that takes an element and an index and returns nothing.|


#### Last``1
```csharp
Bio.Util.IEnumerableExtensions.Last``1(System.Collections.Generic.IList{``0})
```
Same semantics as Enumerable.Last(), but optimized for ILists. Throws an exception if the list is empty.

|Parameter Name|Remarks|
|--------------|-------|
|list|-|


#### Shuffle``1
```csharp
Bio.Util.IEnumerableExtensions.Shuffle``1(System.Collections.Generic.IEnumerable{``0},System.Random)
```
Shuffles the elements of a sequence.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|The sequence of elements to shuffle|
|random|a random number instance|

_returns: a list of shuffled items_

#### Single``1
```csharp
Bio.Util.IEnumerableExtensions.Single``1(System.Collections.Generic.IList{``0})
```
Same semantics as Enumerable.Single(IEnumerable), but optimized for ILists. Throws an exception if list does not contain exactly 1 element. Otherwise returns that element.

|Parameter Name|Remarks|
|--------------|-------|
|list|-|


#### StringJoin
```csharp
Bio.Util.IEnumerableExtensions.StringJoin(System.Collections.IEnumerable,System.String,System.Int32,System.String)
```
Creates a delimited string from a sequence of elements. At most maxLength elements will be used and "..." shows that more elements were in the list.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|a sequence|
|separator|the delimiter|
|maxLength|the maximum number of elements in the string.  It must be at least 2 or an exception is thrown.|
|etcString|the string to use of more than maxLength elements are found|

_returns: a string_

#### SubSequence``1
```csharp
Bio.Util.IEnumerableExtensions.SubSequence``1(System.Collections.Generic.IEnumerable{``0},System.Int32,System.Int32)
```
Take the items from a sequence starting with item # start (index 0) and contining for count items.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|The input sequence|
|start|The index of the first item to take|
|count|The number of items to take|

_returns: The count items starting with the one with index start._

#### ToDictionary``2
```csharp
Bio.Util.IEnumerableExtensions.ToDictionary``2(System.Collections.Generic.IEnumerable{System.Collections.Generic.KeyValuePair{``0,``1}})
```
Creates a dictionary from a sequence of KeyValuePairs. If the sequence is already a Dictionary, a new Dictionary is still created.

|Parameter Name|Remarks|
|--------------|-------|
|pairSequence|the input pair sequence|

_returns: a Dictionary_

#### ToHashSet``1
```csharp
Bio.Util.IEnumerableExtensions.ToHashSet``1(System.Collections.Generic.IEnumerable{``0},System.Collections.Generic.IEqualityComparer{``0})
```
Creates a HashSet from a sequence. If the sequence is already a HashSet, a new HashSet is still created.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|the input sequence|
|comparer|The IEqualityComparer used by the HashSet|

_returns: a HashSet_

#### ToQueue``1
```csharp
Bio.Util.IEnumerableExtensions.ToQueue``1(System.Collections.Generic.IEnumerable{``0})
```
Creates a Queue from a sequence. If the sequence is already a Queue, a new Queue is still created.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|the input sequence|

_returns: a Queue_




