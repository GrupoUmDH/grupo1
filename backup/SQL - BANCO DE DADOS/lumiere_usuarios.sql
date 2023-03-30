-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 177.137.252.222    Database: lumiere
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome_usuario` varchar(200) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(200) NOT NULL,
  `tipo_usuario` varchar(15) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Administrador','admin@lumiere.com.br','$2b$10$RoRCUC9ZBvtos87pZ8NjmeYY4baLutVaxHOAEk17oDsCcThgZqdTq','admin'),(2,'Lucas Afonso','lucasafonsobastos@gmail.com','$2b$10$QY5dcSduqUxsg/kKx8fqt.nOo5RSP8QOj6x3tILFfvErgAIjk5HGy','admin'),(8,'Lucas Cliente','lucasafonsob@hotmail.com','$2b$10$ciInRnZL3Khapsbu.dNzh.6VrF8C7cOPOnidkH0IZVsRisz5k3m82','cliente'),(9,'Anna Paula Pedrussi','annap.pedrussi@gmail.com','$2b$10$lTEoakwDtlxM4sJZbG936euMntBglZXD1T02xGCL9VlnZNsoGgcIe','cliente'),(10,'Vagner','vagnerb@gmail.com','$2b$10$6kNzw16Hav0TFhkRZwlAiuUlkes17FTdS6ltSVkr18p19saZLvROS','cliente'),(11,'Anna Paula Pedrussi','','$2b$10$6hlVGnCRJciMnEiqJ2qMLuEpbMk.lPmG8dVJO6Af.aHzTTWukX.K.','cliente'),(12,'Anna Paula Pedrussi','annapaulapedrussi@gmail.com','$2b$10$u5GwP4VVh/4a4efcXPEi/eQGOJ6lqZ3WVz1DdTp114QiZyutTM3.S','cliente');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-30 10:28:37
