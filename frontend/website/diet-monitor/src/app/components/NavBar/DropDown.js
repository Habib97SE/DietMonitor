"use client";
import {useState, useEffect, useRef} from 'react';
import Link from "next/link";

export default function DropDown() {

    const [profileMenuOpen, setProfileMenuOpen] = useState(false);
    const [userLoggedIn, setUserLoggedIn] = useState(true);
    const toggleProfileMenu = () => {
        setProfileMenuOpen(!profileMenuOpen);
    };

    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setProfileMenuOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <div ref={dropdownRef}>
            {/* Create My Accout button which is also dropdown */}
            <button
                onClick={toggleProfileMenu}
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0">My
                Account
            </button>
            <ul className={`${profileMenuOpen ? 'block' : 'hidden'} absolute bg-gray-500 text-white mt-2 w-32 rounded-lg shadow-lg z-30`}>
                {userLoggedIn ? (
                    <>
                        <li>
                            <Link href="/profile">
                                <span className="block px-4 py-2 hover:bg-gray-700">Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/logout">
                                <span className="block px-4 py-2 hover:bg-gray-700">Logout</span>
                            </Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link href="/login">
                                <span className="block px-4 py-2 hover:bg-gray-700">Login</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/register">
                                <span className="block px-4 py-2 hover:bg-gray-700">Register</span>
                            </Link>
                        </li>
                    </>
                )}
            </ul>

        </div>
    );
}