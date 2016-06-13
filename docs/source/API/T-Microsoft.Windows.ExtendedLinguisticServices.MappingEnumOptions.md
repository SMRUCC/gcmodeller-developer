---
title: MappingEnumOptions
---

# MappingEnumOptions
_namespace: [Microsoft.Windows.ExtendedLinguisticServices](N-Microsoft.Windows.ExtendedLinguisticServices.html)_

Contains options used to enumerate ELS services.

### Methods

#### #ctor
```csharp
Microsoft.Windows.ExtendedLinguisticServices.MappingEnumOptions.#ctor
```
Public constructor. Initializes an empty instance of @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingEnumOptions"[MappingEnumOptions].



### Properties

#### Category
Optional. A service category, for example, "Transliteration". The application must set this member to null
 if the service category is not a search criterion.
#### Guid
Optional. A globally unique identifier (guid) structure for a specific service. The application must
 avoid setting this member at all if the guid is not a search criterion.
#### InputContentType
Optional. A string, following the format of the MIME content types, that identifies the format that the
 services should be able to interpret when the application passes data. Examples of content types are
 "text/plain", "text/html", and "text/css". The application can set this member to null if the input content
 type is not a search criterion.

 In Windows 7, the ELS services support only the content type "text/plain". A content type specification
 can be found at the IANA website: http://www.iana.org/assignments/media-types/text/
#### InputLanguage
Optional. An input language string, following the IETF naming convention, that identifies the input language
 that services should accept. The application can set this member to null if the supported input language is
 not a search criterion.
#### InputScript
Optional. A standard Unicode script name that can be accepted by services. The application set this member to
 null if the input script is not a search criterion.
#### OutputContentType
Optional. A string, following the format of the MIME content types, that identifies the format in which the
 services retrieve data. The application can set this member to null if the output content type is not a search
 criterion.
#### OutputLanguage
Optional. An output language string, following the IETF naming convention, that identifies the output language
 that services use to retrieve results. The application can set this member to null if the output language is
 not a search criterion.
#### OutputScript
Optional. A standard Unicode script name used by services. The application can set this member to
 null if the output script is not a search criterion.

