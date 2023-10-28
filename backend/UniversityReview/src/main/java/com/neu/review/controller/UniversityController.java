package com.neu.review.controller;

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
        University uni = universityService.getByID(req.getId());
        GetUniversityByIDResp resp = new GetUniversityByIDResp();
        resp.setData(uni);
        return resp;
    }
}
