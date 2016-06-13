---
title: MappingService
---

# MappingService
_namespace: [Microsoft.Windows.ExtendedLinguisticServices](N-Microsoft.Windows.ExtendedLinguisticServices.html)_

Represents an ELS service.
 A detailed overview of the Extended Linguistic Services platform is available at:
 http://msdn.microsoft.com/en-us/library/dd317839(VS.85).aspx

### Methods

#### #ctor
```csharp
Microsoft.Windows.ExtendedLinguisticServices.MappingService.#ctor(System.Guid)
```
Constructs a new @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingService"[MappingService] object by instanciating an ELS service
 by its guid. For Windows 7, the only supported GUIDs are provided as
 readonly members of the @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingAvailableServices"[MappingAvailableServices] class.

 If the service
 with the specified guid doesn't exist, a @"T:Microsoft.Windows.ExtendedLinguisticServices.LinguisticException"[LinguisticException] is thrown.

|Parameter Name|Remarks|
|--------------|-------|
|serviceIdentifier|The guid of the service to instantiate.|


#### BeginDoAction
```csharp
Microsoft.Windows.ExtendedLinguisticServices.MappingService.BeginDoAction(Microsoft.Windows.ExtendedLinguisticServices.MappingPropertyBag,System.Int32,System.String,System.AsyncCallback,System.Object)
```
Causes an ELS service to perform an action after text recognition has occurred. For example,
 a phone dialer service first must recognize phone numbers and then can perform the "action"
 of dialing a number.

|Parameter Name|Remarks|
|--------------|-------|
|bag|A @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingPropertyBag"[MappingPropertyBag] object containing the results of a previous call to
 MappingService.MappingRecognizeText. This parameter cannot be set to null.|
|rangeIndex|A starting index inside the text recognition results for a recognized
 text range. This value should be between 0 and the range count.|
|actionId|The identifier of the action to perform.
 This parameter cannot be set to null.|
|asyncCallback|An application callback delegate to receive callbacks with the results from
 the action operation. Cannot be set to null.|
|callerData|Optional. Private application object passed to the callback function
 by a service after the action operation is complete. The application must set this parameter to null
 to indicate no private application data.|

_returns: A @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingActionAsyncResult"[MappingActionAsyncResult] object describing the asynchronous operation._

#### BeginRecognizeText
```csharp
Microsoft.Windows.ExtendedLinguisticServices.MappingService.BeginRecognizeText(System.String,System.Int32,System.Int32,Microsoft.Windows.ExtendedLinguisticServices.MappingOptions,System.AsyncCallback,System.Object)
```
Calls an ELS service to recognize text. For example, the Microsoft Language Detection service
 will attempt to recognize the language in which the input text is written. The execution will be
 handled in a thread from the managed thread pool, and the asynchronous wait handle of the returned
 @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingRecognizeAsyncResult"[MappingRecognizeAsyncResult] object will be notified when the operation completes. The results of
 the call will be stored inside the @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingRecognizeAsyncResult"[MappingRecognizeAsyncResult] object.

|Parameter Name|Remarks|
|--------------|-------|
|text|The text to recognize. The text must be UTF-16, but some services have additional
 requirements for the input format. This parameter cannot be set to null.|
|length|Length, in characters, of the text specified in text.|
|index|Index inside the specified text to be used by the service. This value should be
 between 0 and length-1. If the application wants to process the entire text, it should set this
 parameter to 0.|
|options|Optional. A @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingOptions"[MappingOptions] object containing options that affect the result and
 behavior of text recognition. The application does not have to specify values for all object members.
 This parameter can be set to null to use the default mapping options.|
|asyncCallback|An application callback delegate to receive callbacks with the results from
 the recognize operation. Cannot be set to null.|
|callerData|Optional. Private application object passed to the callback function
 by a service after text recognition is complete. The application must set this parameter to null to
 indicate no private application data.|

_returns: A @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingRecognizeAsyncResult"[MappingRecognizeAsyncResult] object describing the asynchronous operation._

#### DoAction
```csharp
Microsoft.Windows.ExtendedLinguisticServices.MappingService.DoAction(Microsoft.Windows.ExtendedLinguisticServices.MappingPropertyBag,System.Int32,System.String)
```
Causes an ELS service to perform an action after text recognition has occurred. For example,
 a phone dialer service first must recognize phone numbers and then can perform the "action"
 of dialing a number.

|Parameter Name|Remarks|
|--------------|-------|
|bag|A @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingPropertyBag"[MappingPropertyBag] object containing the results of a previous call to
 MappingService.MappingRecognizeText. This parameter cannot be set to null.|
|rangeIndex|A starting index inside the text recognition results for a recognized
 text range. This value should be between 0 and the range count.|
|actionId|The identifier of the action to perform.
 This parameter cannot be set to null.|


