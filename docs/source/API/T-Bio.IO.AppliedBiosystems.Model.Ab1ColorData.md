---
title: Ab1ColorData
---

# Ab1ColorData
_namespace: [Bio.IO.AppliedBiosystems.Model](N-Bio.IO.AppliedBiosystems.Model.html)_

Model for storing chromatogram data associated with calculated peak locations. This is not the raw readings but the calculated readings. 
 There may be a desire for raw readings in order to perform custom peak calculations.

### Methods

#### #ctor
```csharp
Bio.IO.AppliedBiosystems.Model.Ab1ColorData.#ctor(System.Int16[],System.Int16[])
```
Create a new color data with the specified data and peak locations.

|Parameter Name|Remarks|
|--------------|-------|
|peakLocations|Peak locations|
|data|Calculated reading|


#### AddResidueColorData
```csharp
Bio.IO.AppliedBiosystems.Model.Ab1ColorData.AddResidueColorData(System.Int32,System.Int32,System.Int32,System.Int16[])
```
Adds a new color data definition for a residue to @"P:Bio.IO.AppliedBiosystems.Model.Ab1ColorData.DataByResidue".

|Parameter Name|Remarks|
|--------------|-------|
|peakIndex|-|
|residueDataIndex|-|
|residueEndIndex|-|
|data|-|


#### FromByteArray
```csharp
Bio.IO.AppliedBiosystems.Model.Ab1ColorData.FromByteArray(System.Byte[])
```
Converts the byte array to an array of shorts

|Parameter Name|Remarks|
|--------------|-------|
|value|-|


#### LoadMaxValue
```csharp
Bio.IO.AppliedBiosystems.Model.Ab1ColorData.LoadMaxValue
```
Calculates and stores the max peak value.

#### LoadResidueColorData
```csharp
Bio.IO.AppliedBiosystems.Model.Ab1ColorData.LoadResidueColorData(System.Int16[],System.Int16[])
```
Loads all residue color data.

|Parameter Name|Remarks|
|--------------|-------|
|peakLocations|-|
|data|-|


#### ToByteArray
```csharp
Bio.IO.AppliedBiosystems.Model.Ab1ColorData.ToByteArray(Bio.IO.AppliedBiosystems.Model.Ab1ColorData)
```
Converts the color data to a byte array. Does not include redundant information only the color data.

|Parameter Name|Remarks|
|--------------|-------|
|data|Color Data|

_returns: Readings_

#### ToString
```csharp
Bio.IO.AppliedBiosystems.Model.Ab1ColorData.ToString(System.Collections.Generic.List{System.Int16})
```
Helper method for converting a list of shorts to the same format found in the ab1 xml parser.

|Parameter Name|Remarks|
|--------------|-------|
|data|-|


#### Trim
```csharp
Bio.IO.AppliedBiosystems.Model.Ab1ColorData.Trim(System.Int32,System.Int32)
```
Trims the color data, adjust peak locations and data based on the new residue range.

|Parameter Name|Remarks|
|--------------|-------|
|startIndex|Starting residue to include.|
|length|Number of residues to trim to.|




### Properties

#### DataByResidue
Each residue contains a sec of data points and one peak, contains a list of all data for each residue.
#### Max
The maximum peak value found for all residues.

