package com.neu.review.controller;

import com.neu.review.mapper.ReviewMapper;
import com.neu.review.mapper.UniversityMapper;
import com.neu.review.mapper.UserMapper;
import com.neu.review.req.*;
import com.neu.review.resp.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.sql.DataSource;
import java.sql.SQLException;

@SpringBootTest
public class UserTest {
    @Autowired
    private UniversityMapper universityMapper;

    @Autowired
    private ReviewMapper reviewMapper;

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private UniversityController universityController;

    @Autowired
    private ReviewController reviewController;

    @Autowired
    private UserController userController;

    @Test
    void testGetByID() {
        GetUserByIDReq req = new GetUserByIDReq();
        req.setId(1);

        GetUserByIDResp resp = userController.getByID(req);
        System.out.println(resp);
    }

    @Test
    void testUpdateUser() {
        UpdateUserReq req = new UpdateUserReq();
        req.setId(1);
        req.setTel("408000000");
        req.setAddr("white house _ 1");

        UpdateUserResp resp = userController.update(req);
        System.out.println(resp);
    }
}
