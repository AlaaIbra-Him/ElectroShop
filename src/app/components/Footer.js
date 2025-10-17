"use client";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 py-12 ">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 ">

                <div className="flex flex-col space-y-2 ">
                    <h2 className="text-3xl font-bold text-white">ElectroShop</h2>
                    <p className="text-gray-400">
                        Your one-stop shop for the latest electronics.
                    </p>
                </div>

                {/* =============Links */}
                <div className="flex flex-col space-y-2">
                    <h3 className="font-semibold text-white text-lg">Quick Links</h3>
                    <Link href="/"><p className="hover:text-white cursor-pointer transition">Home</p></Link>
                    <Link href="/products"><p className="hover:text-white cursor-pointer transition">Products</p></Link>
                    <Link href="/about-us"><p className="hover:text-white cursor-pointer transition">About Us</p></Link>
                    <Link href="/contact"><p className="hover:text-white cursor-pointer transition">Contact</p></Link>
                </div>

                {/* Social============= */}
                <div className="flex flex-col space-y-5">
                    <h3 className="font-semibold text-white text-lg">Follow Us</h3>
                    <div className="flex gap-4 text-gray-400">
                        <a href="https://github.com/AlaaIbra-Him" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="hover:text-white cursor-pointer transition-colors duration-300" />
                        </a>
                        <a href="https:/www.linkedin.com/in/alaa-ibra-him" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className="hover:text-white cursor-pointer transition-colors duration-300" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100012606046722" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="hover:text-white cursor-pointer transition-colors duration-300" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-12 text-center text-gray-400 text-sm italic">
                &copy; 2025 ElectroShop <span className="text-blue-500 font-semibold">by Alaa Ibrahim</span>. All rights reserved.
            </div>

        </footer>
    );
}
