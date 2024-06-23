"use client";
import React, {useState} from "react";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {changePassword} from "@/data/formPlaceholder";

const schema = yup.object().shape({
    oldPassword: yup.string().required("Old Password is required"),
    newPassword: yup.string().min(8).required("Password is required").matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])", "Password must contain at least 1 uppercase, 1 lowercase, 1 number and 1 special character"),
    confirmPassword: yup.string().required("Confirm Password is required").oneOf([yup.ref("newPassword"), null], "Passwords must match")
});

// input styles
const inputClassNames = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";

// input div styles
const inputDivClassNames = "flex flex-col text-left my-2";

// submit button styles
const submitButtonStyles = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline";

export default function () {
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState("");
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        if (data.newPassword !== data.confirmPassword) {
            setError(true);
            setMessage("Passwords do not match");
            return;
        }

        setError(false);
        setSuccess(false);
        setMessage("");

    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col w-full"}>
                <div className={inputDivClassNames}>
                    <label htmlFor={changePassword.oldPassword.id} className="text-blueGray-400">
                        {changePassword.oldPassword.label}</label>
                    <input
                        type={changePassword.oldPassword.type}
                        id={changePassword.oldPassword.id}
                        className={inputClassNames}
                        placeholder={changePassword.oldPassword.placeholder}
                        required={changePassword.oldPassword.required}
                        {...register(changePassword.oldPassword.name)}
                    />
                    {errors.oldPassword && <p className="text-red-500 text-xs italic">{errors.oldPassword.message}</p>}
                </div>
                <div className={inputDivClassNames}>
                    <label htmlFor={changePassword.newPassword.id} className="text-blueGray-400">{
                        changePassword.newPassword.label
                    }</label>
                    <input
                        type={changePassword.newPassword.type}
                        id={changePassword.newPassword.id}
                        className={inputClassNames}
                        placeholder={changePassword.newPassword.placeholder}
                        {...register(changePassword.newPassword.name)}
                    />
                    {errors.newPassword && <p className="text-red-500 text-xs italic">{errors.newPassword.message}</p>}
                </div>
                <div className={inputDivClassNames}>
                    <label htmlFor={changePassword.confirmPassword.id} className="text-blueGray-400">{
                        changePassword.confirmPassword.label
                    }</label>
                    <input
                        type={changePassword.confirmPassword.type}
                        id={changePassword.confirmPassword.id}
                        className={inputClassNames}
                        placeholder={changePassword.confirmPassword.placeholder}
                        {...register(changePassword.confirmPassword.name)}
                    />
                    {errors.confirmPassword &&
                        <p className="text-red-500 text-xs italic">{errors.confirmPassword.message}</p>}
                </div>
                <input
                    type={changePassword.submitButton.type}
                    value={changePassword.submitButton.text}
                    className={submitButtonStyles}
                />
            </form>
            {error && <p className="text-red-500">{message}</p>}
            {success && <p className="text-green-500">{message}</p>}
        </>
    );
}