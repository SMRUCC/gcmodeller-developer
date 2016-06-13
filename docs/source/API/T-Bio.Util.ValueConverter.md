---
title: ValueConverter
---

# ValueConverter
_namespace: [Bio.Util](N-Bio.Util.html)_

A set of predefined converter pairs for use with ConvertValueView.

### Methods

#### GetCharToGeneric``1
```csharp
Bio.Util.ValueConverter.GetCharToGeneric``1
```
Tries to convert a character into any other type.
_returns: The converter_



### Properties

#### BoolToChar01
Converts boolean false to the character '0' and boolean true to character '1'
#### Char01ToBool
Converts the character '0' to boolean false and the character '1' to boolean true.
#### Char01ToMinusOneOne
Converts the character '0' to the double -1.0 and the character '1' to the double 1.0.
#### CharACTGToDouble0123Converter
Converts the characters 'A', 'C', 'T', 'G' to doubles 0.0, 1.0, 3.0, 2.0.
 Lower case is accepted, the inverse always produces uppercase.
#### CharToDouble
Converts the characters '0' ... '9' to the doubles 0.0 ... 9.0.
#### CharToInt
Converts the characters '0'...'9' to the integers 0 ... 9
#### CharToString
Converts a character into a string.
#### DoubleToChar
Converts the doubles 0.0 ... 9.0 to the characters '0' ... '9'.
#### DoubleToInt
Converts a double to an int.
#### DoubleToInt01
Converts a double to an int 0 or int 1.
#### Int01ToDouble
Converts an int 0 and int 1 to a double
#### IntToChar
Converts the integers 0...9 to the characters '0' ... '9'
#### IntToDouble
Converts an integer to a double
#### MinusOneOneToChar01
Converts the double -1.0 to the character '0' and the double 1.0 to the character '1'.
#### StringToChar
Converts a length-one string into a character.

