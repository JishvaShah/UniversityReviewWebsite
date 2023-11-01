package com.neu.review.mapper;

import com.neu.review.pojo.Review;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ReviewMapper {

    Review getByID(long id);

    List<Review> getByUserId(int userId);

    Review insert(Review review);

    void update(Review review);

    void deleteByID(long id);
}