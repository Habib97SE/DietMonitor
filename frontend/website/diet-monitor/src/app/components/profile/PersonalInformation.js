"use client";
import CountrySelect from "@/app/components/Forms/CountrySelect";
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import User from "@/models/User";

const schema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().email().required("Email is required"),
    phoneNumber: yup.string().required("Phone Number is required"),
    gender: yup.string().required("Gender is required"),
    dateOfBirth: yup.date().required("Date of Birth is required"),
    city: yup.string().required("City is required"),
    country: yup.string().required("Country is required"),
});

export default function PersonalInformation({userProfile, onUserDetailsChange}) {

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });

    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState("");
    const [userModel, setUserModel] = useState(new User());


    const inputClassNames = "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500";

    const onCountryChange = (newCountry) => {
        setUserDetails({...userDetails, country: newCountry})
        console.log(newCountry);

    }

    const [userDetails, setUserDetails] = useState({});

    const onsubmit = async (data) => {
        const updatedUser = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phoneNumber: data.phoneNumber,
            gender: data.gender,
            city: data.city,
            country: data.country,
            dateOfBirth: data.dateOfBirth

        }
        const result = await userModel.updateUser(updatedUser);
        if (result.error === "false") {
            setSuccess(true);
            setError(false);
            setMessage("User details updated successfully");
            return;
        }
        setSuccess(false);
        setError(true);
        setMessage("An error occurred while updating user details");
    }


    useEffect(() => {
        const fetchData = async () => {
            // fetch user data
            const user = new User();
            let userData = await user.getUser(1);
            userData = userData.data;
            // make first letter in country name uppercase
            const country = userData.country;
            if (country) {
                const firstLetter = country.charAt(0).toUpperCase();
                const rest = country.slice(1);
                userData.country = firstLetter + rest;
            }
            setUserDetails(userData);
            onUserDetailsChange(userData);
        }

        fetchData();


    }, []);

    return (
        <div>
            <h1>Personal Information</h1>
            <form className={"my-2 text-left"} onSubmit={handleSubmit(onsubmit)}>
                <div className={"flex flex-col"}>
                    <label htmlFor={"firstName"}>First Name</label>
                    <input
                        type={"text"}
                        id={"firstName"}
                        className={inputClassNames}
                        placeholder={"First Name"}
                        defaultValue={userDetails.firstName}
                    />
                </div>
                <div className={"flex flex-col"}>
                    <label htmlFor={"lastName"}>Last Name</label>
                    <input
                        type={"text"}
                        id={"lastName"}
                        className={inputClassNames}
                        placeholder={"Last Name"}
                        defaultValue={userDetails.lastName}
                    />
                </div>
                <div className={"flex flex-col"}>
                    <label htmlFor={"email"}>Email</label>
                    <input
                        type={"email"}
                        id={"email"}
                        className={inputClassNames}
                        placeholder={"Email"}
                        defaultValue={userDetails.email}
                    />
                </div>
                <div className={"flex flex-col"}>
                    <label htmlFor={"phoneNumber"}>Phone Number</label>
                    <input
                        type={"text"}
                        id={"phoneNumber"}
                        className={inputClassNames}
                        placeholder={"Phone Number"}
                        defaultValue={userDetails.phoneNumber}
                    />
                </div>
                <div className={"flex flex-col"}>
                    <label htmlFor={"gender"}>Gender</label>
                    <div className="relative">
                        <select
                            className={`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                        >
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                            <option>Prefer not to say</option>
                        </select>
                        <div
                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 20 20">
                                <path d="M5.5 7.5l5 5 5-5z"/>
                            </svg>
                        </div>
                    </div>

                </div>
                <div className={"flex flex-col"}>
                    <label htmlFor={"dateOfBirth"}>Date of Birth</label>
                    <input
                        type={"date"}
                        id={"dateOfBirth"}
                        className={inputClassNames}
                        defaultValue={userDetails.dateOfBirth}
                    />
                </div>
                <div className={"flex flex-col"}>
                    <label htmlFor={"city"}>City</label>
                    <input
                        type={"text"}
                        id={"city"}
                        className={inputClassNames}
                        placeholder={"City"}
                        defaultValue={userDetails.city}
                    />
                </div>
                <div className={"flex flex-col"}>
                    <CountrySelect onCountryChange={onCountryChange} selectedCountry={userDetails.country}/>
                </div>
                <div className={"flex flex-col my-2"}>
                    <button
                        className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"}>Update
                    </button>
                    {error && <p className="text-red-500 text-xs italic">{message}</p>}
                    {success && <p className="text-green-500 text-xs italic">{message}</p>}
                </div>
            </form>
        </div>
    );
}