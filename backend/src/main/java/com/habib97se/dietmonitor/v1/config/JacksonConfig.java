package com.habib97se.dietmonitor.v1.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.StreamWriteConstraints;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class JacksonConfig {

    @Bean
    public ObjectMapper objectMapper() {
        ObjectMapper objectMapper = new ObjectMapper();
        StreamWriteConstraints constraints = StreamWriteConstraints.builder()
                .maxNestingDepth(2000) // Adjust the depth as needed
                .build();
        objectMapper.getFactory().setStreamWriteConstraints(constraints);
        return objectMapper;
    }
}
