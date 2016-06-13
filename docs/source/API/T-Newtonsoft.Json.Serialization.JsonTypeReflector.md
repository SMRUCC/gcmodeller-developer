---
title: JsonTypeReflector
---

# JsonTypeReflector
_namespace: [Newtonsoft.Json.Serialization](N-Newtonsoft.Json.Serialization.html)_



### Methods

#### CreateJsonConverterInstance
```csharp
Newtonsoft.Json.Serialization.JsonTypeReflector.CreateJsonConverterInstance(System.Type,System.Object[])
```
Lookup and create an instance of the JsonConverter type described by the argument.

|Parameter Name|Remarks|
|--------------|-------|
|converterType|The JsonConverter type to create.|
|converterArgs|Optional arguments to pass to an initializing constructor of the JsonConverter.
            If null, the default constructor is used.|


#### GetJsonConverterCreator
```csharp
Newtonsoft.Json.Serialization.JsonTypeReflector.GetJsonConverterCreator(System.Type)
```
Create a factory function that can be used to create instances of a JsonConverter described by the 
 argument type. The returned function can then be used to either invoke the converter's default ctor, or any 
 parameterized constructors by way of an object array.




