package com.neu.review.mapper;

import com.neu.review.mapper.UniversityMapper;
import com.neu.review.pojo.University;
import com.neu.review.service.UniversityService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import java.util.List;

@SpringBootTest
public class UniversityMapperTest {

    @Autowired
    private UniversityMapper universityMapper;

    @Test
    void testCreate() {
        University university = new University("Create University", "Top 100", 10000, "Test Description", null);
        universityMapper.create(university);

        System.out.println("Created University: " + universityMapper.getByID(university.getId()));
    }

    @Test
    void testGetByID() {
        University university = new University("GetById University", "Top 100", 10000, "Test Description", null);
        universityMapper.create(university);

        University fetchedUniversity = universityMapper.getByID(university.getId());
        System.out.println("Fetched University by ID: " + fetchedUniversity);
    }

    @Test
    void testGet() {
        University university = new University("Get University", "Top 100", 10000, "Test Description", null);
        universityMapper.create(university);

        UniversityService.Condition condition = new UniversityService.Condition();
        condition.setName("Get University");
        List<University> universities = universityMapper.get(condition);
        System.out.println("Fetched Universities with Condition: " + universities);
    }

    @Test
    void testUpdate() {
        University university = new University("Update University", "Top 100", 10000, "Test Description", null);
        universityMapper.create(university);

        university.setPopularity(100);
        universityMapper.update(university);

        University updatedUniversity = universityMapper.getByID(university.getId());
        System.out.println("Updated University: " + updatedUniversity);
    }
}

