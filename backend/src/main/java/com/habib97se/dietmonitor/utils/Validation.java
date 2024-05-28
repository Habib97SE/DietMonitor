package com.habib97se.dietmonitor.utils;

public class Validation {

    public static boolean isEmailValid(String email) {
        return email.matches("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
    }

    public static boolean isPasswordValid(String password) {
        // TODO: implement password validation
        // Criteria: 8 characters long, at least one uppercase letter, one lowercase letter, one number, and one special character
        // for development purposes, we will only check if the password is 8 characters long
        return password.length() >= 8;
    }

    public static boolean isPhoneNumberValid(String phoneNumber) {
        return phoneNumber.matches("^\\d{11}$");
    }

    public static boolean isNameValid(String name) {
        return name.matches("^[a-zA-Z]+(\\s[a-zA-Z]+)*$");
    }


}
