---
title: ResourceMapper
---

# ResourceMapper
_namespace: [LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.FileStream.XmlFormat](N-LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.FileStream.XmlFormat.html)_






### Properties

#### CheBMethylesterase
[MCP][CH3] -> MCP + -CH3 Enzyme:[CheB][PI]

 Protein L-glutamate O(5)-methyl ester + H(2)O = protein L-glutamate + methanol
 C00132

 METOH
#### CheBPhosphate
CheB + [ChA][PI] -> [CheB][PI] + CheA
#### CheRMethyltransferase
MCP + -CH3 -> [MCP][CH3] Enzyme:CheR
 S-adenosyl-L-methionine
 S-ADENOSYLMETHIONINE
 C00019

 S-ADENOSYLMETHIONINE ADENOSYL-HOMO-CYS
 S-adenosyl-L-methionine + protein L-glutamate = S-adenosyl-L-homocysteine + protein L-glutamate methyl ester.
#### CrossTalk
[CheAHK][PI] + RR -> [RR][PI] + CheAHK
 [CheAHK][PI] + OCS -> CheAHK + [OCS][PI]
#### GenomeAnnotiation
@"T:LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.FileStream.GeneObject"
#### HkAutoPhosphorus
CheAHK + ATP -> [CheAHK][PI] + ADP Enzyme: [MCP][CH3][Inducer]
#### MetabolismModel
@"T:LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.FileStream.MetabolismFlux"
#### MetabolitesModel
@"T:LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.FileStream.Metabolite"
#### ObjectiveFunctionModel
@"T:LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.FileStream.ObjectiveFunction"
#### Transcript
@"T:LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.FileStream.Transcript"
#### TranscriptionModel
@"T:LANS.SystemsBiology.GCModeller.ModellingEngine.Assembly.DocumentFormat.CsvTabular.FileStream.TranscriptUnit"
