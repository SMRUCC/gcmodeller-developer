---
title: journal
---

# journal
_namespace: [LANS.SystemsBiology.DatabaseServices.ComparativeGenomics.AnnotationTools.Interpro.Tables](N-LANS.SystemsBiology.DatabaseServices.ComparativeGenomics.AnnotationTools.Interpro.Tables.html)_

--
 
 DROP TABLE IF EXISTS `journal`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `journal` (
 `issn` varchar(9) CHARACTER SET latin1 COLLATE latin1_bin NOT NULL,
 `abbrev` varchar(60) CHARACTER SET latin1 COLLATE latin1_bin NOT NULL,
 `uppercase` varchar(60) CHARACTER SET latin1 COLLATE latin1_bin DEFAULT NULL,
 `start_date` datetime DEFAULT NULL,
 `end_date` datetime DEFAULT NULL,
 PRIMARY KEY (`issn`)
 ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




