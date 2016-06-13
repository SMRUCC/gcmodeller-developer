---
title: ParseAction
---

# ParseAction
_namespace: [Bio.Util.ArgumentParser](N-Bio.Util.ArgumentParser.html)_

ParseAction



### Properties

#### ArgumentString
Specifies that the string used to construct this argument should be stored here. Note that this MUST be of type string.
#### Ignore
Specifies that a field should not be parsed. This only is useful for public fields that would otherwise be automatically parsed.
#### Optional
Specifies that an element is optional. Note that all public fields are optional by default. This allows you to mark private or protected fields as parsable
#### Params
Behaves like the params keyword for methods: sucks up all the final arguments and constructs a list out of them. They must all be the same type, as
 specified by the type of the list that this attribute is attached to. This can only be placed on a member of type List. This is considered an optional
 argument, in the sense that if there are no arguments left, an empty list will be returned. It's up to the parsable type to decide if it wants to check
 that the list is non-empty in its FinalizeParse method.
#### Required
Specifies that a field is required when parsing.

