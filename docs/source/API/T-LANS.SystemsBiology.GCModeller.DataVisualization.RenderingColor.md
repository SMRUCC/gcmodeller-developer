---
title: RenderingColor
---

# RenderingColor
_namespace: [LANS.SystemsBiology.GCModeller.DataVisualization](N-LANS.SystemsBiology.GCModeller.DataVisualization.html)_





### Methods

#### __directlyMapping
```csharp
LANS.SystemsBiology.GCModeller.DataVisualization.RenderingColor.__directlyMapping(System.String[],System.Drawing.Image[])
```
直接映射

|Parameter Name|Remarks|
|--------------|-------|
|categories|-|


#### __interpolateMapping
```csharp
LANS.SystemsBiology.GCModeller.DataVisualization.RenderingColor.__interpolateMapping(System.String[],System.Drawing.Image[])
```
材质不足，则会使用颜色来绘制

#### CategoryMapsTextures
```csharp
LANS.SystemsBiology.GCModeller.DataVisualization.RenderingColor.CategoryMapsTextures(System.Drawing.Image[],System.String[])
```
材质映射

|Parameter Name|Remarks|
|--------------|-------|
|categories|假若这个参数为空，则默认是使用COG分类的映射规则|


#### GenerateColorProfiles
```csharp
LANS.SystemsBiology.GCModeller.DataVisualization.RenderingColor.GenerateColorProfiles(System.Collections.Generic.IEnumerable{System.String},System.Boolean)
```


|Parameter Name|Remarks|
|--------------|-------|
|categories|-|
|removeUsed|是否移除已经使用过的元素，这样子就会产生不重复的颜色|


#### InitCOGColors
```csharp
LANS.SystemsBiology.GCModeller.DataVisualization.RenderingColor.InitCOGColors(System.String[])
```
这是一个很通用的颜色谱创建函数

|Parameter Name|Remarks|
|--------------|-------|
|categories|当不为空的时候，会返回一个列表，其中空字符串会被排除掉，故而在返回值之中需要自己添加一个空值的默认颜色|



