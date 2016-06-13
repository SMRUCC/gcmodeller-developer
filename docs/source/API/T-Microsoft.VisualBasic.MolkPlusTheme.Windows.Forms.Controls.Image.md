---
title: Image
---

# Image
_namespace: [Microsoft.VisualBasic.MolkPlusTheme.Windows.Forms.Controls](N-Microsoft.VisualBasic.MolkPlusTheme.Windows.Forms.Controls.html)_



### Methods

#### FadeIn
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Windows.Forms.Controls.Image.FadeIn
```
启动控件的渐现动画的绘制线程

#### FadeOut
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Windows.Forms.Controls.Image.FadeOut
```
启动控件的渐隐动画的绘制线程

#### OnPaint
```csharp
Microsoft.VisualBasic.MolkPlusTheme.Windows.Forms.Controls.Image.OnPaint(System.Windows.Forms.PaintEventArgs)
```
复写了控件的绘制事件，仅当使用控件的Opacity属性更改透明度的时候，会调用Invalidate()过程，发生绘制事件

|Parameter Name|Remarks|
|--------------|-------|
|pe|-|




### Properties

#### _opacity
图像控件的透明度
#### _tmrFadeInn
图像控件渐现动画绘制线程
#### _tmrFadeOut
图像控件渐隐动画绘制线程
#### Bitmap
背景图像数据的存放位置
#### Image
设置或者获取图像控件的背景图片
#### Opacity
在这里获取或者设置控件的透明度（0-255）

