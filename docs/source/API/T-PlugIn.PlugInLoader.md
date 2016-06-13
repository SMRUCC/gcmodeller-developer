---
title: PlugInLoader
---

# PlugInLoader
_namespace: [PlugIn](N-PlugIn.html)_



### Methods

#### AddCommand
```csharp
PlugIn.PlugInLoader.AddCommand(System.Windows.Forms.ToolStripMenuItem,System.String[],System.String,System.Int32)
```
Recursive function for create the menu item for each plugin command.(递归的添加菜单项)

|Parameter Name|Remarks|
|--------------|-------|
|MenuRoot|-|
|Path|-|
|Name|-|
|p|-|


#### GetIconLoader
```csharp
PlugIn.PlugInLoader.GetIconLoader(System.Reflection.Assembly)
```


|Parameter Name|Remarks|
|--------------|-------|
|Assembly|-|

_returns: {Resource Manager Instanc, GetObject MethodInfo}_

#### Load
```csharp
PlugIn.PlugInLoader.Load
```
加载插件命令
_returns: 返回成功加载的命令的数目_




