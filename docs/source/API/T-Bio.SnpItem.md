---
title: SnpItem
---

# SnpItem
_namespace: [Bio](N-Bio.html)_

Represents a single nucleotide polymporphism (Snp) at a particular
 position for a certain chromosome, with the two possible allele
 values for that position.

### Methods

#### Equals
```csharp
Bio.SnpItem.Equals(System.Object)
```
Indicates whether the SnpItem is equal to another SnpItem. This compares
 the exact values of all four properties. 
 AlleleOne is compared with other.AlleleOne, and 
 AlleleTwo is compared with other.AlleleTwo.

|Parameter Name|Remarks|
|--------------|-------|
|obj|
            A SnpItem to compare with this SnpItem. If this parameter
            is not of type SnpItem, then false is returned.
            |

_returns: 
            true if the current SnpItem is equal to the other SnpItem; otherwise, false.
            _

#### GetHashCode
```csharp
Bio.SnpItem.GetHashCode
```
Generates a unique hashcode based on the data members in the item.



### Properties

#### AlleleOne
Contains the first allele character for the SNP.
#### AlleleTwo
Contains the second allele character for the SNP.
#### Chromosome
Contains the chromosome number for the SNP
#### Position
Contains the position for the SNP within the sequence 
 (may be position in full sequence or offset within chromosome)

