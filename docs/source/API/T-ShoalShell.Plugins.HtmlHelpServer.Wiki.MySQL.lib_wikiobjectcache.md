---
title: lib_wikiobjectcache
---

# lib_wikiobjectcache
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikiobjectcache`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikiobjectcache` (
 `keyname` varbinary(255) NOT NULL DEFAULT '',
 `value` mediumblob,
 `exptime` datetime DEFAULT NULL,
 PRIMARY KEY (`keyname`),
 KEY `exptime` (`exptime`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




