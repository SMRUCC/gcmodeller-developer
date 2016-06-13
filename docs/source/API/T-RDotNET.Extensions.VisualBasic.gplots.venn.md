---
title: venn
---

# venn
_namespace: [RDotNET.Extensions.VisualBasic.gplots](N-RDotNET.Extensions.VisualBasic.gplots.html)_

Plot a Venn diagrams for up to 5 sets



### Properties

#### data
Either a list list containing vectors of names or indices of group intersections,
 or a data frame containing boolean indicators of group intersectionship (see below)
#### intersections
Logical flag indicating if the returned object should have the attribute "individuals.in.intersections"
 featuring for every set a list of individuals that are assigned to it.
#### showPlot
Logical flag indicating whether the plot should be displayed. If false, simply returns the group count matrix.
#### showSetLogicLabel
Logical flag indicating whether the internal group label should be displayed
#### simplify
Logical flag indicating whether unobserved groups should be omitted.
#### small
Character scaling of the smallest group counts
#### universe
Subset of valid name/index elements. Values ignore values in codedata not
 in this list will be ignored. Use NA to use all elements of data (the default).

