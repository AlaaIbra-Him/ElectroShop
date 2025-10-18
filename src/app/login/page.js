"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { auth, signInWithGoogle } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            alert(`Welcome ${userCredential.user.displayName || "User"}!`);
            router.push("/");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-6">
            <div className="bg-black border border-gray-700 rounded-xl shadow-md p-10 max-w-md w-full space-y-6">
                <h1 className="text-3xl font-bold text-white text-center">Login</h1>

                <form className="flex flex-col gap-4" onSubmit={handleLogin}>
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
                    <button
                        type="submit"
                        className="px-5 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300 font-semibold"
                    >
                        Login
                    </button>
                </form>
                {/* ==================google-------- */}
                <button
                    type="button"
                    onClick={async () => {
                        try {
                            const user = await signInWithGoogle();
                            alert(`Welcome ${user.displayName}`);
                            router.push("/");
                        } catch (error) {
                            alert(error.message);
                        }
                    }}
                    className="w-full px-5 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg  font-semibold "
                >
                    Sign in with Google
                </button>

                {/* ================================ */}
                <p className="text-gray-400 text-center">
                    Don&apos;t have an account?{" "}
                    <Link href="/register" className="text-blue-400 hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
}
