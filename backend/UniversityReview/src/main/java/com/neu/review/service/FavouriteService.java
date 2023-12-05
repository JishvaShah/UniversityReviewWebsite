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

    public Favourite getByUserIDUniID(Integer userID, Integer uniID) {
        if (userID == null || uniID == null) {
            return null;
        }

        return mapper.getByUserIDUniID(userID, uniID);
    }

    public Favourite create(Favourite favourite) {
        if (favourite == null) {
            return null;
        }
        mapper.insert(favourite);
        return favourite;
    }

    public List<Favourite> getByUserID(Integer userID) {
        if (userID == null) {
            return null;
        }
        return mapper.getByUserID(userID);
    }

    public void delete(Integer id) {
        if (id == null) {
            return;
        }
        mapper.delete(id);
    }
}
