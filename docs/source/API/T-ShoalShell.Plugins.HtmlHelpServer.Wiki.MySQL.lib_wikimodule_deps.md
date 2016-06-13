---
title: lib_wikimodule_deps
---

# lib_wikimodule_deps
_namespace: [ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL](N-ShoalShell.Plugins.HtmlHelpServer.Wiki.MySQL.html)_

--
 
 DROP TABLE IF EXISTS `lib_wikimodule_deps`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `lib_wikimodule_deps` (
 `md_module` varbinary(255) NOT NULL,
 `md_skin` varbinary(32) NOT NULL,
 `md_deps` mediumblob NOT NULL,
 UNIQUE KEY `md_module_skin` (`md_module`,`md_skin`)
 ) ENGINE=InnoDB DEFAULT CHARSET=binary;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




