package com.neu.review.resp;

import com.neu.review.pojo.User;

public class GetUserByIDResp extends BaseResp<User> {
    public GetUserByIDResp() {
        super();
    }

    public GetUserByIDResp(Integer responseCode, String message) {
        super(responseCode, message);
    }
}
