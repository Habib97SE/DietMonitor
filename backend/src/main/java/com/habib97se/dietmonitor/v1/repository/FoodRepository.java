package com.habib97se.dietmonitor.v1.repository;

import com.habib97se.dietmonitor.v1.entity.Food;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodRepository extends JpaRepository<Food, Long> {
    public Food findByFoodId(Long foodId);
}
