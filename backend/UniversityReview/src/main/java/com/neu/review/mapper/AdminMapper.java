package com.neu.review.mapper;

import com.neu.review.pojo.Admin;
import com.neu.review.pojo.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
@Deprecated
public interface AdminMapper {

    /**
     * @param id
     * @return
     */
    Admin getById(long id);

    /**
     * @param email
     * @return
     */
    Admin getByEmail(String email);
}
