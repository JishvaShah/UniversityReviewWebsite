package com.neu.review.controller;

import com.neu.review.enums.ResponseCode;
import com.neu.review.pojo.University;
import com.neu.review.req.CreateUniversityReq;
import com.neu.review.req.GetUniversityByIDReq;
import com.neu.review.req.GetUniversityByNameFuzzyReq;
import com.neu.review.req.RecommendReq;
import com.neu.review.resp.CreateUniversityResp;
import com.neu.review.resp.GetUniversityByIDResp;
import com.neu.review.resp.GetUniversityByNameFuzzyResp;
import com.neu.review.resp.RecommendResp;
import com.neu.review.service.UniversityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

// code complete

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

    @PostMapping("/university/getByNameFuzzy")
    public GetUniversityByNameFuzzyResp getByNameFuzzy(@RequestBody GetUniversityByNameFuzzyReq req) {
        GetUniversityByNameFuzzyResp resp = new GetUniversityByNameFuzzyResp();

        if (req.getName() == null || req.getName().trim().equals("")) {
            resp.setResponseCode(ResponseCode.ILLEGAL_REQ.getCode());
            resp.setMessage(ResponseCode.ILLEGAL_REQ.getDescription());
            return resp;
        }
        try {
            List<University> universities = universityService.getByNameFuzzy(req.getName().trim());

            resp.setData(universities);
            resp.setResponseCode(ResponseCode.SUCCESS.getCode());
            resp.setMessage(ResponseCode.SUCCESS.getDescription());
            return resp;
        } catch (Exception e) {
            return new GetUniversityByNameFuzzyResp(ResponseCode.INTERNAL_ERR.getCode(), ResponseCode.INTERNAL_ERR.getDescription());
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

    @PostMapping("/university/recommend")
    public RecommendResp recommend(@RequestBody RecommendReq req) {
        RecommendResp resp = new RecommendResp();
        try {
            int cnt = req.getNum() == null ? 3 : req.getNum();
            List<University> recommendations = new ArrayList<>();
            List<University> universities = universityService.get(new UniversityService.Condition(100));
            if (universities.size() < cnt) {
                recommendations.addAll(universities);
            } else {
                Map<Integer, Boolean> used = new HashMap<>();
                while (recommendations.size() != cnt) {
                    int idx = getRandomInt(0, universities.size() - 1);
                    if (used.containsKey(idx)) {
                        continue;
                    }
                    used.put(idx, true);
                    recommendations.add(universities.get(idx));
                }
            }

            resp.setData(recommendations);
            resp.setResponseCode(ResponseCode.SUCCESS.getCode());
            resp.setMessage(ResponseCode.SUCCESS.getDescription());
            return resp;
        } catch (Exception e) {
            return new RecommendResp(ResponseCode.INTERNAL_ERR.getCode(), ResponseCode.INTERNAL_ERR.getDescription());
        }
    }

    public static int getRandomInt(int lowerBound, int upperBound) {
        // Validate the bounds
        if (lowerBound > upperBound) {
            throw new IllegalArgumentException("Lower bound must be less than or equal to upper bound");
        }

        Random random = new Random();
        // Calculate the range, add 1 to include the upper bound
        int range = upperBound - lowerBound + 1;
        // Generate a random integer within the specified range
        int randomInt = random.nextInt(range) + lowerBound;

        return randomInt;
    }
}
