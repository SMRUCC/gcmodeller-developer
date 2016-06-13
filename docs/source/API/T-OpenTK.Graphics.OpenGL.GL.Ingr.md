---
title: Ingr
---

# Ingr
_namespace: [OpenTK.Graphics.OpenGL.GL](N-OpenTK.Graphics.OpenGL.GL.html)_



### Methods

#### BlendFuncSeparate
```csharp
OpenTK.Graphics.OpenGL.GL.Ingr.BlendFuncSeparate(OpenTK.Graphics.OpenGL.IngrBlendFuncSeparate,OpenTK.Graphics.OpenGL.IngrBlendFuncSeparate,OpenTK.Graphics.OpenGL.IngrBlendFuncSeparate,OpenTK.Graphics.OpenGL.IngrBlendFuncSeparate)
```
[requires: INGR_blend_func_separate]
 Specify pixel arithmetic for RGB and alpha components separately

|Parameter Name|Remarks|
|--------------|-------|
|sfactorRGB| 
            For glBlendFuncSeparatei, specifies the index of the draw buffer for which to set the blend functions.
            |
|dfactorRGB| 
            Specifies how the red, green, and blue blending factors are computed. The initial value is One.
            |
|sfactorAlpha| 
            Specifies how the red, green, and blue destination blending factors are computed. The initial value is Zero.
            |
|dfactorAlpha| 
            Specified how the alpha source blending factor is computed. The initial value is One.
            |





