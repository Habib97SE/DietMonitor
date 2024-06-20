package com.habib97se.dietmonitor.v1.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.habib97se.dietmonitor.utils.LocalDateDeserializer;
import com.habib97se.dietmonitor.utils.LocalDateSerializer;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.PastOrPresent;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;


@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 50)
    @NotBlank(message = "First name is required")
    private String firstName;

    @Column(nullable = false, length = 50)
    @NotBlank(message = "Last name is required")
    private String lastName;

    @Column(nullable = false, length = 100, unique = true)
    @Email(message = "Invalid email")
    @NotBlank(message = "Email is required")
    private String email;

    @Column(nullable = false, length = 15)
    @NotBlank(message = "Phone number is required")
    private String phoneNumber;

    @Column(nullable = false)
    @NotBlank(message = "Country is required")
    private String country;

    @Column(nullable = false)
    @NotBlank(message = "City is required")
    private String city;

    @Column(nullable = false)
    @NotBlank(message = "Gender is required")
    private String gender;

    @Column(nullable = false)
    @NotBlank(message = "Password is required")
    private String hashedPassword;

    @Column(nullable = false)
    private Boolean isActive = true;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Meal> meals;

    @Column(nullable = false)
    @PastOrPresent(message = "Invalid date of birth")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate dateOfBirth;


    @Column(nullable = false)
    @PastOrPresent(message = "Invalid date")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private Date createdAt;

    @Column(nullable = true)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private Date updatedAt;

    public User() {
    }

    public User(String firstName, String lastName, String email, String phoneNumber, String hashedPassword, LocalDate dateOfBirth, String country, String city, String gender) {
        this.firstName = firstName.toLowerCase().trim();
        this.lastName = lastName.toLowerCase().trim();
        this.email = email.toLowerCase().trim();
        this.phoneNumber = phoneNumber;
        this.hashedPassword = hashedPassword.trim();
        this.dateOfBirth = dateOfBirth;
        this.country = country.toLowerCase().trim();
        this.city = city.toLowerCase().trim();
        this.gender = gender.toLowerCase().trim();
    }

    @PrePersist
    protected void onCreate() {
        this.createdAt = new Date();
    }

    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = new Date();
    }

    // Getters and setters omitted for brevity



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName.toLowerCase().trim();
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
        this.email = email.toLowerCase().trim();
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getHashedPassword() {
        return hashedPassword;
    }

    public void setHashedPassword(String hashedPassword) {
        this.hashedPassword = hashedPassword.trim();
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
        return this.gender;
    }

    public void setGender (String gender) {
        this.gender = gender.trim().toLowerCase();
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    public Boolean getIsActive() {
        return isActive;
    }

    public void setIsActive(Boolean isActive) {
        this.isActive = isActive;
    }


    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", hashedPassword='" + hashedPassword + '\'' +
                ", dateOfBirth=" + dateOfBirth +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        User user = (User) o;

        if (id != null ? !id.equals(user.id) : user.id != null) return false;
        if (firstName != null ? !firstName.equals(user.firstName) : user.firstName != null) return false;
        if (lastName != null ? !lastName.equals(user.lastName) : user.lastName != null) return false;
        if (email != null ? !email.equals(user.email) : user.email != null) return false;
        if (phoneNumber != null ? !phoneNumber.equals(user.phoneNumber) : user.phoneNumber != null) return false;
        if (hashedPassword != null ? !hashedPassword.equals(user.hashedPassword) : user.hashedPassword != null) return false;

        return dateOfBirth != null ? dateOfBirth.equals(user.dateOfBirth) : user.dateOfBirth == null;
    }

}

