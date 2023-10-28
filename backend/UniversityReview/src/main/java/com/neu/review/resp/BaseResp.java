package com.neu.review.resp;

import lombok.Data;

@Data
public class BaseResp<T> {
    private Integer responseCode;
    private String message;
    private T data;

    public BaseResp() {
    }

    public BaseResp(Integer responseCode, String message) {
        this.responseCode = responseCode;
        this.message = message;
    }
}
