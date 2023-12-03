package com.neu.review.controller;

import com.neu.review.enums.ResponseCode;
import com.neu.review.pojo.Review;
import com.neu.review.pojo.University;
import com.neu.review.pojo.User;
import com.neu.review.req.*;
import com.neu.review.resp.*;
import com.neu.review.service.ReviewService;
import com.neu.review.service.UniversityService;
import com.neu.review.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(originPatterns = "*", methods = {RequestMethod.GET, RequestMethod.POST}, allowedHeaders = "*", allowCredentials = "true")
public class ReviewController {

    @Autowired
    private UserService userService;

    @Autowired
    private ReviewService reviewService;

    @Autowired
    private UniversityService universityService;

    @PostMapping("/review/getByID")
    public GetReviewByIDResp getByID(@RequestBody GetReviewByIDReq req) {
        GetReviewByIDResp resp = new GetReviewByIDResp();

        if (req.getId() == null) {
            resp.setResponseCode(ResponseCode.ILLEGAL_REQ.getCode());
            resp.setMessage(ResponseCode.ILLEGAL_REQ.getDescription());
            return resp;
        }
        try {
            Review review = reviewService.getByID(req.getId());
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
        CreateReviewResp resp = new CreateReviewResp();

        if (req.getContent() == null || req.getRating() == null || req.getUniID() == null || req.getUserName() == null) {
            resp.setResponseCode(ResponseCode.ILLEGAL_REQ.getCode());
            resp.setMessage(ResponseCode.ILLEGAL_REQ.getDescription());
            return resp;
        }
        try {
            User user = userService.getByUserName(req.getUserName());
            University uni = universityService.getByID(req.getUniID());
            if (user == null || uni == null) {
                return new CreateReviewResp(ResponseCode.BUSINESS_ERR.getCode(), ResponseCode.BUSINESS_ERR.getDescription());
            }
            Review review = new Review();
            review.setContent(req.getContent());
            review.setUniID(req.getUniID());
            review.setUserID(user.getId());
            review.setRating(req.getRating());
            review = reviewService.create(review);

            resp.setData(review);
            resp.setResponseCode(ResponseCode.SUCCESS.getCode());
            resp.setMessage(ResponseCode.SUCCESS.getDescription());
            return resp;
        } catch (Exception e) {
            return new CreateReviewResp(ResponseCode.INTERNAL_ERR.getCode(), ResponseCode.INTERNAL_ERR.getDescription());
        }
    }

    @PostMapping("/review/get_reviews_by_university_id")
    public GetReviewsByUniversityIDResp getReviewsByUniversityID(@RequestBody GetReviewsByUniversityIDReq req) {
        GetReviewsByUniversityIDResp resp = new GetReviewsByUniversityIDResp();

        if (req.getUniversityID() == null) {
            resp.setResponseCode(ResponseCode.ILLEGAL_REQ.getCode());
            resp.setMessage(ResponseCode.ILLEGAL_REQ.getDescription());
            return resp;
        }

        try {
            List<Review> reviews = reviewService.getByUniversityID(req.getUniversityID());
            List<Integer> ids = new ArrayList<>();
            for (Review v : reviews) {
                ids.add(v.getUserID());
            }
            List<User> users = userService.getByIDs(ids);
            Map<Integer, User> userMap = new HashMap<>();
            for (User v : users) {
                userMap.put(v.getId(), v);
            }
            List<GetReviewsByUniversityIDResp.ReviewWrapper> reviewWrappers = new ArrayList<>();
            for (Review v : reviews) {
                GetReviewsByUniversityIDResp.ReviewWrapper wrapper = new GetReviewsByUniversityIDResp.ReviewWrapper();
                wrapper.setUserID(v.getUserID());
                wrapper.setUniID(v.getUniID());
                wrapper.setContent(v.getContent());
                wrapper.setRating(v.getRating());
                wrapper.setUsername(userMap.get(v.getUserID()).getUsername());
                reviewWrappers.add(wrapper);
            }

            resp.setData(reviewWrappers);
            resp.setResponseCode(ResponseCode.SUCCESS.getCode());
            resp.setMessage(ResponseCode.SUCCESS.getDescription());
            return resp;
        } catch (Exception e) {
            return new GetReviewsByUniversityIDResp(ResponseCode.INTERNAL_ERR.getCode(), ResponseCode.INTERNAL_ERR.getDescription());
        }
    }
}
