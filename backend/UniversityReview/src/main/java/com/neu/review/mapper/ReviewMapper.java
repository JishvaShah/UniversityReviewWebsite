package com.neu.review.mapper;

import com.neu.review.pojo.Review;
import java.util.List;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ReviewMapper {

    Review getReviewById(long id);

    List<Review> getReviewsByUserId(long userId);

    void insertReview(Review review);

    void updateReview(Review review);

    void deleteReviewById(long id);
}