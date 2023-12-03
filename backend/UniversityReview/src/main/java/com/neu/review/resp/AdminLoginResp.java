package com.neu.review.resp;

import com.neu.review.pojo.Admin;

public class AdminLoginResp extends BaseResp<Admin> {
    public AdminLoginResp() {
        super();
    }

    public AdminLoginResp(Integer responseCode, String message) {
        super(responseCode, message);
    }
}
