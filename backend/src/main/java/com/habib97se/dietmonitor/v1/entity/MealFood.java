package com.habib97se.dietmonitor.v1.entity;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
public class MealFood {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name= "meal_id", nullable = false)
    private Meal meal;

    @ManyToOne
    @JoinColumn(name = "food_id", nullable = false)
    private Food food;

    @Column(nullable = false)
    private Double quantity;

    public MealFood() {}

    public MealFood (Meal meal, Food food, Double quantity) {
        this.meal = meal;
        this.food = food;
        this.quantity = quantity;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Meal getMeal() {
        return meal;
    }

    public void setMeal(Meal meal) {
        this.meal = meal;
    }

    public Food getFood() {
        return food;
    }

    public void setFood(Food food) {
        this.food = food;
    }

    public Double getQuantity() {
        return quantity;
    }

    public void setQuantity(Double quantity) {
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return "MealFood{" +
                "id=" + id +
                ", meal=" + meal +
                ", food=" + food +
                ", quantity=" + quantity +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MealFood mealFood = (MealFood) o;
        return Objects.equals(id, mealFood.id) && Objects.equals(meal, mealFood.meal) && Objects.equals(food, mealFood.food) && Objects.equals(quantity, mealFood.quantity);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, meal, food, quantity);
    }
}
