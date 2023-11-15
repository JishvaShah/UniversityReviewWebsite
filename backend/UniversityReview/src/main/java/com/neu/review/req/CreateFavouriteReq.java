package com.neu.review.req;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateFavouriteReq extends BaseReq {
    private Integer userID;
    private Integer uniID;
}
