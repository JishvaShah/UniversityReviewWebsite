package com.neu.review.mapper;

import com.neu.review.pojo.University;
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
    private DataSource dataSource;


    @Test
    void testDataSource() throws SQLException {
        System.out.println(dataSource.getConnection());
    }

    @Test
    void testGetUniversityByID() {
        University university = universityMapper.getByID(1);
        System.out.println(university);
    }
}
