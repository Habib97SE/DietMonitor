package com.habib97se.dietmonitor.v1.entity;

public enum Gender {
    MALE("male"),
    FEMALE("female"),
    OTHER("other"),
    PREFER_NOT_TO_SAY("prefer not to say");

    private final String value;

    Gender(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    @Override
    public String toString() {
        return this.value;
    }

    public static Gender fromString(String value) {
        for (Gender gender: Gender.values()) {
            if (gender.value.equalsIgnoreCase(value)) {
                return gender;
            }
        }
        throw new IllegalArgumentException("Invalid gender value: " + value);
    }
}
