---
title: lib_wikicategorylinks
---

# lib_wikicategorylinks
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikicategorylinks`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikicategorylinks` (
 `cl_from` int(10) unsigned NOT NULL DEFAULT '0',
 `cl_to` varbinary(255) NOT NULL DEFAULT '',
 `cl_sortkey` varbinary(230) NOT NULL DEFAULT '',
 `cl_sortkey_prefix` varbinary(255) NOT NULL DEFAULT '',
 `cl_timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 `cl_collation` varbinary(32) NOT NULL DEFAULT '',
 `cl_type` enum('page','subcat','file') NOT NULL DEFAULT 'page',
 UNIQUE KEY `cl_from` (`cl_from`,`cl_to`),
 KEY `cl_sortkey` (`cl_to`,`cl_type`,`cl_sortkey`,`cl_from`),
 KEY `cl_timestamp` (`cl_to`,`cl_timestamp`),
 KEY `cl_collation` (`cl_collation`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




