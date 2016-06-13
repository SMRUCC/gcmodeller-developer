---
title: goodSamplesGenes
---

# goodSamplesGenes
_namespace: [SMRUCC.R.CRAN.Bioconductor.WGCNA](N-SMRUCC.R.CRAN.Bioconductor.WGCNA.html)_

Iterative filtering of samples and genes with too many missing entries



### Properties

#### datExpr
expression data. A data frame in which columns are genes and rows ar samples.
#### Func
This function checks data for missing entries and zero-variance genes, and returns a list of samples and genes that pass criteria maximum number of missing values. 
 If necessary, the filtering is iterated.
#### indent
indentation for diagnostic messages. Zero means no indentation, each unit adds two spaces.
#### minFraction
minimum fraction of non-missing samples for a gene to be considered good.
#### minNGenes
minimum number of good genes for the data set to be considered fit for analysis. 
 If the actual number of good genes falls below this threshold, an error will be issued.
#### minNSamples
minimum number of non-missing samples for a gene to be considered good.
#### tol
an optional 'small' number to compare the variance against. Defaults to the square of 1e-10 * max(abs(datExpr), na.rm = TRUE). 
 The reason of comparing the variance to this number, rather than zero, is that the fast way of computing variance used by this function sometimes causes small numerical overflow errors which make variance of constant vectors slightly non-zero; comparing the variance to tol rather than zero prevents the retaining of such genes as 'good genes'.
#### verbose
integer level of verbosity. Zero means silent, higher values make the output progressively more and more verbose.

