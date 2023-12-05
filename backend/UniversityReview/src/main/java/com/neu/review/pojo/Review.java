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
    private Integer userID;
    private Integer uniID;
    private String content;
    private Integer rating;
}