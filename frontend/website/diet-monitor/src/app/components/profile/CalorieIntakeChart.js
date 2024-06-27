"use client";
import {useEffect, useState} from "react";
import Meal from "@/models/Meal";
import User from "@/models/User";

import ProgressChart from "@/app/components/profile/ProgressChart";

export default function CalorieIntakeChart() {

    const [consumedCalories, setConsumedCalories] = useState(0);
    const [totalCalories, setTotalCalories] = useState(0);

    useEffect(() => {
        const mealModel = new Meal();

        const fetchTotalCalories = async () => {
            const totalCalories = await mealModel.getTotalCalories(1, new Date().toISOString().split("T")[0]);
            setConsumedCalories(totalCalories.data);
            const userModel = new User();
            const dailyLimitCalories = await userModel.getDailyLimitCalories(1);
            setTotalCalories(dailyLimitCalories.data.dailyCaloriesLimit);
        }

        fetchTotalCalories();
    }, []);

    const calculateRemainingCalories = () => {
        return totalCalories - consumedCalories;
    }

    return (
        <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-lg font-bold mb-4">Calorie Intake Over Last 14 Days</h2>
            <div className="h-64">
                <ProgressChart remainingCalories={calculateRemainingCalories()} totalCalories={totalCalories}/>
            </div>
        </div>
    );
}