#### EndDoAction
```csharp
Microsoft.Windows.ExtendedLinguisticServices.MappingService.EndDoAction(Microsoft.Windows.ExtendedLinguisticServices.MappingActionAsyncResult)
```
Waits for the asynchronous operation to complete.

|Parameter Name|Remarks|
|--------------|-------|
|asyncResult|The MappingActionAsyncResult object associated with the operation.|


#### EndRecognizeText
```csharp
Microsoft.Windows.ExtendedLinguisticServices.MappingService.EndRecognizeText(Microsoft.Windows.ExtendedLinguisticServices.MappingRecognizeAsyncResult)
```
Waits for the asynchronous operation to complete.

|Parameter Name|Remarks|
|--------------|-------|
|asyncResult|The @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingRecognizeAsyncResult"[MappingRecognizeAsyncResult] object associated with the operation.|


#### GetServices
```csharp
Microsoft.Windows.ExtendedLinguisticServices.MappingService.GetServices(Microsoft.Windows.ExtendedLinguisticServices.MappingEnumOptions)
```
Retrieves a list of available ELS platform-supported services, along with associated
 information, according to application-specified criteria.

|Parameter Name|Remarks|
|--------------|-------|
|options|Optional. A @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingEnumOptions"[MappingEnumOptions] object containing criteria to use during
 enumeration of services. The application specifies null for this parameter to retrieve all
 installed services.|

_returns: An array of @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingService"[MappingService] objects matching the criteria supplied in the options
 parameter._

#### RecognizeText
```csharp
Microsoft.Windows.ExtendedLinguisticServices.MappingService.RecognizeText(System.String,System.Int32,System.Int32,Microsoft.Windows.ExtendedLinguisticServices.MappingOptions)
```
Calls an ELS service to recognize text. For example, the Microsoft Language Detection service
 will attempt to recognize the language in which the input text is written.

|Parameter Name|Remarks|
|--------------|-------|
|text|The text to recognize. The text must be UTF-16, but some services have additional
 requirements for the input format. This parameter cannot be set to null.|
|length|Length, in characters, of the text specified in text.|
|index|Index inside the specified text to be used by the service. This value should be
 between 0 and length-1. If the application wants to process the entire text, it should set this
 parameter to 0.|
|options|Optional. A @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingOptions"[MappingOptions] object containing options that affect the result and
 behavior of text recognition. The application does not have to specify values for all object members.
 This parameter can be set to null to use the default mapping options.|

_returns: A @"T:Microsoft.Windows.ExtendedLinguisticServices.MappingPropertyBag"[MappingPropertyBag] object in which the service has stored its results. The structure is filled
 with information produced by the service during text recognition._

#### ThrowIfNotWin7
```csharp
Microsoft.Windows.ExtendedLinguisticServices.MappingService.ThrowIfNotWin7
```
Throws PlatformNotSupportedException if the application is not running on Windows 7



### Properties

#### BuildVersion
Build version that is used to track changes to the service.
#### Category
The service category for the service, for example, "Transliteration".
#### Copyright
Copyright information about the service.
#### Description
The service description. This text can be localized.
#### Guid
Globally unique identifier (guid) for the service.
#### InputContentTypes
Optional. A collection of input content types, following the format of the MIME content types, that
 identify the format that the service interprets when the application passes data. Examples of
 content types are "text/plain", "text/html" and "text/css".
#### InputLanguages
A collection of the input languages, following the IETF naming convention, that the service accepts. This
 member is set to null if the service can work with any input language.
#### InputScripts
A collection of input scripts, with Unicode standard script names, that are supported by the service.
 This member is set to null if the service can work with any scripts, or if the service ignores the
 input scripts.
#### IsOneToOneLanguageMapping
Flag indicating the language mapping between input language and output language that is supported
 by the service. Possible values are shown in the following table.
 0 - The input and output languages are not paired and the service can receive data in any of the
 input languages and render data in any of the output languages.
 1 - The arrays of the input and output languages for the service are paired. In other words, given
 a particular input language, the service retrieves results in the paired language defined in the
 output language array. Use of the language pairing can be useful, for example, in bilingual
 dictionary scenarios.
#### IsPlatformSupported
Indicates whether this feature is supported on the current platform.
#### MajorVersion
Major version number that is used to track changes to the service.
#### MinorVersion
Minor version number that is used to track changes to the service.
#### OutputContentTypes
Optional. A collection of output content types, following the format of the MIME content types, that
 identify the format in which the service retrieves data.
#### OutputLanguages
A collection of output languages, following the IETF naming convention, in which the service can retrieve
 results. This member is set to null if the service can retrieve results in any language, or if the service
 ignores the output language.
#### OutputScripts
A collection of output scripts supported by the service. This member is set to null if the service can work with
 any scripts, or the service ignores the output scripts.
#### RunningOnWin7
Determines if the application is running on Windows 7
#### StepVersion
Step version that is used to track changes to the service.

