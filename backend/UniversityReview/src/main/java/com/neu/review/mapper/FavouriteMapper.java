package com.neu.review.mapper;

import com.neu.review.pojo.Favourite;
import com.neu.review.pojo.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface FavouriteMapper {

    /**
     * @param id
     * @return
     */
    Favourite getByUserIDUniID(int userID, int uniID);

    /**
     * @param id
     * @return
     */
    List<Favourite> getByUserID(int userID);

    /**
     * @param favourite
     * @return
     */
    void insert(Favourite favourite);

    /**
     * @param id
     */
    void delete(int id);
}
