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

    public String getAnotherSecretKey() {
        return dotenv.get("ANOTHER_SECRET_KEY");
    }
}
