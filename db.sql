CREATE SCHEMA `uni_review` DEFAULT CHARACTER SET utf8mb4;

CREATE TABLE `admin`
(
    `id`       bigint      NOT NULL,
    `email`    varchar(45) NOT NULL,
    `username` varchar(45) NOT NULL,
    `password` varchar(45) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `review`
(
    `id`      bigint NOT NULL,
    `user_id` bigint NOT NULL,
    `uni_id`  bigint NOT NULL,
    `content` blob   NOT NULL,
    `rating`  int    NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `university`
(
    `id`           bigint      NOT NULL,
    `name`         varchar(45) NOT NULL,
    `ranking`      varchar(45) NOT NULL,
    `description`  blob        NOT NULL,
    `student_size` int         NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci


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
