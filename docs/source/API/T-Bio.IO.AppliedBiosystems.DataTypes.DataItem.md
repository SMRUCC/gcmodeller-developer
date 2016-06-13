---
title: DataItem
---

# DataItem
_namespace: [Bio.IO.AppliedBiosystems.DataTypes](N-Bio.IO.AppliedBiosystems.DataTypes.html)_

Data within applied biosystems format is broken up into individual data items, this is a base class containing common properties.

### Methods

#### Accept
```csharp
Bio.IO.AppliedBiosystems.DataTypes.DataItem.Accept(Bio.IO.AppliedBiosystems.DataParsers.IAb1DataVisitor)
```
Accept a visitor.

|Parameter Name|Remarks|
|--------------|-------|
|visitor|-|


#### Create
```csharp
Bio.IO.AppliedBiosystems.DataTypes.DataItem.Create
```
Create an instance of the derived type.



### Properties

#### Entry
Directory entry defining this element.
#### Name
The name of the data item.
#### Size
Size in bytes of the element.
#### Type
Element type definition.

