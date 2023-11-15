package com.neu.review.resp;

import com.neu.review.pojo.Review;
import com.neu.review.pojo.University;
import lombok.AllArgsConstructor;
import lombok.Setter;

import java.util.List;

public class GetReviewsByUniversityIDResp extends BaseResp<List<GetReviewsByUniversityIDResp.ReviewWrapper>> {
    public GetReviewsByUniversityIDResp() {
        super();
    }

    public GetReviewsByUniversityIDResp(Integer responseCode, String message) {
        super(responseCode, message);
    }

    @Setter
    public static class ReviewWrapper extends Review {
        private String userName;
    }
}
