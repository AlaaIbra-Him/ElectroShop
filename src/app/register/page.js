"use client";
import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        console.log("Register", { name, email, password });
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-6">
            <div className="bg-black border border-gray-700 rounded-xl shadow-md p-10 max-w-md w-full space-y-6">
                <h1 className="text-3xl font-bold text-white text-center">Register</h1>

                <form className="flex flex-col gap-4" onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
                        required
                    />
                    <input
                        type="password"
                        placeholder="confirm Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
                        required
                    />
                    <button
                        type="submit"
                        className="px-5 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300 font-semibold"
                    >
                        Register
                    </button>
                </form>

                <p className="text-gray-400 text-center">
                    Already have an account?{" "}
                    <Link href="/login" className="text-blue-400 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}
