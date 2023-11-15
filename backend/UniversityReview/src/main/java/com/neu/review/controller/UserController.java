package com.neu.review.controller;

import com.neu.review.enums.ResponseCode;
import com.neu.review.pojo.Admin;
import com.neu.review.pojo.University;
import com.neu.review.pojo.User;
import com.neu.review.req.*;
import com.neu.review.resp.*;
import com.neu.review.service.UniversityService;
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

        if (req.getEmail() == null || req.getPassword() == null) {
            resp.setResponseCode(ResponseCode.ILLEGAL_REQ.getCode());
            resp.setMessage(ResponseCode.ILLEGAL_REQ.getDescription());
            return resp;
        }

        try {
            User user = userService.getByEmail(req.getEmail());
            if (!user.getPassword().equals(req.getPassword())) {
                resp.setResponseCode(ResponseCode.BUSINESS_ERR.getCode());
                resp.setMessage(ResponseCode.BUSINESS_ERR.getDescription());
            } else {
                // put login in session
                httpSession.setAttribute("loggedInUser", user);
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

        if (req.getEmail() == null) {
            resp.setResponseCode(ResponseCode.ILLEGAL_REQ.getCode());
            resp.setMessage(ResponseCode.ILLEGAL_REQ.getDescription());
            return resp;
        }

        try {
            // logout
            httpSession.removeAttribute("loggedInUser");
            httpSession.invalidate();
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

    @PostMapping("/user/create")
    public CreateUserResp create(@RequestBody CreateUserReq req) {
        CreateUserResp resp = new CreateUserResp();

        if (req.getUserName() == null || req.getEmail() == null
                || req.getAddr() == null || req.getTel() == null || req.getPassword() == null) {
            resp.setResponseCode(ResponseCode.ILLEGAL_REQ.getCode());
            resp.setMessage(ResponseCode.ILLEGAL_REQ.getDescription());
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
            if (req.getPassword() != null) {
                user.setPassword(req.getPassword());
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
