---
title: lib_wikiwatchlist
---

# lib_wikiwatchlist
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikiwatchlist`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikiwatchlist` (
 `wl_user` int(10) unsigned NOT NULL,
 `wl_namespace` int(11) NOT NULL DEFAULT '0',
 `wl_title` varbinary(255) NOT NULL DEFAULT '',
 `wl_notificationtimestamp` varbinary(14) DEFAULT NULL,
 UNIQUE KEY `wl_user` (`wl_user`,`wl_namespace`,`wl_title`),
 KEY `namespace_title` (`wl_namespace`,`wl_title`),
 KEY `wl_user_notificationtimestamp` (`wl_user`,`wl_notificationtimestamp`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 /*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;
 
 /*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
 /*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
 /*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
 /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
 /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
 /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
 /*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
 
 -- Dump completed on 2015-12-03 20:20:08




