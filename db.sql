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
INSERT INTO `university` VALUES (9,'Northeastern University','QS100','this is bU',500,'/images/neu.jpeg',0),(10,'Harvard University','US-1','this is Harvard University, this is a great university',18125,'/images/Harvard_University.jpeg',0),(11,'Stanford University','US-2','this is Stanford University, this is a great university',13523,'/images/Stanford_University.jpeg',0),(12,'Massachusetts Institute of Technology','US-3','this is Massachusetts Institute of Technology, this is a great university',12475,'/images/Massachusetts_Institute_of_Technology.jpeg',0),(13,'California Institute of Technology','US-4','this is California Institute of Technology, this is a great university',7223,'/images/California_Institute_of_Technology.jpeg',0),(14,'Princeton University','US-5','this is Princeton University, this is a great university',7463,'/images/Princeton_University.jpeg',0),(15,'Columbia University','US-6','this is Columbia University, this is a great university',13297,'/images/Columbia_University.jpeg',0),(16,'University of Chicago','US-7','this is University of Chicago, this is a great university',13363,'/images/University_of_Chicago.jpeg',0),(17,'Yale University','US-8','this is Yale University, this is a great university',13256,'/images/Yale_University.jpeg',0),(18,'University of California Berkeley','US-9','this is University of California Berkeley, this is a great university',19252,'/images/University_of_California_Berkeley.jpeg',0),(19,'University of Pennsylvania','US-10','this is University of Pennsylvania, this is a great university',12150,'/images/University_of_Pennsylvania.jpeg',0),(20,'Johns Hopkins University','US-11','this is Johns Hopkins University, this is a great university',9133,'/images/Johns_Hopkins_University.jpeg',0),(21,'Northwestern University','US-12','this is Northwestern University, this is a great university',10457,'/images/Northwestern_University.jpeg',0),(22,'Duke University','US-13','this is Duke University, this is a great university',7241,'/images/Duke_University.jpeg',0),(23,'University of Michigan Ann Arbor','US-14','this is University of Michigan Ann Arbor, this is a great university',18290,'/images/University_of_Michigan_Ann_Arbor.jpeg',0),(24,'University of California Los Angeles','US-15','this is University of California Los Angeles, this is a great university',12628,'/images/University_of_California_Los_Angeles.jpeg',0),(25,'Carnegie Mellon University','US-16','this is Carnegie Mellon University, this is a great university',10260,'/images/Carnegie_Mellon_University.jpeg',0),(26,'University of Virginia','US-17','this is University of Virginia, this is a great university',16507,'/images/University_of_Virginia.jpeg',0),(27,'Georgia Institute of Technology','US-18','this is Georgia Institute of Technology, this is a great university',7450,'/images/Georgia_Institute_of_Technology.jpeg',0),(28,'University of Illinois at Urbana-Champaign','US-19','this is University of Illinois at Urbana-Champaign, this is a great university',16441,'/images/University_of_Illinois_at_Urbana-Champaign.jpeg',0),(29,'University of North Carolina at Chapel Hill','US-20','this is University of North Carolina at Chapel Hill, this is a great university',6753,'/images/University_of_North_Carolina_at_Chapel_Hill.jpeg',0),(30,'New York University','US-21','this is New York University, this is a great university',12927,'/images/New_York_University.jpeg',0),(31,'University of California San Diego','US-22','this is University of California San Diego, this is a great university',11362,'/images/University_of_California_San_Diego.jpeg',0),(32,'University of Texas at Austin','US-23','this is University of Texas at Austin, this is a great university',6024,'/images/University_of_Texas_at_Austin.jpeg',0),(33,'University of Florida','US-24','this is University of Florida, this is a great university',17553,'/images/University_of_Florida.jpeg',0),(34,'Boston University','US-25','this is Boston University, this is a great university',7794,'/images/Boston_University.jpeg',0),(35,'Washington University in St Louis','US-26','this is Washington University in St Louis, this is a great university',9142,'/images/Washington_University_in_St_Louis.jpeg',0),(36,'Emory University','US-27','this is Emory University, this is a great university',6364,'/images/Emory_University.jpeg',0),(37,'University of Wisconsin-Madison','US-28','this is University of Wisconsin-Madison, this is a great university',7409,'/images/University_of_Wisconsin-Madison.jpeg',0),(38,'Rice University','US-29','this is Rice University, this is a great university',16130,'/images/Rice_University.jpeg',0),(39,'University of Southern California','US-30','this is University of Southern California, this is a great university',16688,'/images/University_of_Southern_California.jpeg',0);
/*!40000 ALTER TABLE `university` ENABLE KEYS */;
UNLOCK TABLES;