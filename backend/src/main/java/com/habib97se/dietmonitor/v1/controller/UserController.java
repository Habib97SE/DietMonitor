package com.habib97se.dietmonitor.v1.controller;

import com.habib97se.dietmonitor.v1.DTO.RegisterRequest;
import com.habib97se.dietmonitor.v1.service.UserService;
import com.habib97se.dietmonitor.v1.DTO.LoginRequest;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.habib97se.dietmonitor.v1.entity.User;


import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {


    private final UserService userService;


    @Autowired
    public UserController(UserService userService) {
        super();
        this.userService = userService;
    }

    /**
     * Retrieve a list of all users in the database
     * @return List of all users
     */
    @GetMapping({"/", ""})
    public List<User> all() {
        List<User> users = userService.all();
        for (User user : users) {
            user.setSalt(null);
            user.setHashedPassword(null);
        }
        return users;
    }

    /**
     * Create a new user
     * @param registerRequest RegisterRequest object containing user data
     * @return User object if created successfully, null otherwise
     */
    @PostMapping({"/register", "/register/"})
    public ResponseEntity<?> createUser(@RequestBody RegisterRequest registerRequest) {
        System.out.println(registerRequest);
        User user = userService.save(registerRequest);
        if (user != null) {
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.badRequest().body("Invalid user data");
    }

    @PostMapping
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        if (loginRequest.getPassword().isEmpty() || loginRequest.getEmail().isEmpty()) {
            return ResponseEntity.badRequest().body("Email and password are required");
        }
        User user = userService.login(loginRequest);
        if (user != null) {
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.badRequest().body("Invalid email or password");
    }

    @GetMapping({"/logout", "/logout/"})
    public ResponseEntity<?> logout() {
        return ResponseEntity.ok("Logged out");
    }

    @GetMapping("/profile")
    public ResponseEntity<?> profile(@RequestBody Long userId) {
        if (userId == null) {
            return ResponseEntity.badRequest().body("User ID is required");
        }
        if (userId <= 0) {
            return ResponseEntity.badRequest().body("Invalid user ID");
        }
        User user = userService.getUserById(userId);
        if (user != null) {
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.badRequest().body("User not found");
    }

    @PutMapping({"/{userId}", "/{userId}/"})
    public ResponseEntity<?> updateUser(@PathVariable Long userId, @Valid @RequestBody User user) {
        User updatedUser = userService.updateUser(userId, user);
        if (updatedUser != null) {
            return ResponseEntity.ok(updatedUser);
        }
        return ResponseEntity.badRequest().body("User not found");
    }

    @DeleteMapping({"/{userId}", "/{userId}/"})
    public ResponseEntity<?> deleteUser(@PathVariable Long userId) {
        User deletedUser = userService.deleteUser(userId);
        if (deletedUser != null) {
            return ResponseEntity.ok(deletedUser);
        }
        return ResponseEntity.badRequest().body("User not found");
    }

    @GetMapping({"/{userId}", "/{userId}/"})
    public ResponseEntity<?> getUserById(@PathVariable Long userId) {
        User user = userService.getUserById(userId);
        if (user != null) {
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.badRequest().body("User not found");
    }


}
