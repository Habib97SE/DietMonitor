package com.habib97se.dietmonitor.v1.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import io.github.cdimascio.dotenv.Dotenv;

@Component
public class EnvironmentVariables {

    private final Dotenv dotenv;

    @Autowired
    public EnvironmentVariables(Dotenv dotenv) {
        this.dotenv = dotenv;
    }

    public String getFatsecretClientId() {
        return dotenv.get("FATESECRET_CLIENT_ID");
    }

    public String getFatsecretClientSecret() {
        return dotenv.get("FATSECRET_CLIENT_SECRET");
    }

    public String getAPIBaseURL() {
        return dotenv.get("API_BASE_URL");
    }

    public String getMySQLURL() {
        return dotenv.get("MYSQL_URL");
    }

    public String getMySQLUsername() {
        return dotenv.get("MYSQL_USERNAME");
    }

    public String getMySQLPassword() {
        return dotenv.get("MYSQL_PASSWORD");
    }

}
