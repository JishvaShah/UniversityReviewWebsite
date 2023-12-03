package com.neu.review.resp;

import com.neu.review.pojo.Favourite;
import com.neu.review.pojo.Review;
import lombok.Setter;

import java.util.List;

public class GetLikeByUserIDResp extends BaseResp<List<Favourite>> {
    public GetLikeByUserIDResp() {
        super();
    }

    public GetLikeByUserIDResp(Integer responseCode, String message) {
        super(responseCode, message);
    }

}
