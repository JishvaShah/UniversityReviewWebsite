package com.neu.review.controller;

import com.neu.review.enums.ResponseCode;
import com.neu.review.pojo.Favourite;
import com.neu.review.pojo.University;
import com.neu.review.pojo.User;
import com.neu.review.req.CreateFavouriteReq;
import com.neu.review.req.GetLikeByUserIDReq;
import com.neu.review.req.RemoveFavouriteReq;
import com.neu.review.resp.CreateFavouriteResp;
import com.neu.review.resp.GetLikeByUserIDResp;
import com.neu.review.resp.RemoveFavouriteResp;
import com.neu.review.service.FavouriteService;
import com.neu.review.service.UniversityService;
import com.neu.review.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(originPatterns = "*", methods = {RequestMethod.GET, RequestMethod.POST}, allowedHeaders = "*", allowCredentials = "true")
public class FavouriteController {

    @Autowired
    private FavouriteService favouriteService;

    @Autowired
    private UserService userService;

    @Autowired
    private UniversityService universityService;

    @PostMapping("/favourite/like")
    public CreateFavouriteResp like(@RequestBody CreateFavouriteReq req) {
        CreateFavouriteResp resp = new CreateFavouriteResp();

        if (req.getUserID() == null || req.getUniID() == null) {
            resp.setResponseCode(ResponseCode.ILLEGAL_REQ.getCode());
            resp.setMessage(ResponseCode.ILLEGAL_REQ.getDescription());
            return resp;
        }

        try {
            User user = userService.getByID(req.getUserID());
            University university = universityService.getByID(req.getUniID());
            if (user == null || university == null) {
                resp.setResponseCode(ResponseCode.BUSINESS_ERR.getCode());
                resp.setMessage(ResponseCode.BUSINESS_ERR.getDescription());
                return resp;
            }

            // TODO: put in a transaction
            Favourite favourite = new Favourite();
            favourite.setUserID(req.getUserID());
            favourite.setUniID(req.getUniID());
            favourite = favouriteService.create(favourite);

            university.setPopularity(university.getPopularity() + 1);
            universityService.update(university);

            resp.setResponseCode(ResponseCode.SUCCESS.getCode());
            resp.setMessage(ResponseCode.SUCCESS.getDescription());
            resp.setData(favourite);
            return resp;
        } catch (Exception e) {

            return new CreateFavouriteResp(ResponseCode.INTERNAL_ERR.getCode(), ResponseCode.INTERNAL_ERR.getDescription());
        }
    }

    @PostMapping("/favourite/unlike")
    public RemoveFavouriteResp unlike(@RequestBody RemoveFavouriteReq req) {
        RemoveFavouriteResp resp = new RemoveFavouriteResp();

        if (req.getUserID() == null || req.getUniID() == null) {
            resp.setResponseCode(ResponseCode.ILLEGAL_REQ.getCode());
            resp.setMessage(ResponseCode.ILLEGAL_REQ.getDescription());
            return resp;
        }

        try {
            // TODO: transaction
            Favourite favourite = favouriteService.getByUserIDUniID(req.getUserID(), req.getUniID());
            University university = universityService.getByID(favourite.getUniID());
            university.setPopularity(university.getPopularity() - 1);
            universityService.update(university);

            favouriteService.delete(favourite.getId());
            resp.setResponseCode(ResponseCode.SUCCESS.getCode());
            resp.setMessage(ResponseCode.SUCCESS.getDescription());
            return resp;
        } catch (Exception e) {
            return new RemoveFavouriteResp(ResponseCode.INTERNAL_ERR.getCode(), ResponseCode.INTERNAL_ERR.getDescription());
        }
    }

    @PostMapping("/favourite/get_by_user_id")
    public GetLikeByUserIDResp getByUserID(@RequestBody GetLikeByUserIDReq req) {
        GetLikeByUserIDResp resp = new GetLikeByUserIDResp();

        if (req.getUserID() == null) {
            resp.setResponseCode(ResponseCode.ILLEGAL_REQ.getCode());
            resp.setMessage(ResponseCode.ILLEGAL_REQ.getDescription());
            return resp;
        }

        try {
            List<Favourite> favourites = favouriteService.getByUserID(req.getUserID());

            resp.setData(favourites);
            resp.setResponseCode(ResponseCode.SUCCESS.getCode());
            resp.setMessage(ResponseCode.SUCCESS.getDescription());
            return resp;
        } catch (Exception e) {
            return new GetLikeByUserIDResp(ResponseCode.INTERNAL_ERR.getCode(), ResponseCode.INTERNAL_ERR.getDescription());
        }
    }
}
