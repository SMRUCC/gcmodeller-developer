# KEGG代谢途径注释

<!-- 2018-10-02 -->
<!-- :: course,dev,kegg,blastp -->
<!-- @xieguigang -->

<div align="center">

<iframe src="//player.bilibili.com/player.html?aid=58675156&cid=102313656&page=1" 
	scrolling="no" 
	border="0" 
	frameborder="no" 
	framespacing="0" 
	allowfullscreen="true" 
	width="720" 
	height="480"> 
</iframe>

</div>

> [【GCModeller教程】KEGG代谢途径注释原理 (重置版)](https://www.bilibili.com/video/av58675156)

KEGG数据库是系统性分析基因产物在细胞中的代谢途径以及这些基因产物功能的数据库。在数据库中又以其高质量的手工修订的代谢途径的注释信息而被广泛引用。KEGG数据库之中，有一个非常完善的KO基因功能分类系统：KEGG orthologs直系同源分类。进行KEGG直系同源注释一般可以帮助我们：

+ 第一个呢，是可以帮助我们详细的了解目标基因组内的代谢途径功能模块构成
+ 第二个呢，如果是非参考基因组，一般会因为没有对应的background而无法使用现有软件做富集分析，则我们会需要自己完成KO注释然后进行富集计算分析

唉，可能有些同学会有疑问了，视频的标题是代谢途径的注释，怎么又和KEGG直系同源扯上关系了呢？这是因为啊，在KEGG数据库之中，存在着一个KEGG代谢途径标准参考图，在这些参考图的参考途径里面，基因都是以KO编号来表示，所以我们只需要完成KO的mapping操作，就可以根据标准参考图注释出相应的代谢途径啦。

在KEGG数据库之中，其自带一个KAAS自动化注释系统。该系统进行KO注释的基本工作原理呢，是根据blast的同源性搜索结果来完成的。在KAAS系统之中我们主要是依据单向最佳和双向最佳比对这两种方法的结果来完成注释工作。下面我们来了解一下该系统的注释工作原理吧：

因为功能注释的基础目前主要是依据序列的同源性比对来完成的，由于哇，NCBI的blast+程序套件是目前公认的blast搜索标准工具，所以我们在这里主要是在NCBI的blast+套件的分析结果的基础之上来完成对KO的注释分析。

对于NCBI的本地blast套件程序而言，其输出的序列比对结果，每一个query下面的第一条subject都是相似度得分最高的。所以我们假若使用单向最佳比对来进行功能注释的话，只需要利用程序取出每一条query所对应的第一条subject结果就好了。采用单向最佳比对我们一般可能会得到比较多的旁系同源（重复的注释信息）结果

如果对注释的要求比较严格，可以采用双向最佳比对的方法来进行功能注释分析。双向最佳比对一般是应用于查找两个基因组之间的基因的直系同源关系。具体的操作过程哇，如下：

1. 首先分别对基因组A和B建库。
2. 然后呢分别执行``A vs B``和``B vs A``的单向最佳比对。
3. 最后啊，我们先对目标基因组A之中的每一个query1所对应的subject。
4. 接着呢，在B vs A的结果之中查找对应的subject是否是query1。如果这个对应关系存在的话，则说明当前的比对结果是一条最佳双向比对的结果，这两个基因之间很有可能是一个直系同源关系。

但是呢，双向最佳比对方法会有一个缺陷，因为要求的是两个基因之间的比对结果，在两个方向之间都应该是唯一对应的，所以只利用一个基因组来进行功能注释的话，得到的注释的结果可能会比较少。

所以目前我们在做双向最佳比对注释的时候，一般是目标基因组同时比对很多个基因组，得到目标基因组和很多个基因组之间的双向最佳比对结果。然后可以将目标基因组之中的每一个基因得到的hit，按照基因名或者相应的term编号计算出对应的supports数量，取出supports数量最高的结果为最终的功能注释结果就好了。我们将这些和多个基因组比对的结果合并在一起之后，就可以达到既可以保证注释的准确度，又能够保证尽可能多的注释结果数量的目的了。

那，前面说完了注释的基本原理，在这里，跟着我来一起采用双向最佳比对的方法进行KEGG直系同源功能注释吧：

KEGG直系同源的信息我们可以直接从UniProt数据库之中获取得到，

+ 首先呢，我们可以从UniProt数据库中下载所有的细菌物种的蛋白注释信息。
+ 接着我们就可以利用工具提取出所有带有KO编号的蛋白序列数据了。
+ 对我们的序列数据按照基因组的taxonomy编号进行分组建库，然后进行双向最佳比对。
+ 将与每一个基因组比较得到的双向最佳比对结果合并。
+ 最后取出supports数量最高的注释结果为最终结果

当当当，完成KEGG代谢途径信息的注释分析了。


### References

> [1] KEGG: Kyoto Encyclopedia of Genes and Genomes. DOI: 10.1093/nar/27.1.29
> [2] Gapped BLAST and PSI-BLAST: a new generation of protein database search programs. DOI: 10.1093/nar/25.17.3389
> [3] The use of gene clusters to infer functional coupling. DOI: 10.1073/pnas.96.6.2896
> [4] Bidirectional Best Hits Miss Many Orthologs in Duplication-Rich Clades such as Plants and Animals. DOI: 10.1093/gbe/evt132