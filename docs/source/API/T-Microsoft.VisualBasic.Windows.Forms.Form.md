---
title: Form
---

# Form
_namespace: [Microsoft.VisualBasic.Windows.Forms](N-Microsoft.VisualBasic.Windows.Forms.html)_

Metro UI (Zune like) Interface (form)
 lipinho, 27 Dec 2010 CPOL

 The future of Windows Interfaces is probably the Zune-like ones, with a borderless form and some controls inside of it.
 The problem is: if you're using WindowsForm, creating that borderless form with shadows and resizing stuff isn't as easy as it seems.
 This article will show you how to create those forms using a bit of DWM and some other Windows APIs.

 (http://www.codeproject.com/Articles/138661/Metro-UI-Zune-like-Interface-form)

### Methods

#### Form1_MouseMove
```csharp
Microsoft.VisualBasic.Windows.Forms.Form.Form1_MouseMove(System.Object,System.Windows.Forms.MouseEventArgs)
```
Calculate which direction to resize based on mouse position

|Parameter Name|Remarks|
|--------------|-------|
|sender|-|
|e|-|


#### HiWord
```csharp
Microsoft.VisualBasic.Windows.Forms.Form.HiWord(System.Int32)
```
Equivalent to the HiWord C Macro

|Parameter Name|Remarks|
|--------------|-------|
|dwValue|-|




### Properties

#### BORDER_WIDTH
使用鼠标改变窗口大小的时候所需要使用的一个用于检测的边界大小值

