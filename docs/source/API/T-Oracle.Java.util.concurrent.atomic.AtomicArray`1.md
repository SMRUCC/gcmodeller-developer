---
title: AtomicArray`1
---

# AtomicArray`1
_namespace: [Oracle.Java.util.concurrent.atomic](N-Oracle.Java.util.concurrent.atomic.html)_



### Methods

#### compareAndSet
```csharp
Oracle.Java.util.concurrent.atomic.AtomicArray`1.compareAndSet(System.Int32,`0,`0)
```
Atomically sets the element at position i To the given updated value If the current value == the expected value.

|Parameter Name|Remarks|
|--------------|-------|
|i|the index|
|expect|the expected value|
|update|the New value|

_returns: true if successful. False return indicates that the actual value was Not equal to the expected value._

#### Get
```csharp
Oracle.Java.util.concurrent.atomic.AtomicArray`1.Get(System.Int32)
```
Gets the current value at position i.

|Parameter Name|Remarks|
|--------------|-------|
|i|the index|

_returns: the current value_

#### getAndSet
```csharp
Oracle.Java.util.concurrent.atomic.AtomicArray`1.getAndSet(System.Int32,`0)
```
Atomically sets the element at position i To the given value And returns the old value.

|Parameter Name|Remarks|
|--------------|-------|
|i|the index|
|newValue|the New value|

_returns: the previous value_

#### lazySet
```csharp
Oracle.Java.util.concurrent.atomic.AtomicArray`1.lazySet(System.Int32,`0)
```
Eventually sets the element at position i To the given value.

|Parameter Name|Remarks|
|--------------|-------|
|i|the index|
|newValue|the New value|


#### length
```csharp
Oracle.Java.util.concurrent.atomic.AtomicArray`1.length
```
Returns the length Of the array.
_returns: the length Of the array_

#### Set
```csharp
Oracle.Java.util.concurrent.atomic.AtomicArray`1.Set(System.Int32,`0)
```
Sets the element at position i To the given value.

|Parameter Name|Remarks|
|--------------|-------|
|i|the index|
|newValue|the New value|


#### ToString
```csharp
Oracle.Java.util.concurrent.atomic.AtomicArray`1.ToString
```
Returns the String representation Of the current values Of array.
_returns: the String representation of the current values of array_

#### weakCompareAndSet
```csharp
Oracle.Java.util.concurrent.atomic.AtomicArray`1.weakCompareAndSet(System.Int32,`0,`0)
```
Atomically sets the element at position i To the given updated value If the current value == the expected value.
 May fail spuriously And does Not provide ordering guarantees, so Is only rarely an appropriate alternative To compareAndSet.

|Parameter Name|Remarks|
|--------------|-------|
|i|the index|
|expect|the expected value|
|update|the New value|

_returns: true if successful_




