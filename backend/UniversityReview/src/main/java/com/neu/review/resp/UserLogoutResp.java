package com.neu.review.resp;

import com.neu.review.pojo.Admin;
import com.neu.review.pojo.User;

public class UserLogoutResp extends BaseResp<User> {
    public UserLogoutResp() {
        super();
    }

    public UserLogoutResp(Integer responseCode, String message) {
        super(responseCode, message);
    }
}
