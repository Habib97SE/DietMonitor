package com.habib97se.dietmonitor.v1.entity;


import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import jakarta.validation.constraints.PastOrPresent;
import org.springframework.cglib.core.Local;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;

@Entity
public class Meal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private MealType mealType;

    @Column(nullable = false)
    @PastOrPresent(message = "Invalid date")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate mealDate;

    @OneToMany(mappedBy = "meal", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<MealFood> foods = new ArrayList<>();


    @Column(nullable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createdAt;

    @Column(nullable = true)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime updatedAt;

    public Meal() {

    }

    public Meal(User user, String mealType, LocalDate mealDate) {
        this.user = user;
        this.mealDate = mealDate;
        mealType = mealType.toLowerCase();
        switch (mealType) {
            case "lunch":
                this.mealType = MealType.LUNCH;
                break;
            case "breakfast":
                this.mealType = MealType.BREAKFAST;
                break;
            case "dinner":
                this.mealType = MealType.DINNER;
                break;
            case "snack":
                this.mealType = MealType.SNACK;
                break;
            default:
                break;
        }
    }

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public MealType getMealType() {
        return mealType;
    }

    public void setMealType(MealType mealType) {
        this.mealType = mealType;
    }

    public @PastOrPresent(message = "Invalid date") LocalDate getMealDate() {
        return mealDate;
    }

    public void setMealDate(@PastOrPresent(message = "Invalid date") LocalDate mealDate) {
        this.mealDate = mealDate;
    }

    public List<MealFood> getFoods() {
        return this.foods;
    }

    public void setFoods(List<MealFood> foods) {
        this.foods = foods;
    }

    public Boolean addNewFood(MealFood mealFood) {
        try {
            this.foods.add(mealFood);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @Override
    public String toString() {
        return "Meal{" +
                "id=" + id +
                ", user=" + user +
                ", mealType=" + mealType +
                ", mealDate=" + mealDate +
                ", createdAt=" + createdAt +
                ", updatedAt=" + updatedAt +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Meal meal = (Meal) o;
        return Objects.equals(id, meal.id) && Objects.equals(user, meal.user) && mealType == meal.mealType && Objects.equals(mealDate, meal.mealDate) && Objects.equals(createdAt, meal.createdAt) && Objects.equals(updatedAt, meal.updatedAt);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, user, mealType, mealDate, createdAt, updatedAt);
    }
}
