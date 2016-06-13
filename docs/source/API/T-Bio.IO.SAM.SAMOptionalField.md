---
title: SAMOptionalField
---

# SAMOptionalField
_namespace: [Bio.IO.SAM](N-Bio.IO.SAM.html)_

This class holds SAM optional field.

### Methods

#### IsValidTag
```csharp
Bio.IO.SAM.SAMOptionalField.IsValidTag(System.String)
```
Validates Tag.

|Parameter Name|Remarks|
|--------------|-------|
|tag|Tag value to validate.|


#### IsValidValue
```csharp
Bio.IO.SAM.SAMOptionalField.IsValidValue(System.String)
```
Validates Value.

|Parameter Name|Remarks|
|--------------|-------|
|value|Value to validate.|


#### IsValidVType
```csharp
Bio.IO.SAM.SAMOptionalField.IsValidVType(System.String)
```
Validates VType.

|Parameter Name|Remarks|
|--------------|-------|
|vtype|VType value to validate.|


#### ValidateTagRegex
```csharp
Bio.IO.SAM.SAMOptionalField.ValidateTagRegex(System.String)
```
Validates that a TAG is a valid regex by converting to an integer and testing it is in the appropriate range

|Parameter Name|Remarks|
|--------------|-------|
|tag|-|




### Properties

#### fieldValue
Holds value of the optional field.
#### Tag
Tag of the option field.
#### TagRegexExpr
Holds regular expression for Tag.
#### TagRegexExprPattern
Holds regular expression pattern of Tag.
#### tagValue
Holds tag value of the option field.
#### Value
Value of the optional field.
#### ValueIllegalCharacters
Holds illegal characters for value.
#### valueType
Holds type of the value present in the "Value" property.
#### VType
Type of the value present in the "Value" property.
#### VTypeAllowableValues
Holds allowable values for Vtype.

