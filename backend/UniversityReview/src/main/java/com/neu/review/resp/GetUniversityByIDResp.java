package com.neu.review.resp;

import com.neu.review.pojo.University;

public class GetUniversityByIDResp extends BaseResp<University> {
    public GetUniversityByIDResp() {
        super();
    }

    public GetUniversityByIDResp(Integer responseCode, String message) {
        super(responseCode, message);
    }
}
