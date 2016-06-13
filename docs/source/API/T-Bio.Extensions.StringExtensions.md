---
title: StringExtensions
---

# StringExtensions
_namespace: [Bio.Extensions](N-Bio.Extensions.html)_

StringExtensions

### Methods

#### Contains
```csharp
Bio.Extensions.StringExtensions.Contains(System.String,System.Char)
```
Implement the Contains(ch) method for PCL.

|Parameter Name|Remarks|
|--------------|-------|
|text|-|
|ch|-|


#### ProtectedSplit
```csharp
Bio.Extensions.StringExtensions.ProtectedSplit(System.String,System.Char,System.Char,System.Boolean,System.Char[])
```
Splits a string, but allows you to protect using, for example, balanced parentheses.

|Parameter Name|Remarks|
|--------------|-------|
|text|String to split|
|openParenCharacter|The open paren character|
|closeParenCharacter|The close paren character|
|removeEmptyItems|If true, the empty string will never by emitted.|
|splitCharacters|List of characters on which to split|

_returns: Strings between split characters that are not wrapped in protecting parens._

#### Reverse
```csharp
Bio.Extensions.StringExtensions.Reverse(System.String)
```
Reverse

|Parameter Name|Remarks|
|--------------|-------|
|text|text|

_returns: string_

#### ToByteArray
```csharp
Bio.Extensions.StringExtensions.ToByteArray(System.String)
```
Converts an inbound string to a byte array
_returns: Byte array_

#### ToMixedInvariant
```csharp
Bio.Extensions.StringExtensions.ToMixedInvariant(System.String)
```
ToMixedInvariant

|Parameter Name|Remarks|
|--------------|-------|
|text|text|

_returns: string_




