package com.neu.review.resp;

import com.neu.review.pojo.User;

public class UpdateUserResp extends BaseResp<User> {

    public UpdateUserResp() {
        super();
    }

    public UpdateUserResp(Integer responseCode, String message) {
        super(responseCode, message);
    }
}
