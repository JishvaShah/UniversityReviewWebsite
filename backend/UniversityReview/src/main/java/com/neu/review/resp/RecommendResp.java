package com.neu.review.resp;

import com.neu.review.pojo.University;

import java.util.List;

public class RecommendResp extends BaseResp<List<University>> {
    public RecommendResp() {
        super();
    }

    public RecommendResp(Integer responseCode, String message) {
        super(responseCode, message);
    }
}
