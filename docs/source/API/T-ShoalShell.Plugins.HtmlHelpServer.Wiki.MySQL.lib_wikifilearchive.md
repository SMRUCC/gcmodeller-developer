---
title: lib_wikifilearchive
---

# lib_wikifilearchive
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikifilearchive`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikifilearchive` (
 `fa_id` int(11) NOT NULL AUTO_INCREMENT,
 `fa_name` varbinary(255) NOT NULL DEFAULT '',
 `fa_archive_name` varbinary(255) DEFAULT '',
 `fa_storage_group` varbinary(16) DEFAULT NULL,
 `fa_storage_key` varbinary(64) DEFAULT '',
 `fa_deleted_user` int(11) DEFAULT NULL,
 `fa_deleted_timestamp` binary(14) DEFAULT '\0\0\0\0\0\0\0\0\0\0\0\0\0\0',
 `fa_deleted_reason` varbinary(767) DEFAULT '',
 `fa_size` int(10) unsigned DEFAULT '0',
 `fa_width` int(11) DEFAULT '0',
 `fa_height` int(11) DEFAULT '0',
 `fa_metadata` mediumblob,
 `fa_bits` int(11) DEFAULT '0',
 `fa_media_type` enum('UNKNOWN','BITMAP','DRAWING','AUDIO','VIDEO','MULTIMEDIA','OFFICE','TEXT','EXECUTABLE','ARCHIVE') DEFAULT NULL,
 `fa_major_mime` enum('unknown','application','audio','image','text','video','message','model','multipart','chemical') DEFAULT 'unknown',
 `fa_minor_mime` varbinary(100) DEFAULT 'unknown',
 `fa_description` varbinary(767) DEFAULT NULL,
 `fa_user` int(10) unsigned DEFAULT '0',
 `fa_user_text` varbinary(255) DEFAULT NULL,
 `fa_timestamp` binary(14) DEFAULT '\0\0\0\0\0\0\0\0\0\0\0\0\0\0',
 `fa_deleted` tinyint(3) unsigned NOT NULL DEFAULT '0',
 `fa_sha1` varbinary(32) NOT NULL DEFAULT '',
 PRIMARY KEY (`fa_id`),
 KEY `fa_name` (`fa_name`,`fa_timestamp`),
 KEY `fa_storage_group` (`fa_storage_group`,`fa_storage_key`),
 KEY `fa_deleted_timestamp` (`fa_deleted_timestamp`),
 KEY `fa_user_timestamp` (`fa_user_text`,`fa_timestamp`),
 KEY `fa_sha1` (`fa_sha1`(10))
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




