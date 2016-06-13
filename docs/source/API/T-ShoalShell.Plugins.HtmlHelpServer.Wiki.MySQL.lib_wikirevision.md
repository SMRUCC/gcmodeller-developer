---
title: lib_wikirevision
---

# lib_wikirevision
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikirevision`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikirevision` (
 `rev_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
 `rev_page` int(10) unsigned NOT NULL,
 `rev_text_id` int(10) unsigned NOT NULL,
 `rev_comment` varbinary(767) NOT NULL,
 `rev_user` int(10) unsigned NOT NULL DEFAULT '0',
 `rev_user_text` varbinary(255) NOT NULL DEFAULT '',
 `rev_timestamp` binary(14) NOT NULL DEFAULT '\0\0\0\0\0\0\0\0\0\0\0\0\0\0',
 `rev_minor_edit` tinyint(3) unsigned NOT NULL DEFAULT '0',
 `rev_deleted` tinyint(3) unsigned NOT NULL DEFAULT '0',
 `rev_len` int(10) unsigned DEFAULT NULL,
 `rev_parent_id` int(10) unsigned DEFAULT NULL,
 `rev_sha1` varbinary(32) NOT NULL DEFAULT '',
 `rev_content_model` varbinary(32) DEFAULT NULL,
 `rev_content_format` varbinary(64) DEFAULT NULL,
 PRIMARY KEY (`rev_id`),
 UNIQUE KEY `rev_page_id` (`rev_page`,`rev_id`),
 KEY `rev_timestamp` (`rev_timestamp`),
 KEY `page_timestamp` (`rev_page`,`rev_timestamp`),
 KEY `user_timestamp` (`rev_user`,`rev_timestamp`),
 KEY `usertext_timestamp` (`rev_user_text`,`rev_timestamp`),
 KEY `page_user_timestamp` (`rev_page`,`rev_user`,`rev_timestamp`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary MAX_ROWS=10000000 AVG_ROW_LENGTH=1024;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




