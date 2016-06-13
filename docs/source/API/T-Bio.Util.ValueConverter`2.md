---
title: ValueConverter`2
---

# ValueConverter`2
_namespace: [Bio.Util](N-Bio.Util.html)_

A pair of functions used by ConvertView to transform a matrix's non-missing values from one type to another. The two functions are
 perfect inverses of each other.

### Methods

#### #ctor
```csharp
Bio.Util.ValueConverter`2.#ctor(System.Func{`0,`1},System.Func{`1,`0})
```
Initializes a new instance of the ValueConverter class.

|Parameter Name|Remarks|
|--------------|-------|
|convertForward|A function used to a matrix's non-missing values from one type to another.|
|convertBackward|The perfect inverse of ConvertForward|




### Properties

#### ConvertBackward
The perfect inverse of ConvertForward
#### ConvertForward
A function used to a matrix's non-missing values from one type to another.
#### Inverted
The ValueConverter that reverses ConvertForward and ConvertBackward

