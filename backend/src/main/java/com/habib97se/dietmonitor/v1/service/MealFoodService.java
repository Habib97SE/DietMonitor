package com.habib97se.dietmonitor.v1.service;

import com.habib97se.dietmonitor.v1.repository.MealFoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MealFoodService {

    @Autowired
    private MealFoodRepository mealFoodRepository;

    public MealFoodService(MealFoodRepository mealFoodRepository) {
        this.mealFoodRepository = mealFoodRepository;
    }



}
