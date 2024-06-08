package com.habib97se.dietmonitor.v1.controller;

import com.habib97se.dietmonitor.v1.DTO.User.RegisterRequest;
import com.habib97se.dietmonitor.v1.DTO.User.UpdateRequest;
import com.habib97se.dietmonitor.v1.service.UserService;
import com.habib97se.dietmonitor.v1.DTO.User.LoginRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
     *
     */
    @GetMapping({"/", ""})
    public ResponseEntity<Object> all() {
        return userService.all();
    }

    /**
     * Create a new user
     * @param registerRequest RegisterRequest object containing user data
     * @return User object if created successfully, null otherwise
     */
    @PostMapping({"/register", "/register/"})
    public ResponseEntity<?> createUser(@RequestBody RegisterRequest registerRequest) {
        System.out.println("register user called");
        return userService.save(registerRequest);
    }

    /**
     * Login a user
     * @param loginRequest LoginRequest object containing user email and password
     * @return User object if login successful, null otherwise
     */
    @PostMapping({"/login", "/login/"})
    public ResponseEntity<Object> login(@RequestBody LoginRequest loginRequest) {
        return userService.login(loginRequest);
    }

    @GetMapping({"/logout", "/logout/"})
    public ResponseEntity<?> logout() {
        return ResponseEntity.ok("Logged out");
    }

    @GetMapping("/{userId}/profile")
    public ResponseEntity<Object> getProfile(@PathVariable Long userId) {
        return userService.getProfile(userId);
    }

    /**
     * Update a user
     * @param userId User ID
     * @param updateRequest UpdateRequest object containing user data
     * @return
     */
    @PutMapping({"/{userId}/update", "/{userId}/update/"})
    public ResponseEntity<Object> updateUser(@PathVariable Long userId, @RequestBody UpdateRequest updateRequest) {
        return userService.updateUser(userId, updateRequest);
    }

    /**
     * Delete a user, given the user ID
     * @param userId User ID
     * @return ResponseEntity
     */
    @DeleteMapping({"/{userId}/delete", "/{userId}/delete/"})
    public ResponseEntity<Object> deleteUser(@PathVariable Long userId) {
        return userService.deleteUser(userId);
    }
}
