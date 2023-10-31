package com.neu.review.mapper;

import com.neu.review.pojo.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {

    User getUserById(int id);

    void insertUser(User user);

    void updateUser(User user);

    void deleteUserById(int id);
}
