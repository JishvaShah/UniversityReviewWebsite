package com.neu.review.service;

import com.neu.review.mapper.AdminMapper;
import com.neu.review.pojo.Admin;
import com.neu.review.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Deprecated
public class AdminService {

    @Autowired
    private AdminMapper mapper;

    public Admin getByID(Integer id) {
        if (id == null) {
            return null;
        }
        return mapper.getById(id);
    }

    public Admin getByEmail(String email) {
        if (email == null) {
            return null;
        }
        return mapper.getByEmail(email);
    }
}
