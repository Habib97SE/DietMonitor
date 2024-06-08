package com.habib97se.dietmonitor;

import org.junit.jupiter.api.Test;
import com.habib97se.dietmonitor.v1.ResponseHandler;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.time.LocalDate;

public class ResponseHandlerTest {

    @Test
    public void testGenerateResponse() {
        String message = "Test message";
        Object responseObj = new Object();
        HttpStatus status = HttpStatus.OK;

        ResponseEntity<Object> response = ResponseHandler.generateResponse(message, status, responseObj);

        System.out.println(response.toString());

        assert response.getStatusCode().equals(status);

        message = "Email already exists";
        status = HttpStatus.BAD_REQUEST;
        response = ResponseHandler.generateResponse(message, status, responseObj);

        System.out.println(response.getStatusCode());

        assert response.getStatusCode().equals(status);

    }
}
