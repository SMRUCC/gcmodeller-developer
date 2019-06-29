# KEGG pathway annotation

<!-- 2018-10-02 -->
<!-- :: user,dev -->

<iframe src="https://player.bilibili.com/player.html?aid=34529020&cid=60489773&page=1" 
			scrolling="no" 
			border="0" 
			frameborder="no" 
			framespacing="0" 
			allowfullscreen="true" 
			width="720" 
			height="480"> 
		</iframe>

For reconstruct the KEGG pathway network, we need the protein annotation data source from the UniProt database. We can export all of the protein sequence which with ``KO`` number have been assigned from Uniprot as the reference sequence. For build such reference sequence database, we can use the ``/Uniprot.KO.faa`` command from GCModeller localblast tool, for export the reference protein sequence.

```vbnet
''' <summary>
''' 从uniprot数据库之中导出具有KO编号的所有蛋白序列
''' </summary>
''' <param name="args"></param>
''' <returns></returns>
<ExportAPI("/UniProt.KO.faa")>
<Usage("/UniProt.KO.faa /in <uniprot.xml> [/out <proteins.faa>]")>
<Group(CLIGrouping.UniProtTools)>
Public Function ExportKOFromUniprot(args As CommandLine) As Integer
```

The cli command takes one required input file and an optional output file parameter. The input file for this command could be download from Uniprot ftp site, you can download such Uniprot database for one specific genome from the Uniprot taxonomy entry or just download all of the bacteria genome data(Which could be up to 5GB to download).

