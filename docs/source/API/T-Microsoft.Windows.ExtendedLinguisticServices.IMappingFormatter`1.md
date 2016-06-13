---
title: IMappingFormatter`1
---

# IMappingFormatter`1
_namespace: [Microsoft.Windows.ExtendedLinguisticServices](N-Microsoft.Windows.ExtendedLinguisticServices.html)_

Defines an interface with which the low-level data contained inside
 @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingPropertyBag"[MappingPropertyBag] and
 @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingDataRange"[MappingDataRange]
 objects can be formatted into .NET objects.

### Methods

#### Format
```csharp
Microsoft.Windows.ExtendedLinguisticServices.IMappingFormatter`1.Format(Microsoft.Windows.ExtendedLinguisticServices.MappingDataRange)
```
Formats a single @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingDataRange"[MappingDataRange] into the type specified by T.

|Parameter Name|Remarks|
|--------------|-------|
|dataRange|The @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingDataRange"[MappingDataRange] object to format.|

_returns: The formatted object constructed with the data contained inside the @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingDataRange"[MappingDataRange]._

#### FormatAll
```csharp
Microsoft.Windows.ExtendedLinguisticServices.IMappingFormatter`1.FormatAll(Microsoft.Windows.ExtendedLinguisticServices.MappingPropertyBag)
```
Formats all @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingDataRange"[MappingDataRanges] contained inside the @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingPropertyBag"[MappingPropertyBag].

|Parameter Name|Remarks|
|--------------|-------|
|bag|The @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingPropertyBag"[MappingPropertyBag] to format.|

_returns: An array of T objects which represent the data contained inside each @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingDataRange"[MappingDataRange] of the
 provided @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingPropertyBag"[MappingPropertyBag] object._




