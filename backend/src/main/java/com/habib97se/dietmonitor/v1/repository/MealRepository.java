package com.habib97se.dietmonitor.v1.repository;

import com.habib97se.dietmonitor.v1.entity.Meal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MealRepository extends JpaRepository<Meal, Long> {
    public Meal findMealById(Long id);
    List<Meal> findByUserId(Long userId);
}
