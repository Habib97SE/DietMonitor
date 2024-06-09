package com.habib97se.dietmonitor.v1.controller;


import com.habib97se.dietmonitor.v1.ResponseHandler;
import com.habib97se.dietmonitor.v1.entity.Food;
import com.habib97se.dietmonitor.v1.service.FoodService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static java.lang.Integer.parseInt;

@RestController
@RequestMapping("/api/v1/foods")
public class FoodController {

    @Autowired
    private final FoodService foodService;


    public FoodController(FoodService foodService) {
        super();
        this.foodService = foodService;
    }

    @PostMapping({"/save", "/save/"})
    public ResponseEntity<Object> save(@Valid @RequestBody Food food) {
        return foodService.save(food);
    }

    @GetMapping({"/", ""})
    public List<Food> getAllFoods() {
        System.out.println("FoodController.getAllFoods");
        return foodService.getAllFoods();
    }

    @GetMapping({"/{id}", "/{id}/"})
    public Food getFoodById(@PathVariable Long id) {
        return foodService.getFoodById(id);
    }

    @GetMapping({"/barcode/{barcode}", "/barcode/{barcode}/"})
    public Food getFoodByBarcode(@PathVariable String barcode) {
        System.out.println("FoodController.getFoodByBarcode");
        return foodService.getFoodByBarcode(barcode);
    }

    @GetMapping({"/foodId/{foodId}", "/foodId/{foodId}/"})
    public Food getFoodByFoodId(@PathVariable Long foodId) {
        return foodService.getFoodByFoodId(foodId);
    }

    @GetMapping({"/search/{query}", "/search/{query}/"})
    public List<Food> searchFoods(@PathVariable String query, @RequestParam String page, @RequestParam String maxResults) {
        // check if page and maxResults are entered, if not set default values
        if (page == null || page.isEmpty()) {
            page = "1";
        }
        if (maxResults == null || maxResults.isEmpty()) {
            maxResults = "10";
        }
        return foodService.searchFoods(query, parseInt(page), parseInt(maxResults));
    }

    @GetMapping("/search/autocomplete/{query}")
    public List<String> searchFoodsAutocomplete(@PathVariable String query, @RequestParam String maxResults) {
        maxResults = parseInt(maxResults) > 0 ? maxResults : "4";
        return foodService.getAutoCompleteSuggestions(query, parseInt(maxResults));
    }

    @DeleteMapping({"/{id}", "/{id}/"})
    public ResponseEntity<Object> deleteFood(@PathVariable Long id) {
        return foodService.deleteFood(id);
    }

}
