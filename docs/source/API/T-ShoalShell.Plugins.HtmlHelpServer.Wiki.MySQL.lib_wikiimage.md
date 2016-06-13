---
title: lib_wikiimage
---

# lib_wikiimage
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikiimage`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikiimage` (
 `img_name` varbinary(255) NOT NULL DEFAULT '',
 `img_size` int(10) unsigned NOT NULL DEFAULT '0',
 `img_width` int(11) NOT NULL DEFAULT '0',
 `img_height` int(11) NOT NULL DEFAULT '0',
 `img_metadata` mediumblob NOT NULL,
 `img_bits` int(11) NOT NULL DEFAULT '0',
 `img_media_type` enum('UNKNOWN','BITMAP','DRAWING','AUDIO','VIDEO','MULTIMEDIA','OFFICE','TEXT','EXECUTABLE','ARCHIVE') DEFAULT NULL,
 `img_major_mime` enum('unknown','application','audio','image','text','video','message','model','multipart','chemical') NOT NULL DEFAULT 'unknown',
 `img_minor_mime` varbinary(100) NOT NULL DEFAULT 'unknown',
 `img_description` varbinary(767) NOT NULL,
 `img_user` int(10) unsigned NOT NULL DEFAULT '0',
 `img_user_text` varbinary(255) NOT NULL,
 `img_timestamp` varbinary(14) NOT NULL DEFAULT '',
 `img_sha1` varbinary(32) NOT NULL DEFAULT '',
 PRIMARY KEY (`img_name`),
 KEY `img_usertext_timestamp` (`img_user_text`,`img_timestamp`),
 KEY `img_size` (`img_size`),
 KEY `img_timestamp` (`img_timestamp`),
 KEY `img_sha1` (`img_sha1`(10)),
 KEY `img_media_mime` (`img_media_type`,`img_major_mime`,`img_minor_mime`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




