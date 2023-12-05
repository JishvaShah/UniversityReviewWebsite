package com.neu.review.mapper;

import com.neu.review.mapper.ReviewMapper;
import com.neu.review.pojo.Review;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import java.util.List;

@SpringBootTest
public class ReviewMapperTest {

    @Autowired
    private ReviewMapper reviewMapper;

    @Test
    void testInsert() {
        Review review = new Review(null, 1, 1, "Insert University", 5);
        reviewMapper.insert(review);
        System.out.println("Inserted Review: " + reviewMapper.getByID(review.getId()));
    }

    @Test
    void testGetByID() {
        Review review = new Review(null, 2, 2, "GetByID University", 4);
        reviewMapper.insert(review);
        Review fetchedReview = reviewMapper.getByID(review.getId());
        System.out.println("Fetched Review by ID: " + fetchedReview);
    }

    @Test
    void testGetByUserID() {
        Review review1 = new Review(null, 3, 3, "UserID1 University", 1);
        Review review2 = new Review(null, 3, 4, "UserID2 University", 3);
        reviewMapper.insert(review1);
        reviewMapper.insert(review2);

        List<Review> reviews = reviewMapper.getByUserID(3);
        System.out.println("Fetched Reviews by UserID: " + reviews);
    }

    @Test
    void testGetByUniversityID() {
        Review review1 = new Review(null, 5, 5, "UniID1 University", 1);
        Review review2 = new Review(null, 6, 5, "UniID2 University", 3);
        reviewMapper.insert(review1);
        reviewMapper.insert(review2);

        List<Review> reviews = reviewMapper.getByUniversityID(5);
        System.out.println("Fetched Reviews by University ID: " + reviews);
    }

    @Test
    void testUpdate() {
        Review reviewToUpdate = new Review(null, 7, 7, "Initial University", 3);
        reviewMapper.insert(reviewToUpdate);

        reviewToUpdate.setContent("Updated University");
        reviewToUpdate.setRating(4);
        reviewMapper.update(reviewToUpdate);

        Review updatedReview = reviewMapper.getByID(reviewToUpdate.getId());
        System.out.println("Updated Review: " + updatedReview);
    }

    @Test
    void testDeleteById() {
        Review reviewToDelete = new Review(null, 8, 8, "Delete University", 2);
        reviewMapper.insert(reviewToDelete);

        reviewMapper.deleteById(reviewToDelete.getId());
        System.out.println("Deleted Review with ID: " + reviewToDelete.getId());
    }
}
