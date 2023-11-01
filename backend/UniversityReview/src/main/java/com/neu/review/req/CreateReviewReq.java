package com.neu.review.req;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateReviewReq extends BaseReq {
    private Integer userID;
    private Integer uniID;
    private String content;
    private Integer rating;
}
