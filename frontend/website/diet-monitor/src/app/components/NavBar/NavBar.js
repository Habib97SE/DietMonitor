"use client";
import Link from 'next/link';
import {useState} from 'react';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (

        <nav className="flex items-center justify-between flex-wrap bg-gray-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight hover:text-black "><Link href={"/"}>Diet Monitor</Link></span>
            </div>
            <div className="block lg:hidden">
                <button
                    onClick={toggleMenu}
                    className="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-white hover:border-white"
                >
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
            <div
                className={`${menuOpen ? 'block' : 'hidden'} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
                <div className="text-sm lg:flex-grow">
                    <Link href="/">
                            <span
                                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-800 mr-4">Home</span>
                    </Link>
                    <Link href="/features">
                            <span
                                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">Features</span>
                    </Link>
                    <Link href="/about">
                            <span
                                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">About</span>
                    </Link>
                    <Link href="/contact">
                            <span
                                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">Contact</span>
                    </Link>
                </div>
                <div>
                    <a
                        href="/signup"
                        className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                    >
                        My account
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
