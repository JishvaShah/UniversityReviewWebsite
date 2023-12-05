package com.neu.review.resp;

import com.neu.review.pojo.Favourite;

public class RemoveFavouriteResp extends BaseResp<Favourite> {
    public RemoveFavouriteResp() {
        super();
    }

    public RemoveFavouriteResp(Integer responseCode, String message) {
        super(responseCode, message);
    }
}
