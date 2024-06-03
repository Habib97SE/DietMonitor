package com.habib97se.dietmonitor.v1.service;
import com.habib97se.dietmonitor.v1.DTO.LoginRequest;
import com.habib97se.dietmonitor.v1.DTO.RegisterRequest;
import com.habib97se.dietmonitor.v1.entity.User;
import com.habib97se.dietmonitor.v1.repository.UserRepository;
import jakarta.validation.Valid;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import com.habib97se.dietmonitor.utils.Encryption;
import com.habib97se.dietmonitor.utils.Validation;

import java.util.List;

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
    public User save(RegisterRequest registerRequest) {

        User user = new User();
        user.setFirstName(registerRequest.getFirstName());
        user.setLastName(registerRequest.getLastName());
        user.setEmail(registerRequest.getEmail());
        user.setPhoneNumber(registerRequest.getPhoneNumber());
        user.setGender(registerRequest.getGender());
        user.setCountry(registerRequest.getCountry());
        user.setCity(registerRequest.getCity());
        user.setDateOfBirth(registerRequest.getDateOfBirth());
        user.setSalt(Encryption.generateSalt(user.getEmail()));
        user.setHashedPassword(Encryption.hashPassword(registerRequest.getPassword(), user.getSalt()));
        try {
            return userRepository.save(user);
        } catch (DataIntegrityViolationException e) {
            System.out.println("User already exists");
            return null;
        }
    }

    public List<User> all() {
        List<User> users = userRepository.findAll();
        for (User user : users) {
            user.setSalt(null);
            user.setHashedPassword(null);

        }
        System.out.println("Users: " + users);
        return users;
    }

    public User login(LoginRequest loginRequest) {
        User user = userRepository.findByEmail(loginRequest.getEmail());
        if (user == null) {
            return null;
        }
        // check if password is correct, else return null
        String hashedPassword = Encryption.hashPassword(loginRequest.getPassword(), user.getSalt());
        if (hashedPassword.equals(user.getHashedPassword())) {
            return user;
        }
        return null;
    }

    public User getUserById(Long userId) {
        return userRepository.findById(userId).orElse(null);
    }

    public User updateUser(Long userId, User user) {
        User existingUser = userRepository.findById(userId).orElse(null);
        if (existingUser == null) {
            return null;
        }
        existingUser.setEmail(user.getEmail());
        existingUser.setPhoneNumber(user.getPhoneNumber());
        existingUser.setFirstName(user.getFirstName());
        existingUser.setLastName(user.getLastName());
        existingUser.setDateOfBirth(user.getDateOfBirth());
        return userRepository.save(existingUser);
    }

    public User deleteUser(Long userId) {
        User user = userRepository.findById(userId).orElse(null);
        if (user == null) {
            return null;
        }
        userRepository.delete(user);
        return user;
    }

}