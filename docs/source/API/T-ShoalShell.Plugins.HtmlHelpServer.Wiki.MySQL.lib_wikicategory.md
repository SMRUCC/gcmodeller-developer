---
title: lib_wikicategory
---

# lib_wikicategory
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikicategory`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikicategory` (
 `cat_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
 `cat_title` varbinary(255) NOT NULL,
 `cat_pages` int(11) NOT NULL DEFAULT '0',
 `cat_subcats` int(11) NOT NULL DEFAULT '0',
 `cat_files` int(11) NOT NULL DEFAULT '0',
 PRIMARY KEY (`cat_id`),
 UNIQUE KEY `cat_title` (`cat_title`),
 KEY `cat_pages` (`cat_pages`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




