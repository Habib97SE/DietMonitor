package com.habib97se.dietmonitor.v1.service;

import com.habib97se.dietmonitor.v1.DTO.Meal.MealFoodRequest;
import com.habib97se.dietmonitor.v1.ResponseHandler;
import com.habib97se.dietmonitor.v1.entity.Food;
import com.habib97se.dietmonitor.v1.entity.Meal;
import com.habib97se.dietmonitor.v1.entity.MealFood;
import com.habib97se.dietmonitor.v1.repository.FoodRepository;
import com.habib97se.dietmonitor.v1.repository.MealRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MealService {

    @Autowired
    private MealRepository mealRepository;

    @Autowired
    private FoodRepository foodRepository;

    public MealService(MealRepository mealRepository, FoodRepository foodRepository) {
        this.mealRepository = mealRepository;
        this.foodRepository = foodRepository;
    }

    public List<Meal> all() {
        return mealRepository.findAll();
    }

    public List<Meal> findByUserId(Long userId) {
        return mealRepository.findByUserId(userId);
    }

    public Meal findById(Long id) {
        return mealRepository.findMealById(id);
    }

    public ResponseEntity<Object> addMeal(Meal meal) {
        try {
            Meal newMeal = mealRepository.save(meal);
            return ResponseHandler.generateResponse("Meal created succesfully", HttpStatus.OK, newMeal, "false");
        } catch (Exception e) {
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.OK, null, "true");
        }
    }

    public ResponseEntity<Object> addFoodToMeal(Long mealId, MealFoodRequest mealFoodRequest) {
        try {
            Meal meal = findById(mealId);
            Food food = foodRepository.findById(mealFoodRequest.getFoodId()).orElseThrow(() -> new RuntimeException("Food not found"));
            MealFood mealFood = new MealFood();
            mealFood.setFood(food);
            mealFood.setQuantity(mealFoodRequest.getQuantity());
            mealFood.setMeal(meal);
            meal.getFoods().add(mealFood);

            meal = mealRepository.save(meal);
            return ResponseHandler.generateResponse("New meal added successfully.", HttpStatus.OK, meal, "false");

        } catch (Exception e) {
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.OK, null, "true");
        }
    }

    public ResponseEntity<Object> removeFoodFromMeal(Long mealId, Long foodId) {
        try {
            Meal meal = findById(mealId);
            meal.getFoods().removeIf(food -> food.getFood().getId().equals(foodId));
            meal = mealRepository.save(meal);
            return ResponseHandler.generateResponse("Food removed successfully.", HttpStatus.OK, meal, "false");
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.OK, null, "true");
        }
    }

}
