"use client";
import Image from "next/image";
import {useState, useEffect} from "react";
import {
    FaHamburger,
    FaMapMarkerAlt,

} from "react-icons/fa";
import {Line} from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    CategoryScale,
    Tooltip,
    Legend,
} from "chart.js";
import {MdModeEditOutline} from "react-icons/md";
import AddNewFood from "@/app/components/profile/AddNewFood";
import Tabs from "@/app/components/profile/Tabs";
import Tab from "@/app/components/profile/Tab";
import Meal from "@/models/Meal";
import ChangePassword from "@/app/components/profile/ChangePassword";
import PersonalInformation from "@/app/components/profile/PersonalInformation";
import HelperMethods from "../../utils/HelpMethods"
import MealCalorieIntake from "@/app/components/profile/MealCalorieIntake";
import ProgressChart from "@/app/components/profile/ProgressChart";
import CalorieIntakeChart from "@/app/components/profile/CalorieIntakeChart";

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend);

export default function ProfilePage() {


    const [calorieData, setCalorieData] = useState([]);
    const [weightData, setWeightData] = useState([]);
    const [todayMeals, setTodayMeals] = useState([]);
    const [totalCalories, setTotalCalories] = useState(0);
    const mealModel = new Meal();

    const [userDetails, setUserDetails] = useState({});

    const blogArticles = [
        {id: 1, title: "How to eat healthy"},
        {id: 2, title: "Benefits of Regular Exercise"},
        {id: 3, title: "Understanding Nutrition Labels"},
        {id: 4, title: "The Importance of Hydration"},
        {id: 5, title: "How to get started with Yoga"},
        {id: 6, title: "The Benefits of a Good Night's Sleep"},
    ];

    useEffect(() => {

        const fetchData = async () => {
            const response = await mealModel.getTotalCalories(1, "2023-03-03");

            setTotalCalories(response.data);
        }

        fetchData();

        const data = [
            {date: "2023-06-01", calories: 2000},
            {date: "2023-06-02", calories: 1800},
            {date: "2023-06-03", calories: 2200},
            {date: "2023-06-04", calories: 1900},
            {date: "2023-06-05", calories: 2100},
            {date: "2023-06-06", calories: 2000},
            {date: "2023-06-07", calories: 1800},
            {date: "2023-06-08", calories: 2200},
            {date: "2023-06-09", calories: 1900},
            {date: "2023-06-10", calories: 2100},
            {date: "2023-06-11", calories: 2000},
            {date: "2023-06-12", calories: 1800},
            {date: "2023-06-13", calories: 2200},
            {date: "2023-06-14", calories: 1900},
        ];
        const weight = [
            {date: "2023-06-01", weight: 70.8},
            {date: "2023-06-02", weight: 69.5},
            {date: "2023-06-03", weight: 70.1},
            {date: "2023-06-04", weight: 69.9},
            {date: "2023-06-05", weight: 71.5},
            {date: "2023-06-06", weight: 70.8},
            {date: "2023-06-07", weight: 69.5},
            {date: "2023-06-08", weight: 68},
        ];

        const fetchMealsData = async () => {
            const today = new Date().toISOString().split("T")[0];

            const meals = await mealModel.getMeals(1, "2023-03-03");

            setTodayMeals(meals.data);
        }

        setWeightData(weight);
        setCalorieData(data);
        fetchMealsData();
    }, []);

    const chartData = {
        labels: calorieData.map((item) => item.date),
        datasets: [
            {
                label: "Calories Intake",
                data: calorieData.map((item) => item.calories),
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
            },
        ],
    };

    const chartDataWeight = {
        labels: weightData.map((item) => item.date),
        datasets: [
            {
                label: "Weight",
                data: weightData.map((item) => item.weight),
                borderColor: "rgba(255, 99, 132, 1)",
                backgroundColor: "rgba(255, 99, 132, 0.2)",
            },
        ],
    };

    const calculateTotalCalories = (foods) => {
        let caloriesIntaken = 0;
        foods.forEach((food) => {
            const quantity = food.quantity;
            const calories = food.food.servings[0].calories;
            caloriesIntaken += quantity * calories;
        });
        return caloriesIntaken;
    }

    return (
        <main className="profile-page">
            <section className="relative block h-[500px]">
                <div
                    className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
                    }}
                >
                    <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
                </div>
                <div
                    className="absolute bottom-0 left-0 right-0 w-full pointer-events-none overflow-hidden h-[70px]"
                    style={{transform: "translateZ(0px)"}}
                >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
            </section>
            <section className="relative py-16 bg-blueGray-200">
                <div className="container mx-auto px-4">
                    <div
                        className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                    <div className="relative">
                                        <Image
                                            alt="Profile picture"
                                            src={HelperMethods.createProfileImage(userDetails.firstName, userDetails.lastName)}
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
                                            type="button"
                                        >
                                            <MdModeEditOutline className="mr-2"/> Edit Profile
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                        <div className="mr-4 p-3 text-center">
                                            <span
                                                className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">3</span>
                                            <span className="text-sm text-blueGray-400">kilos</span>
                                        </div>
                                        <div className="mr-4 p-3 text-center border-l border-r border-black">
                                            <span
                                                className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">10</span>
                                            <span className="text-sm text-blueGray-400 capitalize">streak days</span>
                                        </div>
                                        <div className="lg:mr-4 p-3 text-center">
                                            <span
                                                className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">700</span>
                                            <span className="text-sm text-blueGray-400">KCal</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-12 my-2">
                                <h3 className="text-4xl font-semibold leading-normal text-blueGray-800 mb-2 capitalize">
                                    {userDetails.firstName} {userDetails.lastName}
                                </h3>
                                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                    <span>
                                        <FaMapMarkerAlt className="mr-2 text-lg text-blueGray-400"/>
                                        {userDetails.city}, {userDetails.country}
                                    </span>
                                </div>
                            </div>
                            <Tabs>
                                <Tab title="Profile">
                                    <div className="text-center">
                                        <hr/>
                                        <h2 className="text-2xl font-semibold leading-normal text-blueGray-800 mb-2">Profile</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-4">
                                            <PersonalInformation userProfile={userDetails}
                                                                 onUserDetailsChange={setUserDetails}/>
                                            <div
                                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                                <h2 className="text-lg font-bold mb-4">Education & Work</h2>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-blueGray-400">Degree</span>
                                                    <span className="text-blueGray-800">Master of Science in Computer Science</span>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-blueGray-400">University</span>
                                                    <span className="text-blueGray-800">Chalmers university of technology</span>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-blueGray-400">Job</span>
                                                    <span className="text-blueGray-800">Fullstack java developer</span>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-blueGray-400">Company</span>
                                                    <span className="text-blueGray-800">Klarna Bank AB (publ.)</span>
                                                </div>
                                            </div>
                                            <div
                                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 leading-6">
                                                <h2 className="text-lg font-bold mb-4">Change Password</h2>
                                                <span>
                                                    <p className={"text-md text-left"}>
                                                        You can change your password here. Please enter your old password and then your new password.
                                                        The new password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.
                                                    </p>
                                                </span>
                                                <ChangePassword/>
                                            </div>
                                            <div
                                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 leading-6 flex flex-col justify-between items-center">
                                                <h2
                                                    className="text-lg font-bold mb-4"
                                                >Add your weight</h2>
                                                <div className="flex items-center justify-between">
                                                    <p>
                                                        Add your weight here. You can add your weight daily or weekly to keep track of your weight.
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <input
                                                        type="number"
                                                        className="w-1/2 py-3 px-2 border border-gray-300 rounded-bl rounded-tl"
                                                        placeholder="Enter your weight"
                                                    />
                                                    <button
                                                        className="bg-blue-400 text-white py-3 px-2 hover:bg-blue-500"
                                                    >
                                                        Add
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </Tab>
                                <Tab title="Calorie Intake">
                                    <hr/>
                                    <h2 className={"text-2xl font-semibold leading-normal text-blueGray-800 mb-2 text-center"}>Calorie
                                        Intake</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-4">
                                        <div
                                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                            <h2 className="text-lg font-bold mb-4">Weight</h2>
                                            <div className="text-4xl font-bold text-blueGray-800">
                                                {weightData.length > 0 ? weightData[weightData.length - 1].weight : "0"} kg
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                            <h2 className="text-lg font-bold mb-4">Height</h2>
                                            <div className="text-4xl font-bold text-blueGray-800">180 cm</div>
                                        </div>
                                        <div
                                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                            <h2 className="text-lg font-bold mb-4">BMI</h2>
                                            <div className="text-4xl font-bold text-blueGray-800">21.6</div>
                                        </div>
                                        <div
                                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                            <MealCalorieIntake />
                                        </div>
                                        <CalorieIntakeChart />
                                        <div
                                            className={"bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"}>
                                            <h2 className={"text-lg font-bold mb-4"}>Add new food</h2>

                                        </div>
                                    </div>
                                </Tab>
                                <Tab title="Blog Articles">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-3">
                                        <div
                                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                            <h2 className="text-lg font-bold mb-4">Blog Articles</h2>
                                            <ul>
                                                {blogArticles.map((article) => (
                                                    <a
                                                        key={article.id}
                                                        href={`/blog/${article.id}`}
                                                        title={article.title}
                                                        className="text-blue-500 hover:text-blue-700"
                                                    >
                                                        <li key={article.id} className="mb-2 flex items-center">
                                                            <svg
                                                                className="text-pink-500 w-4 h-4 mr-2"
                                                                fill="currentColor"
                                                                viewBox="0 0 20 20"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M16.707 6.293a1 1 0 010 1.414l-9 9a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L7 14.586l8.293-8.293a1 1 0 011.414 0z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                            {article.title}
                                                        </li>
                                                    </a>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </section>



        </main>
    );
}
