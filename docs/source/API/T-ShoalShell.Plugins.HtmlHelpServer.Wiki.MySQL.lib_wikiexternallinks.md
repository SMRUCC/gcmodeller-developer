---
title: lib_wikiexternallinks
---

# lib_wikiexternallinks
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikiexternallinks`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikiexternallinks` (
 `el_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
 `el_from` int(10) unsigned NOT NULL DEFAULT '0',
 `el_to` blob NOT NULL,
 `el_index` blob NOT NULL,
 PRIMARY KEY (`el_id`),
 KEY `el_from` (`el_from`,`el_to`(40)),
 KEY `el_to` (`el_to`(60),`el_from`),
 KEY `el_index` (`el_index`(60))
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




