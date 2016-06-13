---
title: FeatureItem
---

# FeatureItem
_namespace: [Bio.IO.GenBank](N-Bio.IO.GenBank.html)_

Feature of sequence present in the metadata can be stored in this class.
 All qualifiers of the feature will be stored as sub items.

### Methods

#### #ctor
```csharp
Bio.IO.GenBank.FeatureItem.#ctor(Bio.IO.GenBank.FeatureItem)
```
Private Constructor for clone method.

|Parameter Name|Remarks|
|--------------|-------|
|other|FeatureItem instance to clone.|


#### Clone
```csharp
Bio.IO.GenBank.FeatureItem.Clone
```
Creates a new FeatureItem that is a copy of the current FeatureItem.
_returns: A new FeatureItem that is a copy of this FeatureItem._

#### GetQualifier
```csharp
Bio.IO.GenBank.FeatureItem.GetQualifier(System.String)
```
Returns list of qualifier values for the specified qualifier name.

|Parameter Name|Remarks|
|--------------|-------|
|qualifierName|Qualifier name.|

_returns: List of strings._

#### GetSingleBooleanQualifier
```csharp
Bio.IO.GenBank.FeatureItem.GetSingleBooleanQualifier(System.String)
```
Returns bool value indicating whether the specified qualifier is there in the feature or not.

|Parameter Name|Remarks|
|--------------|-------|
|qualifierName|Qualifier name.|

_returns: Returns true if the qualifier is found in the feature, otherwise false._

#### GetSingleTextQualifier
```csharp
Bio.IO.GenBank.FeatureItem.GetSingleTextQualifier(System.String)
```
Returns qualifier value for the specified qualifier name.
 Note: This method should be used to get the text value of a 
 qualifier which appears only once in a feature.

|Parameter Name|Remarks|
|--------------|-------|
|qualifierName|Qualifier name.|

_returns: Qualifier value._

#### GetSubFeatures
```csharp
Bio.IO.GenBank.FeatureItem.GetSubFeatures(Bio.IO.GenBank.SequenceFeatures)
```
Gets the sub features depending on the location information.

|Parameter Name|Remarks|
|--------------|-------|
|sequenceFeatures|SequenceFeatures instance.|


#### GetSubSequence
```csharp
Bio.IO.GenBank.FeatureItem.GetSubSequence(Bio.ISequence,System.Collections.Generic.Dictionary{System.String,Bio.ISequence})
```
Returns a sequence which contains bases from the specified sequences as specified by this feature location.
 If the location contains accession then the sequence from the referredSequences which matches the 
 accession of the location will be considered.
 
 For example, 
 If a location is "join(100..200, J00089.1:10..50, J00090.2:30..40)"
 bases from 100 to 200 will be taken from the parent sequence and referredSequences will
 be searched for the J00089.1 and J00090.2 accession if found then those sequences will be considered 
 for constructing the output sequence.
 If the referred sequence is not found in the referredSequences then an exception will occur.

|Parameter Name|Remarks|
|--------------|-------|
|sequence|Sequence from which the sub sequence has to be returned.|
|referredSequences|A dictionary containing Accession numbers as keys and Sequences as values, this will be used when
            the location or sub-locations contains accession.|


#### SetSingleBooleanQualifier
```csharp
Bio.IO.GenBank.FeatureItem.SetSingleBooleanQualifier(System.String,System.Boolean)
```
Sets the value for the specified qualifier name.
 Note: This method should be used to add a qualifier which 
 appears only once in a feature and whose value is none.

|Parameter Name|Remarks|
|--------------|-------|
|qualifierName|Qualifier name.|
|value|Value to set.|


#### SetSingleTextQualifier
```csharp
Bio.IO.GenBank.FeatureItem.SetSingleTextQualifier(System.String,System.String)
```
Sets the value for the specified qualifier name.
 Note: This method should be used to set the text value of a 
 qualifier which appears only once in a feature.

|Parameter Name|Remarks|
|--------------|-------|
|qualifierName|Qualifier name.|
|value|Value to set.|




### Properties

#### Key
Gets the key for this item. These are not necessarily unique within a list,
 which is why this is a property of an object to be included in a list, rather than
 omitting this as a property and using a dictionary instead of a list.
#### Label
A label used to permanently tag a feature.
#### Location
Gets the location of this feature in the sequence.
 This may also refers to other genbank files.
 For example, 
 join(100..200,J00194.1:1..150)
 In this example location specifies joining of bases from 100 to 200 from the sequence
 in which this location data present and bases from 1 to 150 from the sequence who's 
 accession number is J00194.1.
#### Qualifiers
Gets the dictionary of attributes.

