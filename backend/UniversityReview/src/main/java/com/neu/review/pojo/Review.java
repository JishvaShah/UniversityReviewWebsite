package com.neu.review.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@ToString
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Review {
    private Integer id;
    private Integer user_id;
    private Integer uni_id;
    private String content;
    private Integer rating;
}