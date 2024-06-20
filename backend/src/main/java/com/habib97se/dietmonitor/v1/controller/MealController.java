package com.habib97se.dietmonitor.v1.controller;

import com.habib97se.dietmonitor.v1.DTO.Meal.MealFoodRequest;
import com.habib97se.dietmonitor.v1.ResponseHandler;
import com.habib97se.dietmonitor.v1.entity.Meal;
import com.habib97se.dietmonitor.v1.service.MealFoodService;
import com.habib97se.dietmonitor.v1.service.MealService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


/**
 * MealController:
 */
@RestController
@RequestMapping("/api/v1/meals")
public class MealController {

    @Autowired
    private MealService mealService;

    @Autowired
    private MealFoodService mealFoodService;

    public MealController(MealService mealService, MealFoodService mealFoodService) {
        this.mealService = mealService;
        this.mealFoodService = mealFoodService;
    }

    @GetMapping({"", "/"})
    public ResponseEntity<Object> getMeals(
            @RequestParam(required = false) Long id,
            @RequestParam(required = false) Long userId
    ) {
        List<Meal> meals = new ArrayList<>();
        if (id != null) {
            meals.add(mealService.findById(id));
            return ResponseHandler.generateResponse("Meal was found", HttpStatus.OK, meals, "false");
        }
        if (userId != null) {
            meals = mealService.findByUserId(userId);
            return ResponseHandler.generateResponse("Meals were found", HttpStatus.OK, meals, "false");
        }
        meals = mealService.all();
        if (!meals.isEmpty()) {
            return ResponseHandler.generateResponse("Meals were found", HttpStatus.OK, meals, "false");
        }
        return ResponseHandler.generateResponse("No meals were found", HttpStatus.OK, null, "false");
    }

    @PostMapping({"", "/"})
    public ResponseEntity<Object> addNewMeal(@RequestBody Meal meal) {
        return mealService.addMeal(meal);
    }

    @PostMapping({"/{mealId}/foods", "/{mealId}/foods/"})
    public ResponseEntity<Object> addFoodToMeal(@PathVariable Long mealId, @RequestBody MealFoodRequest mealFoodRequest) {
        return mealService.addFoodToMeal(mealId, mealFoodRequest);
    }

    @DeleteMapping({"/{mealId}/foods/{foodId}", "/{mealId}/foods/{foodId}/"})
    public ResponseEntity<Object> removeFoodFromMeal(@PathVariable Long mealId, @PathVariable Long foodId) {
        return mealService.removeFoodFromMeal(mealId, foodId);
    }

}