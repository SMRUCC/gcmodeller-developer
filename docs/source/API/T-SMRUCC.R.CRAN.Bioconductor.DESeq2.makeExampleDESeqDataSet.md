---
title: makeExampleDESeqDataSet
---

# makeExampleDESeqDataSet
_namespace: [SMRUCC.R.CRAN.Bioconductor.DESeq2](N-SMRUCC.R.CRAN.Bioconductor.DESeq2.html)_

Constructs a simulated dataset of Negative Binomial data from two conditions.
 By default, there are no fold changes between the two conditions, but this can be adjusted with the betaSD argument.



### Properties

#### betaSD
the standard deviation for non-intercept betas, i.e. beta ~ N(0,betaSD)
#### dispMeanRel
a function specifying the relationship of the dispersions on 2^trueIntercept
#### interceptMean
the mean of the intercept betas (log2 scale)
#### interceptSD
the standard deviation of the intercept betas (log2 scale)
#### m
number of columns
#### n
number of rows
#### sizeFactors
multiplicative factors for each sample

