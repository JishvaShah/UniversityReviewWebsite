package com.neu.review.mapper;

import com.neu.review.pojo.University;
import com.neu.review.service.UniversityService;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UniversityMapper {
    /**
     * @param id
     * @return
     */
    University getByID(Integer id);

    /**
     * @param university
     * @return
     */
    University create(University university);

    /**
     * @param university
     * @return
     */
    University update(University university);

    /**
     * @param condition
     * @return
     */
    List<University> get(UniversityService.Condition condition);
}
