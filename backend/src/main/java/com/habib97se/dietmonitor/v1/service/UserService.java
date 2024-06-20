package com.habib97se.dietmonitor.v1.service;
import com.habib97se.dietmonitor.v1.DTO.User.LoginRequest;
import com.habib97se.dietmonitor.v1.DTO.User.RegisterRequest;
import com.habib97se.dietmonitor.v1.DTO.User.UpdateRequest;
import com.habib97se.dietmonitor.v1.ResponseHandler;
import com.habib97se.dietmonitor.v1.entity.User;
import com.habib97se.dietmonitor.v1.repository.UserRepository;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.habib97se.dietmonitor.utils.Encryption;
import com.habib97se.dietmonitor.utils.Validation;
import java.util.Map;

import java.util.List;
import java.util.Objects;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService (UserRepository userRepository) {
        super();
        this.userRepository = userRepository;
    }

    /**
     * Save a new user to the database
     * @param registerRequest RegisterRequest object containing user data
     * @return User object if saved successfully, null otherwise
     */
    public ResponseEntity<Object> save(RegisterRequest registerRequest) {
        System.out.println(registerRequest);
        Map<Boolean, String> validationResult = Validation.registrationFieldsValid(registerRequest);

        if (validationResult.containsKey(false)) {
            return ResponseHandler.generateResponse(validationResult.get(false), HttpStatus.OK, null, "true");
        }


        User user = new User();
        user.setFirstName(registerRequest.getFirstName());
        user.setLastName(registerRequest.getLastName());
        user.setEmail(registerRequest.getEmail());
        user.setPhoneNumber(registerRequest.getPhoneNumber());
        user.setGender(registerRequest.getGender());
        user.setCountry(registerRequest.getCountry());
        user.setCity(registerRequest.getCity());
        user.setDateOfBirth(registerRequest.getDateOfBirth());
        user.setHashedPassword(Encryption.hashPassword(registerRequest.getPassword()));
        user.setIsActive(true);

        User existingUser = userRepository.findByEmail(user.getEmail());
        if (existingUser != null) {
            return ResponseHandler.generateResponse("Email already exists", HttpStatus.OK, null, "true");
        }
        try {
            userRepository.save(user);
            return ResponseHandler.generateResponse("User created successfully", HttpStatus.CREATED, user, "false");
        } catch (DataIntegrityViolationException e) {
            return ResponseHandler.generateResponse("Something went wrong", HttpStatus.OK, null, "true");
        }
    }

    /**
     * Retrieve a list of all users in the database
     * @return
     */
    public ResponseEntity<Object> all() {
        List<User> users = userRepository.findAll();
        return ResponseHandler.generateResponse("All users", HttpStatus.OK, users, "false");
    }

    /**
     * Login a user
     * @param loginRequest LoginRequest object containing email and password
     * @return User object if login successful, null otherwise
     */
    public ResponseEntity<Object> login(LoginRequest loginRequest) {
        Map<Boolean, String> validationResult = Validation.isLoginRequestValid(loginRequest);

        if (validationResult.containsKey(false)) {
            System.out.println(validationResult.get(false));
            return ResponseHandler.generateResponse( "Invalid email or password" , HttpStatus.OK, null, "true");
        }

        User user = userRepository.findByEmail(loginRequest.getEmail());
        if (user == null) {
            return ResponseHandler.generateResponse("Invalid email or password", HttpStatus.OK, null, "true");
        }

        boolean isPasswordValid = Encryption.checkPassword(loginRequest.getPassword(), user.getHashedPassword());
        if (!isPasswordValid) {
            return ResponseHandler.generateResponse("Invalid email or password", HttpStatus.OK, null, "true");
        }

        return ResponseHandler.generateResponse("Login successful", HttpStatus.OK, user, "false");
    }

    public User getUserById(Long userId) {
        return userRepository.findById(userId).orElse(null);
    }

    /**
     * Update user information
     * @param userId User ID
     * @param updateRequest UpdateRequest object containing user data
     * @return User object if updated successfully, null otherwise
     */
    public ResponseEntity<Object> updateUser(Long userId, UpdateRequest updateRequest) {
        User user = userRepository.findById(userId).orElse(null);
        // Check if user exists, return bad request if not
        if (user == null) {
            return ResponseHandler.generateResponse("User not found", HttpStatus.OK, null, "true");
        }

        Map<Boolean, String> validationResult = Validation.isUpdateRequestValid(updateRequest);

        // Check if any field is invalid, return bad request if so
        if (validationResult.containsKey(false)) {
            return ResponseHandler.generateResponse(validationResult.get(false), HttpStatus.OK, null, "true");
        }

        // check if email is already existed.
        User existingUser = userRepository.findByEmail(updateRequest.getEmail());
        if (!Objects.equals(existingUser.getId(), user.getId())) {
            return ResponseHandler.generateResponse("Email already exists", HttpStatus.OK, null, "true");
        }

        // add try catch block to handle exceptions and return internal server error
        try {
        // Update user information
        if (updateRequest.getPassword() != null || !updateRequest.getPassword().isEmpty()) {
            user.setHashedPassword(Encryption.hashPassword(updateRequest.getPassword()));
        }

        user.setFirstName(updateRequest.getFirstName());
        user.setLastName(updateRequest.getLastName());
        user.setEmail(updateRequest.getEmail());
        user.setPhoneNumber(updateRequest.getPhoneNumber());
        user.setCountry(updateRequest.getCountry());
        user.setCity(updateRequest.getCity());
        user.setDateOfBirth(updateRequest.getDateOfBirth());
        user.setGender(updateRequest.getGender());


            userRepository.save(user);
            return ResponseHandler.generateResponse("User updated successfully", HttpStatus.OK, user, "false");
        } catch (DataIntegrityViolationException e) {
            return ResponseHandler.generateResponse("Something went wrong", HttpStatus.OK, null, "true");
        }

    }

    /**
     * Retrieve a user's profile
     * @param id User ID
     * @return User object if found, null otherwise
     */
    public ResponseEntity<Object> getProfile(Long id) {
        User user = userRepository.findById(id).orElse(null);
        assert user != null;
        if (!user.getIsActive()) {
            return ResponseHandler.generateResponse("User not found", HttpStatus.OK, null, "true");
        }
        return ResponseHandler.generateResponse("User found", HttpStatus.OK, user, "false");
    }

    /**
     * Delete a user, and set user's isActive to false
     * @param userId User ID to delete
     * @return ResponseEntity
     */
    public ResponseEntity<Object> deleteUser(Long userId) {
        User user = userRepository.findById(userId).orElse(null);
        if (user == null) {
            return ResponseHandler.generateResponse("User not found", HttpStatus.OK, null, "true");
        }

        if (!user.getIsActive()) {
            return ResponseHandler.generateResponse("User not found", HttpStatus.OK, null, "true");
        }

        try {
            user.setIsActive(false);
            userRepository.save(user);
            return ResponseHandler.generateResponse("User deleted successfully", HttpStatus.OK, user, "false");
        } catch (Exception e) {
            return ResponseHandler.generateResponse("Something went wrong", HttpStatus.OK, null, "true");
        }
    }

}