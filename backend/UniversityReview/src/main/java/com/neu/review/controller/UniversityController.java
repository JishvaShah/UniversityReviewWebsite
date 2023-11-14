package com.neu.review.controller;

import com.neu.review.enums.ResponseCode;
import com.neu.review.pojo.University;
import com.neu.review.req.CreateUniversityReq;
import com.neu.review.req.GetUniversityByIDReq;
import com.neu.review.resp.CreateUniversityResp;
import com.neu.review.resp.GetUniversityByIDResp;
import com.neu.review.service.UniversityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@CrossOrigin(originPatterns = "*", methods = {RequestMethod.GET, RequestMethod.POST}, allowedHeaders = "*", allowCredentials = "true")
public class UniversityController {

    @Autowired
    private UniversityService universityService;

    @PostMapping("/university/getByID")
    public GetUniversityByIDResp getByID(@RequestBody GetUniversityByIDReq req) {
        GetUniversityByIDResp resp = new GetUniversityByIDResp();

        if (req.getId() == null) {
            resp.setResponseCode(ResponseCode.ILLEGAL_REQ.getCode());
            resp.setMessage(ResponseCode.ILLEGAL_REQ.getDescription());
            return resp;
        }
        try {
            University uni = universityService.getByID(req.getId());

            resp.setData(uni);
            resp.setResponseCode(ResponseCode.SUCCESS.getCode());
            resp.setMessage(ResponseCode.SUCCESS.getDescription());
            return resp;
        } catch (Exception e) {
            return new GetUniversityByIDResp(ResponseCode.INTERNAL_ERR.getCode(), ResponseCode.INTERNAL_ERR.getDescription());
        }
    }

    @PostMapping("/university/create")
    public CreateUniversityResp create(@RequestBody CreateUniversityReq req) {
        CreateUniversityResp resp = new CreateUniversityResp();

        if (req.getName() == null || req.getDescription() == null
                || req.getPhoto() == null || req.getRanking() == null || req.getStudentSize() == null) {
            resp.setResponseCode(ResponseCode.ILLEGAL_REQ.getCode());
            resp.setMessage(ResponseCode.ILLEGAL_REQ.getDescription());
            return resp;
        }
        try {
            University uni = new University(req.getName(), req.getRanking(), req.getStudentSize(), req.getDescription(), req.getPhoto());
            uni = universityService.create(uni);

            resp.setData(uni);
            resp.setResponseCode(ResponseCode.SUCCESS.getCode());
            resp.setMessage(ResponseCode.SUCCESS.getDescription());
            return resp;
        } catch (Exception e) {
            return new CreateUniversityResp(ResponseCode.INTERNAL_ERR.getCode(), ResponseCode.INTERNAL_ERR.getDescription());
        }
    }
}
