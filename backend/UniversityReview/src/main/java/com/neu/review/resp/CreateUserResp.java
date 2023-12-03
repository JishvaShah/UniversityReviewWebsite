package com.neu.review.resp;

import com.neu.review.pojo.User;

public class CreateUserResp extends BaseResp<User> {

    public CreateUserResp() {
        super();
    }

    public CreateUserResp(Integer responseCode, String message) {
        super(responseCode, message);
    }
}
