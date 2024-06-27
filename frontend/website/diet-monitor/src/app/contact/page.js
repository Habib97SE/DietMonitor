"use client";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { contactForm } from "@/data/formPlaceholder";

const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Please enter a valid email address").required("Email is required"),
    message: yup.string().required("Message is required"),
    agreement: yup.bool().oneOf([true], "You must agree to the terms"),
});

export default function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className={"flex flex-col items-center justify-center bg-gray-100 h-screen"}>
            <div
                className={"bg-white p-4 rounded shadow-lg m-4"}
            >
                <h1 className={"text-2xl font-bold text-center"}>Contact</h1>
                <p>Send us a message</p>
                <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col min-w-80"}>
                    <div className={"flex flex-col"}>
                        <label htmlFor={contactForm.name.id}>{contactForm.name.label}</label>
                        <input
                            type={contactForm.name.type}
                            id={contactForm.name.id}
                            className={`border border-gray-300 p-2 rounded ${errors.name ? "border-red-500" : "border-gray-300"}`}
                            placeholder={contactForm.name.placeholder}
                            {...register("name")}
                        />
                        {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                    </div>
                    <div className={"flex flex-col"}>
                        <label htmlFor={contactForm.email.id}>{contactForm.email.label}</label>
                        <input
                            type={contactForm.email.type}
                            id={contactForm.email.id}
                            className={`border border-gray-300 p-2 rounded ${errors.email ? "border-red-500" : "border-gray-300"}`}
                            placeholder={contactForm.email.placeholder}
                            {...register("email")}
                        />
                        {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                    </div>
                    <div className={"flex flex-col"}>
                        <label htmlFor={contactForm.message.id}>{contactForm.message.label}</label>
                        <textarea
                            id={contactForm.message.id}
                            className={`border border-gray-300 p-2 rounded ${errors.message ? "border-red-500" : "border-gray-300"}`}
                            placeholder={contactForm.message.placeholder}
                            {...register("message")}
                        />
                        {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
                    </div>
                    <div className={"flex flex-row items-center"}>
                        <input
                            type={contactForm.agreement.type}
                            id={contactForm.agreement.id}
                            className={`border border-gray-300 p-2 rounded ${errors.agreement ? "border-red-500" : "border-gray-300"}`}
                            {...register("agreement")}
                        />
                        <label className={"pl-2"}
                               htmlFor={contactForm.agreement.id}>{contactForm.agreement.label}</label>
                    </div>
                    {errors.agreement && <p className="text-red-500 text-xs">{errors.agreement.message}</p>}
                    <input type={contactForm.submitButton.type} value={contactForm.submitButton.text}
                           className={"bg-blue-500 text-white p-2 rounded mt-2 cursor-pointer"}/>
                </form>
            </div>
        </div>
    )
}
