---
title: lib_wikisearchindex
---

# lib_wikisearchindex
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikisearchindex`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikisearchindex` (
 `si_page` int(10) unsigned NOT NULL,
 `si_title` varchar(255) NOT NULL DEFAULT '',
 `si_text` mediumtext NOT NULL,
 UNIQUE KEY `si_page` (`si_page`),
 FULLTEXT KEY `si_title` (`si_title`),
 FULLTEXT KEY `si_text` (`si_text`)
 ) ENGINE=MyISAM DEFAULT CHARSET=utf8;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




