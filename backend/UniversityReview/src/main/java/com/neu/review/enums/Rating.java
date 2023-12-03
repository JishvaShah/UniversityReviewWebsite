package com.neu.review.enums;

public enum Rating {
    ONE(1, "One Star"),
    TWO(2, "Two Star"),
    THREE(3, "Three Star"),
    FOUR(4, "Four Star"),
    FIVE(5, "Five Star");

    private final int code;
    private final String description;

    Rating(int code, String reasonPhrase) {
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
