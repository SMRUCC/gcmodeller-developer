---
title: Number`1
---

# Number`1
_namespace: [Oracle.Java.Lang](N-Oracle.Java.Lang.html)_



### Methods

#### #ctor
```csharp
Oracle.Java.Lang.Number`1.#ctor
```
Creates a New AtomicInteger With initial value 0.

#### addAndGet
```csharp
Oracle.Java.Lang.Number`1.addAndGet(`0)
```
Atomically adds the given value To the current value.

|Parameter Name|Remarks|
|--------------|-------|
|delta|the value to add|

_returns: the updated value_

#### compareAndSet
```csharp
Oracle.Java.Lang.Number`1.compareAndSet(`0,`0)
```
Atomically sets the value To the given updated value If the current value == the expected value.

|Parameter Name|Remarks|
|--------------|-------|
|expect|the expected value|
|update|the New value|

_returns: true if successful. False return indicates that the actual value was Not equal to the expected value._

#### decrementAndGet
```csharp
Oracle.Java.Lang.Number`1.decrementAndGet
```
Atomically decrements by one the current value.
_returns: the updated value_

#### doubleValue
```csharp
Oracle.Java.Lang.Number`1.doubleValue
```
Returns the value Of the specified number As a Double. This may involve rounding.
_returns: the numeric value represented by this Object after conversion To type Double._

#### floatValue
```csharp
Oracle.Java.Lang.Number`1.floatValue
```
Returns the value Of the specified number As a float. This may involve rounding.
_returns: the numeric value represented by this Object after conversion To type float._

#### Get
```csharp
Oracle.Java.Lang.Number`1.Get
```
Gets the current value.
_returns: the current value_

#### getAndAdd
```csharp
Oracle.Java.Lang.Number`1.getAndAdd(`0)
```
Atomically adds the given value To the current value.

|Parameter Name|Remarks|
|--------------|-------|
|delta|the value to add|

_returns: the previous value_

#### getAndDecrement
```csharp
Oracle.Java.Lang.Number`1.getAndDecrement
```
Atomically decrements by one the current value.
_returns: the previous value_

#### getAndIncrement
```csharp
Oracle.Java.Lang.Number`1.getAndIncrement
```
Atomically increments by one the current value.
_returns: the previous value_

#### getAndSet
```csharp
Oracle.Java.Lang.Number`1.getAndSet(`0)
```
Atomically sets To the given value And returns the old value.

|Parameter Name|Remarks|
|--------------|-------|
|newValue|the New value|

_returns: the previous value_

#### incrementAndGet
```csharp
Oracle.Java.Lang.Number`1.incrementAndGet
```
Atomically increments by one the current value.
_returns: the updated value_

#### intValue
```csharp
Oracle.Java.Lang.Number`1.intValue
```
Returns the value Of the specified number As an int. This may involve rounding Or truncation.
_returns: the numeric value represented by this Object after conversion To type int._

#### lazySet
```csharp
Oracle.Java.Lang.Number`1.lazySet(`0)
```
Eventually sets To the given value.

|Parameter Name|Remarks|
|--------------|-------|
|newValue|the New value|


#### longValue
```csharp
Oracle.Java.Lang.Number`1.longValue
```
Returns the value Of the specified number As a Long. This may involve rounding Or truncation.
_returns: the numeric value represented by this Object after conversion To type Long._

#### Set
```csharp
Oracle.Java.Lang.Number`1.Set(`0)
```
Sets to the given value.

|Parameter Name|Remarks|
|--------------|-------|
|newValue|the New value|


#### ToString
```csharp
Oracle.Java.Lang.Number`1.ToString
```
Returns the String representation Of the current value.
_returns: the String representation of the current value._

#### weakCompareAndSet
```csharp
Oracle.Java.Lang.Number`1.weakCompareAndSet(`0,`0)
```
Atomically sets the value To the given updated value If the current value == the expected value.
 May fail spuriously And does Not provide ordering guarantees, so Is only rarely an appropriate alternative To compareAndSet.

|Parameter Name|Remarks|
|--------------|-------|
|expect|the expected value|
|update|the New value|

_returns: true if successful._




