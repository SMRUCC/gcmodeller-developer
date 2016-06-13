---
title: gene_product_link
---

# gene_product_link
_namespace: [LANS.SystemsBiology.DatabaseServices.RegulonDB.Tables](N-LANS.SystemsBiology.DatabaseServices.RegulonDB.Tables.html)_

--
 
 DROP TABLE IF EXISTS `gene_product_link`;
 /*!40101 SET @saved_cs_client = @@character_set_client */;
 /*!40101 SET character_set_client = utf8 */;
 CREATE TABLE `gene_product_link` (
 `gene_id` char(12) NOT NULL,
 `product_id` char(12) NOT NULL
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
 /*!40101 SET character_set_client = @saved_cs_client */;
 
 --




