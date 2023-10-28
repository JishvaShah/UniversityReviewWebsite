package com.neu.review.mapper;

import com.example.model.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {

    User getUserById(int id);

    void insertUser(User user);

    void updateUser(User user);

    void deleteUserById(int id);
}
