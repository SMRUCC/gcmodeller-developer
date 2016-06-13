---
title: StringArrayFormatter
---

# StringArrayFormatter
_namespace: [Microsoft.Windows.ExtendedLinguisticServices](N-Microsoft.Windows.ExtendedLinguisticServices.html)_

Converts registry-formatted data into string arrays.

### Methods

#### Format
```csharp
Microsoft.Windows.ExtendedLinguisticServices.StringArrayFormatter.Format(Microsoft.Windows.ExtendedLinguisticServices.MappingDataRange)
```
Converts a single @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingDataRange"[MappingDataRange] into a string array by splitting on each null character and
 removing the empty entries.

|Parameter Name|Remarks|
|--------------|-------|
|dataRange|The @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingDataRange"[MappingDataRange] to convert|

_returns: The resulting string array_

#### FormatAll
```csharp
Microsoft.Windows.ExtendedLinguisticServices.StringArrayFormatter.FormatAll(Microsoft.Windows.ExtendedLinguisticServices.MappingPropertyBag)
```
Uses @"M:Microsoft.Windows.ExtendedLinguisticServices.StringArrayFormatter.Format(Microsoft.Windows.ExtendedLinguisticServices.MappingDataRange)"[Format] to format all the ranges of the supplied
 @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingPropertyBag"[MappingPropertyBag].

|Parameter Name|Remarks|
|--------------|-------|
|bag|The property bag to convert.|

_returns: An array of string arrays, one per @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingDataRange"[MappingDataRange]._




