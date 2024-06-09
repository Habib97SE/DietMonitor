package com.habib97se.dietmonitor;

import com.habib97se.dietmonitor.v1.config.EnvironmentVariables;
import org.hibernate.validator.internal.constraintvalidators.bv.AssertTrueValidator;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
public class EnvVariableTest {

    @Autowired
    private EnvironmentVariables environmentVariables;

    @Test
    public void testEnvVariable() {
        String fatsecretClientId = environmentVariables.getFatsecretClientId();
        String fatsecretClientSecret = environmentVariables.getFatsecretClientSecret();

        System.out.println("FATSECRET_CLIENT_ID: " + fatsecretClientId);
        System.out.println("FATSECRET_CLIENT_SECRET: " + fatsecretClientSecret);

    }
}
