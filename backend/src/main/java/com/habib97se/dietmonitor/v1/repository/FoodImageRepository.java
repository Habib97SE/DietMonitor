package com.habib97se.dietmonitor.v1.repository;

import com.habib97se.dietmonitor.v1.entity.FoodImage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodImageRepository extends JpaRepository<FoodImage, Long> {
}