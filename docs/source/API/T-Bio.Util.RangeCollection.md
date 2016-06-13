---
title: RangeCollection
---

# RangeCollection
_namespace: [Bio.Util](N-Bio.Util.html)_

A set of longs. Internally, represents this set as a sequence of ranges, for example, 1-10,333-1200,1300, so if
 the longs are clumpy then RangeCollection is very fast and uses very little memory.

### Methods

#### #ctor
```csharp
Bio.Util.RangeCollection.#ctor(Bio.Util.RangeCollection)
```
Create a RangeCollection by doing a deep copy of a RangeCollection

|Parameter Name|Remarks|
|--------------|-------|
|rangeCollection|A new RangeCollection|

_returns: a new RangeCollection_

#### Add
```csharp
Bio.Util.RangeCollection.Add(System.Int64)
```
Add an long to the RangeCollection. The long may or may not already be in the RangeCollection.

|Parameter Name|Remarks|
|--------------|-------|
|item|The long to add.|


#### AddNew
```csharp
Bio.Util.RangeCollection.AddNew(System.Int64)
```
Add an long to the RangeCollection. An exception is thrown if the long is already in the RangeCollection.

|Parameter Name|Remarks|
|--------------|-------|
|item|The long to add.|


#### AddRange
```csharp
Bio.Util.RangeCollection.AddRange(System.Collections.Generic.IEnumerable{System.Int32})
```
Add a sequence of integers to the RangeCollection. Each may or may not already be in the RangeCollection.

|Parameter Name|Remarks|
|--------------|-------|
|itemList|The sequence of longs to add|


#### AddRangeCollection
```csharp
Bio.Util.RangeCollection.AddRangeCollection(Bio.Util.RangeCollection)
```
Add the longs of one RangeCollection to this RangeCollection.

|Parameter Name|Remarks|
|--------------|-------|
|rangeCollection|The RangeCollection to add|


#### AddRanges
```csharp
Bio.Util.RangeCollection.AddRanges(System.Collections.Generic.IEnumerable{System.String})
```
Given a sequence of strings, each of which represents a contiguous range, add all the longs in all the ranges to this RangeCollection.

|Parameter Name|Remarks|
|--------------|-------|
|rangeAsStringSequence|A sequence of strings|


#### Clear
```csharp
Bio.Util.RangeCollection.Clear
```
Make the set empty

#### Complement
```csharp
Bio.Util.RangeCollection.Complement(System.Int64,System.Int64)
```
Returns the competeCollection - thisCollection

#### Contains
```csharp
Bio.Util.RangeCollection.Contains(Bio.Util.RangeCollection)
```
Tells if this RangeCollection is a superset of another. An an equal RangeCollection is a superset.

|Parameter Name|Remarks|
|--------------|-------|
|rangeCollection|The RangeCollection that may be the subset|

_returns: true, if this RangeCollection is a superset; otherwise, false_

#### CopyTo
```csharp
Bio.Util.RangeCollection.CopyTo(System.Int64[],System.Int32)
```
Copies the contents of the range into an array.

|Parameter Name|Remarks|
|--------------|-------|
|array|Destination array|
|arrayIndex|Index in destination to copy data into|


#### Count
```csharp
Bio.Util.RangeCollection.Count(System.Int64,System.Int64)
```
The number of long elements in the RangeCollection between min and max (inclusive)

|Parameter Name|Remarks|
|--------------|-------|
|min|The smallest long element to consider|
|max|The largest long element to consider|

_returns: The number of element in between min and max (inclusive)_

#### ElementAt
```csharp
Bio.Util.RangeCollection.ElementAt(System.Int64)
```
Returns what would be the nth element if each element were enumerated.

|Parameter Name|Remarks|
|--------------|-------|
|i|0-based index.|


#### ElementsAt
```csharp
Bio.Util.RangeCollection.ElementsAt(System.Int64,System.Int64)
```
Returns a collection of elements at what would be the i'th element for i \in [startIdx,lastIdx]. startIdx and lastIdx are 0-based.

#### Equals
```csharp
Bio.Util.RangeCollection.Equals(Bio.Util.RangeCollection)
```
Tests equality between two range collections

|Parameter Name|Remarks|
|--------------|-------|
|rangeCollection|The range collection we're testing against|

_returns: True if and only if the ranges are identical_

#### GetEnumerator
```csharp
Bio.Util.RangeCollection.GetEnumerator
```
Returns an enumeration of the long elements in this RangeCollection.

