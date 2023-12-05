package com.neu.review.resp;

import com.neu.review.pojo.Review;
import com.neu.review.pojo.User;

public class GetReviewByIDResp extends BaseResp<Review> {
    public GetReviewByIDResp() {
        super();
    }

    public GetReviewByIDResp(Integer responseCode, String message) {
        super(responseCode, message);
    }
}
