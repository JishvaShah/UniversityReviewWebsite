package com.neu.review.req;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateUserReq extends BaseReq {
    private String userName;
    private String email;
    private String password;
    private String addr;
    private String tel;
}
