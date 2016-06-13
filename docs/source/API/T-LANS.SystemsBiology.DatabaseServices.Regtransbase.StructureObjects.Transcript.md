---
title: Transcript
---

# Transcript
_namespace: [LANS.SystemsBiology.DatabaseServices.Regtransbase.StructureObjects](N-LANS.SystemsBiology.DatabaseServices.Regtransbase.StructureObjects.html)_





### Properties

#### Guid
transcript_guid
#### pfo_side_guid
pfo_side_guid - location in this regulatory element to which start is binded (e.g. start, 
 end, transcription start, translation start etc.; link to dict_obj_side_types)
#### pfo_type_id
pfo_type_id - type of this regulatory element (link to obj_types)
#### pos_from
pos_from - start position (relative to some regulatory element)
#### pos_from_guid
pos_from_guid - regulatory element to which start of the secondary structure is binded 
 (link to some table with regulatory elements)
#### pos_to
pos_to - end position (relative to some regulatory element)
#### pos_to_guid
pos_to_guid - regulatory element dto which end position is binded (link to some table with
 regulatory elements)
#### pto_side_guid
pto_side_guid - location in this regulatory element to which end is binded (e.g. start, end, 
 transcription start, translation start etc.; link to dict_obj_side_types)
#### pto_type_id
pto_type_id - type of this regulatory element (link to obj_types)
#### tr_len
transcript length

