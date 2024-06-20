package com.habib97se.dietmonitor.v1.DTO.Meal;

import com.habib97se.dietmonitor.v1.entity.MealType;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

public class MealRequest {
    private Long userId;
    private MealType mealType;
    private LocalDate day;
    private List<MealFoodRequest> foods;

    public MealRequest () {}

    public MealRequest (Long userId, MealType mealType, LocalDate day, List<MealFoodRequest> foods)  {
        this.userId = userId;
        this.mealType = mealType;
        this.day = day;
        this.foods = foods;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public MealType getMealType() {
        return mealType;
    }

    public void setMealType(MealType mealType) {
        this.mealType = mealType;
    }

    public LocalDate getDay() {
        return day;
    }

    public void setDay(LocalDate day) {
        this.day = day;
    }

    public List<MealFoodRequest> getFoods() {
        return foods;
    }

    public void setFoods(List<MealFoodRequest> foods) {
        this.foods = foods;
    }

    @Override
    public String toString() {
        return "MealRequest{" +
                "userId=" + userId +
                ", mealType=" + mealType +
                ", day=" + day +
                ", foods=" + foods +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MealRequest that = (MealRequest) o;
        return Objects.equals(userId, that.userId) && mealType == that.mealType && Objects.equals(day, that.day) && Objects.equals(foods, that.foods);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, mealType, day, foods);
    }
}

