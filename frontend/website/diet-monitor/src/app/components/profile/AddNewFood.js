"use client";
import {useState} from "react";
import Food from "@/models/Food";
import Image from "next/image";
import Meal from "@/models/Meal";

export default function AddNewFood({mealType, mealDate}) {
    const [searchResults, setSearchResults] = useState({});
    const foodModel = new Food();
    const mealModel = new Meal();
    const [autocomplete, setAutocomplete] = useState([]);
    const [searchPhrase, setSearchPhrase] = useState("");
    const [autocompleteVisible, setAutocompleteVisible] = useState(false);

    const handleAutocomplete = async (search) => {
        if (search.length < 3) return;
        setAutocomplete(await foodModel.autocomplete(search));

    }

    const handleSearch = async (search, pageNumber = 1) => {
        if (pageNumber < 1) return;
        if (search.length < 3) return;
        const searchResults = await foodModel.search(search, pageNumber);
        const resultsWithAmount = searchResults.data.foods.map((food) => ({
            ...food,
            foodAmount: 1, // Initialize the foodAmount property
        }));
        setSearchResults({...searchResults.data, foods: resultsWithAmount});

    }

    const handleImage = (item) => {
        if (item.foodImages === undefined) return "https://via.placeholder.com/150";
        if (item.foodImages.length === 0) return "https://via.placeholder.com/150";
        return item.foodImages[0].url;
    }

    const handleAddFood = async (item) => {
        const {foodAmount, foodId, foodName, foodImages} = item;
        const meal = {
            userId: 1,
            mealType: mealType,
            day: mealDate,
            foods: [
                {
                    foodId: item.foodId,
                    quantity: parseInt(item.foodAmount)
                }
            ]
        }
        const result = await mealModel.createMeal(meal);
    }

    const renderPagination = () => {
        const {totalResults, pageNumber} = searchResults;
        const totalPages = Math.ceil(totalResults / 10); // Assuming 10 results per page
        const pageNumbers = [];

        // Determine the start and end page numbers
        let startPage = Math.max(1, pageNumber - 2);
        let endPage = Math.min(totalPages, pageNumber + 2);

        // Adjust the start and end page numbers if necessary
        if (pageNumber > 5) {
            startPage = pageNumber - 2;
        }
        if (pageNumber < totalPages - 5) {
            endPage = pageNumber + 2;
        }

        // Add the first page if necessary
        if (startPage > 1) {
            pageNumbers.push(1);
            if (startPage > 2) {
                pageNumbers.push("...");
            }
        }

        // Add the page numbers in the range
        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        // Add the last page if necessary
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pageNumbers.push("...");
            }
            pageNumbers.push(totalPages);
        }

        return (
            <div className="flex justify-center mt-4 border-t border-black pt-1">

                {pageNumbers.map((page, index) =>
                    typeof page === "number" ? (
                        <button
                            key={index}
                            className={`mx-2 py-2 px-4 rounded ${
                                page === pageNumber
                                    ? "bg-blue-700 text-white font-bold"
                                    : "bg-gray-200 text-gray-700"
                            }`}
                            onClick={() => handleSearch(searchPhrase, page)}
                        >
                            {page}
                        </button>
                    ) : (
                        <span key={index} className="mx-2 py-2 px-4">
                        {page}
                    </span>
                    )
                )}

            </div>
        );
    };


    return (
        <div className={"w-full my-2 min-h-96 p-4 rounded"}>
            <h1 className={"text-left text-large font-bold text-gray-800 mt-4 mb-4"}>Add new food to your {mealType} on {mealDate}</h1>
            <div className="flex flex-col w-full">
                <div className="flex w-full">
                    <input
                        className="flex-grow p-2 border border-gray-300 rounded-l"
                        type="text"
                        placeholder="Food Name, barcode, or description"
                        value={searchPhrase}
                        onChange={(e) => {
                            handleAutocomplete(e.target.value);
                            setSearchPhrase(e.target.value);
                            setAutocompleteVisible(true);
                        }}
                    />
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
                        onClick={() => {
                            handleSearch(searchPhrase);
                            setAutocompleteVisible(false);
                        }}
                    >
                        Search
                    </button>
                </div>
                <div>
                    {autocompleteVisible && (
                        <ul className="max-h-40 overflow-y-auto border border-gray-300 rounded mt-2">
                            {autocomplete.map((item, index) => (
                                <li
                                    key={index}
                                    className={"p-2 border-b border-gray-300 hover:bg-gray-200 cursor-pointer"}
                                    onClick={() => {
                                        setSearchPhrase(item);
                                        setAutocompleteVisible(false);
                                        handleSearch(item);
                                    }}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <h2 className="text-2xl text-black capitalize mt-4">
                    Search results for: {searchPhrase}
                </h2>
            </div>


            <div className="max-h-96 overflow-y-auto mt-4">

                {searchResults.foods && searchResults.foods.map((item, index) => (
                    <div key={index} className={"flex items-center border-b border-gray-300 p-2"}>
                        <div className={"w-1/6"}>
                            <Image
                                src={handleImage(item)}
                                alt={item.name}
                                width={150}
                                height={150}
                                className={"rounded"}
                            />
                        </div>
                        <div className={"w-5/6 mx-1"}>
                            <h2 className={"text-xl font-bold text-gray-800"}>{item.foodName}</h2>
                            <div className={"flex flex-row justify-around"}>
                                <select className={"p-2 border border-gray-300 rounded"}>
                                    {item.servings && item.servings.map((serving, index) => (
                                        <option key={index}
                                                value={serving.servingDescription}>{serving.servingDescription}</option>
                                    ))}
                                </select>

                                <div className={"flex items-center"}>
                                    <input
                                        className={"p-2 border border-gray-300 rounded max-w-20"}
                                        type="number"
                                        value={item.foodAmount}
                                        onChange={(e) => {
                                            const newAmount = e.target.value;
                                            setSearchResults({
                                                ...searchResults,
                                                foods: searchResults.foods.map((food) => {
                                                    if (food.foodId === item.foodId) {
                                                        return {...food, foodAmount: newAmount};
                                                    }
                                                    return food;
                                                }),
                                            });
                                        }}
                                    />
                                    <p className={"px-3"}>
                                        {item.servings[0].calories} KCal
                                    </p>
                                    <button
                                        className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"}
                                        onClick={() => handleAddFood(item)}
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={"my-2"}>
                <p>
                    Total Results: <strong>{searchResults.totalResults}</strong>
                </p>
            </div>
            {/* Pagination should only be shown when search results are back from server */}
            {searchResults.totalResults && renderPagination()}
        </div>
    );
}
