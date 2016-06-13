---
title: TFftAlgorithm
---

# TFftAlgorithm
_namespace: [Microsoft.VisualBasic.DataVisualization.DataMining.Framework](N-Microsoft.VisualBasic.DataVisualization.DataMining.Framework.html)_

Quick Fourier Transformation. 
 Some ideas to make the Discrete Fourier Transformation a bit quicker and implemented a lean version of the DFT algorithm.

### Methods

#### #ctor
```csharp
Microsoft.VisualBasic.DataVisualization.DataMining.Framework.TFftAlgorithm.#ctor(System.Int32)
```
使用本构造函数所创建的FFT对象，需要在后续的代码之中手动设置@"F:Microsoft.VisualBasic.DataVisualization.DataMining.Framework.TFftAlgorithm.y"的值

|Parameter Name|Remarks|
|--------------|-------|
|order|@"F:Microsoft.VisualBasic.DataVisualization.DataMining.Framework.TFftAlgorithm.y"的值的数目|


#### FourierTransformation
```csharp
Microsoft.VisualBasic.DataVisualization.DataMining.Framework.TFftAlgorithm.FourierTransformation
```
Fourier transformation calculation of the Fourier components

#### InvDFT
```csharp
Microsoft.VisualBasic.DataVisualization.DataMining.Framework.TFftAlgorithm.InvDFT
```
invers Fourier transformation, rebuild the signal in real numbers



### Properties

#### a
The real value is the cosinus part
#### b
The imag value is the sinus part

