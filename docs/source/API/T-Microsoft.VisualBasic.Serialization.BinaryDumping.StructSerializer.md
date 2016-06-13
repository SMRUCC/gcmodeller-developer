---
title: StructSerializer
---

# StructSerializer
_namespace: [Microsoft.VisualBasic.Serialization.BinaryDumping](N-Microsoft.VisualBasic.Serialization.BinaryDumping.html)_

Some times these method is not works well, not sure why?

### Methods

#### ByteToStructure``1
```csharp
Microsoft.VisualBasic.Serialization.BinaryDumping.StructSerializer.ByteToStructure``1(System.Byte[])
```
由byte数组转换为结构体(字符串类型以及Class类型都将会被序列化为内存指针，所以这个函数只适合于值类型的)

#### StructureToByte``1
```csharp
Microsoft.VisualBasic.Serialization.BinaryDumping.StructSerializer.StructureToByte``1(``0)
```
由结构体转换为byte数组(字符串类型以及Class类型都将会被序列化为内存指针，所以这个函数只适合于值类型的)




