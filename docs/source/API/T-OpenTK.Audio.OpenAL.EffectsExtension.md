---
title: EffectsExtension
---

# EffectsExtension
_namespace: [OpenTK.Audio.OpenAL](N-OpenTK.Audio.OpenAL.html)_

Provides access to the OpenAL effects extension.

### Methods

#### #ctor
```csharp
OpenTK.Audio.OpenAL.EffectsExtension.#ctor
```
Constructs a new EffectsExtension instance.

#### AuxiliaryEffectSlot
```csharp
OpenTK.Audio.OpenAL.EffectsExtension.AuxiliaryEffectSlot(System.Int32,OpenTK.Audio.OpenAL.EfxAuxiliaryf,System.Single)
```
This function is used to set floating-point properties on Auxiliary Effect Slot objects.

|Parameter Name|Remarks|
|--------------|-------|
|asid|Auxiliary Effect Slot object identifier.|
|param|Auxiliary Effect Slot property to set.|
|value|Floating-point value.|


#### BindEffect
```csharp
OpenTK.Audio.OpenAL.EffectsExtension.BindEffect(System.Int32,OpenTK.Audio.OpenAL.EfxEffectType)
```
(Helper) Selects the Effect type used by this Effect handle.

|Parameter Name|Remarks|
|--------------|-------|
|eid|Effect id returned from a successful call to GenEffects.|
|type|Effect type.|


#### BindEffectToAuxiliarySlot
```csharp
OpenTK.Audio.OpenAL.EffectsExtension.BindEffectToAuxiliarySlot(System.Int32,System.Int32)
```
(Helper) Attaches an Effect to an Auxiliary Effect Slot.

|Parameter Name|Remarks|
|--------------|-------|
|auxiliaryeffectslot|The slot handle to attach the Effect to.|
|effect|The Effect handle that is being attached.|


#### BindFilterToSource
```csharp
OpenTK.Audio.OpenAL.EffectsExtension.BindFilterToSource(System.Int32,System.Int32)
```
(Helper) reroutes the output of a Source through a Filter.

|Parameter Name|Remarks|
|--------------|-------|
|source|A valid Source handle.|
|filter|A valid Filter handle.|


#### BindSourceToAuxiliarySlot
```csharp
OpenTK.Audio.OpenAL.EffectsExtension.BindSourceToAuxiliarySlot(System.Int32,System.Int32,System.Int32,System.Int32)
```
(Helper) Reroutes a Source's output into an Auxiliary Effect Slot.

|Parameter Name|Remarks|
|--------------|-------|
|source|The Source handle who's output is forwarded.|
|slot|The Auxiliary Effect Slot handle that receives input from the Source.|
|slotnumber|Every Source has only a limited number of slots it can feed buffer to. The number must stay below AlcContextAttributes.EfxMaxAuxiliarySends|
|filter|Filter handle to be attached between Source ouput and Auxiliary Slot input. Use 0 or EfxFilterType.FilterNull for no filter. |


#### DeleteAuxiliaryEffectSlot
```csharp
OpenTK.Audio.OpenAL.EffectsExtension.DeleteAuxiliaryEffectSlot(System.UInt32@)
```
This function deletes one AuxiliaryEffectSlot only.

|Parameter Name|Remarks|
|--------------|-------|
|slot|Pointer to an auxiliary effect slot name/handle identifying the Auxiliary Effect Slot Object to be deleted.|


#### DeleteAuxiliaryEffectSlots
```csharp
OpenTK.Audio.OpenAL.EffectsExtension.DeleteAuxiliaryEffectSlots(System.UInt32[])
```
This function deletes one AuxiliaryEffectSlot only.

|Parameter Name|Remarks|
|--------------|-------|
|slots|Pointer to an auxiliary effect slot name/handle identifying the Auxiliary Effect Slot Object to be deleted.|


#### DeleteEffect
```csharp
OpenTK.Audio.OpenAL.EffectsExtension.DeleteEffect(System.UInt32@)
```
This function deletes one Effect only.

|Parameter Name|Remarks|
|--------------|-------|
|effect|Pointer to an effect name/handle identifying the Effect Object to be deleted.|


