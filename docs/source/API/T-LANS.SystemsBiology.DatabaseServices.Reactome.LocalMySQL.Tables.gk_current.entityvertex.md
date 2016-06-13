---
title: entityvertex
---

# entityvertex
_namespace: [LANS.SystemsBiology.DatabaseServices.Reactome.LocalMySQL.Tables.gk_current](N-LANS.SystemsBiology.DatabaseServices.Reactome.LocalMySQL.Tables.gk_current.html)_

--
 
 DROP TABLE IF EXISTS `entityvertex`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `entityvertex` (
 `DB_ID` int(10) unsigned NOT NULL,
 `containedInEntityVertex` int(10) unsigned DEFAULT NULL,
 `containedInEntityVertex_class` varchar(64) DEFAULT NULL,
 PRIMARY KEY (`DB_ID`),
 KEY `containedInEntityVertex` (`containedInEntityVertex`)
 ) ENGINE=MyISAM DEFAULT CHARSET=latin1;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




