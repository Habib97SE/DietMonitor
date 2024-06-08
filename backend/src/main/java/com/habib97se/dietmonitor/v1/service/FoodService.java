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
public class FoodService {

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
        System.out.println("FoodService.getFoodById");
        Food food = foodRepository.findByFoodId(id);

        if (food == null) {
            System.out.println("Getting food details from FatSecret API");
            food = fatSecretAPI.getFoodDetails(id);
            foodRepository.save(food);
        }
        return food;
    }


    public Food getFoodByFoodId(Long foodId) {
        return foodRepository.findByFoodId(foodId);
    }

    public Food getFoodByBarcode(String barcode) {
        System.out.println("FoodService.getFoodByBarcode");
        Food food =  fatSecretAPI.getFoodByBarcode(barcode);
        return food;
    }
}
