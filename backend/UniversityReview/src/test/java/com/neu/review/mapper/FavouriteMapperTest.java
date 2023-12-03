package com.neu.review.mapper;

import com.neu.review.pojo.Favourite;
import com.neu.review.service.FavouriteService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import java.util.List;

@SpringBootTest
public class FavouriteMapperTest {
    @Autowired
    private FavouriteMapper favouriteMapper;
    private FavouriteService favouriteService;

    @Test
    void testInsert() {
        Favourite favourite = new Favourite(null, 1, 1);
        favouriteMapper.insert(favourite);
        System.out.println("Inserted Favourite: " + favouriteMapper.getByUserID(1));
    }

    @Test
    void testGetByUserIDUniID() {
        Favourite favourite = new Favourite(null, 2, 2);
        favouriteMapper.insert(favourite);

        System.out.println("Fetched Favourite by UserID and UniID: " + favouriteMapper.getByUserIDUniID(2, 2));
    }

    @Test
    void testGetByUserID() {
        Favourite favourite1 = new Favourite(null, 3, 3);
        Favourite favourite2 = new Favourite(null, 3, 4);
        favouriteMapper.insert(favourite1);
        favouriteMapper.insert(favourite2);


        List<Favourite> favourites = favouriteMapper.getByUserID(3);
        System.out.println("Fetched Favourites by UserID: " + favourites);
    }

    @Test
    void testDelete() {
        Favourite favourite = new Favourite(null, 5, 5);
        favouriteMapper.insert(favourite);
        System.out.println("Inserted Favourite for Deletion: " + favouriteMapper.getByUserID(5));

        favouriteMapper.delete(favourite.getId());
        System.out.println("Deleted Favourite with ID: " + favourite.getId());
    }
}

