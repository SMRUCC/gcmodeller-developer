---
title: ItemScore
---

# ItemScore
_namespace: [Bio.Algorithms.Assembly.OverlapDeNovoAssembler](N-Bio.Algorithms.Assembly.OverlapDeNovoAssembler.html)_

An ItemScore is the overlap score between the current item (owner of this struct)
 and a lower-indexed item. The lower-indexed item may have been reversed or 
 complemented (or both) to get that score. We always perform reverse and/or
 complement on the lower-indexed item (at no loss of generality).

### Methods

#### #ctor
```csharp
Bio.Algorithms.Assembly.OverlapDeNovoAssembler.ItemScore.#ctor(Bio.Algorithms.Assembly.OverlapDeNovoAssembler.ItemScore)
```
Initializes a new instance of the ItemScore struct
 copy constructor

|Parameter Name|Remarks|
|--------------|-------|
|other|instance from which item score need to be copied|




### Properties

#### Complemented
true if the lower-indexed item was complemented
#### FirstOffset
the offset to apply to the first sequence (from the
 right if reversed, from the left if not reversed)
#### OtherItem
the pool index of the lower-indexed item
#### OverlapScore
the overlap score
#### Reversed
true if the lower-indexed item was reversed
#### SecondOffset
the offset to apply to the second sequence (always from 
 the left, since it's never reversed)

