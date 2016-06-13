---
title: lib_wikiredirect
---

# lib_wikiredirect
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikiredirect`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikiredirect` (
 `rd_from` int(10) unsigned NOT NULL DEFAULT '0',
 `rd_namespace` int(11) NOT NULL DEFAULT '0',
 `rd_title` varbinary(255) NOT NULL DEFAULT '',
 `rd_interwiki` varbinary(32) DEFAULT NULL,
 `rd_fragment` varbinary(255) DEFAULT NULL,
 PRIMARY KEY (`rd_from`),
 KEY `rd_ns_title` (`rd_namespace`,`rd_title`,`rd_from`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




