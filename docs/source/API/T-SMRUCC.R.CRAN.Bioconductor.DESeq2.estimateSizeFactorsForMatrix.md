﻿---
title: estimateSizeFactorsForMatrix
---

# estimateSizeFactorsForMatrix
_namespace: [SMRUCC.R.CRAN.Bioconductor.DESeq2](N-SMRUCC.R.CRAN.Bioconductor.DESeq2.html)_

Low-level function to estimate size factors with robust regression.

 Given a matrix or data frame of count data, this function estimates the size factors as follows:
 Each column is divided by the geometric means of the rows. The median (or, if requested,
 another location estimator) of these ratios (skipping the genes with a geometric mean of zero)
 is used as the size factor for this column. Typically, one will not call this function directly,
 but use estimateSizeFactors.

> 
>  a vector with the estimates size factors, one element per column
>  



### Properties

#### controlGenes
optional, numeric or logical index vector specifying those genes to use for size factor estimation
 (e.g. housekeeping or spike-in genes)
#### counts
a matrix or data frame of counts, i.e., non-negative integer values
#### geoMeans
by default this is not provided, and the geometric means of the counts are calculated within the function.
 A vector of geometric means from another count matrix can be provided for a "frozen" size factor calculation
#### locfunc
a function to compute a location for a sample. By default, the median is used.
 However, especially for low counts, the shorth function from genefilter may give better results.