---
title: SerialNumbers`1
---

# SerialNumbers`1
_namespace: [Bio.Util](N-Bio.Util.html)_

Assigns serial number of objects

### Methods

#### #ctor
```csharp
Bio.Util.SerialNumbers`1.#ctor(System.Collections.Generic.IEnumerable{`0})
```
Create a new SerialNumbers object for assign serial numbers to values and assign serial numbers to the values in the sequence.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|-|


#### Contains
```csharp
Bio.Util.SerialNumbers`1.Contains(`0)
```
Tells if an item already has a serial number

|Parameter Name|Remarks|
|--------------|-------|
|item|the item|

_returns: true if the item has previously been assigned a serial number; otherwise, false._

#### GetItem
```csharp
Bio.Util.SerialNumbers`1.GetItem(System.Int32)
```
Given a serialNumber, return the item with that serial number

|Parameter Name|Remarks|
|--------------|-------|
|serialNumber|The serial number of interest|

_returns: The item with that serial number_

#### GetNew
```csharp
Bio.Util.SerialNumbers`1.GetNew(`0)
```
Assigns a serial number to a new item. Raises an exception of the item is not new.

|Parameter Name|Remarks|
|--------------|-------|
|item|The item|

_returns: The items serial number_

#### GetNewOrOld
```csharp
Bio.Util.SerialNumbers`1.GetNewOrOld(`0)
```
Returns the serial number of an item. If the item has already been assigned a serial number, returns that number; 
 otherwise, assigns a new number to the item and returns that new number.

|Parameter Name|Remarks|
|--------------|-------|
|item|The item|

_returns: The item's serial number_

#### GetOld
```csharp
Bio.Util.SerialNumbers`1.GetOld(`0)
```
Finds the serial number of item to which a serial number has already been assigned. Raises an exception of the item is new.

|Parameter Name|Remarks|
|--------------|-------|
|item|The item|

_returns: The serial number of that item._

#### Save
```csharp
Bio.Util.SerialNumbers`1.Save(System.IO.TextWriter)
```
Write the items in order to a TextWriter

#### TryGetOld
```csharp
Bio.Util.SerialNumbers`1.TryGetOld(`0,System.Int32@)
```
Finds the serial number of item to which a serial number has already been assigned.

|Parameter Name|Remarks|
|--------------|-------|
|item|The item|
|serialNumber|The serial number that was assigned to that item.|

_returns: true if the item has previously been assigned a serial number; otherwise, false._



### Properties

#### Count
The number of items to which serial numbers have been assigned. This is always one more than the largest serial number.
#### ItemList
A list of the items in order.
#### ItemToSerialNumber
A mapping from items to serial numbers
#### Last
The last serial number assigned.

