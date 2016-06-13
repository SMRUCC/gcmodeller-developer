---
title: SearchConditionOperation
---

# SearchConditionOperation
_namespace: [Microsoft.Windows.Shell](N-Microsoft.Windows.Shell.html)_

Provides a set of flags to be used with @"T:Microsoft.Windows.Shell.SearchCondition" 
 to indicate the operation in @"T:Microsoft.Windows.Shell.SearchConditionFactory" methods.



### Properties

#### ApplicationSpecific
The application is free to interpret this in any suitable way.
#### DosWildcards
The value of the property must match the value of the constant, where '?' 
 matches any single character and '*' matches any sequence of characters.
#### Equal
The value of the property and the value of the constant must be equal.
#### GreaterThan
The value of the property must be greater than the value of the constant.
#### GreaterThanOrEqual
The value of the property must be greater than or equal to the value of the constant.
#### Implicit
An implicit comparison between the value of the property and the value of the constant.
#### LessThan
The value of the property must be less than the value of the constant.
#### LessThanOrEqual
The value of the property must be less than or equal to the value of the constant.
#### NotEqual
The value of the property and the value of the constant must not be equal.
#### ValueContains
The value of the property must contain the value of the constant.
#### ValueEndsWith
The value of the property must end with the value of the constant.
#### ValueNotContains
The value of the property must not contain the value of the constant.
#### ValueStartsWith
The value of the property must begin with the value of the constant.
#### WordEqual
The value of the property must contain a word that is the value of the constant.
#### WordStartsWith
The value of the property must contain a word that begins with the value of the constant.

