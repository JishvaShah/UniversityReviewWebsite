package com.neu.review.resp;

import com.neu.review.pojo.University;
import lombok.Data;

public class CreateUniversityResp extends BaseResp<University> {

    public CreateUniversityResp() {
        super();
    }

    public CreateUniversityResp(Integer responseCode, String message) {
        super(responseCode, message);
    }
}
