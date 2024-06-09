package com.habib97se.dietmonitor.v1.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.habib97se.dietmonitor.v1.config.EnvironmentVariables;
import com.habib97se.dietmonitor.v1.entity.Food;
import com.habib97se.dietmonitor.v1.entity.FoodImage;
import com.habib97se.dietmonitor.v1.entity.Serving;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.net.URISyntaxException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

@Service
public class FatSecretAPI {

    @Autowired
    private RestTemplate restTemplate;


    @Autowired
    private EnvironmentVariables environmentVariables;

    private final String TOKEN_URL = "https://oauth.fatsecret.com/connect/token";
    private final String API_BASE_URL = "https://platform.fatsecret.com/rest/server.api";

    private String accessToken;



    public String getAccessToken() {
        String CLIENT_ID = environmentVariables.getFatsecretClientId();
        String CLIENT_SECRET = environmentVariables.getFatsecretClientSecret();
        System.out.println("CLIENT_ID: " + CLIENT_ID);
        System.out.println("CLIENT_SECRET: " + CLIENT_SECRET);
        if (accessToken == null || accessToken.isEmpty()) {
            String credentials = CLIENT_ID + ":" + CLIENT_SECRET;
            String encodedCredentials = Base64.getEncoder().encodeToString(credentials.getBytes(StandardCharsets.UTF_8));

            URI uri = UriComponentsBuilder.fromHttpUrl(TOKEN_URL).build().toUri();

            HttpHeaders headers = new HttpHeaders();
            headers.set("Authorization", "Basic " + encodedCredentials);
            headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

            // Create the request body with the required parameters
            String body = "grant_type=client_credentials&scope=basic";

            HttpEntity<String> entity = new HttpEntity<>(body, headers);

            try {
                ResponseEntity<String> response = restTemplate.exchange(uri, HttpMethod.POST, entity, String.class);
                if (response.getStatusCode() == HttpStatus.OK) {
                    ObjectMapper objectMapper = new ObjectMapper();
                    JsonNode jsonNode = objectMapper.readTree(response.getBody());
                    accessToken = jsonNode.path("access_token").asText();
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return accessToken;
    }

    public Food getFoodDetails(Long foodId) {
        getAccessToken(); // Ensure accessToken is obtained and valid

        URI uri = UriComponentsBuilder.fromHttpUrl(API_BASE_URL)
                .queryParam("method", "food.get.v4")
                .queryParam("food_id", foodId)
                .queryParam("format", "json")
                .queryParam("include_food_images", true)
                .queryParam("region", "SE")
                .queryParam("language", "sv")
                .build().toUri();

        System.out.println("URI: " + uri);

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + accessToken);

        HttpEntity<String> entity = new HttpEntity<>(headers);

        try {
            ResponseEntity<String> response = restTemplate.exchange(uri, HttpMethod.GET, entity, String.class);
            if (response.getStatusCode() == HttpStatus.OK) {
                ObjectMapper objectMapper = new ObjectMapper();
                JsonNode jsonNode = objectMapper.readTree(response.getBody());
                return mapJsonToFood(jsonNode.path("food"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    private Food mapJsonToFood(JsonNode jsonNode) {
        Food food = new Food();
        System.out.println(jsonNode.toString());
        food.setFoodId(jsonNode.path("food_id").asLong());
        food.setFoodName(jsonNode.path("food_name").asText());
        food.setFoodType(jsonNode.path("food_type").asText());
        food.setFoodUrl(jsonNode.path("food_url").asText());

        List<FoodImage> foodImages = new ArrayList<>();
        JsonNode foodImagesNode = jsonNode.path("food_images").path("food_image");
        if (foodImagesNode.isArray()) {
            for (JsonNode imageNode : foodImagesNode) {
                FoodImage foodImage = new FoodImage();
                foodImage.setImageUrl(imageNode.path("image_url").asText());
                foodImage.setImageType(imageNode.path("image_type").asText());
                foodImage.setFood(food);
                foodImages.add(foodImage);
            }
        }
        food.setFoodImages(foodImages);

        List<Serving> servings = new ArrayList<>();
        JsonNode servingsNode = jsonNode.path("servings").path("serving");
        if (servingsNode.isArray()) {
            for (JsonNode servingNode : servingsNode) {
                String metricServingUnit = servingNode.path("metric_serving_unit").asText();
                System.out.println("Metric Serving Unit: " + metricServingUnit);

                // if metric_serving_unit is not equal to g, continue
                if (!metricServingUnit.equals("g")) {
                    System.out.println("Skipping serving with unit: " + metricServingUnit);
                    continue;
                }
                Serving serving = new Serving();
                serving.setServingId(servingNode.path("serving_id").asLong());
                serving.setServingDescription(servingNode.path("serving_description").asText());
                serving.setServingUrl(servingNode.path("serving_url").asText());
                serving.setMetricServingAmount(servingNode.path("metric_serving_amount").asDouble());
                serving.setMetricServingUnit(servingNode.path("metric_serving_unit").asText());
                serving.setNumberOfUnits(servingNode.path("number_of_units").asDouble());
                serving.setMeasurementDescription(servingNode.path("measurement_description").asText());
                serving.setCalories(servingNode.path("calories").asDouble());
                serving.setCarbohydrate(servingNode.path("carbohydrate").asDouble());
                serving.setProtein(servingNode.path("protein").asDouble());
                serving.setFat(servingNode.path("fat").asDouble());
                serving.setSaturatedFat(servingNode.path("saturated_fat").asDouble());
                serving.setPolyunsaturatedFat(servingNode.path("polyunsaturated_fat").asDouble());
                serving.setMonounsaturatedFat(servingNode.path("monounsaturated_fat").asDouble());
                serving.setCholesterol(servingNode.path("cholesterol").asDouble());
                serving.setSodium(servingNode.path("sodium").asDouble());
                serving.setPotassium(servingNode.path("potassium").asDouble());
                serving.setFiber(servingNode.path("fiber").asDouble());
                serving.setSugar(servingNode.path("sugar").asDouble());
                serving.setVitaminA(servingNode.path("vitamin_a").asDouble());
                serving.setVitaminC(servingNode.path("vitamin_c").asDouble());
                serving.setCalcium(servingNode.path("calcium").asDouble());
                serving.setIron(servingNode.path("iron").asDouble());
                serving.setFood(food);
                servings.add(serving);
            }
        }
        food.setServings(servings);

        return food;
    }

    public Food getFoodByBarcode(String barcode) {
        getAccessToken(); // Ensure accessToken is obtained and valid

        URI uri = UriComponentsBuilder.fromHttpUrl(API_BASE_URL)
                .queryParam("method", "food.find_id_for_barcode")
                .queryParam("barcode", barcode)
                .queryParam("format", "json")
                .build().toUri();

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + accessToken);

        HttpEntity<String> entity = new HttpEntity<>(headers);

        try {
            ResponseEntity<String> response = restTemplate.exchange(uri, HttpMethod.GET, entity, String.class);
            if (response.getStatusCode() == HttpStatus.OK) {
                ObjectMapper objectMapper = new ObjectMapper();
                JsonNode jsonNode = objectMapper.readTree(response.getBody());
                Long foodId = jsonNode.path("food_id").asLong();
                return getFoodDetails(foodId);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

}
