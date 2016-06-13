---
title: NullTerminatedStringFormatter
---

# NullTerminatedStringFormatter
_namespace: [Microsoft.Windows.ExtendedLinguisticServices](N-Microsoft.Windows.ExtendedLinguisticServices.html)_

Converts byte arrays containing Unicode null-terminated strings into .NET string objects.

### Methods

#### Format
```csharp
Microsoft.Windows.ExtendedLinguisticServices.NullTerminatedStringFormatter.Format(Microsoft.Windows.ExtendedLinguisticServices.MappingDataRange)
```
Converts a single @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingDataRange"[MappingDataRange] into a string, stripping the trailing null character.
 If the string doesn't contain null characters, the empty string is returned.

|Parameter Name|Remarks|
|--------------|-------|
|dataRange|The @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingDataRange"[MappingDataRange] to convert|

_returns: The resulting string_

#### FormatAll
```csharp
Microsoft.Windows.ExtendedLinguisticServices.NullTerminatedStringFormatter.FormatAll(Microsoft.Windows.ExtendedLinguisticServices.MappingPropertyBag)
```
Uses @"M:Microsoft.Windows.ExtendedLinguisticServices.NullTerminatedStringFormatter.Format(Microsoft.Windows.ExtendedLinguisticServices.MappingDataRange)"[Format] to format all the ranges of the supplied
 @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingPropertyBag"[MappingPropertyBag].

|Parameter Name|Remarks|
|--------------|-------|
|bag|The property bag to convert.|

_returns: An array of strings, one per @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingDataRange"[MappingDataRange]._




