package com.neu.review.resp;

import com.neu.review.pojo.User;

public class UserLoginResp extends BaseResp<User> {
    public UserLoginResp() {
        super();
    }

    public UserLoginResp(Integer responseCode, String message) {
        super(responseCode, message);
    }
}
