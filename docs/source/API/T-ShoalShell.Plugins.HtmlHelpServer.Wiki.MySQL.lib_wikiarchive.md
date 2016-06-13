---
title: lib_wikiarchive
---

# lib_wikiarchive
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikiarchive`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikiarchive` (
 `ar_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
 `ar_namespace` int(11) NOT NULL DEFAULT '0',
 `ar_title` varbinary(255) NOT NULL DEFAULT '',
 `ar_text` mediumblob NOT NULL,
 `ar_comment` varbinary(767) NOT NULL,
 `ar_user` int(10) unsigned NOT NULL DEFAULT '0',
 `ar_user_text` varbinary(255) NOT NULL,
 `ar_timestamp` binary(14) NOT NULL DEFAULT '\0\0\0\0\0\0\0\0\0\0\0\0\0\0',
 `ar_minor_edit` tinyint(4) NOT NULL DEFAULT '0',
 `ar_flags` tinyblob NOT NULL,
 `ar_rev_id` int(10) unsigned DEFAULT NULL,
 `ar_text_id` int(10) unsigned DEFAULT NULL,
 `ar_deleted` tinyint(3) unsigned NOT NULL DEFAULT '0',
 `ar_len` int(10) unsigned DEFAULT NULL,
 `ar_page_id` int(10) unsigned DEFAULT NULL,
 `ar_parent_id` int(10) unsigned DEFAULT NULL,
 `ar_sha1` varbinary(32) NOT NULL DEFAULT '',
 `ar_content_model` varbinary(32) DEFAULT NULL,
 `ar_content_format` varbinary(64) DEFAULT NULL,
 PRIMARY KEY (`ar_id`),
 KEY `name_title_timestamp` (`ar_namespace`,`ar_title`,`ar_timestamp`),
 KEY `usertext_timestamp` (`ar_user_text`,`ar_timestamp`),
 KEY `ar_revid` (`ar_rev_id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




