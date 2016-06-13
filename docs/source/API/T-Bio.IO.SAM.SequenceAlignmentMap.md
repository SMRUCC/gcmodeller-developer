---
title: SequenceAlignmentMap
---

# SequenceAlignmentMap
_namespace: [Bio.IO.SAM](N-Bio.IO.SAM.html)_

Class to hold sequence alignment map (SAM) structure.

### Methods

#### #ctor
```csharp
Bio.IO.SAM.SequenceAlignmentMap.#ctor(Bio.IO.SAM.SAMAlignmentHeader)
```
Creates SequenceAlignmentMap instance.

|Parameter Name|Remarks|
|--------------|-------|
|header|SAM header.|


#### GetInMemoryPairedReads
```csharp
Bio.IO.SAM.SequenceAlignmentMap.GetInMemoryPairedReads(System.Single,System.Single,System.Boolean)
```
Gets the paired reads when SAMAligned sequences are in memory.

|Parameter Name|Remarks|
|--------------|-------|
|meanLengthOfInsert|Mean of the insert length.|
|standardDeviationOfInsert|Standard deviation of insert length.|
|calculate|If this flag is set then mean and standard deviation will
            be calculated from the paired reads instead of specified.|

_returns: List of paired read._

#### GetPairedReads
```csharp
Bio.IO.SAM.SequenceAlignmentMap.GetPairedReads(System.Single,System.Single)
```
Gets the paired reads.

|Parameter Name|Remarks|
|--------------|-------|
|meanLengthOfInsert|Mean of the insert length.|
|standardDeviationOfInsert|Standard deviation of insert length.|

_returns: List of paired read._

#### GetReferenceSequenceRanges
```csharp
Bio.IO.SAM.SequenceAlignmentMap.GetReferenceSequenceRanges
```
Returns list of SequenceRanges objects which represents reference sequences present in the header.

#### GetRefSequences
```csharp
Bio.IO.SAM.SequenceAlignmentMap.GetRefSequences
```
Returns list of reference sequences present in this header.

#### UpdateType
```csharp
Bio.IO.SAM.SequenceAlignmentMap.UpdateType(System.Collections.Generic.IEnumerable{Bio.IO.SAM.PairedRead},System.Double,System.Int32)
```
This Method calculates mean and standard deviation from the available reads
 and then using this information updates the type of reads.

|Parameter Name|Remarks|
|--------------|-------|
|allreads|All reads.|
|sum|Pre calculated sum of insert length of reads 
            (invalid in calculation mean and std deviation) if available, else pass 0.|
|count|Pre calculated count of reads (invalid in calculation mean and std deviation)
            if available, else pass 0.|




### Properties

#### AlignedSequences
Gets list of aligned sequences present in this alignment.
#### Documentation
Gets documentation object.
#### header
Gets the SAM header.
#### Metadata
Gets the metadata of this alignment.
#### querySequences
Gets the query sequences present in this alignment.
#### Sequences
Gets list of source sequences present in this alignment.
 Note that this method always returns an empty list.

