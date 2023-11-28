package com.neu.review.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@ToString
@AllArgsConstructor
@NoArgsConstructor
@Data
public class University {
    private Integer id;
    private String name;
    private String ranking;
    private Integer studentSize;
    private String description;
    private String photo;
    private Integer popularity;

    public University(String name, String ranking, Integer studentSize, String description, String photo) {
        this.name = name;
        this.ranking = ranking;
        this.studentSize = studentSize;
        this.description = description;
        this.photo = photo;
    }
}

