---
title: LongSerialNumbers`1
---

# LongSerialNumbers`1
_namespace: [Bio.Util](N-Bio.Util.html)_

Provides serial numbers to each Elements.

### Methods

#### #ctor
```csharp
Bio.Util.LongSerialNumbers`1.#ctor(System.Collections.Generic.IComparer{`0})
```
Initializes an instance of LongSerialNumbers class with specified comparer.

|Parameter Name|Remarks|
|--------------|-------|
|comparer|Comparer to use for comparing two items.|


#### Contains
```csharp
Bio.Util.LongSerialNumbers`1.Contains(`0)
```
Tells if an item already has a serial number

|Parameter Name|Remarks|
|--------------|-------|
|item|the item|

_returns: true if the item has previously been assigned a serial number; otherwise, false._

#### GetNew
```csharp
Bio.Util.LongSerialNumbers`1.GetNew(`0)
```
Assigns a serial number to a new item. Raises an exception of the item is not new.

|Parameter Name|Remarks|
|--------------|-------|
|item|The item|

_returns: The items serial number_

#### GetNewOrOld
```csharp
Bio.Util.LongSerialNumbers`1.GetNewOrOld(`0)
```
Returns the serial number of an item. If the item has already been assigned a serial number, returns that number; 
 otherwise, assigns a new number to the item and returns that new number.

|Parameter Name|Remarks|
|--------------|-------|
|item|The item|

_returns: The item's serial number_

#### GetOld
```csharp
Bio.Util.LongSerialNumbers`1.GetOld(`0)
```
Finds the serial number of item to which a serial number has already been assigned. Raises an exception of the item is new.

|Parameter Name|Remarks|
|--------------|-------|
|item|The item|

_returns: The serial number of that item._

#### TryGetOld
```csharp
Bio.Util.LongSerialNumbers`1.TryGetOld(`0,System.Int64@)
```
Finds the serial number of item to which a serial number has already been assigned.

|Parameter Name|Remarks|
|--------------|-------|
|item|The item|
|serialNumber|The serial number that was assigned to that item.|

_returns: true if the item has previously been assigned a serial number; otherwise, false._



### Properties

#### Count
Gets the number of elements present in the LongSerialNumbers.
#### Last
The last serial number assigned.

