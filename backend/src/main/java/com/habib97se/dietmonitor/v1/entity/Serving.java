package com.habib97se.dietmonitor.v1.entity;


import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Entity
public class Serving {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "serving_id")
   @NotNull(message = "Serving ID is required")
    @Positive(message = "Serving ID must be a positive number")
    private Long servingId;

    private String servingDescription;
    private String servingUrl;
    private Double metricServingAmount;
    private String metricServingUnit;
    private Double numberOfUnits;
    private String measurementDescription;
    private Double calories;
    private Double carbohydrate;
    private Double protein;
    private Double fat;
    private Double saturatedFat;
    private Double polyunsaturatedFat;
    private Double monounsaturatedFat;
    private Double cholesterol;
    private Double sodium;
    private Double potassium;
    private Double fiber;
    private Double sugar;
    private Double vitaminA;
    private Double vitaminC;
    private Double calcium;
    private Double iron;

    @ManyToOne
    @JoinColumn(name = "food_id")
    @JsonBackReference
    private Food food;

public Serving() {
    }

    public Serving(Long servingId, String servingDescription, String servingUrl, Double metricServingAmount, String metricServingUnit, Double numberOfUnits, String measurementDescription, Double calories, Double carbohydrate, Double protein, Double fat, Double saturatedFat, Double polyunsaturatedFat, Double monounsaturatedFat, Double cholesterol, Double sodium, Double potassium, Double fiber, Double sugar, Double vitaminA, Double vitaminC, Double calcium, Double iron, Food food) {
        this.servingId = servingId;
        this.servingDescription = servingDescription;
        this.servingUrl = servingUrl;
        this.metricServingAmount = metricServingAmount;
        this.metricServingUnit = metricServingUnit;
        this.numberOfUnits = numberOfUnits;
        this.measurementDescription = measurementDescription;
        this.calories = calories;
        this.carbohydrate = carbohydrate;
        this.protein = protein;
        this.fat = fat;
        this.saturatedFat = saturatedFat;
        this.polyunsaturatedFat = polyunsaturatedFat;
        this.monounsaturatedFat = monounsaturatedFat;
        this.cholesterol = cholesterol;
        this.sodium = sodium;
        this.potassium = potassium;
        this.fiber = fiber;
        this.sugar = sugar;
        this.vitaminA = vitaminA;
        this.vitaminC = vitaminC;
        this.calcium = calcium;
        this.iron = iron;
        this.food = food;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public @NotNull(message = "Serving ID is required") @Positive(message = "Serving ID must be a positive number") Long getServingId() {
        return servingId;
    }

    public void setServingId(@NotNull(message = "Serving ID is required") @Positive(message = "Serving ID must be a positive number") Long servingId) {
        this.servingId = servingId;
    }

    public String getServingDescription() {
        return servingDescription;
    }

    public void setServingDescription(String servingDescription) {
        this.servingDescription = servingDescription;
    }

    public String getServingUrl() {
        return servingUrl;
    }

    public void setServingUrl(String servingUrl) {
        this.servingUrl = servingUrl;
    }

    public Double getMetricServingAmount() {
        return metricServingAmount;
    }

    public void setMetricServingAmount(Double metricServingAmount) {
        this.metricServingAmount = metricServingAmount;
    }

    public String getMetricServingUnit() {
        return metricServingUnit;
    }

    public void setMetricServingUnit(String metricServingUnit) {
        this.metricServingUnit = metricServingUnit;
    }

    public Double getNumberOfUnits() {
        return numberOfUnits;
    }

    public void setNumberOfUnits(Double numberOfUnits) {
        this.numberOfUnits = numberOfUnits;
    }

    public String getMeasurementDescription() {
        return measurementDescription;
    }

    public void setMeasurementDescription(String measurementDescription) {
        this.measurementDescription = measurementDescription;
    }

    public Double getCalories() {
        return calories;
    }

    public void setCalories(Double calories) {
        this.calories = calories;
    }

    public Double getCarbohydrate() {
        return carbohydrate;
    }

    public void setCarbohydrate(Double carbohydrate) {
        this.carbohydrate = carbohydrate;
    }

    public Double getProtein() {
        return protein;
    }

    public void setProtein(Double protein) {
        this.protein = protein;
    }

    public Double getFat() {
        return fat;
    }

    public void setFat(Double fat) {
        this.fat = fat;
    }

    public Double getSaturatedFat() {
        return saturatedFat;
    }

    public void setSaturatedFat(Double saturatedFat) {
        this.saturatedFat = saturatedFat;
    }

    public Double getPolyunsaturatedFat() {
        return polyunsaturatedFat;
    }

    public void setPolyunsaturatedFat(Double polyunsaturatedFat) {
        this.polyunsaturatedFat = polyunsaturatedFat;
    }

    public Double getMonounsaturatedFat() {
        return monounsaturatedFat;
    }

    public void setMonounsaturatedFat(Double monounsaturatedFat) {
        this.monounsaturatedFat = monounsaturatedFat;
    }

    public Double getCholesterol() {
        return cholesterol;
    }

    public void setCholesterol(Double cholesterol) {
        this.cholesterol = cholesterol;
    }

    public Double getSodium() {
        return sodium;
    }

    public void setSodium(Double sodium) {
        this.sodium = sodium;
    }

    public Double getPotassium() {
        return potassium;
    }

    public void setPotassium(Double potassium) {
        this.potassium = potassium;
    }

    public Double getFiber() {
        return fiber;
    }

    public void setFiber(Double fiber) {
        this.fiber = fiber;
    }

    public Double getSugar() {
        return sugar;
    }

    public void setSugar(Double sugar) {
        this.sugar = sugar;
    }

    public Double getVitaminA() {
        return vitaminA;
    }

    public void setVitaminA(Double vitaminA) {
        this.vitaminA = vitaminA;
    }

    public Double getVitaminC() {
        return vitaminC;
    }

    public void setVitaminC(Double vitaminC) {
        this.vitaminC = vitaminC;
    }

    public Double getCalcium() {
        return calcium;
    }

    public void setCalcium(Double calcium) {
        this.calcium = calcium;
    }

    public Double getIron() {
        return iron;
    }

    public void setIron(Double iron) {
        this.iron = iron;
    }

    public Food getFood() {
        return food;
    }

    public void setFood(Food food) {
        this.food = food;
    }

    @Override
    public String toString() {
        return "Serving{" +
                "id=" + id +
                ", servingId=" + servingId +
                ", servingDescription='" + servingDescription + '\'' +
                ", servingUrl='" + servingUrl + '\'' +
                ", metricServingAmount=" + metricServingAmount +
                ", metricServingUnit='" + metricServingUnit + '\'' +
                ", numberOfUnits=" + numberOfUnits +
                ", measurementDescription='" + measurementDescription + '\'' +
                ", calories=" + calories +
                ", carbohydrate=" + carbohydrate +
                ", protein=" + protein +
                ", fat=" + fat +
                ", saturatedFat=" + saturatedFat +
                ", polyunsaturatedFat=" + polyunsaturatedFat +
                ", monounsaturatedFat=" + monounsaturatedFat +
                ", cholesterol=" + cholesterol +
                ", sodium=" + sodium +
                ", potassium=" + potassium +
                ", fiber=" + fiber +
                ", sugar=" + sugar +
                ", vitaminA=" + vitaminA +
                ", vitaminC=" + vitaminC +
                ", calcium=" + calcium +
                ", iron=" + iron +
                ", food=" + food +
                '}';
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Serving serving = (Serving) o;

        return id != null ? id.equals(serving.id) : serving.id == null;
    }
}

