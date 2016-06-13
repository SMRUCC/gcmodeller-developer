---
title: RegexValidatedStringList
---

# RegexValidatedStringList
_namespace: [Bio.IO.BAM](N-Bio.IO.BAM.html)_

A list of strings where each item in the list has been validated to meet the conditions of a particular 
 regular expression, used to verify that any item retrieved from this list follows the condition given.

### Methods

#### #ctor
```csharp
Bio.IO.BAM.RegexValidatedStringList.#ctor(System.Text.RegularExpressions.Regex)
```
Initialize a list with a regular expression that all items must conform to.

|Parameter Name|Remarks|
|--------------|-------|
|validationRegEx|-|


#### Add
```csharp
Bio.IO.BAM.RegexValidatedStringList.Add(System.String)
```


|Parameter Name|Remarks|
|--------------|-------|
|item|-|


#### Clear
```csharp
Bio.IO.BAM.RegexValidatedStringList.Clear
```


#### Contains
```csharp
Bio.IO.BAM.RegexValidatedStringList.Contains(System.String)
```


|Parameter Name|Remarks|
|--------------|-------|
|item|-|


#### CopyTo
```csharp
Bio.IO.BAM.RegexValidatedStringList.CopyTo(System.String[],System.Int32)
```


|Parameter Name|Remarks|
|--------------|-------|
|array|-|
|arrayIndex|-|


#### GetEnumerator
```csharp
Bio.IO.BAM.RegexValidatedStringList.GetEnumerator
```


#### IndexOf
```csharp
Bio.IO.BAM.RegexValidatedStringList.IndexOf(System.String)
```


|Parameter Name|Remarks|
|--------------|-------|
|item|-|


#### Insert
```csharp
Bio.IO.BAM.RegexValidatedStringList.Insert(System.Int32,System.String)
```


|Parameter Name|Remarks|
|--------------|-------|
|index|-|
|item|-|


#### Remove
```csharp
Bio.IO.BAM.RegexValidatedStringList.Remove(System.String)
```


|Parameter Name|Remarks|
|--------------|-------|
|item|-|


#### RemoveAt
```csharp
Bio.IO.BAM.RegexValidatedStringList.RemoveAt(System.Int32)
```


|Parameter Name|Remarks|
|--------------|-------|
|index|-|


#### System#Collections#IEnumerable#GetEnumerator
```csharp
Bio.IO.BAM.RegexValidatedStringList.System#Collections#IEnumerable#GetEnumerator
```


#### throwErrorIfUnacceptableItem
```csharp
Bio.IO.BAM.RegexValidatedStringList.throwErrorIfUnacceptableItem(System.String)
```
Internal method that throws an error if the item is unacceptable, this error should never be thrown and users of the
 class can avoid this by calling ValidateItem before attempting to add the string to the list.

|Parameter Name|Remarks|
|--------------|-------|
|toAdd|-|


#### ValidateItem
```csharp
Bio.IO.BAM.RegexValidatedStringList.ValidateItem(System.String)
```
Validate that a string meets the criteria required to be added to the list

|Parameter Name|Remarks|
|--------------|-------|
|toAdd|-|




### Properties

#### Count

#### IsReadOnly

#### Item

#### items
Private list of validated items
#### regex
Regular expression used to validate items

