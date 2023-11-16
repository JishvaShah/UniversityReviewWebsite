package com.neu.review.service;

import com.neu.review.mapper.UserMapper;
import com.neu.review.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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

    public List<User> getByIDs(List<Integer> ids) {
        if (ids == null || ids.size() == 0) {
            return null;
        }
        return userMapper.getByIDs(ids);
    }

    public User update(User user) {
        if (user == null) {
            return null;
        }
        userMapper.update(user);
        return user;
    }
}
