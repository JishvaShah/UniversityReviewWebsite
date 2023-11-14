package com.neu.review.controller;

import com.neu.review.enums.ResponseCode;
import com.neu.review.pojo.Review;
import com.neu.review.pojo.User;
import com.neu.review.req.CreateReviewReq;
import com.neu.review.req.GetReviewByIDReq;
import com.neu.review.req.GetUserByIDReq;
import com.neu.review.req.UpdateUserReq;
import com.neu.review.resp.CreateReviewResp;
import com.neu.review.resp.GetReviewByIDResp;
import com.neu.review.resp.GetUserByIDResp;
import com.neu.review.resp.UpdateUserResp;
import com.neu.review.service.ReviewService;
import com.neu.review.service.UniversityService;
import com.neu.review.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST}, allowedHeaders = "*", allowCredentials = "true")
public class ReviewController {

    @Autowired
    private UserService userService;

    @Autowired
    private ReviewService reviewService;

    @Autowired
    private UniversityService universityService;

    @PostMapping("/review/getByID")
    public GetReviewByIDResp getByID(@RequestBody GetReviewByIDReq req) {
        if (req.getId() == null) {
            GetReviewByIDResp resp = new GetReviewByIDResp();
            resp.setResponseCode(ResponseCode.SUCCESS.getCode());
            resp.setMessage(ResponseCode.SUCCESS.getDescription());
            return resp;
        }
        try {
            Review review = reviewService.getByID(req.getId());
            GetReviewByIDResp resp = new GetReviewByIDResp();
            resp.setData(review);
            resp.setResponseCode(ResponseCode.SUCCESS.getCode());
            resp.setMessage(ResponseCode.SUCCESS.getDescription());
            return resp;
        } catch (Exception e) {
            return new GetReviewByIDResp(ResponseCode.INTERNAL_ERR.getCode(), ResponseCode.INTERNAL_ERR.getDescription());
        }
    }

    @PostMapping("/review/create")
    public CreateReviewResp create(@RequestBody CreateReviewReq req) {
        if (req.getContent() == null || req.getRating() == null || req.getUniID() == null || req.getUserID() == null) {
            CreateReviewResp resp = new CreateReviewResp();
            resp.setResponseCode(ResponseCode.SUCCESS.getCode());
            resp.setMessage(ResponseCode.SUCCESS.getDescription());
            return resp;
        }
        try {
            if (universityService.getByID(req.getUniID()) == null || userService.getByID(req.getUserID()) == null) {
                return new CreateReviewResp(ResponseCode.BUSINESS_ERR.getCode(), ResponseCode.BUSINESS_ERR.getDescription());
            }
            Review review = new Review();
            review.setContent(req.getContent());
            review.setUniID(req.getUniID());
            review.setUserID(req.getUserID());
            review = reviewService.create(review);
            CreateReviewResp resp = new CreateReviewResp();
            resp.setData(review);
            resp.setResponseCode(ResponseCode.SUCCESS.getCode());
            resp.setMessage(ResponseCode.SUCCESS.getDescription());
            return resp;
        } catch (Exception e) {
            return new CreateReviewResp(ResponseCode.INTERNAL_ERR.getCode(), ResponseCode.INTERNAL_ERR.getDescription());
        }
    }
}
