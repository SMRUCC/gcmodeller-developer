---
title: BitFLAGS
---

# BitFLAGS
_namespace: [LANS.SystemsBiology.Toolkits.RNA_Seq.BOW.DocumentFormat.SAM.DocumentElements](N-LANS.SystemsBiology.Toolkits.RNA_Seq.BOW.DocumentFormat.SAM.DocumentElements.html)_

Bitwise flags in .bam/.sam files



### Properties

#### Bit0x1
template having multiple segments in sequencing
 If 0x1 is unset, no assumptions can be made about 0x2, 0x8, 0x20, 0x40 and 0x80.
 (假若1标注没有被设置，则不会进行对2,8,32,64,128的标注进行假设???????)
#### Bit0x10
SEQ being reverse complemented
#### Bit0x100
secondary alignment
 
 Bit 0x100 marks the alignment not to be used in certain analyses when the tools in use are
 aware Of this bit.
 (256标注表示这个比对不会被使用于特定的分析之中当工具)
#### Bit0x2
Each segment properly aligned according To the aligner
#### Bit0x20
SEQ Of the Next segment In the template being reversed
#### Bit0x200
Not passing quality controls
#### Bit0x4
segment unmapped
 
 Bit 0x4 is the only reliable place to tell whether the segment is unmapped. If 0x4 is set, no
‘’‘ assumptions can be made about RNAME, POS, CIGAR, MAPQ, bits 0x2, 0x10 And 0x100
’‘’ And the bit 0x20 of the next segment in the template.
#### Bit0x40
the first segment In the template
#### Bit0x400
PCR Or optical duplicate
#### Bit0x8
Next segment In the template unmapped
#### Bit0x80
the last segment In the template

