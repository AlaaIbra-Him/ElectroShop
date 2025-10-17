"use client";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-blue-950 sticky top-0 z-50 border-b border-gray-700">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-white">
                    ElectroShop
                </Link>

                {/*=====Links-------------=== */}
                <div className="flex-1 flex justify-center gap-8">
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

                {/* Login==========*/}
                <div>
                    <Link
                        href="/login"
                        className="px-5 py-2 bg-blue-800 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-300"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
}
