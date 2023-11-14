package com.neu.review.service;

import com.neu.review.mapper.UniversityMapper;
import com.neu.review.pojo.University;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public University create(University uni) {
        if (uni == null) {
            return null;
        }
        return universityMapper.create(uni);
    }

    public List<University> get(Condition condition) {
        // TODO
        return null;
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