#### GetHashCode
```csharp
Bio.Util.RangeCollection.GetHashCode
```
Two RangeCollections with exactly the same elements will have the same hash code.

#### GetSchema
```csharp
Bio.Util.RangeCollection.GetSchema
```
Required to override XmlSerialization. We use the default schema

#### IsBetween
```csharp
Bio.Util.RangeCollection.IsBetween(System.Int64,System.Int64)
```
Tells if every element of the RangeCollection is between low (inclusive) and high (inclusive)

|Parameter Name|Remarks|
|--------------|-------|
|low|That value that every element must be at least as large as|
|high|The value that every element must be no learger than|

_returns: true if every element is between these two values (inclusive); otherwise, false_

#### IsComplete
```csharp
Bio.Util.RangeCollection.IsComplete(System.Int64,System.Int64)
```
Tells if the range collection includes all longs from firstItem to lastItem (inclusive)

|Parameter Name|Remarks|
|--------------|-------|
|firstItem|The first long of interest|
|lastItem|The last long of interest|

_returns: true if the range collection includes all the longs between firstItem and lastItem (inclusive); otherwise, false_

#### IsContiguous
```csharp
Bio.Util.RangeCollection.IsContiguous
```
Tells if the range collection contains a continuous set of longs.
_returns: true if a continuous set; false if empty or if gaps._

#### Parse
```csharp
Bio.Util.RangeCollection.Parse(System.String)
```
Parses strings of the form -10--5,-2-10,12-12 . Spaces are allowed, no other characters are.
 If mergeOverlappingRanges, then, for example, 2-3,4-5 is represented
 as 2-5. Otherwise, they're maintained as separate ranges. The only difference is in the behavior of the ToString() call.
 By extension, this will change how a RangeCollection is parsed into a RangeCollectionCollection using the latter's
 GetInstance(RangeCollection) initializer.

|Parameter Name|Remarks|
|--------------|-------|
|ranges|A range or the string empty. \"empty\" will return an empty range.|

_returns: a new RangeCollection_

#### ReadXml
```csharp
Bio.Util.RangeCollection.ReadXml(System.Xml.XmlReader)
```
Overrides default XML serialization by using the ToString representation.

#### Remove
```csharp
Bio.Util.RangeCollection.Remove(System.Int64)
```
Remove an item from the collection. This is not supported
 with the RangeCollection.

|Parameter Name|Remarks|
|--------------|-------|
|item|Item to remove|

_returns: Exception_

#### ToString
```csharp
Bio.Util.RangeCollection.ToString
```
Returns RangeCollection as a string in the form. For example, the range collection containing 1, 2, 10, 11, and 12 returns "1-2,10-12".
 If the set is empty, returns "Empty"
_returns: A string version of the range collection._

#### TryAdd
```csharp
Bio.Util.RangeCollection.TryAdd(System.Int64)
```
Trys to add a new element to the set.

|Parameter Name|Remarks|
|--------------|-------|
|item|An long to add|

_returns: True if item was added. False if it already existed in the range._

#### TryAddRangeCollection
```csharp
Bio.Util.RangeCollection.TryAddRangeCollection(Bio.Util.RangeCollection)
```
Add the longs of one RangeCollection to this RangeCollection.

|Parameter Name|Remarks|
|--------------|-------|
|rangeCollection|The RangeCollection to add|

_returns: true of all the elements added are new; otherwise, false_

#### WriteXml
```csharp
Bio.Util.RangeCollection.WriteXml(System.Xml.XmlWriter)
```
Overrides default XML serialization by using the ToString representation.



### Properties

#### FirstElement
The smallest long in the RangeCollection.
#### IsEmpty
True if the RangeCollection contains no elements; otherwise, false.
#### IsReadOnly
Returns whether this collection is considered read-only.
 The Range is not changeable through ICollection.
#### LastElement
The largest long in the RangeCollection
#### MaxValue
The range starting at 0 (inclusive) and going to long.MaxValue (exclusive).
#### RangeCount
Returns the number of contiguous ranges in this collection. Useful for memory
 consumption debugging.
#### Ranges
The ranges as a sequence, for example, 1-10 then 333-1200 then 1300
#### System#Collections#Generic#ICollection{System#Int64}#Count
Count of range items as an integer. If the count exceeds the 
 size storage for an integer we return zero.

