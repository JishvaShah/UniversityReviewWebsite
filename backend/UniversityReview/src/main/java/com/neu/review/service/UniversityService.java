package com.neu.review.service;

import com.neu.review.mapper.UniversityMapper;
import com.neu.review.pojo.University;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UniversityService {

    @Autowired
    private UniversityMapper universityMapper;

    public University getByID(Integer id) {
        if (id == null) {
            return null;
        }
        return universityMapper.getByID(id);
    }
}
