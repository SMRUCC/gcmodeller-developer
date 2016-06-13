---
title: lib_wikitext
---

# lib_wikitext
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikitext`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikitext` (
 `old_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
 `old_text` mediumblob NOT NULL,
 `old_flags` tinyblob NOT NULL,
 PRIMARY KEY (`old_id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary MAX_ROWS=10000000 AVG_ROW_LENGTH=10240;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




