package com.neu.review.mapper;

import com.neu.review.pojo.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {

    /**
     * @param id
     * @return
     */
    User getById(int id);

    /**
     * @param user
     * @return
     */
    User insert(User user);

    /**
     * @param user
     * @return
     */
    User update(User user);

    /**
     * @param id
     */
    void deleteById(int id);

    /**
     * @param email
     * @return
     */
    User getByEmail(String email);

    /**
     * @param userName
     * @return
     */
    User getByUserName(String userName);
}
