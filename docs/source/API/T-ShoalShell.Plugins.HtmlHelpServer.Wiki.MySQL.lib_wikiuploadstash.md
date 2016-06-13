---
title: lib_wikiuploadstash
---

# lib_wikiuploadstash
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikiuploadstash`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikiuploadstash` (
 `us_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
 `us_user` int(10) unsigned NOT NULL,
 `us_key` varbinary(255) NOT NULL,
 `us_orig_path` varbinary(255) NOT NULL,
 `us_path` varbinary(255) NOT NULL,
 `us_source_type` varbinary(50) DEFAULT NULL,
 `us_timestamp` varbinary(14) NOT NULL,
 `us_status` varbinary(50) NOT NULL,
 `us_chunk_inx` int(10) unsigned DEFAULT NULL,
 `us_props` blob,
 `us_size` int(10) unsigned NOT NULL,
 `us_sha1` varbinary(31) NOT NULL,
 `us_mime` varbinary(255) DEFAULT NULL,
 `us_media_type` enum('UNKNOWN','BITMAP','DRAWING','AUDIO','VIDEO','MULTIMEDIA','OFFICE','TEXT','EXECUTABLE','ARCHIVE') DEFAULT NULL,
 `us_image_width` int(10) unsigned DEFAULT NULL,
 `us_image_height` int(10) unsigned DEFAULT NULL,
 `us_image_bits` smallint(5) unsigned DEFAULT NULL,
 PRIMARY KEY (`us_id`),
 UNIQUE KEY `us_key` (`us_key`),
 KEY `us_user` (`us_user`),
 KEY `us_timestamp` (`us_timestamp`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




