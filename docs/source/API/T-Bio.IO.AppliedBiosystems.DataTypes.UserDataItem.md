---
title: UserDataItem
---

# UserDataItem
_namespace: [Bio.IO.AppliedBiosystems.DataTypes](N-Bio.IO.AppliedBiosystems.DataTypes.html)_

This item contains custom users specific information, at the moment the parser ignores this. Once a use cases arises that
 requires this functionality it may be implemented. This is unlikely as this is a legacy data type.

### Methods

#### Accept
```csharp
Bio.IO.AppliedBiosystems.DataTypes.UserDataItem.Accept(Bio.IO.AppliedBiosystems.DataParsers.IAb1DataVisitor)
```
Accept a visitor.

|Parameter Name|Remarks|
|--------------|-------|
|visitor|-|


#### Create
```csharp
Bio.IO.AppliedBiosystems.DataTypes.UserDataItem.Create
```
Create an instance of the user type.



### Properties

#### Name
The name of the data item.
#### Size
Size in bytes of the element.
#### Type
Element type definition.
#### Value
Item value.

