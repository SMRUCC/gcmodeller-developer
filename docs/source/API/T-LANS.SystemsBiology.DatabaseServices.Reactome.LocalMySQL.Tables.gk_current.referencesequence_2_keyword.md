---
title: referencesequence_2_keyword
---

# referencesequence_2_keyword
_namespace: [LANS.SystemsBiology.DatabaseServices.Reactome.LocalMySQL.Tables.gk_current](N-LANS.SystemsBiology.DatabaseServices.Reactome.LocalMySQL.Tables.gk_current.html)_

--
 
 DROP TABLE IF EXISTS `referencesequence_2_keyword`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `referencesequence_2_keyword` (
 `DB_ID` int(10) unsigned DEFAULT NULL,
 `keyword_rank` int(10) unsigned DEFAULT NULL,
 `keyword` text,
 KEY `DB_ID` (`DB_ID`),
 FULLTEXT KEY `keyword` (`keyword`)
 ) ENGINE=MyISAM DEFAULT CHARSET=latin1;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




