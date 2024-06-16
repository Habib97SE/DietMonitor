import RegisterForm from "@/app/components/Forms/RegisterForm";
import Image from "next/image";
import {FaMeta} from "react-icons/fa6";
import {FaGoogle} from "react-icons/fa";
import {FaApple} from "react-icons/fa";

// customize meta data for this page
export const metadata = {
    title: "Signup",
    description: "Signup Page",
};

export default function Signup() {
    return (
        <div>
            <header>
                <Image
                    src={"https://via.placeholder.com/1200x600"}
                    alt={"Header"}
                    width={1200}
                    height={600}
                />
            </header>
            <div className={"p-4 m-5 inline-block bg-gray-100 rounded"}>
                <h1 className={"text-5xl text-center"}>
                    Signup
                </h1>
                <p className={"text-2xl my-3"}>
                    Welcome to the signup page.
                </p>
                <RegisterForm/>
                {/* Add 3 buttons for signing up via Meta, Google and Apple */}
                <p className={"text-center text-2xl my-3"}>
                    Or sign up with
                </p>
                <div className={"flex justify-center space-x-4"}>
                    <button className={"bg-blue-500 p-5 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded"}>
                        <FaMeta/>
                    </button>
                    <button className={"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"}>
                        <FaGoogle/>
                    </button>
                    <button className={"bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"}>
                        <FaApple/>
                    </button>
                </div>
                <p className={"text-center font-light my-3"}>
                    If you already have an account, you can{" "} <a className={"border-b border-black"} href="/login">Login</a> here.
                </p>
            </div>

        </div>
    );
}