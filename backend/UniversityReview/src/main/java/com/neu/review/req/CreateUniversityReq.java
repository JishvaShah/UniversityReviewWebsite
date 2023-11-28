package com.neu.review.req;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateUniversityReq extends BaseReq {
    private String name;
    private String ranking;
    private Integer studentSize;
    private String description;
    private String photo;
}
