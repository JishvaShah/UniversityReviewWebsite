package com.neu.review.service;

import com.neu.review.mapper.FavouriteMapper;
import com.neu.review.pojo.Favourite;
import com.neu.review.service.FavouriteService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class FavouriteServiceTest {

    @Autowired
    private FavouriteService favouriteService;

    @Autowired
    private FavouriteMapper favouriteMapper;

    @Test
    void testCreateAndDelete() {
        Favourite newFavourite = new Favourite(null, 1, 1);
        favouriteService.create(newFavourite);
        System.out.println("Created Favourite: " + newFavourite);

        favouriteService.delete(newFavourite.getId());
        System.out.println("Deleted Favourite with ID: " + newFavourite.getId());
    }

    @Test
    void testGetByUserIDUniID() {
        Favourite newFavourite = new Favourite(null, 2, 2);
        favouriteService.create(newFavourite);

        Favourite favourite = favouriteService.getByUserIDUniID(2, 2);
        System.out.println("Fetched Favourite by UserID and UniID: " + favourite);

        favouriteService.delete(newFavourite.getId());
    }

    @Test
    void testGetByUserID() {
        Favourite newFavourite = new Favourite(null, 3, 3);
        favouriteService.create(newFavourite);

        List<Favourite> favourites = favouriteService.getByUserID(3);
        System.out.println("Fetched Favourites by UserID: " + favourites);

        favouriteService.delete(newFavourite.getId());
    }
}
