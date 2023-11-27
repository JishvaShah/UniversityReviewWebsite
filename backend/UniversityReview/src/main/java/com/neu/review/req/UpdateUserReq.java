package com.neu.review.req;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UpdateUserReq extends BaseReq {
    private Integer id;
    private String originalPassword;
    private String newPassword;
    private String addr;
    private String tel;
}
