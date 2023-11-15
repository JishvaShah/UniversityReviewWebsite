package com.neu.review.controller;

import com.neu.review.controller.UniversityController;
import com.neu.review.mapper.UniversityMapper;
import com.neu.review.req.CreateUniversityReq;
import com.neu.review.req.GetUniversityByIDReq;
import com.neu.review.req.RecommendReq;
import com.neu.review.resp.CreateUniversityResp;
import com.neu.review.resp.GetUniversityByIDResp;
import com.neu.review.resp.RecommendResp;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.sql.DataSource;
import java.sql.SQLException;
import java.util.Base64;

@SpringBootTest
public class UniversityTest {
    @Autowired
    private UniversityMapper universityMapper;

    @Autowired
    private UniversityController universityController;

    @Autowired
    private DataSource dataSource;


    @Test
    void testDataSource() throws SQLException {
        System.out.println(dataSource.getConnection());
    }

    @Test
    void testGetUniversityByID() {
        GetUniversityByIDResp resp = universityController.getByID(new GetUniversityByIDReq(1));
        System.out.println(resp.toString());
    }

    @Test
    void testCreateUniversity() {
        String base64String = "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAW0lEQVR42mP8/wf/DpAAAlKAPla5cvAAAAAElFTkSuQmCC";
        byte[] decodedBytes = Base64.getDecoder().decode(base64String);

        CreateUniversityReq req = new CreateUniversityReq();
        req.setName("Boston University");
        req.setRanking("QS100");
        req.setDescription("this is bU");
        req.setStudentSize(500);
        req.setPhoto(decodedBytes);
        CreateUniversityResp resp = universityController.create(req);
        System.out.println(resp);
    }

    @Test
    void testGet() {
        RecommendReq req = new RecommendReq();
        req.setNum(2);
        RecommendResp resp = universityController.recommend(req);
        System.out.println(resp);
    }
}
