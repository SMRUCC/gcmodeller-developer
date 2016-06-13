---
title: SequenceFeatures
---

# SequenceFeatures
_namespace: [Bio.IO.GenBank](N-Bio.IO.GenBank.html)_

Contains information about genes and gene products,
 as well as regions of biological significance reported 
 in the sequence.

### Methods

#### #ctor
```csharp
Bio.IO.GenBank.SequenceFeatures.#ctor(Bio.IO.GenBank.SequenceFeatures)
```
Private Constructor for clone method.

|Parameter Name|Remarks|
|--------------|-------|
|other|SequenceFeatures instance to clone.|


#### Clone
```csharp
Bio.IO.GenBank.SequenceFeatures.Clone
```
Creates a new SequenceFeatures that is a copy of the current SequenceFeatures.
_returns: A new SequenceFeatures that is a copy of this SequenceFeatures._

#### GetFeatures
```csharp
Bio.IO.GenBank.SequenceFeatures.GetFeatures(System.String)
```
Returns list of feature items for the specified feature key.

|Parameter Name|Remarks|
|--------------|-------|
|featureKey|Feature key.|

_returns: Returns List of feature items._



### Properties

#### All
Lists all features.
#### Attenuators
Returns list of Attenuator features.
#### CAATSignals
Returns list of CAATSignal (CAAT_signal) features.
#### CodingSequences
Returns list of CodingSequence (CDS) features.
#### DisplacementLoops
Returns list of DisplacementLoop (D-loop) features.
#### Enhancers
Returns list of Enhancer features.
#### Exons
Returns list of Exon features.
#### FivePrimeUTRs
Returns list of FivePrimeUTR (5'UTR) features.
#### GCSignals
Returns list of GCSingal (GC_signal) features.
#### Genes
Returns list of Gene features.
#### InterveningDNAs
Returns list of InterveningDNA (iDNA) features.
#### Introns
Returns list of Intron features.
#### LongTerminalRepeats
Returns list of LongTerminalRepeat (LTR) features.
#### MaturePeptides
Returns list of MaturePeptide (mat_peptide) features.
#### MessengerRNAs
Returns list of MessengerRNA (mRNA) features.
#### Minus10Signals
Returns list of Minus10Signal (-10_signal) features.
#### Minus35Signals
Returns list of Minus35Signal (-35_signal) features.
#### MiscBindings
Returns list of MiscBinding (misc_binding) features.
#### MiscDifferences
Returns list of MiscDifference (misc_difference) features.
#### MiscFeatures
Returns list of MiscFeature (misc_feature) features.
#### MiscRecombinations
Returns list of MiscRecombination (misc_recomb) features.
#### MiscRNAs
Returns list of MiscRNA (misc_RNA) features.
#### MiscSignals
Returns list of MiscSignal (misc_signal) features.
#### MiscStructures
Returns list of MiscStructure (misc_structure) features.
#### ModifiedBases
Returns list of ModifiedBase (modified_base) features.
#### NonCodingRNAs
Returns list of NonCodingRNA (ncRNA) features.
#### OperonRegions
Returns list of OperonRegion (Operon) features.
#### PolyASignals
Returns list of PolyASignal (polyA_signal) features.
#### PolyASites
Returns list of PolyASite (polyA_site) features.
#### PrecursorRNAs
Returns list of PrecursorRNA (precursor_RNA) features.
#### Promoters
Returns list of Promoter features.
#### ProteinBindingSites
Returns list of ProteinBindingSite (protein_bind) features.
#### RepeatRegions
Returns list of RepeatRegion (repeat_region) features.
#### ReplicationOrigins
Returns list of ReplicationOrigin (rep_origin) features.
#### RibosomalRNAs
Returns list of RibosomalRNA (rRNA) features.
#### RibosomeBindingSites
Returns list of RibosomeBindingSite (RBS) features.
#### SignalPeptides
Returns list of SignalPeptide (sig_peptide) features.
#### StemLoops
Returns list of StemLoop (stem_loop) features.
#### TATASignals
Returns list of TATASignal (TATA_signal) features.
#### Terminators
Returns list of Terminator features.
#### ThreePrimeUTRs
Returns list of ThreePrimeUTR (3'UTR) features.
#### TransferMessengerRNAs
Returns list of TransferMessengerRNA (tmRNA) features.
#### TransferRNAs
Returns list of TransferRNA (tRNA) features.
#### TransitPeptides
Returns list of TransitPeptide (transit_peptide) features.
#### UnsureSequenceRegions
Returns list of UnsureSequenceRegion (unsure) features.
#### Variations
Returns list of Variation features.

