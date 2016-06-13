---
title: lib_wikioldimage
---

# lib_wikioldimage
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikioldimage`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikioldimage` (
 `oi_name` varbinary(255) NOT NULL DEFAULT '',
 `oi_archive_name` varbinary(255) NOT NULL DEFAULT '',
 `oi_size` int(10) unsigned NOT NULL DEFAULT '0',
 `oi_width` int(11) NOT NULL DEFAULT '0',
 `oi_height` int(11) NOT NULL DEFAULT '0',
 `oi_bits` int(11) NOT NULL DEFAULT '0',
 `oi_description` varbinary(767) NOT NULL,
 `oi_user` int(10) unsigned NOT NULL DEFAULT '0',
 `oi_user_text` varbinary(255) NOT NULL,
 `oi_timestamp` binary(14) NOT NULL DEFAULT '\0\0\0\0\0\0\0\0\0\0\0\0\0\0',
 `oi_metadata` mediumblob NOT NULL,
 `oi_media_type` enum('UNKNOWN','BITMAP','DRAWING','AUDIO','VIDEO','MULTIMEDIA','OFFICE','TEXT','EXECUTABLE','ARCHIVE') DEFAULT NULL,
 `oi_major_mime` enum('unknown','application','audio','image','text','video','message','model','multipart','chemical') NOT NULL DEFAULT 'unknown',
 `oi_minor_mime` varbinary(100) NOT NULL DEFAULT 'unknown',
 `oi_deleted` tinyint(3) unsigned NOT NULL DEFAULT '0',
 `oi_sha1` varbinary(32) NOT NULL DEFAULT '',
 KEY `oi_usertext_timestamp` (`oi_user_text`,`oi_timestamp`),
 KEY `oi_name_timestamp` (`oi_name`,`oi_timestamp`),
 KEY `oi_name_archive_name` (`oi_name`,`oi_archive_name`(14)),
 KEY `oi_sha1` (`oi_sha1`(10))
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




