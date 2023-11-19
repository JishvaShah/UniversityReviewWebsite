package com.neu.review.service;

import com.neu.review.mapper.ReviewMapper;
import com.neu.review.pojo.Review;
import com.neu.review.service.ReviewService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class ReviewServiceTest {

    @Autowired
    private ReviewService reviewService;

    @Autowired
    private ReviewMapper reviewMapper;

    @Test
    void testCreateAndGetByID() {
        Review newReview = new Review(null, 1, 1, "Excellent", 5);
        reviewService.create(newReview);
        System.out.println("Created Review: " + newReview);

        Review fetchedReview = reviewService.getByID(newReview.getId());
        System.out.println("Fetched Review by ID: " + fetchedReview);

        reviewMapper.deleteById(newReview.getId());
    }

    @Test
    void testGetByUserID() {
        Review newReview = new Review(null, 2, 2, "Very Good", 4);
        reviewService.create(newReview);

        List<Review> reviews = reviewService.getByUserID(2);
        System.out.println("Fetched Reviews by UserID: " + reviews);

        reviewMapper.deleteById(newReview.getId());
    }

    @Test
    void testGetByUniversityID() {
        Review newReview = new Review(null, 3, 3, "Good", 3);
        reviewService.create(newReview);

        List<Review> reviews = reviewService.getByUniversityID(3);
        System.out.println("Fetched Reviews by University ID: " + reviews);

        reviewMapper.deleteById(newReview.getId());
    }
}

