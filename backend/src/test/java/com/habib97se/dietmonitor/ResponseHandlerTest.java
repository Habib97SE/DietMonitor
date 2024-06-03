package com.habib97se.dietmonitor;

import com.habib97se.dietmonitor.v1.DTO.RegisterRequest;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;
import java.util.Date;

public class CheckCreatingUserTest {

    @Test
    public void testCreateUser() {
        // Create a new user
        LocalDate dateOfBirth = LocalDate.of(1997, 1, 1);
        RegisterRequest registerRequest = new RegisterRequest("John", "Doe", "habib@gmail.com", "1234567890", "password", dateOfBirth, "USA", "New York", "male");
        System.out.println(registerRequest);
        // send request to server
        // check if user is created successfully

    }
}
