---
title: Extensions
---

# Extensions
_namespace: [Newtonsoft.Json.Schema](N-Newtonsoft.Json.Schema.html)_

Contains the JSON schema extension methods.

### Methods

#### IsValid
```csharp
Newtonsoft.Json.Schema.Extensions.IsValid(Newtonsoft.Json.Linq.JToken,Newtonsoft.Json.Schema.JsonSchema,System.Collections.Generic.IList{System.String}@)
```
Determines whether the @"T:Newtonsoft.Json.Linq.JToken" is valid.

|Parameter Name|Remarks|
|--------------|-------|
|source|The source @"T:Newtonsoft.Json.Linq.JToken" to test.|
|schema|The schema to test with.|
|errorMessages|When this method returns, contains any error messages generated while validating. |

_returns: true if the specified @"T:Newtonsoft.Json.Linq.JToken" is valid; otherwise, false.
            _

#### Validate
```csharp
Newtonsoft.Json.Schema.Extensions.Validate(Newtonsoft.Json.Linq.JToken,Newtonsoft.Json.Schema.JsonSchema,Newtonsoft.Json.Schema.ValidationEventHandler)
```
Validates the specified @"T:Newtonsoft.Json.Linq.JToken".

|Parameter Name|Remarks|
|--------------|-------|
|source|The source @"T:Newtonsoft.Json.Linq.JToken" to test.|
|schema|The schema to test with.|
|validationEventHandler|The validation event handler.|





