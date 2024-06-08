package com.habib97se.dietmonitor.v1.controller;


import com.habib97se.dietmonitor.v1.ResponseHandler;
import com.habib97se.dietmonitor.v1.entity.Food;
import com.habib97se.dietmonitor.v1.service.FoodService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
        System.out.println("FoodController.getFoodById");
        return foodService.getFoodById(id);
    }

    @GetMapping({"/barcode/{barcode}", "/barcode/{barcode}/"})
    public Food getFoodByBarcode(@PathVariable String barcode) {
        System.out.println("FoodController.getFoodByBarcode");
        return foodService.getFoodByBarcode(barcode);
    }

}
