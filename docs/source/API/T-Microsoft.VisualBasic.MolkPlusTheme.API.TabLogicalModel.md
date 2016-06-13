---
title: TabLogicalModel
---

# TabLogicalModel
_namespace: [Microsoft.VisualBasic.MolkPlusTheme.API](N-Microsoft.VisualBasic.MolkPlusTheme.API.html)_

仅涉及集合的逻辑操作，不涉及UI的修饰

### Methods

#### Add
```csharp
Microsoft.VisualBasic.MolkPlusTheme.API.TabLogicalModel.Add(System.Int32,System.Windows.Forms.Control)
```
只会想字典里面添加控件句柄，而不会将控件切换到最前面

|Parameter Name|Remarks|
|--------------|-------|
|key|-|
|value|-|


#### GetHandle
```csharp
Microsoft.VisualBasic.MolkPlusTheme.API.TabLogicalModel.GetHandle(System.Windows.Forms.Control)
```
不存在则返回-1

|Parameter Name|Remarks|
|--------------|-------|
|Control|-|


#### Select
```csharp
Microsoft.VisualBasic.MolkPlusTheme.API.TabLogicalModel.Select(System.Windows.Forms.Control)
```
函数在切换了指定的控件至最前之后还会自动定位以及调整大小

|Parameter Name|Remarks|
|--------------|-------|
|Panel|所管理的标签页控件|




### Properties

#### CurrentTab
返回标签页之中的当前的所打开的页面
#### GetLocation
获取标签页的停靠位置
#### GetSize
获取标签页的停靠大小
#### Item
不存在则返回空值

