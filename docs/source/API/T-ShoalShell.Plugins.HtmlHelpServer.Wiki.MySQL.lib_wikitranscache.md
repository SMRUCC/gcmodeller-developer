---
title: lib_wikitranscache
---

# lib_wikitranscache
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikitranscache`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikitranscache` (
 `tc_url` varbinary(255) NOT NULL,
 `tc_contents` blob,
 `tc_time` binary(14) NOT NULL,
 UNIQUE KEY `tc_url_idx` (`tc_url`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




