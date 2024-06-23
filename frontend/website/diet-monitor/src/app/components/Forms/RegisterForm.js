"use client"
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import User from "../../../models/User";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import CountrySelect from "@/app/components/Forms/CountrySelect";


const schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("Please enter a valid email address").required("Email is required"),
    phoneNumber: yup.string().matches(/^[0-9]+$/, "Phone number must contain only numbers").required("Phone number is required"),
    password: yup.string().min(8).required("Password is required").matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])", "Password must contain at least 1 uppercase, 1 lowercase, 1 number and 1 special character"),
    city: yup.string().required("City is required"),
    gender: yup.string().required("Gender is required"),
    dateOfBirth: yup.date().required("Date of birth is required"),
    terms: yup.boolean().oneOf([true], "You must agree to the terms and conditions"),
});

export default function RegisterForm() {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });

    const [passwordValid, setPasswordValid] = useState(false);

    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState("");

    const [country, setCountry] = useState("Sweden");

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    }

    const onSubmit = async (data) => {
        if (!passwordValid) {
            setError(true);
            setMessage("Password does not meet the requirements");
            return;
        }
        console.log(data);
        const birthDate = new Date(data.dateOfBirth).toISOString().split('T')[0];
        const user = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phoneNumber: data.phoneNumber,
            password: data.password,
            city: data.city,
            country: country,
            gender: data.gender,
            dateOfBirth: birthDate,
        };

        // check if country is set
        if (!country) {
            setError(true);
            setSuccess(false);
            setMessage("Country is required");
            return;
        }

        const userModel = new User();
        const response = await userModel.register(user);
        console.log(response);
        if (response.status === 201) {
            setSuccess(true);
            setError(false);
            setMessage("Registration successful");
        } else {
            setError(true);
            setSuccess(false);
            setMessage(response.message);
        }
    };

    const onCountryChange = (newCountry) => {
        setCountry(newCountry);
    }

    const checkPasswordRequirements = (e) => {
        const classNamesValid = "text-green-500 text-xs italic my-2";
        const classNamesInvalid = "text-gray-600 text-xs italic my-2";
        const password = e.target.value;
        const eightChar = document.getElementById("eight-char");
        const oneUpper = document.getElementById("one-upper");
        const oneLower = document.getElementById("one-lower");
        const oneNumber = document.getElementById("one-number");
        const oneSpecial = document.getElementById("one-special");
        if (password.length >= 8) {
            eightChar.className = classNamesValid;
        } else {
            eightChar.className = classNamesInvalid;
        }
        if (password.match(/[A-Z]/)) {
            oneUpper.className = classNamesValid;
        } else {
            oneUpper.className = classNamesInvalid;
        }
        if (password.match(/[a-z]/)) {
            oneLower.className = classNamesValid;
        } else {
            oneLower.className = classNamesInvalid;
        }
        if (password.match(/[0-9]/)) {
            oneNumber.className = classNamesValid;
        } else {
            oneNumber.className = classNamesInvalid;
        }
        if (password.match(/[!@#\$%\^&\*]/)) {
            oneSpecial.className = classNamesValid;
        } else {
            oneSpecial.className = classNamesInvalid;
        }
        // check if all requirements are met
        if (password.length >= 8 && password.match(/[A-Z]/) && password.match(/[a-z]/) && password.match(/[0-9]/) && password.match(/[!@#\$%\^&\*]/)) {
            setPasswordValid(true);
        } else {
            setPasswordValid(false);
        }
    }

    return (
        <div>
            <form className="w-full max-w-lg" id={"register-form"} onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="first-name">
                            First Name
                        </label>
                        <input
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${errors.firstName ? 'border-red-500' : ''}`}
                            id="first-name"
                            type="text"
                            placeholder="Jane"
                            {...register("firstName")}
                        />
                        {errors.firstName && <p className="text-red-500 text-xs italic">{errors.firstName.message}</p>}
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="last-name">
                            Last Name
                        </label>
                        <input
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${errors.lastName ? 'border-red-500' : ''}`}
                            id="last-name"
                            type="text"
                            placeholder="Doe"
                            {...register("lastName")}
                        />
                        {errors.lastName && <p className="text-red-500 text-xs italic">{errors.lastName.message}</p>}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="email">
                            E-mail
                        </label>
                        <input
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${errors.email ? 'border-red-500' : ''}`}
                            id="email"
                            type="email"
                            placeholder="jane.doe@example.com"
                            {...register("email")}
                        />
                        {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="phone-number">
                            Phone Number
                        </label>
                        <input
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${errors.phoneNumber ? 'border-red-500' : ''}`}
                            id="phone-number"
                            type="text"
                            placeholder="0701234567"
                            {...register("phoneNumber")}
                        />
                        {errors.phoneNumber &&
                            <p className="text-red-500 text-xs italic">{errors.phoneNumber.message}</p>}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="password"
                                type={passwordVisible ? "text" : "password"}
                                placeholder="******************"
                                name="password"
                                {...register("password")}
                                onChange={checkPasswordRequirements}
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600"
                            >
                                {passwordVisible ? (
                                    <AiOutlineEye size={24}/>
                                ) : (
                                    <AiOutlineEyeInvisible size={24}/>
                                )}
                            </button>
                        </div>
                        <ul id={"password-requirements"} className={"text-xs italic text-gray-600 list-none"}>
                            <li id={"eight-char"} className={"my-2"}>At least 8 characters</li>
                            <li id={"one-upper"} className={"my-2"}>At least 1 uppercase character</li>
                            <li id={"one-lower"} className={"my-2"}>At least 1 lowercase character</li>
                            <li id={"one-number"} className={"my-2"}>At least 1 number</li>
                            <li id={"one-special"} className={"my-2"}>At least 1 special character</li>
                        </ul>
                        {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="city">
                            City
                        </label>
                        <input
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${errors.city ? 'border-red-500' : ''}`}
                            id="city"
                            type="text"
                            placeholder="Stockholm"
                            {...register("city")}
                        />
                        {errors.city && <p className="text-red-500 text-xs italic">{errors.city.message}</p>}
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="country">
                            Country
                        </label>
                        <div className="relative">
                            <CountrySelect selectedCountry={country} onCountryChange={onCountryChange}/>
                            <div
                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20">
                                    <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="gender">
                            Gender
                        </label>
                        <div className="relative">
                            <select
                                id="gender"
                                className={`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray ${errors.gender ? 'border-red-500' : ''}`}
                                {...register("gender")}

                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="Other">Other</option>
                                <option value="Prefer not to say">Prefer not to say</option>
                            </select>
                            {errors.gender && <p className="text-red-500 text-xs">{errors.gender.message}</p>}
                            <div
                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20">
                                    <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="dateOfBirth">
                            Date of Birth
                        </label>
                        <input
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${errors.dateOfBirth ? 'border-red-500' : ''}`}
                            id="dateOfBirth"
                            type="date"
                            {...register("dateOfBirth")}
                        />
                        {errors.dateOfBirth &&
                            <p className="text-red-500 text-xs italic">{errors.dateOfBirth.message}</p>}
                    </div>
                </div>
                <div>
                    <input type="checkbox" id="terms" {...register("terms", {required: true})} />
                    <label htmlFor="terms">
                        {' '}
                        I agree to the <a href="#" className="text-blue-500">terms and conditions</a>
                    </label>
                    {errors.terms &&
                        <p className="text-red-500 text-xs italic">You must agree to the terms and conditions</p>}
                </div>
                <div className="flex flex-wrap -mx-3 mb-6 text-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Register
                    </button>
                </div>
                <hr/>
                <div className="my-2"/>
            </form>
            {error && <div
                className={"bg-red-200 border-t-4 border-red-600 rounded-b text-red-950 px-4 py-3 font-bold text-center"}>{message}</div>}
            {success && <div
                className={"bg-green-200 border-t-4 border-green-600 rounded-b text-green-950 px-4 py-3 font-bold text-center"}>{message}</div>}
        </div>
    );
}
