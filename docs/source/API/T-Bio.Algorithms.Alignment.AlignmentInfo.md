---
title: AlignmentInfo
---

# AlignmentInfo
_namespace: [Bio.Algorithms.Alignment](N-Bio.Algorithms.Alignment.html)_

This class defines generic properties of any alignment algorithm.

### Methods

#### #ctor
```csharp
Bio.Algorithms.Alignment.AlignmentInfo.#ctor(System.String,System.String,System.Boolean,System.String,System.String,Bio.IParameterValidator)
```
Initializes a new instance of the AlignmentInfo class, 
 specifying all properties.

|Parameter Name|Remarks|
|--------------|-------|
|name|Name of the property|
|description|A friendly description of property.|
|required|True if this is a required property.|
|defaultValue|The default value that will be used (expressed as a string).|
|dataType|The data type: INT, FLOAT, or STRINGLIST.|
|validator|The validation object, or null if no validation is required.|


#### ValidateDataType
```csharp
Bio.Algorithms.Alignment.AlignmentInfo.ValidateDataType(System.String)
```
Validate the data type value

|Parameter Name|Remarks|
|--------------|-------|
|dataType|Type to be validated|




### Properties

#### dataType
Gets or sets data type ("int", "double", "float" or "string") of parameter.
#### DefaultValue
Gets or sets default value (as a string). Ignored if Required = true.
#### Description
Gets or sets description of the parameter's meaning.
#### FloatType
"float" data type argument
#### IntType
"int" data type argument
#### Name
Gets or sets the name of attribute.
#### Required
Gets or sets a value indicating whether the parameter is required property or not.
#### StringListType
"string" data type argument
#### Validator
Gets or sets validation object that tests values. If this is null, 
 any value will be accepted

