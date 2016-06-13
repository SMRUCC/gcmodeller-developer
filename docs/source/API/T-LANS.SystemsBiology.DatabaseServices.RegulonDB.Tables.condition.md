---
title: condition
---

# condition
_namespace: [LANS.SystemsBiology.DatabaseServices.RegulonDB.Tables](N-LANS.SystemsBiology.DatabaseServices.RegulonDB.Tables.html)_

--
 
 DROP TABLE IF EXISTS `condition`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `condition` (
 `condition_id` char(12) NOT NULL,
 `control_condition` varchar(2000) NOT NULL,
 `control_details` varchar(2000) DEFAULT NULL,
 `exp_condition` varchar(2000) NOT NULL,
 `exp_details` varchar(2000) DEFAULT NULL,
 `condition_global` varchar(2000) DEFAULT NULL,
 `condition_notes` varchar(2000) DEFAULT NULL
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




