package com.neu.review.service;

import com.neu.review.mapper.UserMapper;
import com.neu.review.pojo.User;
import com.neu.review.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;
import java.util.List;

@SpringBootTest
public class UserServiceTest {

    @Autowired
    private UserService userService;

    @Autowired
    private UserMapper userMapper;

    @Test
    void testCreateAndGetById() {
        User newUser = new User("test@example.com", "testuser", "password123", "123 Test St", "1234567890");
        userService.create(newUser);
        System.out.println("Created User: " + newUser);

        User fetchedUser = userService.getByID(newUser.getId());
        System.out.println("Fetched User by ID: " + fetchedUser);

        userMapper.deleteById(newUser.getId());
    }

    @Test
    void testGetByEmail() {
        User newUser = new User("emailtest@example.com", "emailuser", "password123", "123 Email St", "1234567890");
        userService.create(newUser);

        User fetchedUser = userService.getByEmail("emailtest@example.com");
        System.out.println("Fetched User by Email: " + fetchedUser);

        userMapper.deleteById(newUser.getId());
    }

    @Test
    void testGetByUserName() {
        User newUser = new User("usertest@example.com", "uniqueusername", "password123", "123 User St", "1234567890");
        userService.create(newUser);

        User fetchedUser = userService.getByUserName("uniqueusername");
        System.out.println("Fetched User by Username: " + fetchedUser);

        userMapper.deleteById(newUser.getId());
    }

    @Test
    void testGetByIDs() {
        User user1 = new User("user1@example.com", "user1", "password1", "123 User1 St", "1234567891");
        User user2 = new User("user2@example.com", "user2", "password2", "123 User2 St", "1234567892");
        userService.create(user1);
        userService.create(user2);

        List<User> fetchedUsers = userService.getByIDs(Arrays.asList(user1.getId(), user2.getId()));
        System.out.println("Fetched Users by IDs: " + fetchedUsers);

        userMapper.deleteById(user1.getId());
        userMapper.deleteById(user2.getId());
    }

    @Test
    void testUpdate() {
        User user = new User("update@example.com", "updateuser", "password123", "123 Update St", "1234567890");
        userService.create(user);

        user.setAddress("456 Update St");
        userService.update(user);

        User updatedUser = userService.getByID(user.getId());
        System.out.println("Updated User: " + updatedUser);

        userMapper.deleteById(user.getId());

    }
}

