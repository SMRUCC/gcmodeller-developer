---
title: blockwiseModules
---

# blockwiseModules
_namespace: [SMRUCC.R.CRAN.Bioconductor.WGCNA](N-SMRUCC.R.CRAN.Bioconductor.WGCNA.html)_

This function performs automatic network construction and module detection on large expression datasets in a block-wise manner.

> 
>  Before module detection starts, genes and samples are optionally checked for the presence of NAs. Genes and/or samples that have too many NAs are flagged as bad and removed from the analysis; bad genes will be automatically labeled as unassigned, while the returned eigengenes will have NA entries for all bad samples.
>  If blocks Is Not given And the number Of genes exceeds maxBlockSize, genes are pre-clustered into blocks Using the Function projectiveKMeans; otherwise all genes are treated In a Single block.
>  For Each block of genes, the network Is constructed And (if requested) topological overlap Is calculated. If requested, the topological overlaps are returned as part of the return value list. Genes are then clustered using average linkage hierarchical clustering And modules are identified in the resulting dendrogram by the Dynamic Hybrid tree cut. Found modules are trimmed of genes whose correlation with module eigengene (KME) Is less than minKMEtoStay. Modules in which fewer than minCoreKMESize genes have KME higher than minCoreKME are disbanded, i.e., their constituent genes are pronounced unassigned.
>  After all blocks have been processed, the Function checks whether there are genes whose KME In the Module they assigned Is lower than KME To another Module. If p-values Of the higher correlations are smaller than those Of the native Module by the factor reassignThresholdPS, the gene Is re-assigned To the closer Module.
>  In the last step, modules whose eigengenes are highly correlated are merged. This Is achieved by clustering module eigengenes using the dissimilarity given by one minus their correlation, cutting the dendrogram at the height mergeCutHeight And merging all modules on each branch. The process Is iterated until no modules are merged. See mergeCloseModules for more details on module merging.
>  The argument quick specifies the precision Of handling Of missing data In the correlation calculations. Zero will cause all calculations To be executed precisely, which may be significantly slower than calculations without missing data. Progressively higher values will speed up the calculations but introduce progressively larger errors. Without missing data, all column means And variances can be pre-calculated before the covariances are calculated. When missing data are present, exact calculations require the column means And variances To be calculated For Each covariance. The approximate calculation uses the pre-calculated mean And variance And simply ignores missing data In the covariance calculation. If the number Of missing data Is high, the pre-calculated means And variances may be very different from the actual ones, thus potentially introducing large errors. The quick value times the number Of rows specifies the maximum difference In the number Of missing entries For mean And variance calculations On the one hand And covariance On the other hand that will be tolerated before a recalculation Is triggered. The hope Is that If only a few missing data are treated approximately, the Error introduced will be small but the potential speedup can be significant.
>  



### Properties

