package com.neu.review.resp;

import com.neu.review.pojo.University;

import java.util.List;

public class GetUniversityByNameFuzzyResp extends BaseResp<List<University>> {
    public GetUniversityByNameFuzzyResp() {
        super();
    }

    public GetUniversityByNameFuzzyResp(Integer responseCode, String message) {
        super(responseCode, message);
    }
}
