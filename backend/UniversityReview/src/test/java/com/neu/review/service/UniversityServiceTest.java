package com.neu.review.service;

import com.neu.review.mapper.UniversityMapper;
import com.neu.review.pojo.University;
import com.neu.review.service.UniversityService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class UniversityServiceTest {

    @Autowired
    private UniversityService universityService;

    @Autowired
    private UniversityMapper universityMapper;

    @Test
    void testCreateAndGetByID() {
        University newUniversity = new University("Create University", "Top 100", 10000, "Test Description", null);
        universityService.create(newUniversity);
        System.out.println("Created University: " + newUniversity);

        University fetchedUniversity = universityService.getByID(newUniversity.getId());
        System.out.println("Fetched University by ID: " + fetchedUniversity);
    }

    @Test
    void testGet() {
        University newUniversity = new University("Get University", "Top 50", 5000, "GetTest Description", null);
        universityService.create(newUniversity);

        UniversityService.Condition condition = new UniversityService.Condition("Get", 1);
        List<University> universities = universityService.get(condition);
        System.out.println("Fetched Universities: " + universities);
    }

    @Test
    void testUpdate() {
        University university = new University("Update University", "Top 150", 15000, "UpdateTest Description", null);
        universityService.create(university);

        university.setPopularity(100);
        universityService.update(university);

        University updatedUniversity = universityService.getByID(university.getId());
        System.out.println("Updated University: " + updatedUniversity);
    }
}

