package com.habib97se.dietmonitor.v1.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import com.habib97se.dietmonitor.v1.entity.Serving;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

import java.util.List;

@Entity
@Table(name = "food")
public class Food {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "food_id")
    @NotNull(message = "Food ID is required")
    @Positive(message = "Food ID must be a positive number")
    private Long foodId;

    @Column(name = "food_name")
    @NotBlank(message = "Food name is required")
    private String foodName;

    @Column(name = "food_type")
    @NotBlank(message = "Food type is required")
    private String foodType;

    @Column(name = "food_url")
    @NotBlank(message = "Food URL is required")
    private String foodUrl;

    @OneToMany(mappedBy = "food", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<FoodImage> foodImages;

    @OneToMany(mappedBy = "food", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Serving> servings;

    public Food() {
    }

    public Food(Long foodId, String foodName, String foodType, String foodUrl, List<FoodImage> foodImages, List<Serving> servings) {
        this.foodId = foodId;
        this.foodName = foodName;
        this.foodType = foodType;
        this.foodUrl = foodUrl;
        this.foodImages = foodImages;
        this.servings = servings;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public @NotNull(message = "Food ID is required") @Positive(message = "Food ID must be a positive number") Long getFoodId() {
        return foodId;
    }

    public void setFoodId(@NotNull(message = "Food ID is required") @Positive(message = "Food ID must be a positive number") Long foodId) {
        this.foodId = foodId;
    }

    public @NotBlank(message = "Food name is required") String getFoodName() {
        return foodName;
    }

    public void setFoodName(@NotBlank(message = "Food name is required") String foodName) {
        this.foodName = foodName;
    }

    public @NotBlank(message = "Food type is required") String getFoodType() {
        return foodType;
    }

    public void setFoodType(@NotBlank(message = "Food type is required") String foodType) {
        this.foodType = foodType;
    }

    public @NotBlank(message = "Food URL is required") String getFoodUrl() {
        return foodUrl;
    }

    public void setFoodUrl(@NotBlank(message = "Food URL is required") String foodUrl) {
        this.foodUrl = foodUrl;
    }

    public List<FoodImage> getFoodImages() {
        return foodImages;
    }

    public void setFoodImages(List<FoodImage> foodImages) {
        this.foodImages = foodImages;
    }

    public List<Serving> getServings() {
        return servings;
    }

    public void setServings(List<Serving> servings) {
        this.servings = servings;
    }

    @Override
    public String toString() {
        return "Food{" +
                "id=" + id +
                ", foodId=" + foodId +
                ", foodName='" + foodName + '\'' +
                ", foodType='" + foodType + '\'' +
                ", foodUrl='" + foodUrl + '\'' +
                ", foodImages=" + foodImages +
                ", servings=" + servings +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Food food = (Food) o;

        if (id != null ? !id.equals(food.id) : food.id != null) return false;
        if (foodId != null ? !foodId.equals(food.foodId) : food.foodId != null) return false;
        if (foodName != null ? !foodName.equals(food.foodName) : food.foodName != null) return false;
        if (foodType != null ? !foodType.equals(food.foodType) : food.foodType != null) return false;
        if (foodUrl != null ? !foodUrl.equals(food.foodUrl) : food.foodUrl != null) return false;
        if (foodImages != null ? !foodImages.equals(food.foodImages) : food.foodImages != null) return false;
        return servings != null ? servings.equals(food.servings) : food.servings == null;
    }


}