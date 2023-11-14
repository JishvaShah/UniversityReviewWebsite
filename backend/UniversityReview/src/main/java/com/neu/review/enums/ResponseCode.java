package com.neu.review.enums;

public enum ResponseCode {
    SUCCESS(100, "Success"),
    INTERNAL_ERR(200, "Internal error"),
    DB_ERR(300, "DB error"),
    BUSINESS_ERR(400, "Business error"),
    ILLEGAL_REQ(500, "Illegal Request"),
    UNKNOWN_ERR(1000, "Unknown error");

    private final int code;
    private final String description;

    ResponseCode(int code, String reasonPhrase) {
        this.code = code;
        this.description = reasonPhrase;
    }

    public int getCode() {
        return code;
    }

    public String getDescription() {
        return description;
    }
}
