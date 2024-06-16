"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
    FaBriefcase,
    FaHamburger,
    FaIceCream,
    FaMapMarkerAlt,
    FaPizzaSlice,
    FaUniversity,
    FaUtensils
} from "react-icons/fa";
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    CategoryScale,
    Tooltip,
    Legend
} from 'chart.js';
import {MdModeEditOutline} from "react-icons/md";

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend);

export default function ProfilePage() {
    const userDetail = {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phoneNumber: "1234567890",
        dateOfBirth: "1997-09-10",
        city: "Gothenburg",
        country: "Sweden",
        gender: "Male"
    };

    const [calorieData, setCalorieData] = useState([]);

    const blogArticles = [
        { id: 1, title: "How to eat healthy" },
        { id: 2, title: "Benefits of Regular Exercise" },
        { id: 3, title: "Understanding Nutrition Labels" }
    ];

    useEffect(() => {
        // Mock data for calories intake
        const data = [
            { date: '2023-06-01', calories: 2000 },
            { date: '2023-06-02', calories: 1800 },
            { date: '2023-06-03', calories: 2200 },
            { date: '2023-06-04', calories: 1900 },
            { date: '2023-06-05', calories: 2100 },
            { date: '2023-06-06', calories: 2000 },
            { date: '2023-06-07', calories: 1800 },
            { date: '2023-06-08', calories: 2200 },
            { date: '2023-06-09', calories: 1900 },
            { date: '2023-06-10', calories: 2100 },
            { date: '2023-06-11', calories: 2000 },
            { date: '2023-06-12', calories: 1800 },
            { date: '2023-06-13', calories: 2200 },
            { date: '2023-06-14', calories: 1900 }
        ];
        setCalorieData(data);
    }, []);

    const chartData = {
        labels: calorieData.map(item => item.date),
        datasets: [
            {
                label: 'Calories Intake',
                data: calorieData.map(item => item.calories),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)'
            }
        ]
    };

    return (
        <main className="profile-page">
            <section className="relative block h-[500px]">
                <div
                    className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"
                    }}
                >
                    <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 w-full pointer-events-none overflow-hidden h-[70px]" style={{ transform: "translateZ(0px)" }}>
                    <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                        <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
            </section>
            <section className="relative py-16 bg-blueGray-200">
                <div className="container mx-auto px-4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                    <div className="relative">
                                        <Image
                                            alt="Profile picture"
                                            src="https://ui-avatars.com/api/?name=John-Doe&background=random&rounded=true&size=150&bold=true&color=fff&font-size=0.33&length=1"
                                            className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                                            width={150}
                                            height={150}
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                    <div className="py-6 px-3 mt-32 sm:mt-0">
                                        <button
                                            className="flex items-center bg-gray-500 hover:bg-gray-600 active:bg-gray-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-3 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                            type="button">
                                            <MdModeEditOutline className="mr-2" /> Edit Profile
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                        <div className="mr-4 p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">3</span>
                                            <span className="text-sm text-blueGray-400">kilos</span>
                                        </div>
                                        <div className="mr-4 p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">10</span>
                                            <span className="text-sm text-blueGray-400">Streak days</span>
                                        </div>
                                        <div className="lg:mr-4 p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">700</span>
                                            <span className="text-sm text-blueGray-400">KCal</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-12">
                                <h3 className="text-4xl font-semibold leading-normal text-blueGray-800 mb-2">
                                    {userDetail.firstName} {userDetail.lastName}
                                </h3>
                                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">

                                    {userDetail.city}, {userDetail.country}
                                </div>

                            </div>
                            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-3">
                                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                        <div className={"flex flex-row justify-between items-center"}>
                                            <h2 className="text-lg font-bold mb-4">Calorie Intake</h2>
                                            <button
                                                className={"text-blue-300 hover:text-blue-500 text-xl hover:border hover:rounded-full"}>
                                                +
                                            </button>
                                        </div>
                                        <ul>
                                            <li className="mb-2 flex items-center">
                                                <FaUtensils className="text-pink-500 mr-2"/> Breakfast: 400 calories
                                            </li>
                                            <li className="mb-2 flex items-center">
                                                <FaHamburger className="text-yellow-500 mr-2" /> Lunch: 600 calories
                                            </li>
                                            <li className="mb-2 flex items-center">
                                                <FaPizzaSlice className="text-red-500 mr-2" /> Dinner: 800 calories
                                            </li>
                                            <li className="mb-2 flex items-center">
                                                <FaIceCream className="text-blue-500 mr-2" /> Snacks: 200 calories
                                            </li>
                                        </ul>
                                        <div className="mt-4 font-bold text-xl text-green-500">Total: 2000 calories</div>
                                    </div>
                                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                        <h2 className="text-lg font-bold mb-4">Calorie Intake Over Last 14 Days</h2>
                                        <div className="h-64">
                                            <Line data={chartData} />
                                        </div>
                                    </div>
                                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                        <h2 className="text-lg font-bold mb-4">Blog Articles</h2>
                                        <ul>
                                            {blogArticles.map(article => (
                                                <li key={article.id} className="mb-2 flex items-center">
                                                    <svg className="text-pink-500 w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M16.707 6.293a1 1 0 010 1.414l-9 9a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L7 14.586l8.293-8.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    {article.title}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-4">
                                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                        <h2 className="text-lg font-bold mb-4">Weight</h2>
                                        <div className="text-4xl font-bold text-blueGray-800">70 kg</div>
                                    </div>
                                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                        <h2 className="text-lg font-bold mb-4">Height</h2>
                                        <div className="text-4xl font-bold text-blueGray-800">180 cm</div>
                                    </div>
                                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                        <h2 className="text-lg font-bold mb-4">BMI</h2>
                                        <div className="text-4xl font-bold text-blueGray-800">21.6</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
