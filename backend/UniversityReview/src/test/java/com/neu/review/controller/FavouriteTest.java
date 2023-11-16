package com.neu.review.controller;

import com.neu.review.mapper.ReviewMapper;
import com.neu.review.mapper.UniversityMapper;
import com.neu.review.req.*;
import com.neu.review.resp.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.sql.DataSource;
import java.sql.SQLException;

@SpringBootTest
public class FavouriteTest {
    @Autowired
    private UniversityMapper universityMapper;

    @Autowired
    private ReviewMapper reviewMapper;

    @Autowired
    private UniversityController universityController;

    @Autowired
    private ReviewController reviewController;

    @Autowired
    private FavouriteController favouriteController;

    @Test
    void testLike() {
        CreateFavouriteReq req = new CreateFavouriteReq();
        req.setUniID(1);
        req.setUserID(1);
        CreateFavouriteResp resp = favouriteController.like(req);
        System.out.println(resp);
    }

    @Test
    void testUnLike() {
        RemoveFavouriteReq req = new RemoveFavouriteReq();
        req.setUniID(1);
        req.setUserID(1);
        RemoveFavouriteResp resp = favouriteController.unlike(req);
        System.out.println(resp);
    }

    @Test
    void testGetLikeByUserID() {
        GetLikeByUserIDReq req = new GetLikeByUserIDReq();
        req.setUserID(1);
        GetLikeByUserIDResp resp = favouriteController.getByUserID(req);
        System.out.println(resp);
    }
}
