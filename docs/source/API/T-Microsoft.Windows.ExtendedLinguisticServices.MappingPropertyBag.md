---
title: MappingPropertyBag
---

# MappingPropertyBag
_namespace: [Microsoft.Windows.ExtendedLinguisticServices](N-Microsoft.Windows.ExtendedLinguisticServices.html)_

Contains the text recognition data properties retrieved by MappingService.RecognizeText or
 MappingService.BeginRecognizeText.

### Methods

#### Dispose
```csharp
Microsoft.Windows.ExtendedLinguisticServices.MappingPropertyBag.Dispose(System.Boolean)
```
Clean up both managed and native resources.

|Parameter Name|Remarks|
|--------------|-------|
|disposed|-|


#### Finalize
```csharp
Microsoft.Windows.ExtendedLinguisticServices.MappingPropertyBag.Finalize
```
Frees all unmanaged resources allocated for the property bag, if needed.

#### FormatData``1
```csharp
Microsoft.Windows.ExtendedLinguisticServices.MappingPropertyBag.FormatData``1(Microsoft.Windows.ExtendedLinguisticServices.IMappingFormatter{``0})
```
Formats the low-level data contained in this @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingPropertyBag"[MappingPropertyBag] using an implementation of the
 @"T:Microsoft.Windows.ExtendedLinguisticServices.IMappingFormatter`1"[IMappingFormatter] interface.

|Parameter Name|Remarks|
|--------------|-------|
|formatter|The formatter to be used in the formatting.|


#### GetResultRanges
```csharp
Microsoft.Windows.ExtendedLinguisticServices.MappingPropertyBag.GetResultRanges
```
An array of @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingDataRange"[MappingDataRange] objects containing all recognized text range results. This member is populated
 by MappingService.RecognizeText or asynchronously with
 MappingService.BeginRecognizeText.