#### DeleteEffects
```csharp
OpenTK.Audio.OpenAL.EffectsExtension.DeleteEffects(System.UInt32[])
```
The DeleteEffects function is used to delete and free resources for Effect objects previously created with GenEffects.

|Parameter Name|Remarks|
|--------------|-------|
|effects|Pointer to n Effect object identifiers.|


#### DeleteFilter
```csharp
OpenTK.Audio.OpenAL.EffectsExtension.DeleteFilter(System.UInt32@)
```
This function deletes one Filter only.

|Parameter Name|Remarks|
|--------------|-------|
|filter|Pointer to an filter name/handle identifying the Filter Object to be deleted.|


#### DeleteFilters
```csharp
OpenTK.Audio.OpenAL.EffectsExtension.DeleteFilters(System.Int32[])
```
This function deletes one Filter only.

|Parameter Name|Remarks|
|--------------|-------|
|filters|Pointer to an filter name/handle identifying the Filter Object to be deleted.|


#### Effect
```csharp
OpenTK.Audio.OpenAL.EffectsExtension.Effect(System.Int32,OpenTK.Audio.OpenAL.EfxEffect3f,OpenTK.Vector3@)
```
This function is used to set 3 floating-point properties on Effect objects.

|Parameter Name|Remarks|
|--------------|-------|
|eid|Effect object identifier.|
|param|Effect property to set.|
|values|Pointer to Math.Vector3.|


#### Filter
```csharp
OpenTK.Audio.OpenAL.EffectsExtension.Filter(System.Int32,OpenTK.Audio.OpenAL.EfxFilterf,System.Single)
```
This function is used to set floating-point properties on Filter objects.

|Parameter Name|Remarks|
|--------------|-------|
|fid|Filter object identifier.|
|param|Effect property to set.|
|value|Floating-point value.|


#### GenAuxiliaryEffectSlot
```csharp
OpenTK.Audio.OpenAL.EffectsExtension.GenAuxiliaryEffectSlot(System.UInt32@)
```
This function generates only one Auxiliary Effect Slot.
_returns: Storage UInt32 for the new auxiliary effect slot name/handle._

#### GenAuxiliaryEffectSlots
```csharp
OpenTK.Audio.OpenAL.EffectsExtension.GenAuxiliaryEffectSlots(System.Int32)
```
The GenAuxiliaryEffectSlots function is used to create one or more Auxiliary Effect Slots. The number of slots that can be created will be dependant upon the Open AL device used.

|Parameter Name|Remarks|
|--------------|-------|
|n|Number of Auxiliary Effect Slots to be created.|

_returns: Pointer addressing sufficient memory to store n Effect Slot object identifiers._
> An application should check the OpenAL error state after making this call to determine if the Effect Slot was successfully created. If the function call fails then none of the requested Effect Slots are created. A good strategy for creating any OpenAL object is to use a for-loop and generate one object each loop iteration and then check for an error condition. If an error is set then the loop can be broken and the application can determine if sufficient resources are available.

#### GenEffect
```csharp
OpenTK.Audio.OpenAL.EffectsExtension.GenEffect(System.UInt32@)
```
Generates a single effect object.

|Parameter Name|Remarks|
|--------------|-------|
|effect|A handle to the generated effect object.|

_returns: A handle to the generated effect object._
> The GenEffects function is used to create one or more Effect objects. An Effect object stores an effect type and a set of parameter values to control that Effect. In order to use an Effect it must be attached to an Auxiliary Effect Slot object.After creation an Effect has no type (EfxEffectType.Null), so before it can be used to store a set of parameters, the application must specify what type of effect should be stored in the object, using Effect() with EfxEffecti.

#### GenEffects
```csharp
OpenTK.Audio.OpenAL.EffectsExtension.GenEffects(System.Int32)
```
Generates one or more effect objects.

|Parameter Name|Remarks|
|--------------|-------|
|n|Number of Effect object identifiers to generate.|

