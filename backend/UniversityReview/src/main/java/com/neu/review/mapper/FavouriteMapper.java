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
    Favourite getByID(int id);

    /**
     * @param id
     * @return
     */
    List<Favourite> getByUserID(int id);

    /**
     * @param favourite
     * @return
     */
    Favourite insert(Favourite favourite);

    /**
     * @param id
     */
    void deleteById(int id);
}
