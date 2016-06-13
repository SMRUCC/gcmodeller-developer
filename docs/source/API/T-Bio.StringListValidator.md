---
title: StringListValidator
---

# StringListValidator
_namespace: [Bio](N-Bio.html)_

A validator for string values that has a specific list of allowed values.

### Methods

#### #ctor
```csharp
Bio.StringListValidator.#ctor(System.Boolean,System.String[])
```
Constructor that allows case sensitivity to be specified.

|Parameter Name|Remarks|
|--------------|-------|
|ignoreCase|true means case will be ignored when validating.|
|values|An array of valid value strings.|


#### AddValidValues
```csharp
Bio.StringListValidator.AddValidValues(System.String[])
```
Add one or more strings to the list of valid values.

|Parameter Name|Remarks|
|--------------|-------|
|values|-|


#### IsValid
```csharp
Bio.StringListValidator.IsValid(System.String)
```
Given a string value, return true if the value is in the list.

|Parameter Name|Remarks|
|--------------|-------|
|parameterValue|The value.|

_returns: True if the value is valid._



### Properties

#### IgnoreCase
If IgnoreCase is false (the default), a string will only be considered
 valid if it matches one of the stored values exactly, including case.
 Otherwise, any case (including mixed) is accepted.
#### ValidValues
The list of allowed values.

