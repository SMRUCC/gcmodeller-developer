---
title: MappingDataRange
---

# MappingDataRange
_namespace: [Microsoft.Windows.ExtendedLinguisticServices](N-Microsoft.Windows.ExtendedLinguisticServices.html)_

Contains text recognition results for a recognized text subrange. An array of structures of this type
 is retrieved by an ELS service in a @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingPropertyBag"[MappingPropertyBag] structure.

### Methods

#### FormatData``1
```csharp
Microsoft.Windows.ExtendedLinguisticServices.MappingDataRange.FormatData``1(Microsoft.Windows.ExtendedLinguisticServices.IMappingFormatter{``0})
```
Formats the low-level data contained in this @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingDataRange"[MappingDataRange] using an implementation of the
 @"T:Microsoft.Windows.ExtendedLinguisticServices.IMappingFormatter`1"[IMappingFormatter] interface.

|Parameter Name|Remarks|
|--------------|-------|
|formatter|The formatter to be used in the formatting.|

_returns: A formatted version of this @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingDataRange"[MappingDataRange]._

#### GetData
```csharp
Microsoft.Windows.ExtendedLinguisticServices.MappingDataRange.GetData
```
The data retrieved as service output associated with the subrange. This data must be of the format indicated
 by the content type supplied in the @"P:Microsoft.Windows.ExtendedLinguisticServices.MappingDataRange.ContentType"[ContentType] property.



### Properties

#### ActionDisplayNames
Available action display names for this data range. These strings can be localized.

 In Windows 7, the ELS services do not expose any actions.
#### ActionIds
Available action IDs for this data range. Usable for calling @"M:Microsoft.Windows.ExtendedLinguisticServices.MappingService.DoAction(Microsoft.Windows.ExtendedLinguisticServices.MappingPropertyBag,System.Int32,System.String)"[MappingService.DoAction] or
 @"M:Microsoft.Windows.ExtendedLinguisticServices.MappingService.BeginDoAction(Microsoft.Windows.ExtendedLinguisticServices.MappingPropertyBag,System.Int32,System.String,System.AsyncCallback,System.Object)"[MappingService.BeginDoAction].

 In Windows 7, the ELS services do not expose any actions.
#### ContentType
A string specifying the MIME content type of the data returned by @"M:Microsoft.Windows.ExtendedLinguisticServices.MappingDataRange.GetData"[GetData()]. Examples of
 content types are "text/plain", "text/html", and "text/css".

 In Windows 7, the ELS services support only the content type "text/plain". A content type specification
 can be found at the IANA website: http://www.iana.org/assignments/media-types/text/
#### EndIndex
Index of the end of the subrange in the text, where 0 indicates the first character at of the string
 passed to MappingService.RecognizeText or
 MappingService.BeginRecognizeText, instead of an offset to the
 index passed to the function in the index parameter. The value should be less than the entire length
 of the text.
#### StartIndex
Index of the beginning of the subrange in the text, where 0 indicates the first character of the string
 passed to MappingService.RecognizeText or
 MappingService.BeginRecognizeText, instead of an offset to the
 index passed to the function in the index parameter. The value should be less than the entire length
 of the text.

