package com.neu.review.resp;

import com.neu.review.pojo.Review;
import com.neu.review.pojo.User;

public class CreateReviewResp extends BaseResp<Review> {

    public CreateReviewResp() {
        super();
    }

    public CreateReviewResp(Integer responseCode, String message) {
        super(responseCode, message);
    }
}
