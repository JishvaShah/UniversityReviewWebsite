package com.neu.review.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@ToString
@AllArgsConstructor
@NoArgsConstructor
@Data
public class User {
    private Integer id;
    private String email;
    private String username;
    private String password;
    private String address;
    private String tel;

    public User(String email, String username, String password, String address, String tel) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.address = address;
        this.tel = tel;
    }
}