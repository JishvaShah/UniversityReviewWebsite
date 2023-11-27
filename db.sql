CREATE SCHEMA `uni_review` DEFAULT CHARACTER SET utf8mb4;

CREATE TABLE `admin`
(
    `id`       int         NOT NULL,
    `email`    varchar(45) NOT NULL,
    `username` varchar(45) NOT NULL,
    `password` varchar(45) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `review`
(
    `id`      int          NOT NULL AUTO_INCREMENT,
    `user_id` int          NOT NULL,
    `uni_id`  int          NOT NULL,
    `content` varchar(500) NOT NULL,
    `rating`  int          NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

INSERT INTO `review` VALUES (1,1,1,'this is a review for test only',3),(2,1,1,'this is a another review',3),(3,1,1,'this is a another review',3),(4,1,1,'this is a another review',3),(5,1,1,'this is a another review',3),(6,1,1,'this is a another review',3),(7,1,1,'this is a another review',3),(8,1,1,'this is a another review',3),(9,1,1,'this is a another review',3),(10,1,1,'this is a another review',3);

CREATE TABLE `university`
(
    `id`           int         NOT NULL AUTO_INCREMENT,
    `name`         varchar(45) NOT NULL,
    `ranking`      varchar(45) NOT NULL,
    `description`  varchar(10000)       DEFAULT NULL,
    `student_size` int         NOT NULL,
    `photo`        varchar(10000),
    `popularity`   int         NOT NULL DEFAULT '0',
    PRIMARY KEY (`id`),
    UNIQUE KEY `uniq` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

INSERT INTO `university` VALUES (1,'Northeastern University','10000','This is a university.',2323,NULL,0),(2,'Boston University','QS100','this is bU',500,_binary '‰PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0\0\0\0\0\0\0µú7\ê\0\0\0[IDATx\Úcüÿÿ\0R>V¹rð\0\0\0”T\äJ\ä&',0);

CREATE TABLE `user`
(
    `id`       int                                                          NOT NULL AUTO_INCREMENT,
    `username` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
    `email`    varchar(45)                                                  NOT NULL,
    `password` varchar(45)                                                  NOT NULL,
    `addr`     varchar(256) DEFAULT NULL,
    `tel`      varchar(45)  DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

INSERT INTO `user` VALUES (1,'joshua','xue.jianh@northeastern.edu','this is a password','this is addr',NULL);

CREATE TABLE `favourite`
(
    `id`            int NOT NULL AUTO_INCREMENT,
    `user_id`       int NOT NULL,
    `university_id` int NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `uniq` (`user_id`, `university_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
