"use client";
import Link from "next/link";
import { useState } from "react";

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);
const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-blue-950 sticky top-0 z-50 border-b border-gray-700">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-white">
                    ElectroShop
                </Link>

                <button
                    onClick={toggleMenu}
                    className="text-white lg:hidden focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
                <div className="hidden lg:flex items-center gap-8">
                    <Link
                        href="/"
                        className="text-white hover:text-gray-400 transition-colors duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        href="/products"
                        className="text-white hover:text-gray-400 transition-colors duration-300"
                    >
                        Products
                    </Link>
                    <Link
                        href="/contact"
                        className="text-white hover:text-gray-400 transition-colors duration-300"
                    >
                        Contact
                    </Link>
                    <Link
                        href="/about-us"
                        className="text-white hover:text-gray-400 transition-colors duration-300"
                    >
                        About Us
                    </Link>
                </div>

                <div className="hidden lg:block">
                    <Link
                        href="/login"
                        className="px-5 py-2 bg-blue-800 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-300"
                    >
                        Login
                    </Link>
                </div>
            </div>


            {isOpen && (
                <div className="lg:hidden bg-blue-950 border-t border-gray-700">
                    <div className="flex flex-col space-y-2 p-4">
                        <Link
                            href="/"
                            onClick={toggleMenu}
                            className="text-white hover:text-gray-400 transition-colors duration-300 py-2 border-b border-blue-800"
                        >
                            Home
                        </Link>
                        <Link
                            href="/products"
                            onClick={toggleMenu}
                            className="text-white hover:text-gray-400 transition-colors duration-300 py-2 border-b border-blue-800"
                        >
                            Products
                        </Link>
                        <Link
                            href="/contact"
                            onClick={toggleMenu}
                            className="text-white hover:text-gray-400 transition-colors duration-300 py-2 border-b border-blue-800"
                        >
                            Contact
                        </Link>
                        <Link
                            href="/about-us"
                            onClick={toggleMenu}
                            className="text-white hover:text-gray-400 transition-colors duration-300 py-2 border-b border-blue-800"
                        >
                            About Us
                        </Link>
                        <Link
                            href="/login"
                            onClick={toggleMenu}
                            className="px-5 py-2 mt-4 text-center bg-blue-900 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-300"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}