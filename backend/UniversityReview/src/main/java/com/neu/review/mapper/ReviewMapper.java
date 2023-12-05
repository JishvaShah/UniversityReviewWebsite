package com.neu.review.mapper;

import com.neu.review.pojo.Review;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ReviewMapper {

    Review getByID(long id);

    List<Review> getByUserID(int userId);

    List<Review> getByUniversityID(int universityId);

    void insert(Review review);

    void update(Review review);

    void deleteById(long id);

}