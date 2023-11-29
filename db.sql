DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
                         `id` int NOT NULL,
                         `email` varchar(45) NOT NULL,
                         `username` varchar(45) NOT NULL,
                         `password` varchar(45) NOT NULL,
                         PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
                          `id` int NOT NULL AUTO_INCREMENT,
                          `user_id` int NOT NULL,
                          `uni_id` int NOT NULL,
                          `content` varchar(500) NOT NULL,
                          `rating` int NOT NULL,
                          PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (1,1,1,'this is a review for test only',3),(2,1,1,'this is a another review',3),(3,1,1,'this is a another review',3),(4,1,1,'this is a another review',3),(5,1,1,'this is a another review',3),(6,1,1,'this is a another review',3),(7,1,1,'this is a another review',3),(8,1,1,'this is a another review',3),(9,1,1,'this is a another review',3),(10,1,1,'this is a another review',3),(11,1,1,'this is a review for testing',4),(12,3,3,'UserID1 University',1),(13,3,4,'UserID2 University',3),(14,2,2,'GetByID University',4),(15,5,5,'UniID1 University',1),(16,6,5,'UniID2 University',3),(18,1,1,'Insert University',5),(19,7,7,'Updated University',4);
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `favourite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favourite` (
                             `id` int NOT NULL AUTO_INCREMENT,
                             `user_id` int NOT NULL,
                             `university_id` int NOT NULL,
                             PRIMARY KEY (`id`),
                             UNIQUE KEY `uniq` (`user_id`,`university_id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favourite`
--

LOCK TABLES `favourite` WRITE;
/*!40000 ALTER TABLE `favourite` DISABLE KEYS */;
INSERT INTO `favourite` VALUES (10,1,1),(22,1,9),(8,2,2),(6,3,3),(7,3,4);
/*!40000 ALTER TABLE `favourite` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
                        `id` int NOT NULL AUTO_INCREMENT,
                        `username` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
                        `email` varchar(45) NOT NULL,
                        `password` varchar(45) NOT NULL,
                        `addr` varchar(256) DEFAULT NULL,
                        `tel` varchar(45) DEFAULT NULL,
                        PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'joshua','xue.jianh@northeastern.edu','this is a password','white house _ 1','408000000'),(2,'abc','SDfsd','abc','sefsdfs','2323'),(3,'joshuasdfsdf','sdfsdfs','dfsdfsfssdfs','Sfsdfsdf','232323'),(4,'Sdfs','dsfsdf','Sdfsdfsfs','Sdfsfs','Sfsdf'),(5,'Sdfssdfsdf','dsfsdf','Sdfsdfsfs','Sdfsfs','Sfsdf'),(6,'joshuasdfsdfsdfsdf','sdfsdfs','dfsdfsfssdfs','Sfsdfsdf','232323'),(7,'joshuassdfsfsdfsfssdfsdfsdfsdfsdfsdf','sdfsdfs','dfsdfsfssdfs','Sfsdfsdf','232323'),(8,'joshudfsdfsdfsdfsdfsdf','sdfsdfs','dfsdfsfssdfs','Sfsdfsdf','232323'),(9,'joshudfsdfsd232fsdfsdfsdf','sdfsdfs','dfsdfsfssdfs','Sfsdfsdf','232323'),(10,'joshudfsdfsd232fsdfsdf000sdf','sdfsdfs','dfsdfsfssdfs','Sfsdfsdf','232323'),(11,'user1','user1@example.com','password1','123 User1 St','1234567891'),(12,'user2','user2@example.com','password2','123 User2 St','1234567892'),(13,'getbyiduser','getbyid@example.com','password123','123 GetByID St','1234567890'),(14,'usernameuser','username@example.com','password123','123 UserName St','1234567890'),(16,'insertuser','test@example.com','password123','123 Test St','1234567890'),(17,'updateuser','update@example.com','newpassword','456 Update St','1234567890'),(18,'joshua1','sdfsdfs','password','Sfsdfsdf','232323');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `university`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `university` (
                              `id` int NOT NULL AUTO_INCREMENT,
                              `name` varchar(45) NOT NULL,
                              `ranking` varchar(45) NOT NULL,
                              `description` varchar(10000) DEFAULT NULL,
                              `student_size` int NOT NULL,
                              `photo` varchar(100) DEFAULT NULL,
                              `popularity` int NOT NULL DEFAULT '0',
                              PRIMARY KEY (`id`),
                              UNIQUE KEY `uniq` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `university`
--

LOCK TABLES `university` WRITE;
/*!40000 ALTER TABLE `university` DISABLE KEYS */;
INSERT INTO `university` VALUES (9,'Northeastern University','QS100','this is bU',500,'/images/neu.jpeg',1);
/*!40000 ALTER TABLE `university` ENABLE KEYS */;
UNLOCK TABLES;