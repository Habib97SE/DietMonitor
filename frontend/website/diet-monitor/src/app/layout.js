import {Inter} from "next/font/google";
import Link from "next/link";
import "./globals.css";
import "./components/NavBar/NavBar";
import NavBar from "@/app/components/NavBar/NavBar";
import Footer from "@/app/components/Footer";

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
            <NavBar/>
        </header>
        <main className={""}>
            {children}
        </main>
        <footer>
            <Footer/>
        </footer>
        </body>
        </html>
    );
}
