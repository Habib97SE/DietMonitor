package com.habib97se.dietmonitor;

import com.habib97se.dietmonitor.utils.Validation;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class ValidationTest {

    @Test
    public void testValidEmail() {
        // Valid emails
        assertTrue(Validation.isEmailValid("habib@gmail.com"));
        assertTrue(Validation.isEmailValid("user.name+tag+sorting@example.com"));
        assertTrue(Validation.isEmailValid("user_name@example.co.uk"));
        assertTrue(Validation.isEmailValid("user-name@example.org"));
        assertTrue(Validation.isEmailValid("user.name@sub.example.com"));

        // Invalid emails
        assertFalse(Validation.isEmailValid("habib.gmail.com")); // Missing @
        assertFalse(Validation.isEmailValid("habib@gmail")); // Missing TLD
        assertFalse(Validation.isEmailValid("habib@gmail.")); // Missing TLD after dot
        assertFalse(Validation.isEmailValid("habib@gmailcom")); // Missing dot before TLD
        assertFalse(Validation.isEmailValid("habib@.gmail.com")); // Leading dot in domain
        assertFalse(Validation.isEmailValid("habib@gmail..com")); // Double dot in domain
        assertFalse(Validation.isEmailValid("habib@gmail.443")); // Numeric TLD
        assertFalse(Validation.isEmailValid("habib@gmail.c")); // Single character TLD
        assertFalse(Validation.isEmailValid("@gmail.com")); // Missing local part
        assertFalse(Validation.isEmailValid("habib@ gmail.com")); // Space in domain
        assertFalse(Validation.isEmailValid("habib@.com")); // Domain starts with dot
        assertFalse(Validation.isEmailValid("habib@com.")); // Domain ends with dot
        assertFalse(Validation.isEmailValid("habib@com")); // No dot in domain
        assertFalse(Validation.isEmailValid("habib@gmail@com")); // @ symbol in local part
        assertFalse(Validation.isEmailValid("habib@gmail..com")); // Double dot in domain
        //assertFalse(Validation.isEmailValid("habib.@gmail.com")); // Dot at the end of local part
        assertFalse(Validation.isEmailValid("habib@gmail.com.")); // Dot at the end of domain part
        assertFalse(Validation.isEmailValid("habib@-gmail.com")); // Dash at the start of domain part
        assertFalse(Validation.isEmailValid("habib@gmail-.com")); // Dash at the end of domain part
        assertFalse(Validation.isEmailValid("habib@gma+il.com")); // Plus in domain part
    }

    @Test
    public void testPhoneNumber() {
        assertTrue(Validation.isPhoneNumberValid("+46701234567"));
        assertTrue(Validation.isPhoneNumberValid("+46 70 123 45 67"));
        assertTrue(Validation.isPhoneNumberValid("+46 70-123 45 67"));
        assertTrue(Validation.isPhoneNumberValid("0761296363"));
        assertTrue(Validation.isPhoneNumberValid("070-123 45 67"));
        assertTrue(Validation.isPhoneNumberValid("070 123 45 67"));
        assertTrue(Validation.isPhoneNumberValid("070-1234567"));

        assertFalse(Validation.isPhoneNumberValid("070123456"));
        assertFalse(Validation.isPhoneNumberValid("070123456789"));
    }

    @Test
    public void testName() {
        assertTrue(Validation.isNameValid("Habib"));
        assertTrue(Validation.isNameValid("Habib Rahman"));
        assertTrue(Validation.isNameValid("Habib Rahman Khan"));
        assertTrue(Validation.isNameValid("Habib Rahman Khan Jr."));
        assertTrue(Validation.isNameValid("Habib-Rahman"));
        assertTrue(Validation.isNameValid("Habib Rahman's"));

        assertFalse(Validation.isNameValid("Habib Rahman 123"));
        assertFalse(Validation.isNameValid("Habib Rahman Khan Jr. 123"));
    }

    @Test
    public void testGender(){
        assertTrue(Validation.isGenderValid(" male "));
        assertTrue(Validation.isGenderValid("female "));
        assertTrue(Validation.isGenderValid("other"));
        assertTrue(Validation.isGenderValid("prefer not to say"));
        assertTrue(Validation.isGenderValid("MALE"));
        assertTrue(Validation.isGenderValid("FEMALE"));
        assertTrue(Validation.isGenderValid("OTHER"));
        assertTrue(Validation.isGenderValid("PREFER NOT TO SAY"));
        assertTrue(Validation.isGenderValid("OtHeR"));

        assertFalse(Validation.isGenderValid("MAL1"));
    }

    @Test
    public void testDate() {
        assertTrue(Validation.isDateValid(" 2021-01-01"));
        assertTrue(Validation.isDateValid("2021-12-31 "));

        assertFalse(Validation.isDateValid("2021-1-1"));
        assertFalse(Validation.isDateValid("2021-01-1"));
        assertFalse(Validation.isDateValid("2021-1-01"));
        assertFalse(Validation.isDateValid("2021-01-32"));
        assertFalse(Validation.isDateValid("2021-13-01"));
        assertFalse(Validation.isDateValid("2021-00-01"));
        assertFalse(Validation.isDateValid("2021-01-00"));
        assertFalse(Validation.isDateValid("2021-01-01-"));
        assertFalse(Validation.isDateValid("2021-01-01-01"));
        assertFalse(Validation.isDateValid("20210101"));
        assertFalse(Validation.isDateValid("2021-01-01T00:00:00"));
        assertFalse(Validation.isDateValid("2021-01-01T00:00:00Z"));
        assertFalse(Validation.isDateValid("2021-01-01T00:00:00+00:00"));
        assertFalse(Validation.isDateValid("2021-01-01T00:00:00+0000#"));
    }



    @Test
    public void testCountry () {
        assertTrue(Validation.isCountryValid("sweden"));
        assertTrue(Validation.isCountryValid("Sweden"));
        assertTrue(Validation.isCountryValid("SWEDEN"));
        assertTrue(Validation.isCountryValid("sWeDeN"));
        assertTrue(Validation.isCountryValid("sweden"));
        assertTrue(Validation.isCountryValid(" sweden "));

        assertFalse(Validation.isCountryValid("swe"));
        assertFalse(Validation.isCountryValid("swe1"));
        assertFalse(Validation.isCountryValid("swe den"));
        assertFalse(Validation.isCountryValid("#sweden"));
    }

    @Test
    public void testCity() {
        assertTrue(Validation.isCityValid("stockholm"));
        assertTrue(Validation.isCityValid("Stockholm"));
        assertTrue(Validation.isCityValid("STOCKHOLM"));
        assertTrue(Validation.isCityValid("sToCkHoLm"));
        assertTrue(Validation.isCityValid("stockholm "));
        assertTrue(Validation.isCityValid(" stockholm"));
        assertTrue(Validation.isCityValid(" stockholm "));
        assertTrue(Validation.isCityValid("Stock-holm"));

        assertFalse(Validation.isCityValid("stockholm1"));
        assertFalse(Validation.isCityValid("stockholm 1"));
        assertFalse(Validation.isCityValid("stockholm#"));
        assertFalse(Validation.isCityValid("stockholm#1"));

    }

    @Test
    public void testPassword() {
        // password should be at least 8 characters long
        assertTrue(Validation.isPasswordValid("password"));
        assertTrue(Validation.isPasswordValid("password1"));
        assertTrue(Validation.isPasswordValid("password12"));
        assertTrue(Validation.isPasswordValid("password "));

        assertFalse(Validation.isPasswordValid("pass"));
        assertFalse(Validation.isPasswordValid("passwor"));
        assertFalse(Validation.isPasswordValid(" pass12 "));
    }
}
