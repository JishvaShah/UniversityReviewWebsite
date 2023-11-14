package com.neu.review.controller;

import com.neu.review.enums.ResponseCode;
import com.neu.review.pojo.Admin;
import com.neu.review.pojo.User;
import com.neu.review.req.*;
import com.neu.review.resp.*;
import com.neu.review.service.AdminService;
import com.neu.review.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(originPatterns = "*", methods = {RequestMethod.GET, RequestMethod.POST}, allowedHeaders = "*", allowCredentials = "true")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping("/admin/login")
    public AdminLoginResp login(@RequestBody AdminLoginReq req) {
        AdminLoginResp resp = new AdminLoginResp();

        if (req.getEmail() == null || req.getPassword() == null) {
            resp.setResponseCode(ResponseCode.ILLEGAL_REQ.getCode());
            resp.setMessage(ResponseCode.ILLEGAL_REQ.getDescription());
            return resp;
        }

        try {
            Admin admin = adminService.getByEmail(req.getEmail());
            if (!admin.getPassword().equals(req.getPassword())) {
                resp.setResponseCode(ResponseCode.BUSINESS_ERR.getCode());
                resp.setMessage(ResponseCode.BUSINESS_ERR.getDescription());
            } else {
                // TODO: put login in session
                resp.setData(admin);
                resp.setResponseCode(ResponseCode.SUCCESS.getCode());
                resp.setMessage(ResponseCode.SUCCESS.getDescription());
            }
            return resp;
        } catch (Exception e) {
            return new AdminLoginResp(ResponseCode.INTERNAL_ERR.getCode(), ResponseCode.INTERNAL_ERR.getDescription());
        }
    }

    @PostMapping("/admin/logout")
    public AdminLogoutResp logout(@RequestBody AdminLogoutReq req) {
        AdminLogoutResp resp = new AdminLogoutResp();

        if (req.getEmail() == null) {
            resp.setResponseCode(ResponseCode.ILLEGAL_REQ.getCode());
            resp.setMessage(ResponseCode.ILLEGAL_REQ.getDescription());
            return resp;
        }

        try {
            // TODO: logout
            return resp;
        } catch (Exception e) {
            return new AdminLogoutResp(ResponseCode.INTERNAL_ERR.getCode(), ResponseCode.INTERNAL_ERR.getDescription());
        }
    }

}
