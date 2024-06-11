import {Inter} from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Diet Monitor",
    description: "Monitor your diet and stay healthy.",
    favicon: "/favicon.ico",
    image: "/logo.png"
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <header>
            <nav className="flex items-center justify-between flex-wrap bg-gray-500 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">Diet Monitor</span>
                </div>
                <div className="block lg:hidden">
                    <button
                        className="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <Link href="/"
                              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-800 mr-4">
                            Home
                        </Link>
                        <Link href={"/features"}
                              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                            Features
                        </Link>
                        <Link href={"/about"}
                              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                            About
                        </Link>
                        <Link href={"/contact"}
                              className={"block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"}>
                            Contact
                        </Link>
                    </div>
                    <div>
                        <a href="#"
                           className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                        >
                            My account
                        </a>
                    </div>
                </div>
            </nav>
        </header>
        <main>
            {children}
        </main>
        <footer>
            <div className="flex items-center justify-center bg-gray-500 p-6">
                <p className="text-white">© 2021 Diet Monitor</p>
            </div>

        </footer>
        </body>
        </html>
    );
}