> The GenEffects function is used to create one or more Effect objects. An Effect object stores an effect type and a set of parameter values to control that Effect. In order to use an Effect it must be attached to an Auxiliary Effect Slot object.After creation an Effect has no type (EfxEffectType.Null), so before it can be used to store a set of parameters, the application must specify what type of effect should be stored in the object, using Effect() with EfxEffecti.

#### GenFilter
```csharp
OpenTK.Audio.OpenAL.EffectsExtension.GenFilter(System.UInt32@)
```
This function generates only one Filter.

|Parameter Name|Remarks|
|--------------|-------|
|filter|Storage UInt32 for the new filter name/handle.|

_returns: Storage Int32 for the new filter name/handle._

#### GenFilters
```csharp
OpenTK.Audio.OpenAL.EffectsExtension.GenFilters(System.Int32)
```
The GenFilters function is used to create one or more Filter objects. A Filter object stores a filter type and a set of parameter values to control that Filter. Filter objects can be attached to Sources as Direct Filters or Auxiliary Send Filters.

|Parameter Name|Remarks|
|--------------|-------|
|n|Number of Filters to be created.|

_returns: Pointer addressing sufficient memory to store n Filter object identifiers._
> After creation a Filter has no type (EfxFilterType.Null), so before it can be used to store a set of parameters, the application must specify what type of filter should be stored in the object, using Filter() with EfxFilteri.

#### GetAuxiliaryEffectSlot
```csharp
OpenTK.Audio.OpenAL.EffectsExtension.GetAuxiliaryEffectSlot(System.Int32,OpenTK.Audio.OpenAL.EfxAuxiliaryf,System.Single@)
```
This function is used to retrieve floating properties on Auxiliary Effect Slot objects.

|Parameter Name|Remarks|
|--------------|-------|
|asid|Auxiliary Effect Slot object identifier.|
|pname|Auxiliary Effect Slot property to retrieve.|
|value|Address where floating-point value will be stored.|


#### GetEffect
```csharp
OpenTK.Audio.OpenAL.EffectsExtension.GetEffect(System.Int32,OpenTK.Audio.OpenAL.EfxEffect3f,OpenTK.Vector3@)
```
This function is used to retrieve 3 floating-point properties from Effect objects.

|Parameter Name|Remarks|
|--------------|-------|
|eid|Effect object identifier.|
|param|Effect property to retrieve.|
|values|A Math.Vector3 to hold the values.|


#### GetFilter
```csharp
OpenTK.Audio.OpenAL.EffectsExtension.GetFilter(System.Int32,OpenTK.Audio.OpenAL.EfxFilterf,System.Single@)
```
This function is used to retrieve floating-point properties from Filter objects.

|Parameter Name|Remarks|
|--------------|-------|
|fid|Filter object identifier.|
|pname|Effect property to retrieve.|
|value|Address where floating-point value will be stored.|


#### IsAuxiliaryEffectSlot
```csharp
OpenTK.Audio.OpenAL.EffectsExtension.IsAuxiliaryEffectSlot(System.Int32)
```
The IsAuxiliaryEffectSlot function is used to determine if an object identifier is a valid Auxiliary Effect Slot object.

|Parameter Name|Remarks|
|--------------|-------|
|slot|Effect Slot object identifier to validate.|

_returns: True if the identifier is a valid Auxiliary Effect Slot, False otherwise._

#### IsEffect
```csharp
OpenTK.Audio.OpenAL.EffectsExtension.IsEffect(System.Int32)
```
The IsEffect function is used to determine if an object identifier is a valid Effect object.

|Parameter Name|Remarks|
|--------------|-------|
|eid|Effect identifier to validate.|

_returns: True if the identifier is a valid Effect, False otherwise._

#### IsFilter
```csharp
OpenTK.Audio.OpenAL.EffectsExtension.IsFilter(System.Int32)
```
The IsFilter function is used to determine if an object identifier is a valid Filter object.

|Parameter Name|Remarks|
|--------------|-------|
|fid|Effect identifier to validate.|

_returns: True if the identifier is a valid Filter, False otherwise._



### Properties

#### IsInitialized
Returns True if the EFX Extension has been found and could be initialized.

