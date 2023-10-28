package com.neu.review.resp;

import lombok.Data;

@Data
public class BaseResp<T> {
    private String responseCode;
    private String message;
    private T data;
}
