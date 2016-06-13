---
title: referencemolecule
---

# referencemolecule
_namespace: [LANS.SystemsBiology.DatabaseServices.Reactome.LocalMySQL.Tables.gk_current](N-LANS.SystemsBiology.DatabaseServices.Reactome.LocalMySQL.Tables.gk_current.html)_

--
 
 DROP TABLE IF EXISTS `referencemolecule`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `referencemolecule` (
 `DB_ID` int(10) unsigned NOT NULL,
 `atomicConnectivity` text,
 `formula` text,
 PRIMARY KEY (`DB_ID`),
 FULLTEXT KEY `atomicConnectivity` (`atomicConnectivity`),
 FULLTEXT KEY `formula` (`formula`)
 ) ENGINE=MyISAM DEFAULT CHARSET=latin1;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




