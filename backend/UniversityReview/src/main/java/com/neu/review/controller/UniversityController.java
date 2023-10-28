package com.neu.review.controller;

import com.neu.review.enums.ResponseCode;
import com.neu.review.pojo.University;
import com.neu.review.req.GetUniversityByIDReq;
import com.neu.review.resp.GetUniversityByIDResp;
import com.neu.review.service.UniversityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UniversityController {

    @Autowired
    private UniversityService universityService;

    @PostMapping("/university/getByID")
    public GetUniversityByIDResp getByID(@RequestBody GetUniversityByIDReq req) {
        try {
            University uni = universityService.getByID(req.getId());
            GetUniversityByIDResp resp = new GetUniversityByIDResp();
            resp.setData(uni);
            resp.setResponseCode(ResponseCode.SUCCESS.getCode());
            resp.setMessage(ResponseCode.SUCCESS.getDescription());
            return resp;
        } catch (Exception e) {
            return new GetUniversityByIDResp(ResponseCode.INTERNAL_ERR.getCode(), ResponseCode.INTERNAL_ERR.getDescription());
        }
    }
}
