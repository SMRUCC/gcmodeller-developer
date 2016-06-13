---
title: lib_wikiinterwiki
---

# lib_wikiinterwiki
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikiinterwiki`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikiinterwiki` (
 `iw_prefix` varbinary(32) NOT NULL,
 `iw_url` blob NOT NULL,
 `iw_api` blob NOT NULL,
 `iw_wikiid` varbinary(64) NOT NULL,
 `iw_local` tinyint(1) NOT NULL,
 `iw_trans` tinyint(4) NOT NULL DEFAULT '0',
 UNIQUE KEY `iw_prefix` (`iw_prefix`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




