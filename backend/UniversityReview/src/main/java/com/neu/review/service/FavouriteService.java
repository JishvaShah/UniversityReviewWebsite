package com.neu.review.service;

import com.neu.review.mapper.FavouriteMapper;
import com.neu.review.mapper.UserMapper;
import com.neu.review.pojo.Favourite;
import com.neu.review.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavouriteService {

    @Autowired
    private FavouriteMapper mapper;

    public Favourite getByID(Integer id) {
        if (id == null) {
            return null;
        }

        return mapper.getByID(id);
    }

    public Favourite create(Favourite favourite) {
        if (favourite == null) {
            return null;
        }
        return mapper.insert(favourite);
    }

    public List<Favourite> getByUserID(Integer userID) {
        if (userID == null) {
            return null;
        }
        return mapper.getByUserID(userID);
    }

    public void deleteByID(Integer id) {
        if (id == null) {
            return;
        }
        mapper.deleteById(id);
    }
}
