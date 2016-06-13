---
title: ITabPage
---

# ITabPage
_namespace: [Microsoft.VisualBasic.MolkPlusTheme.Windows.Forms.Controls.TabControl](N-Microsoft.VisualBasic.MolkPlusTheme.Windows.Forms.Controls.TabControl.html)_

标签页的基本框架

### Methods

#### ActiveTabPage
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Windows.Forms.Controls.TabControl.ITabPage.ActiveTabPage
```
本方法激活当前的标签页同时取消其他的标签页的激活状态，假若要仅仅更改当前标签页的激活状态，请使用Active属性



### Properties

#### _Id
用于标识当前的标签页对象的位置的属性值
#### Active
获取一个值来指示当前的标签页是否处于激活的状态
#### EventCloseAllTabs
关闭所有的标签页（用户点击了右键菜单上面的关闭所有标签页的按钮）
#### EventCloseAllTabsButThis
关闭所有的标签页但是当前标签页除外（用户点击了右键菜单上面的关闭所有标签页但是当前的标签页除外的按钮）
#### EventCloseTabPage
关闭当前标签页（用户点击了右键菜单上面的关闭当前标签页的按钮）
#### EventTabPageActive
当前的标签页被激活
#### EventTabPageInactive
当前的标签页失活

