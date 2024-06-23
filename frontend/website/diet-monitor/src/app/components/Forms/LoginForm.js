"use client";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import User from "@/models/User";
import * as yup from "yup";
import { loginForm } from "@/data/formPlaceholder";

const schema = yup.object().shape({
    email: yup.string().email("Please enter a valid email address").required("Email is required"),
    password: yup.string().min(8).required("Password is required").matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])", "Password must contain at least 1 uppercase, 1 lowercase, 1 number and 1 special character"),
});

export default function LoginForm() {

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });

    // Toggle password visibility
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(!passwordShown);
    }


    const onSubmit = async (data) => {
        const userModel = new User();
        try {
            const loginDetail = {
                email: data.email,
                password: data.password
            }
            const response = await userModel.login(loginDetail);
            if (response.error === "false") {
                setSuccess(true);
                setError(false);
                window.location.href = "/profile";
            } else {
                setError(true);
                setSuccess(false)
                setMessage(response.message);
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
        <>
            <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor={loginForm.email.id}
                        >
                            {loginForm.email.label}
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id={loginForm.email.id}
                            type={loginForm.email.type}
                            placeholder={loginForm.email.placeholder}
                            name={loginForm.email.name}
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
                        <div className="relative">
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="password"
                                type={passwordShown ? "text" : "password"}
                                placeholder="******************"
                                name="password"
                                {...register("password")}
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisiblity}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600"
                            >
                                {passwordShown ? (
                                    <AiOutlineEye size={24}/>
                                ) : (
                                    <AiOutlineEyeInvisible size={24}/>
                                )}
                            </button>
                        </div>
                        {errors.password &&
                            <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full px-3">
                        <input
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type={loginForm.submitButton.type}
                            value={loginForm.submitButton.text}
                        />
                    </div>
                </div>
            </form>
            {error && <div
                className={"bg-red-200 border-t-4 border-red-600 rounded-b text-red-950 px-4 py-3 font-bold text-center"}>{message}</div>}
            {success && <div
                className={"bg-green-200 border-t-4 border-green-600 rounded-b text-green-950 px-4 py-3 font-bold text-center"}>{message}</div>}
        </>
    );
}