package com.neu.review.resp;

import com.neu.review.pojo.Admin;

public class AdminLogoutResp extends BaseResp<Admin> {
    public AdminLogoutResp() {
        super();
    }

    public AdminLogoutResp(Integer responseCode, String message) {
        super(responseCode, message);
    }
}
