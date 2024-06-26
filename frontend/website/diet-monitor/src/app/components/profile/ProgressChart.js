// ProgressChart.js
"use client";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

const ProgressChart = ({ totalCalories, remainingCalories }) => {
    const [data, setData] = useState({
        labels: ['Consumed', 'Remaining'],
        datasets: [
            {
                data: [totalCalories - remainingCalories, remainingCalories],
                backgroundColor: ['#4caf50', '#f44336'],
                hoverBackgroundColor: ['#66bb6a', '#e57373'],
                borderWidth: 0,
            },
        ],
    });

    useEffect(() => {
        setData({
            labels: ['Consumed', 'Remaining'],
            datasets: [
                {
                    data: [totalCalories - remainingCalories, remainingCalories],
                    backgroundColor: ['#4caf50', '#f44336'],
                    hoverBackgroundColor: ['#66bb6a', '#e57373'],
                    borderWidth: 0,
                },
            ],
        });
    }, [totalCalories, remainingCalories]);

    const options = {
        cutout: '70%', // This creates the "hole" in the middle of the doughnut
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `${tooltipItem.label}: ${tooltipItem.raw} kcal`;
                    },
                },
            },
        },
    };

    return (
        <div className="w-1/2 mx-auto">
            <Doughnut data={data} options={options} />
            <div className="text-center text-xl font-bold">
                {remainingCalories} kcal remaining
            </div>
        </div>
    );
};

export default ProgressChart;
