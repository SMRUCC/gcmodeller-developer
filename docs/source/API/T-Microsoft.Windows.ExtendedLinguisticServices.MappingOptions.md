---
title: MappingOptions
---

# MappingOptions
_namespace: [Microsoft.Windows.ExtendedLinguisticServices](N-Microsoft.Windows.ExtendedLinguisticServices.html)_

Contains options for text recognition. The values stored in this structure affect the behavior and results
 of MappingRecognizeText.

### Methods

#### #ctor
```csharp
Microsoft.Windows.ExtendedLinguisticServices.MappingOptions.#ctor
```
Public constructor. Initializes an empty instance of MappingOptions.



### Properties

#### InputContentType
Optional. A string, following the format of the MIME content types, that identifies the format that the service
 should be able to interpret when the application passes data. Examples of content types are "text/plain",
 "text/html", and "text/css". The application can set this member to null to indicate the "text/plain"
 content type.

 In Windows 7, the ELS services support only the content type "text/plain". A content type specification
 can be found at the IANA website: http://www.iana.org/assignments/media-types/text/
#### InputLanguage
Optional. An input language string, following the IETF naming convention, that identifies the input language
 that the service should be able to accept. The application can set this member to null to indicate that
 the service is free to interpret the input as any input language it supports.
#### InputScript
Optional. A standard Unicode script name that should be accepted by the service. The application can set this
 member to null to let the service decide how handle the input.
#### OutputContentType
Optional. A string, following the format of the MIME content types, that identifies the format in which the
 service should retrieve data. The application can set this member to NULL to let the service decide the output
 content type.
#### OutputLanguage
Optional. An output language string, following the IETF naming convention, that identifies the output language
 that the service should be able to use to produce results. The application can set this member to null if
 the service should decide the output language.
#### OutputScript
Optional. A standard Unicode script name that the service should use to retrieve results. The application can
 set this member to null to let the service decide the output script.
#### ServiceFlag
Optional. Private flag that a service provider defines to affect service behavior. Services can interpret this
 flag as they require.

 For Windows 7, none of the available ELS services support flags.

