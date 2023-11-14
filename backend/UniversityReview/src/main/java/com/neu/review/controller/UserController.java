package com.neu.review.controller;

import com.neu.review.enums.ResponseCode;
import com.neu.review.pojo.University;
import com.neu.review.pojo.User;
import com.neu.review.req.*;
import com.neu.review.resp.*;
import com.neu.review.service.UniversityService;
import com.neu.review.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST}, allowedHeaders = "*", allowCredentials = "true")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/user/getByID")
    public GetUserByIDResp getByID(@RequestBody GetUserByIDReq req) {
        if (req.getId() == null) {
            GetUserByIDResp resp = new GetUserByIDResp();
            resp.setResponseCode(ResponseCode.SUCCESS.getCode());
            resp.setMessage(ResponseCode.SUCCESS.getDescription());
            return resp;
        }
        try {
            User user = userService.getByID(req.getId());
            GetUserByIDResp resp = new GetUserByIDResp();
            resp.setData(user);
            resp.setResponseCode(ResponseCode.SUCCESS.getCode());
            resp.setMessage(ResponseCode.SUCCESS.getDescription());
            return resp;
        } catch (Exception e) {
            return new GetUserByIDResp(ResponseCode.INTERNAL_ERR.getCode(), ResponseCode.INTERNAL_ERR.getDescription());
        }
    }

    @PostMapping("/user/create")
    public CreateUserResp create(@RequestBody CreateUserReq req) {
        if (req.getUserName() == null || req.getEmail() == null
                || req.getAddr() == null || req.getTel() == null || req.getPassword() == null) {
            CreateUserResp resp = new CreateUserResp();
            resp.setResponseCode(ResponseCode.SUCCESS.getCode());
            resp.setMessage(ResponseCode.SUCCESS.getDescription());
            return resp;
        }
        try {
            if (userService.getByEmail(req.getEmail()) != null) {
                return new CreateUserResp(ResponseCode.BUSINESS_ERR.getCode(), ResponseCode.BUSINESS_ERR.getDescription());
            }
            if (userService.getByUserName(req.getUserName()) != null) {
                return new CreateUserResp(ResponseCode.BUSINESS_ERR.getCode(), ResponseCode.BUSINESS_ERR.getDescription());
            }
            User user = new User(req.getEmail(), req.getUserName(), req.getPassword(), req.getAddr(), req.getTel());
            user = userService.create(user);
            CreateUserResp resp = new CreateUserResp();
            resp.setData(user);
            resp.setResponseCode(ResponseCode.SUCCESS.getCode());
            resp.setMessage(ResponseCode.SUCCESS.getDescription());
            return resp;
        } catch (Exception e) {
            return new CreateUserResp(ResponseCode.INTERNAL_ERR.getCode(), ResponseCode.INTERNAL_ERR.getDescription());
        }
    }

    @PostMapping("/user/update")
    public UpdateUserResp create(@RequestBody UpdateUserReq req) {
        if (req.getId() == null) {
            UpdateUserResp resp = new UpdateUserResp();
            resp.setResponseCode(ResponseCode.SUCCESS.getCode());
            resp.setMessage(ResponseCode.SUCCESS.getDescription());
            return resp;
        }
        try {
            User user = userService.getByID(req.getId());
            if (user == null) {
                return new UpdateUserResp(ResponseCode.BUSINESS_ERR.getCode(), ResponseCode.BUSINESS_ERR.getDescription());
            }
            if (req.getAddr() != null) {
                user.setAddress(req.getAddr());
            }
            if (req.getTel() != null) {
                user.setTel(req.getTel());
            }
            if (req.getPassword() != null) {
                user.setPassword(req.getPassword());
            }
            user = userService.update(user);
            UpdateUserResp resp = new UpdateUserResp();
            resp.setData(user);
            resp.setResponseCode(ResponseCode.SUCCESS.getCode());
            resp.setMessage(ResponseCode.SUCCESS.getDescription());
            return resp;
        } catch (Exception e) {
            return new UpdateUserResp(ResponseCode.INTERNAL_ERR.getCode(), ResponseCode.INTERNAL_ERR.getDescription());
        }
    }
}
