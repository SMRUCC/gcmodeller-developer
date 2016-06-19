---
title: plotCounts
---

# plotCounts
_namespace: [SMRUCC.R.CRAN.Bioconductor.DESeq2](N-SMRUCC.R.CRAN.Bioconductor.DESeq2.html)_

Plot of normalized counts for a single gene on log scale
 Note: normalized counts plus a pseudocount of 0.5 are shown.




### Properties

#### dds
a DESeqDataSet
#### gene
a character, specifying the name Of the gene To plot
#### intgroup
interesting groups: a character vector of names in colData(x) to use for grouping
#### main
as in 'plot'
#### normalized
whether the counts should be normalized by size factor (default is TRUE)
#### replaced
use the outlier-replaced counts if they exist
#### returnData
should the function only return the data.frame of counts and covariates for custom plotting (default is FALSE)
#### transform
whether to present log2 counts (TRUE) or to present the counts on the log scale (FALSE, default)
#### xlab
as in 'plot'
