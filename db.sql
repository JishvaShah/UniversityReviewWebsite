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
    `id`      int  NOT NULL,
    `user_id` int  NOT NULL,
    `uni_id`  int  NOT NULL,
    `content` blob NOT NULL,
    `rating`  int  NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `university`
(
    `id`           int         NOT NULL AUTO_INCREMENT,
    `name`         varchar(45) NOT NULL,
    `ranking`      varchar(45) NOT NULL,
    `description`  varchar(10000)       DEFAULT NULL,
    `student_size` int         NOT NULL,
    `photo`        blob,
    `popularity`   int         NOT NULL DEFAULT '0',
    PRIMARY KEY (`id`),
    UNIQUE KEY `uniq` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
INSERT INTO `university` VALUES (1,'Northeastern University','10000','This is a university.',2323,NULL,0),(2,'Boston University','QS100','this is bU',500,_binary '‰PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0\0\0\0\0\0\0µú7\ê\0\0\0[IDATx\Úcüÿÿ\0R>V¹rð\0\0\0”T\äJ\ä&',0);

CREATE TABLE `user`
(
    `id`       int                                                          NOT NULL,
    `username` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
    `email`    varchar(45)                                                  NOT NULL,
    `password` varchar(45)                                                  NOT NULL,
    `addr`     varchar(256) DEFAULT NULL,
    `tel`      varchar(45)  DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `favourite`
(
    `id`            int NOT NULL,
    `user_id`       int NOT NULL,
    `university_id` int NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
