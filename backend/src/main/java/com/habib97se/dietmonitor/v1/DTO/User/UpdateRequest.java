package com.habib97se.dietmonitor.v1.DTO.User;

import java.time.LocalDate;

public class UpdateRequest {
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private LocalDate dateOfBirth;
    private String password;
    private String country;
    private String city;
    private String gender;

    public UpdateRequest() {
    }

    public UpdateRequest(String firstName, String lastName, String email, String phoneNumber, LocalDate dateOfBirth, String password, String country, String city, String gender) {
        this.firstName = firstName.toLowerCase().trim();
        this.lastName = lastName.toLowerCase().trim();
        this.email = email.toLowerCase().trim();
        this.phoneNumber = phoneNumber.toLowerCase().trim();
        this.dateOfBirth = dateOfBirth;
        this.password = password.trim();
        this.country = country.toLowerCase().trim();
        this.city = city.toLowerCase().trim();
        this.gender = gender.toLowerCase().trim();
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    @Override
    public String toString() {
        return "UpdateUserRequest{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", dateOfBirth=" + dateOfBirth +
                ", password='" + password + '\'' +
                ", country='" + country + '\'' +
                ", city='" + city + '\'' +
                ", gender='" + gender
                + '\'';
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        UpdateRequest that = (UpdateRequest) obj;
        return firstName.equals(that.firstName) && lastName.equals(that.lastName) && email.equals(that.email) && phoneNumber.equals(that.phoneNumber) && dateOfBirth.equals(that.dateOfBirth) && password.equals(that.password) && country.equals(that.country) && city.equals(that.city) && gender.equals(that.gender);
    }
}
