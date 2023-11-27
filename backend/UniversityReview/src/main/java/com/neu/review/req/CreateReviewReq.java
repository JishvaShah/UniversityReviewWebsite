package com.neu.review.req;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateReviewReq extends BaseReq {
    private String userName;
    private Integer uniID;
    private String content;
    private Integer rating;
}
