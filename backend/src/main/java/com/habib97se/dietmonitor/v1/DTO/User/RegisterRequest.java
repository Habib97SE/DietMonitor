package com.habib97se.dietmonitor.v1.DTO.User;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDate;
import java.util.Date;

public class RegisterRequest {
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String password;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate dateOfBirth;
    private String country;
    private String city;
    private String gender;

    public RegisterRequest() {
    }

    public RegisterRequest(String firstName, String lastName, String email, String phoneNumber, String password, LocalDate dateOfBirth, String country, String city, String gender) {
        this.firstName = firstName.toLowerCase().trim();
        this.lastName = lastName.toLowerCase().trim();
        this.email = email.toLowerCase().trim();
        this.phoneNumber = phoneNumber.toLowerCase().trim();
        this.password = password.trim();
        this.dateOfBirth = dateOfBirth;
        this.country = country.toLowerCase().trim();
        this.city = city.toLowerCase().trim();
        this.gender = gender.trim();
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName.trim().toLowerCase();
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName.trim().toLowerCase();
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email.trim().toLowerCase();
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber.trim();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password.trim();
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country.trim().toLowerCase();
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city.trim().toLowerCase();
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender.trim().toLowerCase();
    }

    @Override
    public String toString() {
        return "RegisterRequest{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", password='" + password + '\'' +
                ", dateOfBirth='" + dateOfBirth + '\'' +
                ", country='" + country + '\'' +
                ", city='" + city + '\'' +
                ", gender='" + gender + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        RegisterRequest registerRequest = (RegisterRequest) obj;
        return firstName.equals(registerRequest.firstName) && lastName.equals(registerRequest.lastName) && email.equals(registerRequest.email) && phoneNumber.equals(registerRequest.phoneNumber) && password.equals(registerRequest.password) && dateOfBirth.equals(registerRequest.dateOfBirth) && country.equals(registerRequest.country) && city.equals(registerRequest.city) && gender.equals(registerRequest.gender);
    }
}
