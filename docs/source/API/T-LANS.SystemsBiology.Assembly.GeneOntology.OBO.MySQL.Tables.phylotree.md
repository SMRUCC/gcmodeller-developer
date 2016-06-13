---
title: phylotree
---

# phylotree
_namespace: [LANS.SystemsBiology.Assembly.GeneOntology.OBO.MySQL.Tables](N-LANS.SystemsBiology.Assembly.GeneOntology.OBO.MySQL.Tables.html)_

--
 
 DROP TABLE IF EXISTS `phylotree`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `phylotree` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `name` varchar(255) NOT NULL DEFAULT '',
 `dbxref_id` int(11) NOT NULL,
 PRIMARY KEY (`id`),
 UNIQUE KEY `dbxref_id` (`dbxref_id`)
 ) ENGINE=MyISAM DEFAULT CHARSET=latin1;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




