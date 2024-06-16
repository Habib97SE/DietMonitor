import {FaGoogle, FaApple} from 'react-icons/fa';
import {FaMeta} from "react-icons/fa6";
import LoginForm from "@/app/components/Forms/LoginForm";




export default function Login() {



    return (
        <div className="lg:flex lg:items-center lg:justify-center lg:min-h-screen ">
            <div className="flex flex-col items-center justify-center bg-gray-100  rounded p-6 lg:w-1/2">
                <h1 className="text-3xl mb-6">Login</h1>
                <LoginForm />
                <hr/>
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
                    If you don't have an account, you can{" "} <a className={"border-b border-black "}
                                                                  href="/signup">Signup</a> here.
                </p>
            </div>

        </div>
    );
};

