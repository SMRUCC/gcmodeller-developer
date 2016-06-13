---
title: lib_wikipage
---

# lib_wikipage
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikipage`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikipage` (
 `page_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
 `page_namespace` int(11) NOT NULL,
 `page_title` varbinary(255) NOT NULL,
 `page_restrictions` tinyblob NOT NULL,
 `page_is_redirect` tinyint(3) unsigned NOT NULL DEFAULT '0',
 `page_is_new` tinyint(3) unsigned NOT NULL DEFAULT '0',
 `page_random` double unsigned NOT NULL,
 `page_touched` binary(14) NOT NULL DEFAULT '\0\0\0\0\0\0\0\0\0\0\0\0\0\0',
 `page_links_updated` varbinary(14) DEFAULT NULL,
 `page_latest` int(10) unsigned NOT NULL,
 `page_len` int(10) unsigned NOT NULL,
 `page_content_model` varbinary(32) DEFAULT NULL,
 `page_lang` varbinary(35) DEFAULT NULL,
 PRIMARY KEY (`page_id`),
 UNIQUE KEY `name_title` (`page_namespace`,`page_title`),
 KEY `page_random` (`page_random`),
 KEY `page_len` (`page_len`),
 KEY `page_redirect_namespace_len` (`page_is_redirect`,`page_namespace`,`page_len`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




