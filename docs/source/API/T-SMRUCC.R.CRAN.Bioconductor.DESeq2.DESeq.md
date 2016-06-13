---
title: DESeq
---

# DESeq
_namespace: [SMRUCC.R.CRAN.Bioconductor.DESeq2](N-SMRUCC.R.CRAN.Bioconductor.DESeq2.html)_

Differential expression analysis based on the Negative Binomial (a.k.a. Gamma-Poisson) distribution

 This function performs a default analysis through the steps:

 1. estimation of size factors estimateSizeFactors
 2. estimation of dispersion estimateDispersions
 3. Negative Binomial GLM fitting And Wald statistics: nbinomWaldTest

 For complete details on each step, see the manual pages of the respective functions.
 After the DESeq function returns a DESeqDataSet object, results tables (log2 fold changes And p-values) can be
 generated using the results function. See the manual page for results for information on independent filtering
 And p-value adjustment for multiple test correction.



### Properties

#### betaPrior
whether or not to put a zero-mean normal prior on the non-intercept coefficients See nbinomWaldTest
 for description of the calculation of the beta prior.
 By default, the beta prior is used only for the Wald test, but can also be specified for the likelihood ratio test.
#### BPPARAM
an optional parameter object passed internally to bplapply when parallel=TRUE.
 If not specified, the parameters last registered with register will be used.
#### fitType
either "parametric", "local", or "mean" for the type of fitting of dispersions to the mean intensity.
 See estimateDispersions for description.
#### full
for test="LRT", the full model formula, which is restricted to the formula in design(object).
 alternatively, it can be a model matrix constructed by the user. advanced use: specifying a model matrix
 for full and test="Wald" is possible if betaPrior=FALSE
#### minReplicatesForReplace
the minimum number of replicates required in order to use replaceOutliers on a sample.
 If there are samples with so many replicates, the model will be refit after these replacing outliers,
 flagged by Cook's distance. Set to Inf in order to never replace outliers.
#### modelMatrixType
either "standard" or "expanded", which describe how the model matrix, X of the GLM formula is formed.
 "standard" is as created by model.matrix using the design formula. "expanded" includes an indicator
 variable for each level of factors in addition to an intercept. for more information see the Description
 of nbinomWaldTest. betaPrior must be set to TRUE in order for expanded model matrices to be fit.
#### object
a DESeqDataSet Object, see the constructor functions DESeqDataSet, DESeqDataSetFromMatrix, DESeqDataSetFromHTSeqCount.
#### parallel
if FALSE, no parallelization. if TRUE, parallel execution using BiocParallel, see next argument BPPARAM.
 A note on running in parallel using BiocParallel: it may be advantageous to remove large, unneeded objects
 from your current R environment before calling DESeq, as it is possible that R's internal garbage collection
 will copy these files while running on worker nodes.
#### quiet
whether to print messages at each step
#### reduced
for test="LRT", a reduced formula to compare against, i.e., the full formula with the term(s) of interest removed.
 alternatively, it can be a model matrix constructed by the user
#### test
either "Wald" or "LRT", which will then use either Wald significance tests (defined by nbinomWaldTest),
 or the likelihood ratio test on the difference in deviance between a full and reduced model formula
 (defined by nbinomLRT)

