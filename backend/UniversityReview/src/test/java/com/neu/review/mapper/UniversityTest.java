package com.neu.review.mapper;

import com.neu.review.controller.UniversityController;
import com.neu.review.req.GetUniversityByIDReq;
import com.neu.review.resp.GetUniversityByIDResp;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.sql.DataSource;
import java.sql.SQLException;

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
}
