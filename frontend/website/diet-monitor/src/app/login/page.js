"use client";
import React, {useState} from "react";
import {FaGoogle, FaApple} from 'react-icons/fa';
import {FaMeta} from "react-icons/fa6";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import User from "../../models/User";

const schema = yup.object().shape({
    email: yup.string().email("Please enter a valid email address").required("Email is required"),
    password: yup.string().min(8).required("Password is required").matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])", "Password must contain at least 1 uppercase, 1 lowercase, 1 number and 1 special character"),
});


export default function Login() {

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });


    const onSubmit = async (data) => {
        const userModel = new User();
        try {
            const loginDetail = {
                email: data.email,
                password: data.password
            }
            const response = await userModel.login(loginDetail);
            if (response.status === 200) {
                setSuccess(true);
                setError(false);
                setMessage("Login successful");
            } else {
                setError(true);
                setSuccess(false)
                setMessage(response.data.message);
            }
        } catch (error) {
            setError(true);
            setMessage(error.message);
        }
    }

    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState("");

    return (
        <div className="lg:flex lg:items-center lg:justify-center lg:min-h-screen ">
            <div className="flex flex-col items-center justify-center bg-gray-100  rounded p-6 lg:w-1/2">
                <h1 className="text-3xl mb-6">Login</h1>
                <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="email"
                                type="email"
                                placeholder="jane.doe@example.com"
                                name="email"
                                {...register("email")}
                            />
                            {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
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
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="password"
                                type="password"
                                placeholder="******************"
                                name="password"
                                {...register("password")}
                            />
                            {errors.password &&
                                <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full px-3">
                            <input
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                                value={"Login"}
                            />
                        </div>
                    </div>
                </form>
                {error && <div
                    className={"bg-red-200 border-t-4 border-red-600 rounded-b text-red-950 px-4 py-3 font-bold text-center"}>{message}</div>}
                {success && <div
                    className={"bg-green-200 border-t-4 border-green-600 rounded-b text-green-950 px-4 py-3 font-bold text-center"}>{message}</div>}
                <hr className="my-6"/>
                <p className="text-center text-2xl mb-6">Or login with</p>
                <div className="flex flex-wrap -mx-3 mb-2 justify-center">
                    <div className="flex justify-center space-x-4">
                        <button
                            className="bg-blue-500 p-5 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded">
                            <FaMeta/>
                        </button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            <FaGoogle/>
                        </button>
                        <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                            <FaApple/>
                        </button>
                    </div>
                </div>
                <p className={"my-3"}>
                    If you don't have an account, you can{" "} <a className={"border-b border-black "} href="/signup">Signup</a> here.
                </p>
            </div>

        </div>
    );
};

