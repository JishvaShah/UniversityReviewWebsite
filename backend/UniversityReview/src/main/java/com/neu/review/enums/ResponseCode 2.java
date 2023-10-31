package com.neu.review.enums;

public enum ResponseCode {
    SUCCESS(100, "Success"),
    INTERNAL_ERR(200, "Internal error"),
    DB_ERR(300, "DB error"),
    UNKNOWN_ERR(400, "Unknown error");

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
