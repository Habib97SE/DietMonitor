package com.habib97se.dietmonitor.v1.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())  // Disable CSRF protection for development
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers("/api/v1/**").permitAll()  // Allow unauthenticated access to /api/v1/users
                        .anyRequest().authenticated()  // All other requests require authentication
                )
                .httpBasic(Customizer.withDefaults());  // Enable HTTP Basic Authentication using defaults

        return http.build();
    }
}
