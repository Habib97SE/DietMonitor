"use client";
import Meal from "@/models/Meal";
import React, {useState, useEffect} from "react";
import AddNewFood from "./AddNewFood";

export default function MealCalorieIntake() {
    const mealModel = new Meal();

    const [mealType, setMealType] = useState("BREAKFAST");
    const [meal, setMeal] = useState([])
    const [showAddFoodModal, setShowAddFoodModal] = useState(false);
    const [mealFound, setMealFound] = useState(false);

    const fetchMealsData = async (selectedMeal) => {
        const day = "2024-06-24";
        const fetchedMeal = await mealModel.getMeals(1, day, selectedMeal);

        if (fetchedMeal.message !== "Meal not found") {
            setMeal([])
            setMeal(fetchedMeal.data.foods);
            setMealFound(true);
        } else {
            setMeal([])
            setMealFound(false);
        }
    };

    useEffect(() => {
        console.log(mealType);
        fetchMealsData(mealType);
    }, [mealType]);

    const handleOnChangeMealSelect = (event) => {
        setMealType(event.target.value);
    };

    const calculatePortionSize = (quantity, servingSize) => {
        try {
            quantity = parseInt(quantity);
            servingSize = parseFloat(servingSize);
            return quantity * servingSize;
        } catch (error) {
            return null;
        }
    }

    return (
        <div>
            <div className="relative">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="meal">
                    Select Meal
                </label>
                <select
                    id="meal"
                    onChange={handleOnChangeMealSelect}
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray"
                >
                    <option value="BREAKFAST">Breakfast</option>
                    <option value="LUNCH">Lunch</option>
                    <option value="DINNER">Dinner</option>
                    <option value="SNACK">Snack</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M5.5 7.5l5 5 5-5z"/>
                    </svg>
                </div>
            </div>

            <div className={"my-2"}>
                <h3 className={"capitalize text-left text-xl font-bold"}>{mealType}:</h3>
                {mealFound ? (
                    <div>
                        <table className={"min-w-full text-left text-sm font-light text-surface dark:text-white"}>
                            <thead
                                className="border-b border-neutral-200 bg-gray-600 text-white font-medium dark:border-white/10 dark:bg-body-dark">
                            <tr>
                                <th className={"text-left px-6 py-4"}>Food</th>
                                <th className={"text-left px-6 py-4"}>Serving Size</th>
                                <th className={"text-left px-6 py-4"}>Calories</th>
                            </tr>
                            </thead>
                            <tbody>
                            {meal.map((food, index) => (
                                <tr key={index} className={"border-b border-neutral-200"}>
                                    <td className={"px-6 py-4"}>{food.food.foodName}</td>
                                    <td className={"px-6 py-4"}> {calculatePortionSize(food.quantity, food.serving.metricServingAmount)} {food.serving.metricServingUnit}</td>
                                    <td className={"px-6 py-4"}>{food.totalCalories} KCal</td>
                                </tr>
                            ))}
                            </tbody>
                            <tfoot
                                className="border-b border-neutral-200 bg-gray-600 text-white font-medium dark:border-white/10 dark:bg-body-dark"
                            >
                            <tr>
                                <td className={"text-left px-6 py-4"} colSpan={2}>Total Calories</td>
                                <td className={"text-left px-6 py-4"}>{meal.reduce((acc, food) => acc + food.totalCalories, 0)} KCal</td>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                ) : (
                    <div
                        className={"text center flex flex-col justify-center items-center text-sm font-bold mb-2 bg-red-500 text-white py-4 px-3"}
                    >
                        <p>You have not added any food to your {mealType.toLowerCase()} meal yet.</p>
                    </div>
                )}
                <button
                    onClick={() => document.getElementById("addNewFood").classList.toggle("hidden")}
                    className="bg-blue-400 text-white py-3 px-2 rounded mt-2 w-full hover:bg-blue-500"
                >
                    Add more
                </button>
            </div>
            {/* Add AddNewMeal as a modal */}
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 hidden flex justify-center items-center"
                 id="addNewFood">
                <div className="relative bg-white w-1/2 max-h-full p-4 rounded-lg overflow-auto">
                    <button
                        onClick={() => document.getElementById("addNewFood").classList.toggle("hidden")}
                        className="absolute top-4 right-4 text-black text-2xl"
                    >
                        X
                    </button>
                    <AddNewFood
                        mealType={mealType}
                        mealDate={"2024-06-24"}
                    />
                </div>
            </div>
        </div>
    );
}
