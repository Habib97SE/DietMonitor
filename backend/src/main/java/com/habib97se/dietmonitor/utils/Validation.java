
package com.habib97se.dietmonitor.utils;

import com.habib97se.dietmonitor.v1.DTO.User.LoginRequest;
import com.habib97se.dietmonitor.v1.DTO.User.RegisterRequest;
import com.habib97se.dietmonitor.v1.DTO.User.UpdateRequest;
import com.google.i18n.phonenumbers.NumberParseException;
import com.google.i18n.phonenumbers.PhoneNumberUtil;
import com.google.i18n.phonenumbers.Phonenumber;

import java.time.LocalDate;
import java.time.format.DateTimeParseException;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class Validation {

    private static final String REGION_CODE = "SE";
    private static final Set<String> COUNTRIES = new HashSet<>(Arrays.asList(
            "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia",
            "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
            "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
            "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
            "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the",
            "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
            "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
            "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada",
            "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia",
            "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
            "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia",
            "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali",
            "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia",
            "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand",
            "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
            "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
            "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
            "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
            "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan",
            "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
            "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
            "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ));

    public static boolean isEmailValid(String email) {
        email = email.trim().toLowerCase();
        return email.matches("^[a-zA-Z0-9+_.-]+[a-zA-Z0-9_.-]*@[a-zA-Z0-9]+([a-zA-Z0-9-]*[a-zA-Z0-9])?(\\.[a-zA-Z]{2,})+$");
    }

    public static boolean isPasswordValid(String password) {
        // TODO: implement password validation
        // Criteria: 8 characters long, at least one uppercase letter, one lowercase letter, one number, and one special character
        // for development purposes, we will only check if the password is 8 characters long
        try {
            password = password.trim();
            return password.length() >= 8;
        } catch (NullPointerException e) {
            return false;
        }
    }

    public static boolean isPhoneNumberValid(String phoneNumber) {

        PhoneNumberUtil phoneUtil = PhoneNumberUtil.getInstance();
        try {
            Phonenumber.PhoneNumber number = phoneUtil.parse(phoneNumber, REGION_CODE);
            return phoneUtil.isValidNumber(number);
        } catch (NumberParseException e) {
            System.out.println("NumberParseException was thrown: " + e.toString());
            return false;
        }
    }

    public static boolean isNameValid(String name) {
        return name.matches("^[a-zA-Z]+([\\s-'][a-zA-Z]+)*[.]?$");
    }
    public static boolean isGenderValid (String gender) {
        gender = gender.toLowerCase().trim();
        return gender.matches("^(male|female|other|prefer not to say)$");
    }

    public static boolean isDateValid(String date) {
        date = date.trim();
        return date.matches("^(\\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$")
                && isValidDate(date);
    }

    private static boolean isValidDate(String date) {
        try {
            LocalDate parsedDate = LocalDate.parse(date);
            return true;
        } catch (DateTimeParseException e) {
            return false;
        }
    }

    public static boolean isCountryValid(String country) {
        country = country.trim().toLowerCase();
        // make first character uppercase
        country = country.substring(0, 1).toUpperCase() + country.substring(1);

        return COUNTRIES.contains(country);
    }

    public static boolean isCityValid(String city) {
        city = city.toLowerCase().trim();
        return city.matches("^[a-zA-Z]+([\\s-'][a-zA-Z]+)*$");
    }

    public static Map<Boolean, String> isLoginRequestValid(LoginRequest loginRequest) {
        if (!isEmailValid(loginRequest.getEmail())) {
            return Map.of(false, "Invalid email");
        }

        if (!isPasswordValid(loginRequest.getPassword())) {
            return Map.of(false, "Invalid password");
        }

        return Map.of(true, "All fields are valid");
    }

    public static Map<Boolean, String> registrationFieldsValid(RegisterRequest registerRequest) {
        if (!isNameValid(registerRequest.getFirstName())) {
            return Map.of(false, "Invalid first name");
        }

        if (!isNameValid(registerRequest.getLastName())) {
            return Map.of(false, "Invalid last name");
        }

        if (!isEmailValid(registerRequest.getEmail())) {
            return Map.of(false, "Invalid email");
        }

        if (!isPhoneNumberValid(registerRequest.getPhoneNumber())) {
            return Map.of(false, "Invalid phone number");
        }

        if (!isPasswordValid(registerRequest.getPassword())) {
            return Map.of(false, "Invalid password");
        }

        if (!isDateValid(registerRequest.getDateOfBirth().toString())) {
            return Map.of(false, "Invalid date of birth");
        }

        if (!isCountryValid(registerRequest.getCountry())) {
            return Map.of(false, "Invalid country");
        }

        if (!isCityValid(registerRequest.getCity())) {
            return Map.of(false, "Invalid city");
        }

        if (!isGenderValid(registerRequest.getGender())) {
            return Map.of(false, "Invalid gender");
        }

        return Map.of(true, "All fields are valid");
    }

    public static Map<Boolean, String> isUpdateRequestValid(UpdateRequest updateRequest) {
        if (!isNameValid(updateRequest.getFirstName())) {
            return Map.of(false, "Invalid first name");
        }

        if (!isNameValid(updateRequest.getLastName())) {
            return Map.of(false, "Invalid last name");
        }

        if (!isEmailValid(updateRequest.getEmail())) {
            return Map.of(false, "Invalid email");
        }

        if (!isPhoneNumberValid(updateRequest.getPhoneNumber())) {
            return Map.of(false, "Invalid phone number");
        }

        if (!isCountryValid(updateRequest.getCountry())) {
            return Map.of(false, "Invalid country");
        }

        if (!isCityValid(updateRequest.getCity())) {
            return Map.of(false, "Invalid city");
        }

        if (!isGenderValid(updateRequest.getGender())) {
            return Map.of(false, "Invalid gender");
        }

        return Map.of(true, "All fields are valid");
    }
}
