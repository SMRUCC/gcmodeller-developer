---
title: StringFormatter
---

# StringFormatter
_namespace: [Microsoft.Windows.ExtendedLinguisticServices](N-Microsoft.Windows.ExtendedLinguisticServices.html)_

Converts byte arrays into Unicode (UTF-16) strings.

### Methods

#### Format
```csharp
Microsoft.Windows.ExtendedLinguisticServices.StringFormatter.Format(Microsoft.Windows.ExtendedLinguisticServices.MappingDataRange)
```
Converts a single @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingDataRange"[MappingDataRange] into a string.

|Parameter Name|Remarks|
|--------------|-------|
|dataRange|The @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingDataRange"[MappingDataRange] to convert|

_returns: The resulting string_

#### FormatAll
```csharp
Microsoft.Windows.ExtendedLinguisticServices.StringFormatter.FormatAll(Microsoft.Windows.ExtendedLinguisticServices.MappingPropertyBag)
```
Uses @"M:Microsoft.Windows.ExtendedLinguisticServices.StringFormatter.Format(Microsoft.Windows.ExtendedLinguisticServices.MappingDataRange)"[Format] to format all the ranges of the supplied
 MappingPropertyBag.

|Parameter Name|Remarks|
|--------------|-------|
|bag|The property bag to convert.|

_returns: An array of strings, one per @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingDataRange"[MappingDataRange]._




