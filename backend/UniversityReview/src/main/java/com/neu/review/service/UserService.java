package com.neu.review.service;

import com.neu.review.mapper.UserMapper;
import com.neu.review.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserMapper userMapper;

    public User create(User user) {
        if (user == null) {
            return null;
        }
        return userMapper.insert(user);
    }

    public User getByID(Integer id) {
        if (id == null) {
            return null;
        }
        return userMapper.getById(id);
    }

    public User getByEmail(String email) {
        if (email == null) {
            return null;
        }
        return userMapper.getByEmail(email);
    }

    public User getByUserName(String userName) {
        if (userName == null) {
            return null;
        }
        return userMapper.getByUserName(userName);
    }

    public User update(User user) {
        if (user == null) {
            return null;
        }
        return userMapper.update(user);
    }
}
