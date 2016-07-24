---
title: Mothur OTU
tags: [mothur, OTU, metagenomics, ST, RNA-seq]
date: 2016-07-25
---

By clustering the sequence of using similarity cutoff ``>97`` as the definition of the OTU.

> Zhang YM, Tian CF, Sui XH, Chen WF, Chen WX, "Robust Markers Reflecting Phylogeny and Taxonomy of *Rhizobia*." PLoS ONE, 2012, 7(9): e44936.

### steps of OTU

First, using ``dist.seqs``

```
mothur > dist.seqs(fasta=G:/gast_files/7.24/All/All.fasta,calc=onegap,countends=F,cutoff=0.03,output=lt)
```

When the ``dist.seqs`` command execute done, a distance matrix file will be generated, which its named ``xxx.phylip.dist``

```
mothur > cluster(phylip=xxx.phylip.dist,method=furthest,cutoff=0.03)
```

Methods in this ``cluster`` command:

+ **``nearest`` neighbor**: Each of the sequences within an OTU are at most x% distant from the most similarity sequence in the OTU.
+ **``furthest`` neighbor**: All of the sequences within an OTU are at most x% distant from all of the other sequences within the OTU.
+ **``average`` neighbor**: This method is a middle ground between the other two algorithm.

Then we can using ``bin.seqs`` command for output OTU result

```
mothur > bin.seqs(list=xxx.phylip.fn.list,fasta=xxx.fasta)
```

+ xxx.phylip.fn.0.01.fasta 99% OTU(cutoff=0.01)
+ xxx.phylip.fn.0.03.fasta 97% OTU(cutoff=0.03)

At last, output the OTU representation sequence by using ``get.oturep`` command

```
mothur > get.oturep(phylip=xxx.phylip.dist,list=xxx.phylip.fn.list)
```