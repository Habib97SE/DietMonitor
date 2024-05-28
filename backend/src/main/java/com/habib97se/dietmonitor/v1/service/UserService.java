package com.habib97se.dietmonitor.v1.service;
import com.habib97se.dietmonitor.v1.entity.User;
import com.habib97se.dietmonitor.v1.repository.UserRepository;
import jakarta.validation.Valid;
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

    public User save(User user) {
        // validate user data

        if (!Validation.isEmailValid(user.getEmail())) {
            return null;
        }
        if (!Validation.isNameValid(user.getFirstName()) ||
            !Validation.isNameValid(user.getLastName())) {
            return null;
        }
        if (!Validation.isPhoneNumberValid(user.getPhoneNumber())) {
            return null;
        }
        if (!Validation.isPasswordValid(user.getHashedPassword())) {
            return null;
        }
        try {
            user.setSalt(Encryption.generateSalt(user.getEmail()));
            user.setHashedPassword(Encryption.hashPassword(user.getHashedPassword(), user.getSalt()));
        } catch (Exception e) {
            return null;
        }
        return userRepository.save(user);
    }

    public List<User> all() {
        List<User> users = userRepository.findAll();
        for (User user : users) {
            user.setSalt(null);
            user.setHashedPassword(null);

        }
        return users;
    }

    public User login(String email, String password) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            return null;
        }
        // check if password is correct, else return null
        String hashedPassword = Encryption.hashPassword(password, user.getSalt());
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