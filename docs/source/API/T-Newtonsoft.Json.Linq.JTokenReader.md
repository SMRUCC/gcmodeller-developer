---
title: JTokenReader
---

# JTokenReader
_namespace: [Newtonsoft.Json.Linq](N-Newtonsoft.Json.Linq.html)_

Represents a reader that provides fast, non-cached, forward-only access to serialized JSON data.

### Methods

#### #ctor
```csharp
Newtonsoft.Json.Linq.JTokenReader.#ctor(Newtonsoft.Json.Linq.JToken)
```
Initializes a new instance of the @"T:Newtonsoft.Json.Linq.JTokenReader" class.

|Parameter Name|Remarks|
|--------------|-------|
|token|The token to read from.|


#### Read
```csharp
Newtonsoft.Json.Linq.JTokenReader.Read
```
Reads the next JSON token from the stream.
_returns: 
            true if the next token was read successfully; false if there are no more tokens to read.
            _

#### ReadAsBytes
```csharp
Newtonsoft.Json.Linq.JTokenReader.ReadAsBytes
```
Reads the next JSON token from the stream as a @"T:System.Byte"[].
_returns: 
            A @"T:System.Byte"[] or a null reference if the next JSON token is null. This method will return null at the end of an array.
            _

#### ReadAsDateTime
```csharp
Newtonsoft.Json.Linq.JTokenReader.ReadAsDateTime
```
Reads the next JSON token from the stream as a @"T:System.Nullable`1".
_returns: A @"T:System.String". This method will return null at the end of an array._

#### ReadAsDateTimeOffset
```csharp
Newtonsoft.Json.Linq.JTokenReader.ReadAsDateTimeOffset
```
Reads the next JSON token from the stream as a @"T:System.Nullable`1".
_returns: A @"T:System.Nullable`1". This method will return null at the end of an array._

#### ReadAsDecimal
```csharp
Newtonsoft.Json.Linq.JTokenReader.ReadAsDecimal
```
Reads the next JSON token from the stream as a @"T:System.Nullable`1".
_returns: A @"T:System.Nullable`1". This method will return null at the end of an array._

#### ReadAsInt32
```csharp
Newtonsoft.Json.Linq.JTokenReader.ReadAsInt32
```
Reads the next JSON token from the stream as a @"T:System.Nullable`1".
_returns: A @"T:System.Nullable`1". This method will return null at the end of an array._

#### ReadAsString
```csharp
Newtonsoft.Json.Linq.JTokenReader.ReadAsString
```
Reads the next JSON token from the stream as a @"T:System.String".
_returns: A @"T:System.String". This method will return null at the end of an array._



### Properties

#### CurrentToken
Gets the @"T:Newtonsoft.Json.Linq.JToken" at the reader's current position.
#### Path
Gets the path of the current JSON token.

