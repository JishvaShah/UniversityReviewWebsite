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
import java.util.Base64;

@SpringBootTest
public class ReviewTest {
    @Autowired
    private UniversityMapper universityMapper;

    @Autowired
    private ReviewMapper reviewMapper;

    @Autowired
    private UniversityController universityController;

    @Autowired
    private ReviewController reviewController;

    @Autowired
    private DataSource dataSource;

    @Test
    void testDataSource() throws SQLException {
        System.out.println(dataSource.getConnection());
    }

    @Test
    void testCreateReview() {
        CreateReviewReq req = new CreateReviewReq();
        req.setUniID(1);
        req.setUserName("joshua");
        req.setContent("this is a another review");
        req.setRating(3);

        CreateReviewResp resp = reviewController.create(req);
        System.out.println(resp);
    }

    @Test
    void testGetReviewsByUniversityID() {
        GetReviewsByUniversityIDReq req = new GetReviewsByUniversityIDReq();
        req.setUniversityID(1);
        GetReviewsByUniversityIDResp resp = reviewController.getReviewsByUniversityID(req);
        System.out.println(resp);
    }
}
