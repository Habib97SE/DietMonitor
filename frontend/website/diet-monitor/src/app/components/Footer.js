import Link from 'next/link';

export default function Footer() {


    return (
        <div className="flex justify-evenly items-center bg-gray-500 p-6">
            {/* add 2 col with menus and one newsletter*/}
            <div className="flex flex-col  items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight hover:text-black ">Diet Monitor</span>
                <nav className="flex items-center justify-between flex-wrap bg-gray-500 p-6">
                    <ul>
                        <li>
                            <Link href="/">
                                <span
                                    className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-800 mr-4">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/features">
                                <span
                                    className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">Features</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <span
                                    className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">About</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <span
                                    className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">Contact</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={"flex flex-col items-center flex-shrink-0 text-white mr-6"}>
                <span className="font-semibold text-xl tracking-tight hover:text-black ">Customer Support</span>
                <div className={"flex justify-center space-x-4"}>
                    <nav>
                        <ul>
                            <li>
                                <Link href="/faq">
                                    <span
                                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-800 mr-4">FAQ</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <span
                                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">Contact</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms">
                                    <span
                                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">Terms</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy">
                                    <span
                                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">Privacy</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="flex flex-col  items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight hover:text-black ">Newsletter</span>
                <form action="#">
                    <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                        <div className="relative w-full">
                            <label htmlFor="email"
                                   className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email
                                address</label>
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                            </div>
                            <input
                                className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Enter your email" type="email" id="email" required=""/>
                        </div>
                        <div>
                            <button type="submit"
                                    className="py-3 px-5 w-full text-sm font-medium text-center text-gray-900 rounded-lg border cursor-pointer bg-gray-50 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe
                            </button>
                        </div>
                    </div>
                    <div
                        className="mx-auto max-w-screen-sm text-sm text-left text-white newsletter-form-footer dark:text-gray-300">We
                        care about the protection of your data. <a href="#"
                                                                   className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read
                            our Privacy Policy</a>.
                    </div>
                </form>
            </div>
        </div>
    );
}