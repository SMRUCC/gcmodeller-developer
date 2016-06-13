---
title: estimateSizeFactors
---

# estimateSizeFactors
_namespace: [SMRUCC.R.CRAN.Bioconductor.DESeq2](N-SMRUCC.R.CRAN.Bioconductor.DESeq2.html)_

Estimate the size factors for a DESeqDataSet

 This function estimates the size factors using the "median ratio method" described by Equation 5 in Anders and Huber (2010).
 The estimated size factors can be accessed using sizeFactors.
 Alternative library size estimators can also be supplied using sizeFactors.



### Properties

#### controlGenes
optional, numeric or logical index vector specifying those genes to use for size
 factor estimation (e.g. housekeeping or spike-in genes)
#### geoMeans
by default this is not provided and the geometric means of the counts are calculated within the function.
 A vector of geometric means from another count matrix can be provided for a "frozen" size factor calculation
#### locfunc
a function to compute a location for a sample. By default, the median is used. However, especially for low counts,
 the shorth function from the genefilter package may give better results.
#### normMatrix
optional, a matrix of normalization factors which do not control for library size
 (e.g. average transcript length of genes for each sample).
 Providing normMatrix will estimate size factors on the count matrix divided by normMatrix and store
 the product of the size factors and normMatrix as normalizationFactors.
#### object
a DESeqDataSet
#### type
either "ratio" or "iterate". "ratio" uses the standard median ratio method introduced in DESeq.
 The size factor is the median ratio of the sample over a pseudosample:
 for each gene, the geometric mean of all samples. "iterate" offers an alternative estimator,
 which can be used even when all genes contain a sample with a zero. This estimator iterates
 between estimating the dispersion with a design of ~1, and finding a size factor vector by
 numerically optimizing the likelihood of the ~1 model.

