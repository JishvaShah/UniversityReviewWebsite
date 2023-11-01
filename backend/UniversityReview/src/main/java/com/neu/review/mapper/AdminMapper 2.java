package com.neu.review.mapper;

import com.neu.review.pojo.Admin;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AdminMapper {
    
    Admin getAdminById(long id);

    void insertAdmin(Admin admin);

    void updateAdmin(Admin admin);

    void deleteAdminById(long id);
}
