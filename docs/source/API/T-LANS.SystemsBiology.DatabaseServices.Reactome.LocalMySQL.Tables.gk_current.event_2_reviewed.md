﻿---
title: event_2_reviewed
---

# event_2_reviewed
_namespace: [LANS.SystemsBiology.DatabaseServices.Reactome.LocalMySQL.Tables.gk_current](N-LANS.SystemsBiology.DatabaseServices.Reactome.LocalMySQL.Tables.gk_current.html)_

--
 
 DROP TABLE IF EXISTS `event_2_reviewed`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `event_2_reviewed` (
 `DB_ID` int(10) unsigned DEFAULT NULL,
 `reviewed_rank` int(10) unsigned DEFAULT NULL,
 `reviewed` int(10) unsigned DEFAULT NULL,
 `reviewed_class` varchar(64) DEFAULT NULL,
 KEY `DB_ID` (`DB_ID`),
 KEY `reviewed` (`reviewed`)
 ) ENGINE=MyISAM DEFAULT CHARSET=latin1;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --



