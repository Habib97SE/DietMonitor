package com.habib97se.dietmonitor.v1.service;

import com.habib97se.dietmonitor.v1.ResponseHandler;
import com.habib97se.dietmonitor.v1.config.SecurityConfig;
import com.habib97se.dietmonitor.v1.entity.Food;
import com.habib97se.dietmonitor.v1.repository.FoodRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.http.HttpStatus;
import com.habib97se.dietmonitor.v1.service.FatSecretAPI;

import java.util.List;

@Service
public class

FoodService {

    @Autowired
    private FoodRepository foodRepository;

    @Autowired
    private FatSecretAPI fatSecretAPI;
    @Autowired
    private SecurityConfig securityConfig;

    public FoodService(FoodRepository foodRepository) {
        this.foodRepository = foodRepository;
    }

    public List<Food> getAllFoods() {
        System.out.println("FoodService.getAllFoods");
        return foodRepository.findAll();
    }

    @Transactional
    public ResponseEntity<Object> save (Food food) {
        try {
            foodRepository.save(food);
            return ResponseHandler.generateResponse("Food saved successfully", HttpStatus.CREATED, food);
        } catch (Exception e) {
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.BAD_REQUEST, null);
        }
    }


    public Food getFoodById(Long id) {
        return foodRepository.findById(id).orElse(null);
    }


    public Food getFoodByFoodId(Long foodId) {
        Food food = foodRepository.findByFoodId(foodId);
        if (food == null) {
            food = fatSecretAPI.getFoodDetails(foodId);
            foodRepository.save(food);
        }
        return food;
    }

    public Food getFoodByBarcode(String barcode) {
        System.out.println("FoodService.getFoodByBarcode");
        Food food =  fatSecretAPI.getFoodByBarcode(barcode);
        return food;
    }

    public List<Food> searchFoods(String query, int page, int maxResults) {
        return fatSecretAPI.searchFoods(query, page, maxResults);
    }

    public List<String> getAutoCompleteSuggestions(String query, int maxResults) {
        return fatSecretAPI.getAutoCompleteSuggestions(query, maxResults);
    }

    public ResponseEntity<Object> deleteFood(Long id) {
        try {
            foodRepository.deleteById(id);
            return ResponseHandler.generateResponse("Food deleted successfully", HttpStatus.OK, null);
        } catch (Exception e) {
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.BAD_REQUEST, null);
        }
    }
}
