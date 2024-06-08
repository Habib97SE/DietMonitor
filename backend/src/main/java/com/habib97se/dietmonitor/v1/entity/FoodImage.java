package com.habib97se.dietmonitor.v1.entity;


import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
@Table(name = "food_image")
public class FoodImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String imageUrl;
    private String imageType;

    @ManyToOne
    @JoinColumn(name = "food_id")
    @JsonBackReference
    private Food food;

    public FoodImage() {
    }

    public FoodImage(String imageUrl, String imageType, Food food) {
        this.imageUrl = imageUrl;
        this.imageType = imageType;
        this.food = food;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getImageType() {
        return imageType;
    }

    public void setImageType(String imageType) {
        this.imageType = imageType;
    }

    public Food getFood() {
        return food;
    }

    public void setFood(Food food) {
        this.food = food;
    }

    @Override
    public String toString() {
        return "FoodImage{" +
                "id=" + id +
                ", imageUrl='" + imageUrl + '\'' +
                ", imageType='" + imageType + '\'' +
                ", food=" + food +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        FoodImage foodImage = (FoodImage) o;

        if (!id.equals(foodImage.id)) return false;
        if (!imageUrl.equals(foodImage.imageUrl)) return false;
        if (!imageType.equals(foodImage.imageType)) return false;
        return food.equals(foodImage.food);
    }
}
