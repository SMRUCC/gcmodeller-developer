---
title: Sites
---

# Sites
_namespace: [LANS.SystemsBiology.DatabaseServices.Regtransbase.StructureObjects](N-LANS.SystemsBiology.DatabaseServices.Regtransbase.StructureObjects.html)_



### Methods

#### FixSequenceError
```csharp
LANS.SystemsBiology.DatabaseServices.Regtransbase.StructureObjects.Sites.FixSequenceError(System.String@)
```
针对DNA序列进行修复

|Parameter Name|Remarks|
|--------------|-------|
|Sequence|-|




### Properties

#### fl_dna_rna
fl_dna_rna: DNA/RNA flag
#### FuncSiteTypeGuid
functional_site_type_guid: id of the functional type of the site (from FunctionalSiteType dictionary (see below, part 5)).
#### PfoSideGuid
pfo_side_guid, pto_side_guid: id of the relation between reference regulatory element and current regulatory element, 
 which positions are indicated in pos_from, pos_to fields (from ObjSideType dictionary (for instance, transcription 
 start, translation start, transcription end, translation end; see part 5)).
#### PfoTypeId
pfo_type_id, pto_type_id: type of the reference regulatory element, which used as point of origin for positions indicated in pos_from, pos_to fields
#### PositionFrom
pos_from, pos_to: first and last positions of the regulatory element
#### PositionFromGuid
pos_from_guid, pos_to_guid: id of the reference regulatory element, which used as point of origin for positions indicated in pos_from, pos_to fields
#### PositionTo
pos_from, pos_to: first and last positions of the regulatory element
#### PositionToGuid
pfo_side_guid, pto_side_guid: id of the relation between reference regulatory element and current regulatory element, 
 which positions are indicated in pos_from, pos_to fields (from ObjSideType dictionary (for instance, transcription 
 start, translation start, transcription end, translation end; see part 5)).
#### PtoSideGuid
pfo_side_guid, pto_side_guid: id of the relation between reference regulatory element and current regulatory element, 
 which positions are indicated in pos_from, pos_to fields (from ObjSideType dictionary (for instance, transcription 
 start, translation start, transcription end, translation end; see part 5)).
#### PtoTypeId
pfo_type_id, pto_type_id: type of the reference regulatory element, which used as point of origin for positions 
 indicated in pos_from, pos_to fields
#### Sequence
sequence: site sequence
#### Signature
signature: site signature (if site sequence is too short for certain localization in the genome, 
 annotator had to input longer sequence fragment in “signature” field). Signature must be at least 
 30 nt. signature - site signature (part of sequence long enough to find site in genome reliably 
 if site sequence is too short) (a number can be placed within this field to represent a particular 
 length of unknown sequence (N's)
#### SiteLen
site_len: site length
#### StructureSiteTypeGuid
structural_site_type_guid: id of the functional type of the site (from StructuralSiteType dictionary (see below, part 5)).

