package com.neu.review.mapper;

import com.neu.review.mapper.UserMapper;
import com.neu.review.pojo.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import java.util.Arrays;
import java.util.List;

@SpringBootTest
public class UserMapperTest {

    @Autowired
    private UserMapper userMapper;

    @Test
    void testInsert() {
        User user = new User("test@example.com", "insertuser", "password123", "123 Test St", "1234567890");
        userMapper.insert(user);
        System.out.println("Inserted User: " + userMapper.getByUserName(user.getUsername()));
    }

    @Test
    void testGetById() {
        User user = new User("getbyid@example.com", "getbyiduser", "password123", "123 GetByID St", "1234567890");
        userMapper.insert(user);

        User fetchedUser = userMapper.getById(user.getId());
        System.out.println("Fetched User by ID: " + fetchedUser);
    }

    @Test
    void testUpdate() {
        User user = new User("update@example.com", "updateuser", "password123", "123 Update St", "1234567890");
        userMapper.insert(user);

        user.setPassword("newpassword");
        user.setAddress("456 Update St");
        userMapper.update(user);

        User updatedUser = userMapper.getById(user.getId());
        System.out.println("Updated User: " + updatedUser);
    }

    @Test
    void testDeleteById() {
        User user = new User("delete@example.com", "deleteuser", "password123", "123 Delete St", "1234567890");
        userMapper.insert(user);

        userMapper.deleteById(user.getId());
        System.out.println("Deleted User with ID: " + user.getId());
    }

    @Test
    void testGetByUserName() {
        User user = new User("username@example.com", "usernameuser", "password123", "123 UserName St", "1234567890");
        userMapper.insert(user);

        User fetchedUser = userMapper.getByUserName(user.getUsername());
        System.out.println("Fetched User by Username: " + fetchedUser);
    }

    @Test
    void testGetByIDs() {
        User user1 = new User("user1@example.com", "user1", "password1", "123 User1 St", "1234567891");
        User user2 = new User("user2@example.com", "user2", "password2", "123 User2 St", "1234567892");
        userMapper.insert(user1);
        userMapper.insert(user2);

        List<User> fetchedUsers = userMapper.getByIDs(Arrays.asList(user1.getId(), user2.getId()));
        System.out.println("Fetched Users by IDs: " + fetchedUsers);
    }
}