#### blocks
optional specification of blocks in which hierarchical clustering and module detection should be performed. If given, must be a numeric vector with one entry per column (gene) of exprData giving the number of the block to which the corresponding gene belongs.
#### blockSizePenaltyPower
number specifying how strongly blocks should be penalized for exceeding the maximum size. Set to a lrge number or Inf if not exceeding maximum block size is very important.
#### checkMissingData
logical: should data be checked for excessive numbers of missing entries in genes and samples, and for genes with zero variance? See details.
#### corType
character string specifying the correlation to be used. Allowed values are (unique abbreviations of) "pearson" and "bicor", corresponding to Pearson and bidweight midcorrelation, respectively. Missing values are handled using the pairwise.complete.obs option.
#### cosineCorrelation
logical: should the cosine version of the correlation calculation be used? The cosine calculation differs from the standard one in that it does not subtract the mean.
#### datExpr
expression data. A data frame in which columns are genes and rows ar samples. NAs are allowed, but not too many.
#### deepSplit
integer value between 0 and 4. Provides a simplified control over how sensitive module detection should be to module splitting, with 0 least and 4 most sensitive. See cutreeDynamic for more details.
#### detectCutHeight
dendrogram cut height for module detection. See cutreeDynamic for more details.
#### getTOMs
deprecated, please use saveTOMs below.
#### impute
logical: should imputation be used for module eigengene calculation? See moduleEigengenes for more details.
#### indent
indentation for diagnostic messages. Zero means no indentation, each unit adds two spaces.
#### loadTOM
logical: should Topological Overlap Matrices be loaded from previously saved files (TRUE) or calculated (FALSE)? It may be useful to load previously saved TOM matrices if these have been calculated previously, since TOM calculation is often the most computationally expensive part of network construction and module identification. See saveTOMs and saveTOMFileBase below for when and how TOM files are saved, and what the file names are. If loadTOM is TRUE but the files cannot be found, or do not contain the correct TOM data, TOM will be recalculated.
#### maxAbsCoreScatter
maximum scatter of the core for a branch to be a cluster given as absolute heights. If given, overrides maxCoreScatter. See cutreeDynamic for more details.
#### maxBlockSize
integer giving maximum block size for module detection. Ignored if blocks above is non-NULL. Otherwise, if the number of genes in datExpr exceeds maxBlockSize, genes will be pre-clustered into blocks whose size should not exceed maxBlockSize.
#### maxCoreScatter
maximum scatter of the core for a branch to be a cluster, given as the fraction of cutHeight relative to the 5th percentile of joining heights. See cutreeDynamic for more details.
#### maxPOutliers
only used for corType=="bicor". Specifies the maximum percentile of data that can be considered outliers on either side of the median separately. For each side of the median, if higher percentile than maxPOutliers is considered an outlier by the weight function based on 9*mad(x), the width of the weight function is increased such that the percentile of outliers on that side of the median equals maxPOutliers. Using maxPOutliers=1 will effectively disable all weight function broadening; using maxPOutliers=0 will give results that are quite similar (but not equal to) Pearson correlation.
#### mergeCutHeight
dendrogram cut height for module merging.
#### minAbsGap
minimum cluster gap given as absolute height difference. If given, overrides minGap. See cutreeDynamic for more details.
#### minAbsSplitHeight
Minimum split height given as an absolute height. Branches merging below this height will automatically be merged. If not given (default), will be determined from minSplitHeight above.
#### minBranchEigennodeDissim
Minimum consensus branch eigennode (eigengene) dissimilarity for branches to be considerd separate. The branch eigennode dissimilarity in individual sets is simly 1-correlation of the eigennodes; the consensus is defined as quantile with probability consensusQuantile.
#### minCoreKME
a number between 0 and 1. If a detected module does not have at least minModuleKMESize genes with eigengene connectivity at least minCoreKME, the module is disbanded (its genes are unlabeled and returned to the pool of genes waiting for mofule detection).
#### minCoreKMESize
see minCoreKME above.
#### minGap
minimum cluster gap given as the fraction of the difference between cutHeight and the 5th percentile of joining heights. See cutreeDynamic for more details.
#### minKMEtoStay
genes whose eigengene connectivity to their module eigengene is lower than minKMEtoStay are removed from the module.
#### minModuleSize
minimum module size for module detection. See cutreeDynamic for more details.
#### minSplitHeight
Minimum split height given as the fraction of the difference between cutHeight and the 5th percentile of joining heights. Branches merging below this height will automatically be merged. Defaults to zero but is used only if minAbsSplitHeight below is NULL.
#### minStabilityDissim
Minimum stability dissimilarity criterion for two branches to be considered separate. Should be a number between 0 (essentially no dissimilarity required) and 1 (perfect dissimilarity or distinguishability based on stabilityLabels). See branchSplitFromStabilityLabels for details.
#### networkType
network type. Allowed values are (unique abbreviations of) "unsigned", "signed", "signed hybrid". See adjacency.
#### nThreads
non-negative integer specifying the number of parallel threads to be used by certain parts of correlation calculations. This option only has an effect on systems on which a POSIX thread library is available (which currently includes Linux and Mac OSX, but excludes Windows). If zero, the number of online processors will be used if it can be determined dynamically, otherwise correlation calculations will use 2 threads.
#### numericLabels
logical: should the returned modules be labeled by colors (FALSE), or by numbers (TRUE)?
#### pamRespectsDendro
Logical, only used when pamStage is TRUE. If TRUE, the PAM stage will respect the dendrogram in the sense an object can be PAM-assigned only to clusters that lie below it on the branch that the object is merged into. See cutreeDynamic for more details.
#### pamStage
logical. If TRUE, the second (PAM-like) stage of module detection will be performed. See cutreeDynamic for more details.
#### pearsonFallback
Specifies whether the bicor calculation, if used, should revert to Pearson when median absolute deviation (mad) is zero. Recongnized values are (abbreviations of) "none", "individual", "all". If set to "none", zero mad will result in NA for the corresponding correlation. If set to "individual", Pearson calculation will be used only for columns that have zero mad. If set to "all", the presence of a single zero mad will cause the whole variable to be treated in Pearson correlation manner (as if the corresponding robust option was set to FALSE). Has no effect for Pearson correlation. See bicor.
#### power
soft-thresholding power for network construction.
#### quickCor
real number between 0 and 1 that controls the handling of missing data in the calculation of correlations. See details.
#### randomSeed
integer to be used as seed for the random number generator before the function starts. If a current seed exists, it is saved and restored upon exit. If NULL is given, the function will not save and restore the seed.
#### reassignThreshold
p-value ratio threshold for reassigning genes between modules. See Details.
#### saveTOMFileBase
character string containing the file name base for files containing the consensus topological overlaps. The full file names have "block.1.RData", "block.2.RData" etc. appended. These files are standard R data files and can be loaded using the load function.
#### saveTOMs
logical: should the consensus topological overlap matrices For Each block be saved And returned?
#### stabilityLabels
Optional matrix of cluster labels that are to be used for calculating branch dissimilarity based on split stability. The number of rows must equal the number of genes in multiExpr; the number of columns (clusterings) is arbitrary. See branchSplitFromStabilityLabels for details.
#### TOMDenom
a character string specifying the TOM variant to be used. Recognized values are "min" giving the standard TOM described in Zhang and Horvath (2005), and "mean" in which the min function in the denominator is replaced by mean. The "mean" may produce better results but at this time should be considered experimental.
#### TOMType
one of "none", "unsigned", "signed". If "none", adjacency will be used for clustering. 
 If "unsigned", the standard TOM will be used (more generally, TOM function will receive the adjacency as input). If "signed", TOM will keep track of the sign of correlations between neighbors.
#### trapErrors
logical: should errors in calculations be trapped?
#### useBranchEigennodeDissim
Logical: should branch eigennode (eigengene) dissimilarity be considered when merging branches in Dynamic Tree Cut?
#### verbose
integer level of verbosity. Zero means silent, higher values make the output progressively more and more verbose.
