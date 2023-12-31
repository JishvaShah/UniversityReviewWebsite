package com.neu.review.service;

import com.neu.review.mapper.UniversityMapper;
import com.neu.review.pojo.University;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

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

    public List<University> getByNameFuzzy(String name) {
        if (name == null) {
            return Collections.emptyList();
        }
        return universityMapper.getByNameFuzzy(name);
    }

    public University create(University uni) {
        if (uni == null) {
            return null;
        }
        universityMapper.create(uni);
        return uni;
    }

    public List<University> get(Condition condition) {
        if (condition == null) {
            return null;
        }
        return universityMapper.get(condition);
    }

    public University update(University university) {
        if (university == null || university.getId() == null) {
            return null;
        }
        universityMapper.update(university);
        return university;
    }

    @ToString
    @AllArgsConstructor
    @NoArgsConstructor
    @Data
    public static class Condition {
        private String name;
        private Integer cnt;

        public Condition(int cnt) {
            this.cnt = cnt;
        }
    }
}
