package com.neu.review.resp;

import com.neu.review.pojo.Admin;
import com.neu.review.pojo.Favourite;

public class CreateFavouriteResp extends BaseResp<Favourite> {
    public CreateFavouriteResp() {
        super();
    }

    public CreateFavouriteResp(Integer responseCode, String message) {
        super(responseCode, message);
    }
}
