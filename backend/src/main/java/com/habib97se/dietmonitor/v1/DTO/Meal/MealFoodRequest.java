package com.habib97se.dietmonitor.v1.DTO.Meal;

import com.habib97se.dietmonitor.v1.entity.Food;
import com.habib97se.dietmonitor.v1.entity.Meal;

import java.util.Objects;

public class MealFoodRequest {
    private Long foodId;
    private Double quantity;

    public MealFoodRequest(){ }

    public MealFoodRequest(Long foodId, Double quantity) {
        this.foodId = foodId;
        this.quantity = quantity;
    }

    public Long getFoodId() {
        return foodId;
    }

    public void setFoodId(Long foodId) {
        this.foodId = foodId;
    }

    public Double getQuantity() {
        return quantity;
    }

    public void setQuantity(Double quantity) {
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return "MealFoodRequest{" +
                "foodId=" + foodId +
                ", quantity=" + quantity +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MealFoodRequest that = (MealFoodRequest) o;
        return Objects.equals(foodId, that.foodId) && Objects.equals(quantity, that.quantity);
    }

    @Override
    public int hashCode() {
        return Objects.hash(foodId, quantity);
    }
}
