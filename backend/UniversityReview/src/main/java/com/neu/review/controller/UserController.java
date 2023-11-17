package com.neu.review.controller;

import com.neu.review.enums.ResponseCode;
import com.neu.review.pojo.User;
import com.neu.review.req.*;
import com.neu.review.resp.*;
import com.neu.review.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

@RestController
@CrossOrigin(originPatterns = "*", methods = {RequestMethod.GET, RequestMethod.POST}, allowedHeaders = "*", allowCredentials = "true")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private HttpSession httpSession;

    @PostMapping("/user/login")
    public UserLoginResp login(@RequestBody UserLoginReq req) {
        UserLoginResp resp = new UserLoginResp();

        if (req.getUsername() == null || req.getPassword() == null) {
            resp.setResponseCode(ResponseCode.ILLEGAL_REQ.getCode());
            resp.setMessage(ResponseCode.ILLEGAL_REQ.getDescription());
            return resp;
        }

        try {
            User user = userService.getByUserName(req.getUsername());
            if (!user.getPassword().equals(req.getPassword())) {
                resp.setResponseCode(ResponseCode.BUSINESS_ERR.getCode());
                resp.setMessage(ResponseCode.BUSINESS_ERR.getDescription());
            } else {
                httpSession.setAttribute(user.getUsername(), user);
                user.setPassword(null);

                resp.setData(user);
                resp.setResponseCode(ResponseCode.SUCCESS.getCode());
                resp.setMessage(ResponseCode.SUCCESS.getDescription());
            }
            return resp;
        } catch (Exception e) {
            return new UserLoginResp(ResponseCode.INTERNAL_ERR.getCode(), ResponseCode.INTERNAL_ERR.getDescription());
        }
    }

    @PostMapping("/user/logout")
    public UserLogoutResp logout(@RequestBody UserLogoutReq req) {
        UserLogoutResp resp = new UserLogoutResp();

        if (req.getUsername() == null) {
            resp.setResponseCode(ResponseCode.ILLEGAL_REQ.getCode());
            resp.setMessage(ResponseCode.ILLEGAL_REQ.getDescription());
            return resp;
        }

        try {
            if (httpSession.getAttribute(req.getUsername()) == null) {
                return new UserLogoutResp(ResponseCode.INTERNAL_ERR.getCode(), ResponseCode.INTERNAL_ERR.getDescription());
            }
            httpSession.removeAttribute(req.getUsername());
            resp.setResponseCode(ResponseCode.SUCCESS.getCode());
            resp.setMessage(ResponseCode.SUCCESS.getDescription());
            return resp;
        } catch (Exception e) {
            return new UserLogoutResp(ResponseCode.INTERNAL_ERR.getCode(), ResponseCode.INTERNAL_ERR.getDescription());
        }
    }

    @PostMapping("/user/getByID")
    public GetUserByIDResp getByID(@RequestBody GetUserByIDReq req) {
        GetUserByIDResp resp = new GetUserByIDResp();

        if (req.getId() == null) {
            resp.setResponseCode(ResponseCode.ILLEGAL_REQ.getCode());
            resp.setMessage(ResponseCode.ILLEGAL_REQ.getDescription());
            return resp;
        }
        try {
            User user = userService.getByID(req.getId());

            resp.setData(user);
            resp.setResponseCode(ResponseCode.SUCCESS.getCode());
            resp.setMessage(ResponseCode.SUCCESS.getDescription());
            return resp;
        } catch (Exception e) {
            return new GetUserByIDResp(ResponseCode.INTERNAL_ERR.getCode(), ResponseCode.INTERNAL_ERR.getDescription());
        }
    }

    @PostMapping("/user/register")
    public CreateUserResp register(@RequestBody CreateUserReq req) {
        CreateUserResp resp = new CreateUserResp();

        if (req.getUsername() == null || req.getEmail() == null
                || req.getAddr() == null || req.getTel() == null || req.getPassword() == null) {
            resp.setResponseCode(ResponseCode.ILLEGAL_REQ.getCode());
            resp.setMessage(ResponseCode.ILLEGAL_REQ.getDescription());
            return resp;
        }
        try {
            if (userService.getByUserName(req.getUsername()) != null) {
                return new CreateUserResp(ResponseCode.BUSINESS_ERR.getCode(), ResponseCode.BUSINESS_ERR.getDescription());
            }
            User user = new User(req.getEmail(), req.getUsername(), req.getPassword(), req.getAddr(), req.getTel());
            user = userService.create(user);
            httpSession.setAttribute(user.getUsername(), user);

            user.setPassword(null);
            resp.setData(user);
            resp.setResponseCode(ResponseCode.SUCCESS.getCode());
            resp.setMessage(ResponseCode.SUCCESS.getDescription());
            return resp;
        } catch (Exception e) {
            return new CreateUserResp(ResponseCode.INTERNAL_ERR.getCode(), ResponseCode.INTERNAL_ERR.getDescription());
        }
    }

    @PostMapping("/user/update")
    public UpdateUserResp update(@RequestBody UpdateUserReq req) {
        UpdateUserResp resp = new UpdateUserResp();

        if (req.getId() == null) {
            resp.setResponseCode(ResponseCode.ILLEGAL_REQ.getCode());
            resp.setMessage(ResponseCode.ILLEGAL_REQ.getDescription());
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
            if (req.getNewPassword() != null) {
                if (!req.getOriginalPassword().equals(user.getPassword())) {
                    resp.setResponseCode(ResponseCode.ILLEGAL_REQ.getCode());
                    resp.setMessage(ResponseCode.ILLEGAL_REQ.getDescription());
                    return resp;
                }
                user.setPassword(req.getNewPassword());
            }
            user = userService.update(user);

            resp.setData(user);
            resp.setResponseCode(ResponseCode.SUCCESS.getCode());
            resp.setMessage(ResponseCode.SUCCESS.getDescription());
            return resp;
        } catch (Exception e) {
            return new UpdateUserResp(ResponseCode.INTERNAL_ERR.getCode(), ResponseCode.INTERNAL_ERR.getDescription());
        }
    }
}
