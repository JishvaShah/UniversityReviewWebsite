package com.neu.review.service;

import com.neu.review.mapper.ReviewMapper;
import com.neu.review.mapper.UniversityMapper;
import com.neu.review.pojo.Review;
import com.neu.review.pojo.University;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewMapper reviewMapper;

    public Review getByID(Integer id) {
        if (id == null) {
            return null;
        }
        return reviewMapper.getByID(id);
    }

    public Review create(Review review) {
        if (review == null) {
            return null;
        }
        reviewMapper.insert(review);
        return review;
    }

    public List<Review> getByUserID(Integer id) {
        if (id == null) {
            return null;
        }
        return reviewMapper.getByUserID(id);
    }

    public List<Review> getByUniversityID(Integer universityID) {
        if (universityID == null) {
            return null;
        }
        return reviewMapper.getByUniversityID(universityID);
    }
}
