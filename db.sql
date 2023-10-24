CREATE SCHEMA `uni_review` DEFAULT CHARACTER SET utf8mb4;

CREATE TABLE `uni_review`.`user`
(
    `id`       INT         NOT NULL,
    `username` VARCHAR(45) CHARACTER SET 'utf8mb4' NOT NULL,
    `email`    VARCHAR(45) NOT NULL,
    `password` VARCHAR(45) NOT NULL,
    `addr`     VARCHAR(256) NULL,
    `tel`      VARCHAR(45) NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `uni_review`.`admin`
(
    `id`       BIGINT(20) NOT NULL,
    `email`    VARCHAR(45) NOT NULL,
    `username` VARCHAR(45) NOT NULL,
    `password` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `uni_review`.`university`
(
    `id`           BIGINT(20) NOT NULL,
    `name`         VARCHAR(45) NOT NULL,
    `ranking`      VARCHAR(45) NOT NULL,
    `description`  BLOB        NOT NULL,
    `student_size` INT         NOT NULL,
    PRIMARY KEY (`id`)
);


CREATE TABLE `uni_review`.`review`
(
    `id`      BIGINT(20) NOT NULL,
    `user_id` BIGINT(20) NOT NULL,
    `uni_id`  BIGINT(20) NOT NULL,
    `content` BLOB NOT NULL,
    `rating`  INT  NOT NULL,
    PRIMARY KEY (`id`)
);
